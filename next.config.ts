import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — GitHub Pages serves files, not a Node server.
  output: "export",
  // The default image loader needs a server; unsupported under `output: export`.
  images: { unoptimized: true },
  // Emit /resume/index.html so deep links resolve without relying on
  // Pages' extensionless fallback.
  trailingSlash: true,
};

export default nextConfig;
