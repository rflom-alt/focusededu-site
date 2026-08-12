import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Turns bare internal paths written in prose ("The case study is at /case-studies.")
 * into real anchors.
 *
 * Service-page copy is authored as plain strings, so paths were rendering as
 * literal text — 35 of them across the service pages, 27 pointing at
 * /case-studies. Each one was an internal link the site wasn't getting.
 *
 * Deliberately conservative: only matches a known set of top-level segments, so
 * a stray slash in ordinary prose ("50/50", "and/or") is never turned into a
 * link. Trailing punctuation is left outside the anchor.
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
  "about",
  "blog",
];

const PATH_RE = new RegExp(`(?<![\\w/])(/(?:${SEGMENTS.join("|")})(?:/[a-z0-9-]+)*)`, "g");

export function linkifyPaths(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  PATH_RE.lastIndex = 0;

  while ((m = PATH_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const href = m[1];
    out.push(
      <Link
        key={`${href}-${m.index}`}
        href={href}
        className="font-medium text-teal-700 underline underline-offset-2 transition-colors hover:text-navy-950"
      >
        {href}
      </Link>,
    );
    last = m.index + m[1].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : [text];
}
