import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";
import { projects } from "@/content/portfolio";

const project = projects.find((p) => p.slug === "pokedex")!;

// Required under `output: export` — image routes are dynamic by default.
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = `${project.name} — case study`;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Case study",
    title: project.name,
    subtitle: project.tagline,
  });
}
