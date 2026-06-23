"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsoLayoutEffect } from "@/components/motion/useIsoLayoutEffect";
import type { SiteContent } from "@/lib/content";

function parse(value: string) {
  const m = String(value).match(/^(\D*)(\d+)(.*)$/);
  if (!m) return { prefix: "", num: null as number | null, suffix: value };
  return { prefix: m[1], num: parseInt(m[2], 10), suffix: m[3] };
}

/**
 * Signature moment: a pinned section where the real result numbers count up,
 * scrubbed to scroll position (GSAP ScrollTrigger pin + scrub). Static under
 * reduced motion (shows final values immediately).
 */
export function PinnedStats({ stats }: { stats: SiteContent["stats"] }) {
  const root = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const nums = root.current?.querySelectorAll<HTMLElement>("[data-num]");
        if (!nums || !nums.length) return;
        const counter = { p: 0 };
        const render = () => {
          nums.forEach((el) => {
            const target = Number(el.dataset.target);
            el.textContent =
              (el.dataset.prefix ?? "") +
              Math.round(target * counter.p) +
              (el.dataset.suffix ?? "");
          });
        };
        render(); // start at zero
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "+=85%",
              pin: true,
              scrub: 0.5,
            },
          })
          .to(counter, { p: 1, ease: "none", onUpdate: render });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 py-24"
    >
      <div
        className="pointer-events-none absolute -right-40 top-1/2 size-[40rem] -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
        aria-hidden
      />
      <div className="container-x relative w-full">
        <dl className="grid grid-cols-2 gap-y-14 lg:grid-cols-4">
          {stats.map((s) => {
            const { prefix, num, suffix } = parse(s.value);
            return (
              <div key={s.label} className="border-l border-white/15 pl-6">
                <dt className="font-display text-5xl font-semibold tracking-tight text-teal-400 lg:text-7xl">
                  {num !== null ? (
                    <span
                      data-num
                      data-target={num}
                      data-prefix={prefix}
                      data-suffix={suffix}
                    >
                      {s.value}
                    </span>
                  ) : (
                    s.value
                  )}
                </dt>
                <dd className="mt-3 max-w-[14rem] text-sm leading-snug text-white/70">
                  {s.label}
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-14 text-xs text-white/35">
          Partner outcomes from FocusedEDU engagements; individual results vary.
        </p>
      </div>
    </section>
  );
}
