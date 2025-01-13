# Security Review Framework Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/security-sleuth-smythe/deploys)

This repository contains the documentation site for the Security Review Framework, built with Hugo and deployed on Netlify.

## 🚀 Quick Start

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.121.1 or later)
- Git
- Node.js (optional, for development tools)

### Local Development

1. Clone the repository:
```bash
git clone --recurse-submodules https://github.com/yourusername/security-review-hugo.git
cd security-review-hugo
```

2. Start the Hugo development server:
```bash
hugo server -D
```

3. View the site at http://localhost:1313/

### Building

To build the site:
```bash
hugo --minify
```

## 📁 Repository Structure

```
security-review-hugo/
├── archetypes/         # Content templates
├── assets/            # CSS, JS, images
├── content/           # Markdown content
├── layouts/           # Custom layouts
├── static/           # Static files
└── themes/           # Hugo themes
```

## 🔧 Configuration

- Site configuration is in `config.yaml`
- Netlify configuration is in `netlify.toml`
- GitHub Actions workflow in `.github/workflows/deploy.yml`

## 📝 Content Management

### Adding New Content

```bash
# Create a new page
hugo new content/section/page-name.md

# Create a new section
hugo new content/section/_index.md
```

### Content Sections

- Getting Started (`/content/getting-started/`)
- Process Guide (`/content/process/`)
- Templates (`/content/templates/`)

## 🎨 Customization

### Theme

We use the [PaperMod theme](https://github.com/adityatelange/hugo-PaperMod) with custom modifications in:
- `assets/css/extended/`
- `layouts/partials/extends/`

### Shortcodes

Custom shortcodes are available in `layouts/shortcodes/`:
- `workflow.html`: Security review workflow diagram

## 🚀 Deployment

### Netlify

The site is automatically deployed to Netlify when changes are pushed to the main branch.

Configuration:
1. Connected to `security-sleuth-smythe.netlify.app`
2. Builds triggered on push to main
3. Uses Hugo version specified in `netlify.toml`

### Environment Variables

Required Netlify environment variables:
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

## 🤝 Contributing

1. Fork the repository at https://github.com/octokas/security-sleuth-smythe
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- Create an issue in the repository
- Contact the security team
- Check the [documentation site](https://security-sleuth-smythe.netlify.app)
