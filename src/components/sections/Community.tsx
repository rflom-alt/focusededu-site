import Image from "next/image";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import type { SiteContent, CtaItem } from "@/lib/content";

export function Community({
  community,
  cta,
}: {
  community: SiteContent["community"];
  cta?: CtaItem;
}) {
  return (
    <section id="impact" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      {/* warm gold wash — the one place warmth is allowed */}
      <div
        className="pointer-events-none absolute -left-32 top-0 size-[34rem] opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold-500), transparent 62%)" }}
        aria-hidden
      />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <Eyebrow tone="gold">{community.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.85rem]">
              {community.title}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-lg leading-relaxed text-white/75">{community.body}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-4">
              {community.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                    <Check className="size-3.5 text-gold-400" strokeWidth={2.5} />
                  </span>
                  <span className="text-white/85">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          {cta && (
            <Reveal delay={0.26}>
              <div className="mt-9">
                <Button href={cta.href} variant="light" size="lg">
                  {cta.label}
                </Button>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src={community.photo}
              alt={community.photoAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* gold corner accent */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gold-500" aria-hidden />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
