"use client";

import { useEffect, useRef } from "react";

/**
 * HubSpot Meetings inline scheduler. The MeetingsEmbedCode.js script scans for
 * `.meetings-iframe-container` elements and replaces them with a self-resizing
 * iframe. We append the script per-mount so client-side navigations re-scan.
 */
export function HubSpotMeetings({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const src = url + (url.includes("?") ? "&" : "?") + "embed=true";
    if (ref.current) ref.current.setAttribute("data-src", src);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch {
        /* already removed */
      }
    };
  }, [url]);

  return (
    <div
      ref={ref}
      className={`meetings-iframe-container ${className ?? ""}`}
      style={{ minHeight: 680 }}
      aria-label="Schedule a discovery call"
    />
  );
}
