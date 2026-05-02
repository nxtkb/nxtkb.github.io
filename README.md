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

