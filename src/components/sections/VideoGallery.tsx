import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { YouTubeEmbed } from "@/components/sections/YouTubeEmbed";

export type VideoItem = { id: string; title: string; tag: string };

export function VideoGallery({
  videos,
  eyebrow = "Watch",
  title,
  intro,
  bg,
}: {
  videos: VideoItem[];
  eyebrow?: string;
  title: string;
  intro?: string;
  bg?: string;
}) {
  return (
    <section className={cn(bg ?? "bg-white", "py-24 lg:py-32")}>
      <div className="container-x">
        <SectionHeading center eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={(i % 2) * 0.08}>
              <div>
                <YouTubeEmbed id={v.id} title={v.title} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
                  {v.tag}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold leading-snug text-navy-950">
                  {v.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
