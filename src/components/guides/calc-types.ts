// A calculator is a list of roles; each role has its own inputs and its own sum.
// The reader's numbers never leave the page unless they press send.

export type CalcField = {
  key: string;
  label: string;
  help?: string;
  /** Shown before or after the number: "$", "per day", "hours a week". */
  prefix?: string;
  suffix?: string;
  def: number;
  /** Takes the whole row. */
  wide?: boolean;
  min?: number;
  max?: number;
  step?: number;
  source?: { name: string; url: string };
};

export type CalcLine = { label: string; value: number; note?: string };

export type CalcResult = {
  perWeek: number;
  total: number;
  lines: CalcLine[];
  /** Results that are not dollars: minutes owed, hours undelivered. */
  facts?: { label: string; value: string }[];
};

export type CalcRole = {
  key: string;
  label: string;
  fields: CalcField[];
  /** When this role’s result reads differently from the calculator’s. */
  totalLabel?: string;
  perWeekLabel?: string;
  compute: (v: Record<string, number>) => CalcResult;
};

export type Calculator = {
  id: string;
  /** Named in the lead the team receives. */
  name: string;
  heading: string;
  intro: string;
  /** "What this open seat costs" / "What this open seat is losing". */
  totalLabel: string;
  perWeekLabel: string;
  roles: CalcRole[];
  ask: { heading: string; body: string; button: string; orgLabel: string };
};

export const money = (n: number) =>
  "$" + Math.round(Number.isFinite(n) ? n : 0).toLocaleString("en-US");
