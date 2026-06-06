# Erastus HS — Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-erastushs.netlify.app-blue?style=for-the-badge)](https://erastushs.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Personal portfolio website for **Erastus Hendro Setiono**, a front-end developer based in Indonesia. Built from scratch with pure HTML, CSS, and JavaScript — **zero dependencies, zero frameworks**.

---

## Features

-   Fully responsive (mobile, tablet, desktop)
-   Dark theme with CSS custom properties (design tokens)
-   Dynamic project showcase rendered from JSON-like data
-   Typing effect (vanilla JS, no library)
-   Intersection Observer scroll spy and smooth scrolling
-   Local SVG icon sprite (no Font Awesome CDN)
-   WebP images with lazy loading, explicit dimensions (zero layout shift)
-   ARIA attributes, keyboard navigation, skip-link, focus indicators
-   Reduced-motion support for accessibility preferences
-   Open Graph / Twitter Card meta tags, canonical URLs, sitemap, robots.txt

---

## Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Grid, Flexbox, Clamp, Custom Properties) |
| Scripting | Vanilla JavaScript (ES5-compatible, no bundler) |
| Icons | Local SVG sprite (15 KB) |
| Images | WebP format |
| Hosting | Netlify |

---

## Project Structure

```
/
├── index.html                 Main portfolio page
├── Project/
│   └── index.html             All projects page
├── assets/
│   ├── css/
│   │   └── style.css          Complete stylesheet (929 lines)
│   ├── js/
│   │   └── script.js          All interactivity (318 lines)
│   ├── icons.svg              SVG icon sprite
│   ├── Resume-*.pdf           Downloadable CV
│   └── img/
│       ├── foto/              Profile photos
│       ├── logo/              Technology logos
│       └── Project/           Project screenshots
├── robots.txt                 SEO
├── sitemap.xml                SEO
├── TODO.md                    Development roadmap
└── README.md                  This file
```

---

## Setup & Usage

This is a **static site** — no build step, no `npm install`, no framework.

```bash
# Clone the repository
git clone https://github.com/erastushs/my-portfolio-website.git
cd my-portfolio-website

# Open in browser
open index.html   # macOS
# or
xdg-open index.html   # Linux
# or just double-click index.html on Windows
```

To deploy, upload all files to any static hosting (Netlify, Vercel, GitHub Pages, etc.).

---

## Screenshots

> Take screenshots of the live site and place them here for documentation.

**Desktop:**

*Add `docs/screenshot-desktop.webp` here*

**Mobile:**

*Add `docs/screenshot-mobile.webp` here*

---

## Accessibility

-   `lang="en"` on `<html>`
-   Skip-to-content link
-   `aria-label` on navigation and interactive elements
-   `aria-current="page"` on active nav link
-   `aria-expanded` on mobile menu toggle
-   `aria-hidden="true"` on decorative SVGs
-   All images have descriptive `alt` text
-   Visible focus indicators (`:focus-visible`)
-   `prefers-reduced-motion: reduce` media query
-   Keyboard-accessible mobile menu (Escape to close)

---

## Performance

-   All images served as WebP with explicit `width`/`height` (zero CLS)
-   `loading="lazy"` + `decoding="async"` on below-fold images
-   `fetchpriority="high"` on hero image
-   Single CSS file (929 lines), single JS file (318 lines)
-   No external fonts beyond Google Fonts (Outfit, with `preconnect`)
-   No frameworks, no JavaScript dependencies

---

## SEO

-   Unique `<title>` and `<meta description>` per page
-   Open Graph (`og:*`) and Twitter Card (`twitter:*`) meta tags
-   Canonical URLs
-   `robots.txt` and `sitemap.xml`
-   `rel="noopener noreferrer"` on all external `target="_blank"` links

---

## License

MIT © 2026 Erastus HS
