import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { servicePages, getServicePage } from "@/lib/service-pages";
import { edu } from "@/lib/content";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";

type Params = { params: Promise<{ service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ service: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) return { title: "Staffing Services" };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: "website",
      images: [page.photo],
    },
  };
}

export default async function ServicePageRoute({ params }: Params) {
  const { service } = await params;
  const page = getServicePage(service);
  if (!page) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${page.h1} — FocusedEDU`,
    description: page.metaDescription,
    url: `https://www.focusedu-staffing.com/${page.slug}`,
    image: `https://www.focusedu-staffing.com${page.photo}`,
    telephone: edu.contact.phoneHref.replace("tel:", ""),
    areaServed: "US",
    provider: {
      "@type": "Organization",
      name: edu.brand.name,
      url: "https://www.focusedu-staffing.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "175 Strafford Avenue, Suite One #208",
      addressLocality: "Wayne",
      addressRegion: "PA",
      postalCode: "19087",
      addressCountry: "US",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.focusedu-staffing.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.focusedu-staffing.com/services" },
      { "@type": "ListItem", position: 3, name: page.h1, item: `https://www.focusedu-staffing.com/${page.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        subtitle={page.hero}
        photo={page.photo}
        photoAlt=""
      >
        <Button href={edu.cta.primary.href} variant="primary" size="lg">
          Book a discovery call
        </Button>
        <Button
          href="/our-impact#connect"
          variant="ghost"
          size="lg"
          className="border border-white/25 hover:bg-white/5"
        >
          Contact us
        </Button>
      </PageHero>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x mx-auto max-w-3xl">
          {page.roles && page.roles.length > 0 && (
            <Reveal>
              <div className="mb-14">
                <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">
                  Roles we help fill
                </h2>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {page.roles.map((r) => (
                    <li
                      key={r}
                      className="rounded-full border border-cloud bg-mist px-4 py-2 text-sm font-medium text-navy-900"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
          <div className="space-y-12">
            {page.sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.05}>
                <div>
                  <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">
                    {s.heading}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-ink">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ eyebrow="FAQ" title="Common questions." items={page.faqs} />

      {/* Related services — internal linking for users + crawlers */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">
            Related staffing services
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-cloud bg-white p-5 transition hover:-translate-y-0.5 hover:border-teal-500/40 hover:shadow-[0_20px_40px_-24px_rgba(6,10,31,0.18)]"
              >
                <span className="font-medium text-navy-950">{r.label}</span>
                <ArrowRight
                  className="size-4 shrink-0 text-teal-600 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need staffing support for hard-to-fill roles?"
        body="Contact Focused Staffing Group to discuss your current and upcoming needs — or plan ahead and build a stronger candidate pipeline before openings become emergencies."
        primary={edu.cta.primary}
        secondary={{ label: "View open roles", href: edu.jobBoard }}
        note="Responsive · Compliance-minded · Focused on hard-to-fill roles"
      />
    </>
  );
}
