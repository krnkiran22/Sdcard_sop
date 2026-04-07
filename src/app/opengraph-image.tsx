import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "SD Card Return — Packaging SOP: label fields, packing steps, and verification before handover";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

/** Social cover image — matches the SOP homepage theme (white / black / gray). */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#f9f9f9",
          padding: 56,
          paddingTop: 48,
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#888888",
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            }}
          >
            Standard Operating Procedure
          </div>
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#111111",
              letterSpacing: "-0.03em",
            }}
          >
            SD Card Return — Packaging SOP
          </div>
          <div
            style={{
              fontSize: 27,
              fontWeight: 400,
              color: "#444444",
              lineHeight: 1.35,
              maxWidth: 920,
            }}
          >
            Follow these steps before returning your SD card package. Label,
            pack, seal, and verify — same as the live page.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #e5e5e5",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 10,
                background: "#000000",
              }}
            />
            <div
              style={{
                fontSize: 19,
                color: "#444444",
                fontWeight: 500,
              }}
            >
              Label · Pack · Seal · Handover
            </div>
          </div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "0.14em",
            }}
          >
            SD CARD RETURN
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
