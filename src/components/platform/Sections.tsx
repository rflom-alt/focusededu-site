import Link from "@/components/AppLink";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Visual } from "./Visual";
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
          <Eyebrow>The problem it removes</Eyebrow>
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
  const text = (
    <Reveal>
      <Eyebrow>The proof</Eyebrow>
      <h2 className={H2}>{proof.title}</h2>
      <p className="mt-6 text-lg leading-relaxed text-slate-ink">{proof.body}</p>
      {proof.attribution && (
        <p className="mt-4 text-sm font-semibold text-navy-950">{proof.attribution}</p>
      )}
      <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
        <Button href={cta.href}>{cta.label}</Button>
        {proof.link && <TextLink href={proof.link.href}>{proof.link.label}</TextLink>}
      </div>
    </Reveal>
  );

  return (
    <section className="bg-mist py-24 lg:py-32">
      {proof.visual ? (
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-last min-w-0 lg:order-first">
            <Visual visual={proof.visual} />
          </Reveal>
          {text}
        </div>
      ) : (
        <div className="container-x">
          <div className="max-w-3xl">{text}</div>
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
          <p className="mt-6 text-lg leading-relaxed text-slate-ink">{product.lede}</p>
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
            <TextLink href={`/platform/${product.slug}`}>How {product.name} works</TextLink>
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
        How {product.name} works
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
                className="flex h-full items-center gap-4 p-6 transition-colors hover:bg-mist lg:p-7"
              >
                <span className="font-display text-4xl font-semibold text-teal-500/30">
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
