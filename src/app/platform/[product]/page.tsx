import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { platform, getPlatformProduct } from "@/lib/platform";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Steps } from "@/components/sections/Steps";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  PlatformLinks,
  ProblemSplit,
  ProofBand,
  ScreenSection,
} from "@/components/platform/Sections";
import { breadcrumbSchema, faqSchema, softwareSchema } from "@/components/platform/schema";

type Params = { params: Promise<{ product: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return platform.products.map((p) => ({ product: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { product: slug } = await params;
  const product = getPlatformProduct(slug);
  if (!product) return { title: platform.name };
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: `/platform/${product.slug}` },
    openGraph: {
      title: product.h1,
      description: product.metaDescription,
      url: `${platform.site}/platform/${product.slug}`,
      type: "website",
      images: ["/opengraph-image"],
    },
  };
}

export default async function PlatformProductPage({ params }: Params) {
  const { product: slug } = await params;
  const product = getPlatformProduct(slug);
  if (!product) notFound();

  const { cta, secondaryCta } = platform;

  return (
    <>
      <JsonLd data={softwareSchema(platform, product)} />
      <JsonLd data={faqSchema(product.faqs)} />
      <JsonLd data={breadcrumbSchema(platform, product)} />

      <PageHero
        eyebrow={`${platform.name} · ${product.stage}`}
        title={product.h1}
        subtitle={product.lede}
      >
        <Button href={cta.href}>{cta.label}</Button>
        <Button href={secondaryCta.href} variant="ghost" className="border border-white/25">
          {secondaryCta.label}
        </Button>
      </PageHero>

      <ProblemSplit product={product} cta={cta} />

      {product.week && (
        <Steps
          eyebrow="How it works"
          title={product.week.title}
          intro={product.week.intro}
          steps={product.week.steps}
          ctaLabel={cta.label}
          ctaHref={cta.href}
        />
      )}

      {product.screen && <ScreenSection screen={product.screen} cta={cta} />}

      <FeatureGrid
        eyebrow="What you see"
        title={product.sees.title}
        intro={product.sees.intro}
        items={product.sees.items}
        columns={product.sees.items.length === 4 ? 2 : 3}
        ctaLabel={cta.label}
        ctaHref={cta.href}
      />

      <ProofBand product={product} cta={cta} />

      <FAQ title={`Questions about ${product.name}.`} items={product.faqs} />
      <PlatformLinks suite={platform} current={product.slug} />
      <CtaBand
        title={platform.closing.title}
        body={platform.closing.body}
        primary={cta}
        secondary={secondaryCta}
      />
    </>
  );
}
