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

## Deploy on Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), import the repository.
3. Use default Next.js settings (framework preset: Next.js, build: `next build`, output: Next.js default).

### Environment (optional, recommended on Vercel)

Set **`NEXT_PUBLIC_SITE_URL`** to your production URL (e.g. `https://your-app.vercel.app`) so canonical URLs, Open Graph, `sitemap.xml`, and `robots.txt` use the correct domain. If unset, Vercel’s `VERCEL_URL` is used at build time.

SEO includes: metadata, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, dynamic **Open Graph** and **Twitter** images (`opengraph-image`, `twitter-image`), and JSON-LD `WebPage` structured data.
