# glitched-out-website

Official static website for Glitched Out.

## Structure

- `index.html`, `discography.html`, `shows.html`, `photosandvideos.html`, and `shop.html` are the main pages.
- `PhotoAlbums/` contains the thin album page shells.
- `Data/site-content.json` owns releases, shows, photo albums, videos, and discography data.
- `JS/site.js` owns shared templates, JSON data loading, header/footer rendering, album rendering, and carousel controls.
- `CSS/style.css` owns global styles and shared components.
- Page-specific CSS files in `CSS/` only cover page-specific layout and presentation.

## Preview

Because the shared content now loads from JSON, preview the site through a local static server instead of opening the HTML files directly.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## Validate

Run this after editing links, images, album data, or template paths:

```bash
node Scripts/validate-site.js
```
