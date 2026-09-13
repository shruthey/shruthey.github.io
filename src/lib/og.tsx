import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared link-preview image.
 *
 * ImageResponse supports only a flexbox CSS subset and no Tailwind — every
 * style here must be inline. Rendered to PNG at build time.
 */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#d8f651",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#55504a",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              fontSize: title.length > 22 ? 92 : 120,
              fontWeight: 900,
              color: "#12100e",
              lineHeight: 1,
              marginTop: 28,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 34,
              color: "#12100e",
              lineHeight: 1.35,
              marginTop: 30,
              maxWidth: 900,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "4px solid #12100e",
            paddingTop: 28,
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 700, color: "#12100e" }}>
            Shruthi Srinivas
          </div>
          <div style={{ fontSize: 26, color: "#55504a" }}>
            shruthey.github.io
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
