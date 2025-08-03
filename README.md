# sagargupta16.github.io

This is the GitHub Pages repository for Sagar Gupta's personal website.

## 🌐 Live Site

Visit: [https://sagargupta16.github.io](https://sagargupta16.github.io)

## 📄 About

This repository serves as Sagar Gupta's portfolio website. The custom domain `sagargupta.live` is configured to point to this GitHub Pages site.

**Note**: If `sagargupta.live` is showing a parking page, you need to configure your DNS settings in GoDaddy (see instructions below).

## 🔧 Technical Details

- **Domain**: Custom domain configured via CNAME
- **Hosting**: GitHub Pages
- **Analytics**: Privacy-first analytics with SimpleAnalytics

### DNS Configuration for sagargupta.live

To point your GoDaddy domain to GitHub Pages:

1. **Log into GoDaddy DNS Management**
2. **Add these A records for `@` (root domain):**
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. **Add CNAME record:**
   - Name: `www`
   - Value: `sagargupta16.github.io`
4. **Remove any existing parking/forwarding records**
5. **Wait 24-48 hours for DNS propagation**

## 📁 Repository Structure

```text
├── index.html    # Main redirect page
├── CNAME        # Custom domain configuration
└── README.md    # This file
```

## 🚀 Deployment

This site is automatically deployed via GitHub Pages when changes are pushed to the main branch.