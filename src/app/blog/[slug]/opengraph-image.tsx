import { ImageResponse } from "next/og";
import { posts, getPost, categoryLabel } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "FocusedEDU";
const TAGLINE = "Our focus begins with you.";
const DOMAIN = "focusedu-staffing.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/** Clamp very long titles so they can't overflow the card. */
function clampTitle(title: string, max = 120) {
  if (title.length <= max) return title;
  return title.slice(0, max).trimEnd() + "…";
}

export default async function Image({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getPost(slug);

  // Fallback: no matching post → brand/tagline card.
  if (!post) {
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
              Insights
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
          <div style={{ display: "flex", fontSize: 26, color: "#9aa4bd" }}>
            {DOMAIN}
          </div>
        </div>
      ),
      { ...size }
    );
  }

  const category = categoryLabel(post.category);
  const title = clampTitle(post.title);

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
        {/* Top: category */}
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
            {category}
          </div>
        </div>

        {/* Middle: post title (clamped to ~3 lines) */}
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxHeight: 210,
            overflow: "hidden",
          }}
        >
          {title}
        </div>

        {/* Bottom: accent + brand row */}
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
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              {BRAND}
            </div>
            <div style={{ display: "flex", fontSize: 26, color: "#9aa4bd" }}>
              {DOMAIN}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
