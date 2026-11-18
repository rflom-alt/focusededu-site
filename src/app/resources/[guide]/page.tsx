import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideLayout } from "@/components/guides/GuideLayout";
import { getGuide, guides, leadershipLinks } from "@/lib/guides";

type Params = { params: Promise<{ guide: string }> };

// Only the guides in src/lib/guides exist here; anything else is a 404, not a render.
export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ guide: g.data.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { guide: slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Guide" };
  const g = guide.data;
  return {
    title: g.metaTitle,
    description: g.description,
    alternates: { canonical: `/resources/${g.slug}` },
    openGraph: {
      title: g.title,
      description: g.description,
      url: `/resources/${g.slug}`,
      type: "article",
      // Declaring openGraph replaces the inherited object, which drops the
      // root file-based image unless it is named here.
      images: ["/opengraph-image"],
    },
  };
}

export default async function GuidePage({ params }: Params) {
  const { guide: slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideLayout guide={guide} more={leadershipLinks.filter((l) => l.href !== `/resources/${slug}`)} />;
}
