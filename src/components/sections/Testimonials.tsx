import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/lib/content";

export function Testimonials({
  testimonials,
}: {
  testimonials: SiteContent["testimonials"];
}) {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="In their words"
          title="Trusted by the people who run schools."
          intro="Superintendents, CEOs, and HR directors on what it's like to partner with us."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-2xl border border-cloud bg-white p-8 lg:p-10">
                <Quote className="size-8 text-teal-500" strokeWidth={1.4} aria-hidden />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-navy-900">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-cloud pt-5">
                  <div className="font-semibold text-navy-950">{t.name}</div>
                  <div className="mt-0.5 text-sm text-slate-ink">
                    {t.role} · {t.org}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <a
              href="https://www.glassdoor.com/Overview/Working-at-Focused-Staffing-Group-EI_IE7644579.11,33.htm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Focused Staffing Group is rated 4.4 out of 5 on Glassdoor — read reviews"
              className="inline-flex items-center gap-4 rounded-full border border-cloud bg-white px-6 py-3.5 shadow-sm transition hover:border-teal-500/40 hover:shadow-md"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-2xl font-bold leading-none text-navy-950">4.4</span>
                <Star className="size-5 fill-[#f5b800] text-[#f5b800]" strokeWidth={0} aria-hidden />
              </span>
              <span className="h-9 w-px bg-cloud" aria-hidden />
              <span className="text-left text-sm leading-tight text-slate-ink">
                <span className="block font-semibold text-navy-950">Rated on Glassdoor</span>
                86% would recommend · 100% CEO approval
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
