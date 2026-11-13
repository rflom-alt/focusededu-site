import type { QA } from "@/components/sections/FAQ";
import type { PlatformProduct, PlatformSuite } from "./types";

/** Structured data for the platform pages. Text mirrors what the page shows. */

export function faqSchema(faqs: QA[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(suite: PlatformSuite, product?: PlatformProduct) {
  const crumbs = [
    { name: "Home", item: `${suite.site}/` },
    { name: suite.name, item: `${suite.site}/platform` },
    ...(product
      ? [{ name: product.name, item: `${suite.site}/platform/${product.slug}` }]
      : []),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };
}

export function softwareSchema(suite: PlatformSuite, product: PlatformProduct) {
  const url = `${suite.site}/platform/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: product.name,
    description: product.summary,
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    provider: { "@id": suite.providerId },
    audience: { "@type": "Audience", audienceType: suite.audience },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Included with every staffing engagement",
    },
  };
}

/** The suite as a list of its three products, for the overview page. */
export function suiteSchema(suite: PlatformSuite) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${suite.site}/platform#suite`,
    name: suite.name,
    description: suite.metaDescription,
    itemListElement: suite.products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      description: p.summary,
      url: `${suite.site}/platform/${p.slug}`,
    })),
  };
}
