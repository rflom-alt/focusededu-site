/**
 * Current K-12 openings, read from Focused Staffing Group's public job board.
 *
 * Source: apply.focused-staffing.com — the same board /candidates links to. Its
 * public, unauthenticated API returns every published posting (list) and each
 * posting's full detail (by slug). Nothing here is written by hand: if the board
 * has no open school roles, /jobs says so rather than inventing any.
 *
 * Expiry follows the board's own rule. Its job pages emit JobPosting JSON-LD
 * with `validThrough = publishedAt + 90 days`; a posting past that date is
 * already expired to Google on the board itself, so it is dropped here too.
 *
 * Pages that use this revalidate every 6 hours (ISR), so a role that is filled,
 * removed, or ages out disappears without a deploy, and a new one appears.
 */
import { PHASE_PRODUCTION_BUILD } from "next/constants";

const BOARD = "https://apply.focused-staffing.com";
export const JOB_BOARD_URL = `${BOARD}/jobs`;
const VALIDITY_MS = 90 * 24 * 60 * 60 * 1000;
const REVALIDATE_SECONDS = 21600;

type RawPosting = {
  id: number;
  title: string;
  slug: string;
  vertical: string;
  category?: string | null;
  specialty?: string | null;
  city?: string | null;
  state?: string | null;
  locationType?: string | null;
  employmentType?: string | null;
  setting?: string | null;
  shift?: string | null;
  schedule?: string | null;
  payMin?: string | number | null;
  payMax?: string | number | null;
  payPeriod?: string | null;
  startDate?: string | null;
  publishedAt?: string | null;
  description?: string | null;
  requirements?: string | null;
  benefits?: string | null;
};

export type Job = {
  id: number;
  slug: string;
  title: string;
  city: string;
  region: string; // two-letter code when the state is recognised
  regionName: string;
  country: string | null;
  setting: string | null;
  shift: string | null;
  schedule: string | null;
  locationLabel: string; // "on-site" | "hybrid" | "remote"
  remote: boolean;
  employmentLabel: string;
  schemaEmploymentType: string;
  pay: { min: number | null; max: number | null; unit: string; label: string } | null;
  datePosted: string; // ISO
  validThrough: string; // ISO
  descriptionHtml: string;
  requirementsHtml: string | null;
  benefitsHtml: string | null;
  applyUrl: string;
};

// ------------------------------------------------------------------ helpers

const STATES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", DC: "District of Columbia",
  FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois",
  IN: "Indiana", IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana",
  ME: "Maine", MD: "Maryland", MA: "Massachusetts", MI: "Michigan", MN: "Minnesota",
  MS: "Mississippi", MO: "Missouri", MT: "Montana", NE: "Nebraska", NV: "Nevada",
  NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York",
  NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon",
  PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina", SD: "South Dakota",
  TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont", VA: "Virginia",
  WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
};
const STATE_BY_NAME = new Map(
  Object.entries(STATES).map(([code, name]) => [name.toLowerCase(), code]),
);

/** Two-letter code for a state name or code, or null when it is not a US state. */
function stateCode(value: string): string | null {
  const v = value.trim();
  if (STATES[v.toUpperCase()]) return v.toUpperCase();
  return STATE_BY_NAME.get(v.toLowerCase()) ?? null;
}

const EMPLOYMENT: Record<string, { label: string; schema: string }> = {
  full_time: { label: "Full-time", schema: "FULL_TIME" },
  part_time: { label: "Part-time", schema: "PART_TIME" },
  contract: { label: "Contract", schema: "CONTRACTOR" },
  temp_to_hire: { label: "Temp-to-hire", schema: "TEMPORARY" },
  per_diem: { label: "Per diem", schema: "PER_DIEM" },
};

const PAY_UNIT: Record<string, { unit: string; suffix: string }> = {
  hourly: { unit: "HOUR", suffix: "hour" },
  daily: { unit: "DAY", suffix: "day" },
  weekly: { unit: "WEEK", suffix: "week" },
  annually: { unit: "YEAR", suffix: "year" },
};

function num(v: string | number | null | undefined): number | null {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function money(n: number): string {
  return `$${n.toLocaleString("en-US", { maximumFractionDigits: n % 1 ? 2 : 0, minimumFractionDigits: n % 1 ? 2 : 0 })}`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inline(s: string): string {
  return escapeHtml(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

/**
 * A short line with no sentence punctuation reads as a section label
 * ("Responsibilities", "Qualifications:"). Values such as
 * "Milwaukee, WI 53215 (Preferred)" carry digits, commas, or parentheses and
 * stay as text.
 */
function isLabel(line: string): boolean {
  if (line.length > 40 || /[.!?]$/.test(line)) return false;
  if (line.endsWith(":")) return true;
  return !/[:,()\d]/.test(line);
}

/**
 * Board text is a mix of light markdown (`## heading`, `- item`, `**bold**`)
 * and plain text with one item per line. Render both as safe HTML: everything
 * is escaped first, so nothing from the feed can inject markup.
 */
export function boardTextToHtml(src: string | null | undefined): string {
  if (!src || !src.trim()) return "";
  const out: string[] = [];
  const blocks = src
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((b) => b.split("\n").map((l) => l.trim()).filter(Boolean))
    .filter((b) => b.length);
  for (let lines of blocks) {
    const md = lines.some((l) => /^(#{1,6}\s|[-*•]\s)/.test(l));
    if (!md && lines.length > 1 && isLabel(lines[0])) {
      out.push(`<h3>${inline(lines[0].replace(/:$/, ""))}</h3>`);
      lines = lines.slice(1);
    }
    if (!md) {
      if (lines.length === 1 && isLabel(lines[0])) {
        out.push(`<h3>${inline(lines[0].replace(/:$/, ""))}</h3>`);
      } else if (lines.length >= 3 && lines.every((l) => l.length <= 220)) {
        out.push(`<ul>${lines.map((l) => `<li>${inline(l)}</li>`).join("")}</ul>`);
      } else {
        out.push(`<p>${lines.map(inline).join("<br />")}</p>`);
      }
      continue;
    }
    let para: string[] = [];
    let list: string[] = [];
    const flushPara = () => {
      if (para.length) out.push(`<p>${para.map(inline).join("<br />")}</p>`);
      para = [];
    };
    const flushList = () => {
      if (list.length) out.push(`<ul>${list.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`);
      list = [];
    };
    for (const line of lines) {
      const heading = line.match(/^#{1,6}\s+(.*)$/);
      const item = line.match(/^[-*•]\s+(.*)$/);
      if (heading) {
        flushPara();
        flushList();
        out.push(`<h3>${inline(heading[1])}</h3>`);
      } else if (item) {
        flushPara();
        list.push(item[1]);
      } else {
        flushList();
        para.push(line);
      }
    }
    flushPara();
    flushList();
  }
  return out.join("\n");
}

/** FocusedEDU publishes K-12 roles only: education postings set in a school. */
function isK12School(p: RawPosting): boolean {
  return p.vertical === "education" && /school|k-?12/i.test(p.setting ?? "");
}

function toJob(p: RawPosting, now: number): Job | null {
  if (!p.publishedAt || !p.slug || !p.title) return null;
  const posted = Date.parse(p.publishedAt);
  if (Number.isNaN(posted)) return null;
  const expires = posted + VALIDITY_MS;
  if (expires <= now) return null;

  // The board occasionally has city and state swapped ("Connecticut", "Middletown").
  let city = (p.city ?? "").trim();
  let state = (p.state ?? "").trim();
  if (stateCode(city) && !stateCode(state)) [city, state] = [state, city];
  const code = stateCode(state);

  const employment = EMPLOYMENT[p.employmentType ?? ""] ?? EMPLOYMENT.full_time;
  const unit = PAY_UNIT[p.payPeriod ?? ""] ?? null;
  const min = num(p.payMin);
  const max = num(p.payMax);
  let pay: Job["pay"] = null;
  if (unit && (min || max)) {
    const lo = min ?? max!;
    const hi = max ?? min!;
    const label = lo === hi ? `${money(lo)}/${unit.suffix}` : `${money(lo)}–${money(hi)}/${unit.suffix}`;
    pay = { min: lo, max: hi, unit: unit.unit, label };
  }
  const locationType = (p.locationType ?? "onsite").toLowerCase();

  return {
    id: p.id,
    slug: p.slug,
    title: p.title.trim(),
    city,
    region: code ?? state,
    regionName: code ? STATES[code] : state,
    country: code ? "US" : null,
    setting: p.setting?.trim() || null,
    shift: p.shift?.trim() || null,
    schedule: p.schedule?.trim() || null,
    locationLabel: locationType === "onsite" ? "on-site" : locationType,
    remote: locationType === "remote",
    employmentLabel: employment.label,
    schemaEmploymentType: employment.schema,
    pay,
    datePosted: new Date(posted).toISOString(),
    validThrough: new Date(expires).toISOString(),
    descriptionHtml: boardTextToHtml(p.description),
    requirementsHtml: boardTextToHtml(p.requirements) || null,
    benefitsHtml: boardTextToHtml(p.benefits) || null,
    applyUrl: `${BOARD}/jobs/${encodeURIComponent(p.slug)}`,
  };
}

async function fetchBoard<T>(path: string): Promise<T> {
  const res = await fetch(`${BOARD}${path}`, {
    headers: { accept: "application/json" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) throw new Error(`job board ${path} responded ${res.status}`);
  const body = (await res.json()) as { json?: T };
  if (!body.json) throw new Error(`job board ${path} returned no data`);
  return body.json;
}

/**
 * Current K-12 school openings, newest first.
 *
 * At build time a board outage yields an empty list so the site still deploys.
 * At runtime (ISR revalidation) it throws instead, which makes Next keep
 * serving the last good page rather than replacing it with an empty one.
 */
export async function getOpenSchoolJobs(): Promise<Job[]> {
  const building = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;
  let list: RawPosting[];
  try {
    list = (await fetchBoard<{ jobPostings: RawPosting[] }>("/_api/public/job-postings"))
      .jobPostings;
  } catch (err) {
    if (building) {
      console.warn("[jobs] job board unavailable at build; rendering no openings:", err);
      return [];
    }
    throw err;
  }
  const now = Date.now();
  const open = list.filter(isK12School).filter((p) => toJob(p, now) !== null);
  const detailed = await Promise.all(
    open.map(async (p) => {
      try {
        const d = await fetchBoard<{ jobPosting: RawPosting }>(
          `/_api/public/job-posting?slug=${encodeURIComponent(p.slug)}`,
        );
        // The list is the source of truth for what is published; the detail
        // adds requirements, benefits, and schedule.
        return { ...p, ...d.jobPosting, slug: p.slug, publishedAt: p.publishedAt };
      } catch {
        return p;
      }
    }),
  );
  return detailed
    .map((p) => toJob(p, now))
    .filter((j): j is Job => j !== null)
    .sort((a, b) => b.datePosted.localeCompare(a.datePosted));
}

export async function getOpenSchoolJob(slug: string): Promise<Job | null> {
  const jobs = await getOpenSchoolJobs();
  return jobs.find((j) => j.slug === slug) ?? null;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "a" or "an" for a following word. */
export function article(word: string): string {
  return /^[aeiou]/i.test(word.trim()) ? "an" : "a";
}

/** JobPosting structured data for one opening (Google for Jobs). */
export function jobPostingSchema(job: Job, pageUrl: string) {
  const description = [
    job.descriptionHtml,
    job.requirementsHtml ? `<h3>Requirements</h3>\n${job.requirementsHtml}` : "",
    job.benefitsHtml ? `<h3>Benefits</h3>\n${job.benefitsHtml}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.schemaEmploymentType,
    identifier: {
      "@type": "PropertyValue",
      name: "FocusedEDU Staffing Group",
      value: String(job.id),
    },
    hiringOrganization: {
      "@type": "Organization",
      "@id": "https://www.focusedu-staffing.com/#organization",
      name: "FocusedEDU Staffing Group",
      sameAs: "https://www.focusedu-staffing.com",
      logo: "https://www.focusedu-staffing.com/icon.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.city,
        addressRegion: job.region,
        ...(job.country ? { addressCountry: job.country } : {}),
      },
    },
    ...(job.remote ? { jobLocationType: "TELECOMMUTE" } : {}),
    ...(job.pay
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: {
              "@type": "QuantitativeValue",
              ...(job.pay.min === job.pay.max
                ? { value: job.pay.min }
                : { minValue: job.pay.min, maxValue: job.pay.max }),
              unitText: job.pay.unit,
            },
          },
        }
      : {}),
    url: pageUrl,
  };
}
