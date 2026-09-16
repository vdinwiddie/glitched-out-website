const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourceExtensions = new Set([".html", ".css", ".js"]);
const ignoredDirectories = new Set([".git", "Images", "Planning"]);
const siteDataPath = path.join(root, "Data", "site-content.json");

const htmlReferencePattern = /(?:src|href)="([^"]+)"/g;
const cssUrlPattern = /url\(["']?([^"')]+)["']?\)/g;
const jsPathPattern = /"((?:Images|CSS|JS|Data|PhotoAlbums|Scripts|Releases)\/[^"?#]+\.[A-Za-z0-9]+)"/g;

function walk(directory) {
    return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            return ignoredDirectories.has(entry.name) ? [] : walk(entryPath);
        }

        return sourceExtensions.has(path.extname(entry.name)) ? [entryPath] : [];
    });
}

function isExternal(reference) {
    return /^(?:https?:|mailto:|data:|#)/.test(reference);
}

function normalizeReference(reference) {
    return decodeURIComponent(reference.split("#", 1)[0].split("?", 1)[0]);
}

function resolveReference(sourceFile, reference) {
    const normalized = normalizeReference(reference);

    if (!normalized || isExternal(normalized)) {
        return null;
    }

    return normalized.startsWith("..")
        ? path.resolve(path.dirname(sourceFile), normalized)
        : path.resolve(root, normalized);
}

function staysInsideRoot(target) {
    const relative = path.relative(root, target);

    return relative && !relative.startsWith("..") && !path.isAbsolute(relative);
}

function existsWithExactCase(target) {
    const segments = path.relative(root, target).split(path.sep).filter(Boolean);
    let current = root;

    for (const segment of segments) {
        if (!fs.existsSync(current)) {
            return false;
        }

        const entries = fs.readdirSync(current);

        if (!entries.includes(segment)) {
            return false;
        }

        current = path.join(current, segment);
    }

    return true;
}

function readSiteData() {
    try {
        return JSON.parse(fs.readFileSync(siteDataPath, "utf8"));
    } catch (error) {
        console.error(`Could not read or parse ${path.relative(root, siteDataPath)}: ${error.message}`);
        process.exit(1);
    }
}

function arrayFromData(data, camelCaseKey, constantKey) {
    const value = data && (data[camelCaseKey] || data[constantKey]);

    return Array.isArray(value) ? value : [];
}

function addReference(references, sourceFile, reference) {
    if (typeof reference === "string" && reference.trim()) {
        references.push({ sourceFile, reference });
    }
}

function collectSiteDataReferences(references) {
    const data = readSiteData();
    const releases = arrayFromData(data, "releases", "RELEASES");
    const shows = arrayFromData(data, "shows", "SHOWS");
    const photoAlbums = arrayFromData(data, "photoAlbums", "PHOTO_ALBUMS");
    const videos = arrayFromData(data, "videos", "VIDEOS");
    const discography = arrayFromData(data, "discography", "DISCOGRAPHY");

    for (const release of releases) {
        addReference(references, siteDataPath, release.folder);
        addReference(references, siteDataPath, release.artwork);

        if (release.folder) {
            addReference(references, siteDataPath, `${release.folder}/index.html`);
        }

        for (const track of Array.isArray(release.tracks) ? release.tracks : []) {
            if (release.folder && track.file) {
                addReference(references, siteDataPath, `${release.folder}/${track.file}`);
            }
        }

        for (const link of Array.isArray(release.streamingLinks) ? release.streamingLinks : []) {
            addReference(references, siteDataPath, link.href);
        }
    }

    for (const show of shows) {
        addReference(references, siteDataPath, show.tickets);
    }

    for (const album of photoAlbums) {
        addReference(references, siteDataPath, album.thumb);
        addReference(references, siteDataPath, album.folder);

        if (album.id) {
            addReference(references, siteDataPath, `PhotoAlbums/${album.id}.html`);
        }

        for (const fileName of Array.isArray(album.files) ? album.files : []) {
            if (album.folder) {
                addReference(references, siteDataPath, `${album.folder}/${fileName}`);
            }
        }
    }

    for (const video of videos) {
        addReference(references, siteDataPath, video.href);
        addReference(references, siteDataPath, video.thumb);
    }

    for (const section of discography) {
        for (const release of Array.isArray(section.releases) ? section.releases : []) {
            addReference(references, siteDataPath, release.image);
            addReference(references, siteDataPath, release.href);
        }
    }
}

function collectReferences() {
    const references = [];
    const sourceFiles = walk(root);

    for (const sourceFile of sourceFiles) {
        const text = fs.readFileSync(sourceFile, "utf8");
        const extension = path.extname(sourceFile);

        const patterns = [];

        if (extension === ".html") {
            patterns.push(htmlReferencePattern);
        } else if (extension === ".css") {
            patterns.push(cssUrlPattern);
        } else if (extension === ".js") {
            patterns.push(jsPathPattern);
        }

        for (const pattern of patterns) {
            for (const match of text.matchAll(pattern)) {
                references.push({ sourceFile, reference: match[1] });
            }
        }
    }

    collectSiteDataReferences(references);

    return references;
}

const missing = [];
const references = collectReferences();

for (const { sourceFile, reference } of references) {
    const target = resolveReference(sourceFile, reference);

    if (!target || !staysInsideRoot(target)) {
        continue;
    }

    if (!existsWithExactCase(target)) {
        missing.push({
            sourceFile: path.relative(root, sourceFile),
            reference,
        });
    }
}

if (missing.length > 0) {
    for (const miss of missing) {
        console.error(`Missing reference in ${miss.sourceFile}: ${miss.reference}`);
    }

    process.exit(1);
}

console.log(`Checked ${references.length} references; no missing local files found.`);
