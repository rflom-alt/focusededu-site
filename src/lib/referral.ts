// The refer-a-friend page (/refer?r=<code>) posts straight to the CRM
// (crm.focused-staffing.com, endpoint referral_POST.ts in rflom-alt/fsg-crm), the
// same door pattern as the site's other forms (lib/siteForm.ts): CORS for this
// site's origins, the honeypot, the spam rules and Turnstile with the same site
// key. The CRM files the friend as a recruiting candidate (origin "Referral",
// custom.referral_code) and gives a recruiter a same-day call task.
export const REFERRAL_ENDPOINT = "https://crm.focused-staffing.com/_api/inbound/referral";
const TIMEOUT_MS = 15000;

/** A personal referral code: 8 lowercase letters or digits. Anything else is no code. */
export const CODE_RE = /^[a-z0-9]{8}$/;
export function codeFrom(search: string): { code: string; state: "ok" | "missing" | "malformed" } {
  let raw = "";
  try {
    raw = (new URLSearchParams(search).get("r") ?? "").trim();
  } catch {
    raw = "";
  }
  if (!raw) return { code: "", state: "missing" };
  const lower = raw.toLowerCase();
  return CODE_RE.test(lower) ? { code: lower, state: "ok" } : { code: "", state: "malformed" };
}

export type ReferralMode = "friend" | "self";
export type ReferralPayload = {
  code: string; // "" when the link had none (then only "self" is offered)
  mode: ReferralMode;
  friend_name: string;
  friend_email: string;
  friend_phone: string;
  role: string;
  state: string;
  note: string;
  referrer_name: string;
  website: string; // honeypot: always empty for a person
  "cf-turnstile-response": string;
};

export const ROLES = [
  "Paraprofessional / aide",
  "Substitute teacher",
  "Special education teacher",
  "School nurse",
  "Therapist (speech, OT, PT)",
  "School psychologist / counselor",
  "Behavior technician / RBT",
  "BCBA / behavior specialist",
  "Other school role",
];

export const STATES: [string, string][] = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"], ["CA", "California"],
  ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"], ["DC", "District of Columbia"],
  ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"], ["ID", "Idaho"], ["IL", "Illinois"],
  ["IN", "Indiana"], ["IA", "Iowa"], ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"],
  ["ME", "Maine"], ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
  ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"], ["NV", "Nevada"],
  ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"], ["NY", "New York"],
  ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"], ["OK", "Oklahoma"], ["OR", "Oregon"],
  ["PA", "Pennsylvania"], ["RI", "Rhode Island"], ["SC", "South Carolina"], ["SD", "South Dakota"],
  ["TN", "Tennessee"], ["TX", "Texas"], ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"],
  ["WA", "Washington"], ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
];

/** `unreachable`: the CRM did not answer usefully (an outage), not a field the person can fix. */
export class ReferralError extends Error {
  constructor(message: string, readonly unreachable: boolean) {
    super(message);
  }
}

export async function submitReferral(p: ReferralPayload): Promise<void> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  let res: Response;
  try {
    res = await fetch(REFERRAL_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(p),
      signal: ctl.signal,
    });
  } catch {
    throw new ReferralError("We could not reach our system just now.", true);
  } finally {
    clearTimeout(timer);
  }
  let body: { ok?: boolean; error?: string } | null = null;
  try {
    body = await res.json();
  } catch {
    /* not JSON */
  }
  if (res.ok && body?.ok) return;
  if (!body || res.status >= 500) throw new ReferralError("We could not reach our system just now.", true);
  throw new ReferralError(body.error || "This could not be sent.", false);
}
