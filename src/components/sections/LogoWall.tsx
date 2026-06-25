import Image from "next/image";
import type { SiteContent } from "@/lib/content";

export function LogoWall({ clients }: { clients: SiteContent["clients"] }) {
  // translateX(-50%) loops seamlessly only when ONE copy of the list is wider
  // than the viewport — otherwise a blank gap scrolls through. With few logos
  // (or on ultrawide screens) one copy is too narrow, so first repeat the list
  // until a single group comfortably exceeds any viewport, THEN double it.
  const MIN_GROUP = 16;
  const reps = Math.max(1, Math.ceil(MIN_GROUP / clients.length));
  const group = Array.from({ length: reps }, () => clients).flat();
  const track = [...group, ...group];
  return (
    <section className="overflow-hidden border-b border-cloud bg-white py-12 lg:py-14">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-ink">
          Trusted by the schools &amp; districts we serve
        </p>
      </div>

      <div className="group relative mt-9 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <div className="flex w-max shrink-0 animate-[marquee_42s_linear_infinite] items-center group-hover:[animation-play-state:paused]">
          {track.map((c, i) => (
            <div key={i} className="mr-16 flex shrink-0 items-center justify-center">
              <Image
                src={c.file}
                alt={c.name}
                width={250}
                height={100}
                aria-hidden={i >= clients.length}
                className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
