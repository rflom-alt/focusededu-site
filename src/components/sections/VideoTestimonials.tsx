import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { YouTubeEmbed } from "@/components/sections/YouTubeEmbed";

const items = [
  {
    id: "_mEy7s5rtHo",
    name: "Christian Hernandez",
    role: "Algebra II Teacher",
    quote:
      "This is the first time I can say I love my job — and it's not just freedom in work-life balance, it's freedom financially.",
  },
  {
    id: "xjCAke7fiEs",
    name: "Johnny Travet",
    role: "HS Science Teacher · Washington, D.C.",
    quote:
      "I can be a teacher and feel like an entrepreneur. I get paid weekly — this position even let me buy my late aunt's house.",
  },
];

export function VideoTestimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Hear from our educators"
          title="Real stories from educators we've placed."
          intro="No scripts — just the people who found flexibility, fair pay, and a team in their corner."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2">
          {items.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <figure>
                <YouTubeEmbed id={t.id} title={`${t.name} — ${t.role}`} />
                <blockquote className="mt-5 text-lg leading-relaxed text-navy-900">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-slate-ink">
                  <span className="font-semibold text-navy-950">{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
