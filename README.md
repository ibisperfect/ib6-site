# ib6.uk — Astro site

Static Astro site for IB6 Ltd. Zero runtime JS frameworks, no external fonts, deploys to Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Edit content

Almost all text lives in `src/data/site.ts` (services, approach steps, engagement models, email, LinkedIn, company number).
Page-specific copy is in `src/pages/*.astro`. Styles: `src/styles/global.css`.

**Before launch**
1. ~~Photo~~ done (public/images/illia.jpg / .webp).
2. Fill the `[ ]` placeholders on the About page.
3. Set `linkedin`, `booking` (Cal.com/Calendly) and `companyNumber` in `site.ts`.
4. Add a 1200×630 `public/og.png` for social previews.
5. Set up `hello@ib6.uk` (e.g. Cloudflare Email Routing → your Gmail).

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
4. After first deploy: Custom domains → add `ib6.uk` (and `www.ib6.uk` redirect). Since the domain is on Cloudflare, DNS is automatic.
