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
  // The layout adds the brand after every title. Past 60 characters Google cuts
  // the title, so a long one goes out whole, without the brand.
  const title = g.metaTitle.length + 13 > 60 ? { absolute: g.metaTitle } : g.metaTitle;
  return {
    title,
    description: g.description,
    alternates: { canonical: `/resources/${g.slug}` },
    openGraph: {
      title: g.title,
      description: g.description,
      url: `/resources/${g.slug}`,
      type: "article",
      // The share image is this guide's own: opengraph-image.tsx beside this file.
    },
  };
}

export default async function GuidePage({ params }: Params) {
  const { guide: slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  return <GuideLayout guide={guide} more={leadershipLinks.filter((l) => l.href !== `/resources/${slug}`)} />;
}
