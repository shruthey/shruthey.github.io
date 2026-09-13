import type { MetadataRoute } from "next";
import { projects, site } from "@/content/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${site.url}/`, lastModified: now, priority: 1 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}/`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
