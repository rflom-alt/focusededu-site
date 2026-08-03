import Link from "next/link";
import { MapPin, FileText } from "lucide-react";

const REGIONS = [
  { label: "Pennsylvania", href: "/pennsylvania-education-staffing" },
  { label: "Philadelphia", href: "/philadelphia-education-staffing" },
  { label: "New Jersey", href: "/new-jersey-education-staffing" },
  { label: "Delaware", href: "/delaware-education-staffing" },
  { label: "Maryland", href: "/maryland-special-education-staffing" },
];

const PROOF = [
  { label: "Letters from district leaders", href: "/references" },
  { label: "District case studies", href: "/case-studies" },
];

/**
 * Regional + proof links shown at the foot of every article. Gives the geo
 * landing pages and our two trust surfaces a real internal link path — they
 * were previously unreachable from any of the blog content.
 */
export function PostFooterLinks() {
  return (
    <aside className="mx-auto mt-10 max-w-2xl rounded-2xl border border-cloud bg-white p-6 sm:p-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            <MapPin className="size-3.5" strokeWidth={2} />
            Where we work
          </p>
          <ul className="mt-3 space-y-1.5">
            {REGIONS.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="text-sm text-slate-ink underline-offset-4 transition hover:text-teal-700 hover:underline"
                >
                  {r.label} education staffing
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            <FileText className="size-3.5" strokeWidth={2} />
            See the proof
          </p>
          <ul className="mt-3 space-y-1.5">
            {PROOF.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-sm text-slate-ink underline-offset-4 transition hover:text-teal-700 hover:underline"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
