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
export type ServiceLink = { label: string; slug: string };

export type ServicePage = {
  slug: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  photo: string;
  roles?: string[];
  stats?: { value: string; label: string }[];
  steps?: { n: string; title: string; body: string }[];
  verify?: string[];
  quote?: { text: string; name: string; role: string };
  sections: ServiceSection[];
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
      "Focused Staffing Group places certified special education teachers, paraprofessionals, and related service providers. Founded by a former K-12 teacher; certified SPED teachers have been placed within two weeks.",
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
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
    ],
  },
  {
    slug: "paraprofessional-staffing",
    eyebrow: "Education staffing",
    h1: "Paraprofessional Staffing for K-12 Schools",
    metaTitle: "Paraprofessional Staffing Agency for K-12 Schools",
    metaDescription:
      "Focused Staffing Group recruits and places paraprofessionals, 1:1 aides, and classroom support staff for K-12 schools — with weekly pay and a shift app that kept one partner school at a 95% daily fill rate.",
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
      "Focused Staffing Group is the education staffing vendor schools call when the incumbent can't fill. 120+ roles filled at one school, 13+ role types, one client per region.",
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
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
    ],
  },
  {
    slug: "k12-education-staffing",
    eyebrow: "Education staffing",
    h1: "K-12 Education Staffing",
    metaTitle: "K-12 Education Staffing Agency",
    metaDescription:
      "Focused Staffing Group staffs the whole K-12 building — 13+ role types at a single school, from bus drivers to certified teachers. Founded by a former teacher, 12 years in.",
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
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },
  {
    slug: "related-services-staffing",
    eyebrow: "Education staffing",
    h1: "Related Services Staffing for Schools",
    metaTitle: "Related Services Staffing for Schools",
    metaDescription:
      "Focused Staffing Group recruits SLPs, OTs, PTs, school psychologists, and BCBAs for schools — license-verified, clearance-complete, and never shared with a competing district.",
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
    faqs: [
      {
        q: "Which related-services roles does FSG fill?",
        a: "Speech-language pathologists, occupational therapists, physical therapists, school psychologists, BCBAs, RBTs, and behavior support staff. Each candidate's license and certification is verified for the specific discipline before you meet them.",
      },
      {
        q: "Will the clinicians you recruit for us also be offered to nearby districts?",
        a: "No. We work with one client per region, so the clinicians we recruit in your area are presented only to you. We will not supply a competing school with your pipeline.",
      },
      {
        q: "How fast can you fill a clinician opening?",
        a: "Licensed roles move at the speed of paperwork, which is exactly what our automated credentialing attacks — it tracks licenses, clearances, and expirations and cuts typical time-to-hire roughly in half. We quote a realistic timeline per discipline on the discovery call rather than promising days.",
      },
      {
        q: "What do you verify on a clinical candidate?",
        a: "State license and certification for the specific role, a full background check, the state-required clearances (PA Acts 34, 151, and 114 or your state's equivalents), TB test, vaccination documentation, references from prior schools and clinical supervisors, and a skills screen.",
      },
      {
        q: "Can we hire a placed clinician permanently?",
        a: "Yes, at no cost. Every placement is temp-to-perm with no conversion fee — evaluate the clinician on a real caseload first, then hire them without a buyout.",
      },
      {
        q: "What does an engagement look like?",
        a: "A free 30-minute discovery call to map disciplines, caseloads, and licensure requirements; then we source, interview, credential, and reference-check candidates and present a vetted shortlist. Your team makes the final call, and we stay involved through onboarding and the life of the placement.",
      },
      {
        q: "What does a related-services provider do?",
        a: "Related services are the supports IDEA requires so a student can benefit from special education — speech-language therapy, occupational therapy, physical therapy, psychological services, and similar disciplines. Providers deliver the service minutes written into each student's IEP, conduct evaluations on legal timelines, and document everything, typically across a caseload that spans one or more buildings.",
      },
      {
        q: "What is the difference between push-in and pull-out services?",
        a: "Push-in means the clinician delivers services inside the classroom, working with the student in the context of regular instruction. Pull-out means the student leaves class for a therapy space for their session. The IEP team chooses the model per student; many caseloads mix both, which is part of why school-based scheduling is its own skill.",
      },
    ],
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "School-Based Behavioral Health Staffing", slug: "school-based-behavioral-health-staffing" },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
    ],
  },
  {
    slug: "school-based-behavioral-health-staffing",
    eyebrow: "Education staffing",
    h1: "School-Based Behavioral Health Staffing",
    metaTitle: "School-Based Behavioral Health Staffing",
    metaDescription:
      "Focused Staffing Group places BCBAs, RBTs, and behavior technicians in schools — certification-verified, clearance-complete, and recruited into an exclusive one-client-per-region pipeline.",
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
    ],
  },
  {
    slug: "education-staffing-rfp-experience",
    eyebrow: "Education staffing",
    h1: "Education Staffing RFP Experience",
    metaTitle: "Education Staffing RFP & Contract Experience",
    metaDescription:
      "Evaluating education staffing vendors? FSG replaced incumbent agencies at Odyssey Public Charter School and filled 120+ roles — verifiable outcomes, named references, one client per region.",
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
    ],
    related: [
      { label: "School District Staffing Vendor", slug: "school-district-staffing-vendor" },
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
      "Focused Staffing Group is headquartered in Wayne, PA and staffs Pennsylvania schools with Act 34/151/114-cleared teachers, paras, and clinicians. One client per region.",
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
    faqs: [
      {
        q: "Where in Pennsylvania does FSG staff schools?",
        a: "From our Wayne, PA headquarters we support the Philadelphia region, Main Line, Montgomery County, Delaware County, Bucks County, Chester County, the Lehigh Valley, and districts further out — Chambersburg Area SD in south-central PA is a client.",
      },
      {
        q: "Do your candidates arrive with PA clearances complete?",
        a: "Yes. Every candidate we present has the Act 34 criminal history clearance, Act 151 child abuse clearance, and Act 114 FBI fingerprinting complete and tracked in our credentialing system, along with certification verification, TB test, and vaccination documentation.",
      },
      {
        q: "Will you also staff the district next to ours?",
        a: "No. We work with one client per region, so if you sign with us for your area of Pennsylvania, we will not supply a competing school, and the local candidates we recruit go only to you.",
      },
      {
        q: "How fast can you fill PA roles?",
        a: "Because clearances and certifications are handled up front, our typical time-to-hire runs roughly half the norm. Certified special education teachers have been placed within two weeks in past engagements; we quote realistic timelines per role on the discovery call.",
      },
      {
        q: "What does it cost to permanently hire an FSG placement?",
        a: "Nothing beyond the placement — temp-to-perm carries no conversion fee. Evaluate the person in your building first, then hire them without a buyout.",
      },
      {
        q: "Do you handle day-to-day substitutes in Pennsylvania?",
        a: "Yes. Our subs are paid weekly on Fridays via direct deposit or Cash App and pick up or swap shifts on a mobile app. That model produced a 95% daily fill rate at Odyssey Public Charter School, a 40% improvement over the prior provider.",
      },
      {
        q: "Do paraprofessionals need certification in Pennsylvania?",
        a: "Most para roles do not require a state teaching certificate. Under ESSA, however, paraprofessionals in Title I programs must meet qualification standards — a high school diploma plus 48 college credits, an associate degree, or a passing score on a local assessment. And every school employee in Pennsylvania, paras included, needs the Act 34, Act 151, and Act 114 clearances.",
      },
      {
        q: "What clearances does Pennsylvania require for school staff?",
        a: "Three: the Act 34 Pennsylvania State Police criminal history check, the Act 151 child abuse clearance, and the Act 114 FBI fingerprint-based background check. They apply to everyone working in a school — teachers, paras, substitutes, support staff — and must be renewed on the state's required cycle, which is why our credentialing system tracks expiration dates continuously.",
      },
    ],
    quote: {
      text: "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
      name: "Zavia Herring",
      role: "Director of HR, Renaissance Academy Charter School",
    },
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
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
      "Focused Staffing Group staffs New Jersey schools with cleared, certification-verified teachers, paraprofessionals, and clinicians from its Wayne, PA headquarters — one client per region.",
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
    faqs: [
      {
        q: "Does FSG staff New Jersey schools?",
        a: "Yes. New Jersey is part of our core PA/NJ/DE/MD footprint, staffed from our headquarters in Wayne, PA — close enough that we can be in your district in person. We have staffed schools in this region for 12 years.",
      },
      {
        q: "Do candidates come with New Jersey clearances done?",
        a: "Yes. Our credentialing system completes and tracks New Jersey's required clearances and background checks — the NJ equivalents of Pennsylvania's Acts 34, 151, and 114 — plus certification verification, TB test, and vaccination documentation, before any candidate reaches your shortlist.",
      },
      {
        q: "Will you staff the district competing with ours?",
        a: "No. We work with one client per region. Sign with us for your area of New Jersey and the candidates we recruit locally are presented only to you — we will not supply a neighboring competitor.",
      },
      {
        q: "How quickly can you fill our openings?",
        a: "Automated credentialing cuts typical time-to-hire roughly in half because paperwork is finished before interviews begin. Certified special education teachers have been placed within two weeks in past engagements; we quote per-role timelines on the free discovery call.",
      },
      {
        q: "What happens if we want to hire a placement permanently?",
        a: "You hire them, with no conversion fee. Every FSG placement is temp-to-perm at no cost, so evaluating a teacher or clinician in your building carries no buyout risk.",
      },
      {
        q: "Do you cover both daily subs and long-term roles?",
        a: "Yes. Long-term roles run through the vetted-shortlist process; daily coverage runs on our sub model — weekly Friday pay and a mobile shift app — which held a 95% fill rate at our flagship partner school, Odyssey Public Charter.",
      },
      {
        q: "What clearances do New Jersey school staff need?",
        a: "New Jersey requires state-mandated criminal history background checks to clear before anyone works in a school, alongside any district-level requirements. Certificated roles additionally need New Jersey Department of Education certification for the position. Our credentialing system completes and tracks all of it before a candidate reaches your shortlist.",
      },
      {
        q: "Which roles run shortest in New Jersey schools?",
        a: "The same three categories that dominate vacancy lists across the region: certified special education teachers, related-services clinicians like SLPs and OTs, and day-to-day substitutes. New Jersey's density of small districts sharpens the competition — the school recruiting against you is often within walking distance — which is exactly the problem our one-client-per-region model addresses.",
      },
    ],
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
      "Focused Staffing Group staffs Maryland schools with cleared, certification-verified special education teachers, paraprofessionals, and clinicians — one client per region, temp-to-perm at no cost.",
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
    faqs: [
      {
        q: "Does FSG staff Maryland schools?",
        a: "Yes. Maryland is part of our core PA/NJ/DE/MD footprint, served from our Wayne, Pennsylvania headquarters. We have staffed schools in this region for 12 years, with special education as the deepest specialty.",
      },
      {
        q: "How fast can you place a certified special education teacher?",
        a: "In past engagements we have placed certified special education teachers within two weeks, and our automated credentialing cuts typical time-to-hire roughly in half. We give a realistic per-role timeline on the free 30-minute discovery call rather than promising days.",
      },
      {
        q: "Do candidates arrive with Maryland clearances complete?",
        a: "Yes. Our credentialing system completes and tracks Maryland's required clearances and background checks — the state's equivalents of Pennsylvania's Acts 34, 151, and 114 — plus certification verification, TB test, and vaccination documentation, before you meet anyone.",
      },
      {
        q: "Will you also staff a competing Maryland district?",
        a: "No. One client per region is the model: the candidates we recruit in your area are presented only to you, and we will not supply a neighboring competitor from your pipeline.",
      },
      {
        q: "What does temp-to-perm cost?",
        a: "Nothing beyond the placement. Every engagement is temp-to-perm at no cost — evaluate the professional in your building, and if you hire them permanently there is no conversion fee.",
      },
      {
        q: "Do you handle daily substitutes as well as long-term special education roles?",
        a: "Yes, both. Long-term roles run through our vetted-shortlist process; daily coverage uses our sub model — weekly Friday pay, direct deposit or Cash App, and a mobile app for picking up and swapping shifts — which held a 95% daily fill rate at Odyssey Public Charter School.",
      },
      {
        q: "Does Maryland require special certification to teach special education?",
        a: "Yes. Special education teachers need certification in special education from the Maryland State Department of Education for the appropriate grade band, and related-services clinicians need Maryland licensure or certification in their discipline. We verify certification with the state for the specific role rather than accepting what a résumé claims.",
      },
      {
        q: "What background checks do Maryland school staff need?",
        a: "Maryland requires fingerprint-based criminal background checks and child-protective screening to clear before anyone works in a school, and districts may layer their own requirements on top. Our credentialing system completes the state's requirements and tracks each document continuously so nothing lapses mid-year.",
      },
    ],
    related: [
      { label: "Special Education Staffing", slug: "special-education-staffing" },
      { label: "Pennsylvania Education Staffing", slug: "pennsylvania-education-staffing" },
      { label: "New Jersey Education Staffing", slug: "new-jersey-education-staffing" },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}
