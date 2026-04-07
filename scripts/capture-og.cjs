/**
 * Captures the top of the home page (first sections) at 1200×630 for OG / Twitter.
 * Requires a running server: npm run build && PORT=3456 npm run start
 * Then: node scripts/capture-og.cjs
 */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const port = process.env.CAPTURE_PORT || "3456";
const url = `http://127.0.0.1:${port}`;
const outDir = path.join(__dirname, "..", "src", "app");
const ogPath = path.join(outDir, "opengraph-image.png");
const twPath = path.join(outDir, "twitter-image.png");

async function main() {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({
      viewport: { width: 1200, height: 900 },
      deviceScaleFactor: 2,
    });
    await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: ogPath,
      clip: { x: 0, y: 0, width: 1200, height: 630 },
      type: "png",
    });
    fs.copyFileSync(ogPath, twPath);
    console.log("Wrote", ogPath, "and", twPath);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
