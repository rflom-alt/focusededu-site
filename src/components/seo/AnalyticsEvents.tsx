"use client";

import { useEffect } from "react";

type Gtag = (...args: unknown[]) => void;
const gtag = (...args: unknown[]) => {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (g) g(...args);
};

/**
 * Conversion event instrumentation (GA4):
 * - job_board_click     — any click out to the job board
 * - submit_resume_click — any click out to the talent-network / résumé flow
 * - meeting_booked      — a discovery call actually booked in the embedded
 *   HubSpot Meetings widget (its iframe posts meetingBookSucceeded).
 * Mark these as Key Events in GA4 Admin to count them as conversions.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a");
      const href = a?.href ?? "";
      if (!href.includes("apply.focused-staffing.com")) return;
      if (href.includes("/jobs")) {
        gtag("event", "job_board_click", { link_url: href });
      } else if (href.includes("talent-network")) {
        gtag("event", "submit_resume_click", { link_url: href });
      }
    };

    const onMessage = (e: MessageEvent) => {
      if (
        typeof e.origin === "string" &&
        e.origin.includes("hubspot") &&
        e.data &&
        typeof e.data === "object" &&
        (e.data as { meetingBookSucceeded?: boolean }).meetingBookSucceeded
      ) {
        gtag("event", "meeting_booked", { method: "hubspot_meetings" });
      }
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return null;
}
