import { sourceLines } from "@/lib/leadSource";

// The site's forms post straight to the CRM (crm.focused-staffing.com, endpoint
// fsg_site_form_POST.ts in rflom-alt/fsg-crm): it checks Turnstile and the spam
// rules, files the lead in Sales (as FocusedEDU), emails the team inbox, and the
// page then shows the calendar. If the CRM cannot be reached the visitor's email
// app opens with the whole request, so a lead is never lost to an outage.
export const FORM_ENDPOINT = "https://crm.focused-staffing.com/_api/inbound/fsg-site-form";
// A hung CRM must become the email path, not a "Sending…" that never ends.
const TIMEOUT_MS = 15000;
// Cloudflare Turnstile "Focused Staffing website forms" — the public site key.
export const TURNSTILE_SITE_KEY = "0x4AAAAAAFmuNGzRY8qbjDSG";

export type SiteFormPayload = {
  form: "contact" | "staffing" | "report";
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  role?: string;
  message?: string;
  detail?: string;
  website: string; // honeypot: always empty for a person
  "cf-turnstile-response": string;
};

/** `unreachable`: the CRM did not answer usefully, so the email path takes over. */
export class SiteFormError extends Error {
  constructor(message: string, readonly unreachable: boolean) {
    super(message);
  }
}
export const isUnreachable = (e: unknown) => e instanceof SiteFormError && e.unreachable;

/** The prepared email, for the fallback. */
export const mailHref = (to: string, subject: string, body: string) =>
  "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

/** One id per filled-in form, so a retried post files once. */
export const newSubmissionId = () =>
  "edu-" + (globalThis.crypto?.randomUUID?.() ?? String(Date.now()) + Math.random().toString(36).slice(2));

const NOT_REACHED = "We could not reach our system just now.";

function utm(): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    new URLSearchParams(window.location.search).forEach((v, k) => {
      if (k.startsWith("utm_")) out[k] = v.slice(0, 200);
    });
  } catch {
    /* no query */
  }
  return out;
}

/**
 * `heard` is the "How did you hear about us?" answer, on the forms that ask it.
 * Every form's message ends with where the lead came from (lib/leadSource.ts):
 * the CRM puts the message in the lead's note and the team's email, and keeps
 * at most 4,000 characters of it, so the visitor's words give way, not these.
 */
export async function submitSiteForm(
  id: string,
  p: SiteFormPayload,
  heard?: string,
): Promise<{ book: string }> {
  const source = sourceLines(heard).join("\n");
  const said = (p.message ?? "").trim().slice(0, 4000 - source.length - 2);
  // The CRM's gibberish rule looks for a message that is one run of 20+ letters
  // (a bot's); no person writes that, so such a message goes as typed.
  const message = /^[A-Za-z]{20,}$/.test(said) ? said : (said ? said + "\n\n" : "") + source;
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  let res: Response;
  try {
    res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...p, message, page: window.location.pathname, utm: utm() }),
      signal: ctl.signal,
    });
  } catch {
    throw new SiteFormError(NOT_REACHED, true);
  } finally {
    clearTimeout(timer);
  }
  let body: { ok?: boolean; book?: string; error?: string } | null = null;
  try {
    body = await res.json();
  } catch {
    /* not JSON */
  }
  if (!res.ok || !body?.ok || !body.book) {
    if (!body || res.status >= 500) throw new SiteFormError(NOT_REACHED, true);
    throw new SiteFormError(body.error || "Your message could not be sent.", false);
  }
  return { book: body.book };
}
