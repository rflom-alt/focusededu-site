import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Turns links written in plain-string copy into real anchors.
 *
 * Service-page copy is authored as plain strings, so paths were rendering as
 * literal text — 35 of them across the service pages, 27 pointing at
 * /case-studies. Each one was an internal link the site wasn't getting.
 *
 * Two forms are recognised:
 * - Markdown links, `[descriptive anchor](/path)` or `[anchor](https://…)`, so
 *   copy can carry keyword-bearing anchor text instead of a raw URL.
 * - Bare internal paths in prose ("The case study is at /case-studies."). These
 *   match only a known set of top-level segments plus the service-page slugs
 *   (every one contains "staffing"), so a stray slash in ordinary prose
 *   ("50/50", "and/or") is never turned into a link. Trailing punctuation is
 *   left outside the anchor.
 */
const SEGMENTS = [
  "case-studies",
  "references",
  "for-schools",
  "services",
  "candidates",
  "our-impact",
  "resources",
  "book-a-call",
  "request-staff",
  "about",
  "blog",
];
const SERVICE_SLUG = "(?:[a-z0-9]+-)*staffing(?:-[a-z0-9]+)*";

const MD_LINK = String.raw`\[([^\]]+)\]\(((?:https?:\/\/|\/)[^)\s]+)\)`;
const BARE_PATH = String.raw`(?<![\w/(])(\/(?:${SEGMENTS.join("|")}|${SERVICE_SLUG})(?:\/[a-z0-9-]+)*)(?![\w-])`;
const LINK_RE = new RegExp(`${MD_LINK}|${BARE_PATH}`, "g");

const linkClass =
  "font-medium text-teal-700 underline underline-offset-2 transition-colors hover:text-navy-950";

export function linkifyPaths(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;

  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [whole, label, mdHref, bare] = m;
    const href = mdHref ?? bare;
    // Not `${href}-${index}`: React keys are written into the page's inline data, and Google read keys like
    // "/case-studies-405" as links and reported them as 404s.
    const key = `link${m.index}`;
    if (href.startsWith("http")) {
      out.push(
        <a key={key} href={href} className={linkClass} rel="noopener" target="_blank">
          {label ?? href}
        </a>,
      );
    } else {
      out.push(
        <Link key={key} href={href} className={linkClass}>
          {label ?? href}
        </Link>,
      );
    }
    last = m.index + whole.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : [text];
}
