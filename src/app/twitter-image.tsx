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
            "radial-gradient(circle at 15% 25%, rgba(120,53,15,0.10), rgba(255,255,255,0) 55%), radial-gradient(circle at 85% 75%, rgba(17,24,39,0.06), rgba(255,255,255,0) 55%), linear-gradient(135deg, #faf7f2, #ffffff)",
          color: "#0c0a09",
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
            border: "1px solid rgba(120,53,15,0.18)",
            borderRadius: 0,
          }}
        />

        <div
          style={{
            width: "100%",
            maxWidth: 1040,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(120,53,15,0.18)",
              borderRadius: 26,
              padding: 30,
              boxShadow:
                "0 18px 40px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.6) inset",
            }}
          >
            <img
              src="https://psalmscoffee.vercel.app/images/psalms-coffee-logo.jpg"
              alt="Psalms Coffee"
              style={{
                width: 880,
                height: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>

          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "rgba(28, 25, 23, 0.82)",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            Mobile Specialty Coffee Cart for Weddings & Events
          </div>
        </div>
      </div>
    ),
    size
  );
}
