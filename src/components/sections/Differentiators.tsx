import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import type { SiteContent, CtaItem } from "@/lib/content";

export function Differentiators({
  items,
  cta,
}: {
  items: SiteContent["differentiators"];
  cta?: CtaItem;
}) {
  return (
    <section id="schools" className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why FocusedEDU"
          title="A staffing partner built differently — on purpose."
          intro="We are not a generalist agency casting a wide net. Every part of how we work is designed to put the right educator in front of your students, faster, with less risk to you."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group h-full rounded-2xl border border-cloud bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-[0_30px_60px_-30px_rgba(6,10,31,0.18)] lg:p-10">
                <div className="flex size-13 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 transition-colors duration-300 group-hover:bg-teal-500 group-hover:text-navy-950">
                  <Icon name={item.icon} className="size-6" strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-ink">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {cta && (
          <Reveal>
            <div className="mt-12">
              <Button href={cta.href} variant="outline" size="lg">
                {cta.label}
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
