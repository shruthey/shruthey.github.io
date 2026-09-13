import type { MetadataRoute } from "next";
import { site } from "@/content/portfolio";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "shruthey",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#d8f651",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
