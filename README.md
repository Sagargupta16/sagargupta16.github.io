# sagargupta.online

Root domain handler for [sagargupta.online](https://sagargupta.online) -- redirects to the [main portfolio](https://sagargupta.online/portfolio-react/).

## How It Works

```
sagargupta.online → instant redirect → sagargupta.online/portfolio-react/
```

Three-layer redirect strategy:
1. **JavaScript** (`redirect.js`) -- instant `window.location.replace()`
2. **Meta refresh** -- no-JS fallback via `<meta http-equiv="refresh">`
3. **Manual link** -- clickable button if both fail

The custom 404 page redirects to the portfolio after 5 seconds.

## SEO and Social

- Open Graph and Twitter Card meta tags with 1200x630 PNG preview
- JSON-LD structured data (Person schema with employer, university, social links)
- XML sitemap covering all 10 GitHub Pages sites
- robots.txt with sitemap reference
- Content Security Policy headers

## Files

```
index.html          Landing page with instant redirect
404.html            Branded 404 with delayed redirect
redirect.js         Shared redirect config (single source of truth)
style.css           Dark glassmorphism styling
og-image.png        Social media preview (1200x630)
favicon.svg         Browser favicon (SVG)
favicon.ico         Browser favicon (ICO fallback)
apple-touch-icon.png  iOS bookmark icon (180x180)
sitemap.xml         XML sitemap (10 URLs)
robots.txt          Crawler configuration
CNAME               Custom domain: sagargupta.online
```

## DNS Setup (GoDaddy)

**A Records** (root domain `@`):

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME** (`www`): `sagargupta16.github.io`

## Deployment

Push to `main` -- GitHub Pages deploys automatically. No build step.

## License

MIT
