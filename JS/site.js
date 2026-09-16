(function () {
    const SITE = {
        logo: "Images/Header/logo.svg",
        nav: [
            { label: "Discography", href: "discography.html", page: "discography" },
            { label: "Shows", href: "shows.html", page: "shows" },
            { label: "Photos & Videos", href: "photosandvideos.html", page: "photos" },
            { label: "About Us", href: "aboutus.html", page: "about" },
            { label: "Contact", href: "contact.html", page: "contact" },
        ],
        socialLinks: [
            {
                label: "Instagram",
                href: "https://www.instagram.com/glitched_out_chicago/",
                icon: "Images/Header/ig.svg",
            },
            {
                label: "Facebook",
                href: "https://www.facebook.com/glitchedoutchicago/",
                icon: "Images/Header/fb.svg",
            },
            {
                label: "Spotify",
                href: "https://open.spotify.com/artist/1mYSl7MkjKWYck7fI6GbTd?si=UxX4x3pMTj-hhR8BFOrp0A",
                icon: "Images/Header/sp.svg",
            },
            {
                label: "YouTube Music",
                href: "https://music.youtube.com/channel/UC3-S2ekIVpy3KFDjjneu7nQ?si=ELe-DXlDLmwOdExn",
                icon: "Images/Header/yt.svg",
            },
            {
                label: "Apple Music",
                href: "https://music.apple.com/us/artist/glitched-out/1728156264",
                icon: "Images/Header/am.svg",
            },
            {
                label: "Deezer",
                href: "https://link.deezer.com/s/34d7XraWxYM3XHabTfGpq",
                icon: "Images/Header/dz.svg",
            },
            {
                label: "Bandcamp",
                href: "https://glitchedout.bandcamp.com",
                icon: "Images/Header/bc.svg",
            },
        ],
    };

    const CONTENT_DATA_PATH = "Data/site-content.json";
    const AUDIO_SPEEDS = [0.75, 1, 1.25, 1.5, 2];
    let RELEASES = [];
    let SHOWS = [];
    let PHOTO_ALBUMS = [];
    let VIDEOS = [];
    let DISCOGRAPHY = [];

    const EXTRA_PHOTO_CARDS = [
        {
            title: "Feet Pics",
            meta: "Jan 1, 1990 | Feet, FT",
            href: "#",
            thumb: "Images/PhotosAndVideos/Photos/4.Feet.jpg",
            alt: "Feet Pics photo preview",
        },
        {
            title: "Feet Pics Cont",
            meta: "Feb 69, 1969 | ILove, FT",
            href: "#",
            thumb: "Images/PhotosAndVideos/Photos/5.Feet.jpg",
            alt: "Feet Pics Cont photo preview",
        },
        {
            title: "Feet Pics Cont Again",
            meta: "Cum cum, 19cum | Cum, CM",
            href: "#",
            thumb: "Images/PhotosAndVideos/Photos/6.Feet.jpg",
            alt: "Feet Pics Cont Again photo preview",
        },
        {
            title: "God I Fuckin Love Feet",
            meta: "feet feet, feet: Feet, FT",
            href: "#",
            thumb: "Images/PhotosAndVideos/Photos/7.Feet.jpg",
            alt: "God I Fuckin Love Feet photo preview",
        },
        {
            title: "Brb, Gonna Crank To These Feet",
            meta: "feeeeeeeeeeeeeeeet",
            href: "#",
            thumb: "Images/PhotosAndVideos/Photos/8.Feet.jpg",
            alt: "Brb, Gonna Crank To These Feet photo preview",
        }
    ];

    const ABOUT_MEMBERS = [
        {
            name: "Minyong Yu",
            instrument: "Guitar / Vocals",
            image: "Images/AboutUs/1.Minyong_Yu.jpg",
            bio: [
                "Min started playing in shitty punk bands during high school. He put his dreams on hold to pursue a career in medicine. Now that his professional life has reached a dead end he is dipping his toes back into punk rock debauchery. ",
                "He credits his musical tastes to when his sister introduced him to The Offspring seminal album \“Americana\” with such hits as \“pretty fly for a white guy\” and \“the kids aren\’t alright\”.",
                "When he’s not playing in Glitched Out, you can find him living the boring suburban dad life with his wife and kids."
            ],
        },
        {
            name: "Cody Michaels",
            instrument: "Lead Guitar / Backup Vocals",
            image: "Images/AboutUs/2.Cody_Michaels.jpg",
            bio: [
                "Cody loves balls. He loves them more than anything. He loves big, sloppy balls in and around his mouth. If you present yours, he'll suck the nads right out of your Scrotum. That's how he got his nickname, Cody \"Scrotum Suckin\' \" Michaels.",
                "He discovered his love for balls when he saw some and decided to gobble em up one day. Ever since, he's been a sucking absolute sack all day every day.",
                "On any given day you can find him throat deep, gnarfin' on a pair of sweaty danglers. His lifes' aspiration is to gargle on every sweaty, dangley, sloppy ball bag he can get his lips on."
            ],
        },
        {
            name: "Vinnie Dinwiddie",
            instrument: "Drums / Backup Vocals",
            image: "Images/AboutUs/3.Vinnie_Dinwiddie.jpg",
            bio: [
                "Vinnie started playing drums at six years old, developing an early connection to music that would eventually lead him to punk rock. In third grade, his brother Joe introduced him to \"There's a Problem\" by The Flatliners, and the song's fast, aggressive sound immediately hooked him.",
                "At 20, Vinnie toured across the United States and Canada with his first band, Voice Of Addiction, gaining extensive experience on the road and behind the kit. He later became the long-term drummer for Butchered, recording a full-length album Wax Pathetic during his time with the band.",
                "After years of playing in other projects, Vinnie decided to start something of his own, which eventually became Glitched Out. In addition to drums, he contributes heavily to the band's songwriting and helps keep things moving behind the scenes with booking, communication, social media, and other day-to-day band responsibilities.",
            ],
        },
    ];

    const entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;",
    };

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            return entityMap[character];
        });
    }

    function basePath() {
        return document.body.dataset.base || "";
    }

    function withBase(path) {
        if (/^(https?:|mailto:|#)/.test(path)) {
            return path;
        }

        return basePath() + path;
    }

    function arrayFromData(data, camelCaseKey, constantKey) {
        const value = data && (data[camelCaseKey] || data[constantKey]);

        return Array.isArray(value) ? value : [];
    }

    async function loadSiteContent() {
        const response = await fetch(withBase(CONTENT_DATA_PATH), { cache: "no-cache" });

        if (!response.ok) {
            throw new Error(`Could not load ${CONTENT_DATA_PATH}: ${response.status}`);
        }

        const data = await response.json();

        RELEASES = arrayFromData(data, "releases", "RELEASES");
        SHOWS = arrayFromData(data, "shows", "SHOWS");
        PHOTO_ALBUMS = arrayFromData(data, "photoAlbums", "PHOTO_ALBUMS");
        VIDEOS = arrayFromData(data, "videos", "VIDEOS");
        DISCOGRAPHY = arrayFromData(data, "discography", "DISCOGRAPHY");
    }

    function externalAttributes(href) {
        return /^https?:/.test(href) ? ' target="_blank" rel="noopener noreferrer"' : "";
    }

    function streamingButtonTemplate(link, extraClass) {
        const className = extraClass ? ` ${extraClass}` : "";

        return `<a class="button button-blue streaming-button${className}" href="${escapeHtml(link.href)}"${externalAttributes(link.href)}>${escapeHtml(link.label)}</a>`;
    }

    function releasePageHref(release) {
        return release.href || (release.folder ? `${release.folder}/index.html` : "#");
    }

    function releaseStreamingLinks(release) {
        return release && Array.isArray(release.streamingLinks) ? release.streamingLinks : [];
    }

    function renderLatestRelease() {
        const mount = document.querySelector("[data-latest-release]");
        const release = RELEASES[0];

        if (!mount || !release) {
            return;
        }

        const href = releasePageHref(release);
        const streamingLinks = releaseStreamingLinks(release).map(function (link) {
            return streamingButtonTemplate(link);
        }).join("");

        mount.innerHTML = [
            '<div class="release-artwork">',
            `<a class="release-artwork-link" href="${escapeHtml(withBase(href))}" aria-label="Open ${escapeHtml(release.title)} release page">`,
            `<img src="${escapeHtml(withBase(release.artwork))}" alt="${escapeHtml(release.artworkAlt)}">`,
            "</a>",
            "</div>",
            '<div class="release-info">',
            "<div>",
            `<h1 class="release-title">${escapeHtml(release.title)}</h1>`,
            `<p class="release-date">Out ${escapeHtml(release.date)}</p>`,
            "</div>",
            `<a class="button button-red button-large release-listen-button" href="${escapeHtml(withBase(href))}">Listen here</a>`,
            '<div class="listen-section">',
            "<h2>Or listen now on...</h2>",
            `<div class="streaming-links" data-streaming-links>${streamingLinks}</div>`,
            "</div>",
            `<a class="button button-red button-large release-cta" href="${escapeHtml(withBase("discography.html"))}">Check out our discography!</a>`,
            "</div>",
        ].join("");
    }

    function renderHeader() {
        const mount = document.querySelector("[data-site-header]");

        if (!mount) {
            return;
        }

        const currentPage = document.body.dataset.page || "";
        const navLinks = SITE.nav.map(function (item) {
            const isCurrent = item.page && item.page === currentPage;
            const current = isCurrent ? ' aria-current="page"' : "";

            return `<a href="${escapeHtml(withBase(item.href))}"${current}>${escapeHtml(item.label)}</a>`;
        }).join("");

        const socialLinks = SITE.socialLinks.map(function (item) {
            const href = escapeHtml(item.href);

            return [
                `<a href="${href}" aria-label="${escapeHtml(item.label)}"${externalAttributes(item.href)}>`,
                `<img src="${escapeHtml(withBase(item.icon))}" alt="">`,
                "</a>",
            ].join("");
        }).join("");

        mount.outerHTML = [
            '<header class="site-header">',
            `<a href="${escapeHtml(withBase("index.html"))}" class="logo" aria-label="Glitched Out home page">`,
            `<img src="${escapeHtml(withBase(SITE.logo))}" alt="Glitched Out">`,
            "</a>",
            '<button class="mobile-menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-navigation" data-mobile-menu-toggle>',
            '<span></span><span></span><span></span>',
            "</button>",
            '<nav class="main-nav" id="site-navigation" aria-label="Primary navigation" data-mobile-menu-panel>',
            navLinks,
            "</nav>",
            '<div class="header-actions" data-mobile-menu-panel>',
            `<div class="social-links">${socialLinks}</div>`,
            `<a href="${escapeHtml(withBase("shop.html"))}" class="button button-red shop-button"${currentPage === "shop" ? ' aria-current="page"' : ""}>SHOP</a>`,
            "</div>",
            "</header>",
        ].join("");
    }

    function initializeFloatingHeader() {
        const header = document.querySelector(".site-header");

        if (!header) {
            return;
        }

        const floatingClass = "site-header--floating";
        let isWaitingForFrame = false;

        function syncHeaderState() {
            const scrollTop = Math.max(
                window.scrollY,
                document.documentElement.scrollTop,
                document.body.scrollTop,
                0
            );

            header.classList.toggle(floatingClass, scrollTop > 0);
            isWaitingForFrame = false;
        }

        function requestSync() {
            if (isWaitingForFrame) {
                return;
            }

            isWaitingForFrame = true;
            window.requestAnimationFrame(syncHeaderState);
        }

        window.addEventListener("scroll", requestSync, { passive: true });
        window.addEventListener("resize", requestSync);
        syncHeaderState();
    }

    function initializeMobileMenu() {
        const header = document.querySelector(".site-header");

        if (!header) {
            return;
        }

        const toggle = header.querySelector("[data-mobile-menu-toggle]");
        const panels = Array.from(header.querySelectorAll("[data-mobile-menu-panel]"));

        if (!toggle || panels.length === 0) {
            return;
        }

        const desktopQuery = window.matchMedia("(min-width: 40.0625rem)");
        const openClass = "site-header--menu-open";

        function isOpen() {
            return header.classList.contains(openClass);
        }

        function syncPanelVisibility(menuIsOpen) {
            const shouldShowPanels = desktopQuery.matches || menuIsOpen;

            panels.forEach(function (panel) {
                if (shouldShowPanels) {
                    panel.removeAttribute("hidden");
                    panel.removeAttribute("aria-hidden");
                    return;
                }

                panel.setAttribute("hidden", "");
                panel.setAttribute("aria-hidden", "true");
            });
        }

        function setMenuState(menuIsOpen) {
            header.classList.toggle(openClass, menuIsOpen);
            toggle.setAttribute("aria-expanded", String(menuIsOpen));
            toggle.setAttribute(
                "aria-label",
                menuIsOpen ? "Close navigation menu" : "Open navigation menu"
            );
            syncPanelVisibility(menuIsOpen);
        }

        function syncLayoutMode() {
            if (desktopQuery.matches) {
                setMenuState(false);
                return;
            }

            syncPanelVisibility(isOpen());
        }

        toggle.addEventListener("click", function () {
            setMenuState(!isOpen());
        });

        header.querySelectorAll(".main-nav a, .header-actions a").forEach(function (link) {
            link.addEventListener("click", function () {
                if (!desktopQuery.matches) {
                    setMenuState(false);
                }
            });
        });

        window.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && isOpen()) {
                setMenuState(false);
                toggle.focus();
            }
        });

        if (typeof desktopQuery.addEventListener === "function") {
            desktopQuery.addEventListener("change", syncLayoutMode);
        } else {
            desktopQuery.addListener(syncLayoutMode);
        }

        syncLayoutMode();
    }

    function renderFooter() {
        const mount = document.querySelector("[data-site-footer]");

        if (mount) {
            mount.outerHTML = '<footer class="site-footer"><p>&copy; 2026 Glitched Out. All rights reserved.</p></footer>';
        }
    }

    function renderDividers() {
        document.querySelectorAll("[data-section-divider]").forEach(function (mount) {
            mount.outerHTML = '<div class="section-divider" aria-hidden="true"><span class="divider-zigzag"></span></div>';
        });
    }

    function renderStreamingLinks() {
        const mount = document.querySelector("[data-streaming-links]");

        if (!mount) {
            return;
        }

        mount.innerHTML = releaseStreamingLinks(RELEASES[0]).map(function (link) {
            return streamingButtonTemplate(link);
        }).join("");
    }

    function showTemplate(show) {
        return [
            '<div class="show">',
            '<div class="show-date-venue">',
            `<p class="show-date">${escapeHtml(show.date)}</p>`,
            `<p class="show-venue">${escapeHtml(show.venue)}</p>`,
            "</div>",
            `<div class="show-location"><p>${escapeHtml(show.location)}</p></div>`,
            '<div class="show-tickets">',
            `<a class="button button-blue" href="${escapeHtml(show.tickets)}"${externalAttributes(show.tickets)}>Tickets</a>`,
            "</div>",
            "</div>",
        ].join("");
    }

    function renderShows() {
        document.querySelectorAll("[data-shows]").forEach(function (mount) {
            const limit = Number(mount.dataset.limit) || SHOWS.length;
            mount.innerHTML = SHOWS.slice(0, limit).map(showTemplate).join("");
        });
    }

    function carouselTemplate(label, trackClass, cardsHtml) {
        return [
            '<div class="carousel">',
            `<button class="carousel-arrow carousel-arrow-left" type="button" aria-label="Scroll ${escapeHtml(label)} left" data-carousel-prev>&#10094;</button>`,
            `<div class="carousel-track ${trackClass}">`,
            cardsHtml,
            "</div>",
            `<button class="carousel-arrow carousel-arrow-right" type="button" aria-label="Scroll ${escapeHtml(label)} right" data-carousel-next>&#10095;</button>`,
            "</div>",
        ].join("");
    }

    function releaseCardTemplate(release) {
        const href = release.href || "#";

        return [
            `<a href="${escapeHtml(withBase(href))}" class="carousel-card release-card">`,
            `<img src="${escapeHtml(withBase(release.image))}" alt="${escapeHtml(release.alt)}">`,
            `<h3>${escapeHtml(release.title)}</h3>`,
            "</a>",
        ].join("");
    }

    function renderDiscography() {
        const mount = document.querySelector("[data-discography]");

        if (!mount) {
            return;
        }

        mount.innerHTML = DISCOGRAPHY.filter(function (section) {
            return Array.isArray(section.releases) && section.releases.length > 0;
        }).map(function (section) {
            const releases = section.releases.map(releaseCardTemplate).join("");

            return [
                '<section class="release-section">',
                `<h2 class="release-section-title">${escapeHtml(section.title)}</h2>`,
                carouselTemplate(section.scrollLabel, "release-track", releases),
                "</section>",
            ].join("");
        }).join("");
    }

    function photoCardTemplate(card) {
        return [
            `<a href="${escapeHtml(withBase(card.href))}" class="carousel-card photo-card">`,
            '<div class="photo-card-info">',
            `<h2>${escapeHtml(card.title)}</h2>`,
            `<p>${escapeHtml(card.meta)}</p>`,
            "</div>",
            `<img src="${escapeHtml(withBase(card.thumb))}" alt="${escapeHtml(card.alt)}">`,
            "</a>",
        ].join("");
    }

    function renderPhotoAlbums() {
        const mount = document.querySelector("[data-photo-albums]");

        if (!mount) {
            return;
        }

        const albumCards = PHOTO_ALBUMS.map(function (album) {
            return photoCardTemplate({
                title: album.title,
                meta: `${album.shortDate} | ${album.location}`,
                href: `PhotoAlbums/${album.id}.html`,
                thumb: album.thumb,
                alt: `${album.title} photo preview`,
            });
        });

        mount.innerHTML = albumCards.concat(EXTRA_PHOTO_CARDS.map(photoCardTemplate)).join("");
    }

    function videoCardTemplate(video) {
        return [
            `<a href="${escapeHtml(video.href)}" class="carousel-card video-card"${externalAttributes(video.href)}>`,
            '<div class="video-card-info">',
            `<h3>${escapeHtml(video.title)}</h3>`,
            `<p>${escapeHtml(video.meta)}</p>`,
            "</div>",
            '<div class="video-thumbnail">',
            `<img src="${escapeHtml(withBase(video.thumb))}" alt="${escapeHtml(video.alt)}">`,
            '<div class="video-play-button" aria-hidden="true">&#9658;</div>',
            "</div>",
            "</a>",
        ].join("");
    }

    function renderVideos() {
        const mount = document.querySelector("[data-videos]");

        if (mount) {
            mount.innerHTML = VIDEOS.map(videoCardTemplate).join("");
        }
    }

    function memberTemplate(member) {
        const paragraphs = member.bio.map(function (paragraph) {
            return `<p>${escapeHtml(paragraph)}</p>`;
        }).join("");

        return [
            '<article class="member-profile">',
            '<div class="member-intro">',
            '<div class="member-photo">',
            `<img src="${escapeHtml(withBase(member.image))}" alt="${escapeHtml(member.name)} of Glitched Out" loading="lazy" decoding="async">`,
            "</div>",
            `<h3 class="member-name">${escapeHtml(member.name)}</h3>`,
            `<p class="member-instrument"><em>${escapeHtml(member.instrument)}</em></p>`,
            "</div>",
            '<div class="member-bio bio-parchment">',
            paragraphs,
            "</div>",
            "</article>",
        ].join("");
    }

    function renderAboutMembers() {
        const mount = document.querySelector("[data-about-members]");

        if (mount) {
            mount.innerHTML = ABOUT_MEMBERS.map(memberTemplate).join("");
        }
    }

    function currentAlbum() {
        const albumId = document.body.dataset.album;

        return PHOTO_ALBUMS.find(function (album) {
            return album.id === albumId;
        });
    }

    function currentRelease() {
        const releaseId = document.body.dataset.release;

        return RELEASES.find(function (release) {
            return release.id === releaseId;
        });
    }

    function formatAudioTime(value) {
        if (!Number.isFinite(value) || value < 0) {
            return "0:00";
        }

        const totalSeconds = Math.floor(value);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = String(totalSeconds % 60).padStart(2, "0");

        return `${minutes}:${seconds}`;
    }

    function renderAlbumHero(album) {
        const mount = document.querySelector("[data-album-hero]");

        if (!mount || !album) {
            return;
        }

        mount.innerHTML = [
            '<div class="album-title-card">',
            `<h1 class="page-title album-title" id="album-title">${escapeHtml(album.title)}</h1>`,
            "</div>",
            '<div class="album-meta" aria-label="Album details">',
            `<p class="album-meta-item">${escapeHtml(album.location)}</p>`,
            `<p class="album-meta-item">${escapeHtml(album.date)}</p>`,
            "</div>",
        ].join("");
    }

    function renderAlbumGrid(album) {
        const mount = document.querySelector("[data-album-grid]");

        if (!mount || !album) {
            return;
        }

        const files = Array.isArray(album.files) ? album.files : [];

        mount.setAttribute("aria-label", `${album.title} photo gallery`);
        mount.innerHTML = files.map(function (fileName, index) {
            const imagePath = withBase(`${album.folder}/${fileName}`);
            const alt = `${album.title} photo ${index + 1}`;

            return [
                `<a class="album-photo" href="${escapeHtml(imagePath)}">`,
                `<img src="${escapeHtml(imagePath)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">`,
                "</a>",
            ].join("");
        }).join("");
    }

    function createPhotoLightbox() {
        const lightbox = document.createElement("div");

        lightbox.className = "photo-lightbox";
        lightbox.hidden = true;
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-modal", "true");
        lightbox.setAttribute("aria-label", "Photo preview");
        lightbox.setAttribute("data-photo-lightbox", "");
        lightbox.innerHTML = [
            '<button class="photo-lightbox-close" type="button" aria-label="Close photo preview" data-photo-lightbox-close>&times;</button>',
            '<img class="photo-lightbox-image" src="" alt="" data-photo-lightbox-image>',
        ].join("");

        document.body.appendChild(lightbox);

        return lightbox;
    }

    function initializePhotoLightbox() {
        const albumGrid = document.querySelector("[data-album-grid]");

        if (!albumGrid) {
            return;
        }

        const lightbox = document.querySelector("[data-photo-lightbox]") || createPhotoLightbox();
        const image = lightbox.querySelector("[data-photo-lightbox-image]");
        const closeButton = lightbox.querySelector("[data-photo-lightbox-close]");
        let previousFocus = null;

        if (!image || !closeButton) {
            return;
        }

        function closeLightbox() {
            lightbox.hidden = true;
            image.removeAttribute("src");
            image.alt = "";
            document.body.classList.remove("photo-lightbox-open");

            if (previousFocus && typeof previousFocus.focus === "function") {
                previousFocus.focus({ preventScroll: true });
            }
        }

        function openLightbox(link) {
            const thumbnail = link.querySelector("img");

            previousFocus = document.activeElement;
            image.src = link.href;
            image.alt = thumbnail ? thumbnail.alt : "Glitched Out photo";
            lightbox.hidden = false;
            document.body.classList.add("photo-lightbox-open");
            closeButton.focus({ preventScroll: true });
        }

        albumGrid.addEventListener("click", function (event) {
            const target = event.target;
            const link = target && typeof target.closest === "function"
                ? target.closest(".album-photo")
                : null;

            if (
                !link ||
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            event.preventDefault();
            openLightbox(link);
        });

        closeButton.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        window.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !lightbox.hidden) {
                closeLightbox();
            }
        });
    }

    function releaseTrackTemplate(release, track) {
        const audioPath = withBase(`${release.folder}/${track.file}`);
        const trackTitle = `${track.number}. ${track.title}`;
        const speedOptions = AUDIO_SPEEDS.map(function (speed) {
            const selected = speed === 1 ? " selected" : "";

            return `<option value="${speed}"${selected}>${speed}x</option>`;
        }).join("");

        return [
            '<article class="release-track-player">',
            '<div class="release-track-heading">',
            `<span>${escapeHtml(track.number)}</span>`,
            `<h2>${escapeHtml(track.title)}</h2>`,
            "</div>",
            '<div class="release-audio-player" data-audio-player>',
            '<audio class="release-audio-native" preload="metadata" controlslist="nodownload" data-audio>',
            `<source src="${escapeHtml(audioPath)}" type="audio/mpeg">`,
            `Your browser does not support embedded audio for ${escapeHtml(trackTitle)}.`,
            "</audio>",
            '<div class="release-audio-controls">',
            `<button class="release-audio-play" type="button" aria-label="Play ${escapeHtml(trackTitle)}" data-audio-play>`,
            '<span class="release-audio-play-icon" aria-hidden="true"></span>',
            "</button>",
            '<span class="release-audio-time" data-audio-current>0:00</span>',
            `<input class="release-audio-timeline" type="range" min="0" max="1000" step="1" value="0" aria-label="Seek ${escapeHtml(trackTitle)}" data-audio-timeline disabled>`,
            '<span class="release-audio-time" data-audio-duration>0:00</span>',
            '<div class="release-audio-menu" data-audio-menu>',
            `<button class="release-audio-menu-toggle" type="button" aria-label="Playback options for ${escapeHtml(trackTitle)}" aria-haspopup="true" aria-expanded="false" data-audio-menu-toggle>`,
            '<span class="release-audio-menu-dots" aria-hidden="true"><span></span><span></span><span></span></span>',
            "</button>",
            '<div class="release-audio-menu-popover" data-audio-menu-popover hidden>',
            '<label class="release-audio-speed-label">',
            "<span>Playback speed</span>",
            `<select data-audio-speed aria-label="Playback speed for ${escapeHtml(trackTitle)}">`,
            speedOptions,
            "</select>",
            "</label>",
            "</div>",
            "</div>",
            "</div>",
            "</div>",
            "</article>",
        ].join("");
    }

    function initializeAudioPlayers() {
        const players = Array.from(document.querySelectorAll("[data-audio-player]"));

        function closeMenus(exceptMenu) {
            players.forEach(function (player) {
                const menu = player.querySelector("[data-audio-menu]");

                if (!menu || menu === exceptMenu) {
                    return;
                }

                const toggle = menu.querySelector("[data-audio-menu-toggle]");
                const popover = menu.querySelector("[data-audio-menu-popover]");

                if (toggle && popover) {
                    toggle.setAttribute("aria-expanded", "false");
                    popover.hidden = true;
                }
            });
        }

        function pauseOtherPlayers(currentAudio) {
            players.forEach(function (player) {
                const audio = player.querySelector("[data-audio]");

                if (audio && audio !== currentAudio) {
                    audio.pause();
                }
            });
        }

        players.forEach(function (player) {
            const audio = player.querySelector("[data-audio]");
            const playButton = player.querySelector("[data-audio-play]");
            const timeline = player.querySelector("[data-audio-timeline]");
            const currentTime = player.querySelector("[data-audio-current]");
            const durationTime = player.querySelector("[data-audio-duration]");
            const menu = player.querySelector("[data-audio-menu]");
            const menuToggle = player.querySelector("[data-audio-menu-toggle]");
            const menuPopover = player.querySelector("[data-audio-menu-popover]");
            const speedSelect = player.querySelector("[data-audio-speed]");

            if (!audio || !playButton || !timeline || !currentTime || !durationTime) {
                return;
            }

            function durationIsReady() {
                return Number.isFinite(audio.duration) && audio.duration > 0;
            }

            function updateTimeline() {
                const duration = durationIsReady() ? audio.duration : 0;
                const progress = duration ? (audio.currentTime / duration) * 100 : 0;

                currentTime.textContent = formatAudioTime(audio.currentTime);
                durationTime.textContent = formatAudioTime(duration);
                timeline.disabled = !duration;
                timeline.value = duration ? String(Math.round((audio.currentTime / duration) * Number(timeline.max))) : "0";
                timeline.style.setProperty("--audio-progress", `${Math.min(progress, 100)}%`);
            }

            function seekFromTimeline() {
                if (!durationIsReady()) {
                    return;
                }

                const timelineMax = Number(timeline.max);
                const ratio = timelineMax ? Number(timeline.value) / timelineMax : 0;

                audio.currentTime = Math.min(Math.max(ratio, 0), 1) * audio.duration;
                updateTimeline();
            }

            function seekFromPointer(event) {
                if (timeline.disabled || !durationIsReady()) {
                    return;
                }

                const rect = timeline.getBoundingClientRect();
                const ratio = rect.width ? (event.clientX - rect.left) / rect.width : 0;
                const clampedRatio = Math.min(Math.max(ratio, 0), 1);

                event.preventDefault();
                timeline.focus({ preventScroll: true });
                timeline.value = String(Math.round(clampedRatio * Number(timeline.max)));
                seekFromTimeline();
            }

            function seekBySeconds(seconds) {
                if (!durationIsReady()) {
                    return;
                }

                audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), audio.duration);
                updateTimeline();
            }

            playButton.addEventListener("click", function () {
                if (audio.paused) {
                    pauseOtherPlayers(audio);
                    const playPromise = audio.play();

                    if (playPromise && typeof playPromise.catch === "function") {
                        playPromise.catch(function () {
                            audio.pause();
                        });
                    }
                } else {
                    audio.pause();
                }
            });

            audio.addEventListener("play", function () {
                playButton.classList.add("is-playing");
                playButton.setAttribute("aria-label", playButton.getAttribute("aria-label").replace(/^Play /, "Pause "));
            });

            audio.addEventListener("pause", function () {
                playButton.classList.remove("is-playing");
                playButton.setAttribute("aria-label", playButton.getAttribute("aria-label").replace(/^Pause /, "Play "));
            });

            audio.addEventListener("loadedmetadata", updateTimeline);
            audio.addEventListener("durationchange", updateTimeline);
            audio.addEventListener("timeupdate", updateTimeline);
            audio.addEventListener("ended", updateTimeline);
            timeline.addEventListener("input", seekFromTimeline);
            timeline.addEventListener("change", seekFromTimeline);
            timeline.addEventListener("pointerdown", function (event) {
                seekFromPointer(event);

                if (typeof timeline.setPointerCapture === "function") {
                    timeline.setPointerCapture(event.pointerId);
                }
            });
            timeline.addEventListener("pointermove", function (event) {
                if (event.buttons === 1) {
                    seekFromPointer(event);
                }
            });
            timeline.addEventListener("keydown", function (event) {
                if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                    event.preventDefault();
                    seekBySeconds(event.shiftKey ? -30 : -5);
                } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                    event.preventDefault();
                    seekBySeconds(event.shiftKey ? 30 : 5);
                } else if (event.key === "Home") {
                    event.preventDefault();
                    audio.currentTime = 0;
                    updateTimeline();
                } else if (event.key === "End" && durationIsReady()) {
                    event.preventDefault();
                    audio.currentTime = audio.duration;
                    updateTimeline();
                }
            });

            if (menu && menuToggle && menuPopover) {
                menuToggle.addEventListener("click", function () {
                    const willOpen = menuPopover.hidden;

                    closeMenus(menu);
                    menuPopover.hidden = !willOpen;
                    menuToggle.setAttribute("aria-expanded", String(willOpen));
                });
            }

            if (speedSelect) {
                speedSelect.addEventListener("change", function () {
                    audio.playbackRate = Number(speedSelect.value) || 1;
                });
            }

            updateTimeline();
        });

        document.addEventListener("click", function (event) {
            const target = event.target;
            const menu = target && typeof target.closest === "function"
                ? target.closest("[data-audio-menu]")
                : null;

            if (!menu) {
                closeMenus();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenus();
            }
        });
    }

    function renderReleasePage(release) {
        const mount = document.querySelector("[data-release-page]");

        if (!mount || !release) {
            return;
        }

        const tracks = (Array.isArray(release.tracks) ? release.tracks : []).map(function (track) {
            return releaseTrackTemplate(release, track);
        }).join("");
        const streamingLinks = releaseStreamingLinks(release).map(function (link) {
            return streamingButtonTemplate(link, "release-streaming-button");
        }).join("");

        mount.innerHTML = [
            '<header class="release-hero">',
            `<h1 class="release-page-title">${escapeHtml(release.title)}</h1>`,
            `<p class="release-page-date">Released ${escapeHtml(release.date)}</p>`,
            "</header>",
            '<div class="release-layout" data-release-layout>',
            '<div class="release-artwork-large">',
            `<img src="${escapeHtml(withBase(release.artwork))}" alt="${escapeHtml(release.artworkAlt)}" data-release-artwork>`,
            "</div>",
            '<section class="release-audio" aria-labelledby="release-audio-title" data-release-audio>',
            '<h2 id="release-audio-title" class="visually-hidden">Embedded Audio Tracks</h2>',
            tracks,
            "</section>",
            "</div>",
            '<section class="release-listen-more" aria-labelledby="release-listen-title">',
            '<h2 id="release-listen-title">Or listen on:</h2>',
            `<div class="release-streaming-links">${streamingLinks}</div>`,
            "</section>",
        ].join("");
    }

    function initializeCarousels() {
        document.querySelectorAll(".carousel").forEach(function (carousel) {
            const track = carousel.querySelector(".carousel-track");
            const previous = carousel.querySelector("[data-carousel-prev]");
            const next = carousel.querySelector("[data-carousel-next]");

            if (!track || !previous || !next) {
                return;
            }

            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            function scrollByCard(direction) {
                const card = track.querySelector(".carousel-card");
                const trackStyles = window.getComputedStyle(track);
                const gap = parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
                const cardWidth = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;

                track.scrollBy({
                    left: direction * cardWidth,
                    behavior: reducedMotion ? "auto" : "smooth",
                });
            }

            function updateControls() {
                const maxScroll = track.scrollWidth - track.clientWidth;
                const canScroll = maxScroll > 2;

                previous.hidden = !canScroll;
                next.hidden = !canScroll;
                previous.disabled = track.scrollLeft <= 2;
                next.disabled = track.scrollLeft >= maxScroll - 2;
            }

            previous.addEventListener("click", function () {
                scrollByCard(-1);
            });

            next.addEventListener("click", function () {
                scrollByCard(1);
            });

            track.addEventListener("scroll", function () {
                window.requestAnimationFrame(updateControls);
            }, { passive: true });

            window.addEventListener("resize", updateControls);
            updateControls();
        });
    }

    async function init() {
        renderHeader();
        initializeFloatingHeader();
        initializeMobileMenu();
        renderFooter();
        renderDividers();
        renderAboutMembers();

        try {
            await loadSiteContent();
        } catch (error) {
            console.error("Unable to load site content data.", error);
        }

        const album = currentAlbum();
        const release = currentRelease();

        renderLatestRelease();
        renderStreamingLinks();
        renderShows();
        renderDiscography();
        renderPhotoAlbums();
        renderVideos();
        renderAlbumHero(album);
        renderAlbumGrid(album);
        initializePhotoLightbox();
        renderReleasePage(release);
        initializeAudioPlayers();
        initializeCarousels();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
}());
