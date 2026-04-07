# Sdcard_sop

Single-page **SD Card Return – Packaging SOP** site (Next.js, TypeScript, Tailwind). For factory workers: label fields, packing steps, bad-reference photos, and reminders before handover.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

### Social preview image (Open Graph / Twitter)

The files `src/app/opengraph-image.png` and `src/app/twitter-image.png` are **screenshots** of the top of the home page (1200×630). Regenerate them after big layout changes:

```bash
npm run build
PORT=3456 npm run start   # in one terminal
CAPTURE_PORT=3456 npm run capture:og   # in another; then stop the server
```

## Deploy on Vercel

This repo includes **`vercel.json`** so Vercel treats the project as **Next.js** (`framework: "nextjs"`) and runs `npm install` + `npm run build`. Node **20+** is set via `.nvmrc` and `package.json` `engines`.

1. Import [github.com/krnkiran22/Sdcard_sop](https://github.com/krnkiran22/Sdcard_sop) in [Vercel New Project](https://vercel.com/new).
2. **Root Directory:** leave **empty** (repository root, where `package.json` lives). Do **not** set a subfolder unless the app moves.
3. **Framework Preset:** Next.js (auto-detected).
4. **Build Command:** `npm run build` (default; matches `vercel.json`).
5. **Output Directory:** leave **empty** — Next.js on Vercel must **not** use `out` or other static folders unless you configured `output: 'export'` (this app does not).
6. Deploy, then open the **production** URL from the dashboard (or wait a few seconds if the first preview iframe shows a transient error).

### If you see `404 NOT_FOUND` on Vercel

Usually the deployment settings or URL are wrong, not the repo:

- Confirm **Root Directory** is blank and **Output Directory** override is blank.
- Open the deployment **Domains** link (e.g. `*.vercel.app`) from the deployment detail page, not an old or copied URL.
- Redeploy after fixing settings: **Deployments → … → Redeploy**.

### Environment (optional, recommended on Vercel)

Set **`NEXT_PUBLIC_SITE_URL`** to your production URL (e.g. `https://your-app.vercel.app`) so canonical URLs, Open Graph, `sitemap.xml`, and `robots.txt` use the correct domain. If unset, Vercel’s `VERCEL_URL` is used at build time.

SEO includes: metadata, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, dynamic **Open Graph** and **Twitter** images (`opengraph-image`, `twitter-image`), and JSON-LD `WebPage` structured data.
