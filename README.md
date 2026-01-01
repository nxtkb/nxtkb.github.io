# NXTKB Official Website

[![Built with Hugo](https://img.shields.io/badge/Built%20with-Hugo-ff4088?logo=hugo)](https://gohugo.io/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

This repository contains the official website for **NXTKB** - Next Generation Keyboard, a cutting-edge split keyboard designed for comfort, ergonomics, and productivity. The website showcases our product, provides documentation, and serves as a hub for the NXTKB community.

NXTKB represents the future of keyboard design, featuring advanced ergonomics, customization, and cutting-edge technology to enhance your typing experience. This Hugo-powered site provides comprehensive information about our innovative split keyboard solution.

## Features

- **Responsive Design**: Works seamlessly across all devices
- **Documentation**: Comprehensive user guides and setup instructions
- **Product Showcase**: Detailed information about NXTKB features and variants
- **Multi-language Support**: English and Chinese content available
- **Fast Loading**: Optimized static site performance with Hugo
- **Search Functionality**: Easy navigation through content

## Prerequisites

- [Hugo](https://gohugo.io/) (extended version)
- Git
- Node.js (for development tools, if needed)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nxtkb.github.io.git
cd nxtkb.github.io
```

### 2. Initialize Git submodules (for the Docsy theme)

```bash
git submodule update --init --recursive
```

### 3. Install Go modules (if Hugo modules are used)

```bash
go mod tidy
```

### 4. Run the site locally

```bash
hugo server
```

The site will be available at `http://localhost:1313`

## Development

### Adding Content

- Content is written in Markdown format
- English content goes in `/content/en/`
- Chinese content goes in `/content/zh/`
- Use the `hugo new` command to create new content:

```bash
hugo new content/en/docs/new-post.md
```

### Building for Production

```bash
hugo --minify
```

## Technologies Used

- **[Hugo](https://gohugo.io/)**: Blazing fast static site generator
- **[Docsy Theme](https://www.docsy.dev/)**: Modern documentation theme
- **[GitHub Actions](https://docs.github.com/en/actions)**: CI/CD pipeline
- **[GitHub Pages](https://pages.github.com/)**: Hosting platform

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch. The deployment workflow includes:
1. Installing Hugo and dependencies
2. Checking out the repository with submodules
3. Building the site with optimizations
4. Deploying to the `gh-pages` branch

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

For support with the NXTKB product, please contact us at [your-email@example.com] or visit our [support page](support-link).

## About NXTKB

**NXTKB** (Next Generation Keyboard) is a revolutionary split keyboard designed to revolutionize the way you type. Our ergonomic design prioritizes your health, comfort, and productivity, offering:
- Advanced wireless technology
- Customizable key mapping
- Adjustable split angle
- Superior build quality
- Long battery life

Join the typing revolution with NXTKB - where comfort meets productivity!



