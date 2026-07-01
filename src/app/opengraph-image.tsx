import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "FocusedEDU";
const LABEL = "K-12 Education Staffing";
const TAGLINE = "Our focus begins with you.";
const DOMAIN = "focusedu-staffing.com";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 70,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#060a1f",
        }}
      >
        {/* Top: dot + label */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 16,
              backgroundColor: "#24cb8c",
              marginRight: 16,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#24cb8c",
              textTransform: "uppercase",
            }}
          >
            {LABEL}
          </div>
        </div>

        {/* Middle: brand + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
            }}
          >
            {BRAND}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#9aa4bd",
              marginTop: 20,
            }}
          >
            {TAGLINE}
          </div>
        </div>

        {/* Bottom: domain + accent underline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: 90,
              height: 4,
              backgroundColor: "#24cb8c",
              marginBottom: 18,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#9aa4bd",
            }}
          >
            {DOMAIN}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
