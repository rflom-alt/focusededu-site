"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { gtag } from "@/lib/gtag";

const INITIAL_HEIGHT = 900;
const MIN_HEIGHT = 480;
const MAX_HEIGHT = 2400;
// The fixed header, same offset SmoothScroll uses for in-page anchors.
const HEADER_OFFSET = 88;

// window.location never changes under a mounted component, so there is
// nothing to subscribe to.
const subscribe = () => () => {};

/**
 * The CRM's round-robin booking page, embedded. With `?embed=1` the page drops
 * its full-page chrome and posts to this window -- and only this window: it
 * checks `?parent=` (or the referrer) against its framing allowlist -- either
 *   { source: "fsg-crm-booking", type: "height", height }  as its content resizes
 *   { source: "fsg-crm-booking", type: "booked", meeting } once a booking is confirmed
 * Messages are accepted only from the booking page's own origin and from this
 * iframe's window. The `meeting_booked` conversion is fired here and nowhere
 * else, at most once per mount.
 */
export function CrmBooking({
  url,
  title = "Schedule a school staffing call",
  className,
}: {
  url: string;
  title?: string;
  className?: string;
}) {
  const frame = useRef<HTMLIFrameElement>(null);
  const booked = useRef(false);
  const [height, setHeight] = useState(INITIAL_HEIGHT);
  const origin = new URL(url).origin;
  // Our own origin is only known in the browser: null while prerendering and
  // hydrating, so the iframe is created once, with its final src.
  const parent = useSyncExternalStore(
    subscribe,
    () => window.location.origin,
    () => null
  );

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== origin || e.source !== frame.current?.contentWindow) return;
      const data = e.data as { source?: unknown; type?: unknown; height?: unknown } | null;
      if (!data || typeof data !== "object" || data.source !== "fsg-crm-booking") return;

      if (data.type === "height") {
        if (typeof data.height !== "number" || !Number.isFinite(data.height)) return;
        // Round up and always grow, so the frame is never shorter than its
        // content (even 1px short leaves an inner scrollbar); ignore sub-2px
        // shrinks so the frame cannot oscillate.
        const next = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Math.ceil(data.height)));
        setHeight((prev) => (next > prev || prev - next >= 2 ? next : prev));
      } else if (data.type === "booked") {
        if (booked.current) return;
        booked.current = true;
        gtag("event", "meeting_booked", { method: "crm_round_robin" });
        // The confirmation replaces the calendar at the top of the frame. If the
        // visitor scrolled down to reach the form, bring the frame's top back
        // into view rather than leave them looking past the end of it.
        const top = frame.current?.getBoundingClientRect().top ?? HEADER_OFFSET;
        if (top < HEADER_OFFSET) window.scrollBy({ top: top - HEADER_OFFSET });
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [origin]);

  if (!parent) {
    return <div className={className} style={{ height: INITIAL_HEIGHT }} aria-hidden="true" />;
  }

  const src =
    url +
    (url.includes("?") ? "&" : "?") +
    "embed=1&parent=" +
    encodeURIComponent(parent);

  return (
    <iframe
      ref={frame}
      src={src}
      title={title}
      // The confirmation's "Copy link" (the manage/cancel URL) needs the
      // Clipboard API, which Chromium blocks in a cross-origin frame unless
      // the embedder delegates it.
      allow="clipboard-write"
      loading="lazy"
      className={`block w-full border-0 ${className ?? ""}`}
      style={{ height }}
    />
  );
}
