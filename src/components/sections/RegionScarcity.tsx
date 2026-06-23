import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

/** Honest scarcity: one client per region creates real urgency. */
export function RegionScarcity() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-32 top-1/2 size-[36rem] -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
        aria-hidden
      />
      <div className="container-x relative">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.45fr_1fr]">
            <div>
              <Eyebrow tone="light">A genuinely scarce advantage</Eyebrow>
              <h2 className="mt-5 flex items-start gap-3 text-3xl font-semibold text-white sm:text-4xl lg:text-[2.85rem]">
                <MapPin className="mt-1 hidden size-9 shrink-0 text-teal-400 sm:block" strokeWidth={1.6} />
                Only one partner per region.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
                We dedicate our team to a single school or district per region — so your talent
                pipeline is exclusive, never shared with a competitor down the road. Once a
                region is taken, it&apos;s taken.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Button href="/book-a-call" variant="primary" size="lg">
                Check if your region is open
              </Button>
              <p className="text-sm text-white/55">
                Free 30-minute call · No cost · No obligation
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
