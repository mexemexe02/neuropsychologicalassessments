// Generates the social share image and touch/manifest icons.
//
// Why: Facebook, LinkedIn, WhatsApp and iMessage do not render SVG
// `og:image` files. The old public/og-image.svg also carried the retired
// "Centre for Neuropsychological Assessments" brand. This script renders a
// 1200x630 PNG with the current brand using the same fonts as the site
// (Newsreader + Manrope from node_modules), plus PNG icons for
// apple-touch-icon and the web manifest.
//
// Run:  node scripts/make-og-image.mjs
// Output:
//   public/og-image.png          (1200x630 share card)
//   src/app/apple-icon.png       (180x180, picked up by Next automatically)
//   public/icons/icon-192.png    (manifest)
//   public/icons/icon-512.png    (manifest)
//
// No site copy is changed here — every string below already appears on
// the live site (brand name, tagline, descriptor, address city).

import { chromium } from "@playwright/test";
import { mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const fileUrl = (rel) => pathToFileURL(resolve(root, rel)).href;

// Fonts: same @fontsource-variable files globals.css imports.
const newsreader = fileUrl(
  "node_modules/@fontsource-variable/newsreader/files/newsreader-latin-wght-normal.woff2",
);
const manrope = fileUrl(
  "node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
);
// Inline the logo: page.setContent() runs on about:blank, which cannot load
// file:// images, so a data URI is the reliable way to embed the mark.
const logo = `data:image/png;base64,${readFileSync(
  resolve(root, "src/assets/logo-brain-tree.png"),
).toString("base64")}`;

// Palette copied from src/styles/base.css so the card matches the site.
const ink = "#1a1a1a";
const inkSoft = "#4a4a4a";
const taupe = "#8a7a68";
const taupeLight = "#f0ebe4";
const sage = "#9aab96";

const fontFace = `
  @font-face { font-family: "Newsreader Variable"; src: url("${newsreader}") format("woff2"); font-weight: 200 800; }
  @font-face { font-family: "Manrope Variable"; src: url("${manrope}") format("woff2"); font-weight: 200 800; }
`;

// 1200x630 share card. Text is the live brand + tagline + descriptor.
const ogHtml = `<!doctype html><html><head><meta charset="utf-8"><style>
  ${fontFace}
  html, body { margin: 0; width: 1200px; height: 630px; background: #ffffff; }
  .card { position: relative; width: 1200px; height: 630px; overflow: hidden;
    font-family: "Manrope Variable", sans-serif; color: ${ink}; }
  .wash { position: absolute; right: -180px; top: -220px; width: 720px; height: 720px;
    border-radius: 50%; background: ${taupeLight}; }
  .wash2 { position: absolute; right: -60px; bottom: -360px; width: 520px; height: 520px;
    border-radius: 50%; background: rgba(154, 171, 150, 0.22); }
  .bar { position: absolute; left: 0; top: 0; bottom: 0; width: 14px; background: ${taupe}; }
  .brand { position: absolute; left: 84px; top: 74px; display: flex; align-items: center; gap: 22px; }
  .brand img { width: 62px; height: 70px; object-fit: contain; }
  .brand strong { display: block; font-family: "Newsreader Variable", serif; font-weight: 500;
    font-size: 30px; line-height: 1.05; letter-spacing: -0.01em; }
  .brand small { display: block; font-size: 15px; font-weight: 600; letter-spacing: 0.16em;
    text-transform: uppercase; color: ${inkSoft}; margin-top: 8px; }
  h1 { position: absolute; left: 84px; top: 232px; margin: 0; width: 900px;
    font-family: "Newsreader Variable", serif; font-weight: 400; font-size: 84px;
    line-height: 1.02; letter-spacing: -0.03em; color: ${ink}; }
  .desc { position: absolute; left: 84px; top: 452px; margin: 0; width: 820px;
    font-size: 24px; line-height: 1.4; color: ${inkSoft}; }
  .meta { position: absolute; left: 84px; bottom: 54px; display: flex; gap: 14px; align-items: center;
    font-size: 18px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: ${taupe}; }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: ${sage}; }
</style></head><body>
  <div class="card">
    <div class="wash"></div><div class="wash2"></div><div class="bar"></div>
    <div class="brand">
      <img src="${logo}" alt="">
      <span><strong>Center for Neuropsychology<br>and Psychotherapy</strong></span>
    </div>
    <h1>Thoughtful care.<br>Clear next steps.</h1>
    <p class="desc">Neuropsychological assessments for children through older adulthood and evidence-based psychotherapy for adults.</p>
    <div class="meta"><span>Tiny, Ontario</span><span class="dot"></span><span>neuropsychologicalassessments.com</span></div>
  </div>
</body></html>`;

// Square icon: brain mark on white with breathing room (iOS adds its own mask).
const iconHtml = (size) => `<!doctype html><html><head><meta charset="utf-8"><style>
  html, body { margin: 0; width: ${size}px; height: ${size}px; background: #ffffff; }
  .wrap { width: ${size}px; height: ${size}px; display: flex; align-items: center; justify-content: center; }
  img { width: ${Math.round(size * 0.62)}px; height: ${Math.round(size * 0.7)}px; object-fit: contain; }
</style></head><body><div class="wrap"><img src="${logo}" alt=""></div></body></html>`;

async function shoot(page, html, width, height, path) {
  await page.setViewportSize({ width, height });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path, clip: { x: 0, y: 0, width, height } });
  console.log("wrote", path);
}

mkdirSync(resolve(root, "public/icons"), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });

await shoot(page, ogHtml, 1200, 630, "public/og-image.png");
await shoot(page, iconHtml(180), 180, 180, "src/app/apple-icon.png");
await shoot(page, iconHtml(192), 192, 192, "public/icons/icon-192.png");
await shoot(page, iconHtml(512), 512, 512, "public/icons/icon-512.png");

await browser.close();
