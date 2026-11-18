import type { Calculator, CalcField, CalcResult } from "@/components/guides/calc-types";

// What one open seat costs a district, from the district's own numbers.
// A preset dollar figure comes from a named public source; every other dollar
// input starts at 0 for the reader to fill in. There is no agency price here:
// the ask is the rate range.

const SCHOOL_DAYS = 5;
const BLS = (name: string, path: string) => ({ name: `BLS, ${name}`, url: `https://www.bls.gov/ooh/${path}` });

const weeksOpen: CalcField = {
  key: "weeksOpen",
  label: "Weeks the seat is open",
  suffix: "weeks",
  def: 8,
  wide: true,
  help: "From the day the seat emptied to the day you expect a qualified person in it.",
};
const subDaily: CalcField = {
  key: "subDaily",
  label: "Substitute cost per day",
  prefix: "$",
  suffix: "per day",
  def: 98,
  help: "The low end of the average across 124 large districts. Enter your own, or 0 if no substitute is covering.",
  source: {
    name: "National Council on Teacher Quality",
    url: "https://www.nctq.org/research-insights/ensuring-strong-and-stable-substitute-teacher-pools/",
  },
};
const coverage: CalcField[] = [
  {
    key: "coverHours",
    label: "Hours a week your own teachers cover",
    suffix: "hours",
    def: 0,
    help: "Planning periods or extra sections picked up for this seat.",
  },
  {
    key: "coverPay",
    label: "Coverage pay per hour",
    prefix: "$",
    suffix: "per hour",
    def: 0,
    help: "The class-coverage rate in your contract.",
  },
  {
    key: "adminHours",
    label: "Administrator hours a week on this vacancy",
    suffix: "hours",
    def: 0,
    help: "Posting, screening, interviewing, calling substitutes, rearranging schedules.",
  },
  {
    key: "adminCost",
    label: "Administrator cost per hour",
    prefix: "$",
    suffix: "per hour",
    def: 0,
    help: "Annual salary divided by hours worked in a year. The median school principal earns $105,870 a year.",
    source: BLS("school principals", "management/elementary-middle-and-high-school-principals.htm"),
  },
];
const students = (label: string, help: string): CalcField => ({
  key: "students",
  label,
  suffix: "students",
  def: 25,
  help,
});
const minutes = (def: number): CalcField => ({
  key: "minutes",
  label: "IEP minutes each student misses a week",
  suffix: "minutes",
  def,
  help: "Minutes written in the IEP that no qualified provider is delivering now.",
});
const makeup = (def: number, source?: CalcField["source"]): CalcField => ({
  key: "makeup",
  label: "Cost of a make-up hour",
  prefix: "$",
  suffix: "per hour",
  def,
  help: source
    ? "Preset to the national median hourly wage. Enter what a make-up hour costs you."
    : "Extended-day pay, a summer session or an outside provider. Enter your own.",
  source,
});

const n = (x: number) => Math.round(x).toLocaleString("en-US");

const seat = (v: Record<string, number>): CalcResult => {
  const sub = (v.subDaily ?? 0) * SCHOOL_DAYS;
  const cover = v.coverHours * v.coverPay;
  const admin = v.adminHours * v.adminCost;
  const minutesWeek = v.students * (v.minutes ?? 0);
  const services = (minutesWeek / 60) * (v.makeup ?? 0);
  const perWeek = sub + cover + admin + services;
  const owed = minutesWeek * v.weeksOpen;
  return {
    perWeek,
    total: perWeek * v.weeksOpen,
    lines: [
      ...("subDaily" in v ? [{ label: "Substitute coverage", value: sub * v.weeksOpen }] : []),
      { label: "Teachers covering classes", value: cover * v.weeksOpen },
      { label: "Administrator time", value: admin * v.weeksOpen },
      ...("minutes" in v
        ? [{ label: "Missed IEP minutes to make up", value: services * v.weeksOpen, note: "At your cost of a make-up hour" }]
        : []),
    ],
    facts: [
      ...("minutes" in v && owed > 0
        ? [{ value: `${n(owed)} minutes (${n(owed / 60)} hours)`, label: "of IEP services missed while the seat is open" }]
        : []),
      ...("subDaily" in v && v.students > 0
        ? [{ value: `${n(v.students * SCHOOL_DAYS * v.weeksOpen)} student-days`, label: "without a certified teacher in the seat" }]
        : []),
    ],
  };
};

const CASELOAD_HELP = "Students with IEP minutes assigned to this seat. One Colorado vacancy left 25 without instruction.";

export const calculators: Record<string, Calculator> = {
  "unfilled-classroom": {
    id: "unfilled-classroom",
    name: "Unfilled classroom cost calculator",
    heading: "What is your open seat costing you?",
    intro:
      "Enter your own numbers. The total updates as you type, and nothing leaves this page unless you choose to send it.",
    totalLabel: "This open seat costs",
    perWeekLabel: "a week",
    roles: [
      {
        key: "sped-teacher",
        label: "Special education teacher",
        fields: [weeksOpen, subDaily, students("Students on this caseload", CASELOAD_HELP), ...coverage, minutes(60), makeup(0)],
        compute: seat,
      },
      {
        key: "classroom-teacher",
        label: "Classroom teacher",
        fields: [weeksOpen, subDaily, students("Students in this class", "Class size."), ...coverage],
        compute: seat,
      },
      {
        key: "slp",
        label: "Speech-language pathologist",
        fields: [
          weeksOpen,
          students("Students on this caseload", "Students with IEP minutes assigned to this seat."),
          minutes(30),
          makeup(47.05, BLS("speech-language pathologists", "healthcare/speech-language-pathologists.htm")),
          ...coverage.slice(2),
        ],
        compute: (v) => seat({ ...v, coverHours: 0, coverPay: 0 }),
      },
      {
        key: "ot",
        label: "Occupational therapist",
        fields: [
          weeksOpen,
          students("Students on this caseload", "Students with IEP minutes assigned to this seat."),
          minutes(30),
          makeup(48.24, BLS("occupational therapists", "healthcare/occupational-therapists.htm")),
          ...coverage.slice(2),
        ],
        compute: (v) => seat({ ...v, coverHours: 0, coverPay: 0 }),
      },
    ],
    ask: {
      heading: "See what filling it would cost.",
      body: "Send us these numbers and we reply with the rate range for this role in your state, who we have, and how fast they can start.",
      button: "Get the rate range for this role",
      orgLabel: "School or district",
    },
  },
};
