import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { platform, getPlatformProduct } from "@/lib/platform";
import { Button } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Steps } from "@/components/sections/Steps";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  PlatformHero,
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
      title: product.metaTitle,
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

      <PlatformHero
        eyebrow={`${platform.name} · ${product.covers}`}
        title={product.name}
        tagline={product.tagline}
        lede={product.lede}
        stats={product.stats}
      >
        <Button href={cta.href}>{cta.label}</Button>
        <Button href={secondaryCta.href} variant="ghost" className="border border-white/25">
          {secondaryCta.label}
        </Button>
      </PlatformHero>

      <ProblemSplit product={product} cta={cta} />

      <FeatureGrid
        eyebrow="Capabilities"
        eyebrowTone="light"
        title={product.inside.title}
        intro={product.inside.intro}
        items={product.inside.items}
        columns={product.inside.items.length === 4 ? 4 : 3}
        dark
        ctaLabel={cta.label}
        ctaHref={cta.href}
      />

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
        eyebrow={product.name}
        title={product.expect.title}
        intro={product.expect.intro}
        items={product.expect.items}
        columns={product.expect.items.length === 4 ? 2 : 3}
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
