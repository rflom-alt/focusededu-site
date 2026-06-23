"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Lite YouTube embed: shows the thumbnail + play button and only loads the
 * (heavy) YouTube iframe on click. Keeps pages fast.
 */
export function YouTubeEmbed({
  id,
  title,
  className,
}: {
  id: string;
  title: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-2xl bg-navy-950 ring-1 ring-cloud",
        className
      )}
    >
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-navy-950/30 transition group-hover:bg-navy-950/15" />
          <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-teal-500 text-navy-950 shadow-[0_10px_30px_-8px_rgba(36,203,140,0.8)] transition-transform duration-300 group-hover:scale-110">
            <Play className="size-7 translate-x-0.5 fill-current" strokeWidth={0} />
          </span>
        </button>
      )}
    </div>
  );
}
