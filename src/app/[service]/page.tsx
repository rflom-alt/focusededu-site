import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Quote } from "lucide-react";
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

      {/* Proof band — real, attested numbers */}
      {page.stats && page.stats.length > 0 && (
        <section className="bg-navy-950 py-14 lg:py-16">
          <div className="container-x">
            <dl className={`grid grid-cols-2 gap-y-10 ${page.stats.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {page.stats.map((s) => (
                <div key={s.label} className="border-l border-white/15 pl-5">
                  <dt className="font-display text-4xl font-semibold tracking-tight text-teal-400 lg:text-5xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-white/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

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
                  {s.body.split("\n\n").map((para, j) => (
                    <p key={j} className="mt-4 text-lg leading-relaxed text-slate-ink">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* What we verify — concrete vetting checklist */}
          {page.verify && page.verify.length > 0 && (
            <Reveal>
              <div className="mt-14 rounded-2xl border border-cloud bg-mist p-7 lg:p-8">
                <h2 className="text-xl font-semibold text-navy-950 sm:text-2xl">
                  What we verify before you meet a candidate
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {page.verify.map((v) => (
                    <li key={v} className="flex items-start gap-3 text-navy-900">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15">
                        <Check className="size-3.5 text-teal-600" strokeWidth={2.5} />
                      </span>
                      <span className="text-sm leading-relaxed">{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* Real client quote */}
          {page.quote && (
            <Reveal>
              <figure className="mt-14 border-l-2 border-teal-500 pl-6">
                <Quote className="size-7 text-teal-500" strokeWidth={1.5} aria-hidden />
                <blockquote className="mt-3 text-lg leading-relaxed text-navy-900">
                  “{page.quote.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-ink">
                  {page.quote.name} · {page.quote.role}
                </figcaption>
              </figure>
            </Reveal>
          )}
        </div>
      </section>

      {/* How an engagement works — concrete steps */}
      {page.steps && page.steps.length > 0 && (
        <section className="bg-mist py-20 lg:py-24">
          <div className="container-x">
            <h2 className="text-2xl font-semibold text-navy-950 sm:text-3xl">
              How an engagement works
            </h2>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-cloud bg-cloud sm:grid-cols-2 lg:grid-cols-4">
              {page.steps.map((st) => (
                <div key={st.n} className="flex h-full flex-col bg-white p-7">
                  <span className="font-display text-4xl font-semibold text-teal-500/25">{st.n}</span>
                  <h3 className="mt-4 font-semibold text-navy-950">{st.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-ink">{st.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
