import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { edu } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case study" };
  return {
    title: `${cs.school} — Case Study`,
    description: cs.subhead,
    alternates: { canonical: `/case-studies/${slug}` },
    openGraph: {
      title: `${cs.school} — FocusedEDU Case Study`,
      description: cs.subhead,
      type: "article",
      images: [cs.photo],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const csSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.headline,
    description: cs.subhead,
    image: `https://www.focusedu-staffing.com${cs.photo}`,
    about: cs.school,
    author: { "@type": "Organization", name: "FocusedEDU" },
    publisher: {
      "@type": "Organization",
      name: "FocusedEDU",
      logo: {
        "@type": "ImageObject",
        url: "https://www.focusedu-staffing.com/logos/focusededu-white.png",
      },
    },
    mainEntityOfPage: `https://www.focusedu-staffing.com/case-studies/${cs.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.focusedu-staffing.com/" },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.focusedu-staffing.com/case-studies" },
      { "@type": "ListItem", position: 3, name: cs.school, item: `https://www.focusedu-staffing.com/case-studies/${cs.slug}` },
    ],
  };

  const related = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 3);
  const statCols = cs.stats.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <>
      <JsonLd data={csSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Header */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-28 lg:pt-40 lg:pb-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[42rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 62%)" }}
        />
        <div className="container-x relative">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="size-4" strokeWidth={2} />
            All case studies
          </Link>
          <div className="mt-8 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
              {cs.eyebrow}
            </span>
            <h1 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] text-white sm:text-4xl lg:text-5xl">
              {cs.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {cs.subhead}
            </p>
            <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <dt className="text-white/45">School</dt>
                <dd className="mt-1 font-medium text-white">{cs.school}</dd>
              </div>
              <div>
                <dt className="text-white/45">Location</dt>
                <dd className="mt-1 font-medium text-white">{cs.location}</dd>
              </div>
              <div>
                <dt className="text-white/45">Partner since</dt>
                <dd className="mt-1 font-medium text-white">{cs.partnerSince}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Hero image — overlaps the header */}
      <div className="bg-white">
        <div className="container-x">
          <div className="relative z-10 mx-auto -mt-16 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl shadow-[0_40px_80px_-50px_rgba(6,10,31,0.5)] lg:-mt-24">
            <Image
              src={cs.photo}
              alt={cs.school}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stat band */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
        <div
          className="pointer-events-none absolute -right-40 top-1/2 size-[36rem] -translate-y-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
          aria-hidden
        />
        <div className="container-x relative">
          <dl className={`grid grid-cols-2 gap-y-12 ${statCols}`}>
            {cs.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="border-l border-white/15 pl-6">
                  <dt className="font-display text-5xl font-semibold tracking-tight text-teal-400 lg:text-6xl">
                    {s.value}
                  </dt>
                  <dd className="mt-3 text-sm leading-snug text-white/70">{s.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <p className="mt-12 text-xs text-white/35">
            Client-attested outcomes from this FocusedEDU engagement; individual results vary.
          </p>
        </div>
      </section>

      {/* Challenge + Approach */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>The challenge</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-2xl font-semibold text-navy-950 sm:text-3xl">
                What they were up against.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {cs.challenge.map((p, i) => (
                <Reveal key={i} delay={0.12 + i * 0.06}>
                  <p className="text-lg leading-relaxed text-slate-ink">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <Eyebrow>What we did</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-2xl font-semibold text-navy-950 sm:text-3xl">
                How FocusedEDU delivered.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {cs.approach.map((p, i) => (
                <Reveal key={i} delay={0.12 + i * 0.06}>
                  <p className="text-lg leading-relaxed text-slate-ink">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="The results" title="What changed." />
          <ul className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
            {cs.results.map((r, i) => (
              <Reveal key={i} delay={(i % 2) * 0.06}>
                <li className="flex items-start gap-4 rounded-2xl border border-cloud bg-white p-6">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-500/15">
                    <Check className="size-4 text-teal-600" strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed text-navy-900">{r}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Related case studies */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="More proof" title="Other partner stories." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/case-studies/${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cloud bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.18)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={c.photo}
                      alt={c.school}
                      fill
                      sizes="(max-width: 1024px) 100vw, 22rem"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal-700">
                      {c.location}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-navy-950">
                      {c.school}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-ink">
                      {c.subhead}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Could your school be the next story?"
        body="See how a dedicated, exclusive talent pipeline changes the way your school hires."
        primary={edu.cta.primary}
        secondary={{ label: "Browse all case studies", href: "/case-studies" }}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
