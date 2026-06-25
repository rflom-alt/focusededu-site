"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";
import type { Differentiator } from "@/lib/content";

/**
 * Signature moment: the section pins and a track of panels scrolls horizontally,
 * scrubbed to vertical scroll (GSAP ScrollTrigger pin + scrub). On mobile or under
 * prefers-reduced-motion it falls back to a normal horizontal-swipe row (no pin).
 */
export function PinnedHorizontal({
  items,
  eyebrow = "Why Focused Behavioral",
  title = "A staffing partner built differently — on purpose.",
}: {
  items: Differentiator[];
  eyebrow?: string;
  title?: string;
}) {
  const root = useRef<HTMLElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.matchMedia().add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const t = track.current!;
          const w = wrap.current!;
          w.style.overflow = "hidden";
          const distance = () => t.scrollWidth - w.clientWidth;
          gsap.to(t, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-0 size-[40rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
        aria-hidden
      />
      <div className="container-x relative">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold text-white sm:text-4xl lg:text-[2.85rem]">
          {title}
        </h2>
      </div>

      <div ref={wrap} className="relative mt-14 overflow-x-auto lg:mt-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div ref={track} className="flex w-max gap-6 px-6 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {items.map((item, i) => (
            <article
              key={item.title}
              className="flex w-[78vw] shrink-0 flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:w-[24rem] lg:w-[26rem] lg:p-10"
            >
              <span className="font-display text-sm font-semibold text-teal-400/70">
                0{i + 1}
              </span>
              <div className="mt-6 flex size-13 items-center justify-center rounded-xl bg-teal-500/12 text-teal-300">
                <Icon name={item.icon} className="size-6" strokeWidth={1.7} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-white/70">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
