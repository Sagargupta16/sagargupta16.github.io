# sagargupta16.github.io

GitHub Pages personal website with custom domain configuration, security headers, and automatic redirect to the main portfolio.

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=githubpages&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

## Live Site

- **Primary**: [sagargupta.online](https://sagargupta.online)
- **GitHub Pages**: [sagargupta16.github.io](https://sagargupta16.github.io) (redirects to primary)
- **Portfolio**: [sagargupta.online/portfolio-react](https://sagargupta.online/portfolio-react/)

## Overview

This repository serves as the GitHub Pages root for Sagar Gupta's personal domain. It handles custom domain configuration, security headers (Content Security Policy), SEO optimization, and automatic redirection to the main portfolio site.

## Features

- **Custom Domain** -- `sagargupta.online` via GoDaddy DNS configuration
- **Content Security Policy** -- CSP headers for security hardening
- **Custom 404 Page** -- Branded error page with navigation
- **Privacy-First Analytics** -- SimpleAnalytics integration (no cookies)
- **SEO Optimized** -- robots.txt and sitemap.xml configured
- **Auto Deploy** -- Pushes to `main` automatically deploy via GitHub Pages

## Repository Structure

```
sagargupta16.github.io/
├── index.html              # Landing page with instant redirect to portfolio
├── 404.html                # Custom 404 error page
├── style.css               # Shared glassmorphism styling
├── redirect.js             # Redirect configuration & utilities
├── favicon.svg             # Site favicon (SVG)
├── og-image.svg            # Social media preview image
├── CNAME                   # Custom domain (sagargupta.online)
├── robots.txt              # SEO robots configuration
├── sitemap.xml             # XML sitemap for search engines
├── .well-known/            # Security verification files
│   └── security.txt        # RFC 9116 security contact
├── .github/                # GitHub configuration
│   ├── CODEOWNERS          # Code ownership
│   ├── FUNDING.yml         # GitHub Sponsors
│   └── pull_request_template.md
├── SECURITY.md             # Security policy
├── renovate.json           # Automated dependency updates
└── .gitignore              # Git ignore rules
```

## DNS Configuration (GoDaddy)

To point a custom domain to GitHub Pages:

### A Records (Root Domain `@`)

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

### CNAME Record (www subdomain)

| Type | Name | Value |
|------|------|-------|
| CNAME | www | sagargupta16.github.io |

**Note**: DNS propagation takes 24-48 hours. Remove any existing parking/forwarding records.

## Deployment

This site deploys automatically via GitHub Pages when changes are pushed to the `main` branch. No build step required -- static files are served directly.

## License

MIT
