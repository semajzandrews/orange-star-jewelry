import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Orange Star Jewelry, goldsmith's bench on Main Street, Orange NJ since 1997";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(900px 600px at 78% 18%, rgba(194,67,39,0.45), transparent 60%), #16100C",
          padding: "70px 76px",
          color: "#F3EBDD",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 30,
              height: 30,
              display: "flex",
              color: "#C8943B",
              fontSize: 30,
            }}
          >
            ✦
          </div>
          <div style={{ fontSize: 26, letterSpacing: 1, color: "#CDBEA8" }}>
            Orange Star Jewelry · Orange, NJ
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1,
              fontStyle: "italic",
              backgroundImage:
                "linear-gradient(180deg, #EBC477, #C8943B 55%, #C24327)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Gold takes its shape
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.05, color: "#F3EBDD" }}>
            by hand.
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#CDBEA8" }}>
          Custom rings, hand repair, and honest metal since 1997 · 283 Main St
        </div>
      </div>
    ),
    { ...size }
  );
}
