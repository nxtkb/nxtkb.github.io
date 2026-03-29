# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based static website for NXTKB (Next Keyboard), a project focused on building the next generation keyboard. The site is built using the Docsy theme and deployed to GitHub Pages.

## Key Technologies

- **Hugo**: Static site generator written in Go
- **Docsy**: Documentation theme for Hugo
- **GitHub Pages**: Hosting platform
- **GitHub Actions**: CI/CD pipeline
- **Markdown**: Content format
- **HTML/CSS/JavaScript**: Frontend technologies

## Repository Structure

```
├── config/_default/hugo.yaml    # Main Hugo configuration
├── content/en/                  # English content files
├── themes/                      # Hugo themes (using Docsy)
├── public/                      # Generated static files (do not edit directly)
├── .github/workflows/           # GitHub Actions workflows
├── go.mod, go.sum              # Go module dependencies
└── archetypes/                 # Default content templates
```

## Common Commands

### Development

1. **Serve site locally with hot reload**:
   ```bash
   hugo server
   ```

2. **Build static site**:
   ```bash
   hugo
   ```

3. **Build with minification for production**:
   ```bash
   hugo --minify
   ```

### Content Creation

1. **Create new content**:
   ```bash
   hugo new content/en/path/to/new/page.md
   ```

2. **Create new blog post**:
   ```bash
   hugo new content/en/blog/my-new-post.md
   ```

## Configuration

The main configuration file is `config/_default/hugo.yaml`. Key settings include:
- Site title and base URL
- Language settings (English and Chinese)
- Taxonomy configuration (tags, categories)
- Markup settings (Goldmark renderer)
- Theme imports (Docsy)

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/hugo.yml` and runs on:
- Pushes to the main branch
- Manual triggers from the Actions tab

The deployment process:
1. Installs Hugo CLI and Dart Sass
2. Checks out the repository with submodules
3. Installs Node.js dependencies
4. Builds the site with Hugo
5. Deploys to GitHub Pages

## Content Management

Content is written in Markdown and organized in the `content/` directory:
- English content: `content/en/`
- Chinese content: `content/zh/`

The homepage is defined in `content/en/_index.md` using Docsy's blocks/cover shortcode.

## Theme

This site uses the Docsy theme (github.com/google/docsy) which provides:
- Documentation-focused layouts
- Responsive design
- Multi-language support
- Search functionality
- Taxonomy support

Theme dependencies are managed through Hugo modules and installed during the build process.