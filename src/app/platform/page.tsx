import type { Metadata } from "next";
import { platform } from "@/lib/platform";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { StageIndex, StageRow } from "@/components/platform/Sections";
import { breadcrumbSchema, faqSchema, suiteSchema } from "@/components/platform/schema";

export const metadata: Metadata = {
  title: platform.metaTitle,
  description: platform.metaDescription,
  alternates: { canonical: "/platform" },
  openGraph: {
    title: platform.h1,
    description: platform.metaDescription,
    url: `${platform.site}/platform`,
    type: "website",
    // Declaring openGraph replaces the inherited object, which drops the
    // root file-based image unless it is named here.
    images: ["/opengraph-image"],
  },
};

export default function PlatformPage() {
  return (
    <>
      <JsonLd data={suiteSchema(platform)} />
      <JsonLd data={faqSchema(platform.faqs)} />
      <JsonLd data={breadcrumbSchema(platform)} />

      <PageHero eyebrow={platform.eyebrow} title={platform.h1} subtitle={platform.lede}>
        <Button href={platform.cta.href}>{platform.cta.label}</Button>
        <Button
          href={platform.secondaryCta.href}
          variant="ghost"
          className="border border-white/25"
        >
          {platform.secondaryCta.label}
        </Button>
      </PageHero>

      <StageIndex suite={platform} />
      {platform.products.map((p, i) => (
        <StageRow key={p.slug} product={p} index={i} cta={platform.cta} />
      ))}

      <FAQ title="Questions about the platform." items={platform.faqs} />
      <CtaBand
        title={platform.closing.title}
        body={platform.closing.body}
        primary={platform.cta}
        secondary={platform.secondaryCta}
      />
    </>
  );
}
