import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/motion/Reveal";

export function FounderNote() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
        <Reveal>
          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:w-80 lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-mist ring-1 ring-cloud">
              <Image
                src="/photography/founder-headshot.jpg"
                alt="Robert Flom, founder of FocusedEDU and former K-12 teacher"
                fill
                sizes="(max-width: 1024px) 100vw, 20rem"
                className="object-cover"
              />
            </div>
            {/* teal accent block */}
            <div className="absolute -bottom-3 -right-3 -z-0 h-20 w-20 rounded-2xl bg-teal-500/15" aria-hidden />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Built by an educator</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl lg:text-[2.6rem]">
              We hire the way a great principal would.
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-lg leading-relaxed text-slate-ink">
              FocusedEDU was founded by Robert Flom, a former K-12 teacher — not recruiters
              who happened into the education space. Having stood at the front of the
              classroom, we know that a résumé only tells part of the story. We screen for
              the judgment, warmth, and reliability that make someone the right fit for your
              students, not just the open seat.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 border-l-2 border-teal-500 pl-5">
              <p className="font-display text-lg font-medium text-navy-950">
                Robert Flom
              </p>
              <p className="text-sm text-slate-ink">
                Founder, FocusedEDU · Former K-12 Teacher
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
