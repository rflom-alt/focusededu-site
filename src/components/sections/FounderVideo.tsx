import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

/** Founder message video — loads only on play (preload="none" + poster). */
export function FounderVideo({
  src,
  poster,
  eyebrow = "From our founder",
  title = "Hear from Rob.",
  intro,
}: {
  src: string;
  poster: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} center />
        <Reveal>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-cloud shadow-[0_40px_80px_-50px_rgba(6,10,31,0.45)]">
            <video
              controls
              preload="none"
              poster={poster}
              playsInline
              className="aspect-video w-full bg-navy-950"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
