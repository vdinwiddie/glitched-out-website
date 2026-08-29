# glitched-out-website

Official static website for Glitched Out.

## Structure

- `index.html`, `discography.html`, `shows.html`, `photosandvideos.html`, and `shop.html` are the main pages.
- `PhotoAlbums/` contains the thin album page shells.
- `JS/site.js` owns shared templates, shared data, header/footer rendering, album rendering, and carousel controls.
- `CSS/style.css` owns global styles and shared components.
- Page-specific CSS files in `CSS/` only cover page-specific layout and presentation.

## Validate

Run this after editing links, images, album data, or template paths:

```bash
node Scripts/validate-site.js
```
