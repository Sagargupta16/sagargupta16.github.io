# CLAUDE.md

> This file stacks on top of the workspace root at `C:\Code\GitHub\`:
> - Root [`CLAUDE.md`](../../CLAUDE.md) -- voice, rules, routing map, references, skills, slash commands, conventions.
> - Root [`MEMORY.md`](../../MEMORY.md) -- live facts across repos.
> - Root [`STATUS.md`](../../STATUS.md) -- live PR/CI/security dashboard.
> - [`.claude/resources/`](../../.claude/resources/README.md) -- deep reference for collaboration, workflow, git, OSS, debugging, voice.
>
> Read those first. The guidance below only adds **repo-specific context** -- it does not override anything in the root.

## Project

Root domain handler for sagargupta.online -- instantly redirects visitors to the main portfolio at sagargupta.online/portfolio-react/, plus SEO/social plumbing (Open Graph, JSON-LD Person schema, sitemap for all 10 GitHub Pages sites).

Public URL: https://sagargupta.online (GitHub Pages, custom domain via CNAME).

## Stack

- **Language**: Plain HTML / CSS / vanilla JS (ESM-free, no framework)
- **Framework**: none -- static files only
- **Database**: none
- **Package manager**: none (no package.json)
- **Deploy target**: GitHub Pages (repo root serves the domain root)

## Run

```
# no install, no build -- serve the folder with any static server
python -m http.server 8000
# then open http://localhost:8000
```

## Test

No test suite. Verify by loading index.html locally (should redirect instantly) and 404.html (should redirect after 5 s).

## Entry points

- `index.html` -- landing page; instant JS redirect + meta-refresh fallback + manual link
- `404.html` -- branded 404; redirects to portfolio after 5 seconds
- `redirect.js` -- shared redirect logic, driven by `data-redirect` attribute on `<html>` ("instant" or a number of seconds)

## Key files

- `redirect.js` -- `PORTFOLIO_URL` constant is the JS-side source of truth for the destination
- `CNAME` -- custom domain binding (`sagargupta.online`); deleting or renaming breaks the domain
- `sitemap.xml` -- covers all 10 GitHub Pages sites, not just this repo; update when a site launches or moves
- `style.css` -- dark glassmorphism styling shared by index and 404
- `CHANGELOG.md` -- semver changelog, kept current

## Gotchas

- The destination URL is NOT in one place despite redirect.js's claim: changing it also requires updating the meta-refresh, canonical link, and manual button in `index.html` (and `404.html`), plus `sitemap.xml`. Grep for `portfolio-react` across the repo.
- Strict CSP in a `<meta>` tag in both `index.html` and `404.html` -- any new external script/img/connect endpoint must be added there or the browser blocks it silently.
- Two analytics stacks are live: Google Analytics (`G-PFFMG7D8DP`) and SimpleAnalytics. Both are whitelisted in the CSP.
- No CI and no Renovate -- `.github/` and `renovate.json` were deliberately removed in v2.1.0 (2026-03-23). Do not re-add without asking.
- Deploy is push-to-`main`; there is no build step, so whatever is committed is live within minutes.

## Repo-specific rules

- Update `CHANGELOG.md` (semver) for any user-visible change.

## Build / Deploy

- Build: none -- files are served as-is
- Deploy: push to `main`; GitHub Pages publishes automatically
- Output: https://sagargupta.online/
