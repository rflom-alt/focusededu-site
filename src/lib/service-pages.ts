/**
 * LLM-optimized service & location pages (per the FSG build brief).
 * One data entry per indexable route at /<slug>; rendered by app/[service]/page.tsx.
 * Each page names roles, buyer, setting, and geography so search engines and AI
 * answer engines can confidently surface FocusedEDU for specific queries.
 *
 * Every number, client name, and outcome on these pages is client-attested.
 * Do not add stats or claims without verification.
 */

export type ServiceFaq = { q: string; a: string };
export type ServiceSection = { heading: string; body: string };
// `href` (absolute) points a card at the Focused Staffing Group umbrella site —
// deep-dive guides live there so the two domains reinforce, never duplicate.
export type ServiceLink = { label: string; slug: string; href?: string };

export type ServicePage = {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  photo: string;
  photoAlt?: string;
  roles?: string[];
  stats?: { value: string; label: string }[];
  steps?: { n: string; title: string; body: string }[];
  verify?: string[];
  quote?: { text: string; name: string; role: string };
  sections: ServiceSection[];
  /** Optional long-form, sourced body (HTML) rendered after `sections` — used by the rebuilt state pages. */
  richHtml?: string;
  faqs: ServiceFaq[];
  related: ServiceLink[];
};

const PHOTOS = [
  "/photography/hero-classroom.jpg",
  "/photography/about-classroom.jpg",
  "/photography/schools-teaching.jpg",
  "/photography/educator-portrait.jpg",
];

export const servicePages: ServicePage[] = [
  {
    slug: "special-education-staffing",
    eyebrow: "Education staffing",
    h1: "Special Education Staffing for School Districts",
    metaTitle: "Special Education Staffing for School Districts",
    metaDescription:
      "Certified special education teachers, paraprofessionals, and related service providers, vetted by a former K-12 teacher. SPED teachers placed in two weeks.",
    hero: "Certified special education teachers, paraprofessionals, and related service providers — sourced, credentialed, and reference-checked by a firm founded by a former K-12 teacher. In past engagements we have placed certified special education teachers within two weeks.",
    photo: PHOTOS[0],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "Instructional aides",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
      "Related service providers",
    ],
    stats: [
      { value: "2 wks", label: "Certified special education teachers placed within two weeks in past engagements" },
      { value: "120+", label: "Roles filled at a single partner school, Odyssey Public Charter School in Wilmington, DE" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "12 yrs", label: "Staffing K-12 schools, founded by a former classroom teacher" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your open special education roles, buildings, caseloads, and certification requirements. No cost, no obligation, and you leave with a clear read on whether we can help.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We source candidates, interview each one ourselves, run the full clearance and certification verification, and complete reference checks before you ever see a name.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "We present a short list of fully credentialed candidates. Your team interviews them and makes the final call — we never pressure a placement.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We manage onboarding paperwork and stay involved for the life of the placement. If you decide to hire a temp permanently, there is no conversion fee.",
      },
    ],
    verify: [
      "State special education certification, verified for the specific role",
      "Full criminal background check",
      "PA Act 34 criminal history clearance (or the equivalent in DE, NJ, and MD)",
      "PA Act 151 child abuse clearance (or state equivalent)",
      "PA Act 114 FBI fingerprinting (or state equivalent)",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
    ],
    sections: [
      {
        heading: "What special education staff actually do in a building",
        body: "A special education teacher's day is organized around the IEP — the legal document that defines what each student is owed. That means delivering specially designed instruction, adapting general-education curriculum, writing and revising IEPs, collecting progress-monitoring data, sitting in IEP meetings with parents and administrators, and directing the paraprofessionals assigned to their students. The teaching is the visible part; the caseload management behind it is what the job actually turns on.\n\nSchools deploy special education staff across very different settings. Self-contained classrooms serve students who need a specialized setting for most or all of the day, with low ratios and multiple adults. Resource rooms serve students pulled from general education for part of the day for targeted instruction. Co-taught inclusion classrooms pair a special education teacher with a general educator in the same room. Around the teachers sit paraprofessionals on 1:1 and classroom assignments, and related service providers — SLPs, OTs, PTs, school psychologists — carrying therapy and evaluation caseloads across buildings.\n\nThe difference between a strong special educator and a body in the seat is not subtle. The strong one produces IEPs on time that would survive a due-process hearing, collects data consistently instead of reconstructing it before meetings, implements behavior plans as written, and keeps paras and parents pulling in the same direction. The weak one is compliant on paper and absent everywhere it counts.",
      },
      {
        heading: "What we screen for in special education candidates",
        body: "Our screening for special education roles probes the parts of the job a résumé hides: real IEP writing and meeting experience — not attendance, authorship; behavior-plan implementation, including what the candidate does when the plan stops working; co-teaching history and how they share a room with a general educator; and the data-collection habits that separate defensible progress monitoring from guesswork. For candidates who will direct paraprofessionals, we ask how they train and manage other adults, because in a self-contained room that skill is half the job.\n\nThe process was designed by our founder, Robert Flom, a former K-12 teacher — which is why the interview sounds like a case review, not a personality quiz.",
      },
      {
        heading: "Vetting run by someone who has taught the job",
        body: "Focused Staffing Group was founded by Robert Flom, a former K-12 teacher. That changes how candidates get screened. A recruiter who has never run a classroom reads a résumé; a former teacher asks how a candidate handles an IEP meeting that runs long, a self-contained room with two staff out, or a parent call that starts badly. Candidates who cannot answer those questions do not reach your shortlist.\n\nWe have spent 12 years staffing K-12 schools from our headquarters in Wayne, Pennsylvania, serving districts across PA, DE, NJ, and MD as well as clients nationally. Our special education placements include Christina School District, Chester Community Charter, Breakthrough Public Schools, Leadership Public Schools, and Charlotte-Mecklenburg Schools.\n\nEvery special education candidate we present has already passed a background check, the state-required clearances, certification verification for the specific role, a TB test, reference checks with prior schools, and a skills screen. You interview finished candidates, not applicants.",
      },
      {
        heading: "One client per region — your pipeline is not shared",
        body: "Most agencies present the same certified special education teacher to three or four districts at once and let you bid for the candidate. We do not. FSG works with one client per region: if you sign with us for your region, we will not supply a competing school or district next door. The special education teacher we recruit in your county is presented to you and only you.\n\nThat exclusivity matters most in special education, where certified candidates are the scarcest people in the market. It also changes recruiter behavior on our side — our team recruits against your specific openings rather than filling a general pool, because your openings are the only ones we are allowed to fill in your area.",
      },
      {
        heading: "Credentialing that halves the wait",
        body: "The slowest part of most special education hires is not finding the person — it is the paperwork. Our automated credentialing system tracks each candidate's clearances, certifications, TB test, and vaccination documentation, flags anything approaching expiration, and keeps files audit-ready. In practice it cuts typical time-to-hire roughly in half, and in past engagements we have placed certified special education teachers within two weeks.\n\nSpeed shows up in outcomes. At Odyssey Public Charter School in Wilmington, Delaware, we filled 120+ roles across the school after the incumbent agencies under contract could not — the full case study is at /case-studies. We have also run engagements where 100% of open roles were filled with 100% candidate retention.\n\nEvery placement is temp-to-perm at no cost. Evaluate a special education teacher in your building for as long as you need; if you hire them permanently, there is no conversion fee and no buyout.",
      },
    ],
    faqs: [
      {
        q: "How fast can FSG fill a special education teacher opening?",
        a: "It depends on the role and region, so we will not promise a specific number of days. What we can say from the record: our automated credentialing cuts typical time-to-hire roughly in half, and in past engagements we have placed certified special education teachers within two weeks of the request.",
      },
      {
        q: "What does temp-to-perm cost?",
        a: "Nothing beyond the placement itself. You can evaluate a professional in your building before committing, and if you hire them permanently there is no conversion fee. We cover engagement pricing openly on the free 30-minute discovery call.",
      },
      {
        q: "Will FSG also staff a competing district near us?",
        a: "No. We work with one client per region, so the pipeline we build is exclusively yours. If you sign with us for your region, we will not supply a neighboring competitor, and the candidates we recruit in your area are presented only to you.",
      },
      {
        q: "What do you verify before we meet a candidate?",
        a: "A full background check; the state-required clearances (in Pennsylvania, Act 34 criminal history, Act 151 child abuse, and Act 114 FBI fingerprinting, with equivalents in neighboring states); TB test and vaccination documentation; state certification verified for the specific special education role; reference checks; and a skills screen.",
      },
      {
        q: "Do you cover day-to-day substitutes as well as long-term roles?",
        a: "Yes, both. Our substitutes are paid weekly on Fridays via direct deposit or Cash App and use a mobile app to pick up and swap shifts, which keeps the pool active. At Odyssey Public Charter School that model produced a 95% day-to-day substitute fill rate — a 40% improvement over the previous provider.",
      },
      {
        q: "What does an engagement actually look like?",
        a: "It starts with a free 30-minute discovery call to map your roles and requirements. We then source, interview, credential, and reference-check candidates and present a vetted shortlist; your team makes the final call. After the hire, we stay involved through onboarding and the life of the placement.",
      },
      {
        q: "What is the difference between a resource room and a self-contained classroom?",
        a: "A resource room is a pull-out setting: students spend most of the day in general education and come to the resource room for targeted instruction in specific areas. A self-contained classroom is the student's primary placement — a specialized setting for most or all of the day, with lower ratios, a special education teacher, and usually one or more paraprofessionals.",
      },
      {
        q: "What does a special education teacher do besides teach?",
        a: "A large share of the role is caseload management: writing and revising IEPs, collecting progress-monitoring data, running and attending IEP meetings, coordinating paraprofessionals and related service providers, and keeping documentation compliant with IDEA timelines. That is why we screen for those skills specifically, not just classroom instruction.",
      },
    ],
    quote: {
      text: "They have consistently provided us with high-quality special education teachers, paraprofessionals, and related service providers who demonstrate professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
      name: "David Weathington, MSW, LSW, Ed.D",
      role: "CEO, Buttonwood Farms / Delta School",
    },
    related: [
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      { label: "Related Services Staffing", slug: "related-services-staffing" },
      { label: "School District Staffing Vendor", slug: "school-district-staffing-vendor" },
      { label: "Philadelphia Education Staffing", slug: "philadelphia-education-staffing" },
    ],
  },
  {
    slug: "paraprofessional-staffing",
    eyebrow: "Education staffing",
    h1: "Paraprofessional Staffing for K-12 Schools",
    metaTitle: "Paraprofessional Staffing for K-12 Schools",
    metaDescription:
      "Paraprofessionals, 1:1 aides, and classroom support for K-12 schools — weekly pay and a shift app that held a 95% daily fill rate at one partner school.",
    hero: "Paraprofessionals, 1:1 aides, and classroom support staff — recruited, cleared, and reference-checked before you meet them. The same model that holds a 95% day-to-day fill rate at Odyssey Public Charter School.",
    photo: PHOTOS[1],
    roles: [
      "Paraprofessionals",
      "Instructional aides",
      "Classroom aides",
      "1:1 aides",
      "Special education aides",
      "Behavioral support aides",
      "Student-support staff",
    ],
    stats: [
      { value: "95%", label: "Day-to-day fill rate at Odyssey Public Charter School" },
      { value: "+40%", label: "Improvement over the school's previous staffing provider" },
      { value: "$0", label: "Fee to convert a temp paraprofessional to your permanent hire" },
      { value: "120+", label: "Roles filled at that one partner school" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your para and aide openings building by building — which are 1:1 assignments, which support classrooms, and what certifications or clearances each requires. No cost, no obligation.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "Every candidate is interviewed by us, cleared, reference-checked with prior schools, and skills-screened before their name reaches your desk.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "We present fully credentialed candidates. Your principals and case managers interview them and make the final call.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We handle onboarding and stay involved for the life of the placement. Hire any temp para permanently at no conversion fee.",
      },
    ],
    verify: [
      "Full criminal background check",
      "PA Act 34 criminal history clearance (or the equivalent in DE, NJ, and MD)",
      "PA Act 151 child abuse clearance (or state equivalent)",
      "PA Act 114 FBI fingerprinting (or state equivalent)",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Skills screening matched to the assignment — 1:1, classroom, or behavioral support",
    ],
    sections: [
      {
        heading: "What a paraprofessional actually does all day",
        body: "A paraprofessional works under a teacher's direction, and the work is anything but generic. On a 1:1 assignment written into a student's IEP, the para is that student's constant: keeping them regulated and on task, prompting through lessons, supporting transitions, and often handling personal-care duties — feeding, toileting, mobility. In a self-contained classroom, the para is the second or third adult who makes the ratio work, running small-group instruction the teacher plans and collecting data on IEP goals. Many paras also carry duty coverage — cafeteria, recess, arrival and dismissal, bus lines — the unglamorous supervision that keeps a building safe.\n\nSchools deploy paras across all of it: self-contained rooms, 1:1 IEP support, resource rooms, general-education inclusion classrooms, and building coverage. The assignment shapes the skill set — a behavioral-support para and a personal-care para are different jobs sharing a title.\n\nWhat separates a strong para from a body in a seat: they take direction without needing it twice, prompt without hovering so the student builds independence, record data honestly, stay calm when a student escalates, and show up every day — because for the student on a 1:1, the para's absence is the crisis. A weak para marks time; a strong one is frequently the reason a student's placement holds.",
      },
      {
        heading: "What we screen for in a paraprofessional",
        body: "Our para screening probes the things that predict whether an assignment holds: real de-escalation experience — what the candidate actually did the last time a student went off, not what they would do hypothetically; honest comfort with personal-care duties, asked directly, because discovering a mismatch in week two costs the student; familiarity with IEP data collection; and a reliability history we verify with prior schools, since attendance is the whole game on a 1:1.\n\nThe screen was built by our founder, Robert Flom, a former K-12 teacher who worked alongside paras daily and knows exactly which corners a bad one cuts.",
      },
      {
        heading: "Why our para pool actually shows up",
        body: "Paraprofessional staffing fails for a simple reason: the people doing the work are treated as interchangeable. We built the model around keeping them. Our staff are paid weekly, every Friday, by direct deposit or Cash App, and they use a mobile app to pick up and swap shifts instead of waiting on a 5 a.m. phone call.\n\nThe result is measurable. At Odyssey Public Charter School in Wilmington, Delaware — a school serving 1,000+ K-8 students drawn from five districts — that model holds a 95% day-to-day fill rate, a 40% improvement over the previous provider. Across the engagement we have filled 120+ roles at that one school. The full case study is at /case-studies.",
      },
      {
        heading: "Vetted like they will sit next to a student — because they will",
        body: "Our founder, Robert Flom, is a former K-12 teacher, and he built the para screening process around one fact: a paraprofessional works inches from students, often the students with the highest needs in the building. So every candidate clears a full background check, the state-required clearances (in Pennsylvania, Acts 34, 151, and 114, with equivalents in neighboring states), a TB test, vaccination documentation, reference checks with prior schools, and a skills screen matched to the assignment.\n\nOur automated credentialing system tracks all of it — every clearance, every expiration date — and cuts typical time-to-hire roughly in half, because candidates arrive with complete files instead of pending paperwork. Districts we have staffed include Christina School District, Chester Community Charter, Breakthrough Public Schools, and Charlotte-Mecklenburg Schools.",
      },
      {
        heading: "Try before you commit, and keep your pipeline to yourself",
        body: "Every para placement is temp-to-perm at no cost. Put an aide in the classroom, watch how they work with your students and teachers, and if you want to hire them permanently, there is no conversion fee. Good paras become your employees without a buyout negotiation.\n\nWe also work with one client per region. If you sign with us for your area, we will not supply the district or charter competing with you for the same aides. In a role category where schools routinely poach from each other, an exclusive pipeline is the difference between staffing and churn.",
      },
    ],
    faqs: [
      {
        q: "Can FSG handle urgent paraprofessional and aide openings?",
        a: "Yes. Because our automated credentialing keeps candidate files complete and current, typical time-to-hire drops by roughly half. For day-to-day coverage, our app-based sub model held a 95% fill rate at Odyssey Public Charter School, 40% better than the previous provider.",
      },
      {
        q: "Do you place 1:1 aides?",
        a: "Yes. We staff 1:1 aides, classroom aides, special education aides, and behavioral support aides, and we skills-screen each candidate against the specific assignment rather than dropping a generic para into a specialized seat.",
      },
      {
        q: "What does it cost to hire one of your paras permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost — you evaluate the person in your building first, and if you hire them there is no conversion fee.",
      },
      {
        q: "Will you also staff the school down the road?",
        a: "No. We work with one client per region, so the para pipeline we build in your area is exclusively yours. We will not supply a competing school with the candidates we recruit for you.",
      },
      {
        q: "What do you verify before a para reaches our building?",
        a: "A full background check, the state-required clearances (PA Acts 34, 151, and 114 or your state's equivalents), TB test, vaccination documentation, reference checks with prior schools, and a skills screen. Files are tracked in our credentialing system so nothing lapses mid-year.",
      },
      {
        q: "How do your substitutes and paras get paid?",
        a: "Weekly, every Friday, by direct deposit or Cash App, with a mobile app for picking up and swapping shifts. We are specific about this because reliable pay is why our pool stays active and your fill rate stays high.",
      },
      {
        q: "Do paraprofessionals need certification in Pennsylvania?",
        a: "Most para roles do not require a state teaching certificate. However, under ESSA, paraprofessionals working in Title I programs must meet qualification standards — a high school diploma plus 48 college credits, an associate degree, or a passing score on a local assessment. And every school employee in Pennsylvania, paras included, needs the Act 34, Act 151, and Act 114 clearances.",
      },
      {
        q: "What is the difference between a paraprofessional and a 1:1 aide?",
        a: "A 1:1 aide is a paraprofessional assigned to a single student, usually because the student's IEP requires dedicated adult support. A classroom para supports the whole room — small groups, transitions, duty coverage — under the teacher's direction. Same title family, different jobs, which is why we screen candidates against the specific assignment.",
      },
    ],
    quote: {
      text: "The difference wasn't just speed — it was the quality of every person who walked through the door.",
      name: "School leadership",
      role: "Odyssey Public Charter School · Partner since 2021",
    },
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
      { label: "School-Based Behavioral Health Staffing", slug: "school-based-behavioral-health-staffing" },
    ],
  },
  {
    slug: "school-district-staffing-vendor",
    eyebrow: "Education staffing",
    h1: "School District Staffing Vendor",
    metaTitle: "School District Staffing Vendor",
    metaDescription:
      "The education staffing vendor schools call when the incumbent can't fill: 120+ roles filled at one school, 13+ role types, one client per region.",
    hero: "When Odyssey Public Charter School's contracted agencies couldn't fill their openings, FSG stepped in and filled 120+ roles across 13+ role types. That is the standard we are hired against.",
    photo: PHOTOS[2],
    stats: [
      { value: "120+", label: "Roles filled at Odyssey Public Charter School after incumbent agencies couldn't" },
      { value: "13+", label: "Distinct role types staffed at that one school, bus drivers to certified teachers" },
      { value: "95%", label: "Day-to-day substitute fill rate there — +40% over the previous provider" },
      { value: "12 yrs", label: "Staffing K-12 schools from Wayne, PA" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We walk your open roles, buildings, contract requirements, and timelines. No cost, no obligation — and if we are not the right vendor, we say so on the call.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We source against your specific openings, interview every candidate ourselves, run clearances and certification verification, and complete reference checks.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your administrators interview a short list of fully credentialed candidates and make the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "Onboarding, coverage questions, renewals — we stay involved for the life of the placement, and any temp converts to your permanent hire at no fee.",
      },
    ],
    verify: [
      "Full criminal background check",
      "State-required clearances — in PA, Act 34 criminal history, Act 151 child abuse, Act 114 FBI fingerprinting",
      "Equivalent clearances for DE, NJ, and MD placements",
      "State certification verified for each role that requires one",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
    ],
    sections: [
      {
        heading: "What districts actually evaluate in a staffing vendor",
        body: "Strip away the pitch decks and vendor evaluation comes down to a short list of checkable things. Insurance: current certificates for workers' compensation, general liability, and professional liability, naming the district. Clearance documentation: not whether the vendor says candidates are cleared, but who runs the checks, where the records live, and how the district audits them mid-contract. References: named schools of comparable size that will take a call, not anonymized logos. Fill-rate accountability: how the vendor defines a fill, how often it reports, and what happens when the number slips. And a single point of contact — one person who owns the account, versus a ticket queue that reshuffles every quarter.\n\nThe second-order questions matter just as much. Who is the employer of record, and who carries payroll, taxes, and workers' comp for placed staff? What are the replacement terms when a placement fails in week three? What does converting a temp to a district employee cost? A vendor with good answers volunteers them; a vendor with bad answers sells harder. This page exists so you can score us against exactly that list.",
      },
      {
        heading: "What we screen for before a candidate carries our name",
        body: "Every candidate we present, in every role type, passes the same core screen: a verified reliability history from prior schools, references we actually call, and a role-matched skills evaluation — classroom management for subs and teachers, de-escalation and personal-care comfort for paras, licensure and caseload management for clinicians. Clearances and certifications are table stakes, handled by the credentialing system; the screen is about judgment inside a school building.\n\nIt was designed by our founder, Robert Flom, a former K-12 teacher, which is why it tests for the situations schools actually produce rather than the ones interview guides imagine.",
      },
      {
        heading: "The vendor test: what happened at Odyssey",
        body: "Odyssey Public Charter School in Wilmington, Delaware serves 1,000+ K-8 students drawn from five districts. The school had staffing agencies under contract, and those agencies could not fill the openings. FSG stepped in.\n\nSince then we have filled 120+ roles across the school, spanning 13+ distinct role types — from bus drivers to certified teachers. Day-to-day substitute coverage runs at a 95% fill rate, a 40% improvement over the previous provider. The full case study, with the school's own account, is at /case-studies.\n\nWe lead with that story because it is the honest test of a staffing vendor: not the pitch deck, but what happens when the roles are hard and the incumbent has already failed.",
      },
      {
        heading: "One client per region, in writing",
        body: "The structural problem with most education staffing vendors is that they serve your competitors. The same agency staffing your district is shopping the same candidates to the charter across town, and whoever pays more wins. FSG removed that conflict from the model: we work with one client per region. If you sign with us for your region, we will not supply a competing school or district, full stop.\n\nPractically, that means the pipeline we build — the certified teachers, the paras, the clinicians we recruit in your area — is presented to you alone. Our clients include Christina School District, Charlotte-Mecklenburg Schools, Chambersburg Area SD, Chester Community Charter, Carmen Schools of Science & Tech, Breakthrough Public Schools, Leadership Public Schools, First PA, TRECA, and Odyssey Charter.",
      },
      {
        heading: "A founder from the classroom and a system that halves the wait",
        body: "FSG was founded by Robert Flom, a former K-12 teacher, and we have spent 12 years staffing schools from our headquarters in Wayne, Pennsylvania. The founder's classroom background shapes vetting: candidates are interviewed by people who know what the job actually demands, then cleared, certification-verified, TB-tested, and reference-checked before you meet them.\n\nOur automated credentialing system tracks every clearance and certification, flags expirations before they lapse, and keeps files audit-ready — which is why it cuts typical time-to-hire roughly in half. In past engagements we have placed certified special education teachers within two weeks, and we have run engagements where 100% of open roles were filled with 100% candidate retention.\n\nEvery placement is temp-to-perm at no cost: evaluate a professional in your building, and hire them permanently with no conversion fee. We also run school-supply and backpack donation drives for our partner schools, because we staff the communities we work in, not just the payrolls.",
      },
    ],
    faqs: [
      {
        q: "What makes FSG different from a general staffing agency?",
        a: "Three things you can check: we work with one client per region so we never staff your competitor; our founder is a former K-12 teacher, which shapes how candidates are vetted; and our track record is specific — 120+ roles filled at Odyssey Public Charter School across 13+ role types after the incumbent agencies could not deliver.",
      },
      {
        q: "How is FSG paid, and what does temp-to-perm cost?",
        a: "Engagement pricing is covered openly on the free 30-minute discovery call. What is unusual about our model: temp-to-perm is at no cost. If you hire one of our placements permanently, there is no conversion fee and no buyout.",
      },
      {
        q: "Will you staff a neighboring or competing district?",
        a: "No. One client per region is the model. The candidates we recruit in your area go to you and only you, which is precisely why the pipeline stays deep instead of being auctioned across three districts.",
      },
      {
        q: "How fast can you fill our openings?",
        a: "We will not quote a number of days without knowing the role and region. Grounded in the record: automated credentialing cuts typical time-to-hire roughly in half, and certified special education teachers have been placed within two weeks in past engagements.",
      },
      {
        q: "Do you handle both day-to-day substitutes and long-term roles?",
        a: "Yes. Long-term and permanent-track roles run through the vetted-shortlist process. Day-to-day coverage runs on our sub model — weekly Friday pay, direct deposit or Cash App, and a mobile app for picking up and swapping shifts — which held a 95% daily fill rate at Odyssey.",
      },
      {
        q: "What does an engagement look like end to end?",
        a: "A free 30-minute discovery call to map roles and requirements; then we source, interview, credential, and reference-check candidates and present a vetted shortlist. Your team makes every final hiring decision, and we stay involved through onboarding and the life of the placement.",
      },
      {
        q: "What insurance should an education staffing vendor carry?",
        a: "At minimum: workers' compensation covering the vendor's placed employees, general liability, and professional liability. Districts should require current certificates of insurance naming the district, and confirm coverage stays active for the life of the contract rather than checking once at signing.",
      },
      {
        q: "What does fill-rate accountability actually mean?",
        a: "It means the vendor defines what counts as a filled role, reports the rate on a regular cadence, and accepts consequences when it slips — not just a number quoted in the sales meeting. Ask any vendor how they measured the fill rates they advertise; ours come from the Odyssey engagement documented at /case-studies.",
      },
    ],
    quote: {
      text: "Their innovative temp-to-perm clause has allowed us to assess the suitability of referred professionals before making permanent hiring decisions, all at no cost to the school. This flexibility has been instrumental in ensuring our staffing needs are met with the highest level of quality.",
      name: "Elias Pappas",
      role: "CEO, Delaware Public School District",
    },
    related: [
      { label: "Education Staffing RFP Experience", slug: "education-staffing-rfp-experience" },
      { label: "Education Staffing Agency Cost", slug: "education-staffing-agency-cost" },
      { label: "Delaware Education Staffing", slug: "delaware-education-staffing" },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
    ],
  },
  {
    slug: "k12-education-staffing",
    eyebrow: "Education staffing",
    h1: "K-12 Education Staffing",
    metaTitle: "K-12 Education Staffing Agency",
    metaDescription:
      "K-12 staffing for the whole building — 13+ role types at a single school, from bus drivers to certified teachers. Founded by a former teacher, 12 years in.",
    hero: "One partner for the whole building: at a single school we have staffed 13+ distinct role types, from bus drivers to certified teachers, and filled 120+ roles along the way.",
    photo: PHOTOS[3],
    roles: [
      "Teachers",
      "Special education teachers",
      "Paraprofessionals",
      "Related service providers",
      "School psychologists",
      "Behavioral health staff",
    ],
    stats: [
      { value: "13+", label: "Distinct role types staffed at one school — bus drivers to certified teachers" },
      { value: "120+", label: "Roles filled at that school, Odyssey Public Charter in Wilmington, DE" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "12 yrs", label: "Staffing K-12 schools, founded by a former teacher" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map every open role across the building — instructional, support, transportation — plus certifications and timelines. No cost, no obligation.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "Candidates are sourced against your openings, interviewed by us, cleared, certification-verified where required, and reference-checked.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "We present a short list of finished candidates. Your team interviews and makes the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We support onboarding and stay involved for the life of the placement. Any temp becomes your permanent hire at no conversion fee.",
      },
    ],
    verify: [
      "Full criminal background check",
      "State-required clearances — PA Acts 34, 151, and 114, or the DE/NJ/MD equivalents",
      "State certification verified for teaching and licensed roles",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Skills screening matched to the specific role",
    ],
    sections: [
      {
        heading: "What the roles in a K-12 building actually cover",
        body: "Walk a school building and the org chart gets concrete fast. Teachers carry the instruction — general education by grade or subject, special education organized around IEP caseloads in self-contained rooms, resource rooms, and co-taught classrooms. Paraprofessionals make the ratios work: 1:1 assignments written into IEPs, classroom support, personal-care duties, and the cafeteria, recess, and dismissal coverage that keeps the building safe. Substitutes split into day-to-day coverage, where the job is executing another teacher's plans for a room of strangers, and long-term assignments, where the sub effectively becomes the teacher of record for weeks.\n\nAround the classrooms sit the licensed specialists — SLPs, OTs, PTs, school psychologists, behavioral staff — carrying evaluation and therapy caseloads across buildings, plus the operational roles no one budgets enough attention for: front office, food service, custodial, bus drivers. A single mid-size school runs on a dozen distinct job descriptions, and a vacancy in any one of them lands on the same principal's desk.\n\nWhat separates a strong hire from a body in a seat differs by role — data fidelity for a para, classroom management under ambiguity for a sub, caseload discipline for a clinician — but the common thread is reliability. In a school, the person who shows up every day and does the job as designed is worth two who interview brilliantly.",
      },
      {
        heading: "What we screen for, role by role",
        body: "We do not run one generic interview across thirteen role types. Substitutes are screened for classroom management under ambiguity — walking into an unfamiliar room at 7:40 with someone else's plans — and for morning-of reliability, verified with prior schools. Paras are screened for de-escalation experience, comfort with personal-care duties, and IEP data collection. Teachers are probed on planning, IEP writing where relevant, and how they run a room in February, not just September. Licensed clinicians get licensure verification plus caseload-management questions.\n\nThe role-matched approach comes from our founder, Robert Flom, a former K-12 teacher who knows firsthand that a great para and a great sub are great at different things.",
      },
      {
        heading: "One vendor for thirteen kinds of vacancy",
        body: "A K-12 building does not break down neatly into a teacher agency's catalog. The same week a principal loses a fourth-grade teacher, they lose a bus driver and a 1:1 aide. At Odyssey Public Charter School in Wilmington, Delaware, we have staffed 13+ distinct role types and filled 120+ roles — teachers, paraprofessionals, substitutes, support staff, and yes, bus drivers. Day-to-day sub coverage there runs at a 95% fill rate, 40% better than the previous provider. The case study is at /case-studies.\n\nThat breadth is deliberate. When one vendor holds the whole building, nothing falls between two contracts, and the school has one phone number instead of five. Districts we work with include Christina School District, Charlotte-Mecklenburg Schools, Chambersburg Area SD, Leadership Public Schools, Carmen Schools of Science & Tech, and TRECA.",
      },
      {
        heading: "Built by a teacher, twelve years in",
        body: "FSG's founder, Robert Flom, taught in K-12 classrooms before starting the firm 12 years ago. That background is not a bio line; it is the vetting standard. Candidates are interviewed by people who know the difference between someone who can talk about classroom management and someone who has done it in February with a full room.\n\nWe are headquartered in Wayne, Pennsylvania and staff schools across PA, DE, NJ, and MD, plus districts nationally. Every candidate clears a background check, the state-required clearances, certification verification where the role demands it, a TB test, references, and a skills screen before you meet them.",
      },
      {
        heading: "The model: exclusive pipeline, no conversion fee, half the wait",
        body: "Three mechanics separate our engagements from a standard staffing contract. First, one client per region: if you sign with us for your area, we will not supply a competing school, so the pipeline we recruit is exclusively yours. Second, temp-to-perm at no cost — evaluate any placement in your building and hire them permanently with no conversion fee. Third, automated credentialing that tracks every clearance and certification, flags expirations, and cuts typical time-to-hire roughly in half.\n\nThose mechanics produce the outcomes on this page: certified special education teachers placed within two weeks in past engagements, and engagements where 100% of open roles were filled with 100% candidate retention. We also run school-supply and backpack donation drives for partner schools each year.",
      },
    ],
    faqs: [
      {
        q: "Does FSG only staff special education roles?",
        a: "No. Special education is a core strength, but at a single school we have staffed 13+ distinct role types — certified teachers, paraprofessionals, related service providers, support staff, and bus drivers among them.",
      },
      {
        q: "Do you work with charter schools?",
        a: "Yes, extensively. Odyssey Charter, Chester Community Charter, Leadership Public Schools, Carmen Schools of Science & Tech, and Breakthrough Public Schools are all clients, alongside traditional districts like Christina School District and Charlotte-Mecklenburg Schools.",
      },
      {
        q: "Will you staff our competitor too?",
        a: "No. We work with one client per region. Sign with us for your area and we will not supply a neighboring competing school — the candidates we recruit locally are presented only to you.",
      },
      {
        q: "What does temp-to-perm cost us?",
        a: "There is no conversion fee. Evaluate any FSG placement in your building for as long as you need; if you hire them permanently, you owe nothing extra for the conversion.",
      },
      {
        q: "How quickly can you move?",
        a: "Our automated credentialing cuts typical time-to-hire roughly in half because candidates arrive with complete, current files. In past engagements we have placed certified special education teachers within two weeks; we quote realistic timelines per role on the discovery call rather than promising days in the abstract.",
      },
      {
        q: "Do you cover daily substitutes?",
        a: "Yes. Our subs are paid weekly on Fridays via direct deposit or Cash App and pick up or swap shifts through a mobile app. That model held a 95% daily fill rate at Odyssey Public Charter School, a 40% improvement over the prior provider.",
      },
      {
        q: "Which school roles require state certification?",
        a: "Teachers — including special education teachers — need state teaching certification for their subject and grade band, and licensed specialists like SLPs, OTs, PTs, and school psychologists need state licensure or certification in their discipline. Most paraprofessional and support roles do not require a teaching certificate, though ESSA sets qualification standards for paras in Title I programs. Every school employee, certified or not, needs the state-required clearances.",
      },
      {
        q: "What is the difference between a day-to-day and a long-term substitute?",
        a: "A day-to-day sub covers single absences, executing the teacher's plans and returning the room intact. A long-term sub carries a classroom through an extended absence — planning, teaching, and grading as the teacher of record — and depending on the state and the length of the assignment, may need certification a daily sub does not. We screen the two pools differently for exactly that reason.",
      },
    ],
    quote: {
      text: "Focused Staffing Group has consistently matched us with exceptional talent who have made a significant impact on our student learning experience. The quality of the candidates they have sourced for us has been nothing short of exceptional.",
      name: "Erin D. Murphy-Richardson",
      role: "Superintendent, The Barack Obama Green Public Schools",
    },
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      { label: "Education Staffing Agency Cost", slug: "education-staffing-agency-cost" },
    ],
  },
  {
    slug: "staffing-a-multi-site-charter-network",
    eyebrow: "Charter networks",
    h1: "Staffing a Multi-Site Charter Network",
    metaTitle: "Staffing a Multi-Site Charter Network | FocusedEDU",
    metaDescription: "How multi-site charter networks staff special education across every campus — LEA compliance, credentialing at scale, and FocusedEDU's approach.",
    hero: "How multi-site charter networks staff special education across every campus — LEA compliance, credentialing at scale, and FocusedEDU's approach.",
    photo: PHOTOS[3],
    roles: [
      "Teachers",
      "Special education teachers",
      "Paraprofessionals",
      "Related service providers",
      "School psychologists",
      "Behavioral health staff",
    ],
    sections: [],
    richHtml: `<p>A single-school charter operator has one building&#39;s worth of special-education compliance to manage. A multi-site network has that same compliance obligation multiplied by every campus it operates — and, depending on the state, multiplied again by however each campus&#39;s legal status is defined. Charter networks are FocusedEDU&#39;s highest-priority partner segment : we staff special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  for charter operators across Pennsylvania, New Jersey, Delaware, Maryland, DC, New York, and a secondary footprint in North Carolina, Texas, and California . This page lays out why network-scale staffing is a genuinely different operational problem than single-school staffing, what the law actually requires at each campus, and the playbook we run to keep every site covered.</p>
<h2 id="why-staffing-a-network-is-a-different-problem-than-staffing-">Why staffing a network is a different problem than staffing one school</h2>
<p>The first thing that makes multi-site charter staffing harder than district staffing is that &quot;the district&quot; isn&#39;t a fixed reference point — a charter network&#39;s legal structure varies not just state to state, but sometimes school to school within the same network. As the National Association of Charter School Authorizers puts it: &quot;Individual state charter laws typically determine whether a charter school is its own LEA or part of a larger LEA. To further complicate matters, a few states, such as New York and New Hampshire, use a more complex arrangement where charter schools are their own LEA for some purposes and part of an LEA for others&quot; <span class="cite">(source: NACSA, Special Education Toolkit: Guidance for Charter School Authorizers, June 2017, <a href="https://qualitycharters.org/wp-content/uploads/2017/10/Special-Ed-Toolkit_5.22.17.pdf">https://qualitycharters.org/wp-content/uploads/2017/10/Special-Ed-Toolkit_5.22.17.pdf</a>)</span>. That single fact reshapes how a network has to think about staffing: a network operating in New York and New Jersey isn&#39;t running one compliance model twice — it&#39;s running two different legal relationships to special-education obligations, on top of two different state clearance regimes, for what might otherwise look like the same job posting.</p>
<p>This is happening at real scale. Charter schools serve nearly 4 million students nationally — 7.8%, or roughly 1 in 12 public school students — and enrollment grew more than 14.69%, or about 492,000 additional students, between 2019-20 and 2024-25 <span class="cite">(source: National Alliance for Public Charter Schools, Charter School Data Digest, <a href="https://data.publiccharters.org/1-how-many-charter-schools-and-students-are-there/">https://data.publiccharters.org/1-how-many-charter-schools-and-students-are-there/</a>)</span>. Growth of that kind means more networks are crossing from single-site to multi-site, and more multi-site networks are crossing state lines, faster than most of their internal HR infrastructure was built to handle.</p>
<h2 id="the-compliance-stakes-are-per-campus-not-network-wide">The compliance stakes are per-campus, not network-wide</h2>
<p>When a state grants a charter network independent LEA status, that status comes with the full weight of a district&#39;s obligations at every site: NACSA describes independent-LEA charter operators as enjoying &quot;more freedom in areas such as curriculum design, hiring, and program implementation, but... responsible for the full continuum of services for students with disabilities analogous to a multi-school district&quot; <span class="cite">(source: NACSA Toolkit)</span>. Federal law backs that up directly — personnel providing special education and related services must meet &quot;any State-approved or State-recognized certification, licensing, registration, or other comparable requirements that apply to the professional discipline,&quot; with no exception for emergency or provisional waivers <a class="cite" href="https://www.law.cornell.edu/cfr/text/34/300.156" rel="noopener nofollow" target="_blank">34 CFR 300.156</a>. There&#39;s no network-level shortcut around that requirement — it applies at the campus where the student sits.</p>
<p>Washington, DC is a useful illustration of how far this decentralization goes: the DC Public Charter School Board, &quot;an independent DC government agency and the sole authorizer of public charter schools&quot; in the city, oversees 133 public charter schools managed by 66 separate nonprofit organizations, each operating as its own LEA <span class="cite">(source: DC PCSB, Public Charter School Data, July 2025, <a href="https://dcpcsb.org/about-us/public-charter-school-data">https://dcpcsb.org/about-us/public-charter-school-data</a>)</span>. A network running multiple DC campuses under one brand can still be managing several distinct LEA relationships depending on how its charter was structured — special-education compliance doesn&#39;t roll up automatically just because the schools share a name and a central office.</p>
<h2 id="the-staffing-math-behind-the-shortage">The staffing math behind the shortage</h2>
<p>Every campus in a network is competing for the same shrinking pool of certified specialists that every district around it is also competing for. Nationally, 51% of public schools reported needing to fill a special-education position before the start of the next school year — the highest of any teacher specialty <span class="cite">(source: EdResearch for Action, &quot;Addressing Special Education Staffing Shortages,&quot; Sept. 2024, <a href="https://edresearchforaction.org/research-briefs/addressing-special-education-staffing-shortages-strategies-for-schools/">https://edresearchforaction.org/research-briefs/addressing-special-education-staffing-shortages-strategies-for-schools/</a>)</span>. A 2026 industry survey found 90.4% of district and network leaders reporting increased demand for specialized staff over the prior three years, and — specific to multi-site operations — nearly a quarter of respondents (24.6%) named &quot;coordinating schedules and caseloads across schools&quot; as a top operational struggle <span class="cite">(source: eSchool News, &quot;Most districts still struggle to fill specialist roles,&quot; July 7, 2026, citing the BlazerWorks 2026 Education Staffing Industry Report, <a href="https://www.eschoolnews.com/educational-leadership/2026/07/07/most-districts-still-struggle-to-fill-specialist-roles/">https://www.eschoolnews.com/educational-leadership/2026/07/07/most-districts-still-struggle-to-fill-specialist-roles/</a>)</span>.</p>
<p>Charter-specific research adds a retention dimension on top of the hiring problem. Special-education teacher turnover has an outsized negative effect on outcomes specifically for students with disabilities, and research on charter staffing has found that teachers in centrally managed, education-management-organization-run charter schools &quot;tend to have significantly less decision-making authority in domains such as human resources, curriculum, instruction, assessment, and professional development&quot; — with reduced decision-making authority itself associated with higher turnover odds <span class="cite">(source: K-12 Dive, &quot;Special educator shortages demand tailored solutions, study says,&quot; <a href="https://www.k12dive.com/news/special-education-attrition-brookings-targeted-solutions/805609/">https://www.k12dive.com/news/special-education-attrition-brookings-targeted-solutions/805609/</a>)</span>. For a network, that means the hiring problem and the retention problem are connected: a rigid, centralized staffing process that doesn&#39;t account for each campus&#39;s actual conditions can make the turnover side of the equation worse, not better.</p>
<h2 id="an-operational-playbook-for-staffing-across-campuses">An operational playbook for staffing across campuses</h2>
<p>Five things matter most for keeping every campus in a network covered and compliant at the same time:</p>
<ol>
<li><strong>Treat credentialing as state-by-state, not network-wide.</strong> A candidate cleared for one state&#39;s licensure and background-check regime isn&#39;t automatically cleared for another — a network spanning, say, New Jersey and New York needs every candidate&#39;s file built to the specific state where that campus sits.</li>
<li><strong>Finish the compliance file before a campus principal ever sees a resume.</strong> Site leaders shouldn&#39;t be the ones chasing down a candidate&#39;s background clearance or license verification — that has to be complete before shortlist, at every campus, every time .</li>
<li><strong>Specialize sourcing by role, not by network size.</strong> Special-education teachers, SLPs, OTs, PTs, school psychologists, and paraprofessionals are each their own hard-to-fill labor market — treating a multi-campus vacancy list as one undifferentiated hiring pool slows every site down .</li>
<li><strong>Source passively, not just through postings.</strong> Most licensed special-education and related-service professionals aren&#39;t actively browsing job boards; reaching them takes direct outbound recruiting, which matters even more when a network needs to fill the same kind of role at three or four campuses simultaneously .</li>
<li><strong>Build one long-term partner relationship instead of restarting the search at every campus.</strong> A staffing partner that already understands a network&#39;s authorizer relationships, state footprint, and role mix across all of its schools moves faster than one starting from zero at each site .</li>
</ol>
<h2 id="what-focusededu-does-for-multi-site-charter-networks">What FocusedEDU does for multi-site charter networks</h2>
<p>Charter networks are FocusedEDU&#39;s highest-priority partner segment . We staff special-education teachers, general-education teachers, paraprofessionals, school nurses (RN/LPN), SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  across our core markets — Pennsylvania, New Jersey, Delaware, Maryland, DC, and New York, with a secondary footprint in North Carolina, Texas, and California . That state footprint matters directly for a multi-state network: a candidate&#39;s compliance file is built to the specific state each campus operates in, verified before shortlist, through a credentialing platform built to run 2-4 weeks against an industry norm closer to 6-8 . We source through outbound recruiting of passive candidates rather than waiting on inbound applicants , and we work as a long-term partner across a network&#39;s full footprint, not a vendor restarting the relationship at each campus .</p>
<p>FocusedEDU has staffed public charter schools directly across multiple states — see our case studies: <a href="https://www.focusedu-staffing.com/case-studies/odyssey-charter-school">Odyssey Public Charter School — Case Study</a>, <a href="https://www.focusedu-staffing.com/case-studies/idea-public-charter-school">IDEA Public Charter School — Case Study</a>, <a href="https://www.focusedu-staffing.com/case-studies/cesar-chavez-public-charter-school">Cesar Chavez Public Charter School — Case Study</a>, and <a href="https://www.focusedu-staffing.com/case-studies/first-philadelphia-public-charter-school">Every special-education teacher we placed stayed</a> (First Philadelphia Charter).</p>
`,
    faqs: [
      { q: "Is every campus in a charter network legally responsible for its own special-education compliance?", a: "It depends on the network's LEA status in that state — some networks are one independent LEA covering every campus, some are part of a larger authorizing LEA, and a few states (New York among them) split the difference, treating a charter as its own LEA for some purposes and part of an LEA for others (source: NACSA Special Education Toolkit, June 2017). Either way, federal personnel-qualification requirements apply at the campus level, with no network-wide shortcut (source: 34 CFR 300.156)." },
      { q: "What's the hardest part of staffing special education across multiple charter campuses?", a: "District and network leaders themselves point to coordinating schedules and caseloads across schools as one of their single biggest operational struggles, on top of a national shortage that has 51% of public schools needing to fill a special-education position before the next school year even starts (source: eSchool News/BlazerWorks 2026; EdResearch for Action, Sept. 2024)." },
      { q: "Does a network need a different staffing approach for each state it operates in?", a: "Yes — state licensure and background-clearance requirements differ by state, so a candidate's compliance file has to be built to the specific state where their campus sits, even within the same network (source: 34 CFR 300.156). FocusedEDU builds each candidate's file to their specific state's requirements before that candidate is shortlisted ." },
      { q: "Why does charter teacher turnover matter more for special education specifically?", a: "Research shows special-education teacher turnover has an outsized negative effect on outcomes for students with disabilities compared to general-education turnover, and charter schools with more centralized, less autonomous hiring and decision-making structures tend to see higher turnover (source: K-12 Dive, citing SPARC/CALDER Center research)." },
      { q: "Does FocusedEDU work with charter networks that operate across more than one state?", a: "Yes — our core markets span Pennsylvania, New Jersey, Delaware, Maryland, DC, and New York, with a secondary footprint in North Carolina, Texas, and California, so a network operating across several of those states can work with one staffing partner rather than a different vendor per state ." },
    ],
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      { label: "Education Staffing Agency Cost", slug: "education-staffing-agency-cost" },
    ],
  },
  {
    slug: "related-services-staffing",
    eyebrow: "Education staffing",
    h1: "Related Services Staffing for Schools",
    metaTitle: "Related Services Staffing for Schools",
    metaDescription:
      "SLPs, OTs, PTs, school psychologists, and BCBAs for schools — license-verified, clearance-complete, and never shared with a competing district.",
    hero: "SLPs, OTs, PTs, school psychologists, and BCBAs — license-verified and clearance-complete before you meet them, recruited into a pipeline we build for one client per region.",
    photo: PHOTOS[0],
    roles: ["SLPs", "OTs", "PTs", "School psychologists", "BCBAs", "RBTs", "Behavior support staff"],
    stats: [
      { value: "1", label: "Client per region — your clinician pipeline is never shared with a competitor" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "100%", label: "Fill and retention achieved on past engagements — every role filled, every candidate retained" },
      { value: "12 yrs", label: "Staffing K-12 schools and student-support roles" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your related-services caseloads — which disciplines, how many hours, which buildings — and the licensure each role requires. No cost, no obligation.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit licensed clinicians against your specific openings, interview them, verify licensure and certification for the role, and complete clearances and references.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your special education director interviews a short list of fully credentialed clinicians and makes the final call.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement, and any clinician you want to keep converts to your permanent hire at no fee.",
      },
    ],
    verify: [
      "State license and certification verified for the specific discipline — SLP, OT, PT, psychologist, BCBA, or RBT",
      "Full criminal background check",
      "State-required clearances — PA Acts 34, 151, and 114, or the DE/NJ/MD equivalents",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and clinical supervisors",
      "Role-specific skills screening",
    ],
    sections: [
      {
        heading: "What related-services providers cover in a district",
        body: "\"Related services\" is IDEA's term for the specialized support a student needs to benefit from special education, and each discipline covers distinct ground. SLPs treat articulation, language, fluency, and communication — including AAC for students who do not speak — and run the speech and language evaluations that feed eligibility decisions. OTs work fine motor skills, sensory regulation, handwriting, and the self-care skills that let a student function in a classroom. PTs handle gross motor development, mobility, positioning, and equipment. School psychologists carry the evaluation load — initial evaluations, triennial reevaluations, eligibility determinations — plus counseling minutes and crisis response.\n\nDistricts deploy these clinicians on caseloads that often span multiple buildings, delivering services push-in (in the classroom, alongside instruction) or pull-out (in a therapy space). The constraint that shapes everything: every IEP mandates specific service minutes, and those minutes are a legal obligation. Missed sessions become compensatory services; evaluations run on statutory timelines that do not flex for staffing gaps.\n\nA strong clinician manages the caseload as rigorously as the therapy — documentation current, minutes delivered and logged, evaluation reports that hold up in an eligibility meeting, and working relationships with the teachers whose students they share. A body in the seat delivers sessions and leaves the district exposed on everything else.",
      },
      {
        heading: "What we screen for in a related-services clinician",
        body: "Beyond verifying state licensure for the specific discipline, our screen probes the operational side of school-based practice: how the candidate has managed a multi-building caseload, whether their evaluation reports have been tested in eligibility meetings, how they document service minutes, and whether they are familiar with Medicaid billing documentation — a real revenue line for districts that bill, and a habit clinic-only candidates often lack. We also ask about schedule reliability, because a clinician who misses sessions creates compensatory-service liability, not just inconvenience.\n\nThe school-first framing comes from our founder, Robert Flom, a former K-12 teacher who has sat on the school side of those IEP tables.",
      },
      {
        heading: "Scarce clinicians should not be auctioned",
        body: "Licensed school clinicians — SLPs, OTs, PTs, school psychologists, BCBAs — are the hardest people in K-12 to hire, and the standard agency model makes it worse: one candidate, shopped to every district in the county, placed with whoever bids highest. FSG works with one client per region. If you sign with us for your area, the clinicians we recruit there are presented to you and no one else, and we will not supply a competing school.\n\nThat exclusivity is why the pipeline holds. Our recruiters work your specific caseload gaps rather than filling a general pool, because in your region, yours are the only openings we are allowed to fill. We have run engagements where 100% of open roles were filled with 100% candidate retention.",
      },
      {
        heading: "License-verified before you ever see a name",
        body: "Every clinician we present has had their state license and certification verified for the specific discipline and role — not self-reported, verified. On top of that sits the standard FSG file: full background check, the state-required clearances (in Pennsylvania, Acts 34, 151, and 114, with equivalents in Delaware, New Jersey, and Maryland), TB test, vaccination documentation, reference checks with prior schools and clinical supervisors, and a skills screen.\n\nOur automated credentialing system tracks all of it and flags expirations before they lapse, which is how it cuts typical time-to-hire roughly in half. Your compliance office gets a complete, current file on day one instead of chasing paperwork in week three.",
      },
      {
        heading: "Evaluate first, hire without a fee",
        body: "Every related-services placement is temp-to-perm at no cost. Bring an SLP or school psychologist onto a caseload, watch how they run evaluations and work with your teams, and if you want them permanently, there is no conversion fee.\n\nFSG has staffed schools for 12 years from Wayne, Pennsylvania, under a founder — Robert Flom — who taught in K-12 classrooms himself. Our client list includes Christina School District, Charlotte-Mecklenburg Schools, Leadership Public Schools, Chester Community Charter, and Odyssey Charter, where we have filled 120+ roles across 13+ role types; that case study is at /case-studies.",
      },
    ],
    richHtml: `<p>When a speech-language pathologist, occupational therapist, physical therapist, or school psychologist position sits open, it isn&#39;t a scheduling inconvenience — it&#39;s a federal compliance exposure with a specific student&#39;s name attached to it. FocusedEDU staffs SLPs, OTs, PTs, school psychologists, and BCBAs/RBTs for school-based programs  for districts, charter networks, special-education schools, therapeutic and private special-education schools, and IUs/ESAs  across our core markets of Pennsylvania, New Jersey, Delaware, Maryland, DC, and New York, with a secondary footprint in North Carolina, Texas, and California . Here&#39;s the legal mandate behind related services, how big the staffing gap actually is, what credentialing law requires, and how agency staffing closes the gap without cutting the compliance corner.</p>
<h2 id="related-services-are-a-legal-mandate-not-an-add-on">Related services are a legal mandate, not an add-on</h2>
<p>Under the Individuals with Disabilities Education Act, &quot;related services&quot; is a defined federal term with a specific list attached to it. The regulation states that related services means &quot;transportation and such developmental, corrective, and other supportive services as are required to assist a child with a disability to benefit from special education,&quot; and names speech-language pathology, occupational therapy, physical therapy, psychological services, counseling services, social work services, and school health and nurse services explicitly within that definition <a class="cite" href="https://www.law.cornell.edu/cfr/text/34/300.34" rel="noopener nofollow" target="_blank">34 CFR 300.34</a>. Once a related service is written into a student&#39;s IEP, it isn&#39;t optional programming — it&#39;s a legally binding component of that student&#39;s Free Appropriate Public Education. A vacant SLP or OT position doesn&#39;t just create a scheduling problem; it creates a documented service gap against a legal document, with compensatory-services exposure sitting behind it.</p>
<h2 id="how-big-the-gap-actually-is">How big the gap actually is</h2>
<p>The scale of unmet related-service need is national and persistent. IDEA Part B served 7,525,941 children and students ages 3-21 in the 2022-23 school year, and 1,429,556 of them were served specifically under the speech-or-language impairment category — before counting every other student whose IEP calls for OT, PT, or psychological services on top of a different primary disability <span class="cite">(source: NCES Digest of Education Statistics 2023, Table 204.50, <a href="https://nces.ed.gov/programs/digest/d23/tables/dt23_204.50.asp">https://nces.ed.gov/programs/digest/d23/tables/dt23_204.50.asp</a>)</span>. School psychology staffing has fallen the furthest behind its own professional standard: the National Association of School Psychologists&#39; 2020 Professional Standards recommend one school psychologist per 500 students, but the actual national ratio for the 2024-25 school year was 1,071 students per school psychologist — more than double the recommended caseload <span class="cite">(source: NASP, Shortages Dashboard &amp; Workforce Information, <a href="https://www.nasponline.org/about-school-psychology/shortages-dashboard-and-workforce-information">https://www.nasponline.org/about-school-psychology/shortages-dashboard-and-workforce-information</a>)</span>.</p>
<p>District-reported hiring data tells the same story from the buyer&#39;s side. A September 2024 research brief found that &quot;51% of public schools nationwide reported that they would need to fill positions in Special Education before the start of the next school year, the most of any teacher specialty&quot; <span class="cite">(source: EdResearch for Action, &quot;Addressing Special Education Staffing Shortages: Strategies for Schools,&quot; <a href="https://edresearchforaction.org/research-briefs/addressing-special-education-staffing-shortages-strategies-for-schools/">https://edresearchforaction.org/research-briefs/addressing-special-education-staffing-shortages-strategies-for-schools/</a>)</span>. More recent survey data narrows in on related-service roles specifically: in a 2026 industry survey, district leaders named school psychologists (15.6%) and SLP assistants (15.2%) among their hardest-to-fill positions, and nearly a quarter of respondents — 24.6% — said their top operational struggle was &quot;coordinating schedules and caseloads across schools,&quot; the defining logistical challenge of itinerant related-service staffing <span class="cite">(source: eSchool News, &quot;Most districts still struggle to fill specialist roles,&quot; July 7, 2026, citing the BlazerWorks 2026 Education Staffing Industry Report, <a href="https://www.eschoolnews.com/educational-leadership/2026/07/07/most-districts-still-struggle-to-fill-specialist-roles/">https://www.eschoolnews.com/educational-leadership/2026/07/07/most-districts-still-struggle-to-fill-specialist-roles/</a>)</span>. The same survey found 90.4% of district leaders reporting increased demand for specialized staff over the prior three years, with 28.6% naming &quot;hiring qualified specialists&quot; as their single biggest challenge <span class="cite">(source: same article)</span>.</p>
<h2 id="what-federal-law-requires-of-the-people-filling-these-roles">What federal law requires of the people filling these roles</h2>
<p>IDEA doesn&#39;t just require that related services be delivered — it specifies who&#39;s qualified to deliver them. Under 34 CFR 300.156, the state education agency &quot;must establish and maintain qualifications to ensure that personnel necessary to carry out the purposes of this part are appropriately and adequately prepared and trained,&quot; with related-services personnel qualifications required to be &quot;consistent with any State-approved or State-recognized certification, licensing, registration, or other comparable requirements that apply to the professional discipline&quot; — meaning an SLP, OT, PT, or school psychologist has to hold whatever license or state credential that specific discipline requires in that specific state, not a generic education credential <a class="cite" href="https://www.law.cornell.edu/cfr/text/34/300.156" rel="noopener nofollow" target="_blank">34 CFR 300.156</a>. The same regulation draws a hard line against shortcuts: qualifying personnel must &quot;not have had certification or licensure requirements waived on an emergency, temporary, or provisional basis&quot; <span class="cite">(source: same regulation)</span>. On top of the discipline-specific license, every one of our core-market states layers its own child-safety clearance requirement on top — Pennsylvania&#39;s Act 34/151/114, New Jersey&#39;s Criminal History Record Check, New York&#39;s TEACH-based fingerprint clearance, Delaware&#39;s 14 DE Admin. Code §745, Maryland&#39;s Education Article §6-113.2, and DC&#39;s Title 4 Chapter 15 background check all apply to related-service providers exactly as they apply to teachers.</p>
<h2 id="how-agency-staffing-keeps-related-services-compliant">How agency staffing keeps related services compliant</h2>
<p>That stacked requirement — a discipline-specific license plus a state child-safety clearance, for a role that&#39;s often itinerant across two or three buildings — is exactly why related-service positions are so hard to fill through a standard job posting. FocusedEDU sources SLPs, OTs, PTs, and school psychologists through outbound recruiting of passive candidates rather than waiting on inbound applicants to a job board, because most licensed clinicians in these disciplines aren&#39;t actively browsing job postings . We specialize specifically in these hard-to-fill roles rather than treating them as a subset of general teacher staffing , and our credentialing platform verifies license, state clearance, and any school-specific certification before a candidate is ever shortlisted — a complete compliance file up front, not a scramble to finish paperwork after an offer is accepted . That&#39;s part of why our typical placement timeline runs 2-4 weeks against an industry norm closer to 6-8 weeks , which matters directly against the IEP timeline sitting behind every one of these vacancies.</p>
<h2 id="what-focusededu-does">What FocusedEDU does</h2>
<p>FocusedEDU staffs SLPs, OTs, PTs, school psychologists, and BCBAs/RBTs for school-based programs, alongside special-education teachers, paraprofessionals, and school nurses, for districts, charter networks, special-education schools, therapeutic and private special-education schools, and IUs/ESAs . Charter networks are our highest-priority partner segment . We work across our core markets — Pennsylvania, New Jersey, Delaware, Maryland, DC, and New York, with a secondary footprint in North Carolina, Texas, and California  — as a long-term staffing partner, not a single-placement vendor .</p>
`,
    faqs: [
      { q: "Is a district legally required to fill a related-services vacancy, or can it wait until next semester?", a: "If a related service is written into a student's IEP, it's a component of that student's legally mandated Free Appropriate Public Education under IDEA — an unfilled vacancy against that IEP is a documented compliance gap, not a scheduling backlog (source: 34 CFR 300.34)." },
      { q: "What credentials does an SLP, OT, PT, or school psychologist need to work in a school?", a: "Federal law requires related-services personnel to meet \"any State-approved or State-recognized certification, licensing, registration, or other comparable requirements that apply to the professional discipline,\" and specifically bars emergency, temporary, or provisional waivers of that requirement (source: 34 CFR 300.156). In practice, that means a state-specific professional license for the discipline, plus that state's child-safety clearance." },
      { q: "Why are school psychologist and SLP roles so hard to fill through a normal job posting?", a: "Nationally, the school-psychologist caseload already runs more than double the recommended ratio (source: NASP Shortages Dashboard), and district leaders report that coordinating schedules and caseloads for itinerant specialists across multiple schools is one of their single biggest operational struggles (source: eSchool News/BlazerWorks 2026). FocusedEDU sources these roles through direct outbound recruiting specifically because posting-and-waiting doesn't reach most licensed clinicians in these disciplines ." },
      { q: "How does FocusedEDU keep a related-service placement IEP-compliant from day one?", a: "Every candidate's professional license, state background clearance, and any school-specific certification are verified before that candidate is ever shortlisted to a district — not after an offer is made ." },
      { q: "Does FocusedEDU staff related services for charter networks specifically?", a: "Yes — charter networks are our highest-priority partner segment , and because every charter is typically its own compliance-bearing LEA, having related-services coverage already cleared and credentialed matters even more directly to a charter's own IDEA obligations." },
    ],
    quote: {
      text: "Each one of these professionals is a pleasure to work with. They are always professional, friendly, and have our students' best interests at the forefront of their work.",
      name: "Tracy H. Foedisch",
      role: "Hiring & Support Manager, Hope Community Charter School (Camden, NJ)",
    },
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "School-Based Behavioral Health Staffing", slug: "school-based-behavioral-health-staffing" },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
      {
        label: "School SLP Staffing — In-Depth Guide",
        slug: "slp-guide",
        href: "https://www.focused-staffing.com/speech-language-pathologist-staffing",
      },
      {
        label: "School OT Staffing — In-Depth Guide",
        slug: "ot-guide",
        href: "https://www.focused-staffing.com/occupational-therapist-staffing",
      },
      {
        label: "School PT Staffing — In-Depth Guide",
        slug: "pt-guide",
        href: "https://www.focused-staffing.com/physical-therapist-staffing",
      },
      {
        label: "School Psychologist Staffing — In-Depth Guide",
        slug: "school-psych-guide",
        href: "https://www.focused-staffing.com/school-psychologist-staffing",
      },
      {
        label: "Allied Health & Related Services Hub",
        slug: "allied-health-hub",
        href: "https://www.focused-staffing.com/allied-health-staffing",
      },
    ],
  },
  {
    slug: "school-based-behavioral-health-staffing",
    eyebrow: "Education staffing",
    h1: "School-Based Behavioral Health Staffing",
    metaTitle: "School-Based Behavioral Health Staffing",
    metaDescription:
      "BCBAs, RBTs, and behavior technicians for schools — certification-verified, fully cleared, and recruited into an exclusive one-client-per-region pipeline.",
    hero: "BCBAs, RBTs, and behavior technicians for schools — certification-verified and fully cleared before you meet them, recruited into a pipeline reserved for one client per region.",
    photo: PHOTOS[1],
    roles: ["BCBAs", "RBTs", "Behavior technicians", "Behavioral support staff", "Paraprofessionals", "Related student-support roles"],
    stats: [
      { value: "1", label: "Client per region — we will not staff a competing school with your pipeline" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "100%", label: "Fill and retention on past engagements — every role filled, every candidate retained" },
      { value: "12 yrs", label: "Staffing K-12 and student-support roles" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your behavioral caseloads — BCBA supervision hours, RBT assignments, 1:1 behavioral support — and the certifications each seat requires. No cost, no obligation.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit against your specific openings, interview every candidate, verify BCBA and RBT certifications, and complete clearances and reference checks.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your team interviews a short list of fully credentialed behavioral staff and makes the final call on each hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement. Keep anyone permanently at no conversion fee.",
      },
    ],
    verify: [
      "BCBA and RBT certification verified for the specific role",
      "Full criminal background check",
      "State-required clearances — PA Acts 34, 151, and 114, or the DE/NJ/MD equivalents",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Skills screening matched to the behavioral assignment",
    ],
    sections: [
      {
        heading: "What BCBAs and RBTs actually do in a school",
        body: "An RBT — Registered Behavior Technician — is the hands-on implementer. They work 1:1 or in small groups running the behavior intervention plan a BCBA wrote: delivering reinforcement procedures as designed, prompting and fading support, managing transitions, de-escalating, and collecting the behavior data — frequency, duration, antecedent-behavior-consequence records — that tells the team whether the plan is working. In a school, that work happens in classrooms, hallways, and cafeterias, wherever the student's day goes.\n\nA BCBA — Board Certified Behavior Analyst — is the clinician above that work. They conduct functional behavior assessments to identify why a behavior occurs, write and revise the behavior intervention plans, analyze the data the RBTs collect, and supervise the RBTs themselves — ongoing supervision is a BACB requirement of the RBT credential, not a nicety. In districts, BCBAs also consult with teachers and sit on IEP teams, translating behavioral data into decisions about placement and support.\n\nThe line between a strong behavioral hire and a body in the seat is fidelity. A plan run as written produces data you can trust; an RBT who improvises procedures corrupts both the intervention and the evidence about it. The strong candidate is procedurally exact, records honestly even when the numbers look bad, and stays level through an escalation with thirty students watching.",
      },
      {
        heading: "What we screen for in BCBAs and RBTs",
        body: "Credential verification comes first and comes from the source: BCBA certification confirmed with the BACB, and RBT status confirmed the same way — including that the 40-hour training and competency assessment behind the credential are complete and the certification is current. Then the screen goes to practice: for BCBAs, real functional behavior assessment experience and how their plans have survived contact with a school schedule; for RBTs, data-collection fidelity and what they do when a plan stops working — the right answer involves the supervising BCBA, not improvisation. We weight school-setting experience over clinic-only backgrounds, because the environments demand different composure.\n\nLike all our vetting, it was designed by our founder, Robert Flom, a former K-12 teacher who has watched behavior plans succeed and fail in real classrooms.",
      },
      {
        heading: "Behavioral staff, vetted by people who know school buildings",
        body: "A behavior technician in a school is not doing clinic work with a lobby between sessions. They are in hallways, cafeterias, and classrooms, working the hardest moments of a student's day in front of thirty witnesses. FSG's founder, Robert Flom, taught in K-12 classrooms before building this firm, and the screening reflects it: we interview for how a candidate operates inside a school, not just whether their certification is current.\n\nEvery behavioral candidate has certification verified for the specific role — BCBA or RBT — plus a full background check, the state-required clearances (in Pennsylvania, Acts 34, 151, and 114, with equivalents in Delaware, New Jersey, and Maryland), TB test, vaccination documentation, references, and a skills screen matched to the assignment.",
      },
      {
        heading: "An exclusive pipeline where scarcity bites hardest",
        body: "BCBAs and trained behavior staff are scarce, and most agencies respond by presenting the same candidate to every district in the region. We work with one client per region instead. Sign with us for your area, and we will not supply a competing school; the behavioral staff we recruit there are presented to you alone.\n\nThat structure has produced engagements where 100% of open roles were filled with 100% candidate retention. And because behavioral roles sit alongside everything else a school needs, we can carry the whole load: at Odyssey Public Charter School in Wilmington, Delaware, we have filled 120+ roles across 13+ role types — the case study is at /case-studies.",
      },
      {
        heading: "Evaluate on a real caseload, hire without a fee",
        body: "Every placement is temp-to-perm at no cost. Put an RBT on a 1:1 assignment or a BCBA over a caseload, watch how they work with your students and teachers, and hire them permanently with no conversion fee if it is a fit.\n\nOur automated credentialing system tracks certifications, clearances, and expiration dates for every candidate, which cuts typical time-to-hire roughly in half — your compliance file is complete before day one, not assembled after it. FSG has staffed schools for 12 years from Wayne, Pennsylvania, for clients including Christina School District, Charlotte-Mecklenburg Schools, and Chester Community Charter.",
      },
    ],
    faqs: [
      {
        q: "Does FSG place BCBAs and RBTs in schools?",
        a: "Yes. BCBAs, RBTs, behavior technicians, and behavioral support staff are core placements, and each candidate's certification is verified for the specific role before you meet them.",
      },
      {
        q: "Will you also supply behavioral staff to the school competing with us?",
        a: "No. One client per region is the model. The BCBAs and RBTs we recruit in your area are presented only to you, and we will not staff a neighboring competitor from your pipeline.",
      },
      {
        q: "How quickly can you fill a behavioral role?",
        a: "Our automated credentialing keeps candidate files complete and current, which cuts typical time-to-hire roughly in half. We give you a realistic per-role timeline on the free discovery call instead of quoting days in the abstract.",
      },
      {
        q: "What do you verify on behavioral candidates?",
        a: "BCBA or RBT certification for the specific role, a full background check, the state-required clearances (PA Acts 34, 151, and 114 or your state's equivalents), TB test, vaccination documentation, references from prior schools and supervisors, and a skills screen.",
      },
      {
        q: "Can we hire a placed behavior tech permanently?",
        a: "Yes, with no conversion fee. Every placement is temp-to-perm at no cost — evaluate the person in your building first, then hire them without a buyout.",
      },
      {
        q: "What does an engagement look like?",
        a: "It starts with a free 30-minute discovery call to map caseloads and certifications. We source, interview, credential, and reference-check candidates, present a vetted shortlist, and your team makes the final call. We then stay involved through onboarding and the life of the placement.",
      },
      {
        q: "What is the difference between an RBT and a BCBA?",
        a: "An RBT (Registered Behavior Technician) is a paraprofessional-level credential — 40 hours of training, a competency assessment, and an exam — and RBTs implement behavior plans under a BCBA's required ongoing supervision. A BCBA (Board Certified Behavior Analyst) is a graduate-level certification; BCBAs conduct assessments, design and revise the plans, analyze the data, and supervise the RBTs. Schools typically need both: BCBAs to design, RBTs to deliver.",
      },
      {
        q: "What is a functional behavior assessment (FBA)?",
        a: "An FBA is a structured process for identifying why a behavior occurs — its function — using direct observation, data collection, and interviews with the people around the student. The findings drive the behavior intervention plan: a plan built without understanding the function is guesswork, which is why FBA experience is one of the first things we probe in BCBA candidates.",
      },
    ],
    related: [
      { label: "Related Services Staffing", slug: "related-services-staffing" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      {
        label: "Allied Health & Related Services Hub",
        slug: "allied-health-hub",
        href: "https://www.focused-staffing.com/allied-health-staffing",
      },
    ],
  },
  {
    slug: "education-staffing-rfp-experience",
    eyebrow: "Education staffing",
    h1: "Education Staffing RFP Experience",
    metaTitle: "Education Staffing RFP & Contract Experience",
    metaDescription:
      "Evaluating education staffing vendors? FSG replaced the incumbents at Odyssey Charter and filled 120+ roles — verifiable outcomes, one client per region.",
    hero: "If you are scoring staffing vendors, score us on the record: 120+ roles filled at Odyssey Public Charter School after the agencies under contract could not deliver, with named districts as references.",
    photo: PHOTOS[2],
    stats: [
      { value: "120+", label: "Roles filled at one school after incumbent contracted agencies couldn't" },
      { value: "+40%", label: "Substitute fill-rate improvement over the previous provider" },
      { value: "95%", label: "Day-to-day substitute fill rate sustained at that school" },
      { value: "12 yrs", label: "Staffing K-12 schools and public-sector education clients" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We review your scope, role categories, compliance requirements, and timeline — and tell you plainly whether we fit the contract before you spend evaluation hours on us.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "Once engaged, we recruit against the contracted role categories, interview each candidate, and complete clearances, certification verification, and references.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your administrators interview fully credentialed candidates and make every final hiring decision — the contract puts the school in control.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We remain accountable through onboarding and the life of each placement, with temp-to-perm conversion at no fee written into how we operate.",
      },
    ],
    verify: [
      "Full criminal background check on every candidate",
      "State-required clearances — in PA, Act 34 criminal history, Act 151 child abuse, Act 114 FBI fingerprinting",
      "Equivalent clearances documented for DE, NJ, and MD placements",
      "State certification verified for every certificated role",
      "TB test and vaccination documentation on file",
      "Reference checks with prior schools and supervisors",
      "Credential files tracked and expiration-flagged in our automated system, audit-ready",
    ],
    sections: [
      {
        heading: "What a staffing RFP actually needs to test",
        body: "Most education staffing RFPs score vendors on narrative sections that every bidder writes the same way. The evaluation criteria that actually separate vendors are documentary. Insurance: current certificates for workers' compensation, general liability, and professional liability, with the district named. Clearance process: who runs the checks, where records are held, how the district audits compliance mid-contract, and what happens when a clearance lapses. References: named, comparable contracts with contacts who will take a call. Fill-rate accountability: how the vendor defines a fill, the reporting cadence, and the remedy when performance slips.\n\nStructural terms deserve scoring weight too, because they determine total contract cost. Employer of record — who carries payroll, taxes, and workers' comp for placed staff. Replacement terms when a placement fails early. Conversion cost when the district wants to hire someone permanently; a buyout clause can quietly dwarf the hourly rate difference between bidders. And escalation: whether the district gets one accountable point of contact or a rotating queue. A solicitation that asks these questions in checkable form will eliminate most of the field before the interviews start.",
      },
      {
        heading: "What we screen for on contracted placements",
        body: "Under contract, every candidate passes the same role-matched screen before their file reaches your evaluators: reliability history verified with prior schools, references we call ourselves, and a skills evaluation built for the seat — classroom management under ambiguity for substitutes, de-escalation and personal-care comfort for paraprofessionals, IEP and behavior-plan experience for special educators, licensure and caseload management for clinicians. Clearances, certification verification, and health documentation run through the automated credentialing system and stay audit-ready.\n\nThe screening methodology was designed by our founder, Robert Flom, a former K-12 teacher — a fact worth weighing when you score vendor quality-control narratives, because ours was written by someone who has done the jobs being staffed.",
      },
      {
        heading: "Performance you can verify, not vendor promises",
        body: "Procurement teams read a lot of identical capability statements. Here is ours in checkable form. Odyssey Public Charter School in Wilmington, Delaware — 1,000+ K-8 students from five districts — had staffing agencies under contract that could not fill the openings. FSG stepped in and has since filled 120+ roles across 13+ distinct role types, from bus drivers to certified teachers, while sustaining a 95% day-to-day substitute fill rate, a 40% improvement over the previous provider. The client-attested case study is at /case-studies.\n\nOur reference list is public and specific: Christina School District, Charlotte-Mecklenburg Schools, Chambersburg Area SD, Chester Community Charter, Leadership Public Schools, Carmen Schools of Science & Tech, Breakthrough Public Schools, First PA, TRECA, and Odyssey Charter. We have also delivered engagements where 100% of open roles were filled with 100% candidate retention.",
      },
      {
        heading: "Compliance infrastructure, not compliance paperwork",
        body: "Public-sector contracts live or die on documentation, so we built a system rather than a filing cabinet. Our automated credentialing platform tracks every candidate's clearances — in Pennsylvania, the Act 34 criminal history check, Act 151 child abuse clearance, and Act 114 FBI fingerprinting, with equivalents for Delaware, New Jersey, and Maryland — plus certifications, TB tests, and vaccination documentation, and flags anything approaching expiration. Files stay audit-ready for the life of the contract.\n\nThe same system is why we can move: it cuts typical time-to-hire roughly in half, because candidates reach your interview stage with complete files. In past engagements, certified special education teachers have been placed within two weeks.",
      },
      {
        heading: "Contract terms that favor the district",
        body: "Two of our standard terms are worth flagging for evaluators. First, one client per region: when you contract with FSG for your region, we will not supply a competing school or district — the pipeline funded by your contract serves only you. Second, temp-to-perm at no cost: any contracted placement can convert to your permanent employee with no conversion fee, which simplifies long-range budget math considerably.\n\nFSG has operated for 12 years from Wayne, Pennsylvania, founded by Robert Flom, a former K-12 teacher. Scope conversations start with a free 30-minute discovery call, and we will tell you honestly if a solicitation is not a fit.",
      },
    ],
    faqs: [
      {
        q: "Does FSG respond to RFPs and work under formal contracts?",
        a: "Yes. We work with school districts and public-sector education clients under contract, and our standing at Odyssey Public Charter School began precisely because the agencies already under contract could not fill the roles.",
      },
      {
        q: "What past performance can we verify?",
        a: "The Odyssey engagement is fully documented at /case-studies: 120+ roles filled, 13+ role types, a 95% substitute fill rate, and a 40% improvement over the prior vendor. Our named clients include Christina School District, Charlotte-Mecklenburg Schools, Chambersburg Area SD, First PA, and TRECA.",
      },
      {
        q: "How do you handle clearance and credential compliance at contract scale?",
        a: "Through an automated credentialing system that tracks every candidate's state-required clearances (PA Acts 34, 151, and 114 or state equivalents), certifications, TB tests, and vaccination records, and flags expirations before they lapse. Files are audit-ready throughout the engagement.",
      },
      {
        q: "What does temp-to-perm conversion cost under your contracts?",
        a: "Nothing. There is no conversion fee when a district hires an FSG placement permanently — a term worth weighing when you model total contract cost against vendors who charge buyouts.",
      },
      {
        q: "Will you hold contracts with competing districts in our region?",
        a: "No. One client per region is how we operate: the recruiting pipeline built under your contract is exclusively yours, and we will not supply a competing school in your area.",
      },
      {
        q: "How do we start a scope conversation?",
        a: "A free 30-minute discovery call. We review your role categories, compliance requirements, and timeline, and give you a straight answer on fit before you invest evaluation time.",
      },
      {
        q: "Who is the employer of record for contracted school staffing?",
        a: "Typically the staffing firm: it carries payroll, employment taxes, and workers' compensation for placed staff, while the school directs the day-to-day work. That split is standard, but it should be explicit in the contract — RFPs that leave employer-of-record ambiguous invite disputes over liability and benefits later.",
      },
      {
        q: "What documentation should an RFP require from staffing vendors?",
        a: "At minimum: current certificates of insurance, a description of the clearance and background-check process with how records are maintained and audited, certification-verification procedures, named references from comparable contracts, fill-rate definitions with reporting cadence, and the vendor's replacement and conversion terms in writing.",
      },
      {
        q: "Can FSG provide references?",
        a: "Yes. Eight letters of recommendation from superintendents, principals, and HR directors at partner schools are published and readable in full at /references, and direct reference contacts are available on request for evaluators who want to speak with a school leader themselves.",
      },
    ],
    related: [
      { label: "School District Staffing Vendor", slug: "school-district-staffing-vendor" },
      { label: "Education Staffing Agency Cost", slug: "education-staffing-agency-cost" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
    ],
  },
  {
    slug: "pennsylvania-education-staffing",
    eyebrow: "Education staffing · Pennsylvania",
    h1: "Pennsylvania Education Staffing",
    metaTitle: "Pennsylvania Education Staffing Agency",
    metaDescription:
      "Pennsylvania schools staffed from our Wayne, PA headquarters with Act 34/151/114-cleared teachers, paras, and clinicians. One client per region.",
    hero: "Headquartered in Wayne, Pennsylvania — drivable to districts across the Philadelphia region and beyond — with every candidate's Act 34, 151, and 114 clearances tracked before you meet them.",
    photo: PHOTOS[3],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
      "Education support staff",
    ],
    stats: [
      { value: "3", label: "PA-required clearances (Acts 34, 151, 114) tracked and expiration-flagged per candidate" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "12 yrs", label: "Staffing schools from our Wayne, PA headquarters" },
      { value: "13+", label: "Role types staffed at a single partner school" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your openings, buildings, and PA certification requirements. Because we are based in Wayne, an in-person follow-up is a drive, not a flight.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit PA candidates against your roles, interview each one, and complete Act 34, 151, and 114 clearances, certification verification, TB tests, and references.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your administrators interview fully cleared candidates and make the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement, and any temp converts to your permanent hire at no fee.",
      },
    ],
    verify: [
      "Act 34 Pennsylvania criminal history clearance",
      "Act 151 Pennsylvania child abuse clearance",
      "Act 114 FBI fingerprint-based background check",
      "PA certification verified for teaching and licensed roles",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    sections: [
      {
        heading: "What staffing a Pennsylvania school actually involves",
        body: "Pennsylvania's regime starts with three clearances no school employee can work without: the Act 34 state criminal history check, the Act 151 child abuse clearance, and the Act 114 FBI fingerprint check — required for teachers, paras, substitutes, and bus drivers alike, and subject to the state's renewal cycle. On top of that sits PDE certification: teaching roles need Pennsylvania Department of Education certification matched to subject and grade band, and substitutes must hold a PA certificate or a PDE-issued emergency permit sponsored by the district. Three documents per person before day one is exactly where most Pennsylvania hires stall.\n\nThe talent pool splits sharply by geography. Southeastern Pennsylvania looks deep on paper — the Philadelphia region produces a steady stream of education graduates — but districts, charters, and cyber charters all fish the same water, so certified candidates field multiple offers and the pool behaves like a shallow one. Rural and small-town districts across central and south-central Pennsylvania face the opposite problem: thin local pools, long commutes, and few replacement candidates when someone leaves mid-year.\n\nEither way, the same categories run shortest: special education certifications, related-services clinicians — speech-language pathologists most acutely — and day-to-day substitutes. Those are the postings that sit open for a semester, and they are the categories a Pennsylvania staffing partner has to be able to fill to be worth the contract.",
      },
      {
        heading: "What we screen for in Pennsylvania candidates",
        body: "Clearances get a candidate to the starting line; our screen decides who reaches your shortlist. It is matched to the role: special education teachers are probed on IEP writing, IEP-meeting experience, and behavior-plan implementation; paraprofessionals on de-escalation, comfort with personal-care duties, and IEP data collection; substitutes on classroom management under ambiguity and a morning-of reliability record we verify with prior schools; clinicians on licensure and caseload management. PA certification is verified with PDE for the specific role, not taken from the résumé.\n\nThe methodology was built by our founder, Robert Flom, a former K-12 teacher, and it is the same standard whether the opening is on the Main Line or three hours west of it.",
      },
      {
        heading: "A Pennsylvania firm, not a national call center",
        body: "FSG is headquartered in Wayne, Pennsylvania, and has staffed schools from here for 12 years. We support education organizations across the Philadelphia region, the Main Line, Montgomery County, Delaware County, Bucks County, Chester County, and the Lehigh Valley — close enough that a site visit is a drive down the Blue Route, not a flight and a rental car. Our founder, Robert Flom, taught in K-12 classrooms before starting the firm, and that background sets the vetting bar for every candidate we present.\n\nPennsylvania clients include Chester Community Charter, Chambersburg Area SD, and First PA, and our full client list — Christina School District, Charlotte-Mecklenburg Schools, Leadership Public Schools, and others — is on the site because references should be checkable.",
      },
      {
        heading: "Acts 34, 151, and 114, handled before you meet anyone",
        body: "Pennsylvania requires three clearances for school personnel: the Act 34 state criminal history check, the Act 151 child abuse clearance, and Act 114 FBI fingerprinting. Chasing those three documents across dozens of candidates is where most PA school hires stall. Our automated credentialing system completes and tracks all three for every candidate, alongside PA certification verification, TB tests, and vaccination documentation, and flags any clearance approaching expiration.\n\nThat system is why our typical time-to-hire runs roughly half the norm, and why in past engagements we have placed certified special education teachers within two weeks. Candidates arrive at your interview with complete, current files.",
      },
      {
        heading: "One PA client per region, and temp-to-perm without a fee",
        body: "Southeastern Pennsylvania districts compete for the same certified teachers and licensed clinicians, and most agencies profit from that competition by shopping candidates across it. We do the opposite: one client per region. Sign with FSG for your part of Pennsylvania and we will not supply a competing district or charter nearby — the candidates we recruit in your area are presented only to you.\n\nEvery placement is temp-to-perm at no cost, so you can evaluate a teacher or clinician in your building and hire them permanently with no conversion fee. For daily coverage, our substitutes are paid weekly on Fridays and manage shifts through a mobile app — the model that holds a 95% day-to-day fill rate at Odyssey Public Charter School, just across the Delaware line (case study at /case-studies). We also run school-supply and backpack drives for our partner schools each year.",
      },
    ],
    richHtml: `<p>Pennsylvania superintendents, special education directors, and charter operations leads are all managing the same problem from different chairs: a certified special-education teacher or a related-service provider leaves mid-year, a compliance clock is already running against an IEP timeline, and the traditional route to a hire — post, wait, screen, clear, hope — takes longer than the vacancy can afford. FocusedEDU is a specialized K-12 staffing partner working across Pennsylvania districts, Intermediate Units, and charter networks, sourcing special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes . Charter networks are our highest-priority partner segment . This page lays out what&#39;s actually driving the shortage in Pennsylvania, what the state requires before anyone sets foot in a classroom, how the Commonwealth&#39;s Intermediate Unit system fits into staffing decisions, and which charter operators are building in the state today.</p>
<h2 id="the-special-education-staffing-landscape-in-pennsylvania">The special-education staffing landscape in Pennsylvania</h2>
<p>Special education is the single largest area of unfilled instructional need in the Commonwealth. In the Pennsylvania Department of Education&#39;s <em>Educator Workforce Report</em> (December 2025), the state&#39;s Bureau of Educator Effectiveness found that &quot;at the start of the 2024-25 school year, approximately half of local education agencies (LEA) reported more than 3,300 vacancies, with the highest numbers being in special education, school psychologist, elementary all levels, school nurses and math&quot; <span class="cite">(source: PA Department of Education, Educator Workforce Report, Dec. 2025, <a href="https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/educators/educator-workforce-strategy/2025%20pde%20educator%20workforce%20annual%20report-final.pdf">https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/educators/educator-workforce-strategy/2025%20pde%20educator%20workforce%20annual%20report-final.pdf</a>)</span>. Broken out by subject, Special Education Resource (PreK-12) alone carried 264 open positions — the single largest subject-area vacancy count PDE tracked that year — with Special Education Life Skills/Autistic/Multiple-Disability Support close behind at 224, and School Psychologist at 126 <span class="cite">(source: same report, Table 2)</span>. PDE&#39;s own state shortage-area designation for 2024-2025 lists Special Education PK-12 at 1,990 unfilled FTE positions, or 1.63% of all instructional FTEs statewide — the largest single-subject shortage category the state reports <span class="cite">(source: same report, Table 4)</span>.</p>
<p>That pressure lands on top of real scale: 336,850 Pennsylvania students, or 20.1% of statewide enrollment, were identified as students with disabilities in 2023-24, with Specific Learning Disability, Other Health Impairment, Speech-or-Language Impairment, and Autism as the four largest categories <span class="cite">(source: Special Education in Pennsylvania 2023-2024 Data Book, PennData/PA State Data Center, March 2025, <a href="https://penndata.hbg.psu.edu/Portals/66/documents/SpecialEducationSummary/2023-2024_Special_Education_Data_Book.pdf">https://penndata.hbg.psu.edu/Portals/66/documents/SpecialEducationSummary/2023-2024_Special_Education_Data_Book.pdf</a>)</span>. Every one of those IEPs has to be staffed, on schedule, by someone who is actually cleared to be in the building.</p>
<h2 id="clearances-pennsylvania-requires-before-anyone-works-in-a-sc">Clearances Pennsylvania requires before anyone works in a school</h2>
<p>Pennsylvania law requires three separate background clearances for any employee, contractor, or independent contractor&#39;s employee who will have direct contact with children — all three have to be current and on file before a placement starts:</p>
<ul>
<li><strong>Act 34 — Pennsylvania Criminal History Record.</strong> Statewide criminal background check administered through the Pennsylvania Access to Criminal History (PATCH) system; the report must be &quot;no more than five (5) years old at the time of employment&quot; <span class="cite">(source: PA Department of Education, PATCH, <a href="https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/pennsylvania-access-to-criminal-history-patch">https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/pennsylvania-access-to-criminal-history-patch</a>)</span>.</li>
<li><strong>Act 151 — Child Abuse History Clearance.</strong> Issued by the PA Department of Human Services, confirming the applicant has no substantiated child-abuse history on record <a class="cite" href="https://www.pa.gov/agencies/dhs/resources/keep-kids-safe/child-abuse-clearances/pa-child-abuse-history-clearance" rel="noopener nofollow" target="_blank">PA Department of Human Services</a>.</li>
<li><strong>Act 114 — Federal (FBI) Criminal History Record Information.</strong> Fingerprint-based federal background check. As PDE states directly: &quot;As of April 1, 2007, Act 114 of 2006 has required that ALL prospective employees of public and private schools, including their independent contractors and their employees, but excluding employees who do not have direct contact with students, undergo background checks&quot; <span class="cite">(source: PA Department of Education, Federal CHRI, <a href="https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/background-checks">https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/background-checks</a>)</span>.</li>
</ul>
<p>FocusedEDU builds every Pennsylvania candidate&#39;s Act 34/151/114 file, plus role-specific certification verification, before that candidate is ever presented to a district or charter — a complete compliance file before shortlist, not after an offer . That&#39;s part of why our credentialing timeline runs 2-4 weeks against an industry norm closer to 6-8 .</p>
<h2 id="how-pennsylvania39s-intermediate-units-fit-into-staffing">How Pennsylvania&#39;s Intermediate Units fit into staffing</h2>
<p>Pennsylvania organizes regional education services through 29 Intermediate Units (IUs), which PDE describes directly: &quot;Pennsylvania&#39;s 29 Intermediate Units (IUs) provide special education, professional development, and technical assistance services to school districts, charter schools, and private schools&quot; <span class="cite">(source: PA Department of Education, Types of Schools, <a href="https://www.pa.gov/agencies/education/resources/types-of-schools">https://www.pa.gov/agencies/education/resources/types-of-schools</a>)</span>. Statewide, PDE counts &quot;more than 1.7 million students in 500 school districts, 29 Intermediate Units, 174 charter schools, and multiple private schools&quot; <span class="cite">(source: PA Department of Education, Schools, <a href="https://www.pa.gov/agencies/education/programs-and-services/schools">https://www.pa.gov/agencies/education/programs-and-services/schools</a>)</span>. IUs themselves describe their role as covering &quot;special education, online learning programs and support... professional development for educators, administrative and purchasing consortia and much more&quot; <a class="cite" href="https://www.paiu.org/" rel="noopener nofollow" target="_blank">Pennsylvania Association of Intermediate Units</a>. In practice, that means an IU is frequently the entity actually delivering — or arranging — related services and specialized instruction for smaller districts that can&#39;t justify a full-time SLP, OT, PT, or school psychologist on their own staff, which is exactly the itinerant, multi-building need FocusedEDU&#39;s outbound-recruiting model is built to source for . Several IUs, including Lincoln IU 12, Carbon-Lehigh IU 21, and Bucks County IU 22, are named directly in PDE&#39;s own vacancy data as carrying some of the state&#39;s largest unfilled positions <span class="cite">(source: PA Department of Education, Educator Workforce Report, Table 3)</span>.</p>
<h2 id="charter-networks-staffing-in-pennsylvania">Charter networks staffing in Pennsylvania</h2>
<p>Philadelphia is home to one of the country&#39;s largest concentrations of standalone and multi-site charter operators, several of which run their own dedicated special-education programming:</p>
<ul>
<li><strong>Mastery Charter Schools</strong>, operating 11 elementary and 7 secondary schools across Philadelphia, runs a dedicated Specialized Services program covering Autistic Support, Life Skills Support, Multiple Disabilities Support, Emotional Support, Learning Support, Deaf/Hard of Hearing, Blind/Visually Impaired, Speech-Language Impairment, and related OT/PT/speech services <a class="cite" href="https://masterycharter.org" rel="noopener nofollow" target="_blank">Mastery Charter Schools</a>.</li>
<li><strong>KIPP Philadelphia</strong> operates multiple K-12 campuses across North and West Philadelphia <span class="cite">(source: <a href="https://kippphiladelphia.org">https://kippphiladelphia.org</a>)</span>.</li>
<li><strong>MaST Community Charter School</strong> runs a K-12 network across three campuses in Northeast Philadelphia <span class="cite">(source: <a href="https://mastschools.org">https://mastschools.org</a>)</span>.</li>
<li><strong>Esperanza Academy Charter School</strong> has served North Philadelphia for nearly 25 years <span class="cite">(source: <a href="https://www.esperanzaacademycs.org">https://www.esperanzaacademycs.org</a>)</span>.</li>
<li><strong>Universal Companies</strong> manages five charter schools — Alcorn, Audenried, Creighton, Institute, and Vare — serving roughly 4,300 Philadelphia students <span class="cite">(source: <a href="https://www.universalcompanies.org/education/">https://www.universalcompanies.org/education/</a>)</span>.</li>
<li><strong>Global Leadership Academy Charter School</strong> operates K-8 across multiple learning communities in West Philadelphia <span class="cite">(source: <a href="http://www.glacharter.org">http://www.glacharter.org</a>)</span>.</li>
</ul>
<p>FocusedEDU has staffed Philadelphia public charter schools directly — see our case study: <a href="https://www.focusedu-staffing.com/case-studies/first-philadelphia-public-charter-school">Every special-education teacher we placed stayed</a>.</p>
<h2 id="what-focusededu-does-in-pennsylvania">What FocusedEDU does in Pennsylvania</h2>
<p>FocusedEDU works with Pennsylvania school districts, Intermediate Units, and charter networks — charter networks are our highest priority — to staff special-education teachers, general-education teachers, paraprofessionals, school nurses (RN/LPN), SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes . Our model is built around outbound recruiting of passive candidates rather than waiting on job-board applicants, deep specialization in the hard-to-fill special-education and related-service roles that sit on top of a district&#39;s compliance risk, and a credentialing platform that gets a Pennsylvania candidate&#39;s Act 34/151/114 clearances and certification verification complete before that candidate is ever shortlisted . We work as a long-term staffing partner, not a one-off vendor filling a single vacancy .</p>
`,
    faqs: [
      { q: "What clearances does Pennsylvania law require before someone can work in a school?", a: "Every employee, contractor, or independent contractor's employee with direct contact with children needs three current clearances: Act 34 (PA criminal history, no more than 5 years old), Act 151 (PA child abuse history), and Act 114 (FBI fingerprint-based federal criminal history) (PA Department of Education: https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/background-checks). FocusedEDU completes all three, plus certification verification, for every Pennsylvania candidate before that candidate is presented ." },
      { q: "Do Pennsylvania's Intermediate Units use outside staffing partners for special education?", a: "IUs are PDE-designated providers of special education, technical assistance, and professional development to districts, charter schools, and private schools statewide (source: PA Department of Education, Types of Schools). That regional, multi-building service model is the same structure FocusedEDU's related-service and special-education staffing is built to support ." },
      { q: "How quickly can a hard-to-fill role like an SLP or school psychologist actually get filled?", a: "Because our credentialing platform runs clearances and certification checks before a candidate is shortlisted rather than after, our typical timeline runs 2-4 weeks against an industry norm closer to 6-8 weeks  — meaningful when Pennsylvania's own data shows school psychologist and related-service vacancies sitting open at scale (source: PA Department of Education, Educator Workforce Report, Table 2)." },
      { q: "Does FocusedEDU work with charter schools in Philadelphia and across Pennsylvania?", a: "Yes — charter networks are our highest-priority partner segment . We've staffed Philadelphia charter schools directly; see our case study, [Every special-education teacher we placed stayed](https://www.focusedu-staffing.com/case-studies/first-philadelphia-public-charter-school)." },
      { q: "What's the difference between a staffing agency and a substitute-teacher service?", a: "A substitute service exists to cover a classroom for a day or a defined absence. FocusedEDU is built for the harder problem underneath that: sourcing and clearing specialized, certified professionals — special-education teachers, SLPs, OTs, PTs, school psychologists — for roles a district needs filled and kept filled, through outbound recruiting rather than waiting on inbound applicants, as a long-term partner rather than a rotating pool ." },
    ],
    quote: {
      text: "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
      name: "Zavia Herring",
      role: "Director of HR, Renaissance Academy Charter School",
    },
    related: [
      { label: "Philadelphia Education Staffing", slug: "philadelphia-education-staffing" },
      { label: "Delaware Education Staffing", slug: "delaware-education-staffing" },
      { label: "New Jersey Education Staffing", slug: "new-jersey-education-staffing" },
      { label: "Maryland Special Education Staffing", slug: "maryland-special-education-staffing" },
    ],
  },
  {
    slug: "new-jersey-education-staffing",
    eyebrow: "Education staffing · New Jersey",
    h1: "New Jersey Education Staffing",
    metaTitle: "New Jersey Education Staffing Agency",
    metaDescription:
      "New Jersey schools staffed with cleared, certification-verified teachers, paraprofessionals, and clinicians — one client per region.",
    hero: "New Jersey schools staffed from just across the river: cleared, certification-verified teachers, paras, and clinicians, recruited into a pipeline we reserve for one client per region.",
    photo: PHOTOS[0],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "Instructional aides",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
      "Behavioral support staff",
    ],
    stats: [
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "95%", label: "Daily substitute fill rate at our flagship regional partner school" },
      { value: "120+", label: "Roles filled at that single school" },
      { value: "12 yrs", label: "Staffing schools across the PA/NJ/DE/MD region" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your New Jersey openings, buildings, and certification requirements. Wayne, PA is our headquarters, so your district is within driving range, not a territory on a map.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit against your roles, interview every candidate, and complete New Jersey's required clearances and background checks, certification verification, TB tests, and references.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your administrators interview fully credentialed candidates and make the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement, with temp-to-perm conversion at no fee.",
      },
    ],
    verify: [
      "New Jersey's required clearances and criminal background checks — the NJ equivalents of PA's Acts 34, 151, and 114",
      "Full criminal background check",
      "State certification verified for teaching and licensed roles",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    sections: [
      {
        heading: "What staffing a New Jersey school actually involves",
        body: "New Jersey gates school employment the way every state in our footprint does: state-mandated criminal history background checks must clear before anyone starts work, certificated roles require New Jersey Department of Education certification matched to the position, and substitutes need state-issued substitute credentials with their own qualification standards. Licensed clinicians — SLPs, OTs, PTs, school psychologists — need New Jersey licensure or certification in their discipline on top of it. None of that paperwork flexes for an urgent vacancy, which is why it has to be done before the vacancy exists.\n\nThe state's structure shapes the talent market. New Jersey runs on a large number of small districts packed close together, so schools compete for the same certified candidates with the district literally across the street — a certified special education teacher in a dense county can collect offers without lengthening their commute. Urban districts carry chronic shortages in special education and student-support roles; suburban districts fight hardest over related-services clinicians, whose caseloads are stretched everywhere.\n\nAcross both, the shortest categories are consistent: special education certifications, related services, and day-to-day substitutes. Those are the openings that outlast a posting cycle, and the ones a New Jersey staffing partner is really being hired to solve.",
      },
      {
        heading: "What we screen for in New Jersey candidates",
        body: "Every New Jersey candidate passes a role-matched screen after the clearance file is complete. Special education teachers are probed on IEP writing and meeting experience and behavior-plan implementation; paraprofessionals on de-escalation, personal-care comfort, and IEP data collection; substitutes on classroom management under ambiguity and verified morning-of reliability; clinicians on state licensure and multi-building caseload management. Certification is verified with the state for the specific role.\n\nThe screen was designed by our founder, Robert Flom, a former K-12 teacher — so candidates are evaluated on how they operate inside a school, not on how well they interview.",
      },
      {
        heading: "Close enough to drive to your district",
        body: "FSG is headquartered in Wayne, Pennsylvania, and has staffed schools across the PA, NJ, DE, and MD region for 12 years — New Jersey districts are a drive across the river, not an outpost managed from another time zone. The firm was founded by Robert Flom, a former K-12 teacher, and the vetting standard he built applies to every New Jersey candidate we present.\n\nOur regional track record is concrete: at Odyssey Public Charter School — a 1,000+ student K-8 school drawing from five districts — we filled 120+ roles across 13+ role types after the incumbent agencies could not, and sustain a 95% daily substitute fill rate, 40% better than the previous provider. The case study is at /case-studies.",
      },
      {
        heading: "New Jersey clearances, completed before the interview",
        body: "Every state regulates who may work in a school building. Pennsylvania requires Acts 34, 151, and 114; New Jersey has its own required clearances and criminal background checks, and our automated credentialing system handles those the same way — completed up front, tracked continuously, and flagged before anything expires. Add certification verification for the specific role, TB test, vaccination documentation, references from prior schools, and a skills screen, and the file is finished before you meet the candidate.\n\nThat is the mechanism behind the headline number: typical time-to-hire cut roughly in half. In past engagements we have placed certified special education teachers within two weeks.",
      },
      {
        heading: "One New Jersey client per region",
        body: "When you sign with FSG for your region, we will not supply a competing school or district nearby. The teachers, paraprofessionals, and clinicians we recruit in your area are presented to you alone — an exclusivity most agencies will not offer because shopping one candidate to three districts pays them better. We have run engagements where 100% of open roles were filled with 100% candidate retention, and exclusivity is a large part of why.\n\nEvery placement is temp-to-perm at no cost: evaluate the professional in your building, then hire them permanently with no conversion fee. Daily substitutes are paid weekly on Fridays via direct deposit or Cash App and manage shifts through a mobile app, which is what keeps the pool showing up in January, not just September.",
      },
    ],
    richHtml: `<p>New Jersey districts and charter schools are trying to staff specialized, compliance-critical roles inside a workforce pipeline that&#39;s been shrinking for years. FocusedEDU is a specialized K-12 staffing partner working with New Jersey districts, county-level education offices, and charter networks to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest-priority partner segment . Below is what the state&#39;s own data says about the shortage, what New Jersey requires before anyone can work in a school, how the state&#39;s county office structure fits into staffing, and which charter operators are actually building in New Jersey today.</p>
<h2 id="the-special-education-staffing-landscape-in-new-jersey">The special-education staffing landscape in New Jersey</h2>
<p>New Jersey&#39;s own Task Force on Public School Staff Shortages — convened under Governor Murphy&#39;s Executive Order #309, with the NJ Department of Education presenting certification-pathway data to the group — found that &quot;the pandemic has exacerbated shortages in specific teaching areas, including, but not limited to, special education, science and math, and English as a second language or bilingual education&quot; <span class="cite">(source: Task Force on Public School Staff Shortages, Initial Recommendations, Feb. 2023, <a href="https://www.nj.gov/education/docs/TaskForceReport.pdf">https://www.nj.gov/education/docs/TaskForceReport.pdf</a>)</span>. The same report&#39;s own workforce data shows the structural side of the problem: in 2017-18, 8,764 teachers left New Jersey public schools while only 5,248 newly certified teachers graduated into the pipeline that year — a gap that had been widening every year since 2014-15 <span class="cite">(source: same report, Table 4, citing the NJ Education to Earnings Data System)</span>.</p>
<p>More recently, the New Jersey Association of Colleges for Teacher Education has projected the state will need roughly 2,500 additional special-education teachers over the next five years, a figure reported by the New Jersey Education Association <span class="cite">(source: NJEA, &quot;Addressing the special education teacher shortage,&quot; May 15, 2025, <a href="https://www.njea.org/addressing-the-special-education-teacher-shortage/">https://www.njea.org/addressing-the-special-education-teacher-shortage/</a>)</span>. The same article cites national NCES data showing 74% of elementary and middle schools nationally had difficulty filling a special-education teaching vacancy with a fully certified teacher in 2024-25 — context for the pressure New Jersey buyers are competing against for the same limited pool of certified candidates. Against that backdrop, the state reported 242,001 students with IEPs as of October 15, 2024 — a 17.35% statewide classification rate <span class="cite">(source: NJDOE Office of Special Education, IDEA Section 618 Public Reporting, <a href="https://www.nj.gov/education/specialed/monitor/ideapublicdata">https://www.nj.gov/education/specialed/monitor/ideapublicdata</a>)</span> — spread across 590 operating school districts and 84 charter schools <span class="cite">(source: NJDOE, New Jersey Public Schools Fact Sheet 2025-2026, <a href="https://www.nj.gov/education/doedata/fact.shtml">https://www.nj.gov/education/doedata/fact.shtml</a>)</span>.</p>
<h2 id="clearances-new-jersey-requires-before-anyone-works-in-a-scho">Clearances New Jersey requires before anyone works in a school</h2>
<p>New Jersey requires a fingerprint-based Criminal History Record Check for every applicant, administered by the NJDOE&#39;s Office of Student Protection (OSP): &quot;The Office of Student Protection Unit (OSP) conducts criminal background checks of applicants for positions in New Jersey&#39;s public schools, private schools for students with disabilities, charter schools, and nonpublic schools, as well as for authorized vendors and authorized school bus contractors&quot; <span class="cite">(source: NJDOE, Criminal History Record Check, <a href="https://www.nj.gov/education/crimhist/">https://www.nj.gov/education/crimhist/</a>)</span>. The requirement is statutory under N.J.S.A. 18A:6-7.1, and the hiring entity itself is &quot;statutorily responsible to ensure applicants, employees, or board/trustee members complete the Criminal History Record Check process prior to employment&quot; — the check runs through both the New Jersey State Police and the FBI <span class="cite">(source: same page)</span>. The statute&#39;s disqualifying-offense list — reproduced in the New Jersey Legislature&#39;s own bill text for S3395 (2024) — covers all first- and second-degree crimes, Title 2C chapter 14 sex offenses, drug offenses, and crimes involving force or threat, with written notice and a right to challenge before any denial <span class="cite">(source: NJ Legislature, S3395, <a href="https://pub.njleg.gov/Bills/2024/S3500/3395_I1.HTM">https://pub.njleg.gov/Bills/2024/S3500/3395_I1.HTM</a>)</span>.</p>
<p>FocusedEDU runs every New Jersey candidate through OSP clearance and role-specific certification verification before that candidate is shortlisted to a district — a completed compliance file up front, not a race to finish paperwork after an offer .</p>
<h2 id="how-new-jersey39s-county-offices-fit-into-staffing-decisions">How New Jersey&#39;s county offices fit into staffing decisions</h2>
<p>New Jersey doesn&#39;t use Pennsylvania-style Intermediate Units; instead, the state is organized into 21 County Offices of Education, each led by an Executive County Superintendent. NJDOE describes them as &quot;the focal point of general support, oversight and routine communications between local districts and the Department&#39;s central offices&quot; <span class="cite">(source: NJDOE, County Offices of Education, <a href="https://www.nj.gov/education/about/counties/">https://www.nj.gov/education/about/counties/</a>)</span>. Each county office carries a core staff that includes an Executive County Business Official, a County Education Specialist, and a County Special Education Specialist — and each office directly touches staffing: county offices issue substitute certificates, conduct special-education program reviews, collect the state&#39;s &quot;Biannual Statement of Assurance Regarding the Use of Paraprofessional Staff,&quot; and review district administrative contracts <span class="cite">(source: same page)</span>. For a district or charter network trying to fill a specialized role, the county special-education specialist is frequently the compliance touchpoint that a staffing partner&#39;s paperwork ultimately has to satisfy.</p>
<h2 id="charter-networks-staffing-in-new-jersey">Charter networks staffing in New Jersey</h2>
<p>New Jersey&#39;s charter sector is concentrated in Newark, Camden, and Paterson, with several multi-site operators running dedicated special-education programming:</p>
<ul>
<li><strong>KIPP New Jersey</strong> operates K-12 schools &quot;throughout the cities of Newark, Camden, and Paterson,&quot; including KIPP TEAM Academy in Newark, one of the network&#39;s founding schools <span class="cite">(source: <a href="https://kippnj.org/">https://kippnj.org/</a>)</span>.</li>
<li><strong>Uncommon Schools</strong> runs North Star Academy — 14 schools across Newark neighborhoods including Clinton Hill, Downtown Newark, and West Side — and Camden Prep, five schools serving Pre-K through 12 in Camden. Uncommon&#39;s own site states: &quot;We believe that children with disabilities are deserving of a high-quality, individualized education,&quot; describing services under IDEA, Section 504, and the ADA, including speech-language therapy, OT/PT, and behavioral services <span class="cite">(source: <a href="https://northstar.uncommonschools.org/about-us/">https://northstar.uncommonschools.org/about-us/</a>; <a href="https://camdenprep.uncommonschools.org/">https://camdenprep.uncommonschools.org/</a>)</span>.</li>
<li><strong>Great Oaks Legacy Charter School</strong> is an &quot;open-enrollment, tuition-free public charter school system&quot; with more than 2,000 students across seven campuses in Newark <span class="cite">(source: <a href="https://www.greatoakslegacy.org/about">https://www.greatoakslegacy.org/about</a>)</span>.</li>
<li><strong>Paterson Charter School for Science and Technology</strong> serves 1,600+ students K-12 across four Paterson campuses, &quot;fully accredited by the State of New Jersey Department of Education&quot; <span class="cite">(source: <a href="https://www.pcsst.org/">https://www.pcsst.org/</a>)</span>.</li>
</ul>
<h2 id="what-focusededu-does-in-new-jersey">What FocusedEDU does in New Jersey</h2>
<p>FocusedEDU works with New Jersey school districts and charter networks — charter networks are our highest priority — to staff special-education teachers, general-education teachers, paraprofessionals, school nurses (RN/LPN), SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes . We source through outbound recruiting of passive candidates rather than waiting on inbound job-board applicants, specialize specifically in the hard-to-fill special-education and related-service roles that carry the most compliance risk when they sit open, and run OSP clearance and certification verification to completion before a candidate is ever shortlisted . We work as a long-term staffing partner, not a single-vacancy vendor .</p>
`,
    faqs: [
      { q: "What background check does New Jersey require before someone can work in a school?", a: "A fingerprint-based Criminal History Record Check through the NJDOE's Office of Student Protection, run against both the New Jersey State Police and the FBI, required under N.J.S.A. 18A:6-7.1 for every applicant with direct school access (NJDOE: https://www.nj.gov/education/crimhist/). FocusedEDU clears every New Jersey candidate through this process before presenting them to a district ." },
      { q: "Is the special-education teacher shortage in New Jersey actually getting worse?", a: "State workforce data shows more teachers leaving than new certified graduates entering every year since at least 2014-15, and NJACTE now projects New Jersey will need roughly 2,500 additional special-education teachers within five years (source: NJEA, https://www.njea.org/addressing-the-special-education-teacher-shortage/, citing NJACTE and the NJ Task Force report)." },
      { q: "Do New Jersey's county offices of education use outside staffing partners?", a: "County special-education specialists review district paraprofessional use and special-education programming directly, and each office issues substitute certificates for its county (NJDOE: https://www.nj.gov/education/about/counties/). That's the same compliance layer FocusedEDU's New Jersey candidates are cleared to satisfy before a district ever sees them ." },
      { q: "Does FocusedEDU work with charter networks in Newark, Camden, and Paterson?", a: "Yes — charter networks are our highest-priority partner segment , and New Jersey's charter sector, concentrated in exactly those three cities, is a core part of our New Jersey market." },
      { q: "What's the difference between a staffing agency and a substitute-teacher service in New Jersey?", a: "A substitute service fills day-to-day classroom coverage. FocusedEDU is built for the harder, compliance-critical layer above that — sourcing and clearing certified special-education teachers and related-service providers through direct outbound recruiting, as a long-term partner rather than a rotating sub pool ." },
    ],
    quote: {
      text: "I recommend Focused Staffing Group without reservation. They have demonstrated a consistent level of professionalism, reliability, and responsiveness in addressing our staffing needs.",
      name: "Lennita Porter-Linen",
      role: "Director of HR Recruitment & Retention, Bridgeton Public Schools (NJ)",
    },
    related: [
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },
  {
    slug: "maryland-special-education-staffing",
    eyebrow: "Education staffing · Maryland",
    h1: "Maryland Special Education Staffing",
    metaTitle: "Maryland Special Education Staffing",
    metaDescription:
      "Maryland schools staffed with cleared, certification-verified special education teachers, paraprofessionals, and clinicians — one client per region.",
    hero: "Special education teachers, paraprofessionals, and clinicians for Maryland schools — certification-verified, clearance-complete, and recruited into a pipeline we reserve for one client per region.",
    photo: PHOTOS[1],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "Related service providers",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
    ],
    stats: [
      { value: "2 wks", label: "Certified special education teachers placed within two weeks in past engagements" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "100%", label: "Fill and retention on past engagements — every role filled, every candidate retained" },
      { value: "12 yrs", label: "Staffing schools across the PA/NJ/DE/MD region" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your Maryland special education openings — classrooms, caseloads, certifications required — at no cost and no obligation.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit against your roles, interview every candidate, and complete Maryland's required clearances and background checks, certification verification, TB tests, and references.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your special education director interviews fully credentialed candidates and makes the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement, and any temp converts to your permanent hire at no fee.",
      },
    ],
    verify: [
      "Maryland's required clearances and criminal background checks — the state's equivalents of PA's Acts 34, 151, and 114",
      "Full criminal background check",
      "State certification verified for special education and licensed roles",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    sections: [
      {
        heading: "What staffing Maryland special education actually involves",
        body: "Maryland gates school employment with state-required fingerprint-based criminal background checks and child-protective screening that must clear before day one. Special education teachers need Maryland State Department of Education certification in special education for the appropriate grade band; related-services clinicians — SLPs, OTs, PTs, school psychologists — need Maryland licensure or certification in their discipline. Substitutes and paraprofessionals face the state's qualification standards and the same background-check gate. It is a multi-document file per person, and assembling it after the vacancy opens is how districts lose a semester.\n\nGeography splits Maryland's talent pool in two. The Baltimore metro and the Washington suburbs sit inside two large professional job markets, so schools compete for certified special educators not just with neighboring districts but with every other employer bidding for the same college-educated workforce. The Eastern Shore and Western Maryland recruit from thin rural pools where a single resignation can leave no local replacement at all.\n\nStatewide, special education is the persistent shortage category — the certification area where openings outlast posting cycles year after year — with related services and day-to-day substitutes close behind. That is the market this page exists for.",
      },
      {
        heading: "What we screen for in Maryland special education candidates",
        body: "After the Maryland clearance and certification file is complete, our screen goes to the job itself. Special education teachers are probed on IEP writing and meeting experience, behavior-plan implementation, co-teaching history, and progress-monitoring data habits. Paraprofessionals bound for special education rooms are screened for de-escalation experience, comfort with personal-care duties, and IEP data collection. Clinicians are verified for Maryland licensure in their discipline and questioned on multi-building caseload management.\n\nThe methodology comes from our founder, Robert Flom, a former K-12 teacher — the interview asks what the candidate did in the hard moments of the job, because that is what your students will get.",
      },
      {
        heading: "Special education focus, regional roots",
        body: "FSG has staffed schools across the PA, NJ, DE, and MD region for 12 years from our headquarters in Wayne, Pennsylvania — Maryland districts sit inside our home footprint, not at the edge of a national map. The firm was founded by Robert Flom, a former K-12 teacher, which is why our special education screening asks classroom questions, not just résumé questions: how a candidate manages an IEP caseload, a self-contained room, a difficult parent conference.\n\nThe regional record is specific. At Odyssey Public Charter School we filled 120+ roles across 13+ role types after the school's contracted agencies could not; in other engagements we have placed certified special education teachers within two weeks and filled 100% of open roles with 100% candidate retention. The Odyssey case study is at /case-studies.",
      },
      {
        heading: "Maryland clearances and certifications, done up front",
        body: "Maryland, like every state in our footprint, requires clearances and background checks before anyone works in a school; our automated credentialing system completes the state's requirements — the Maryland equivalents of Pennsylvania's Act 34, Act 151, and Act 114 clearances — and tracks each document continuously, flagging expirations before they lapse. Certification is verified for the specific special education role, alongside TB tests, vaccination documentation, references, and a skills screen.\n\nBecause that file is finished before you meet the candidate, typical time-to-hire drops by roughly half. Your compliance office receives complete documentation on day one.",
      },
      {
        heading: "Your pipeline, no one else's — and no conversion fee",
        body: "We work with one client per region. If you sign with FSG for your part of Maryland, we will not supply a competing school or district, and the special education teachers and clinicians we recruit in your area are presented only to you. In a specialty where certified candidates are the scarcest resource in the building, exclusivity is the mechanism that keeps roles filled instead of contested.\n\nEvery placement is temp-to-perm at no cost: evaluate a teacher on a real caseload, then hire them permanently with no conversion fee. For daily coverage, our substitutes are paid weekly on Fridays via direct deposit or Cash App and manage shifts through a mobile app — the model that sustains a 95% daily fill rate at our flagship partner school. Our client list, including Christina School District and Charlotte-Mecklenburg Schools, is published so references can be checked.",
      },
    ],
    richHtml: `<p>Maryland&#39;s 24 local school systems and their charter schools are staffing against a shortage that&#39;s improving on paper but hasn&#39;t actually closed where it matters most. FocusedEDU is a specialized K-12 staffing partner working with Maryland&#39;s local education agencies and charter schools to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest priority . Here&#39;s what the state&#39;s own workforce data shows, what Maryland requires before anyone works in a school, how the state&#39;s LEA structure works, and which charter operators are active today.</p>
<h2 id="the-special-education-staffing-landscape-in-maryland">The special-education staffing landscape in Maryland</h2>
<p>Maryland&#39;s teacher-vacancy picture has genuinely improved, but special education is the one category lagging that improvement. In a Teacher Workforce Update presented to the Maryland State Board of Education on December 9, 2025, MSDE reported beginning-of-year statewide teacher vacancies falling from a peak of 2,144.9 in SY2022-23 to just 886.2 in SY2025-26 — a 45.3% year-over-year drop <span class="cite">(source: MSDE, Teacher Workforce Update, Dec. 9, 2025, <a href="https://marylandpublicschools.org/stateboard/documents/2025/1209/teacher-workforce-update-a.pdf">https://marylandpublicschools.org/stateboard/documents/2025/1209/teacher-workforce-update-a.pdf</a>)</span>. But special-education vacancies fell only 21.4% over that same year, a far smaller improvement than elementary education&#39;s 63.3% drop — meaning special education remains the hardest category to close even as the statewide numbers ease. State Superintendent Carey Wright called the overall drop &quot;a very encouraging sign&quot; while noting &quot;more work to do&quot; <span class="cite">(source: Fox Baltimore/WBFF, Dec. 11, 2025, <a href="https://foxbaltimore.com/news/local/maryland-teacher-vacancies-state-education-department">https://foxbaltimore.com/news/local/maryland-teacher-vacancies-state-education-department</a>)</span>. MSDE&#39;s own teacher-recruitment portal continues to list special education as one of Maryland&#39;s standing high-needs, critical-shortage subject areas <span class="cite">(source: MSDE, teach.maryland.gov, High-Needs Subjects, <a href="https://teach.maryland.gov/Pages/High-Needs-Subjects.aspx">https://teach.maryland.gov/Pages/High-Needs-Subjects.aspx</a>)</span>. That gap is playing out across a genuinely large system: Maryland runs &quot;over 1,400 public schools&quot; across its 24 local education agencies <span class="cite">(source: MSDE, About the Maryland State Department of Education, <a href="https://www.marylandpublicschools.org/about/Pages/default.aspx">https://www.marylandpublicschools.org/about/Pages/default.aspx</a>)</span>, which means even a category-specific vacancy rate translates into a large absolute number of classrooms and caseloads waiting on a qualified hire.</p>
<h2 id="clearances-maryland-requires-before-anyone-works-in-a-school">Clearances Maryland requires before anyone works in a school</h2>
<p>Maryland&#39;s background-screening requirements run through the Education Article of the Annotated Code of Maryland. §6-113 bars a county board from &quot;knowingly hir[ing] or retain[ing]&quot; any individual convicted of specified sex offenses, child sexual abuse, or a crime of violence, and extends the same bar to contractor and subcontractor employees with &quot;direct, unsupervised, and uncontrolled access to children&quot; <span class="cite">(source: Md. Code, Education §6-113, <a href="https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113">https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&amp;section=6-113</a>)</span>. §6-113.2 adds an employment-history review requirement: applicants must supply contact information for their current employer and &quot;all former employers... in which the applicant was employed in a position involving direct contact with minors within the previous 10 years,&quot; sign a records-release consent, and disclose in writing any prior investigation or discipline for child sexual abuse or misconduct — the hiring entity must then contact those employers directly <span class="cite">(source: Md. Code, Education §6-113.2, <a href="https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113.2">https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&amp;section=6-113.2</a>)</span>. MSDE has published its own implementing guidance on this exact statute, confirming the department&#39;s role in administering it <span class="cite">(source: MSDE Guidance for Md. Code, Educ. §6-113.2, Feb. 22, 2024)</span>. A companion provision, §6-113.1, requires annual training for all school employees on the &quot;prevention, identification, and reporting of child sexual abuse,&quot; alongside school-level prevention policies and facility assessments <span class="cite">(source: Md. Code, Education §6-113.1, <a href="https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113.1">https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&amp;section=6-113.1</a>)</span>. Educator licensure itself — including the background-screening step built into certification — is governed under COMAR Title 13A, Subtitle 12 (Educator Licensure) <span class="cite">(source: <a href="https://regs.maryland.gov/us/md/exec/comar/13A.12/index.full.html">https://regs.maryland.gov/us/md/exec/comar/13A.12/index.full.html</a>)</span>.</p>
<p>FocusedEDU completes each Maryland candidate&#39;s background clearance and employment-history review, plus role-specific certification verification, before that candidate is ever shortlisted to an LEA .</p>
<h2 id="how-maryland39s-lea-structure-works-no-intermediate-layer">How Maryland&#39;s LEA structure works — no intermediate layer</h2>
<p>Maryland has a flatter structure than Pennsylvania or New York: there is no Intermediate Unit or BOCES-style regional layer. MSDE states directly that Maryland has &quot;over 1,400 public schools, 24 local education agencies... serving all of the state&#39;s 23 counties plus Baltimore City&quot; <span class="cite">(source: MSDE, About the Maryland State Department of Education, <a href="https://www.marylandpublicschools.org/about/Pages/default.aspx">https://www.marylandpublicschools.org/about/Pages/default.aspx</a>)</span>. Each of the 23 counties plus Baltimore City operates its own local board of education, functioning as that region&#39;s LEA, reporting directly to MSDE. For a staffing partner, that means there&#39;s no regional service agency standing between a district&#39;s special-education office and the state — every LEA owns its own compliance and hiring pipeline directly.</p>
<h2 id="charter-networks-staffing-in-maryland">Charter networks staffing in Maryland</h2>
<p>Maryland had 48 public charter schools serving 23,974 students across six LEAs as of the 2022-23 school year, concentrated in Baltimore City (31 schools) and Prince George&#39;s County (9 schools) <span class="cite">(source: MSDE, Maryland&#39;s Public Charter Schools legislative report, Dec. 2023, <a href="https://marylandpublicschools.org/programs/Documents/Charter-Schools/ReportsData/MDCharterSchools2023.pdf">https://marylandpublicschools.org/programs/Documents/Charter-Schools/ReportsData/MDCharterSchools2023.pdf</a>)</span>. Active operators include:</p>
<ul>
<li><strong>KIPP Baltimore</strong>, running KIPP Harmony Academy (PreK-5) and KIPP Ujima Village Academy (6-8) on a shared West Baltimore campus, serving roughly 1,400 students <span class="cite">(source: <a href="https://kippbaltimore.org/">https://kippbaltimore.org/</a>)</span>.</li>
<li><strong>Monarch Academy</strong>, a network of tuition-free public charter and contract schools across Annapolis, Glen Burnie, and Laurel <span class="cite">(source: <a href="https://monarchacademy.org/">https://monarchacademy.org/</a>)</span>.</li>
<li><strong>City Neighbors Charter School</strong>, a K-8 school in Baltimore <span class="cite">(source: <a href="https://cityneighborscharterschool.org/">https://cityneighborscharterschool.org/</a>)</span>.</li>
<li><strong>Wolfe Street Academy</strong>, a PreK-5 school in southeast Baltimore operated by the Baltimore Curriculum Project since 2007 <span class="cite">(source: <a href="https://www.wolfestreetacademy.org/">https://www.wolfestreetacademy.org/</a>)</span>.</li>
<li><strong>Green Street Academy</strong>, serving grades 6-12 in West Baltimore <span class="cite">(source: <a href="https://greenstreetacademy.org/">https://greenstreetacademy.org/</a>)</span>.</li>
<li><strong>College Park Academy</strong>, &quot;a Prince George&#39;s County public charter school for students grades 6-12&quot; <span class="cite">(source: <a href="https://www.collegeparkacademy.org/">https://www.collegeparkacademy.org/</a>)</span>.</li>
</ul>
<h2 id="what-focusededu-does-in-maryland">What FocusedEDU does in Maryland</h2>
<p>FocusedEDU works with Maryland&#39;s local education agencies and charter schools — charter networks are our highest priority — to staff special-education teachers, general-education teachers, paraprofessionals, school nurses (RN/LPN), SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes . We source through outbound recruiting of passive candidates rather than waiting on inbound applicants, specialize in the hard-to-fill special-education roles that are lagging Maryland&#39;s broader vacancy recovery, and complete Maryland&#39;s §6-113.2 employment-history review and certification verification before a candidate is ever shortlisted . We work as a long-term staffing partner, not a single-vacancy vendor .</p>
`,
    faqs: [
      { q: "What background screening does Maryland require before someone can work in a school?", a: "A criminal-history bar under §6-113, plus an employment-history review under §6-113.2 covering the applicant's current employer and every former employer with direct-minor-contact roles over the prior 10 years (source: Md. Code, Education §§6-113, 6-113.2). FocusedEDU completes both for every Maryland candidate before presenting them to an LEA ." },
      { q: "Is Maryland's special-education shortage actually improving?", a: "Statewide teacher vacancies overall fell 45.3% in SY2025-26, but special-education vacancies fell only 21.4% over the same period — the smallest improvement of any category MSDE reported, meaning special education remains the hardest role to fill even as the broader shortage eases (source: MSDE, Teacher Workforce Update, Dec. 9, 2025)." },
      { q: "Does Maryland have Intermediate Units or a regional staffing layer like other states?", a: "No — Maryland runs a flat structure: MSDE at the state level and 24 local education agencies (23 counties plus Baltimore City), each fully responsible for its own special-education staffing and compliance (source: MSDE, About MSDE)." },
      { q: "Does FocusedEDU work with Maryland's charter schools?", a: "Yes — charter networks are our highest-priority partner segment . Maryland's 48 public charter schools are concentrated in Baltimore City and Prince George's County (source: MSDE, Maryland's Public Charter Schools report, Dec. 2023), both core parts of our Maryland market." },
      { q: "What should a Maryland LEA or charter school look for in a staffing partner?", a: "Given how much slower special-education vacancies are closing compared to general education, the two things that matter most are speed-to-compliant-hire and specialization in the roles actually sitting open — an outbound-recruiting model built specifically for hard-to-fill special-education and related-service roles, with a candidate's background review and certification already complete before your team ever sees a resume ." },
    ],
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
      { label: "New Jersey Education Staffing", slug: "new-jersey-education-staffing" },
    ],
  },
  {
    slug: "substitute-teacher-staffing",
    eyebrow: "Education staffing",
    h1: "Substitute Teacher Staffing for K-12 Schools",
    metaTitle: "Substitute Teacher Staffing for K-12 Schools",
    metaDescription:
      "Day-to-day and long-term substitute teachers with weekly Friday pay and a shift app — the model behind a 95% daily fill rate at Odyssey Charter.",
    hero: "Day-to-day and long-term substitutes who actually show up: weekly Friday pay, a mobile app instead of a 5 a.m. phone chain, and a 95% daily fill rate at Odyssey Public Charter School — 40% better than the provider before us.",
    photo: PHOTOS[2],
    roles: [
      "Day-to-day substitute teachers",
      "Long-term substitute teachers",
      "Building substitutes",
      "Substitute paraprofessionals",
      "Leave-coverage substitutes",
      "Emergency daily coverage",
    ],
    stats: [
      { value: "95%", label: "Day-to-day substitute fill rate at Odyssey Public Charter School" },
      { value: "+40%", label: "Improvement over the school's previous staffing provider" },
      { value: "1,000+", label: "K-8 students at the Wilmington, DE school where that rate holds" },
      { value: "$0", label: "Fee to hire a long-term sub as your permanent teacher" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your absence patterns, buildings, bell schedules, and substitute requirements — day-to-day volume, standing long-term leaves, and what your current fill rate actually is. No cost, no obligation.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We build a substitute pool against your buildings specifically. Every sub is interviewed by us, cleared, reference-checked with prior schools, and screened for classroom management before their first assignment.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "For long-term and building-sub roles, your principals interview fully credentialed candidates and make the call. For daily coverage, only subs who have passed the full screen can see your shifts in the app.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We monitor fill rates, rotate out subs your buildings flag, and stay involved for the life of the engagement. Hire any long-term sub permanently at no conversion fee.",
      },
    ],
    verify: [
      "Full criminal background check",
      "PA Act 34 criminal history clearance (or the equivalent in DE, NJ, and MD)",
      "PA Act 151 child abuse clearance (or state equivalent)",
      "PA Act 114 FBI fingerprinting (or state equivalent)",
      "Substitute certification or permit verified for the state and role",
      "TB test and vaccination documentation",
      "Reference checks with prior schools, including a morning-of reliability history",
      "Classroom-management skills screening before the first assignment",
    ],
    sections: [
      {
        heading: "What substitute coverage actually involves",
        body: "A day-to-day substitute walks into an unfamiliar building before first bell, finds the classroom, decodes a lesson plan of highly variable quality, and holds a room of students who registered within ninety seconds that a stranger is in charge. The job is executed in real time with no prep period and no relationships to lean on: take accurate attendance, keep the lesson moving, follow the behavior plans and health notes that matter legally, and leave a note the returning teacher can actually use. A long-term substitute is a different job wearing the same title — covering a parental or medical leave for weeks or months, they teach the curriculum rather than supervise it, grade student work, communicate with parents, sit in team meetings, and for special education assignments, keep IEP services and data collection running. One is coverage; the other is a teacher of record in everything but the payroll code.\n\nMost schools do not have a substitute problem so much as a morning problem. The teacher calls out at 5:45. A coordinator starts down a call list, and most of those calls go to voicemail because the reliable subs committed to other schools the night before. By 7:15 the absence is unfilled, and the cost cascades through the building: teachers lose their prep periods to cover, classes get split across other rooms, and paraprofessionals get pulled off the IEP-mandated assignments they are legally supposed to be on. The absence was one person; the disruption is the whole floor.\n\nThat is why fill rate is the only substitute metric that matters, and why it has to be measured honestly — as a percentage of absences actually covered, every day, including the Fridays and the days after holidays when the system is under real load.",
      },
      {
        heading: "What separates a real substitute from a warm body",
        body: "The warm body takes attendance, plays the video, and surrenders the room to whatever happens next. The teacher returns to a day of lost instruction and a behavior mess that takes another day to clean up — coverage on paper, damage in practice.\n\nA real substitute reads the lesson plan before the students arrive and asks the front office what the plan does not say. They run the room on their own authority instead of sending a stream of students to the office. They follow the behavior plans and accommodations in the sub folder because they know those documents are not suggestions. They keep the special education student's aide assignment intact instead of treating every adult as interchangeable. And they leave a specific, usable note — who did the work, what got skipped, what happened with the student the plan warned about.\n\nReliability compounds. Students test a rotating stranger every single time; a substitute who returns to the same building learns names, routines, and which teacher leaves real plans — and the building learns to trust them back. A stable pool of known subs is worth more than a deep pool of unknown ones, which is why we build ours around retention, not volume.",
      },
      {
        heading: "What we screen for in substitute candidates",
        body: "Our substitute screen probes the parts of the job that predict whether an assignment holds: classroom management under ambiguity — what the candidate actually did the last time a room started to slide, not what a handbook says; a morning-of reliability record we verify by calling prior schools, because a sub who accepts and no-shows is worse than an unfilled absence; honest comfort across grade bands, since a strong middle-school sub can be a weak kindergarten one; and judgment about when a situation belongs to the office and when it belongs to the adult in the room. Candidates open to long-term assignments are screened further, on curriculum delivery and parent communication, because a leave coverage that fails in week three costs a semester.\n\nThe screen was built by our founder, Robert Flom, a former K-12 teacher who worked with substitutes from the other side of the plan book and knows exactly what a bad morning looks like.",
      },
      {
        heading: "Why our substitute pool shows up: weekly pay and a shift app",
        body: "Substitute staffing fails at the level of logistics, so that is where we built. Our substitutes are paid weekly, every Friday, by direct deposit or Cash App — not on a month-delayed cycle that pushes them toward whichever agency pays fastest. And they pick up and swap shifts through a mobile app, so open assignments in your buildings are visible to the whole pool the moment they exist, instead of traveling one voicemail at a time down a 5 a.m. phone chain. Fast pay keeps subs in the pool; the app gets them matched to your absence before first bell.\n\nThe result is measurable. At Odyssey Public Charter School in Wilmington, Delaware — a school serving 1,000+ K-8 students drawn from five districts — that model holds a 95% day-to-day substitute fill rate, a 40% improvement over the school's previous provider. Across the engagement we have filled 120+ roles at that one school. The full case study is at /case-studies.",
      },
      {
        heading: "One client per region, and subs you can keep",
        body: "The structural reason substitute pools feel shallow is that agencies rent the same pool to every school in the area — on a flu-season morning, your absence competes with every other client's. FSG works with one client per region: sign with us for your area and the substitute pool we build there serves your buildings alone. We will not supply a competing school or district with the subs recruited for you.\n\nEvery placement is also temp-to-perm at no cost. A long-term sub who proves out over a semester can become your permanent teacher with no conversion fee and no buyout — which matters, because a leave coverage is the best teaching interview a school ever gets. We have staffed K-12 schools this way for 12 years from Wayne, Pennsylvania, under a screening standard set by a founder who taught in the classroom himself.",
      },
    ],
    faqs: [
      {
        q: "What fill rate can we actually expect?",
        a: "We will not promise a universal number, because fill rates depend on your absence volume and region. What we can point to: at Odyssey Public Charter School, a 1,000+ student K-8 school, our model sustains a 95% day-to-day fill rate — a 40% improvement over the previous provider — and we report the rate to you on a regular cadence rather than quoting it once in a sales meeting.",
      },
      {
        q: "How do your substitutes get paid?",
        a: "Weekly, every Friday, by direct deposit or Cash App. We are specific about this because pay speed is the main reason substitute pools go stale — subs work for the agency that pays reliably, and a paid, active pool is what keeps your fill rate high in January, not just September.",
      },
      {
        q: "How do subs find out about our open shifts?",
        a: "Through a mobile app where they pick up and swap shifts directly. Your morning absence is visible to the entire vetted pool the moment it posts, instead of moving one phone call at a time down a call list while first period gets closer.",
      },
      {
        q: "Do you place long-term substitutes as well as daily subs?",
        a: "Yes, both. Daily coverage runs on the app-based pool model. Long-term subs — leave coverages, semester vacancies — run through our vetted-shortlist process, because that job is closer to teacher of record: your principal interviews the candidates and makes the call.",
      },
      {
        q: "What does it cost to hire one of your subs permanently?",
        a: "Nothing extra. Every placement is temp-to-perm at no cost — if a long-term sub earns a permanent contract in your building, there is no conversion fee and no buyout. Engagement pricing overall is covered openly on the free 30-minute discovery call.",
      },
      {
        q: "Will your sub pool also serve the school down the road?",
        a: "No. We work with one client per region, so the substitute pool we recruit in your area serves only your buildings. Your flu-season morning never competes with a neighboring client's, because there isn't one.",
      },
      {
        q: "What qualifications does a substitute teacher need?",
        a: "It varies by state. In Pennsylvania, substitutes must hold a PA teaching certificate or a district-sponsored emergency permit from PDE, and everyone needs the Act 34, Act 151, and Act 114 clearances; neighboring states run their own substitute-permit and clearance regimes. We verify the specific credential for the state and role before a sub ever sees your shifts.",
      },
    ],
    quote: {
      text: "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
      name: "Zavia Herring",
      role: "Director of HR, Renaissance Academy Charter School",
    },
    related: [
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
      { label: "Delaware Education Staffing", slug: "delaware-education-staffing" },
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
    ],
  },
  {
    slug: "delaware-education-staffing",
    eyebrow: "Education staffing · Delaware",
    h1: "Delaware Education Staffing",
    metaTitle: "Delaware Education Staffing Agency",
    metaDescription:
      "Our strongest record is in Delaware: 120+ roles filled at Odyssey Charter in Wilmington, a 95% substitute fill rate, and Christina School District.",
    hero: "Our strongest record on the map is in Delaware: 120+ roles across 13+ role types at Odyssey Public Charter School in Wilmington, a 95% daily substitute fill rate, and Christina School District on the client list.",
    photo: PHOTOS[3],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "Day-to-day and long-term substitutes",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
      "Education support staff",
    ],
    stats: [
      { value: "120+", label: "Roles filled at Odyssey Public Charter School in Wilmington" },
      { value: "13+", label: "Distinct role types staffed at that one Delaware school" },
      { value: "95%", label: "Day-to-day substitute fill rate there — +40% over the previous provider" },
      { value: "12 yrs", label: "Staffing schools across the PA/DE/NJ/MD region" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your Delaware openings, buildings, and certification requirements. Wayne, PA is our headquarters — your school is a drive down I-95, not a dot on a national territory map.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit against your roles, interview every candidate ourselves, and complete Delaware's state-required background checks and child-protection clearances, certification verification, TB tests, and references.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your administrators interview fully credentialed candidates and make the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement, and any temp converts to your permanent hire at no fee.",
      },
    ],
    verify: [
      "Delaware's state-required background checks and child-protection clearances",
      "Full criminal background check",
      "Delaware certification verified for teaching and licensed roles",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    sections: [
      {
        heading: "What staffing a Delaware school actually involves",
        body: "Delaware gates school employment the way its neighbors do: state-required background checks and child-protection clearances must be complete before anyone works around students, certificated roles need Delaware Department of Education certification matched to the position, and licensed clinicians — SLPs, OTs, PTs, school psychologists — need Delaware licensure in their discipline on top of it. The file is several documents deep per person, and assembling it after the vacancy opens is how schools lose a marking period.\n\nThe state's size shapes everything about its talent market. Delaware is three counties producing a small number of education graduates each year, and it sits between two much larger job markets — Philadelphia to the north, Baltimore and Washington to the south — that recruit from the same pool. A certified special education teacher in New Castle County can add commuting options in two other states without moving. The pool is not just tight; it leaks across state lines in both directions.\n\nDelaware is also one of the most charter-dense landscapes in the region, with Wilmington at the center of it. Charters recruit against traditional districts and against each other, often without a district HR apparatus behind them, and many draw students from multiple districts at once — which multiplies the transportation, para, and support roles they have to fill. The categories that run shortest are the familiar ones, sharpened by the small pool: special education certifications, related-services clinicians, and day-to-day substitutes.",
      },
      {
        heading: "What we screen for in Delaware candidates",
        body: "Clearances get a Delaware candidate to the starting line; the screen decides who reaches your shortlist. It is matched to the role: special education teachers on IEP writing, meeting experience, and behavior-plan implementation; paraprofessionals on de-escalation, personal-care comfort, and IEP data collection; substitutes on classroom management under ambiguity and a morning-of reliability record we verify with prior schools; clinicians on Delaware licensure and multi-building caseload management. Certification is verified with the state for the specific role, not read off the résumé.\n\nThe methodology was built by our founder, Robert Flom, a former K-12 teacher — which is why the interview sounds like a case review of the job, not a personality screen.",
      },
      {
        heading: "The record is in Delaware: what happened at Odyssey",
        body: "Odyssey Public Charter School in Wilmington serves 1,000+ K-8 students drawn from five districts. The school had staffing agencies under contract, and those agencies could not fill the openings. FSG stepped in, and the engagement became the strongest attested record we hold anywhere: 120+ roles filled across 13+ distinct role types, from bus drivers to certified teachers, with day-to-day substitute coverage sustained at a 95% fill rate — a 40% improvement over the previous provider. The full case study, in the school's own words, is at /case-studies.\n\nOdyssey is not our only Delaware proof. Christina School District — one of the state's largest — is a client, and Delaware sits inside the four-state footprint we have staffed for 12 years from our headquarters in Wayne, Pennsylvania, close enough that a site visit is a short drive down I-95, not a flight.",
      },
      {
        heading: "Delaware clearances, completed before the interview",
        body: "Our automated credentialing system completes Delaware's state-required background checks and child-protection clearances up front, verifies certification with the state for the specific role, and tracks every document — TB tests and vaccination records included — flagging anything that approaches expiration. Files stay audit-ready for the life of the placement, which matters to charter boards and district compliance offices alike.\n\nThat system is the mechanism behind the speed: typical time-to-hire runs roughly half the norm because candidates reach your interview with complete files, and in past engagements we have placed certified special education teachers within two weeks.",
      },
      {
        heading: "One Delaware client per region, and subs who show up",
        body: "In a state this small, the agency staffing your school is almost certainly shopping the same candidates to the school competing with you for the same students. FSG removed that conflict: one client per region. Sign with us for your part of Delaware and we will not supply a competing school or district — the teachers, paras, and clinicians we recruit in your area are presented only to you.\n\nDaily coverage runs on the model proven at Odyssey: substitutes paid weekly on Fridays by direct deposit or Cash App, picking up and swapping shifts through a mobile app instead of a morning phone chain. And every placement is temp-to-perm at no cost — evaluate a professional in your building, then hire them permanently with no conversion fee. We also run school-supply and backpack drives for partner schools, because we staff the communities we work in, not just the payrolls.",
      },
    ],
    richHtml: `<p>Delaware is a small state with an outsized compliance burden per district: 19 traditional public school districts and 23 independently authorized charter schools are all trying to staff the same narrow pool of certified special-education teachers, SLPs, OTs, PTs, and school psychologists. FocusedEDU is a specialized K-12 staffing partner working with Delaware districts and charter schools to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest priority . Below: what Delaware&#39;s own oversight bodies say about the state of special-education staffing, what the state requires before anyone works in a school, how districts and charters are structured, and which charter schools are building programs today.</p>
<h2 id="the-special-education-staffing-landscape-in-delaware">The special-education staffing landscape in Delaware</h2>
<p>Delaware&#39;s Office of the State Auditor put a hard number on the compliance risk in a July 2025 report, finding that as of March 5, 2025, &quot;453 Delaware public school teachers, or approximately 4% of the Delaware public school teacher population, were unlicensed&quot; <span class="cite">(source: Delaware Office of the State Auditor, &quot;Certification and Licensure of Delaware Special Education Teachers,&quot; July 3, 2025, <a href="https://auditor.delaware.gov/2025/07/03/certification-and-licensure-of-delaware-special-education-teachers">https://auditor.delaware.gov/2025/07/03/certification-and-licensure-of-delaware-special-education-teachers</a>)</span>. Special education was singled out specifically: the Auditor&#39;s office identified &quot;62 educators who hold a Special Education certificate&quot; with a lapse in licensing, 47 of whom were actively &quot;employed by school districts, charter schools, and alternative schools&quot; while lapsed — collectively totaling roughly 26,289 calendar days worked without a valid credential on file <span class="cite">(source: same report)</span>. As of June 25, 2025, the same report found 9 educators statewide without a current teaching license, 4 of them actively teaching special education classes, and 12 educators serving in special-education roles without the correct certificate for that specific role <span class="cite">(source: same report)</span>.</p>
<p>Statewide vacancy pressure has been easing but remains real: Delaware&#39;s Department of Education reported 466 open teaching positions as of August 15, 2025, a 52% decline from the prior hiring period, according to state reporting <span class="cite">(source: WDEL News, &quot;Delaware reports progress but needs more teachers,&quot; Sept. 15, 2025, <a href="https://www.wdel.com/news/delaware-reports-progress-but-needs-more-teachers/article_184c9ecd-1567-4e31-a601-81efaf4b0968.html">https://www.wdel.com/news/delaware-reports-progress-but-needs-more-teachers/article_184c9ecd-1567-4e31-a601-81efaf4b0968.html</a>)</span>. Special-education caseloads are concentrated in a handful of districts: Delaware&#39;s General Assembly reports that &quot;the school districts with the highest number of children in special education [as of Spring 2023] were Christina (1683), Red Clay (1567), and Appoquinimink (1255),&quot; and that &quot;two school districts, Lake Forest at 11.29% and Christina at 10.72%, had more than 10% of children in special education&quot; <span class="cite">(source: Delaware General Assembly, Office of the Controller General, &quot;Delaware School Districts and Public Schools Statistics 2022-2023,&quot; <a href="https://legis.delaware.gov/docs/default-source/publications/researchreports/delawareschooldistrictsandpublicschoolsstatistics.pdf">https://legis.delaware.gov/docs/default-source/publications/researchreports/delawareschooldistrictsandpublicschoolsstatistics.pdf</a>)</span>.</p>
<h2 id="clearances-delaware-requires-before-anyone-works-in-a-school">Clearances Delaware requires before anyone works in a school</h2>
<p>Delaware&#39;s operative regulation is 14 DE Admin. Code § 745, &quot;Criminal Background Check for Public School Related Employment,&quot; which states plainly: &quot;This regulation shall apply to all individuals seeking Public School related employment in a Delaware Public School. A Criminal Background Check shall be completed for Employee, Contractors or Volunteers of a Child Serving Entity. It shall consist of a fingerprinted Delaware and national background check completed by the State Bureau of Identification (SBI) and the Federal Bureau of Investigation (FBI)... Additionally, a Child Protection Registry Check shall be completed by the Department of Services for Children, Youth and Their Families (DSCYF)&quot; <a class="cite" href="https://archive.regulations.delaware.gov/AdminCode/title14/700/745.pdf" rel="noopener nofollow" target="_blank">14 DE Admin. Code § 745</a>. The requirement covers any employee, contractor, volunteer, or extra-duty personnel with direct access to students, at any Delaware public school, charter school, or the Department of Education itself, with suitability determinations governed under 31 Del. C. §309 <span class="cite">(source: same regulation)</span>. A companion rule, 14 DE Admin. Code § 746, governs background checks specifically for student-teaching placements.</p>
<p>FocusedEDU builds each Delaware candidate&#39;s SBI/FBI and Child Protection Registry clearance, plus role-specific certification verification, before that candidate is ever shortlisted — directly against the exact gap the state auditor flagged .</p>
<h2 id="how-delaware-structures-districts-and-charter-schools">How Delaware structures districts and charter schools</h2>
<p>Delaware runs 16 geographic school districts plus 3 vocational-technical districts — 19 traditional public school districts in total — and, separately, 23 charter schools, each of which the state&#39;s own auditor describes as &quot;also known as Local Education Agencies (LEAs)&quot; <span class="cite">(source: Delaware Office of the State Auditor, &quot;Charter Schools Unit Count FY22 and FY23,&quot; Sept. 16, 2025, <a href="https://auditor.delaware.gov/2025/09/16/charter-schools-unit-count-fy22-and-fy23/">https://auditor.delaware.gov/2025/09/16/charter-schools-unit-count-fy22-and-fy23/</a>)</span>. Charter applications go to a local school board or to the Department of Education as the &quot;approving authority,&quot; which forms a Charter School Accountability Committee within 5 days of receiving an application and must rule at a public meeting within 90 working days <span class="cite">(source: Delaware Code, Title 14, Chapter 5, Charter Schools, <a href="https://delcode.delaware.gov/title14/c005/index.html">https://delcode.delaware.gov/title14/c005/index.html</a>)</span>. Because each charter operates as its own LEA, each one carries its own direct responsibility for IEP compliance and related-service delivery — there&#39;s no larger district absorbing that obligation on a charter&#39;s behalf.</p>
<h2 id="charter-schools-staffing-in-delaware">Charter schools staffing in Delaware</h2>
<p>Delaware&#39;s charter sector includes several schools running dedicated special-education programming:</p>
<ul>
<li><strong>Odyssey Charter School</strong> (Wilmington) — a K-12 Greek-immersion school FocusedEDU has staffed directly; see our case study: <a href="https://www.focusedu-staffing.com/case-studies/odyssey-charter-school">Odyssey Public Charter School — Case Study</a>.</li>
<li><strong>Newark Charter School</strong> operates K-12 in Newark <span class="cite">(source: <a href="https://newarkcharterschool.org/">https://newarkcharterschool.org/</a>)</span>.</li>
<li><strong>MOT Charter School</strong> runs K-12 across two Middletown campuses <span class="cite">(source: <a href="https://www.motcharter.com/">https://www.motcharter.com/</a>)</span>.</li>
<li><strong>Sussex Academy</strong> runs K-12 across two Georgetown campuses <span class="cite">(source: <a href="https://www.sussexacademy.org/">https://www.sussexacademy.org/</a>)</span>.</li>
<li><strong>Providence Creek Academy</strong> (Clayton) publishes a dedicated special-education page describing full inclusion plus two tiers of specialized-setting support, along with animal therapy, art therapy, PT/OT, and speech-language services, delivered by &quot;a Special Education Team [that] works closely with general education teachers&quot; <span class="cite">(source: <a href="https://pcasaints.org/Special-Education">https://pcasaints.org/Special-Education</a>)</span>.</li>
<li><strong>Freire Charter School Wilmington</strong> (grades 8-12) states directly that it will &quot;serve any and all students who receive a seat through our lottery and choose to enroll, including students who have special needs and IEPs,&quot; running push-in and pull-out instruction under a tiered RtII model <span class="cite">(source: <a href="https://www.freirewilmington.org/academics/student-services/">https://www.freirewilmington.org/academics/student-services/</a>)</span>.</li>
</ul>
<h2 id="what-focusededu-does-in-delaware">What FocusedEDU does in Delaware</h2>
<p>FocusedEDU works with Delaware&#39;s traditional districts and charter schools — charter networks are our highest priority — to staff special-education teachers, general-education teachers, paraprofessionals, school nurses (RN/LPN), SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes . We source through outbound recruiting of passive candidates, specialize in the hard-to-fill special-education and related-service roles most exposed to the licensing-lapse risk Delaware&#39;s own auditor has documented, and complete SBI/FBI clearance and certification verification before a candidate is ever shortlisted . We operate as a long-term staffing partner, not a single-placement vendor .</p>
`,
    faqs: [
      { q: "What background check does Delaware require before someone can work in a school?", a: "A fingerprinted Delaware and national background check through the State Bureau of Identification and FBI, plus a Child Protection Registry check through DSCYF, under 14 DE Admin. Code § 745 (source: https://archive.regulations.delaware.gov/AdminCode/title14/700/745.pdf). FocusedEDU completes this for every Delaware candidate before presenting them to a district or charter ." },
      { q: "How serious is Delaware's special-education licensing gap, really?", a: "The state's own Auditor found 62 special-education-certified educators with lapsed licenses, 47 of them actively working in districts, charter, and alternative schools while lapsed, for a combined 26,289 calendar days (source: Delaware Office of the State Auditor, July 3, 2025). That's the exact exposure a completed compliance file is built to close before a candidate ever starts ." },
      { q: "How is a Delaware charter school different from a traditional district for staffing purposes?", a: "Each Delaware charter school is its own Local Education Agency (source: Delaware Office of the State Auditor, Charter Schools Unit Count FY22 and FY23), meaning it carries full, direct responsibility for special-education compliance rather than sharing that obligation with a larger district office." },
      { q: "Does FocusedEDU work with Delaware's charter schools?", a: "Yes — charter networks are our highest-priority partner segment . We've staffed Delaware charter schools directly; see our case study, [Odyssey Public Charter School — Case Study](https://www.focusedu-staffing.com/case-studies/odyssey-charter-school)." },
      { q: "How fast can a specialized role actually get filled in Delaware?", a: "Because clearances and certification verification are completed before a candidate is shortlisted rather than after, our typical timeline runs 2-4 weeks against an industry norm closer to 6-8 weeks  — the difference between a district covering a vacancy internally for a month or two versus one week." },
    ],
    quote: {
      text: "I would highly recommend Focused Staffing Group to any school or organization seeking reliable, professional, and efficient staffing services.",
      name: "Dr. Heather Brooks",
      role: "Principal, Serviam Girls Academy (New Castle, DE)",
    },
    related: [
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
      { label: "School District Staffing Vendor", slug: "school-district-staffing-vendor" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
    ],
  },
  {
    slug: "new-york-education-staffing",
    eyebrow: "Education staffing · New York",
    h1: "Special Education Staffing for New York Districts, BOCES, and Charter Networks",
    metaTitle: "Special Education Staffing in New York | FocusedEDU",
    metaDescription: "FocusedEDU staffs New York districts, BOCES, and charter networks with special-ed teachers, paraprofessionals, SLPs, OTs, PTs, and school psychologists.",
    hero: "FocusedEDU staffs New York districts, BOCES, and charter networks with special-ed teachers, paraprofessionals, SLPs, OTs, PTs, and school psychologists.",
    photo: PHOTOS[3],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "Day-to-day and long-term substitutes",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
      "Education support staff",
    ],
    sections: [],
    richHtml: `<p>New York has no live special-education staffing page today despite being a core market — this page fills that gap. Across 697 school districts, 37 BOCES, and a dense, fast-growing charter sector concentrated in New York City, the same certified specialists are in short supply everywhere at once. FocusedEDU is a specialized K-12 staffing partner working with New York districts, BOCES, and charter networks to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest priority . Here&#39;s what the state&#39;s own data shows, what New York requires before anyone works in a school, how BOCES fits into staffing, and which charter networks are active today.</p>
<h2 id="the-special-education-staffing-landscape-in-new-york">The special-education staffing landscape in New York</h2>
<p>Special education is one of New York&#39;s officially designated statewide teacher-shortage subject areas for 2025-26, alongside Career and Technical Education, Language Arts, Library/Media Specialist, Mathematics, and Sciences <span class="cite">(source: NYSED, Procurement #254: Teachers of Tomorrow / TOTSMBE 2026-2030, <a href="https://www.nysed.gov/funding-opportunities/procurement-254-teachers-tomorrow-totsmbe-2026-2030">https://www.nysed.gov/funding-opportunities/procurement-254-teachers-tomorrow-totsmbe-2026-2030</a>)</span>. The scale of that shortage shows up clearly in federal research: a U.S. Department of Education study built on NYSED&#39;s own certification data found that &quot;new teachers earned certificates most frequently in the shortage certification area of special education (40 percent, which was substantially higher than all other shortage certification areas),&quot; and concluded that &quot;New York State has faced geographically widespread and persistent teacher shortages&quot; in special education specifically <span class="cite">(source: US Dept of Education IES, REL Northeast &amp; Islands, &quot;Teacher Shortages in New York State,&quot; REL 2022-109, <a href="https://ies.ed.gov/ncee/rel/regions/northeast/pdf/REL_2022109.pdf">https://ies.ed.gov/ncee/rel/regions/northeast/pdf/REL_2022109.pdf</a>)</span>. That pressure sits on top of real scale: New York enrolled 2,421,491 K-12 students statewide in 2024-25, with 480,579 of them — 20% of total enrollment — identified as students with disabilities <span class="cite">(source: NYSED Data Site, Enrollment Data, <a href="https://data.nysed.gov/enrollment.php?year=2025&state=yes">https://data.nysed.gov/enrollment.php?year=2025&amp;state=yes</a>)</span>.</p>
<h2 id="clearances-new-york-requires-before-anyone-works-in-a-school">Clearances New York requires before anyone works in a school</h2>
<p>New York&#39;s fingerprinting and clearance requirement runs through the &quot;SAVE Law&quot; (Chapter 180 of the Laws of 2000), which amended NY Education Law §§305(30), 3004-b, 3004-c, and 3035, and created Part 87 of the Commissioner&#39;s Regulations. NYSED states directly: &quot;Pursuant to the SAVE Law... all individuals seeking employment in a school setting and all applicants for certification must undergo a fingerprint-supported criminal history background check&quot; <span class="cite">(source: NYSED, About OSPRA, <a href="https://www.nysed.gov/educator-integrity/about-ospra">https://www.nysed.gov/educator-integrity/about-ospra</a>)</span>. The requirement applies to any &quot;covered school&quot; — defined as &quot;a board of cooperative educational services, a charter school, a school district, or any nonpublic or private elementary or secondary school that elects to fingerprint and seek clearance for prospective employees from the department,&quot; with employment clearance issued once &quot;a covered school has submitted a request for employment clearance in TEACH,&quot; New York&#39;s statewide certification and clearance system <span class="cite">(source: NYSED, OSPRA 100, <a href="https://www.nysed.gov/sites/default/files/ospra100_0.pdf">https://www.nysed.gov/sites/default/files/ospra100_0.pdf</a>)</span>. New York City runs its own DOE fingerprinting process that feeds into the same NYSED clearance system <span class="cite">(source: NYSED, NYC Fingerprinting for School Employment, <a href="https://www.nysed.gov/educator-integrity/new-york-city-fingerprinting-school-employment">https://www.nysed.gov/educator-integrity/new-york-city-fingerprinting-school-employment</a>)</span>.</p>
<p>FocusedEDU runs every New York candidate through TEACH-based fingerprint clearance and certification verification before that candidate is ever shortlisted to a district, BOCES, or charter school .</p>
<h2 id="how-boces-fits-into-new-york-staffing">How BOCES fits into New York staffing</h2>
<p>New York organizes shared regional services through Boards of Cooperative Educational Services. NYSED states: &quot;There are currently 37 BOCES incorporating all but nine of the 697 school districts in New York State,&quot; created so that &quot;small rural school districts to combine their resources to provide services that otherwise would have been uneconomical, inefficient, or unavailable&quot; <span class="cite">(source: NYSED, BOCES : P12 : NYSED, <a href="http://www.p12.nysed.gov/mgtserv/boces/">http://www.p12.nysed.gov/mgtserv/boces/</a>)</span>. NYSED&#39;s own BOCES primer names special-education related services specifically as a core shared-service example, listing &quot;physical and occupational therapy for students with disabilities&quot; among the instructional programs BOCES commonly deliver on member districts&#39; behalf <span class="cite">(source: NYSED, BOCES : Primer, <a href="http://www.p12.nysed.gov/mgtserv/boces/primer.html">http://www.p12.nysed.gov/mgtserv/boces/primer.html</a>)</span>. For a smaller New York district that can&#39;t justify a full-time OT, PT, SLP, or school psychologist on its own payroll, the BOCES is frequently the entity actually contracting for — or delivering — that itinerant coverage, which is exactly the kind of multi-building need FocusedEDU&#39;s outbound-recruiting model is built to source for .</p>
<h2 id="charter-networks-staffing-in-new-york">Charter networks staffing in New York</h2>
<p>New York&#39;s charter sector is concentrated in New York City and has grown into one of the largest in the country — at minimum 239 schools are authorized through SUNY&#39;s Charter Schools Institute alone, enrolling more than 117,000 students in 2024-25 <span class="cite">(source: SUNY Charter Schools Institute, Fast Facts, <a href="https://www.newyorkcharters.org/data-reporting/fast-facts/">https://www.newyorkcharters.org/data-reporting/fast-facts/</a>)</span>. Active multi-site operators include:</p>
<ul>
<li><strong>Success Academy Charter Schools</strong>, the state&#39;s largest network, running 59 K-12 schools across the Bronx, Brooklyn, Harlem, Manhattan, and Queens, with a named special-education program (&quot;Sprint&quot;) covering Integrated Co-Teaching, speech therapy, OT, and Behavior Intervention Plans <span class="cite">(source: <a href="https://www.successacademies.org">https://www.successacademies.org</a>)</span>.</li>
<li><strong>KIPP NYC</strong>, operating 18 schools — 9 in the Bronx, 2 in Brooklyn, 7 in Manhattan — serving 9,400 students <span class="cite">(source: <a href="https://www.kippnyc.org">https://www.kippnyc.org</a>)</span>.</li>
<li><strong>Uncommon Schools</strong>, running 26 NYC schools concentrated in Brooklyn neighborhoods including Bed-Stuy, Brownsville, and Crown Heights <span class="cite">(source: <a href="https://www.uncommonschools.org">https://www.uncommonschools.org</a>)</span>.</li>
<li><strong>Achievement First</strong>, operating 23 schools across Brooklyn and Queens <span class="cite">(source: <a href="https://www.achievementfirst.org/new-york/">https://www.achievementfirst.org/new-york/</a>)</span>.</li>
<li><strong>Zeta Charter Schools</strong>, operating across the South Bronx, Manhattan&#39;s Inwood and Washington Heights, and Queens neighborhoods including Elmhurst and Flushing <span class="cite">(source: <a href="https://www.zetaschools.org">https://www.zetaschools.org</a>)</span>.</li>
<li><strong>Democracy Prep Public Schools</strong>, running 10 schools serving 3,500 students <span class="cite">(source: <a href="https://www.democracyprep.org">https://www.democracyprep.org</a>)</span>.</li>
</ul>
<h2 id="what-focusededu-does-in-new-york">What FocusedEDU does in New York</h2>
<p>FocusedEDU works with New York school districts, BOCES, and charter networks — charter networks are our highest priority — to staff special-education teachers, general-education teachers, paraprofessionals, school nurses (RN/LPN), SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes . We source through outbound recruiting of passive candidates, specialize in the special-education roles that account for 40% of all shortage-area certifications earned by new New York teachers <span class="cite">(source: REL 2022-109)</span>, and complete TEACH-based fingerprint clearance and certification verification before a candidate is ever shortlisted . We operate as a long-term staffing partner, not a single-vacancy vendor .</p>
`,
    faqs: [
      { q: "What clearance does New York require before someone can work in a school?", a: "A fingerprint-supported criminal history background check under the SAVE Law, processed through NYSED's TEACH system, required for every \"covered school\" — school districts, BOCES, charter schools, and participating nonpublic schools (source: NYSED, About OSPRA). FocusedEDU clears every New York candidate through TEACH before presenting them to a school ." },
      { q: "Do New York's BOCES use outside staffing partners for special education?", a: "BOCES exist specifically to deliver shared services — including related services like OT and PT — that individual districts can't efficiently staff alone (source: NYSED, BOCES Primer), which is the same itinerant, multi-building need FocusedEDU's related-service staffing is built to support ." },
      { q: "How large is New York's special-education teacher shortage, really?", a: "Federal research built on NYSED's own data found 40% of all new New York teachers who earned a shortage-area certification did so in special education — \"substantially higher than all other shortage certification areas\" (source: REL 2022-109), and special education remains an officially designated statewide shortage subject for 2025-26 (source: NYSED, Procurement #254)." },
      { q: "Does FocusedEDU work with New York City's charter networks?", a: "Yes — charter networks are our highest-priority partner segment . New York City is home to some of the country's largest multi-site charter operators, and our credentialing platform is built to clear New York candidates through the state's TEACH system efficiently across every campus a network operates." },
      { q: "What should a New York district or charter network look for in a staffing partner?", a: "Given how concentrated New York's shortage is in special education specifically, look for a partner that specializes in those roles rather than general substitute coverage, sources candidates through direct outbound recruiting rather than waiting on inbound applicants, and has a candidate's TEACH clearance and certification already verified before your team sees a resume ." },
    ],
    related: [
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
      { label: "School District Staffing Vendor", slug: "school-district-staffing-vendor" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
    ],
  },
  {
    slug: "philadelphia-education-staffing",
    eyebrow: "Education staffing · Philadelphia",
    h1: "Philadelphia Education Staffing",
    metaTitle: "Philadelphia Education Staffing Agency",
    metaDescription:
      "Philadelphia-area schools staffed from our Main Line headquarters — Act 34/151/114-cleared teachers, paras, and clinicians, one client per region.",
    hero: "An education staffing partner 30 minutes from your building: headquartered on the Main Line in Wayne, PA, staffing Philadelphia-area schools with Act 34, 151, and 114-cleared teachers, paras, and clinicians for 12 years.",
    photo: PHOTOS[0],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "1:1 aides",
      "Day-to-day and long-term substitutes",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
    ],
    stats: [
      { value: "30 min", label: "From our Wayne, PA headquarters to Philadelphia schools" },
      { value: "3", label: "PA-required clearances (Acts 34, 151, 114) tracked per candidate" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "12 yrs", label: "Staffing schools from the Main Line" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your openings, buildings, and PA certification requirements. We are 30 minutes away, so the follow-up can be a site visit, not a video call.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit Philadelphia-area candidates against your roles, interview each one, and complete Act 34, 151, and 114 clearances, certification verification, TB tests, and references.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your principals and directors interview fully cleared candidates and make the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement, and any temp converts to your permanent hire at no fee.",
      },
    ],
    verify: [
      "Act 34 Pennsylvania criminal history clearance",
      "Act 151 Pennsylvania child abuse clearance",
      "Act 114 FBI fingerprint-based background check",
      "PA certification verified for teaching and licensed roles",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    sections: [
      {
        heading: "What staffing a Philadelphia school actually involves",
        body: "Philadelphia is one of the most charter-dense cities in the country: a large district, dozens of charter operators, cyber charters, and private special education schools, all hiring from the same pool of certified educators at the same time of year. The pool looks deep — the region produces a steady stream of education graduates from its universities — but every one of those graduates fields multiple offers without extending their commute, so for any single school the market behaves like a shortage. A candidate who interviews with you on Tuesday has two other offers by Friday, and the school that moves slowest loses.\n\nBefore anyone starts, Pennsylvania's clearance regime applies in full: the Act 34 state criminal history check, the Act 151 child abuse clearance, and the Act 114 FBI fingerprint check — required for teachers, paras, substitutes, and support staff alike, and subject to the state's renewal cycle. Teaching roles need PDE certification matched to subject and grade band, and substitutes need a PA certificate or a district-sponsored emergency permit. Three clearances per person, assembled while the candidate is being courted by two other schools, is precisely where Philadelphia hires die.\n\nThe hardest seats to fill are the ones the city has the most of. Special education roles — certified SPED teachers, 1:1 paraprofessionals, personal care assistants — dominate vacancy lists across the district, the charters, and the private special education schools, and related-services clinicians are stretched across buildings everywhere. Those categories are the real test of a Philadelphia staffing partner.",
      },
      {
        heading: "What we screen for in Philadelphia candidates",
        body: "Every Philadelphia-area candidate passes a role-matched screen after the clearance file is complete. Special education teachers are probed on IEP writing and meeting experience, behavior-plan implementation, and the data-collection habits that survive an audit; paraprofessionals and personal care assistants on de-escalation, honest comfort with personal-care duties, and reliability history we verify with prior schools; substitutes on classroom management under ambiguity; clinicians on PA licensure and caseload management across buildings. PDE certification is verified with the state for the specific role.\n\nThe screen was designed by our founder, Robert Flom, a former K-12 teacher — so candidates are evaluated on how they operate inside a school building, not on how they interview.",
      },
      {
        heading: "Thirty minutes away, with clients across the metro",
        body: "FSG is headquartered at 175 Strafford Avenue in Wayne, Pennsylvania — on the Main Line, about 30 minutes from Philadelphia schools. That proximity is operational, not decorative: a placement issue gets an in-person visit, a discovery call can end with us walking your building, and the candidates we recruit actually live in the neighborhoods your students do.\n\nThe metro track record is specific and checkable. Chester Community Charter — one of the largest charter schools in Pennsylvania, in Delaware County — is a client. So is First PA. And The Delta School in Philadelphia is where David Weathington, its CEO, attested to the quality of the special education teachers, paraprofessionals, personal care assistants, and related service providers we placed; his words are on this page. We have staffed schools from Wayne for 12 years, under a vetting standard set by a founder who taught in K-12 classrooms himself.",
      },
      {
        heading: "Acts 34, 151, and 114, handled before you meet anyone",
        body: "Pennsylvania requires three clearances for anyone working in a school: the Act 34 Pennsylvania State Police criminal history check, the Act 151 child abuse clearance, and the Act 114 FBI fingerprint-based background check. Our automated credentialing system completes all three for every candidate up front, verifies PDE certification for the specific role, tracks TB tests and vaccination documentation, and flags any clearance approaching its renewal date — so files stay audit-ready for the life of the placement.\n\nIn a market where candidates hold multiple offers, that system is the difference between winning and losing the hire: typical time-to-hire runs roughly half the norm because the paperwork is finished before your interview, and in past engagements we have placed certified special education teachers within two weeks.",
      },
      {
        heading: "One client per region in a city full of competitors",
        body: "In a charter-dense city, the agency staffing your school is very often staffing the school recruiting your students — and shopping the same certified SPED teacher to both. FSG works with one client per region: sign with us for your part of the metro and we will not supply a competing school, and the candidates we recruit in your area are presented only to you. In Philadelphia's market, exclusivity is not a nice-to-have; it is the only structure under which a pipeline stays yours.\n\nEvery placement is temp-to-perm at no cost — evaluate a teacher or para in your building, then hire them permanently with no conversion fee. Daily coverage runs on our substitute model: weekly Friday pay by direct deposit or Cash App and a mobile app for picking up and swapping shifts, the same model that holds a 95% daily fill rate at Odyssey Public Charter School, 30 minutes down I-95 (case study at /case-studies). We also run school-supply and backpack drives for partner schools each year.",
      },
    ],
    faqs: [
      {
        q: "Where around Philadelphia does FSG staff schools?",
        a: "Across the metro: Philadelphia itself, Delaware County, the Main Line, Montgomery County, Chester County, and Bucks County. Our headquarters in Wayne is about 30 minutes from Philadelphia schools, and metro clients include Chester Community Charter, First PA, and The Delta School in Philadelphia.",
      },
      {
        q: "Do you work with Philadelphia charter schools?",
        a: "Yes. Chester Community Charter, one of the largest charters in Pennsylvania, is a client, and our flagship engagement is at a charter school — Odyssey Public Charter in Wilmington, 30 minutes down I-95, where we filled 120+ roles. We understand hiring without a district HR apparatus behind you.",
      },
      {
        q: "Do candidates arrive with PA clearances complete?",
        a: "Yes. Every candidate we present has the Act 34 criminal history clearance, Act 151 child abuse clearance, and Act 114 FBI fingerprinting complete and tracked in our credentialing system, along with PDE certification verification, TB test, and vaccination documentation.",
      },
      {
        q: "Can you fill special education and paraprofessional roles?",
        a: "That is the deepest part of our practice. The Delta School's CEO has attested to the quality of the special education teachers, paraprofessionals, personal care assistants, and related service providers we placed, and in past engagements we have placed certified special education teachers within two weeks.",
      },
      {
        q: "Will you also staff the school competing with ours?",
        a: "No. We work with one client per region — in a city this dense with schools, that is the whole point. The candidates we recruit in your part of the metro are presented only to you.",
      },
      {
        q: "What does temp-to-perm cost?",
        a: "Nothing beyond the placement. Evaluate a teacher, para, or clinician in your building for as long as you need; if you hire them permanently, there is no conversion fee and no buyout. Engagement pricing is covered openly on the free 30-minute discovery call.",
      },
      {
        q: "What clearances do Philadelphia school staff need?",
        a: "The same three Pennsylvania requires statewide: the Act 34 state criminal history check, the Act 151 child abuse clearance, and the Act 114 FBI fingerprint check, renewed on the state's cycle. Teaching roles additionally need PDE certification for the subject and grade band. Our credentialing system completes and tracks all of it before you meet a candidate.",
      },
    ],
    quote: {
      text: "Focused Staffing Group has consistently provided us with high quality special education teachers, paraprofessionals, personal care assistants, and related service providers who have demonstrated professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
      name: "David Weathington, MSW, LSW, Ed.D",
      role: "CEO, Buttonwood Farms / Delta School (Philadelphia)",
    },
    related: [
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
    ],
  },
  {
    slug: "education-staffing-agency-cost",
    eyebrow: "Education staffing",
    h1: "How Much Does a Teacher Staffing Agency Cost?",
    metaTitle: "How Much Does a Teacher Staffing Agency Cost?",
    metaDescription:
      "How education staffing pricing works — what a bill rate covers, where fees hide, and what FSG attests: $0 temp-to-perm conversion, free discovery call.",
    hero: "An honest answer instead of a rate card: how education staffing pricing actually works, which contract terms quietly move the total, and the parts of our own model we can state flatly — $0 to convert a temp to your permanent hire, and candidates are never charged.",
    photo: PHOTOS[1],
    stats: [
      { value: "$0", label: "Fee to convert any FSG temp to your permanent hire — no buyout" },
      { value: "Free", label: "30-minute discovery call, where we quote real rates for your roles" },
      { value: "1", label: "Client per region — the pipeline you fund is never resold to a competitor" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your roles, buildings, and requirements, and quote real rates for your specific situation — role by role, in plain terms. No cost, no obligation, and no rate games later.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "The screening, clearances, certification verification, and references your bill rate pays for all happen before you meet a candidate — you are never billed for our recruiting process itself.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "You pay for people who work in your buildings, not for résumés. Your team interviews fully credentialed candidates and makes every final call.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "Onboarding, coverage questions, replacements — included in the engagement. And when you want to hire a placement permanently, the conversion costs nothing.",
      },
    ],
    verify: [
      "Full criminal background check — a real cost inside any honest bill rate",
      "State-required clearances — in PA, Act 34 criminal history, Act 151 child abuse, Act 114 FBI fingerprinting",
      "Equivalent clearances for DE, NJ, and MD placements",
      "State certification verified for every certificated role",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
    ],
    sections: [
      {
        heading: "How education staffing pricing actually works",
        body: "Most education staffing runs on an hourly bill rate: the school pays the agency an hourly figure for each hour a placed educator works. That rate is not the educator's wage — it is the wage plus everything it costs to employ them legally and well. Inside a typical bill rate sit the educator's pay; employer payroll taxes; workers' compensation and liability insurance, since the agency is usually the employer of record; the cost of screening, clearances, and credentialing; and the agency's operating margin. When a school compares a bill rate to a teacher's hourly salary and concludes the agency is expensive, it is usually comparing the full cost of employment to a number that excludes most of it.\n\nLong-term and permanent-track placements are sometimes priced differently — a flat placement fee, or a rate structured against the role's salary rather than hours worked — and direct-hire searches in education typically work that way. Both models are legitimate; what matters is that the structure is stated plainly, in writing, before the engagement starts.\n\nWe are not going to publish a rate card on this page, and you should be suspicious of any agency that does: real rates depend on the role, the certification it requires, the region's market, and the length of the assignment. What we will do is quote your actual roles, at real numbers, on a free 30-minute discovery call.",
      },
      {
        heading: "What moves the rate up or down",
        body: "Bill rates track scarcity. A certified special education teacher costs more than a general day-to-day substitute for the same reason they are harder to hire directly: fewer people hold the credential, and every school in the region wants them. Licensed clinicians — SLPs, OTs, school psychologists — sit at the top of the range in most markets because the license is the bottleneck. Region matters too: the same role prices differently in a metro market than a rural one, because the educator's wage expectations and the depth of the pool differ. Assignment length cuts the other way — a semester-long commitment is generally more efficient than day-to-day coverage, because the recruiting cost amortizes over more hours.\n\nClearance and compliance costs are the part schools most often forget. Every person an agency places has been background-checked, cleared, TB-tested, certification-verified, and reference-checked before day one — in Pennsylvania that means the Act 34, 151, and 114 clearances per person — and those costs exist whether the candidate ultimately works one day or one year. An agency quoting a rate that could not possibly cover real screening is telling you what it skips.",
      },
      {
        heading: "The costs that hide in the contract",
        body: "The hourly rate is the visible number; the contract terms are where totals quietly move. The largest hidden cost in education staffing is the conversion fee — the buyout an agency charges when a school wants to hire a placed educator permanently. Buyouts commonly run to thousands of dollars per hire, and they invert the school's incentives: the better the placement, the more it costs to keep them. Other terms worth reading twice: replacement provisions when a placement fails early, minimum-hour guarantees, and who pays when a clearance or credential needs renewing mid-year.\n\nThere is also a structural cost that never appears on an invoice. Most agencies serve multiple schools in the same region — so the recruiting pipeline your contract funds is simultaneously serving the school competing with you, and when a strong candidate surfaces, you may be bidding against another client of your own vendor. You pay the rate either way; whether the pipeline is actually yours depends on the agency's model.",
      },
      {
        heading: "What FSG attests about its own pricing",
        body: "Here is what we can state flatly, because each is how our engagements are structured. The discovery call is free — 30 minutes, no obligation, and you leave with real rates for your actual roles. Candidates are never charged: educators pay nothing to be recruited, screened, or placed by FSG, ever. Temp-to-perm conversion costs nothing — evaluate a teacher, para, or clinician in your building for as long as you need, and if you hire them permanently there is no conversion fee and no buyout, a term attested publicly by the CEO of a Delaware public school district we serve. And we work with one client per region, which means the pipeline your engagement funds is never resold to the school down the road.\n\nSchools pay for hours worked and placements made — not for searches, shortlists, or the screening behind them. If we present ten candidates and you hire one, you pay for the one who works in your building.",
      },
      {
        heading: "How to compare agency quotes honestly",
        body: "When you have quotes in hand, compare totals, not hourly rates. Ask each vendor: what is inside the bill rate — who is the employer of record, and who carries payroll taxes, workers' comp, and liability insurance? What does it cost to hire a placement permanently, in writing? What are the replacement terms when a placement fails in week three? How is fill rate defined and reported? A vendor with a low hourly rate and a five-figure buyout is frequently the expensive option over a school year; a vendor who cannot answer the employer-of-record question is offloading risk onto you.\n\nWe built this page because the question in its title deserves a straight answer, and most of the industry answers it with a contact form. FSG has staffed K-12 schools for 12 years from Wayne, Pennsylvania, under a founder who taught in the classroom; the record — 120+ roles filled at one school, a 95% substitute fill rate, certified special education teachers placed within two weeks — is on this site and checkable. The rates are one call away.",
      },
    ],
    faqs: [
      {
        q: "What does temp-to-perm conversion cost with FSG?",
        a: "Zero dollars. Every FSG placement is temp-to-perm at no cost: evaluate the educator in your building, and if you hire them permanently there is no conversion fee and no buyout. This is the single largest pricing difference between us and agencies that charge thousands per conversion.",
      },
      {
        q: "Do you charge schools a search fee?",
        a: "No. You pay only for hours worked and placements made — never for the search, the shortlist, or the screening behind it. Exact rates depend on the role and region, and we quote them plainly on the free 30-minute discovery call.",
      },
      {
        q: "Are candidates ever charged?",
        a: "Never. Educators pay nothing to be recruited, screened, credentialed, or placed by FSG. Any staffing firm charging candidates a fee for placement is one you and your educators should walk away from.",
      },
      {
        q: "What does an education staffing bill rate actually include?",
        a: "Typically the educator's wage, employer payroll taxes, workers' compensation and liability insurance (the agency is usually the employer of record), the cost of screening and clearances, and the agency's margin. Comparing a bill rate to a salary figure alone understates what direct employment actually costs a district.",
      },
      {
        q: "Why won't you publish your rates on this page?",
        a: "Because a published number would either mislead you or pad our margin. Real rates depend on the role, the certification it requires, the region, and the assignment length — a certified SPED teacher and a day-to-day sub are different markets. We quote your actual roles at real numbers on the discovery call, free, in 30 minutes.",
      },
      {
        q: "Is a staffing agency more expensive than hiring directly?",
        a: "Per hour, usually — the bill rate covers employment costs a salary figure hides, plus the agency's margin. Per vacancy, often not: an unfilled special education seat generates compensatory-services exposure, substitute churn, and administrator hours that rarely get costed. The honest comparison is agency cost versus the full cost of the seat staying empty, and it depends on how hard the role is to fill.",
      },
      {
        q: "How does one client per region affect what we pay?",
        a: "It changes what your money buys. With a shared-pipeline agency, the recruiting your contract funds also serves your competitors, and strong candidates get shopped to whoever pays more. With FSG, the pipeline built in your region serves only you — so the same engagement spend produces a deeper, exclusive pool instead of a bidding war.",
      },
    ],
    quote: {
      text: "We are thrilled that we can transition our contract employee to permanent status without a buyout fee. The experience has been outstanding.",
      name: "Kelly Hamm",
      role: "HR Director, Lotus School for Excellence (Aurora, CO)",
    },
    related: [
      { label: "School District Staffing Vendor", slug: "school-district-staffing-vendor" },
      { label: "Education Staffing RFP Experience", slug: "education-staffing-rfp-experience" },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
    ],
  },
  {
    slug: "washington-dc-education-staffing",
    eyebrow: "Education staffing · Washington, DC",
    h1: "Washington, DC Education Staffing",
    metaTitle: "Washington DC Education Staffing Agency",
    metaDescription:
      "Two DC charter partnerships since 2022: 100% of certified SPED roles filled at IDEA PCS with 100% retention, and four qualified candidates per opening at Cesar Chavez PCS.",
    hero: "Two DC public charter schools have partnered with us since 2022. At IDEA Public Charter School we filled 100% of open certified special education roles with 100% retention, two weeks from request to filled. At Cesar Chavez Public Charter School we present four qualified candidates per opening.",
    photo: PHOTOS[2],
    roles: [
      "Special education teachers",
      "Dedicated and one-on-one aides",
      "Paraprofessionals",
      "Subject-certified long-term substitutes",
      "Day-to-day substitutes",
      "School psychologists",
      "SLPs",
      "OTs",
      "BCBAs",
      "RBTs",
    ],
    stats: [
      { value: "100%", label: "Certified SPED roles filled at IDEA Public Charter School" },
      { value: "100%", label: "Retention of the educators placed at IDEA" },
      { value: "4", label: "Qualified candidates per opening at Cesar Chavez Public Charter School" },
      { value: "2 wks", label: "From request to filled at IDEA" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your open roles, campuses, and OSSE credentialing requirements. Both of our DC partnerships started here, and you leave with a straight read on whether we can help.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit against your roles, interview every candidate ourselves, and complete the District's required criminal background check, FBI fingerprinting, and child-protection and sex-offender registry screening, plus OSSE credential verification for the specific role.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your leaders interview fully credentialed candidates. At Cesar Chavez that has meant an average of four qualified people per opening — a choice, not a scramble.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement, and any temp converts to your permanent hire at no fee.",
      },
    ],
    verify: [
      "District-required criminal background check and FBI fingerprinting",
      "Child-protection register and National Sex Offender Registry screening",
      "OSSE credential verification for the specific teaching role",
      "DC Health licensure verified for SLPs, OTs, PTs, and school psychologists",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    sections: [
      {
        heading: "What staffing a DC school actually involves",
        body: "The District credentials educators through OSSE, and school employment is gated before anyone works around students: a criminal background check with FBI fingerprinting, child-protection and sex-offender registry screening, and — for certificated roles — an OSSE credential matched to the position. Licensed clinicians need DC Health licensure in their discipline on top of that. The file runs several documents deep per person, and assembling it after a vacancy opens is how a school loses a quarter.\n\nDC's labor market has a shape you do not find in a state. It is a single jurisdiction wedged between Maryland and Virginia, which means the educator living twenty minutes from your building may hold credentials in a different jurisdiction entirely, and reciprocity is the first question rather than the last. The candidate pool is genuinely regional; the credentialing is not.\n\nThe sector is also unusually charter-heavy. Roughly half of DC's public school students attend public charters, spread across dozens of independent LEAs that each recruit on their own — most without a central district HR apparatus behind them. That structure multiplies the number of employers fishing the same water and puts small schools in direct competition with DCPS for the same special education teachers, aides, and long-term subs.",
      },
      {
        heading: "The record is in DC: IDEA and Cesar Chavez",
        body: "Two of our four published case studies are DC public charter schools, both partners since 2022.\n\nIDEA Public Charter School was not only short on special education teachers, substitutes, and one-on-one aides — it was fighting an uphill reputation in the local talent market, and the agencies already under contract could not move the needle. Rather than recruit around the problem, we built a campaign around the real experiences of the contractors we had placed there, and let satisfied educators tell the story. The result: 100% of open certified special education teacher roles filled, 100% retention of the educators placed, and roles filled within two weeks of the request. The partnership has held since. The full case study is at /case-studies/idea-public-charter-school.\n\nCesar Chavez Public Charter School runs a rigorous college-prep program with a public-policy curriculum for 414 students in grades 6–12 — an environment that demands well-matched educators, not whoever is available. We built a dedicated pipeline and sourced deep enough to present, on average, four qualified candidates per opening across dedicated aides, special education teachers, and subject-certified long-term substitutes. The full case study is at /case-studies/cesar-chavez-public-charter-school.",
      },
      {
        heading: "What we screen for in DC candidates",
        body: "Clearances get a candidate to the starting line; the screen decides who reaches your shortlist. It is matched to the role: special education teachers on IEP writing, meeting experience, and behavior-plan implementation; dedicated and one-on-one aides on de-escalation, personal-care comfort, and IEP data collection; subject-certified long-term substitutes on holding a course through a full marking period rather than covering a day; clinicians on DC licensure and multi-campus caseload management.\n\nThe methodology was built by our founder, Robert Flom, a former K-12 teacher — which is why the interview sounds like a case review of the job rather than a personality screen. Credentials are verified for the specific role, not read off a résumé.",
      },
      {
        heading: "One DC client per region, and a pipeline that is yours",
        body: "In a charter sector this dense, the agency staffing your school is very likely presenting the same candidate to the school competing with you for the same families. We removed that conflict: one client per region. Sign with us for your part of the District and we will not supply a competing LEA — the teachers, aides, and clinicians we recruit there are presented to you alone.\n\nThat is the mechanism behind the Chavez number. Four qualified candidates per opening is not a sourcing trick; it is what happens when a pipeline is built for one school instead of auctioned across five. And every placement is temp-to-perm at no cost — evaluate a professional in your building, then hire them permanently with no conversion fee.",
      },
      {
        heading: "Clearances completed before the interview",
        body: "Our automated credentialing system completes the District's background check, fingerprinting, and registry screening up front, verifies the OSSE credential for the specific role, confirms DC Health licensure for clinicians, and tracks every document — TB tests and vaccination records included — flagging anything approaching expiration. Files stay audit-ready for the life of the placement, which matters to charter boards and LEA compliance officers alike.\n\nThat system is the mechanism behind the speed: typical time-to-hire runs roughly half the norm because candidates reach your interview with complete files. At IDEA, that meant two weeks from request to filled.",
      },
    ],
    richHtml: `<p>Washington, DC runs one of the most decentralized special-education compliance structures in the country — DCPS is one LEA, and every one of the city&#39;s charter networks is its own separate LEA, each carrying full IDEA responsibility on its own. FocusedEDU is a specialized K-12 staffing partner working with DCPS and DC&#39;s charter LEAs to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest priority . Here&#39;s what OSSE&#39;s own data says about the shortage, what DC requires before anyone works in a school, how the DCPS/charter LEA structure actually works, and which charter operators are active today.</p>
<h2 id="the-special-education-staffing-landscape-in-dc">The special-education staffing landscape in DC</h2>
<p>Special education is DC&#39;s single hardest subject area to staff. OSSE&#39;s own Educator Workforce Report found that in SY2023-24, &quot;LEAs and SPAs reported 8 percent of the city&#39;s 1,140 special education FTEs as vacant, making it the subject area with the highest vacancy rate&quot; — against a 4% overall citywide vacancy rate that same year <span class="cite">(source: OSSE, District of Columbia Educator Workforce Report, Oct. 2024, p.17, <a href="https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Report%20(Oct%2028).pdf">https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Report%20(Oct%2028).pdf</a>)</span>. The same report found a direct link between disability caseload and staffing quality: &quot;a 10 percentage point increase in the rate of students with disabilities at a school was associated with a 4.8 percentage point decrease in the rate of in-field teachers&quot; — a statistically significant finding <a class="cite" href="https://p.15" rel="noopener nofollow" target="_blank">same report</a>. The share of DC teachers actually assigned to special education has also been shrinking: elementary special-education assignment fell from 18% of teachers in SY2021-22 to 12% in SY2023-24, and secondary fell from 21% to 15% over the same window <a class="cite" href="https://p.12" rel="noopener nofollow" target="_blank">same report</a>. That&#39;s happening in a city that otherwise runs a favorable 11.3-to-1 student-teacher ratio, notably lower than the national average of 15-to-1, across 254 public schools and roughly 98,800 students <a class="cite" href="https://p.7" rel="noopener nofollow" target="_blank">same report</a>.</p>
<h2 id="clearances-dc-requires-before-anyone-works-in-a-school">Clearances DC requires before anyone works in a school</h2>
<p>DC&#39;s background-check regime runs through DC Code Title 4, Chapter 15 (the Criminal Background Checks for the Protection of Children Act of 2004) and Title 38, Chapter 9A. Every LEA and contracted service provider must &quot;[conduct] a criminal background check of the applicant in accordance with the requirements of Chapter 15 of Title 4&quot; and check the U.S. DOJ&#39;s National Sex Offender Public Registry <a class="cite" href="https://code.dccouncil.gov/us/dc/council/code/sections/38-951.03" rel="noopener nofollow" target="_blank">DC Code §38-951.03</a>. The mechanism itself is FBI fingerprint-based: applicants, employees, and volunteers &quot;shall submit to a criminal background check by means of fingerprint and National Criminal Information Center checks conducted by the Mayor and the FBI&quot; <a class="cite" href="https://code.dccouncil.gov/us/dc/council/code/sections/4-1501.05" rel="noopener nofollow" target="_blank">DC Code §4-1501.05</a>. The 2022 &quot;Educator Background Check Streamlining Amendment Act&quot; (D.C. Law 24-317) updated the regime to require review of each former employer over the preceding 7 years, or the applicant&#39;s last 3 employers, whichever is longer, plus the sex-offender-registry check <a class="cite" href="https://code.dccouncil.gov/us/dc/council/laws/24-317" rel="noopener nofollow" target="_blank">D.C. Law 24-317</a>. OSSE&#39;s own implementing page confirms: &quot;All applicants applying for an educator credential issued by the District of Columbia&#39;s Office of the State Superintendent of Education (OSSE)&quot; must submit an FBI Identity History Summary Check <span class="cite">(source: OSSE, How to Obtain an FBI IHSC, <a href="https://osse.dc.gov/page/how-obtain-fbi-identity-history-summary-check-ihsc">https://osse.dc.gov/page/how-obtain-fbi-identity-history-summary-check-ihsc</a>)</span>, and DCPS&#39;s own page states plainly that &quot;all current and prospective DCPS employees, program partners, contractors, student teachers, interns, and volunteers must complete a criminal background check before providing services to any DCPS student, school, or office,&quot; with clearances expiring two years from issue <span class="cite">(source: DCPS, Fingerprinting and ID Badge Processes, <a href="https://dcps.dc.gov/page/dcps-fingerprinting-background-check-and-id-badge-processes-and-requirements">https://dcps.dc.gov/page/dcps-fingerprinting-background-check-and-id-badge-processes-and-requirements</a>)</span>.</p>
<p>FocusedEDU completes FBI fingerprint-based clearance and certification verification for every DC candidate before that candidate is ever shortlisted to a DCPS school or a charter LEA .</p>
<h2 id="how-dcps-and-dc39s-charter-leas-are-structured">How DCPS and DC&#39;s charter LEAs are structured</h2>
<p>DC&#39;s structure is unusually decentralized for special-education purposes. OSSE defines it directly: &quot;District of Columbia Public Schools (DCPS) is its own LEA, and each charter network is its own LEA. Each LEA creates its own set of policies and helps ensure the on-the-ground implementation of federal and state policies&quot; <span class="cite">(source: OSSE, Educator Workforce Report, Oct. 2024, Glossary, p.5)</span>. The DC Public Charter School Board (DC PCSB), which describes itself as &quot;an independent DC government agency and the sole authorizer of public charter schools in our nation&#39;s capital&quot; <span class="cite">(source: DC PCSB, About Us, <a href="https://dcpcsb.org/about-us">https://dcpcsb.org/about-us</a>)</span>, reported as of July 2025 that it &quot;provides oversight to 133 public charter schools, which are managed by 66 independently run nonprofit organizations called local education agencies,&quot; serving 47,525 students — 48% of all DC public school students <span class="cite">(source: DC PCSB, Public Charter School Data, <a href="https://dcpcsb.org/about-us/public-charter-school-data">https://dcpcsb.org/about-us/public-charter-school-data</a>)</span>. For a network operating multiple campuses, that means special-education compliance — Child Find, evaluations, IEP development, related-service delivery — sits with the network itself, not with a larger authorizing district, at every one of its schools.</p>
<h2 id="charter-networks-staffing-in-dc">Charter networks staffing in DC</h2>
<p>With charter schools serving roughly half the city&#39;s public-school population, DC has one of the country&#39;s densest concentrations of multi-site charter operators:</p>
<ul>
<li><strong>KIPP DC</strong> serves 7,300 students across 22 schools and 8 campuses, PreK3-12 <span class="cite">(source: <a href="https://www.kippdc.org/about-kipp-dc/">https://www.kippdc.org/about-kipp-dc/</a>)</span>.</li>
<li><strong>Friendship Public Charter School</strong> operates 15 campuses across the DC area, PK3-12 <span class="cite">(source: <a href="https://www.friendshipschools.org/">https://www.friendshipschools.org/</a>)</span>.</li>
<li><strong>DC Prep</strong> operates in Wards 5, 7, and 8, grades PK3-8 <span class="cite">(source: <a href="https://www.dcprep.org/">https://www.dcprep.org/</a>)</span>.</li>
<li><strong>Two Rivers Public Charter School</strong> runs three campuses in Northeast DC, Pre-K through grade 8 <span class="cite">(source: <a href="https://www.tworiverspcs.org/who-we-are/our-schools/">https://www.tworiverspcs.org/who-we-are/our-schools/</a>)</span>.</li>
<li><strong>Center City Public Charter Schools</strong> operates six campuses across DC neighborhoods including Petworth, Shaw, and Capitol Hill <span class="cite">(source: <a href="https://centercitypcs.org/about/locations/">https://centercitypcs.org/about/locations/</a>)</span>.</li>
<li><strong>Achievement Prep</strong> operates a unified campus in Ward 8 serving PK3 through middle grades <span class="cite">(source: <a href="https://achievementprep.org/">https://achievementprep.org/</a>)</span>.</li>
</ul>
<p>FocusedEDU has staffed DC public charter schools directly — see our case studies: <a href="https://www.focusedu-staffing.com/case-studies/idea-public-charter-school">IDEA Public Charter School — Case Study</a> and <a href="https://www.focusedu-staffing.com/case-studies/cesar-chavez-public-charter-school">Cesar Chavez Public Charter School — Case Study</a>.</p>
<h2 id="what-focusededu-does-in-dc">What FocusedEDU does in DC</h2>
<p>FocusedEDU works with DCPS and DC&#39;s charter LEAs — charter networks are our highest priority — to staff special-education teachers, general-education teachers, paraprofessionals, school nurses (RN/LPN), SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes . We source through outbound recruiting of passive candidates, specialize in the special-education and related-service roles carrying DC&#39;s highest vacancy rate, and complete FBI fingerprint clearance and certification verification before a candidate is ever shortlisted . We work as a long-term staffing partner across a network&#39;s campuses, not a single-school, single-placement vendor .</p>
`,
    faqs: [
      { q: "What background check does DC require before someone can work in a school?", a: "An FBI fingerprint-based criminal background check plus a National Sex Offender Registry review, required of every LEA and contracted service provider under DC Code Title 4, Chapter 15 and Title 38, Chapter 9A (DC Code §§38-951.03: 4-1501.05). FocusedEDU completes this for every DC candidate before presenting them to a school ." },
      { q: "Why is special education DC's hardest role to staff?", a: "OSSE's own workforce data shows special education carrying an 8% vacancy rate on 1,140 FTEs citywide — double the 4% overall vacancy rate — and the share of teachers assigned to special education has been shrinking, not growing, since SY2021-22 (source: OSSE, Educator Workforce Report, Oct. 2024)." },
      { q: "Since every DC charter network is its own LEA, who's actually responsible for special-education compliance?", a: "The charter network itself — OSSE defines DCPS and \"each charter network\" as its own separate LEA, each fully responsible for Child Find, evaluations, IEPs, and related-service delivery at every one of its campuses (source: OSSE, Educator Workforce Report, Glossary)." },
      { q: "Does FocusedEDU work with DC's charter schools?", a: "Yes — charter networks are our highest-priority partner segment . DC PCSB oversees 133 public charter schools serving 48% of the city's public-school students (source: DC PCSB, Public Charter School Data, July 2025), and we've staffed DC charter LEAs directly — see our case studies on IDEA Public Charter School and Cesar Chavez Public Charter School." },
      { q: "How fast can a hard-to-fill role actually get placed in DC?", a: "Because clearance and certification verification are completed before a candidate is shortlisted, our typical timeline runs 2-4 weeks against an industry norm closer to 6-8 weeks  — meaningful given how far special-education vacancy rates in DC outpace every other subject (source: OSSE, Educator Workforce Report, Oct. 2024)." },
    ],
    related: [
      { label: "Maryland Special Education Staffing", slug: "maryland-special-education-staffing" },
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
    ],
  },
  {
    slug: "colorado-education-staffing",
    eyebrow: "Education staffing · Colorado",
    h1: "Colorado Education Staffing",
    metaTitle: "Colorado Education Staffing Agency",
    metaDescription:
      "Staffing Colorado schools with CDE-licensed teachers, paraprofessionals, and clinicians — and converting contract staff to permanent with no buyout fee. Lotus School for Excellence, Aurora.",
    hero: "We staff Colorado schools with CDE-licensed teachers, paraprofessionals, substitutes, and clinicians — and when you want to keep one, the conversion costs nothing. Lotus School for Excellence in Aurora put that in writing.",
    photo: PHOTOS[1],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "Day-to-day and long-term substitutes",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
      "Education support staff",
    ],
    stats: [
      { value: "$0", label: "Temp-to-perm conversion fee — no buyout when you keep someone" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "12 yrs", label: "Staffing K-12 schools, founded by a former classroom teacher" },
      { value: "1", label: "Client per region — your pipeline is not shared with a competing school" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your open roles, buildings, and Colorado licensure requirements, and you leave with a straight read on whether we can help. No cost, no obligation.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit against your roles, interview every candidate ourselves, and complete Colorado's fingerprint-based background check, CDE licensure verification for the specific role, and clinician licensure checks before you see a name.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your administrators interview fully credentialed candidates and make the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement — and if you want to keep someone, they convert to your permanent employee with no buyout fee.",
      },
    ],
    verify: [
      "Colorado fingerprint-based criminal background check",
      "CDE licensure verified for the specific teaching or special services role",
      "State licensure verified for SLPs, OTs, PTs, and school psychologists",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    sections: [
      {
        heading: "What staffing a Colorado school actually involves",
        body: "Colorado licenses educators through the Department of Education, and school employment is gated before anyone works around students: a fingerprint-based criminal background check, CDE licensure or authorization matched to the specific role, and — for special services providers like school psychologists, SLPs, OTs, and PTs — the discipline-specific credential on top of it. The file runs several documents deep per person, and assembling it after the vacancy opens is how a school loses a quarter.\n\nThe Front Range concentrates most of the state's demand into a corridor where Denver, Aurora, Jefferson County, Cherry Creek, and a dense charter sector all recruit from the same metro pool — while districts on the Western Slope and the Eastern Plains compete for educators who have to be willing to relocate. It is effectively two different hiring problems inside one licensure regime, and a national vendor treating Colorado as a single territory tends to serve neither well.\n\nThe shortage categories are the familiar ones, sharpened by cost of living along the corridor: special education certifications, related-services clinicians, and reliable day-to-day substitutes.",
      },
      {
        heading: "Keeping the person you want, without a buyout",
        body: "Most staffing contracts penalize a school for wanting to keep someone. You bring in a contract educator, they work out, and converting them to staff triggers a buyout or a percentage of first-year salary. That fee is why schools hesitate to try someone at all.\n\nWe do not charge it. Every placement is temp-to-perm at no cost — evaluate a professional in your building through a real marking period, then hire them permanently with no conversion fee. Kelly Hamm, HR Director at Lotus School for Excellence in Aurora, put it plainly in a letter she wrote us in October 2024: the school was thrilled to transition a contract employee to permanent status without a buyout fee. That letter, and seven others from named school leaders, are published in full at /references.",
      },
      {
        heading: "What we screen for in Colorado candidates",
        body: "Clearances get a candidate to the starting line; the screen decides who reaches your shortlist. It is matched to the role: special education teachers on IEP writing, meeting experience, and behavior-plan implementation; paraprofessionals on de-escalation, personal-care comfort, and IEP data collection; substitutes on classroom management under ambiguity and a morning-of reliability record we verify with prior schools; clinicians on Colorado licensure and multi-building caseload management.\n\nThe methodology was built by our founder, Robert Flom, a former K-12 teacher — which is why the interview sounds like a case review of the job rather than a personality screen. Licensure is verified with the state for the specific role, not read off a résumé.",
      },
      {
        heading: "One Colorado client per region",
        body: "Along the Front Range, the agency staffing your school is very likely presenting the same candidate to the district competing with you for the same families. We removed that conflict: one client per region. Sign with us for your part of Colorado and we will not supply a competing school or district — the teachers, paras, and clinicians we recruit there are presented to you alone.\n\nWe also run school-supply and backpack drives for partner schools, because we staff the communities we work in, not just the payrolls.",
      },
      {
        heading: "Clearances completed before the interview",
        body: "Our automated credentialing system completes Colorado's fingerprint-based background check up front, verifies CDE licensure for the specific role, confirms discipline licensure for clinicians, and tracks every document — TB tests and vaccination records included — flagging anything approaching expiration. Files stay audit-ready for the life of the placement, which matters to charter boards and district compliance offices alike.\n\nThat system is the mechanism behind the speed: typical time-to-hire runs roughly half the norm because candidates reach your interview with complete files, and in past engagements we have placed certified special education teachers within two weeks.",
      },
    ],
    faqs: [
      {
        q: "Does FSG staff Colorado schools?",
        a: "Yes. Lotus School for Excellence in Aurora is a Colorado client, and its HR Director wrote us a reference letter in October 2024 describing the experience as outstanding. That letter is published in full at /references.",
      },
      {
        q: "What does it cost to hire one of your contract educators permanently in Colorado?",
        a: "Nothing. Every placement is temp-to-perm at no cost — no buyout, no percentage of first-year salary. Lotus School for Excellence specifically cited that in their reference letter: they were able to transition a contract employee to permanent status without a buyout fee.",
      },
      {
        q: "Do candidates arrive with Colorado clearances complete?",
        a: "Yes. Our credentialing system completes and tracks Colorado's fingerprint-based criminal background check, CDE licensure verification for the specific role, discipline licensure for clinicians, and TB and vaccination documentation before any candidate reaches your shortlist.",
      },
      {
        q: "Will you also staff the district competing with ours?",
        a: "No. We work with one client per region, so the candidates we recruit in your part of Colorado are presented only to you. Along the Front Range, where several large districts and a dense charter sector recruit from one metro pool, that exclusivity is most of the point.",
      },
      {
        q: "Do you staff outside the Denver metro?",
        a: "Yes. Front Range hiring and Western Slope or Eastern Plains hiring are genuinely different problems — one is a crowded metro pool, the other requires candidates willing to relocate — and we scope them differently rather than treating the state as a single territory. We will tell you honestly on the discovery call what a given role looks like in your part of the state.",
      },
      {
        q: "How fast can you fill Colorado openings?",
        a: "Automated credentialing cuts typical time-to-hire roughly in half because the paperwork is complete before interviews begin, and certified special education teachers have been placed within two weeks in past engagements. We quote realistic per-role timelines on the free 30-minute discovery call.",
      },
    ],
    quote: {
      text: "We are thrilled that we can transition our contract employee to permanent status without a buyout fee. The experience has been outstanding.",
      name: "Kelly Hamm",
      role: "HR Director, Lotus School for Excellence (Aurora, CO)",
    },
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
      { label: "Education Staffing Agency Cost", slug: "education-staffing-agency-cost" },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
    ],
  },
  {
    slug: "north-carolina-education-staffing",
    eyebrow: "Education staffing · North Carolina",
    h1: "North Carolina Education Staffing",
    metaTitle: "North Carolina Education Staffing Agency",
    metaDescription:
      "Staffing North Carolina schools with NCDPI-licensed teachers, paraprofessionals, and clinicians. Charlotte-Mecklenburg Schools is a Focused Staffing Group client.",
    hero: "We staff North Carolina schools with NCDPI-licensed teachers, paraprofessionals, substitutes, and clinicians — screened by a firm founded by a former K-12 teacher. Charlotte-Mecklenburg Schools, one of the largest districts in the state, is a client.",
    photo: PHOTOS[0],
    roles: [
      "Special education teachers",
      "Paraprofessionals",
      "Day-to-day and long-term substitutes",
      "School psychologists",
      "SLPs",
      "OTs",
      "PTs",
      "BCBAs",
      "RBTs",
      "Education support staff",
    ],
    stats: [
      { value: "12 yrs", label: "Staffing K-12 schools, founded by a former classroom teacher" },
      { value: "½", label: "Automated credentialing cuts typical time-to-hire roughly in half" },
      { value: "$0", label: "Temp-to-perm conversion fee" },
      { value: "1", label: "Client per region — your pipeline is not shared with a competing district" },
    ],
    steps: [
      {
        n: "01",
        title: "Free 30-minute discovery call",
        body: "We map your open roles, schools, and North Carolina licensure requirements, and you leave with a straight read on whether we can help. No cost, no obligation.",
      },
      {
        n: "02",
        title: "We source, screen, and credential",
        body: "We recruit against your roles, interview every candidate ourselves, and complete criminal background checks, NCDPI licensure verification for the specific role, and clinician licensure checks before you see a name.",
      },
      {
        n: "03",
        title: "You choose from a vetted shortlist",
        body: "Your administrators interview fully credentialed candidates and make the final call on every hire.",
      },
      {
        n: "04",
        title: "We stay through the placement",
        body: "We stay involved through onboarding and the life of the placement, and any temp converts to your permanent hire at no fee.",
      },
    ],
    verify: [
      "Full criminal background check",
      "NCDPI licensure verified for the specific teaching role",
      "State licensure verified for SLPs, OTs, PTs, and school psychologists",
      "TB test and vaccination documentation",
      "Reference checks with prior schools and supervisors",
      "Role-specific skills screening",
      "Every clearance tracked and expiration-flagged in our credentialing system",
    ],
    sections: [
      {
        heading: "What staffing a North Carolina school actually involves",
        body: "North Carolina licenses educators through the Department of Public Instruction, and school employment is gated before anyone works around students: a criminal background check, an NCDPI license or permit matched to the specific role, and — for school psychologists, SLPs, OTs, and PTs — the discipline-specific credential on top of it. The file runs several documents deep per person, and assembling it after a vacancy opens is how a school loses a quarter.\n\nThe state's hiring problem is really several problems. Charlotte and the Triangle are large, fast-growing metro markets where districts compete against each other and against a substantial charter sector for the same candidates. Rural districts in the east and the mountain counties face the opposite issue: a shallow local pool and candidates who would need to relocate. A vendor that treats North Carolina as one territory tends to serve the metros adequately and the rural districts not at all.\n\nThe categories that run shortest are the familiar ones: special education licensure, related-services clinicians, and reliable day-to-day substitute coverage.",
      },
      {
        heading: "What we screen for in North Carolina candidates",
        body: "Clearances get a candidate to the starting line; the screen decides who reaches your shortlist. It is matched to the role: special education teachers on IEP writing, meeting experience, and behavior-plan implementation; paraprofessionals on de-escalation, personal-care comfort, and IEP data collection; substitutes on classroom management under ambiguity and a morning-of reliability record we verify with prior schools; clinicians on North Carolina licensure and multi-building caseload management.\n\nThe methodology was built by our founder, Robert Flom, a former K-12 teacher — which is why the interview sounds like a case review of the job rather than a personality screen. Licensure is verified with the state for the specific role, not read off a résumé.",
      },
      {
        heading: "One North Carolina client per region",
        body: "In a metro like Charlotte or the Triangle, the agency staffing your schools is very likely presenting the same candidate to the district competing with you. We removed that conflict: one client per region. Sign with us for your part of North Carolina and we will not supply a competing school or district — the teachers, paras, and clinicians we recruit there are presented to you alone.\n\nCharlotte-Mecklenburg Schools, one of the largest districts in the state, is a Focused Staffing Group client. And every placement is temp-to-perm at no cost — evaluate a professional in your building, then hire them permanently with no conversion fee.",
      },
      {
        heading: "Clearances completed before the interview",
        body: "Our automated credentialing system completes background checks up front, verifies NCDPI licensure for the specific role, confirms discipline licensure for clinicians, and tracks every document — TB tests and vaccination records included — flagging anything approaching expiration. Files stay audit-ready for the life of the placement, which matters to charter boards and district compliance offices alike.\n\nThat system is the mechanism behind the speed: typical time-to-hire runs roughly half the norm because candidates reach your interview with complete files, and in past engagements we have placed certified special education teachers within two weeks.",
      },
      {
        heading: "What our clients put in writing",
        body: "We would rather show you letters than adjectives. Eight school leaders — superintendents, HR directors, principals, and CEOs — have written references for us, and we publish them in full, with names and schools attached, at /references.\n\nThe outcomes behind them are documented too: 120+ roles across 13+ role types at Odyssey Public Charter School in Delaware with a 95% day-to-day substitute fill rate; 100% of certified special education roles filled with 100% retention at IDEA Public Charter School in Washington, DC; four qualified candidates per opening at Cesar Chavez Public Charter School. Those case studies are at /case-studies.",
      },
    ],
    faqs: [
      {
        q: "Does FSG staff North Carolina schools?",
        a: "Yes. Charlotte-Mecklenburg Schools, one of the largest districts in the state, is a Focused Staffing Group client. We staff special education teachers, paraprofessionals, substitutes, and related-services clinicians across the state.",
      },
      {
        q: "Do candidates arrive with North Carolina clearances complete?",
        a: "Yes. Our credentialing system completes and tracks the criminal background check, NCDPI licensure verification for the specific role, discipline licensure for clinicians, and TB and vaccination documentation before any candidate reaches your shortlist.",
      },
      {
        q: "Will you also staff the district competing with ours?",
        a: "No. We work with one client per region, so the candidates we recruit in your part of North Carolina are presented only to you. In the Charlotte and Triangle markets, where several large districts and a substantial charter sector recruit from one pool, that exclusivity is most of the point.",
      },
      {
        q: "Do you staff rural North Carolina districts?",
        a: "Yes, and we scope them differently. A shallow local pool with candidates who would need to relocate is a different problem from a crowded metro market, and pretending otherwise is how vendors overpromise. We will tell you honestly on the discovery call what a given role looks like in your county.",
      },
      {
        q: "What does it cost to hire one of your contract educators permanently?",
        a: "Nothing. Every placement is temp-to-perm at no cost — no buyout and no percentage of first-year salary — so you can evaluate a professional in your building through a real marking period before committing.",
      },
      {
        q: "How fast can you fill North Carolina openings?",
        a: "Automated credentialing cuts typical time-to-hire roughly in half because the paperwork is complete before interviews begin, and certified special education teachers have been placed within two weeks in past engagements. We quote realistic per-role timelines on the free 30-minute discovery call.",
      },
    ],
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      { label: "Substitute Teacher Staffing", slug: "substitute-teacher-staffing" },
      { label: "School District Staffing Vendor", slug: "school-district-staffing-vendor" },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}
