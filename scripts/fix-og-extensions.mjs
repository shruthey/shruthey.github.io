/**
 * Gives the exported OG images a .png extension.
 *
 * Next writes them as extensionless files (out/opengraph-image). GitHub Pages
 * derives Content-Type from the file extension, so it would serve those as
 * application/octet-stream and Slack / LinkedIn / iMessage would refuse to
 * render the preview. Rename the files and rewrite every reference to match.
 *
 * Runs automatically as part of `npm run build`.
 */
import { readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
const BASENAME = "opengraph-image";

/** Collect every file under dir, recursively. */
function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const files = walk(OUT);

// 1. Rename the extensionless image files.
const renamed = files.filter((f) => f.endsWith(`/${BASENAME}`));
for (const file of renamed) {
  renameSync(file, `${file}.png`);
}

if (renamed.length === 0) {
  console.warn("fix-og-extensions: no OG image files found — check the build.");
}

// 2. Rewrite references in every text asset that can carry a URL.
//    The query string Next appends (?<hash>) must survive: /opengraph-image?x
//    becomes /opengraph-image.png?x.
const TEXT_EXT = [".html", ".txt", ".xml", ".json", ".webmanifest", ".js"];
const pattern = new RegExp(`${BASENAME}(?!\\.png)`, "g");
let patched = 0;

for (const file of walk(OUT)) {
  if (!TEXT_EXT.some((ext) => file.endsWith(ext))) continue;

  const original = readFileSync(file, "utf8");
  if (!pattern.test(original)) continue;
  pattern.lastIndex = 0;

  writeFileSync(file, original.replace(pattern, `${BASENAME}.png`));
  patched += 1;
}

console.log(
  `fix-og-extensions: renamed ${renamed.length} image(s), patched ${patched} file(s).`,
);
