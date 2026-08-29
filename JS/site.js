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

    const STREAMING_LINKS = [
        {
            label: "SPOTIFY",
            href: "https://open.spotify.com/album/3zcXHCuI8jQVVwaZbR5Gif?si=99GseL34RWS-Nl380LI2Sw",
        },
        {
            label: "YOUTUBE MUSIC",
            href: "https://music.youtube.com/playlist?list=OLAK5uy_lQRNTzU4P6k5OGrBVamGhcd8qSyzkjK58&si=ETcBkUxjNF1R7TlM",
        },
        {
            label: "APPLE MUSIC",
            href: "https://music.apple.com/us/album/the-physical-properties-of-standing-still-single/6797996105",
        },
        {
            label: "DEEZER",
            href: "https://www.deezer.com/en/album/1046243252?host=0&deferredFl=1",
        },
        {
            label: "BANDCAMP",
            href: "https://glitchedout.bandcamp.com/album/the-physical-properties-of-standing-still",
        },
    ];

    const RELEASES = [
        {
            id: "the-physical-properties-of-standing-still",
            title: "The Physical Properties of Standing Still",
            date: "August 16, 2026",
            folder: "Releases/EP.ThePhysicalPropertiesOfStandingStill",
            artwork: "Releases/EP.ThePhysicalPropertiesOfStandingStill/AlbumArtwork.jpg",
            artworkAlt: "Album artwork for The Physical Properties of Standing Still",
            tracks: [
                { number: "01", title: "Momentum", file: "01.Momentum.mp3" },
                { number: "02", title: "Inertia", file: "02.Inertia.mp3" },
                { number: "03", title: "Gravity", file: "03.Gravity.mp3" },
            ],
            streamingLinks: [
                {
                    label: "SPOTIFY",
                    href: "https://open.spotify.com/album/3zcXHCuI8jQVVwaZbR5Gif?si=99GseL34RWS-Nl380LI2Sw",
                },
                {
                    label: "YOUTUBE MUSIC",
                    href: "https://music.youtube.com/playlist?list=OLAK5uy_lQRNTzU4P6k5OGrBVamGhcd8qSyzkjK58&si=ETcBkUxjNF1R7TlM",
                },
                {
                    label: "APPLE MUSIC",
                    href: "https://music.apple.com/us/album/the-physical-properties-of-standing-still-single/6797996105",
                },
                {
                    label: "DEEZER",
                    href: "https://www.deezer.com/en/album/1046243252?host=0&deferredFl=1",
                },
                {
                    label: "BANDCAMP",
                    href: "https://glitchedout.bandcamp.com/album/the-physical-properties-of-standing-still",
                },
            ],
        },
        {
            id: "covalence",
            title: "Covalence",
            date: "January 25, 2024",
            folder: "Releases/Single.Covalence",
            artwork: "Releases/Single.Covalence/AlbumArtwork.jpg",
            artworkAlt: "Album artwork for Covalence",
            tracks: [
                { number: "01", title: "Covalence", file: "01.Covalence.mp3" },
            ],
            streamingLinks: [
                {
                    label: "SPOTIFY",
                    href: "https://open.spotify.com/album/4uFMjfiM3I2fCeryfLe7vt?si=ts2C8480RzKEXlT8rIBkhQ",
                },
                {
                    label: "YOUTUBE MUSIC",
                    href: "https://music.youtube.com/playlist?list=OLAK5uy_kopHUfQWHWk_XCbBb5it0aVgapOXYKxps&si=bxb-Ux-fH_-P3BGS",
                },
                {
                    label: "APPLE MUSIC",
                    href: "https://music.apple.com/us/album/covalence-single/1728156782",
                },
                {
                    label: "DEEZER",
                    href: "https://www.deezer.com/en/album/541710022",
                },
                {
                    label: "BANDCAMP",
                    href: "https://glitchedout.bandcamp.com/track/covalence",
                },
            ],
        },
    ];

    const SHOWS = [
        {
            date: "October 17, 2026",
            venue: "Kombucha Club",
            location: "Chicago, IL",
            tickets: "https://www.instagram.com/kombuchaclubchicago/",
        },
        {
            date: "January 10, 2027",
            venue: "Liar's Club",
            location: "Chicago, IL",
            tickets: "https://www.instagram.com/liars.club/?hl=en",
        },
    ];

    const PHOTO_ALBUMS = [
        {
            id: "aug-11-2026.treehousestudios",
            title: "Treehouse Records",
            location: "Chicago, IL",
            date: "August 11, 2026",
            shortDate: "Aug 11, 2026",
            thumb: "Images/PhotosAndVideos/Photos/3.Treehouse.jpg",
            folder: "Images/PhotosAndVideos/PhotoAlbums/aug-11-2026.treehousestudios",
            files: [
                "764693098_922051160948254_6892072114945797864_n.jpg",
                "764906464_1057212387175145_4922298301549836118_n.jpg",
                "764924171_1723070042307311_3792170517671704877_n.jpg",
                "765007324_27747603358224215_3425960356106097984_n.jpg",
                "765262235_1080145507805392_984709488138807458_n.jpg",
                "765283664_28115539971404742_6994351705560322869_n.jpg",
                "765369369_1691368171968672_7182598977089757451_n.jpg",
                "765492919_27718166347846795_6985607351774260150_n.jpg",
                "765636907_1070389765460565_8433852343366156062_n.jpg",
                "765693863_2128391434737012_5381498151493150010_n.jpg",
                "765848710_1083998927385717_4795610692720437959_n.jpg",
                "766106210_1927929144567813_3622934159886826113_n.jpg",
                "767130154_2907223513009825_221062033940649439_n.jpg",
                "767755485_1277671887673913_3129803557719233005_n.jpg",
                "768246426_2265611874278925_345219678648096000_n.jpg",
                "768703852_2506640909810880_7557945356006283015_n.jpg",
                "769385138_4509280859207503_2812890985999726738_n.jpg",
                "769412140_1680593473396323_3879847362348903517_n.jpg",
                "769702441_1979070092798926_1245227238169640865_n.jpg",
                "770329152_1323973769546991_7215932493748798458_n.jpg",
            ],
        },
        {
            id: "may-29-2026.undergroundlounge",
            title: "Underground Lounge",
            location: "Chicago, IL",
            date: "May 29, 2026",
            shortDate: "May 29, 2026",
            thumb: "Images/PhotosAndVideos/Photos/2.UndergroundLounge.jpg",
            folder: "Images/PhotosAndVideos/PhotoAlbums/may-29-2026.undergroundlounge",
            files: [
                "IMG_20260529_221535.jpg",
                "IMG_20260529_221538.jpg",
                "IMG_20260529_221540.jpg",
                "IMG_20260529_221541.jpg",
                "IMG_20260529_221543.jpg",
                "IMG_20260529_221546.jpg",
                "IMG_20260529_221548.jpg",
                "received_974190248730284.jpg",
                "Screenshot_20260529_221244_Messages.jpg",
            ],
        },
        {
            id: "aug-29-2025.dumpsterphotos",
            title: "Dumpster Photos",
            location: "Des Plaines, IL",
            date: "August 29, 2025",
            shortDate: "Aug 29, 2025",
            thumb: "Images/PhotosAndVideos/Photos/1.Dumpster.png",
            folder: "Images/PhotosAndVideos/PhotoAlbums/aug-29-2025.dumpsterphotos",
            files: [
                "20250829_175454.jpg",
                "20250829_175520.jpg",
                "20250829_175634.jpg",
                "20250829_180119.jpg",
                "20250829_180302.jpg",
                "20250829_180321.jpg",
                "20250829_180605.jpg",
                "20250829_180613.jpg",
                "20250829_180627.jpg",
                "20250829_180644.jpg",
                "20250829_180652.jpg",
                "20250829_180838.jpg",
                "20250829_180845.jpg",
                "20250829_180854.jpg",
                "20250829_180919.jpg",
                "20250829_180930.jpg",
                "20250829_180942.jpg",
                "20250829_181008.jpg",
                "20250829_181017.jpg",
            ],
        },
    ];

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

    const VIDEOS = [
        {
            title: "Reggie's Music Joint",
            meta: "July 5, 2026 | Chicago, IL",
            href: "https://www.youtube.com/live/seMSH0fifdI?t=8475",
            thumb: "Images/PhotosAndVideos/Videos/1.Reggies.png",
            alt: "Glitched Out live performance preview",
        },
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

    const DISCOGRAPHY = [
        {
            title: "Full Lengths",
            scrollLabel: "full lengths",
            releases: [
                // { title: "Full Length 1", image: "Images/Discography/FullLengths/1.png", alt: "Full Length 1 cover" },
            ],
        },
        {
            title: "EPs",
            scrollLabel: "EPs",
            releases: [
                {
                    title: "The Physical Properties of Standing Still",
                    image: "Images/Discography/EPs/1.ThePhysicalPropertiesOfStandingStill.jpg",
                    alt: "The Physical Properties of Standing Still cover",
                    href: "Releases/EP.ThePhysicalPropertiesOfStandingStill/index.html",
                },
            ],
        },
        {
            title: "Singles",
            scrollLabel: "singles",
            releases: [
                {
                    title: "Covalence",
                    image: "Images/Discography/Singles/1.Covalence.jpg",
                    alt: "Covalence cover",
                    href: "Releases/Single.Covalence/index.html",
                },
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

    function externalAttributes(href) {
        return /^https?:/.test(href) ? ' target="_blank" rel="noopener noreferrer"' : "";
    }

    function streamingButtonTemplate(link, extraClass) {
        const className = extraClass ? ` ${extraClass}` : "";

        return `<a class="button button-blue streaming-button${className}" href="${escapeHtml(link.href)}"${externalAttributes(link.href)}>${escapeHtml(link.label)}</a>`;
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

        mount.innerHTML = STREAMING_LINKS.map(function (link) {
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

        mount.setAttribute("aria-label", `${album.title} photo gallery`);
        mount.innerHTML = album.files.map(function (fileName, index) {
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

        return [
            '<article class="release-track-player">',
            '<div class="release-track-heading">',
            `<span>${escapeHtml(track.number)}</span>`,
            `<h2>${escapeHtml(track.title)}</h2>`,
            "</div>",
            '<audio controls preload="metadata">',
            `<source src="${escapeHtml(audioPath)}" type="audio/mpeg">`,
            `Your browser does not support embedded audio for ${escapeHtml(trackTitle)}.`,
            "</audio>",
            "</article>",
        ].join("");
    }

    function renderReleasePage(release) {
        const mount = document.querySelector("[data-release-page]");

        if (!mount || !release) {
            return;
        }

        const tracks = release.tracks.map(function (track) {
            return releaseTrackTemplate(release, track);
        }).join("");
        const streamingLinks = release.streamingLinks.map(function (link) {
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

    function init() {
        const album = currentAlbum();
        const release = currentRelease();

        renderHeader();
        initializeFloatingHeader();
        initializeMobileMenu();
        renderFooter();
        renderDividers();
        renderStreamingLinks();
        renderShows();
        renderDiscography();
        renderPhotoAlbums();
        renderVideos();
        renderAboutMembers();
        renderAlbumHero(album);
        renderAlbumGrid(album);
        initializePhotoLightbox();
        renderReleasePage(release);
        initializeCarousels();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
}());
