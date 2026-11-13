import Link from "@/components/AppLink";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Visual } from "./Visual";
import type { Stat } from "@/lib/content";
import type { PlatformProduct, PlatformSuite } from "./types";

const H2 = "mt-5 text-balance text-3xl font-semibold text-navy-950 sm:text-4xl lg:text-[2.6rem]";
const TEXT_LINK =
  "group inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-teal-700 transition-colors hover:text-teal-800";

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={TEXT_LINK}>
      {children}
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}

/**
 * Hero for the suite and each product: the name or claim as the headline, one
 * line on what the client gets, the definition, then the figures.
 */
export function PlatformHero({
  eyebrow,
  title,
  tagline,
  lede,
  stats,
  children,
}: {
  eyebrow: string;
  title: string;
  tagline?: string;
  lede: string;
  stats: Stat[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 size-[42rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 62%)" }}
      />
      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {/* A two-sentence headline breaks at the sentence, at every width. */}
              {title.split(/(?<=\.) /).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            {tagline && (
              <p className="mt-6 font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {tagline}
              </p>
            )}
            <p
              className={cn(
                "max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl",
                tagline ? "mt-4" : "mt-6",
              )}
            >
              {lede}
            </p>
          </Reveal>
          {children && (
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">{children}</div>
            </Reveal>
          )}
        </div>

        <dl
          className={cn(
            "mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/10 pt-12 lg:mt-20",
            stats.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.2 + i * 0.08}
              className={cn(stats.length === 3 && i === 2 && "col-span-2 lg:col-span-1")}
            >
              <div className="border-l border-white/15 pl-5 sm:pl-6">
                <dt className="font-display text-4xl font-semibold tracking-tight text-teal-400 sm:text-5xl lg:text-6xl">
                  {s.value}
                </dt>
                <dd className="mt-3 max-w-[16rem] text-sm leading-snug text-white/70">{s.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/** Named client results on the suite overview. A card with a link opens its case study. */
export function ResultsBand({
  results,
  cta,
}: {
  results: PlatformSuite["results"];
  cta: { label: string; href: string };
}) {
  const card =
    "flex h-full flex-col rounded-2xl border border-cloud bg-white p-7 lg:p-8";
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={results.eyebrow} title={results.title} intro={results.intro} />
        <div
          className={cn(
            "mt-12 grid gap-5",
            results.items.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3",
          )}
        >
          {results.items.map((r, i) => {
            const inner = (
              <>
                {r.value && (
                  <p className="font-display text-5xl font-semibold tracking-tight text-teal-700 lg:text-6xl">
                    {r.value}
                  </p>
                )}
                <h3
                  className={cn(
                    "font-display text-xl font-semibold text-navy-950",
                    r.value && "mt-4",
                  )}
                >
                  {r.headline}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-ink">{r.body}</p>
                <p className="mt-auto pt-6 text-sm font-semibold text-navy-950">{r.source}</p>
                {r.href && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Read the case study
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                )}
              </>
            );
            return (
              <Reveal key={r.headline} delay={i * 0.08}>
                {r.href ? (
                  <Link
                    href={r.href}
                    className={cn(
                      card,
                      "group transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.18)]",
                    )}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className={card}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button href={cta.href}>{cta.label}</Button>
          {results.link && <TextLink href={results.link.href}>{results.link.label}</TextLink>}
        </div>
      </div>
    </section>
  );
}

/** The problem the product removes, beside what the product looks like. */
export function ProblemSplit({
  product,
  cta,
}: {
  product: PlatformProduct;
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>Overview</Eyebrow>
          <h2 className={H2}>{product.problem.title}</h2>
          {product.problem.body.map((p, i) => (
            <p
              key={i}
              className={cn("text-lg leading-relaxed text-slate-ink", i === 0 ? "mt-6" : "mt-4")}
            >
              {p}
            </p>
          ))}
          <div className="mt-9">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <Visual visual={product.visual} />
        </Reveal>
      </div>
    </section>
  );
}

/** A real screen from the product, large enough to read. */
export function ScreenSection({
  screen,
  cta,
}: {
  screen: NonNullable<PlatformProduct["screen"]>;
  cta: { label: string; href: string };
}) {
  return (
    <section className="bg-white pt-24 lg:pt-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
          <SectionHeading eyebrow={screen.eyebrow} title={screen.title} intro={screen.body} />
          <Button href={cta.href}>{cta.label}</Button>
        </div>
        <Reveal>
          <Visual visual={screen.visual} wide className="mt-14" />
        </Reveal>
      </div>
    </section>
  );
}

/** One proof point per product: a client result, or the record itself. */
export function ProofBand({
  product,
  cta,
}: {
  product: PlatformProduct;
  cta: { label: string; href: string };
}) {
  const { proof } = product;
  const actions = (
    <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
      <Button href={cta.href}>{cta.label}</Button>
      {proof.link && <TextLink href={proof.link.href}>{proof.link.label}</TextLink>}
    </div>
  );
  const detail = (
    <>
      <p className="text-lg leading-relaxed text-slate-ink">{proof.body}</p>
      {proof.attribution && (
        <p className="mt-4 text-sm font-semibold text-navy-950">{proof.attribution}</p>
      )}
      {actions}
    </>
  );

  return (
    <section className="bg-mist py-24 lg:py-32">
      {proof.visual ? (
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-last min-w-0 lg:order-first">
            <Visual visual={proof.visual} />
          </Reveal>
          <Reveal>
            <Eyebrow>In production</Eyebrow>
            <h2 className={H2}>{proof.title}</h2>
            <div className="mt-6">{detail}</div>
          </Reveal>
        </div>
      ) : (
        // No visual: the figure and the claim on the left, the source on the right.
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow>In production</Eyebrow>
            {proof.value && (
              <p className="mt-6 font-display text-7xl font-semibold leading-none text-teal-700 sm:text-8xl lg:text-9xl">
                {proof.value}
              </p>
            )}
            <h2 className={H2}>{proof.title}</h2>
          </Reveal>
          <Reveal className="lg:border-l lg:border-cloud lg:pl-12">{detail}</Reveal>
        </div>
      )}
    </section>
  );
}

/** One stage of a hire on the suite overview: Find, Clear or Work. */
export function StageRow({
  product,
  index,
  cta,
}: {
  product: PlatformProduct;
  index: number;
  cta: { label: string; href: string };
}) {
  const flip = index % 2 === 1;
  return (
    <section
      id={product.slug}
      className={cn(flip ? "bg-mist" : "bg-white", "py-24 lg:py-32")}
    >
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className={cn(flip && "lg:order-last")}>
          <p className="flex items-center gap-3 text-sm font-semibold text-teal-700">
            <span className="flex size-8 items-center justify-center rounded-full bg-navy-950 font-display text-sm text-white">
              {index + 1}
            </span>
            {product.stage} · {product.covers}
          </p>
          <h2 className={H2}>{product.name}</h2>
          <p className="mt-5 font-display text-xl font-semibold text-navy-950 sm:text-2xl">
            {product.tagline}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-ink">{product.lede}</p>
          <ul className="mt-7 space-y-3.5">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-navy-950">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-500/15">
                  <Check className="size-3.5 text-teal-700" strokeWidth={2.5} aria-hidden />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button href={cta.href}>{cta.label}</Button>
            <TextLink href={`/platform/${product.slug}`}>Explore {product.name}</TextLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0">
          <Visual visual={product.visual} />
        </Reveal>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: PlatformProduct }) {
  return (
    <Link
      href={`/platform/${product.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-cloud bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.18)] lg:p-8"
    >
      <p className="text-sm font-semibold text-teal-700">
        {product.stage} · {product.covers}
      </p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-navy-950">{product.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-ink">{product.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-teal-700">
        Explore {product.name}
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}

/** The three products at a glance, under the suite overview's intro. */
export function StageIndex({ suite }: { suite: PlatformSuite }) {
  return (
    <section className="bg-white pt-24 lg:pt-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={suite.intro.eyebrow}
          title={suite.intro.title}
          intro={suite.intro.body}
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-cloud bg-cloud sm:grid-cols-3">
          {suite.products.map((p, i) => (
            <li key={p.slug} className="bg-white">
              <a
                href={`#${p.slug}`}
                className="flex h-full items-start gap-4 p-6 transition-colors hover:bg-mist lg:p-7"
              >
                <span className="font-display text-4xl font-semibold leading-none text-teal-500/30">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold text-navy-950">
                    {p.stage}
                  </span>
                  <span className="block text-sm text-slate-ink">
                    {p.name} · {p.covers}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Cross-links at the foot of a product page: the other two, and the overview. */
export function PlatformLinks({ suite, current }: { suite: PlatformSuite; current: string }) {
  const others = suite.products.filter((p) => p.slug !== current);
  return (
    <section className="bg-mist py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={suite.name} title="The rest of the platform." />
          <TextLink href="/platform">See the whole platform</TextLink>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {others.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Short block for buyer pages that points at the suite overview. */
export function PlatformTeaser({ suite }: { suite: PlatformSuite }) {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow={suite.teaser.eyebrow}
          title={suite.teaser.title}
          intro={suite.teaser.body}
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {suite.products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
          <Button href={suite.cta.href}>{suite.cta.label}</Button>
          <TextLink href="/platform">See the whole platform</TextLink>
        </div>
      </div>
    </section>
  );
}
