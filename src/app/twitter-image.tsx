import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 15% 25%, rgba(120,53,15,0.28), rgba(255,255,255,0) 55%), radial-gradient(circle at 85% 75%, rgba(17,24,39,0.22), rgba(255,255,255,0) 55%), linear-gradient(135deg, #0c0a09, #1c1917)",
          color: "white",
          padding: 64,
          boxSizing: "border-box",
          position: "relative",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(245,158,11,0.25)",
            borderRadius: 0,
          }}
        />

        <div
          style={{ maxWidth: 980, display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -1,
              lineHeight: 1.05,
            }}
          >
            Psalms Coffee
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 40,
              fontWeight: 600,
              opacity: 0.95,
              lineHeight: 1.1,
            }}
          >
            Mobile Specialty Coffee Cart for Your Event
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 28,
              fontWeight: 400,
              opacity: 0.9,
            }}
          >
            Book weddings, corporate events, and celebrations
          </div>
        </div>
      </div>
    ),
    size
  );
}
