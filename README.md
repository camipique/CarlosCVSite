# CV site

One-page CV in English (`/`) and Portuguese (`/pt`). Edit the facts in [`src/content/cv.ts`](src/content/cv.ts). Edit navigation labels in [`src/i18n/ui.ts`](src/i18n/ui.ts).

Facts live in [`src/content/cv.ts`](src/content/cv.ts). While `cv.draft` is `true`, the page shows a draft notice and sends `noindex`.

## Local

Requires Node.js 22.

```sh
npm install
npm run dev
```

Open `/` and `/pt`. `npm run build` writes the static site to `dist/`. `npm run preview` serves that build.

## Cloudflare Pages

Connect this repo to Cloudflare Pages. Use Node.js 22.

- Build command: `npm run build`
- Output directory: `dist`

Before the first deploy, set `site` in [`astro.config.mjs`](astro.config.mjs) to the `*.pages.dev` address, or to a custom domain. That value is the origin for canonical and `hreflang` links.

A custom domain is a DNS change after the page looks right. Buying it through Cloudflare keeps DNS and the site in one place.

[`public/_headers`](public/_headers) is copied into the build and sets the response headers. The build adds a hash for each inline JSON-LD script so that policy still allows it.
