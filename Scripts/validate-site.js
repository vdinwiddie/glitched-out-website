const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const sourceExtensions = new Set([".html", ".css", ".js"]);
const ignoredDirectories = new Set([".git", "Images", "Planning"]);

const htmlReferencePattern = /(?:src|href)="([^"]+)"/g;
const cssUrlPattern = /url\(["']?([^"')]+)["']?\)/g;
const jsPathPattern = /"((?:Images|CSS|JS|PhotoAlbums|Scripts|Releases)\/[^"?#]+\.[A-Za-z0-9]+)"/g;
const albumPattern = /folder:\s*"([^"]+)"\s*,\s*files:\s*\[([\s\S]*?)\]/g;
const photoAlbumsPattern = /const PHOTO_ALBUMS = \[([\s\S]*?)\];/;
const albumIdPattern = /id:\s*"([^"]+)"/g;

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

function collectReferences() {
    const references = [];
    const sourceFiles = walk(root);
    const siteScript = path.join(root, "JS", "site.js");
    const siteScriptText = fs.readFileSync(siteScript, "utf8");

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

    for (const match of siteScriptText.matchAll(albumPattern)) {
        const folder = match[1];
        const files = [...match[2].matchAll(/"([^"]+)"/g)].map((fileMatch) => fileMatch[1]);

        references.push({ sourceFile: siteScript, reference: folder });

        for (const fileName of files) {
            references.push({ sourceFile: siteScript, reference: `${folder}/${fileName}` });
        }
    }

    const photoAlbumsMatch = siteScriptText.match(photoAlbumsPattern);

    if (photoAlbumsMatch) {
        for (const match of photoAlbumsMatch[1].matchAll(albumIdPattern)) {
            references.push({
                sourceFile: siteScript,
                reference: `PhotoAlbums/${match[1]}.html`,
            });
        }
    }

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
