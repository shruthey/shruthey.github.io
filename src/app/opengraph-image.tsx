import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

// Required under `output: export` — image routes are dynamic by default.
export const dynamic = "force-static";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Shruthi Srinivas — Full Stack Software Developer";

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Full Stack Software Developer",
    title: "Hi, I'm Shruthi",
    subtitle:
      "Building scalable web applications with React, Vue, Node.js and .NET.",
  });
}
