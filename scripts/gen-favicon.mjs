/**
 * Generates the favicon / app icons: a bold "SP" monogram in the site palette.
 *
 * A tab icon is ~16-32px, so it has to survive extreme downscaling: heavy
 * weight, tight crop, high contrast, no thin strokes. Run after changing the
 * mark or the palette:
 *
 *   npm install --no-save sharp
 *   node scripts/gen-favicon.mjs
 */
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const INK = "#12100e";
const LIME = "#d8f651";

/** Square monogram: lime ground, ink letters, slight inset so it reads round-cropped too. */
const svg = (size) => {
  const r = Math.round(size * 0.22);
  const fontSize = Math.round(size * 0.52);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="${LIME}"/>
  <text x="50%" y="50%" dy="0.02em"
        font-family="Helvetica, Arial, sans-serif"
        font-size="${fontSize}" font-weight="900"
        letter-spacing="${-fontSize * 0.04}"
        fill="${INK}"
        text-anchor="middle" dominant-baseline="central">SP</text>
</svg>`;
};

const targets = [
  ["src/app/icon.png", 64],
  ["src/app/apple-icon.png", 180],
  ["public/icon-192.png", 192],
  ["public/icon-512.png", 512],
];

for (const [path, size] of targets) {
  await sharp(Buffer.from(svg(size))).png().toFile(path);
  console.log(`wrote ${path} (${size}px)`);
}

// Multi-resolution .ico for legacy browser chrome.
const ico = await sharp(Buffer.from(svg(64))).resize(32, 32).png().toBuffer();
writeFileSync("public/favicon.ico", ico);
console.log("wrote public/favicon.ico (32px)");
