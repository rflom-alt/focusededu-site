import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { YouTubeEmbed } from "@/components/sections/YouTubeEmbed";

const items = [
  {
    id: "vNSqPO6jzSI",
    title: "Solving the special-education staffing crisis",
    blurb:
      "Over 90% of districts report special-ed shortages. A practical path forward — including how one partner cut vacancies from 35% to under 10%.",
  },
  {
    id: "1cer6-Stt6o",
    title: "Solving the substitute teacher shortage",
    blurb:
      "What schools can do right now to keep classrooms covered — one partner lifted substitute fill rates by 25%.",
  },
];

export function InsightVideos() {
  return (
    <section className="bg-mist py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Insights from our founder"
          title="The staffing challenges schools face — and how to solve them."
          intro="Short, practical perspective from a former educator on the problems keeping you up at night."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2">
          {items.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}>
              <div>
                <YouTubeEmbed id={v.id} title={v.title} />
                <h3 className="mt-5 text-xl font-semibold text-navy-950">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-ink">{v.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
