import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/lib/content";

export function FinalCta({
  finalCta,
  cta,
}: {
  finalCta: SiteContent["finalCta"];
  cta: SiteContent["cta"];
}) {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
            {/* teal glow */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--color-teal-600), transparent 60%)" }}
              aria-hidden
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              {/* Schools path */}
              <div>
                <h2 className="max-w-xl text-3xl font-semibold text-white sm:text-4xl lg:text-[2.6rem]">
                  {finalCta.title}
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                  {finalCta.body}
                </p>
                <div className="mt-8">
                  <Button href={cta.primary.href} variant="primary" size="lg">
                    {cta.primary.label}
                  </Button>
                </div>
              </div>

              {/* Candidates path */}
              <div
                id="candidates"
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-7 lg:p-8"
              >
                <p className="font-display text-xl font-semibold text-white">
                  Looking for your next role?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Join a talent network built by educators. Real placements, real support,
                  and a team that has your back.
                </p>
                <div className="mt-6">
                  <Button
                    href={cta.secondary.href}
                    variant="ghost"
                    size="md"
                    className="border border-white/25 hover:bg-white/5"
                  >
                    {cta.secondary.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
