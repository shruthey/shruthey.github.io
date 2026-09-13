/**
 * Regenerates public/resume-preview.webp from public/shruthi-srinivas-resume.pdf.
 *
 * The /resume page shows this image rather than embedding the PDF: iframe/embed
 * PDF rendering is unreliable on iOS Safari, and an image works everywhere with
 * no runtime dependency.
 *
 * RUN THIS WHENEVER YOU REPLACE THE RESUME PDF:  npm run resume
 *
 * macOS only (uses qlmanage). If the PDF ever grows past one page, this needs
 * to render and stitch each page instead.
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";

const PDF = "public/shruthi-srinivas-resume.pdf";
const OUT = "public/resume-preview.webp";
const RENDER_WIDTH = 1700;

const work = mkdtempSync(join(tmpdir(), "resume-"));

try {
  execFileSync("qlmanage", ["-t", "-s", String(RENDER_WIDTH), "-o", work, PDF], {
    stdio: "ignore",
  });

  const rendered = readdirSync(work).find((f) => f.endsWith(".png"));
  if (!rendered) {
    throw new Error(`qlmanage produced no PNG for ${PDF}`);
  }

  const { size, width, height } = await sharp(join(work, rendered))
    .webp({ quality: 82 })
    .toFile(OUT);

  console.log(
    `Wrote ${OUT} — ${width}×${height}, ${Math.round(size / 1024)} KB`,
  );
} finally {
  rmSync(work, { recursive: true, force: true });
}
