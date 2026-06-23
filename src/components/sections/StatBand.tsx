import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/lib/content";

export function StatBand({ stats }: { stats: SiteContent["stats"] }) {
  const hasProvisional = stats.some((s) => s.provisional);
  void hasProvisional;
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
      {/* subtle radial accent */}
      <div
        className="pointer-events-none absolute -right-40 top-1/2 size-[36rem] -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
        aria-hidden
      />
      <div className="container-x relative">
        <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-l border-white/15 pl-6">
                <dt className="font-display text-5xl font-semibold tracking-tight text-teal-400 lg:text-6xl">
                  {s.value}
                  {s.provisional && <span className="align-super text-xl text-teal-400/60">*</span>}
                </dt>
                <dd className="mt-3 text-sm leading-snug text-white/70">{s.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <p className="mt-12 text-xs text-white/35">
          Partner outcomes from FocusedEDU engagements; individual results vary.
        </p>
      </div>
    </section>
  );
}
