"use client";

import { useEffect } from "react";
import { gtag } from "@/lib/gtag";

/**
 * Conversion event instrumentation (GA4):
 * - job_board_click     — any click out to the job board
 * - submit_resume_click — any click out to the talent-network / résumé flow
 * - meeting_booked      — a call actually booked in the embedded CRM booking
 *   page; fired by CrmBooking (its iframe posts `booked`), not from here, so
 *   it is counted once.
 * Mark these as Key Events in GA4 Admin to count them as conversions.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a");
      const href = a?.href ?? "";
      if (a) {
        const url = new URL(href, window.location.origin);
        if (
          url.origin === window.location.origin &&
          ["/book-a-call", "/request-staff"].includes(url.pathname)
        ) {
          gtag("event", "staffing_intent_click", {
            destination: url.pathname,
            page_path: window.location.pathname,
          });
        }
      }
      if (!href.startsWith("https://apply.focused-staffing.com/")) return;
      if (href.includes("/jobs")) {
        gtag("event", "job_board_click", { link_url: href });
      } else if (href.includes("talent-network")) {
        gtag("event", "submit_resume_click", { link_url: href });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
