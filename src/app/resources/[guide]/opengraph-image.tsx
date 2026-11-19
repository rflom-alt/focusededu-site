import { ImageResponse } from "next/og";
import { getGuide, guides } from "@/lib/guides";

// The share card for one leadership guide: its own title, so a link posted on
// LinkedIn or pasted into a message says what the guide is.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Leadership guide";

export function generateStaticParams() {
  return guides.map((g) => ({ guide: g.data.slug }));
}

export default async function Image({ params }: { params: Promise<{ guide: string }> }) {
  const { guide: slug } = await params;
  const title = getGuide(slug)?.data.title ?? "Leadership guide";
  const fontSize = title.length > 70 ? 54 : title.length > 48 ? 62 : 72;
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
          backgroundImage: "radial-gradient(circle at 92% 0%, rgba(36,203,140,0.34), rgba(6,10,31,0) 46%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <div style={{ width: 16, height: 16, borderRadius: 16, backgroundColor: "#24cb8c", marginRight: 16 }} />
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, letterSpacing: 4, color: "#24cb8c", textTransform: "uppercase" }}>
            K-12 leadership guide
          </div>
        </div>
        <div style={{ display: "flex", fontSize, fontWeight: 800, color: "#ffffff", lineHeight: 1.08, letterSpacing: -1 }}>
          {title}
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ width: 90, height: 4, backgroundColor: "#24cb8c", marginBottom: 18 }} />
            <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#ffffff" }}>FocusedEDU</div>
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#9aa4bd" }}>focusedu-staffing.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
