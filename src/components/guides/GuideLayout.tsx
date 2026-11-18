import Link from "@/components/AppLink";
import { ArrowLeft, Check } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { GuideCalculator } from "@/components/guides/GuideCalculator";
import { GuideDownload } from "@/components/guides/GuideDownload";
import { processArticle } from "@/lib/article";
import { author } from "@/lib/author";
import { edu } from "@/lib/content";
import { guideSite } from "@/lib/guides/site";
import type { Guide, HubLink } from "@/lib/guides/types";

const longDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

/** One leadership guide: the answer first, then the tool, then the full case with its sources. */
export function GuideLayout({ guide, more }: { guide: Guide; more: HubLink[] }) {
  const g = guide.data;
  const url = `${guideSite.url}/resources/${g.slug}`;
  const { html, headings } = processArticle(g.bodyHtml);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    url,
    mainEntityOfPage: url,
    datePublished: guide.published,
    dateModified: guide.updated,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: guideSite.author,
    publisher: guideSite.publisher,
    abstract: g.answer,
    ...(g.citations.length ? { citation: g.citations } : {}),
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: guideSite.url },
      { "@type": "ListItem", position: 2, name: "Resources", item: `${guideSite.url}/resources` },
      { "@type": "ListItem", position: 3, name: g.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={faq} />
      <JsonLd data={crumbs} />

      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-14 lg:pt-40 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 size-[42rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 62%)" }}
        />
        <div className="container-x relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="size-4" strokeWidth={2} />
            Resources
          </Link>
          <div className="mt-7 max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">Leadership guide</span>
            <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
              {g.title}
            </h1>
            <p className="mt-5 text-sm text-white/60">
              By{" "}
              <Link
                href="/about/robert-flom"
                className="font-medium text-white/85 underline-offset-4 transition hover:text-white hover:underline"
              >
                {author.name}
              </Link>{" "}
              · Updated {longDate(guide.updated)}
            </p>
          </div>
          <div className="mt-9 max-w-3xl rounded-2xl border border-white/15 bg-white/[0.06] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">The short answer</p>
            <p className="mt-3 text-lg leading-relaxed text-white sm:text-xl">{g.answer}</p>
            {guide.calculator && (
              <a
                href="#calculator"
                className="mt-5 inline-flex h-11 items-center rounded-full bg-teal-500 px-6 text-sm font-semibold text-navy-950 transition hover:bg-teal-400"
              >
                Run your own numbers
              </a>
            )}
            {!guide.calculator && guide.download && (
              <a
                href="#download"
                className="mt-5 inline-flex h-11 items-center rounded-full bg-teal-500 px-6 text-sm font-semibold text-navy-950 transition hover:bg-teal-400"
              >
                {guide.download.button}
              </a>
            )}
          </div>
        </div>
      </section>

      {guide.calculator && (
        <section className="bg-white pt-12 lg:pt-16">
          <div className="container-x">
            <div className="mx-auto max-w-5xl">
              <GuideCalculator id={guide.calculator} />
            </div>
          </div>
        </section>
      )}

      <article className="bg-white py-14 lg:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 rounded-2xl border border-teal-500/20 bg-teal-500/[0.06] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Key takeaways</p>
              <ul className="mt-4 space-y-2.5">
                {g.keyTakeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-navy-900">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20">
                      <Check className="size-3 text-teal-700" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {headings.length > 2 && (
              <nav aria-label="In this guide" className="mb-10 rounded-2xl border border-cloud bg-mist p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-ink">In this guide</p>
                <ol className="mt-4 space-y-2.5">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-sm leading-snug text-slate-ink transition hover:text-teal-700">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="article-prose" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </article>

      {guide.download && <GuideDownload spec={guide.download} orgLabel={guideSite.orgLabel} />}

      <FAQ eyebrow="FAQ" title="Questions, answered." items={g.faqs} />

      {more.length > 0 && (
        <section className="bg-mist py-16 lg:py-20">
          <div className="container-x">
            <h2 className="font-display text-3xl font-semibold text-navy-950">{guideSite.moreHeading}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="rounded-2xl border border-cloud bg-white p-7 transition hover:border-teal-600"
                >
                  <h3 className="text-xl font-semibold text-navy-950">{m.title}</h3>
                  <p className="mt-3 text-slate-ink">{m.body}</p>
                  <span className="mt-5 block font-semibold text-teal-700">Read the guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={guideSite.cta.title}
        body={guideSite.cta.body}
        primary={edu.cta.primary}
        secondary={{ label: "Request staff", href: "/request-staff" }}
        note="Free 30-minute call · No cost · No obligation"
      />
    </>
  );
}
