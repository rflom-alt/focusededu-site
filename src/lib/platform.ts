import type { PlatformProduct, PlatformSuite, ProductSlug } from "@/components/platform/types";

/*
 * The FSG Platform: the proprietary, AI-native technology behind every FocusedEDU placement.
 *
 * The suite name and the three product names live here and nowhere else, so a
 * rename is one edit. Every line below describes something we can show on a
 * call with sample data, including what the AI does. Keep it that way: no feature
 * goes on these pages until it can be opened in a demo.
 *
 * Voice: the way a consultancy presents its own platforms. Product name as the
 * headline, one definition sentence, numbers large, short verb-led lines, and
 * every result attributed to a named client. Stats come from this site's
 * published figures or from the product itself; none are written here first.
 */

const SUITE_NAME = "The FSG Platform";
const SITE = "https://www.focusedu-staffing.com";
const BOOK = { label: "Request a demo", href: "/book-a-call" };

const fsgMatch: PlatformProduct = {
  slug: "fsg-match",
  name: "FSG Match",
  stage: "Find",
  covers: "AI-enabled recruiting",
  question: "How do I know a staffing agency is actually working my opening?",
  metaTitle: "FSG Match: AI-Enabled Recruiting for Schools",
  metaDescription:
    "FSG Match is FocusedEDU's proprietary, AI-enabled recruiting platform. Every school opening gets one named recruiter, a daily risk review, and AI-prepared next steps.",
  tagline: "Know who owns every opening.",
  lede: "FSG Match is our AI-enabled recruiting platform. It turns each request into a tracked opening, reviews every active search for risk, and prepares the next step for the named recruiter who owns it.",
  summary:
    "AI-enabled recruiting platform that turns every request into a tracked opening with one named recruiter, a daily risk review, and AI-prepared next steps.",
  stats: [
    { value: "1", label: "Named recruiter accountable for every opening" },
    { value: "2 days", label: "Business days of quiet before a search is escalated" },
    { value: "4", label: "Qualified candidates per opening at a partner school" },
  ],
  problem: {
    title: "The opening that goes quiet.",
    body: [
      "You send a role to an agency and hear nothing for a week. Nobody is sure who has it, and the first update comes when you ask for one.",
      "FSG Match removes that failure. No opening sits without an owner. Every active search is reviewed for risk each weekday morning, and two business days of quiet puts a task in front of its recruiter.",
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
    "Every active search reviewed for risk each weekday",
    "AI-prepared next steps, directed by your recruiter",
  ],
  inside: {
    title: "Inside FSG Match.",
    intro: "AI works inside the recruiter's day, so nothing waits on memory or an inbox.",
    items: [
      {
        icon: "Phone",
        title: "Call to opening",
        body: "Transcribes the recorded call when you phone in a need, extracts the role, building, and dates, and drafts the opening.",
      },
      {
        icon: "Target",
        title: "Daily risk review",
        body: "Reviews every active search each weekday morning and surfaces the ones at risk: no debrief, no answer, lost momentum.",
      },
      {
        icon: "ClipboardList",
        title: "Next-step drafting",
        body: "Drafts the next step for each search at risk and turns every promised follow-up into a dated task.",
      },
      {
        icon: "Sparkles",
        title: "Record intelligence",
        body: "Summarizes the full history of any opening or candidate on demand, so whoever takes your call knows where it stands.",
      },
      {
        icon: "Search",
        title: "Personalized outreach",
        body: "Writes the first line of each candidate outreach from that person's own record.",
      },
      {
        icon: "UserCheck",
        title: "Recruiter-directed",
        body: "Routes every draft to the named recruiter who owns your opening. Their judgment decides what goes out.",
      },
    ],
  },
  expect: {
    title: "What to expect.",
    intro: "Nothing to log in to. You see it in how your openings are handled.",
    items: [
      {
        icon: "UserCheck",
        title: "Named ownership",
        body: "Assigns every opening to one recruiter. You know who to call, and so do we.",
      },
      {
        icon: "Clock",
        title: "Live status",
        body: "Keeps the last recruiting activity, the days since, and every hand-off on the opening, so the answer comes from the record.",
      },
      {
        icon: "FileText",
        title: "Written presentations",
        body: "Presents each candidate in writing: the position, your recruiter's summary, and the list of approved documents and clearances.",
      },
      {
        icon: "Mail",
        title: "No new software",
        body: "Takes your request by form, email, or call. The request form on this site files straight into FSG Match.",
      },
    ],
  },
  proof: {
    value: "4",
    title: "Qualified candidates per opening.",
    body: "At Cesar Chavez Public Charter School in Washington, DC, school leaders choose from an average of four qualified candidates for every open position.",
    attribution: "Cesar Chavez Public Charter School · Partner since 2022",
    link: { label: "Read the case study", href: "/case-studies/cesar-chavez-public-charter-school" },
  },
  faqs: [
    {
      q: "How do I know a staffing agency is actually working my opening?",
      a: "With FocusedEDU, every opening has one named recruiter and a record of its last recruiting activity. If an active opening goes two business days without activity, FSG Match files a task to that recruiter automatically.",
    },
    {
      q: "How does FSG Match use AI?",
      a: "AI transcribes recorded calls, drafts openings and follow-up tasks, summarizes the history of any record, and writes candidate outreach. Each draft goes to the recruiter who owns the opening, and their judgment directs what goes out.",
    },
    {
      q: "Does my team have to learn new software to use FSG Match?",
      a: "No. FSG Match is the platform our recruiters work in. You send openings the way you do today, through the request form, by email, or on a call, and your recruiter keeps the record.",
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
  covers: "AI-powered credentialing",
  question: "Is there a staffing agency with credential tracking for schools?",
  metaTitle: "VerifAI: AI Credential Tracking for Schools",
  metaDescription:
    "VerifAI is FocusedEDU's proprietary, AI-powered credentialing platform. It reads every clearance and certificate on upload, flags exceptions, and tracks each expiration date before a candidate is presented to your school.",
  tagline: "Know they are cleared before they start.",
  lede: "VerifAI is our AI-powered credentialing platform. It reads every clearance and certificate on upload, checks it, and tracks it to its expiration date, so each candidate reaches you with a complete, current file.",
  summary:
    "AI-powered credentialing platform that reads every clearance and certificate on upload, flags exceptions, and tracks each expiration date before a candidate is presented.",
  stats: [
    { value: "100%", label: "Of documents read by AI the moment they are uploaded" },
    { value: "4", label: "AI checks on every document: expiry, signature, name, authenticity" },
    { value: "½", label: "The hiring time, with automated credentialing" },
  ],
  problem: {
    title: "Finding out about a clearance after the start date.",
    body: [
      "A missing or lapsed clearance usually surfaces at the worst moment: the morning someone is due in a classroom, or in the middle of an audit.",
      "VerifAI moves that check to the front. Each professional uploads documents in one place. AI reads every one on arrival, our credentialing team approves it, and the platform tracks every expiration date from then on.",
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
    "Every document read and checked by AI on upload",
    "Presented once every required credential is approved and current",
    "Expiration dates tracked, renewals chased by us",
  ],
  inside: {
    title: "Inside VerifAI.",
    intro: "AI is applied where credentialing usually breaks: the moment a document arrives.",
    items: [
      {
        icon: "FileText",
        title: "Document reading",
        body: "Reads each uploaded scan, photo, or PDF and extracts the dates that matter: when it was issued and when it expires.",
      },
      {
        icon: "ShieldCheck",
        title: "Exception flagging",
        body: "Flags an expired document, a missing signature, a name mismatch, or a file that is not what it claims to be.",
      },
      {
        icon: "Target",
        title: "Stall prediction",
        body: "Predicts which candidates are at risk of stalling in credentialing, so our team steps in before a start date slips.",
      },
      {
        icon: "Mail",
        title: "Personalized reminders",
        body: "Writes each reminder around exactly what that professional still owes, so every follow-up is specific.",
      },
      {
        icon: "Clock",
        title: "Expiration tracking",
        body: "Carries the expiration date of every approved document and starts renewal reminders before it lapses.",
      },
      {
        icon: "BadgeCheck",
        title: "Expert approval",
        body: "Sends every document to our credentialing team for approval. Only approved documents appear on a presentation.",
      },
    ],
  },
  expect: {
    title: "What to expect.",
    intro: "A complete file before the interview, and nothing to chase afterward.",
    items: [
      {
        icon: "ShieldCheck",
        title: "Complete files",
        body: "Presents each candidate once every required credential is approved and unexpired, and the start date is confirmed.",
      },
      {
        icon: "FileText",
        title: "Listed approvals",
        body: "Lists every approved document and clearance on the presentation, with the date each one was approved.",
      },
      {
        icon: "Clock",
        title: "Tracked expirations",
        body: "Tracks every clearance, certificate, and test to its expiration date, so a renewal is handled before it lapses.",
      },
      {
        icon: "Mail",
        title: "No chasing",
        body: "Reminds the professional automatically until each missing document is in. Your office is not the one following up.",
      },
    ],
  },
  proof: {
    value: "½",
    title: "The hiring time, with automated credentialing.",
    body: "Automated credentialing cuts hiring time in half while weeding out unqualified candidates before they ever reach your desk.",
    link: { label: "Read what school leaders say", href: "/references" },
  },
  faqs: [
    {
      q: "Is there a staffing agency with credential tracking for schools?",
      a: "Yes. FocusedEDU runs every placement through VerifAI, its own AI-powered credentialing platform. AI reads each document on upload, our credentialing team approves it, each expiration date is tracked, and the approved list comes with the candidate presentation.",
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
      q: "How does VerifAI use AI?",
      a: "AI reads every uploaded document, extracts the issue and expiration dates, and flags an expired document, a missing signature, or a name that does not match. It also writes reminders and predicts which candidates are at risk of stalling. Our credentialing team approves each document.",
    },
    {
      q: "Who reviews the documents?",
      a: "Our credentialing team. AI reads each upload first and flags exceptions, then a team member approves the document or sends it back. Only approved documents appear on a presentation.",
    },
  ],
};

const fsgGo: PlatformProduct = {
  slug: "fsg-go",
  name: "FSG Go",
  stage: "Work",
  covers: "Automated scheduling, time, and invoicing",
  question: "How do schools approve agency timesheets and check the invoice?",
  metaTitle: "FSG Go: Timesheets, Sub Requests, Invoices",
  metaDescription:
    "FSG Go is FocusedEDU's proprietary platform for substitute requests, timesheet approval, and invoicing. Approvers confirm hours from one emailed link and every invoice carries its approval record.",
  tagline: "Know what you are paying for.",
  lede: "FSG Go is our automated platform for scheduling, time, and invoicing. It takes substitute requests by building, sends each approver the week in one email, and attaches the approval record to every invoice.",
  summary:
    "Automated scheduling, time, and invoicing platform that takes substitute requests by building, collects timesheet approval from one emailed link, and attaches an approval record to every invoice.",
  stats: [
    { value: "1", label: "Email to approve the week's hours" },
    { value: "0", label: "Passwords for your approvers" },
    { value: "100%", label: "Of billed days carry a name and a time" },
  ],
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
  inside: {
    title: "Inside FSG Go.",
    intro: "Automation runs the hand-offs where time and billing usually go wrong.",
    items: [
      {
        icon: "MessageCircle",
        title: "Request reading",
        body: "Reads a pasted list of absences into individual requests by date, building, and position, and holds anything ambiguous for a person.",
      },
      {
        icon: "Smartphone",
        title: "Self-filling timesheets",
        body: "Fills each professional's week from the schedule and texts it to them on Friday to confirm or correct.",
      },
      {
        icon: "Zap",
        title: "Scheduled approvals",
        body: "Sends the approval email Monday at 1 PM and a reminder Wednesday. Nobody at your school has to remember to ask.",
      },
      {
        icon: "BadgeCheck",
        title: "Automatic proof",
        body: "Stamps every approval with a name and a time and compiles the record that travels with the invoice.",
      },
    ],
  },
  week: {
    title: "How a week runs.",
    intro: "Four steps. Your approver is in one of them.",
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
  expect: {
    title: "What to expect.",
    intro: "Each person at your school sees only the part that is theirs.",
    items: [
      {
        icon: "CalendarCheck",
        title: "Substitute requests",
        body: "Takes requests by building, position, full or half day, room, and who is being covered: single, repeating, or pasted as a batch. Fills are emailed and texted to your school contacts.",
      },
      {
        icon: "Mail",
        title: "One link",
        body: "Delivers timesheets Monday at 1 PM with a reminder Wednesday. The link works until Thursday at 1 PM and opens as many times as needed.",
      },
      {
        icon: "BadgeCheck",
        title: "Named decisions",
        body: "Records Approve, Needs adjustment, or Reject. Approving takes a typed name; the other two take a note that comes straight back to us.",
      },
      {
        icon: "FileText",
        title: "Approval record",
        body: "Attaches a Timesheet approvals PDF to each invoice, listing every day, who approved it, and when.",
      },
      {
        icon: "DollarSign",
        title: "Postable invoices",
        body: "Itemizes each invoice with sections and subtotals. Where your district needs it: vendor number, fund and account codes, a row per person or per day, and a timesheet backup page.",
      },
      {
        icon: "Users",
        title: "Right contacts",
        body: "Keeps separate contacts for approving time, requesting staff, and billing, so each message reaches the person who handles it. Messages keeps one thread with our scheduling team.",
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
  metaTitle: "AI-Native Staffing Platform for K-12 Schools",
  metaDescription:
    "The FSG Platform is FocusedEDU's proprietary, AI-native staffing technology: AI-enabled recruiting, AI-powered credentialing, and automated timesheets and invoicing. Included with every engagement.",
  eyebrow: `${SUITE_NAME} · Proprietary technology`,
  h1: "AI-native staffing. Built in-house.",
  lede: `Most school staffing still runs on inboxes, spreadsheets, and rented software. We built our own. ${SUITE_NAME} finds your people, clears them, and runs the working week, and it comes with every engagement.`,
  stats: [
    { value: "3", label: "Proprietary platforms, from the opening to the invoice" },
    { value: "12 yrs", label: "Partnering with K-12 schools" },
    { value: "95%", label: "Day-to-day substitute fill rate at a partner school" },
    { value: "½", label: "The hiring time, with automated credentialing" },
  ],
  intro: {
    eyebrow: "Find. Clear. Work.",
    title: "Three platforms. End to end.",
    body: "One connected system follows every hire from the opening to the invoice. Each stage has its own platform, and each hands the next a complete record.",
  },
  difference: {
    eyebrow: "Our technology",
    title: "Built, not bought.",
    intro: "Most agencies rent generic software and fit their service around it. We engineered our own for school staffing and put AI to work inside it.",
    pillars: [
      {
        icon: "Award",
        title: "Proprietary",
        body: "Designed and built by Focused Staffing Group. No other agency runs on it, and we own the roadmap.",
      },
      {
        icon: "Sparkles",
        title: "AI-native",
        body: "AI works inside the workflow. It reads credential documents on upload, turns calls into drafted openings, and prepares each recruiter's next step.",
      },
      {
        icon: "GraduationCap",
        title: "Expert-built",
        body: "Founded by a former K-12 educator and shaped by twelve years of school staffing. Our recruiters and credentialing team direct the work.",
      },
      {
        icon: "Handshake",
        title: "Included",
        body: "Comes with every engagement. Nothing to license, nothing to install, and no implementation project.",
      },
    ],
  },
  results: {
    eyebrow: "In production",
    title: "Proven in partner schools.",
    intro: "The platform runs behind every FocusedEDU placement. These are results from schools we staff.",
    items: [
      {
        value: "95%",
        headline: "Day-to-day substitute fill rate",
        body: "Odyssey fills 95% of its day-to-day substitute requests, a 40% improvement over its previous provider.",
        source: "Odyssey Public Charter School · Wilmington, DE",
        href: "/case-studies/odyssey-charter-school",
      },
      {
        value: "2 wks",
        headline: "From request to filled",
        body: "IDEA filled 100% of its certified special education teacher roles, two weeks from request to filled.",
        source: "IDEA Public Charter School · Washington, DC",
        href: "/case-studies/idea-public-charter-school",
      },
      {
        value: "4",
        headline: "Qualified candidates per opening",
        body: "Cesar Chavez leaders choose from an average of four qualified candidates for every open position.",
        source: "Cesar Chavez Public Charter School · Washington, DC",
        href: "/case-studies/cesar-chavez-public-charter-school",
      },
    ],
    link: { label: "All case studies", href: "/case-studies" },
  },
  cta: BOOK,
  secondaryCta: { label: "Send a staffing request", href: "/request-staff" },
  faqs: [
    {
      q: "What software does FocusedEDU use to staff our school?",
      a: "The FSG Platform, proprietary AI-native technology with three parts: FSG Match for AI-enabled recruiting, VerifAI for AI-powered credentialing, and FSG Go for substitute requests, timesheets, and invoicing. FocusedEDU is the K-12 division of Focused Staffing Group, which designed and built all three.",
    },
    {
      q: "How does FocusedEDU use AI in staffing?",
      a: "AI works inside The FSG Platform. In recruiting, it transcribes recorded calls, drafts openings and follow-up tasks, and summarizes each record. In credentialing, it reads every uploaded document, extracts the issue and expiration dates, and flags exceptions. Our recruiters and credentialing team direct the work and approve what reaches your school.",
    },
    {
      q: "What does the platform cost?",
      a: "Nothing. The FSG Platform is included with every FocusedEDU engagement. There is no license, no software fee, and no implementation project.",
    },
    {
      q: "Does our school have to install or learn anything?",
      a: "Nothing is installed. Approvers open timesheets from an emailed link with no password, and schools that request substitutes online get a login from us. Everything else runs on our side.",
    },
    {
      q: "Can we see the platform before we commit?",
      a: "Yes. Request a demo and we will walk through each part on sample data: an opening, a candidate presentation, a timesheet approval, and an invoice.",
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
    title: "AI-native staffing. Built in-house.",
    body: "Three proprietary platforms behind every placement: AI-enabled recruiting with a named owner on each opening, AI-powered credentialing tracked to the expiration date, and timesheets your approvers confirm from one email.",
  },
  products: [fsgMatch, verifai, fsgGo],
};

export function getPlatformProduct(slug: string): PlatformProduct | undefined {
  return platform.products.find((p) => p.slug === (slug as ProductSlug));
}
