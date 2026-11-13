import type { PlatformProduct, PlatformSuite, ProductSlug } from "@/components/platform/types";

/*
 * The FSG Platform: the software that runs every FocusedEDU placement.
 *
 * The suite name and the three product names live here and nowhere else, so a
 * rename is one edit. Every line below describes something we can show on a
 * call with sample data. Keep it that way: no feature goes on these pages until
 * it can be opened in a demo.
 */

const SUITE_NAME = "The FSG Platform";
const SITE = "https://www.focusedu-staffing.com";
const BOOK = { label: "See it on a call", href: "/book-a-call" };

const fsgMatch: PlatformProduct = {
  slug: "fsg-match",
  name: "FSG Match",
  stage: "Find",
  covers: "Recruiting and openings",
  question: "How do I know a staffing agency is actually working my opening?",
  metaTitle: "FSG Match: Recruiting Tracked by Opening",
  metaDescription:
    "FSG Match gives every school opening one named recruiter, a running record of activity, and an automatic flag when it goes quiet for two business days.",
  h1: "Every opening has one recruiter who owns it, and a clock that keeps it moving.",
  lede: "FSG Match is where our recruiters work your openings. Each one has a named owner, a running record of activity, and an automatic flag the moment it goes quiet.",
  summary:
    "Recruiting and openings: one named recruiter per opening, logged activity, and an automatic flag after two quiet business days.",
  problem: {
    title: "The opening that goes quiet.",
    body: [
      "You send a role to an agency and hear nothing for a week. Nobody is sure who has it, and the first update comes when you ask for one.",
      "FSG Match is built so that cannot happen. An opening cannot sit without an owner, and it cannot go two business days without recruiting activity before the system puts a task in front of its recruiter.",
    ],
  },
  visual: {
    kind: "opening",
    role: "Special Education Teacher, Grades 6–8",
    client: "Demo Charter School",
    status: "Active",
    recruiter: "Dana Rivera",
    lastActivity: "Today · Candidate presented",
    daysQuiet: "0",
    history: [
      { when: "Nov 9", what: "Opening assigned to Dana Rivera" },
      { when: "Nov 9", what: "Acknowledged by Dana Rivera" },
      { when: "Nov 10", what: "Status changed to Active" },
    ],
    caption: "What FSG Match keeps on every opening. The school and names are demo data.",
  },
  highlights: [
    "One named recruiter on every opening",
    "Last activity and days quiet on the record",
    "Two quiet business days files a task automatically",
  ],
  sees: {
    title: "What you see with FSG Match.",
    intro: "You do not log in to anything. You see it in how your openings are handled.",
    items: [
      {
        icon: "UserCheck",
        title: "One named recruiter",
        body: "Every opening you send is assigned to one recruiter. You know who to call, and so do we.",
      },
      {
        icon: "Clock",
        title: "A clock on every opening",
        body: "Each opening shows its last recruiting activity and how many days it has been quiet. Two business days without activity files a task to its recruiter.",
      },
      {
        icon: "ClipboardList",
        title: "A record of every hand-off",
        body: "Who assigned the opening, who picked it up, and what changed are kept on the opening itself. When you ask where a role stands, the answer comes from the record.",
      },
      {
        icon: "FileText",
        title: "Candidates presented in writing",
        body: "Each candidate arrives as a written presentation: the position, your recruiter's summary, and the list of approved documents and clearances.",
      },
      {
        icon: "Mail",
        title: "Requests that land in the system",
        body: "The staffing request form on this site files straight into FSG Match, with no inbox in between.",
      },
      {
        icon: "CalendarCheck",
        title: "A calendar link, not phone tag",
        body: "Book time with our team from one link. Pick a slot and it is on both calendars.",
      },
    ],
  },
  proof: {
    title: "An average of four qualified candidates per opening.",
    body: "At Cesar Chavez Public Charter School in Washington, DC, school leaders interview fully credentialed candidates for each role — a choice, not a scramble.",
    link: { label: "Read the case studies", href: "/case-studies" },
  },
  faqs: [
    {
      q: "How do I know a staffing agency is actually working my opening?",
      a: "With FocusedEDU, every opening has one named recruiter and a record of its last recruiting activity. If an active opening goes two business days without activity, FSG Match files a task to that recruiter automatically.",
    },
    {
      q: "Does my team have to learn new software to use FSG Match?",
      a: "No. FSG Match is the system our recruiters work in. You send openings the way you do today, through the request form, by email, or on a call, and your recruiter keeps the record.",
    },
    {
      q: "How do I find out where an opening stands?",
      a: "Ask your recruiter. Every opening carries its last activity, the days since, and its full history, so the answer comes from the record and not from memory.",
    },
    {
      q: "Which school roles does FSG Match cover?",
      a: "Every role we staff: substitute teachers, special education teachers, paraprofessionals, and related-service providers.",
    },
  ],
};

const verifai: PlatformProduct = {
  slug: "verifai",
  name: "VerifAI",
  stage: "Clear",
  covers: "Credentialing",
  question: "Is there a staffing agency with credential tracking for schools?",
  metaTitle: "VerifAI: Credential Tracking for Schools",
  metaDescription:
    "VerifAI is FocusedEDU's credentialing system. Every clearance and certificate is reviewed, approved, and tracked to its expiration date before a candidate is presented to your school.",
  h1: "Every clearance approved and current before anyone is presented to your school.",
  lede: "VerifAI is our credentialing system. It collects each professional's documents, tracks every expiration date, and the candidate presentation goes out once every required credential is approved and current.",
  summary:
    "Credentialing: every clearance and certificate reviewed, approved, and tracked to its expiration date, with the approved file listed on each candidate presentation.",
  problem: {
    title: "Finding out about a clearance after the start date.",
    body: [
      "A missing or lapsed clearance usually surfaces at the worst moment: the morning someone is due in a classroom, or in the middle of an audit.",
      "VerifAI moves that check to the front. Each professional uploads their documents in one place, our team reviews and approves each one, and the system tracks every expiration date from then on.",
    ],
  },
  visual: {
    kind: "presentation",
    subject: "Candidate Presentation: Jordan Ellis",
    greeting: "Dear Ms. Okafor,",
    candidate: "Jordan Ellis",
    position: "Paraprofessional",
    summary:
      "Jordan has four years of classroom support experience across grades K–5, including two years in an autistic support classroom.",
    documents: [
      { name: "PA Child Abuse History Clearance", approved: "11/3/2026" },
      { name: "PA State Police Criminal Record Check", approved: "11/3/2026" },
      { name: "FBI Fingerprint Clearance", approved: "11/5/2026" },
      { name: "TB Test", approved: "11/5/2026" },
    ],
    recruiter: "Dana Rivera",
    caption: "The candidate presentation a school receives. The names and dates are demo data.",
  },
  highlights: [
    "Approved documents and clearances listed on every presentation",
    "Presented once every required credential is approved and current",
    "Expiration dates tracked, renewals chased by us",
  ],
  sees: {
    title: "What you see with VerifAI.",
    intro: "A complete file in front of you before the interview, and nothing to chase afterward.",
    items: [
      {
        icon: "FileText",
        title: "A presentation that lists the file",
        body: "Each candidate is presented in writing with a list of approved documents and clearances, and the date each one was approved.",
      },
      {
        icon: "ShieldCheck",
        title: "Complete before presented",
        body: "The presentation goes out once every required credential is approved and unexpired, and the start date is confirmed.",
      },
      {
        icon: "Clock",
        title: "Expirations tracked",
        body: "Every clearance, certificate, and test carries its expiration date in the system, so a renewal is handled before it lapses.",
      },
      {
        icon: "Mail",
        title: "The chasing is ours",
        body: "Reminders go to the professional automatically until each missing document is in. Your office is not the one following up.",
      },
    ],
  },
  proof: {
    title: "Hiring time cut in half.",
    body: "Automated credentialing cuts hiring time in half while weeding out unqualified candidates before they ever reach your desk.",
    link: { label: "Read what school leaders say", href: "/references" },
  },
  faqs: [
    {
      q: "Is there a staffing agency with credential tracking for schools?",
      a: "Yes. FocusedEDU runs every placement through VerifAI, its own credentialing system. Each required document is reviewed and approved, each expiration date is tracked, and the approved list comes with the candidate presentation.",
    },
    {
      q: "Which credentials does VerifAI track for school staff?",
      a: "The documents your state and your school require for the role, such as background clearances, teaching certificates, and TB tests, each with the date it was approved and the date it expires.",
    },
    {
      q: "Can we see a candidate's clearances before they start?",
      a: "Yes. The candidate presentation lists every approved document and clearance with the date it was approved.",
    },
    {
      q: "What happens when a clearance is about to expire?",
      a: "VerifAI tracks the expiration date and reminds the professional to renew and upload the new document before it lapses.",
    },
    {
      q: "Who reviews the documents?",
      a: "Our credentialing team reviews each upload and either approves it or sends it back. Only approved documents appear on a presentation.",
    },
  ],
};

const fsgGo: PlatformProduct = {
  slug: "fsg-go",
  name: "FSG Go",
  stage: "Work",
  covers: "Scheduling, time, and invoicing",
  question: "How do schools approve agency timesheets and check the invoice?",
  metaTitle: "FSG Go: Timesheets, Sub Requests, Invoices",
  metaDescription:
    "FSG Go is FocusedEDU's platform for substitute requests, timesheet approval, and invoicing. Approvers confirm hours from one emailed link and every invoice carries its approval record.",
  h1: "Approve the week's hours from one email. See the proof on every invoice.",
  lede: "FSG Go is our platform for scheduling, time, and invoicing. Your approvers confirm hours from a link, your buildings request substitutes online, and every invoice arrives with its approval record.",
  summary:
    "Scheduling, time, and invoicing: substitute requests by building, timesheet approval from one emailed link, and an approval record with every invoice.",
  problem: {
    title: "Paying for hours nobody at the school confirmed.",
    body: [
      "Paper timesheets and emailed spreadsheets leave a business office guessing. Who signed off? Was that a half day? Which building?",
      "FSG Go puts every day in front of the person at your school who knows, records their name against it, and attaches that record to the invoice.",
    ],
  },
  visual: {
    kind: "approvalEmail",
    subject: "9 timesheets to approve for the week of Nov 9 - Demo Charter School",
    heading: "9 timesheets to approve",
    greeting: "Hi Priya,",
    line: {
      before: "9 timesheets (58.5 hours) for the week of ",
      week: "Nov 9",
      between: " at ",
      client: "Demo Charter School",
      after: " are ready for your approval.",
    },
    instruction:
      "Open them with the button, tick the ones that are right and approve; send any that are wrong back with a note and we'll fix them.",
    button: "Review timesheets",
    note: "This link works until Thu, Nov 19, 1:00 PM EST; you can open it as many times as you need.",
    caption: "The Monday email each approver receives. The school and name are demo data.",
  },
  screen: {
    eyebrow: "What your approver opens",
    title: "The week, one day per line, ready to check.",
    body: "The link opens that week's timesheets for your school: each day with the person, building, role, times, and who they covered for. Tick the days that are right, then choose Approve.",
    visual: {
      kind: "image",
      src: "/platform/fsg-go-review-portal.png",
      alt: "The FSG Go timesheet review screen: a week of substitute days listed by date, person, building, role, and hours, with three days ticked and the Approve, Needs adjustment, and Reject actions.",
      width: 1992,
      height: 1084,
      caption: "The timesheet review screen, shown on demo data.",
    },
  },
  highlights: [
    "One email on Monday, one link, no password",
    "A name and a time on every approved day",
    "Substitute requests by building, filled and confirmed",
  ],
  week: {
    title: "How a week runs in FSG Go.",
    intro: "Four steps, and your approver is in only one of them.",
    steps: [
      {
        n: "01",
        title: "Friday: the professional confirms",
        body: "Each professional gets a text with their week, filled in from the schedule. They confirm it or correct it.",
      },
      {
        n: "02",
        title: "Monday: one email to your approver",
        body: "At 1 PM each approver receives one email with their own link. There is no password, and it works on a phone.",
      },
      {
        n: "03",
        title: "By Thursday: tick and approve",
        body: "They tick the days that are right and approve with their name. Anything wrong goes back with a note and we fix it.",
      },
      {
        n: "04",
        title: "Invoice: the record comes with it",
        body: "The invoice is itemized, and a Timesheet approvals PDF goes with it: every day, who approved it, and when.",
      },
    ],
  },
  sees: {
    title: "What you see with FSG Go.",
    intro: "Each person at your school sees only the part that is theirs.",
    items: [
      {
        icon: "CalendarCheck",
        title: "Substitute requests by building",
        body: "Request a sub by building, position, full or half day, room, and who is being covered: one at a time, repeating, or pasted in as a batch. You see who is coming, and fills are emailed and texted to your school contacts.",
      },
      {
        icon: "Mail",
        title: "One email, one link",
        body: "Approvers get their timesheets Monday at 1 PM with a reminder Wednesday. The link works until Thursday at 1 PM and can be opened as many times as needed.",
      },
      {
        icon: "BadgeCheck",
        title: "A name on every decision",
        body: "Approve, Needs adjustment, or Reject. Approving takes a typed name; the other two take a note that comes straight back to us.",
      },
      {
        icon: "FileText",
        title: "The approval record with the invoice",
        body: "A Timesheet approvals PDF goes with each invoice, listing every day, who approved it, and when.",
      },
      {
        icon: "DollarSign",
        title: "Invoices your business office can post",
        body: "Itemized, with sections and subtotals. Where your district needs it: your vendor number, fund and account codes, a row per person or per day, and a timesheet backup page.",
      },
      {
        icon: "Users",
        title: "The right contact for each job",
        body: "Separate contacts for approving time, requesting staff, and billing, so each message reaches the person who handles it. Messages keeps one thread with our scheduling team.",
      },
    ],
  },
  proof: {
    title: "Every billed day carries a name and a time.",
    body: "This is the record that goes with an invoice. Beside each day: “Approved by Priya Shah through the review link emailed to Demo Charter School, 11/16/2026 2:14 PM.”",
    visual: {
      kind: "record",
      contractor: "Alex Morgan",
      client: "Demo Charter School",
      role: "Paraprofessional",
      period: "11/09/2026 - 11/15/2026",
      banner: "All 5 days approved by Demo Charter School",
      rows: [
        {
          date: "Mon 11/09/2026",
          hours: "7.00",
          approval:
            "Approved by Priya Shah through the review link emailed to Demo Charter School, 11/16/2026 2:14 PM",
        },
        {
          date: "Tue 11/10/2026",
          hours: "7.00",
          approval:
            "Approved by Priya Shah through the review link emailed to Demo Charter School, 11/16/2026 2:14 PM",
        },
        {
          date: "Wed 11/11/2026",
          hours: "7.00",
          approval:
            "Approved by Priya Shah through the review link emailed to Demo Charter School, 11/16/2026 2:14 PM",
        },
        {
          date: "Thu 11/12/2026",
          hours: "7.00",
          approval:
            "Approved by Priya Shah through the review link emailed to Demo Charter School, 11/16/2026 2:14 PM",
        },
        {
          date: "Fri 11/13/2026",
          hours: "7.00",
          approval:
            "Approved by Priya Shah through the review link emailed to Demo Charter School, 11/16/2026 2:14 PM",
        },
      ],
      total: "Hours worked: 35.00",
      caption: "The timesheet and approval record that goes with an invoice. The school and names are demo data.",
    },
  },
  faqs: [
    {
      q: "How do schools approve agency timesheets and check the invoice?",
      a: "With FocusedEDU, each approver gets one email on Monday with their own link. They tick the days that are right and approve with their name. The invoice then arrives with a Timesheet approvals PDF showing every day, who approved it, and when.",
    },
    {
      q: "Do our approvers need an account or a password?",
      a: "No. Each approver gets an email with their own link. It opens on a phone or a computer with no password.",
    },
    {
      q: "What if a timesheet is wrong?",
      a: "Choose Needs adjustment or Reject and add a note. It comes back to our team, we correct it, and it returns for approval.",
    },
    {
      q: "How do we request a substitute?",
      a: "Online, by building, position, full or half day, room, and who is being covered. Requests can repeat or be pasted in as a batch. You see who is coming, and fills are emailed and texted to your school contacts.",
    },
    {
      q: "Can invoices match our district's format?",
      a: "Yes. Invoice layouts are set per district: vendor number, fund and account codes, a row per person or per day, and a timesheet backup page.",
    },
  ],
};

export const platform: PlatformSuite = {
  name: SUITE_NAME,
  site: SITE,
  brand: "FocusedEDU",
  providerId: `${SITE}/#organization`,
  audience: "K-12 schools and districts",
  metaTitle: "Staffing Software for K-12 Schools",
  metaDescription:
    "The FSG Platform is the software behind every FocusedEDU placement: a named recruiter on each opening, credentials tracked to the expiration date, and timesheets approved from one email.",
  eyebrow: SUITE_NAME,
  h1: "Know who is coming, that they are cleared, and what you are paying for.",
  lede: `${SUITE_NAME} is the proprietary software behind every FocusedEDU placement: recruiting, credentialing, scheduling, time, and invoicing. It is included with every engagement.`,
  intro: {
    eyebrow: "Find. Clear. Work.",
    title: "One platform follows every hire, from the opening to the invoice.",
    body: "Most staffing runs on inboxes and spreadsheets, which is why schools end up chasing updates, clearances, and timesheets. Ours runs on one platform, so the answer is already on record when you ask.",
  },
  cta: BOOK,
  secondaryCta: { label: "Send a staffing request", href: "/request-staff" },
  faqs: [
    {
      q: "What software does FocusedEDU use to staff our school?",
      a: "The FSG Platform, which has three parts: FSG Match for recruiting and openings, VerifAI for credentialing, and FSG Go for substitute requests, timesheets, and invoicing. FocusedEDU is the K-12 division of Focused Staffing Group, which built all three.",
    },
    {
      q: "Does our school have to install or learn anything?",
      a: "Nothing is installed. Approvers open timesheets from an emailed link with no password, and schools that request substitutes online get a login from us. Everything else runs on our side.",
    },
    {
      q: "Can we see the platform before we commit?",
      a: "Yes. Book a call and we will walk through each part on sample data: an opening, a candidate presentation, a timesheet approval, and an invoice.",
    },
    {
      q: "Can other schools see our information?",
      a: "No. Logins are issued by our team and limited to your own school.",
    },
  ],
  closing: {
    title: "See it on one real opening.",
    body: "Bring a role you need filled. We will show you how it moves through the platform, from the request to the invoice.",
  },
  teaser: {
    eyebrow: SUITE_NAME,
    title: "The software behind every placement.",
    body: "A named recruiter on each opening, every clearance tracked to its expiration date, and timesheets your approvers confirm from one email.",
  },
  products: [fsgMatch, verifai, fsgGo],
};

export function getPlatformProduct(slug: string): PlatformProduct | undefined {
  return platform.products.find((p) => p.slug === (slug as ProductSlug));
}
