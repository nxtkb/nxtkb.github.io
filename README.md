# NXTKB Official Website

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-ff5d01?logo=astro)](https://astro.build/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

This repository contains the official website for **NXTKB**. The site is built with Astro, uses custom product pages for the marketing surface, and uses Starlight for documentation.

## Features

- **Product-first design**: Custom Astro pages for the homepage and product showcase
- **Documentation**: Starlight-powered user guides and setup instructions
- **Multi-language Support**: English root pages and Chinese pages under `/zh/`
- **Fast Loading**: Static Astro output deployed to GitHub Pages
- **Search Functionality**: Starlight documentation search

## Prerequisites

- Node.js 24
- npm

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Run the site locally

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Development

### Adding Content

- Product and landing pages live in `/src/pages/` and `/src/components/`
- Documentation lives in `/src/content/docs/docs/`
- Chinese documentation lives in `/src/content/docs/zh/docs/`
- Static files live in `/public/`

### Product images

Use `src/components/ProductImage.astro` with a canonical `/products/...` source
in both languages. It imports the existing public originals for Astro's
build-time optimization, generates responsive WebP files with hashed URLs, and
sets image dimensions. Existing direct links to the originals remain valid.

Use `variant="hero"` for the decorative image directly inside a `.hero` section;
it loads eagerly with high priority. Images further down the page load lazily.
Choose `card`, `feature` (default), `gallery`, or `detail` to match their display
size. The `detail` preset uses higher quality for images containing small legends.
Card, feature, and gallery variants are cropped at build time to their CSS display
ratios, so visitors do not download pixels that would be hidden by `object-fit`.

Product detail pages use `ProductLayout.astro`, which passes the product name, starting price, and
purchase link into the single site header. Keep the product header on one row;
secondary navigation remains available in the mobile menu.

Use `ProductVisual.astro` to frame the product area of an existing marketplace
poster. Its `crop` is `[x, y, width, height]` in original-image pixels; it uses CSS
clipping with Astro-optimized images and preserves the original files.

### Keyboard customization

`KeyboardConfigurator.astro` serves both Sweep and Sweep Pro. Update available
colors, switches, keycap colors, and preview-photo mappings in
`src/utils/keyboard-customization.ts`. Sweep Pro hardware starting prices and
matching purchase links live in `src/utils/sweep-pro-config.mjs`. The single header price follows the selected hardware configuration, including
the initial selection, on desktop and mobile. Keep appearance
selections separate from hardware pricing; do not imply unverified choices are
free. These selections are a preview and a copyable checklist, and must be
confirmed on Taobao. Missing color photos must remain explicitly labeled as
appearance references.

Internal links prefetch on hover; the main Products navigation link prefetches
when visible. Cloudflare Pages applies `public/_headers`: HTML routes have a short
freshness window, while fingerprinted Astro assets are immutable for one year.
These custom response headers are not applied by the GitHub Pages mirror.

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Technologies Used

- **[Astro](https://astro.build/)**: Content-driven static site framework
- **[Starlight](https://starlight.astro.build/)**: Documentation framework for Astro
- **[GitHub Actions](https://docs.github.com/en/actions)**: CI/CD pipeline
- **[GitHub Pages](https://pages.github.com/)**: Hosting platform

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch. The deployment workflow installs Node.js dependencies, runs the Astro build, uploads `dist/`, and deploys via GitHub Pages.

## Contributing

We welcome contributions from the community! If you'd like to help improve the website:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-features`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing features'`)
5. Push to the branch (`git push origin feature/amazing-features`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support with the NXTKB product, see the documentation or product pages.

