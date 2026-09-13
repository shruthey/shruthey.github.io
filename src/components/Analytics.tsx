import Script from "next/script";

/**
 * Cookieless, privacy-friendly analytics (Umami). Renders nothing unless both
 * env vars are set at build time, so the site builds fine before an account
 * exists — set NEXT_PUBLIC_UMAMI_SRC and NEXT_PUBLIC_UMAMI_WEBSITE_ID to
 * switch it on. No cookies means no consent banner.
 */
export function Analytics() {
  const src = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

  if (!src || !websiteId) return null;

  return (
    <Script src={src} data-website-id={websiteId} strategy="afterInteractive" />
  );
}
