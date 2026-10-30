// Where a lead came from, recorded with the lead itself: what the visitor says
// ("How did you hear about us?") and, invisibly, the first page of their visit
// and the site that sent them there. The visit is kept in sessionStorage (this
// tab, this session), never a cookie.

export const HEARD_FROM_OPTIONS = [
  "Google search",
  "ChatGPT / AI assistant",
  "Bing / DuckDuckGo",
  "LinkedIn",
  "Referral from a colleague",
  "Conference or association",
  "Email from us",
  "Other",
] as const;

const KEY = "fsg-first-visit";
type Visit = { page: string; referrer: string };

// Only where the visitor came from, not the query string a referrer may carry.
function referrerOf(raw: string): string {
  try {
    const u = new URL(raw);
    return (u.origin + u.pathname).slice(0, 300);
  } catch {
    return "";
  }
}

function currentVisit(): Visit {
  return {
    page: (window.location.pathname + window.location.search).slice(0, 300),
    referrer: referrerOf(document.referrer),
  };
}

/** Called on every page view; only the session's first one is kept. */
export function rememberFirstVisit() {
  try {
    if (!sessionStorage.getItem(KEY)) sessionStorage.setItem(KEY, JSON.stringify(currentVisit()));
  } catch {
    /* storage blocked: firstVisit() falls back to this page */
  }
}

function firstVisit(): Visit {
  try {
    const v = JSON.parse(sessionStorage.getItem(KEY) || "null") as Partial<Visit> | null;
    if (v && typeof v.page === "string") return { page: v.page, referrer: String(v.referrer ?? "") };
  } catch {
    /* fall through */
  }
  return currentVisit();
}

/** The listed option chosen, or "" — the value GA4 gets (never the free text). */
export function heardFromChoice(f: FormData): string {
  const v = String(f.get("heard_from") ?? "");
  return (HEARD_FROM_OPTIONS as readonly string[]).includes(v) ? v : "";
}

/** The answer as the team reads it: the option, plus their words for "Other". */
export function heardFromAnswer(f: FormData): string {
  const v = heardFromChoice(f);
  const other = String(f.get("heard_from_other") ?? "").trim().replace(/\s+/g, " ").slice(0, 200);
  return v === "Other" && other ? "Other: " + other : v;
}

/**
 * The lines added to the lead's email / CRM note. `heard` is undefined on a
 * form that does not ask the question.
 */
export function sourceLines(heard?: string): string[] {
  const v = firstVisit();
  return [
    ...(heard === undefined ? [] : ["How they heard about us: " + (heard || "not answered")]),
    "First page: " + (v.page || "unknown"),
    "Referrer: " + (v.referrer || "none (typed, bookmarked or opened from an app)"),
  ];
}
