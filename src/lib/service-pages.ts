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
      "Special Education Staffing for School Districts with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
    hero: "Special Education Staffing for School Districts with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        body: "A special education teacher's day is organized around the IEP — the legal document that defines what each student is owed. That means delivering specially designed instruction, adapting general-education curriculum, writing and revising IEPs, collecting progress-monitoring data, sitting in IEP meetings with parents and administrators, and directing the paraprofessionals assigned to their students. The teaching is the visible part; the caseload management behind it is what the job actually turns on.\n\nSchools deploy special education staff across very different settings. Self-contained classrooms serve students who need a specialized setting for most or all of the day, with low ratios and multiple adults. Resource rooms serve students pulled from general education for part of the day for targeted instruction. Co-taught inclusion classrooms pair a special education teacher with a general educator in the same room. Around the teachers sit paraprofessionals on 1:1 and classroom assignments, and related service providers — SLPs, OTs, PTs, school psychologists — carrying therapy and evaluation caseloads across buildings.\n\nThe difference between a strong special educator and a body in the seat is not subtle. The strong one produces timely IEP documentation aligned with the assignment, collects data consistently instead of reconstructing it before meetings, implements behavior plans as written, and keeps paras and parents pulling in the same direction. The weak one is compliant on paper and absent everywhere it counts.",
      },
      {
        heading: "What we screen for in special education candidates",
        body: "Our screening for special education roles probes the parts of the job a résumé hides: real IEP writing and meeting experience — not attendance, authorship; behavior-plan implementation, including what the candidate does when the plan stops working; co-teaching history and how they share a room with a general educator; and the data-collection habits that separate defensible progress monitoring from guesswork. For candidates who will direct paraprofessionals, we ask how they train and manage other adults, because in a self-contained room that skill is half the job.\n\nThe process was designed by our founder, Robert Flom, a former K-12 teacher — which is why the interview sounds like a case review, not a personality quiz.",
      },
      {
        heading: "Vetting run by someone who has taught the job",
        body: "Focused Staffing Group was founded by Robert Flom, a former K-12 teacher. That changes how candidates get screened. A recruiter who has never run a classroom reads a résumé; a former teacher asks how a candidate handles an IEP meeting that runs long, a self-contained room with two staff out, or a parent call that starts badly. Candidates who cannot answer those questions do not reach your shortlist.\n\nWe have spent 12 years staffing K-12 schools from our headquarters in Wayne, Pennsylvania, serving districts across PA, DE, NJ, and MD as well as clients nationally. Our special education placements include Christina School District, Chester Community Charter, Breakthrough Public Schools, Leadership Public Schools, and Charlotte-Mecklenburg Schools.\n\nWe screen for role fit and coordinate the required credentials, background checks, references, and assignment documentation. Candidate presentation and clearance to start are separate stages.",
      },
      {
        heading: "A search built around your requirements",
        body: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
    ],
    faqs: [
      {
        q: "How fast can FSG fill a special education teacher opening?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        q: "What does temp-to-perm cost?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "Will FSG also staff a competing district near us?",
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "What documentation is coordinated before a start?",
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
      {
        label: "School District Staffing Vendor",
        slug: "school-district-staffing-vendor",
      },
      {
        label: "Philadelphia Education Staffing",
        slug: "philadelphia-education-staffing",
      },
    ],
  },
  {
    slug: "paraprofessional-staffing",
    eyebrow: "Education staffing",
    h1: "Paraprofessional Staffing for K-12 Schools",
    metaTitle: "Paraprofessional Staffing for K-12 Schools",
    metaDescription:
      "Paraprofessionals, 1:1 aides, and classroom support for K-12 schools — weekly pay and a shift app that held a 95% daily fill rate at one partner school.",
    hero: "Paraprofessional Staffing for K-12 Schools with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading:
          "Vetted like they will sit next to a student — because they will",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
    ],
    faqs: [
      {
        q: "Can FSG handle urgent paraprofessional and aide openings?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        q: "Do you place 1:1 aides?",
        a: "Yes. We staff 1:1 aides, classroom aides, special education aides, and behavioral support aides, and we skills-screen each candidate against the specific assignment rather than dropping a generic para into a specialized seat.",
      },
      {
        q: "What does it cost to hire one of your paras permanently?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "Will you also staff the school down the road?",
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
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
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
      {
        label: "School-Based Behavioral Health Staffing",
        slug: "school-based-behavioral-health-staffing",
      },
    ],
  },
  {
    slug: "school-district-staffing-vendor",
    eyebrow: "Education staffing",
    h1: "School District Staffing Vendor",
    metaTitle: "School District Staffing Vendor",
    metaDescription:
      "School District Staffing Vendor with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
    hero: "When Odyssey Public Charter School's contracted agencies couldn't fill their openings, FSG stepped in and filled 120+ roles across 13+ role types. That is the standard we are hired against.",
    photo: PHOTOS[2],
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading: "A search built around your requirements",
        body: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
    ],
    faqs: [
      {
        q: "What makes FSG different from a general staffing agency?",
        a: "Three things you can check: we work with one client per region so we never staff your competitor; our founder is a former K-12 teacher, which shapes how candidates are vetted; and our track record is specific — 120+ roles filled at Odyssey Public Charter School across 13+ role types after the incumbent agencies could not deliver.",
      },
      {
        q: "How is FSG paid, and what does temp-to-perm cost?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "Will you staff a neighboring or competing district?",
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "How fast can you fill our openings?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
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
      {
        label: "Education Staffing RFP Experience",
        slug: "education-staffing-rfp-experience",
      },
      {
        label: "Education Staffing Agency Cost",
        slug: "education-staffing-agency-cost",
      },
      {
        label: "Delaware Education Staffing",
        slug: "delaware-education-staffing",
      },
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
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
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "What does temp-to-perm cost us?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "How quickly can you move?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
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
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      {
        label: "Education Staffing Agency Cost",
        slug: "education-staffing-agency-cost",
      },
    ],
  },
  {
    slug: "staffing-a-multi-site-charter-network",
    eyebrow: "Charter networks",
    h1: "Staffing a Multi-Site Charter Network",
    metaTitle: "Staffing a Multi-Site Charter Network",
    metaDescription:
      "How multi-site charter networks staff special education across every campus — LEA compliance, credentialing at scale, and FocusedEDU's approach.",
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
    richHtml:
      '<p>A single-school charter operator has one building&#39;s worth of special-education compliance to manage. A multi-site network has that same compliance obligation multiplied by every campus it operates — and, depending on the state, multiplied again by however each campus&#39;s legal status is defined. Charter networks are FocusedEDU&#39;s highest-priority partner segment : we staff special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  for charter operators across Pennsylvania, New Jersey, Delaware, Maryland, DC, New York, and a secondary footprint in North Carolina, Texas, and California . This page lays out why network-scale staffing is a genuinely different operational problem than single-school staffing, what the law actually requires at each campus, and the playbook we run to keep every site covered.</p>\n<h2 id="why-staffing-a-network-is-a-different-problem-than-staffing-">Why staffing a network is a different problem than staffing one school</h2>\n<p>The first thing that makes multi-site charter staffing harder than district staffing is that &quot;the district&quot; isn&#39;t a fixed reference point — a charter network&#39;s legal structure varies not just state to state, but sometimes school to school within the same network. As the National Association of Charter School Authorizers puts it: &quot;Individual state charter laws typically determine whether a charter school is its own LEA or part of a larger LEA. To further complicate matters, a few states, such as New York and New Hampshire, use a more complex arrangement where charter schools are their own LEA for some purposes and part of an LEA for others&quot; <span class="cite">(source: NACSA, Special Education Toolkit: Guidance for Charter School Authorizers, June 2017, <a href="https://qualitycharters.org/wp-content/uploads/2017/10/Special-Ed-Toolkit_5.22.17.pdf">https://qualitycharters.org/wp-content/uploads/2017/10/Special-Ed-Toolkit_5.22.17.pdf</a>)</span>. That single fact reshapes how a network has to think about staffing: a network operating in New York and New Jersey isn&#39;t running one compliance model twice — it&#39;s running two different legal relationships to special-education obligations, on top of two different state clearance regimes, for what might otherwise look like the same job posting.</p>\n<p>This is happening at real scale. Charter schools serve nearly 4 million students nationally — 7.8%, or roughly 1 in 12 public school students — and enrollment grew more than 14.69%, or about 492,000 additional students, between 2019-20 and 2024-25 <span class="cite">(source: National Alliance for Public Charter Schools, Charter School Data Digest, <a href="https://data.publiccharters.org/1-how-many-charter-schools-and-students-are-there/">https://data.publiccharters.org/1-how-many-charter-schools-and-students-are-there/</a>)</span>. Growth of that kind means more networks are crossing from single-site to multi-site, and more multi-site networks are crossing state lines, faster than most of their internal HR infrastructure was built to handle.</p>\n<h2 id="the-compliance-stakes-are-per-campus-not-network-wide">The compliance stakes are per-campus, not network-wide</h2>\n<p>When a state grants a charter network independent LEA status, that status comes with the full weight of a district&#39;s obligations at every site: NACSA describes independent-LEA charter operators as enjoying &quot;more freedom in areas such as curriculum design, hiring, and program implementation, but... responsible for the full continuum of services for students with disabilities analogous to a multi-school district&quot; <span class="cite">(source: NACSA Toolkit)</span>. Federal law backs that up directly — personnel providing special education and related services must meet &quot;any State-approved or State-recognized certification, licensing, registration, or other comparable requirements that apply to the professional discipline,&quot; with no exception for emergency or provisional waivers <a class="cite" href="https://www.law.cornell.edu/cfr/text/34/300.156" rel="noopener nofollow" target="_blank">34 CFR 300.156</a>. There&#39;s no network-level shortcut around that requirement — it applies at the campus where the student sits.</p>\n<p>Washington, DC is a useful illustration of how far this decentralization goes: the DC Public Charter School Board, &quot;an independent DC government agency and the sole authorizer of public charter schools&quot; in the city, oversees 133 public charter schools managed by 66 separate nonprofit organizations, each operating as its own LEA <span class="cite">(source: DC PCSB, Public Charter School Data, July 2025, <a href="https://dcpcsb.org/about-us/public-charter-school-data">https://dcpcsb.org/about-us/public-charter-school-data</a>)</span>. A network running multiple DC campuses under one brand can still be managing several distinct LEA relationships depending on how its charter was structured — special-education compliance doesn&#39;t roll up automatically just because the schools share a name and a central office.</p>\n<h2 id="the-staffing-math-behind-the-shortage">The staffing math behind the shortage</h2>\n<p>Every campus in a network is competing for the same shrinking pool of certified specialists that every district around it is also competing for. Nationally, 51% of public schools reported needing to fill a special-education position before the start of the next school year — the highest of any teacher specialty <span class="cite">(source: EdResearch for Action, &quot;Addressing Special Education Staffing Shortages,&quot; Sept. 2024, <a href="https://edresearchforaction.org/research-briefs/addressing-special-education-staffing-shortages-strategies-for-schools/">https://edresearchforaction.org/research-briefs/addressing-special-education-staffing-shortages-strategies-for-schools/</a>)</span>. A 2026 industry survey found 90.4% of district and network leaders reporting increased demand for specialized staff over the prior three years, and — specific to multi-site operations — nearly a quarter of respondents (24.6%) named &quot;coordinating schedules and caseloads across schools&quot; as a top operational struggle <span class="cite">(source: eSchool News, &quot;Most districts still struggle to fill specialist roles,&quot; July 7, 2026, citing the BlazerWorks 2026 Education Staffing Industry Report, <a href="https://www.eschoolnews.com/educational-leadership/2026/07/07/most-districts-still-struggle-to-fill-specialist-roles/">https://www.eschoolnews.com/educational-leadership/2026/07/07/most-districts-still-struggle-to-fill-specialist-roles/</a>)</span>.</p>\n<p>Charter-specific research adds a retention dimension on top of the hiring problem. Special-education teacher turnover has an outsized negative effect on outcomes specifically for students with disabilities, and research on charter staffing has found that teachers in centrally managed, education-management-organization-run charter schools &quot;tend to have significantly less decision-making authority in domains such as human resources, curriculum, instruction, assessment, and professional development&quot; — with reduced decision-making authority itself associated with higher turnover odds <span class="cite">(source: K-12 Dive, &quot;Special educator shortages demand tailored solutions, study says,&quot; <a href="https://www.k12dive.com/news/special-education-attrition-brookings-targeted-solutions/805609/">https://www.k12dive.com/news/special-education-attrition-brookings-targeted-solutions/805609/</a>)</span>. For a network, that means the hiring problem and the retention problem are connected: a rigid, centralized staffing process that doesn&#39;t account for each campus&#39;s actual conditions can make the turnover side of the equation worse, not better.</p>\n<h2 id="an-operational-playbook-for-staffing-across-campuses">An operational playbook for staffing across campuses</h2>\n<p>Five things matter most for keeping every campus in a network covered and compliant at the same time:</p>\n<ol>\n<li><strong>Treat credentialing as state-by-state, not network-wide.</strong> A candidate cleared for one state&#39;s licensure and background-check regime isn&#39;t automatically cleared for another — a network spanning, say, New Jersey and New York needs every candidate&#39;s file built to the specific state where that campus sits.</li>\n<li><strong>Finish the compliance file before a campus principal ever sees a resume.</strong> Site leaders shouldn&#39;t be the ones chasing down a candidate&#39;s background clearance or license verification — that has to be complete before shortlist, at every campus, every time .</li>\n<li><strong>Specialize sourcing by role, not by network size.</strong> Special-education teachers, SLPs, OTs, PTs, school psychologists, and paraprofessionals are each their own hard-to-fill labor market — treating a multi-campus vacancy list as one undifferentiated hiring pool slows every site down .</li>\n<li><strong>Source passively, not just through postings.</strong> Most licensed special-education and related-service professionals aren&#39;t actively browsing job boards; reaching them takes direct outbound recruiting, which matters even more when a network needs to fill the same kind of role at three or four campuses simultaneously .</li>\n<li><strong>Build one long-term partner relationship instead of restarting the search at every campus.</strong> A staffing partner that already understands a network&#39;s authorizer relationships, state footprint, and role mix across all of its schools moves faster than one starting from zero at each site .</li>\n</ol>\n<h2 id="what-focusededu-does-for-multi-site-charter-networks">What FocusedEDU does for multi-site charter networks</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<p>FocusedEDU has staffed public charter schools directly across multiple states — see our case studies: <a href="https://www.focusedu-staffing.com/case-studies/odyssey-charter-school">Odyssey Public Charter School — Case Study</a>, <a href="https://www.focusedu-staffing.com/case-studies/idea-public-charter-school">IDEA Public Charter School — Case Study</a>, <a href="https://www.focusedu-staffing.com/case-studies/cesar-chavez-public-charter-school">Cesar Chavez Public Charter School — Case Study</a>, and <a href="https://www.focusedu-staffing.com/case-studies/first-philadelphia-public-charter-school">Every special-education teacher we placed stayed</a> (First Philadelphia Charter).</p>\n',
    faqs: [
      {
        q: "Is every campus in a charter network legally responsible for its own special-education compliance?",
        a: "It depends on the network's LEA status in that state — some networks are one independent LEA covering every campus, some are part of a larger authorizing LEA, and a few states (New York among them) split the difference, treating a charter as its own LEA for some purposes and part of an LEA for others (source: NACSA Special Education Toolkit, June 2017). Either way, federal personnel-qualification requirements apply at the campus level, with no network-wide shortcut (source: 34 CFR 300.156).",
      },
      {
        q: "What's the hardest part of staffing special education across multiple charter campuses?",
        a: "District and network leaders themselves point to coordinating schedules and caseloads across schools as one of their single biggest operational struggles, on top of a national shortage that has 51% of public schools needing to fill a special-education position before the next school year even starts (source: eSchool News/BlazerWorks 2026; EdResearch for Action, Sept. 2024).",
      },
      {
        q: "Does a network need a different staffing approach for each state it operates in?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Why does charter teacher turnover matter more for special education specifically?",
        a: "Research shows special-education teacher turnover has an outsized negative effect on outcomes for students with disabilities compared to general-education turnover, and charter schools with more centralized, less autonomous hiring and decision-making structures tend to see higher turnover (source: K-12 Dive, citing SPARC/CALDER Center research).",
      },
      {
        q: "Does FocusedEDU work with charter networks that operate across more than one state?",
        a: "Yes — our core markets span Pennsylvania, New Jersey, Delaware, Maryland, DC, and New York, with a secondary footprint in North Carolina, Texas, and California, so a network operating across several of those states can work with one staffing partner rather than a different vendor per state .",
      },
    ],
    related: [
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      {
        label: "Education Staffing Agency Cost",
        slug: "education-staffing-agency-cost",
      },
    ],
  },
  {
    slug: "related-services-staffing",
    eyebrow: "Education staffing",
    h1: "Related Services Staffing for Schools",
    metaTitle: "Related Services Staffing for Schools",
    metaDescription:
      "SLPs, OTs, PTs, school psychologists, and BCBAs for schools — license-verified, clearance-complete, and never shared with a competing district.",
    hero: "Related Services Staffing for Schools with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
    photo: PHOTOS[0],
    roles: [
      "SLPs",
      "OTs",
      "PTs",
      "School psychologists",
      "BCBAs",
      "RBTs",
      "Behavior support staff",
    ],
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        body: '"Related services" is IDEA\'s term for the specialized support a student needs to benefit from special education, and each discipline covers distinct ground. SLPs treat articulation, language, fluency, and communication — including AAC for students who do not speak — and run the speech and language evaluations that feed eligibility decisions. OTs work fine motor skills, sensory regulation, handwriting, and the self-care skills that let a student function in a classroom. PTs handle gross motor development, mobility, positioning, and equipment. School psychologists carry the evaluation load — initial evaluations, triennial reevaluations, eligibility determinations — plus counseling minutes and crisis response.\n\nDistricts deploy these clinicians on caseloads that often span multiple buildings, delivering services push-in (in the classroom, alongside instruction) or pull-out (in a therapy space). The constraint that shapes everything: every IEP mandates specific service minutes, and those minutes are a legal obligation. Missed sessions become compensatory services; evaluations run on statutory timelines that do not flex for staffing gaps.\n\nA strong clinician manages the caseload as rigorously as the therapy — documentation current, minutes delivered and logged, evaluation reports that hold up in an eligibility meeting, and working relationships with the teachers whose students they share. A body in the seat delivers sessions and leaves the district exposed on everything else.',
      },
      {
        heading: "What we screen for in a related-services clinician",
        body: "Beyond verifying state licensure for the specific discipline, our screen probes the operational side of school-based practice: how the candidate has managed a multi-building caseload, whether their evaluation reports have been tested in eligibility meetings, how they document service minutes, and whether they are familiar with Medicaid billing documentation — a real revenue line for districts that bill, and a habit clinic-only candidates often lack. We also ask about schedule reliability, because a clinician who misses sessions creates compensatory-service liability, not just inconvenience.\n\nThe school-first framing comes from our founder, Robert Flom, a former K-12 teacher who has sat on the school side of those IEP tables.",
      },
      {
        heading: "A search built around your requirements",
        body: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
    ],
    richHtml:
      '<p>When a speech-language pathologist, occupational therapist, physical therapist, or school psychologist position sits open, it isn&#39;t a scheduling inconvenience — it&#39;s a federal compliance exposure with a specific student&#39;s name attached to it. FocusedEDU staffs SLPs, OTs, PTs, school psychologists, and BCBAs/RBTs for school-based programs  for districts, charter networks, special-education schools, therapeutic and private special-education schools, and IUs/ESAs  across our core markets of Pennsylvania, New Jersey, Delaware, Maryland, DC, and New York, with a secondary footprint in North Carolina, Texas, and California . Here&#39;s the legal mandate behind related services, how big the staffing gap actually is, what credentialing law requires, and how agency staffing closes the gap without cutting the compliance corner.</p>\n<h2 id="related-services-are-a-legal-mandate-not-an-add-on">Related services are a legal mandate, not an add-on</h2>\n<p>Under the Individuals with Disabilities Education Act, &quot;related services&quot; is a defined federal term with a specific list attached to it. The regulation states that related services means &quot;transportation and such developmental, corrective, and other supportive services as are required to assist a child with a disability to benefit from special education,&quot; and names speech-language pathology, occupational therapy, physical therapy, psychological services, counseling services, social work services, and school health and nurse services explicitly within that definition <a class="cite" href="https://www.law.cornell.edu/cfr/text/34/300.34" rel="noopener nofollow" target="_blank">34 CFR 300.34</a>. Once a related service is written into a student&#39;s IEP, it isn&#39;t optional programming — it&#39;s a legally binding component of that student&#39;s Free Appropriate Public Education. A vacant SLP or OT position doesn&#39;t just create a scheduling problem; it creates a documented service gap against a legal document, with compensatory-services exposure sitting behind it.</p>\n<h2 id="how-big-the-gap-actually-is">How big the gap actually is</h2>\n<p>The scale of unmet related-service need is national and persistent. IDEA Part B served 7,525,941 children and students ages 3-21 in the 2022-23 school year, and 1,429,556 of them were served specifically under the speech-or-language impairment category — before counting every other student whose IEP calls for OT, PT, or psychological services on top of a different primary disability <span class="cite">(source: NCES Digest of Education Statistics 2023, Table 204.50, <a href="https://nces.ed.gov/programs/digest/d23/tables/dt23_204.50.asp">https://nces.ed.gov/programs/digest/d23/tables/dt23_204.50.asp</a>)</span>. School psychology staffing has fallen the furthest behind its own professional standard: the National Association of School Psychologists&#39; 2020 Professional Standards recommend one school psychologist per 500 students, but the actual national ratio for the 2024-25 school year was 1,071 students per school psychologist — more than double the recommended caseload <span class="cite">(source: NASP, Shortages Dashboard &amp; Workforce Information, <a href="https://www.nasponline.org/about-school-psychology/shortages-dashboard-and-workforce-information">https://www.nasponline.org/about-school-psychology/shortages-dashboard-and-workforce-information</a>)</span>.</p>\n<p>District-reported hiring data tells the same story from the buyer&#39;s side. A September 2024 research brief found that &quot;51% of public schools nationwide reported that they would need to fill positions in Special Education before the start of the next school year, the most of any teacher specialty&quot; <span class="cite">(source: EdResearch for Action, &quot;Addressing Special Education Staffing Shortages: Strategies for Schools,&quot; <a href="https://edresearchforaction.org/research-briefs/addressing-special-education-staffing-shortages-strategies-for-schools/">https://edresearchforaction.org/research-briefs/addressing-special-education-staffing-shortages-strategies-for-schools/</a>)</span>. More recent survey data narrows in on related-service roles specifically: in a 2026 industry survey, district leaders named school psychologists (15.6%) and SLP assistants (15.2%) among their hardest-to-fill positions, and nearly a quarter of respondents — 24.6% — said their top operational struggle was &quot;coordinating schedules and caseloads across schools,&quot; the defining logistical challenge of itinerant related-service staffing <span class="cite">(source: eSchool News, &quot;Most districts still struggle to fill specialist roles,&quot; July 7, 2026, citing the BlazerWorks 2026 Education Staffing Industry Report, <a href="https://www.eschoolnews.com/educational-leadership/2026/07/07/most-districts-still-struggle-to-fill-specialist-roles/">https://www.eschoolnews.com/educational-leadership/2026/07/07/most-districts-still-struggle-to-fill-specialist-roles/</a>)</span>. The same survey found 90.4% of district leaders reporting increased demand for specialized staff over the prior three years, with 28.6% naming &quot;hiring qualified specialists&quot; as their single biggest challenge <span class="cite">(source: same article)</span>.</p>\n<h2 id="what-federal-law-requires-of-the-people-filling-these-roles">What federal law requires of the people filling these roles</h2>\n<p>IDEA doesn&#39;t just require that related services be delivered — it specifies who&#39;s qualified to deliver them. Under 34 CFR 300.156, the state education agency &quot;must establish and maintain qualifications to ensure that personnel necessary to carry out the purposes of this part are appropriately and adequately prepared and trained,&quot; with related-services personnel qualifications required to be &quot;consistent with any State-approved or State-recognized certification, licensing, registration, or other comparable requirements that apply to the professional discipline&quot; — meaning an SLP, OT, PT, or school psychologist has to hold whatever license or state credential that specific discipline requires in that specific state, not a generic education credential <a class="cite" href="https://www.law.cornell.edu/cfr/text/34/300.156" rel="noopener nofollow" target="_blank">34 CFR 300.156</a>. The same regulation draws a hard line against shortcuts: qualifying personnel must &quot;not have had certification or licensure requirements waived on an emergency, temporary, or provisional basis&quot; <span class="cite">(source: same regulation)</span>. On top of the discipline-specific license, every one of our core-market states layers its own child-safety clearance requirement on top — Pennsylvania&#39;s Act 34/151/114, New Jersey&#39;s Criminal History Record Check, New York&#39;s TEACH-based fingerprint clearance, Delaware&#39;s 14 DE Admin. Code §745, Maryland&#39;s Education Article §6-113.2, and DC&#39;s Title 4 Chapter 15 background check all apply to related-service providers exactly as they apply to teachers.</p>\n<h2 id="how-agency-staffing-keeps-related-services-compliant">How agency staffing keeps related services compliant</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<h2 id="what-focusededu-does">What FocusedEDU does</h2>\n<p>FocusedEDU staffs SLPs, OTs, PTs, school psychologists, and BCBAs/RBTs for school-based programs, alongside special-education teachers, paraprofessionals, and school nurses, for districts, charter networks, special-education schools, therapeutic and private special-education schools, and IUs/ESAs . Charter networks are our highest-priority partner segment . We work across our core markets — Pennsylvania, New Jersey, Delaware, Maryland, DC, and New York, with a secondary footprint in North Carolina, Texas, and California  — as a long-term staffing partner, not a single-placement vendor .</p>\n',
    faqs: [
      {
        q: "Is a district legally required to fill a related-services vacancy, or can it wait until next semester?",
        a: "If a related service is written into a student's IEP, it's a component of that student's legally mandated Free Appropriate Public Education under IDEA — an unfilled vacancy against that IEP is a documented compliance gap, not a scheduling backlog (source: 34 CFR 300.34).",
      },
      {
        q: "What credentials does an SLP, OT, PT, or school psychologist need to work in a school?",
        a: 'Federal law requires related-services personnel to meet "any State-approved or State-recognized certification, licensing, registration, or other comparable requirements that apply to the professional discipline," and specifically bars emergency, temporary, or provisional waivers of that requirement (source: 34 CFR 300.156). In practice, that means a state-specific professional license for the discipline, plus that state\'s child-safety clearance.',
      },
      {
        q: "Why are school psychologist and SLP roles so hard to fill through a normal job posting?",
        a: "Nationally, the school-psychologist caseload already runs more than double the recommended ratio (source: NASP Shortages Dashboard), and district leaders report that coordinating schedules and caseloads for itinerant specialists across multiple schools is one of their single biggest operational struggles (source: eSchool News/BlazerWorks 2026). FocusedEDU sources these roles through direct outbound recruiting specifically because posting-and-waiting doesn't reach most licensed clinicians in these disciplines .",
      },
      {
        q: "How do you coordinate screening and pre-start documentation?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Does FocusedEDU staff related services for charter networks specifically?",
        a: "Yes — charter networks are our highest-priority partner segment , and because every charter is typically its own compliance-bearing LEA, having related-services coverage already cleared and credentialed matters even more directly to a charter's own IDEA obligations.",
      },
    ],
    quote: {
      text: "Each one of these professionals is a pleasure to work with. They are always professional, friendly, and have our students' best interests at the forefront of their work.",
      name: "Tracy H. Foedisch",
      role: "Hiring & Support Manager, Hope Community Charter School (Camden, NJ)",
    },
    related: [
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      {
        label: "School-Based Behavioral Health Staffing",
        slug: "school-based-behavioral-health-staffing",
      },
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
      "School-Based Behavioral Health Staffing with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
    hero: "School-Based Behavioral Health Staffing with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
    photo: PHOTOS[1],
    roles: [
      "BCBAs",
      "RBTs",
      "Behavior technicians",
      "Behavioral support staff",
      "Paraprofessionals",
      "Related student-support roles",
    ],
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        heading: "A search built around your requirements",
        body: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        heading: "Staffing and conversion terms",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
    ],
    faqs: [
      {
        q: "Does FSG place BCBAs and RBTs in schools?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Will you also supply behavioral staff to the school competing with us?",
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "How quickly can you fill a behavioral role?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        q: "What do you verify on behavioral candidates?",
        a: "BCBA or RBT certification for the specific role, a full background check, the state-required clearances (PA Acts 34, 151, and 114 or your state's equivalents), TB test, vaccination documentation, references from prior schools and supervisors, and a skills screen.",
      },
      {
        q: "Can we hire a placed behavior tech permanently?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
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
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
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
      "Education Staffing RFP Experience with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
    hero: "If you are scoring staffing vendors, score us on the record: 120+ roles filled at Odyssey Public Charter School after the agencies under contract could not deliver, with named districts as references.",
    photo: PHOTOS[2],
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        heading: "What we screen for on contracted placements",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        heading: "Performance you can verify, not vendor promises",
        body: "Procurement teams read a lot of identical capability statements. Here is ours in checkable form. Odyssey Public Charter School in Wilmington, Delaware — 1,000+ K-8 students from five districts — had staffing agencies under contract that could not fill the openings. FSG stepped in and has since filled 120+ roles across 13+ distinct role types, from bus drivers to certified teachers, while sustaining a 95% day-to-day substitute fill rate, a 40% improvement over the previous provider. The client-attested case study is at /case-studies.\n\nOur reference list is public and specific: Christina School District, Charlotte-Mecklenburg Schools, Chambersburg Area SD, Chester Community Charter, Leadership Public Schools, Carmen Schools of Science & Tech, Breakthrough Public Schools, First PA, TRECA, and Odyssey Charter. We have also delivered engagements where 100% of open roles were filled with 100% candidate retention.",
      },
      {
        heading: "Compliance infrastructure, not compliance paperwork",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        heading: "Contract terms that favor the district",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
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
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "Will you hold contracts with competing districts in our region?",
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "How do we start a scope conversation?",
        a: "A free 30-minute discovery call. We review your role categories, compliance requirements, and timeline, and give you a straight answer on fit before you invest evaluation time.",
      },
      {
        q: "Who is the employer of record for contracted school staffing?",
        a: "The engagement agreement should specify the employment or contractor arrangement, payment responsibilities, required insurance, and each party’s obligations. Review the model for the role and location before an assignment begins.",
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
      {
        label: "School District Staffing Vendor",
        slug: "school-district-staffing-vendor",
      },
      {
        label: "Education Staffing Agency Cost",
        slug: "education-staffing-agency-cost",
      },
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      {
        label: "Pennsylvania Education Staffing",
        slug: "pennsylvania-education-staffing",
      },
    ],
  },
  {
    slug: "pennsylvania-education-staffing",
    eyebrow: "Education staffing · Pennsylvania",
    h1: "Pennsylvania Education Staffing",
    metaTitle: "Pennsylvania Education Staffing Agency",
    metaDescription:
      "Pennsylvania Education Staffing with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
    hero: "Pennsylvania Education Staffing with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
    ],
    richHtml:
      '<p>Pennsylvania superintendents, special education directors, and charter operations leads are all managing the same problem from different chairs: a certified special-education teacher or a related-service provider leaves mid-year, a compliance clock is already running against an IEP timeline, and the traditional route to a hire — post, wait, screen, clear, hope — takes longer than the vacancy can afford. FocusedEDU is a specialized K-12 staffing partner working across Pennsylvania districts, Intermediate Units, and charter networks, sourcing special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes . Charter networks are our highest-priority partner segment . This page lays out what&#39;s actually driving the shortage in Pennsylvania, what the state requires before anyone sets foot in a classroom, how the Commonwealth&#39;s Intermediate Unit system fits into staffing decisions, and which charter operators are building in the state today.</p>\n<h2 id="the-special-education-staffing-landscape-in-pennsylvania">The special-education staffing landscape in Pennsylvania</h2>\n<p>Special education is the single largest area of unfilled instructional need in the Commonwealth. In the Pennsylvania Department of Education&#39;s <em>Educator Workforce Report</em> (December 2025), the state&#39;s Bureau of Educator Effectiveness found that &quot;at the start of the 2024-25 school year, approximately half of local education agencies (LEA) reported more than 3,300 vacancies, with the highest numbers being in special education, school psychologist, elementary all levels, school nurses and math&quot; <span class="cite">(source: PA Department of Education, Educator Workforce Report, Dec. 2025, <a href="https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/educators/educator-workforce-strategy/2025%20pde%20educator%20workforce%20annual%20report-final.pdf">https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/educators/educator-workforce-strategy/2025%20pde%20educator%20workforce%20annual%20report-final.pdf</a>)</span>. Broken out by subject, Special Education Resource (PreK-12) alone carried 264 open positions — the single largest subject-area vacancy count PDE tracked that year — with Special Education Life Skills/Autistic/Multiple-Disability Support close behind at 224, and School Psychologist at 126 <span class="cite">(source: same report, Table 2)</span>. PDE&#39;s own state shortage-area designation for 2024-2025 lists Special Education PK-12 at 1,990 unfilled FTE positions, or 1.63% of all instructional FTEs statewide — the largest single-subject shortage category the state reports <span class="cite">(source: same report, Table 4)</span>.</p>\n<p>That pressure lands on top of real scale: 336,850 Pennsylvania students, or 20.1% of statewide enrollment, were identified as students with disabilities in 2023-24, with Specific Learning Disability, Other Health Impairment, Speech-or-Language Impairment, and Autism as the four largest categories <span class="cite">(source: Special Education in Pennsylvania 2023-2024 Data Book, PennData/PA State Data Center, March 2025, <a href="https://penndata.hbg.psu.edu/Portals/66/documents/SpecialEducationSummary/2023-2024_Special_Education_Data_Book.pdf">https://penndata.hbg.psu.edu/Portals/66/documents/SpecialEducationSummary/2023-2024_Special_Education_Data_Book.pdf</a>)</span>. Every one of those IEPs has to be staffed, on schedule, by someone who is actually cleared to be in the building.</p>\n<h2 id="clearances-pennsylvania-requires-before-anyone-works-in-a-sc">Clearances Pennsylvania requires before anyone works in a school</h2>\n<p>Pennsylvania law requires three separate background clearances for any employee, contractor, or independent contractor&#39;s employee who will have direct contact with children — all three have to be current and on file before a placement starts:</p>\n<ul>\n<li><strong>Act 34 — Pennsylvania Criminal History Record.</strong> Statewide criminal background check administered through the Pennsylvania Access to Criminal History (PATCH) system; the report must be &quot;no more than five (5) years old at the time of employment&quot; <span class="cite">(source: PA Department of Education, PATCH, <a href="https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/pennsylvania-access-to-criminal-history-patch">https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/pennsylvania-access-to-criminal-history-patch</a>)</span>.</li>\n<li><strong>Act 151 — Child Abuse History Clearance.</strong> Issued by the PA Department of Human Services, confirming the applicant has no substantiated child-abuse history on record <a class="cite" href="https://www.pa.gov/agencies/dhs/resources/keep-kids-safe/child-abuse-clearances/pa-child-abuse-history-clearance" rel="noopener nofollow" target="_blank">PA Department of Human Services</a>.</li>\n<li><strong>Act 114 — Federal (FBI) Criminal History Record Information.</strong> Fingerprint-based federal background check. As PDE states directly: &quot;As of April 1, 2007, Act 114 of 2006 has required that ALL prospective employees of public and private schools, including their independent contractors and their employees, but excluding employees who do not have direct contact with students, undergo background checks&quot; <span class="cite">(source: PA Department of Education, Federal CHRI, <a href="https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/background-checks">https://www.pa.gov/agencies/education/programs-and-services/educators/clearances/background-checks</a>)</span>.</li>\n</ul>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<h2 id="how-pennsylvania39s-intermediate-units-fit-into-staffing">How Pennsylvania&#39;s Intermediate Units fit into staffing</h2>\n<p>Pennsylvania organizes regional education services through 29 Intermediate Units (IUs), which PDE describes directly: &quot;Pennsylvania&#39;s 29 Intermediate Units (IUs) provide special education, professional development, and technical assistance services to school districts, charter schools, and private schools&quot; <span class="cite">(source: PA Department of Education, Types of Schools, <a href="https://www.pa.gov/agencies/education/resources/types-of-schools">https://www.pa.gov/agencies/education/resources/types-of-schools</a>)</span>. Statewide, PDE counts &quot;more than 1.7 million students in 500 school districts, 29 Intermediate Units, 174 charter schools, and multiple private schools&quot; <span class="cite">(source: PA Department of Education, Schools, <a href="https://www.pa.gov/agencies/education/programs-and-services/schools">https://www.pa.gov/agencies/education/programs-and-services/schools</a>)</span>. IUs themselves describe their role as covering &quot;special education, online learning programs and support... professional development for educators, administrative and purchasing consortia and much more&quot; <a class="cite" href="https://www.paiu.org/" rel="noopener nofollow" target="_blank">Pennsylvania Association of Intermediate Units</a>. In practice, that means an IU is frequently the entity actually delivering — or arranging — related services and specialized instruction for smaller districts that can&#39;t justify a full-time SLP, OT, PT, or school psychologist on their own staff, which is exactly the itinerant, multi-building need FocusedEDU&#39;s outbound-recruiting model is built to source for . Several IUs, including Lincoln IU 12, Carbon-Lehigh IU 21, and Bucks County IU 22, are named directly in PDE&#39;s own vacancy data as carrying some of the state&#39;s largest unfilled positions <span class="cite">(source: PA Department of Education, Educator Workforce Report, Table 3)</span>.</p>\n<h2 id="charter-networks-staffing-in-pennsylvania">Charter networks staffing in Pennsylvania</h2>\n<p>Philadelphia is home to one of the country&#39;s largest concentrations of standalone and multi-site charter operators, several of which run their own dedicated special-education programming:</p>\n<ul>\n<li><strong>Mastery Charter Schools</strong>, operating 11 elementary and 7 secondary schools across Philadelphia, runs a dedicated Specialized Services program covering Autistic Support, Life Skills Support, Multiple Disabilities Support, Emotional Support, Learning Support, Deaf/Hard of Hearing, Blind/Visually Impaired, Speech-Language Impairment, and related OT/PT/speech services <a class="cite" href="https://masterycharter.org" rel="noopener nofollow" target="_blank">Mastery Charter Schools</a>.</li>\n<li><strong>KIPP Philadelphia</strong> operates multiple K-12 campuses across North and West Philadelphia <span class="cite">(source: <a href="https://kippphiladelphia.org">https://kippphiladelphia.org</a>)</span>.</li>\n<li><strong>MaST Community Charter School</strong> runs a K-12 network across three campuses in Northeast Philadelphia <span class="cite">(source: <a href="https://mastschools.org">https://mastschools.org</a>)</span>.</li>\n<li><strong>Esperanza Academy Charter School</strong> has served North Philadelphia for nearly 25 years <span class="cite">(source: <a href="https://www.esperanzaacademycs.org">https://www.esperanzaacademycs.org</a>)</span>.</li>\n<li><strong>Universal Companies</strong> manages five charter schools — Alcorn, Audenried, Creighton, Institute, and Vare — serving roughly 4,300 Philadelphia students <span class="cite">(source: <a href="https://www.universalcompanies.org/education/">https://www.universalcompanies.org/education/</a>)</span>.</li>\n<li><strong>Global Leadership Academy Charter School</strong> operates K-8 across multiple learning communities in West Philadelphia <span class="cite">(source: <a href="http://www.glacharter.org">http://www.glacharter.org</a>)</span>.</li>\n</ul>\n<p>FocusedEDU has staffed Philadelphia public charter schools directly — see our case study: <a href="https://www.focusedu-staffing.com/case-studies/first-philadelphia-public-charter-school">Every special-education teacher we placed stayed</a>.</p>\n<h2 id="what-focusededu-does-in-pennsylvania">What FocusedEDU does in Pennsylvania</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n',
    faqs: [
      {
        q: "How do you coordinate screening and pre-start documentation?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Do Pennsylvania's Intermediate Units use outside staffing partners for special education?",
        a: "IUs are PDE-designated providers of special education, technical assistance, and professional development to districts, charter schools, and private schools statewide (source: PA Department of Education, Types of Schools). That regional, multi-building service model is the same structure FocusedEDU's related-service and special-education staffing is built to support .",
      },
      {
        q: "How quickly can a hard-to-fill role like an SLP or school psychologist actually get filled?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        q: "Does FocusedEDU work with charter schools in Philadelphia and across Pennsylvania?",
        a: "Yes — charter networks are our highest-priority partner segment . We've staffed Philadelphia charter schools directly; see our case study, [Every special-education teacher we placed stayed](https://www.focusedu-staffing.com/case-studies/first-philadelphia-public-charter-school).",
      },
      {
        q: "What's the difference between a staffing agency and a substitute-teacher service?",
        a: "A substitute service exists to cover a classroom for a day or a defined absence. FocusedEDU is built for the harder problem underneath that: sourcing and clearing specialized, certified professionals — special-education teachers, SLPs, OTs, PTs, school psychologists — for roles a district needs filled and kept filled, through outbound recruiting rather than waiting on inbound applicants, as a long-term partner rather than a rotating pool .",
      },
    ],
    quote: {
      text: "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
      name: "Zavia Herring",
      role: "Director of HR, Renaissance Academy Charter School",
    },
    related: [
      {
        label: "Philadelphia Education Staffing",
        slug: "philadelphia-education-staffing",
      },
      {
        label: "Delaware Education Staffing",
        slug: "delaware-education-staffing",
      },
      {
        label: "New Jersey Education Staffing",
        slug: "new-jersey-education-staffing",
      },
      {
        label: "Maryland Special Education Staffing",
        slug: "maryland-special-education-staffing",
      },
    ],
  },
  {
    slug: "new-jersey-education-staffing",
    eyebrow: "Education staffing · New Jersey",
    h1: "New Jersey Education Staffing",
    metaTitle: "New Jersey Education Staffing Agency",
    metaDescription:
      "New Jersey Education Staffing with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
    hero: "New Jersey Education Staffing with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
    ],
    richHtml:
      '<p>New Jersey districts and charter schools are trying to staff specialized, compliance-critical roles inside a workforce pipeline that&#39;s been shrinking for years. FocusedEDU is a specialized K-12 staffing partner working with New Jersey districts, county-level education offices, and charter networks to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest-priority partner segment . Below is what the state&#39;s own data says about the shortage, what New Jersey requires before anyone can work in a school, how the state&#39;s county office structure fits into staffing, and which charter operators are actually building in New Jersey today.</p>\n<h2 id="the-special-education-staffing-landscape-in-new-jersey">The special-education staffing landscape in New Jersey</h2>\n<p>New Jersey&#39;s own Task Force on Public School Staff Shortages — convened under Governor Murphy&#39;s Executive Order #309, with the NJ Department of Education presenting certification-pathway data to the group — found that &quot;the pandemic has exacerbated shortages in specific teaching areas, including, but not limited to, special education, science and math, and English as a second language or bilingual education&quot; <span class="cite">(source: Task Force on Public School Staff Shortages, Initial Recommendations, Feb. 2023, <a href="https://www.nj.gov/education/docs/TaskForceReport.pdf">https://www.nj.gov/education/docs/TaskForceReport.pdf</a>)</span>. The same report&#39;s own workforce data shows the structural side of the problem: in 2017-18, 8,764 teachers left New Jersey public schools while only 5,248 newly certified teachers graduated into the pipeline that year — a gap that had been widening every year since 2014-15 <span class="cite">(source: same report, Table 4, citing the NJ Education to Earnings Data System)</span>.</p>\n<p>More recently, the New Jersey Association of Colleges for Teacher Education has projected the state will need roughly 2,500 additional special-education teachers over the next five years, a figure reported by the New Jersey Education Association <span class="cite">(source: NJEA, &quot;Addressing the special education teacher shortage,&quot; May 15, 2025, <a href="https://www.njea.org/addressing-the-special-education-teacher-shortage/">https://www.njea.org/addressing-the-special-education-teacher-shortage/</a>)</span>. The same article cites national NCES data showing 74% of elementary and middle schools nationally had difficulty filling a special-education teaching vacancy with a fully certified teacher in 2024-25 — context for the pressure New Jersey buyers are competing against for the same limited pool of certified candidates. Against that backdrop, the state reported 242,001 students with IEPs as of October 15, 2024 — a 17.35% statewide classification rate <span class="cite">(source: NJDOE Office of Special Education, IDEA Section 618 Public Reporting, <a href="https://www.nj.gov/education/specialed/monitor/ideapublicdata">https://www.nj.gov/education/specialed/monitor/ideapublicdata</a>)</span> — spread across 590 operating school districts and 84 charter schools <span class="cite">(source: NJDOE, New Jersey Public Schools Fact Sheet 2025-2026, <a href="https://www.nj.gov/education/doedata/fact.shtml">https://www.nj.gov/education/doedata/fact.shtml</a>)</span>.</p>\n<h2 id="clearances-new-jersey-requires-before-anyone-works-in-a-scho">Clearances New Jersey requires before anyone works in a school</h2>\n<p>New Jersey requires a fingerprint-based Criminal History Record Check for every applicant, administered by the NJDOE&#39;s Office of Student Protection (OSP): &quot;The Office of Student Protection Unit (OSP) conducts criminal background checks of applicants for positions in New Jersey&#39;s public schools, private schools for students with disabilities, charter schools, and nonpublic schools, as well as for authorized vendors and authorized school bus contractors&quot; <span class="cite">(source: NJDOE, Criminal History Record Check, <a href="https://www.nj.gov/education/crimhist/">https://www.nj.gov/education/crimhist/</a>)</span>. The requirement is statutory under N.J.S.A. 18A:6-7.1, and the hiring entity itself is &quot;statutorily responsible to ensure applicants, employees, or board/trustee members complete the Criminal History Record Check process prior to employment&quot; — the check runs through both the New Jersey State Police and the FBI <span class="cite">(source: same page)</span>. The statute&#39;s disqualifying-offense list — reproduced in the New Jersey Legislature&#39;s own bill text for S3395 (2024) — covers all first- and second-degree crimes, Title 2C chapter 14 sex offenses, drug offenses, and crimes involving force or threat, with written notice and a right to challenge before any denial <span class="cite">(source: NJ Legislature, S3395, <a href="https://pub.njleg.gov/Bills/2024/S3500/3395_I1.HTM">https://pub.njleg.gov/Bills/2024/S3500/3395_I1.HTM</a>)</span>.</p>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<h2 id="how-new-jersey39s-county-offices-fit-into-staffing-decisions">How New Jersey&#39;s county offices fit into staffing decisions</h2>\n<p>New Jersey doesn&#39;t use Pennsylvania-style Intermediate Units; instead, the state is organized into 21 County Offices of Education, each led by an Executive County Superintendent. NJDOE describes them as &quot;the focal point of general support, oversight and routine communications between local districts and the Department&#39;s central offices&quot; <span class="cite">(source: NJDOE, County Offices of Education, <a href="https://www.nj.gov/education/about/counties/">https://www.nj.gov/education/about/counties/</a>)</span>. Each county office carries a core staff that includes an Executive County Business Official, a County Education Specialist, and a County Special Education Specialist — and each office directly touches staffing: county offices issue substitute certificates, conduct special-education program reviews, collect the state&#39;s &quot;Biannual Statement of Assurance Regarding the Use of Paraprofessional Staff,&quot; and review district administrative contracts <span class="cite">(source: same page)</span>. For a district or charter network trying to fill a specialized role, the county special-education specialist is frequently the compliance touchpoint that a staffing partner&#39;s paperwork ultimately has to satisfy.</p>\n<h2 id="charter-networks-staffing-in-new-jersey">Charter networks staffing in New Jersey</h2>\n<p>New Jersey&#39;s charter sector is concentrated in Newark, Camden, and Paterson, with several multi-site operators running dedicated special-education programming:</p>\n<ul>\n<li><strong>KIPP New Jersey</strong> operates K-12 schools &quot;throughout the cities of Newark, Camden, and Paterson,&quot; including KIPP TEAM Academy in Newark, one of the network&#39;s founding schools <span class="cite">(source: <a href="https://kippnj.org/">https://kippnj.org/</a>)</span>.</li>\n<li><strong>Uncommon Schools</strong> runs North Star Academy — 14 schools across Newark neighborhoods including Clinton Hill, Downtown Newark, and West Side — and Camden Prep, five schools serving Pre-K through 12 in Camden. Uncommon&#39;s own site states: &quot;We believe that children with disabilities are deserving of a high-quality, individualized education,&quot; describing services under IDEA, Section 504, and the ADA, including speech-language therapy, OT/PT, and behavioral services <span class="cite">(source: <a href="https://northstar.uncommonschools.org/about-us/">https://northstar.uncommonschools.org/about-us/</a>; <a href="https://camdenprep.uncommonschools.org/">https://camdenprep.uncommonschools.org/</a>)</span>.</li>\n<li><strong>Great Oaks Legacy Charter School</strong> is an &quot;open-enrollment, tuition-free public charter school system&quot; with more than 2,000 students across seven campuses in Newark <span class="cite">(source: <a href="https://www.greatoakslegacy.org/about">https://www.greatoakslegacy.org/about</a>)</span>.</li>\n<li><strong>Paterson Charter School for Science and Technology</strong> serves 1,600+ students K-12 across four Paterson campuses, &quot;fully accredited by the State of New Jersey Department of Education&quot; <span class="cite">(source: <a href="https://www.pcsst.org/">https://www.pcsst.org/</a>)</span>.</li>\n</ul>\n<h2 id="what-focusededu-does-in-new-jersey">What FocusedEDU does in New Jersey</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n',
    faqs: [
      {
        q: "What background check does New Jersey require before someone can work in a school?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Is the special-education teacher shortage in New Jersey actually getting worse?",
        a: "State workforce data shows more teachers leaving than new certified graduates entering every year since at least 2014-15, and NJACTE now projects New Jersey will need roughly 2,500 additional special-education teachers within five years (source: NJEA, https://www.njea.org/addressing-the-special-education-teacher-shortage/, citing NJACTE and the NJ Task Force report).",
      },
      {
        q: "Do New Jersey's county offices of education use outside staffing partners?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Does FocusedEDU work with charter networks in Newark, Camden, and Paterson?",
        a: "Yes — charter networks are our highest-priority partner segment , and New Jersey's charter sector, concentrated in exactly those three cities, is a core part of our New Jersey market.",
      },
      {
        q: "What's the difference between a staffing agency and a substitute-teacher service in New Jersey?",
        a: "A substitute service fills day-to-day classroom coverage. FocusedEDU is built for the harder, compliance-critical layer above that — sourcing and clearing certified special-education teachers and related-service providers through direct outbound recruiting, as a long-term partner rather than a rotating sub pool .",
      },
    ],
    quote: {
      text: "I recommend Focused Staffing Group without reservation. They have demonstrated a consistent level of professionalism, reliability, and responsiveness in addressing our staffing needs.",
      name: "Lennita Porter-Linen",
      role: "Director of HR Recruitment & Retention, Bridgeton Public Schools (NJ)",
    },
    related: [
      {
        label: "Pennsylvania Education Staffing",
        slug: "pennsylvania-education-staffing",
      },
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      { label: "Related Services Staffing", slug: "related-services-staffing" },
    ],
  },
  {
    slug: "maryland-special-education-staffing",
    eyebrow: "Education staffing · Maryland",
    h1: "Maryland Special Education Staffing",
    metaTitle: "Maryland Special Education Staffing",
    metaDescription:
      "Maryland Special Education Staffing with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
    hero: "Maryland Special Education Staffing with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
    ],
    richHtml:
      '<p>Maryland&#39;s 24 local school systems and their charter schools are staffing against a shortage that&#39;s improving on paper but hasn&#39;t actually closed where it matters most. FocusedEDU is a specialized K-12 staffing partner working with Maryland&#39;s local education agencies and charter schools to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest priority . Here&#39;s what the state&#39;s own workforce data shows, what Maryland requires before anyone works in a school, how the state&#39;s LEA structure works, and which charter operators are active today.</p>\n<h2 id="the-special-education-staffing-landscape-in-maryland">The special-education staffing landscape in Maryland</h2>\n<p>Maryland&#39;s teacher-vacancy picture has genuinely improved, but special education is the one category lagging that improvement. In a Teacher Workforce Update presented to the Maryland State Board of Education on December 9, 2025, MSDE reported beginning-of-year statewide teacher vacancies falling from a peak of 2,144.9 in SY2022-23 to just 886.2 in SY2025-26 — a 45.3% year-over-year drop <span class="cite">(source: MSDE, Teacher Workforce Update, Dec. 9, 2025, <a href="https://marylandpublicschools.org/stateboard/documents/2025/1209/teacher-workforce-update-a.pdf">https://marylandpublicschools.org/stateboard/documents/2025/1209/teacher-workforce-update-a.pdf</a>)</span>. But special-education vacancies fell only 21.4% over that same year, a far smaller improvement than elementary education&#39;s 63.3% drop — meaning special education remains the hardest category to close even as the statewide numbers ease. State Superintendent Carey Wright called the overall drop &quot;a very encouraging sign&quot; while noting &quot;more work to do&quot; <span class="cite">(source: Fox Baltimore/WBFF, Dec. 11, 2025, <a href="https://foxbaltimore.com/news/local/maryland-teacher-vacancies-state-education-department">https://foxbaltimore.com/news/local/maryland-teacher-vacancies-state-education-department</a>)</span>. MSDE&#39;s own teacher-recruitment portal continues to list special education as one of Maryland&#39;s standing high-needs, critical-shortage subject areas <span class="cite">(source: MSDE, teach.maryland.gov, High-Needs Subjects, <a href="https://teach.maryland.gov/Pages/High-Needs-Subjects.aspx">https://teach.maryland.gov/Pages/High-Needs-Subjects.aspx</a>)</span>. That gap is playing out across a genuinely large system: Maryland runs &quot;over 1,400 public schools&quot; across its 24 local education agencies <span class="cite">(source: MSDE, About the Maryland State Department of Education, <a href="https://www.marylandpublicschools.org/about/Pages/default.aspx">https://www.marylandpublicschools.org/about/Pages/default.aspx</a>)</span>, which means even a category-specific vacancy rate translates into a large absolute number of classrooms and caseloads waiting on a qualified hire.</p>\n<h2 id="clearances-maryland-requires-before-anyone-works-in-a-school">Clearances Maryland requires before anyone works in a school</h2>\n<p>Maryland&#39;s background-screening requirements run through the Education Article of the Annotated Code of Maryland. §6-113 bars a county board from &quot;knowingly hir[ing] or retain[ing]&quot; any individual convicted of specified sex offenses, child sexual abuse, or a crime of violence, and extends the same bar to contractor and subcontractor employees with &quot;direct, unsupervised, and uncontrolled access to children&quot; <span class="cite">(source: Md. Code, Education §6-113, <a href="https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113">https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&amp;section=6-113</a>)</span>. §6-113.2 adds an employment-history review requirement: applicants must supply contact information for their current employer and &quot;all former employers... in which the applicant was employed in a position involving direct contact with minors within the previous 10 years,&quot; sign a records-release consent, and disclose in writing any prior investigation or discipline for child sexual abuse or misconduct — the hiring entity must then contact those employers directly <span class="cite">(source: Md. Code, Education §6-113.2, <a href="https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113.2">https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&amp;section=6-113.2</a>)</span>. MSDE has published its own implementing guidance on this exact statute, confirming the department&#39;s role in administering it <span class="cite">(source: MSDE Guidance for Md. Code, Educ. §6-113.2, Feb. 22, 2024)</span>. A companion provision, §6-113.1, requires annual training for all school employees on the &quot;prevention, identification, and reporting of child sexual abuse,&quot; alongside school-level prevention policies and facility assessments <span class="cite">(source: Md. Code, Education §6-113.1, <a href="https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&section=6-113.1">https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=ged&amp;section=6-113.1</a>)</span>. Educator licensure itself — including the background-screening step built into certification — is governed under COMAR Title 13A, Subtitle 12 (Educator Licensure) <span class="cite">(source: <a href="https://regs.maryland.gov/us/md/exec/comar/13A.12/index.full.html">https://regs.maryland.gov/us/md/exec/comar/13A.12/index.full.html</a>)</span>.</p>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<h2 id="how-maryland39s-lea-structure-works-no-intermediate-layer">How Maryland&#39;s LEA structure works — no intermediate layer</h2>\n<p>Maryland has a flatter structure than Pennsylvania or New York: there is no Intermediate Unit or BOCES-style regional layer. MSDE states directly that Maryland has &quot;over 1,400 public schools, 24 local education agencies... serving all of the state&#39;s 23 counties plus Baltimore City&quot; <span class="cite">(source: MSDE, About the Maryland State Department of Education, <a href="https://www.marylandpublicschools.org/about/Pages/default.aspx">https://www.marylandpublicschools.org/about/Pages/default.aspx</a>)</span>. Each of the 23 counties plus Baltimore City operates its own local board of education, functioning as that region&#39;s LEA, reporting directly to MSDE. For a staffing partner, that means there&#39;s no regional service agency standing between a district&#39;s special-education office and the state — every LEA owns its own compliance and hiring pipeline directly.</p>\n<h2 id="charter-networks-staffing-in-maryland">Charter networks staffing in Maryland</h2>\n<p>Maryland had 48 public charter schools serving 23,974 students across six LEAs as of the 2022-23 school year, concentrated in Baltimore City (31 schools) and Prince George&#39;s County (9 schools) <span class="cite">(source: MSDE, Maryland&#39;s Public Charter Schools legislative report, Dec. 2023, <a href="https://marylandpublicschools.org/programs/Documents/Charter-Schools/ReportsData/MDCharterSchools2023.pdf">https://marylandpublicschools.org/programs/Documents/Charter-Schools/ReportsData/MDCharterSchools2023.pdf</a>)</span>. Active operators include:</p>\n<ul>\n<li><strong>KIPP Baltimore</strong>, running KIPP Harmony Academy (PreK-5) and KIPP Ujima Village Academy (6-8) on a shared West Baltimore campus, serving roughly 1,400 students <span class="cite">(source: <a href="https://kippbaltimore.org/">https://kippbaltimore.org/</a>)</span>.</li>\n<li><strong>Monarch Academy</strong>, a network of tuition-free public charter and contract schools across Annapolis, Glen Burnie, and Laurel <span class="cite">(source: <a href="https://monarchacademy.org/">https://monarchacademy.org/</a>)</span>.</li>\n<li><strong>City Neighbors Charter School</strong>, a K-8 school in Baltimore <span class="cite">(source: <a href="https://cityneighborscharterschool.org/">https://cityneighborscharterschool.org/</a>)</span>.</li>\n<li><strong>Wolfe Street Academy</strong>, a PreK-5 school in southeast Baltimore operated by the Baltimore Curriculum Project since 2007 <span class="cite">(source: <a href="https://www.wolfestreetacademy.org/">https://www.wolfestreetacademy.org/</a>)</span>.</li>\n<li><strong>Green Street Academy</strong>, serving grades 6-12 in West Baltimore <span class="cite">(source: <a href="https://greenstreetacademy.org/">https://greenstreetacademy.org/</a>)</span>.</li>\n<li><strong>College Park Academy</strong>, &quot;a Prince George&#39;s County public charter school for students grades 6-12&quot; <span class="cite">(source: <a href="https://www.collegeparkacademy.org/">https://www.collegeparkacademy.org/</a>)</span>.</li>\n</ul>\n<h2 id="what-focusededu-does-in-maryland">What FocusedEDU does in Maryland</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n',
    faqs: [
      {
        q: "How do you coordinate screening and pre-start documentation?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Is Maryland's special-education shortage actually improving?",
        a: "Statewide teacher vacancies overall fell 45.3% in SY2025-26, but special-education vacancies fell only 21.4% over the same period — the smallest improvement of any category MSDE reported, meaning special education remains the hardest role to fill even as the broader shortage eases (source: MSDE, Teacher Workforce Update, Dec. 9, 2025).",
      },
      {
        q: "Does Maryland have Intermediate Units or a regional staffing layer like other states?",
        a: "No — Maryland runs a flat structure: MSDE at the state level and 24 local education agencies (23 counties plus Baltimore City), each fully responsible for its own special-education staffing and compliance (source: MSDE, About MSDE).",
      },
      {
        q: "Does FocusedEDU work with Maryland's charter schools?",
        a: "Yes — charter networks are our highest-priority partner segment . Maryland's 48 public charter schools are concentrated in Baltimore City and Prince George's County (source: MSDE, Maryland's Public Charter Schools report, Dec. 2023), both core parts of our Maryland market.",
      },
      {
        q: "What should a Maryland LEA or charter school look for in a staffing partner?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
    ],
    related: [
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      {
        label: "Pennsylvania Education Staffing",
        slug: "pennsylvania-education-staffing",
      },
      {
        label: "New Jersey Education Staffing",
        slug: "new-jersey-education-staffing",
      },
    ],
  },
  {
    slug: "substitute-teacher-staffing",
    eyebrow: "Education staffing",
    h1: "Substitute Teacher Staffing for K-12 Schools",
    metaTitle: "Substitute Teacher Staffing for K-12 Schools",
    metaDescription:
      "Day-to-day and long-term substitute teachers with weekly Friday pay and a shift app — the model behind a 95% daily fill rate at Odyssey Charter.",
    hero: "Substitute Teacher Staffing for K-12 Schools with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
    photo: PHOTOS[2],
    roles: [
      "Day-to-day substitute teachers",
      "Long-term substitute teachers",
      "Building substitutes",
      "Substitute paraprofessionals",
      "Leave-coverage substitutes",
      "Emergency daily coverage",
    ],
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
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
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "Will your sub pool also serve the school down the road?",
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "What qualifications does a substitute teacher need?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
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
      {
        label: "Delaware Education Staffing",
        slug: "delaware-education-staffing",
      },
      {
        label: "Pennsylvania Education Staffing",
        slug: "pennsylvania-education-staffing",
      },
    ],
  },
  {
    slug: "delaware-education-staffing",
    eyebrow: "Education staffing · Delaware",
    h1: "Delaware Education Staffing",
    metaTitle: "Delaware Education Staffing Agency",
    metaDescription:
      "Our strongest record is in Delaware: 120+ roles filled at Odyssey Charter in Wilmington, a 95% substitute fill rate, and Christina School District.",
    hero: "Delaware Education Staffing with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
    ],
    richHtml:
      '<p>Delaware is a small state with an outsized compliance burden per district: 19 traditional public school districts and 23 independently authorized charter schools are all trying to staff the same narrow pool of certified special-education teachers, SLPs, OTs, PTs, and school psychologists. FocusedEDU is a specialized K-12 staffing partner working with Delaware districts and charter schools to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest priority . Below: what Delaware&#39;s own oversight bodies say about the state of special-education staffing, what the state requires before anyone works in a school, how districts and charters are structured, and which charter schools are building programs today.</p>\n<h2 id="the-special-education-staffing-landscape-in-delaware">The special-education staffing landscape in Delaware</h2>\n<p>Delaware&#39;s Office of the State Auditor put a hard number on the compliance risk in a July 2025 report, finding that as of March 5, 2025, &quot;453 Delaware public school teachers, or approximately 4% of the Delaware public school teacher population, were unlicensed&quot; <span class="cite">(source: Delaware Office of the State Auditor, &quot;Certification and Licensure of Delaware Special Education Teachers,&quot; July 3, 2025, <a href="https://auditor.delaware.gov/2025/07/03/certification-and-licensure-of-delaware-special-education-teachers">https://auditor.delaware.gov/2025/07/03/certification-and-licensure-of-delaware-special-education-teachers</a>)</span>. Special education was singled out specifically: the Auditor&#39;s office identified &quot;62 educators who hold a Special Education certificate&quot; with a lapse in licensing, 47 of whom were actively &quot;employed by school districts, charter schools, and alternative schools&quot; while lapsed — collectively totaling roughly 26,289 calendar days worked without a valid credential on file <span class="cite">(source: same report)</span>. As of June 25, 2025, the same report found 9 educators statewide without a current teaching license, 4 of them actively teaching special education classes, and 12 educators serving in special-education roles without the correct certificate for that specific role <span class="cite">(source: same report)</span>.</p>\n<p>Statewide vacancy pressure has been easing but remains real: Delaware&#39;s Department of Education reported 466 open teaching positions as of August 15, 2025, a 52% decline from the prior hiring period, according to state reporting <span class="cite">(source: WDEL News, &quot;Delaware reports progress but needs more teachers,&quot; Sept. 15, 2025, <a href="https://www.wdel.com/news/delaware-reports-progress-but-needs-more-teachers/article_184c9ecd-1567-4e31-a601-81efaf4b0968.html">https://www.wdel.com/news/delaware-reports-progress-but-needs-more-teachers/article_184c9ecd-1567-4e31-a601-81efaf4b0968.html</a>)</span>. Special-education caseloads are concentrated in a handful of districts: Delaware&#39;s General Assembly reports that &quot;the school districts with the highest number of children in special education [as of Spring 2023] were Christina (1683), Red Clay (1567), and Appoquinimink (1255),&quot; and that &quot;two school districts, Lake Forest at 11.29% and Christina at 10.72%, had more than 10% of children in special education&quot; <span class="cite">(source: Delaware General Assembly, Office of the Controller General, &quot;Delaware School Districts and Public Schools Statistics 2022-2023,&quot; <a href="https://legis.delaware.gov/docs/default-source/publications/researchreports/delawareschooldistrictsandpublicschoolsstatistics.pdf">https://legis.delaware.gov/docs/default-source/publications/researchreports/delawareschooldistrictsandpublicschoolsstatistics.pdf</a>)</span>.</p>\n<h2 id="clearances-delaware-requires-before-anyone-works-in-a-school">Clearances Delaware requires before anyone works in a school</h2>\n<p>Delaware&#39;s operative regulation is 14 DE Admin. Code § 745, &quot;Criminal Background Check for Public School Related Employment,&quot; which states plainly: &quot;This regulation shall apply to all individuals seeking Public School related employment in a Delaware Public School. A Criminal Background Check shall be completed for Employee, Contractors or Volunteers of a Child Serving Entity. It shall consist of a fingerprinted Delaware and national background check completed by the State Bureau of Identification (SBI) and the Federal Bureau of Investigation (FBI)... Additionally, a Child Protection Registry Check shall be completed by the Department of Services for Children, Youth and Their Families (DSCYF)&quot; <a class="cite" href="https://archive.regulations.delaware.gov/AdminCode/title14/700/745.pdf" rel="noopener nofollow" target="_blank">14 DE Admin. Code § 745</a>. The requirement covers any employee, contractor, volunteer, or extra-duty personnel with direct access to students, at any Delaware public school, charter school, or the Department of Education itself, with suitability determinations governed under 31 Del. C. §309 <span class="cite">(source: same regulation)</span>. A companion rule, 14 DE Admin. Code § 746, governs background checks specifically for student-teaching placements.</p>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<h2 id="how-delaware-structures-districts-and-charter-schools">How Delaware structures districts and charter schools</h2>\n<p>Delaware runs 16 geographic school districts plus 3 vocational-technical districts — 19 traditional public school districts in total — and, separately, 23 charter schools, each of which the state&#39;s own auditor describes as &quot;also known as Local Education Agencies (LEAs)&quot; <span class="cite">(source: Delaware Office of the State Auditor, &quot;Charter Schools Unit Count FY22 and FY23,&quot; Sept. 16, 2025, <a href="https://auditor.delaware.gov/2025/09/16/charter-schools-unit-count-fy22-and-fy23/">https://auditor.delaware.gov/2025/09/16/charter-schools-unit-count-fy22-and-fy23/</a>)</span>. Charter applications go to a local school board or to the Department of Education as the &quot;approving authority,&quot; which forms a Charter School Accountability Committee within 5 days of receiving an application and must rule at a public meeting within 90 working days <span class="cite">(source: Delaware Code, Title 14, Chapter 5, Charter Schools, <a href="https://delcode.delaware.gov/title14/c005/index.html">https://delcode.delaware.gov/title14/c005/index.html</a>)</span>. Because each charter operates as its own LEA, each one carries its own direct responsibility for IEP compliance and related-service delivery — there&#39;s no larger district absorbing that obligation on a charter&#39;s behalf.</p>\n<h2 id="charter-schools-staffing-in-delaware">Charter schools staffing in Delaware</h2>\n<p>Delaware&#39;s charter sector includes several schools running dedicated special-education programming:</p>\n<ul>\n<li><strong>Odyssey Charter School</strong> (Wilmington) — a K-12 Greek-immersion school FocusedEDU has staffed directly; see our case study: <a href="https://www.focusedu-staffing.com/case-studies/odyssey-charter-school">Odyssey Public Charter School — Case Study</a>.</li>\n<li><strong>Newark Charter School</strong> operates K-12 in Newark <span class="cite">(source: <a href="https://newarkcharterschool.org/">https://newarkcharterschool.org/</a>)</span>.</li>\n<li><strong>MOT Charter School</strong> runs K-12 across two Middletown campuses <span class="cite">(source: <a href="https://www.motcharter.com/">https://www.motcharter.com/</a>)</span>.</li>\n<li><strong>Sussex Academy</strong> runs K-12 across two Georgetown campuses <span class="cite">(source: <a href="https://www.sussexacademy.org/">https://www.sussexacademy.org/</a>)</span>.</li>\n<li><strong>Providence Creek Academy</strong> (Clayton) publishes a dedicated special-education page describing full inclusion plus two tiers of specialized-setting support, along with animal therapy, art therapy, PT/OT, and speech-language services, delivered by &quot;a Special Education Team [that] works closely with general education teachers&quot; <span class="cite">(source: <a href="https://pcasaints.org/Special-Education">https://pcasaints.org/Special-Education</a>)</span>.</li>\n<li><strong>Freire Charter School Wilmington</strong> (grades 8-12) states directly that it will &quot;serve any and all students who receive a seat through our lottery and choose to enroll, including students who have special needs and IEPs,&quot; running push-in and pull-out instruction under a tiered RtII model <span class="cite">(source: <a href="https://www.freirewilmington.org/academics/student-services/">https://www.freirewilmington.org/academics/student-services/</a>)</span>.</li>\n</ul>\n<h2 id="what-focusededu-does-in-delaware">What FocusedEDU does in Delaware</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n',
    faqs: [
      {
        q: "What background check does Delaware require before someone can work in a school?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "How serious is Delaware's special-education licensing gap, really?",
        a: "The state's own Auditor found 62 special-education-certified educators with lapsed licenses, 47 of them actively working in districts, charter, and alternative schools while lapsed, for a combined 26,289 calendar days (source: Delaware Office of the State Auditor, July 3, 2025). That's the exact exposure a completed compliance file is built to close before a candidate ever starts .",
      },
      {
        q: "How is a Delaware charter school different from a traditional district for staffing purposes?",
        a: "Each Delaware charter school is its own Local Education Agency (source: Delaware Office of the State Auditor, Charter Schools Unit Count FY22 and FY23), meaning it carries full, direct responsibility for special-education compliance rather than sharing that obligation with a larger district office.",
      },
      {
        q: "Does FocusedEDU work with Delaware's charter schools?",
        a: "Yes — charter networks are our highest-priority partner segment . We've staffed Delaware charter schools directly; see our case study, [Odyssey Public Charter School — Case Study](https://www.focusedu-staffing.com/case-studies/odyssey-charter-school).",
      },
      {
        q: "How fast can a specialized role actually get filled in Delaware?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
    ],
    quote: {
      text: "I would highly recommend Focused Staffing Group to any school or organization seeking reliable, professional, and efficient staffing services.",
      name: "Dr. Heather Brooks",
      role: "Principal, Serviam Girls Academy (New Castle, DE)",
    },
    related: [
      {
        label: "Pennsylvania Education Staffing",
        slug: "pennsylvania-education-staffing",
      },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
      {
        label: "School District Staffing Vendor",
        slug: "school-district-staffing-vendor",
      },
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
    ],
  },
  {
    slug: "new-york-education-staffing",
    eyebrow: "Education staffing · New York",
    h1: "Special Education Staffing for New York Districts, BOCES, and Charter Networks",
    metaTitle: "Special Education Staffing in New York",
    metaDescription:
      "FocusedEDU staffs New York districts, BOCES, and charter networks with special-ed teachers, paraprofessionals, SLPs, OTs, PTs, and school psychologists.",
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
    richHtml:
      '<p>New York has no live special-education staffing page today despite being a core market — this page fills that gap. Across 697 school districts, 37 BOCES, and a dense, fast-growing charter sector concentrated in New York City, the same certified specialists are in short supply everywhere at once. FocusedEDU is a specialized K-12 staffing partner working with New York districts, BOCES, and charter networks to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest priority . Here&#39;s what the state&#39;s own data shows, what New York requires before anyone works in a school, how BOCES fits into staffing, and which charter networks are active today.</p>\n<h2 id="the-special-education-staffing-landscape-in-new-york">The special-education staffing landscape in New York</h2>\n<p>Special education is one of New York&#39;s officially designated statewide teacher-shortage subject areas for 2025-26, alongside Career and Technical Education, Language Arts, Library/Media Specialist, Mathematics, and Sciences <span class="cite">(source: NYSED, Procurement #254: Teachers of Tomorrow / TOTSMBE 2026-2030, <a href="https://www.nysed.gov/funding-opportunities/procurement-254-teachers-tomorrow-totsmbe-2026-2030">https://www.nysed.gov/funding-opportunities/procurement-254-teachers-tomorrow-totsmbe-2026-2030</a>)</span>. The scale of that shortage shows up clearly in federal research: a U.S. Department of Education study built on NYSED&#39;s own certification data found that &quot;new teachers earned certificates most frequently in the shortage certification area of special education (40 percent, which was substantially higher than all other shortage certification areas),&quot; and concluded that &quot;New York State has faced geographically widespread and persistent teacher shortages&quot; in special education specifically <span class="cite">(source: US Dept of Education IES, REL Northeast &amp; Islands, &quot;Teacher Shortages in New York State,&quot; REL 2022-109, <a href="https://ies.ed.gov/ncee/rel/regions/northeast/pdf/REL_2022109.pdf">https://ies.ed.gov/ncee/rel/regions/northeast/pdf/REL_2022109.pdf</a>)</span>. That pressure sits on top of real scale: New York enrolled 2,421,491 K-12 students statewide in 2024-25, with 480,579 of them — 20% of total enrollment — identified as students with disabilities <span class="cite">(source: NYSED Data Site, Enrollment Data, <a href="https://data.nysed.gov/enrollment.php?year=2025&state=yes">https://data.nysed.gov/enrollment.php?year=2025&amp;state=yes</a>)</span>.</p>\n<h2 id="clearances-new-york-requires-before-anyone-works-in-a-school">Clearances New York requires before anyone works in a school</h2>\n<p>New York&#39;s fingerprinting and clearance requirement runs through the &quot;SAVE Law&quot; (Chapter 180 of the Laws of 2000), which amended NY Education Law §§305(30), 3004-b, 3004-c, and 3035, and created Part 87 of the Commissioner&#39;s Regulations. NYSED states directly: &quot;Pursuant to the SAVE Law... all individuals seeking employment in a school setting and all applicants for certification must undergo a fingerprint-supported criminal history background check&quot; <span class="cite">(source: NYSED, About OSPRA, <a href="https://www.nysed.gov/educator-integrity/about-ospra">https://www.nysed.gov/educator-integrity/about-ospra</a>)</span>. The requirement applies to any &quot;covered school&quot; — defined as &quot;a board of cooperative educational services, a charter school, a school district, or any nonpublic or private elementary or secondary school that elects to fingerprint and seek clearance for prospective employees from the department,&quot; with employment clearance issued once &quot;a covered school has submitted a request for employment clearance in TEACH,&quot; New York&#39;s statewide certification and clearance system <span class="cite">(source: NYSED, OSPRA 100, <a href="https://www.nysed.gov/sites/default/files/ospra100_0.pdf">https://www.nysed.gov/sites/default/files/ospra100_0.pdf</a>)</span>. New York City runs its own DOE fingerprinting process that feeds into the same NYSED clearance system <span class="cite">(source: NYSED, NYC Fingerprinting for School Employment, <a href="https://www.nysed.gov/educator-integrity/new-york-city-fingerprinting-school-employment">https://www.nysed.gov/educator-integrity/new-york-city-fingerprinting-school-employment</a>)</span>.</p>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<h2 id="how-boces-fits-into-new-york-staffing">How BOCES fits into New York staffing</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<h2 id="charter-networks-staffing-in-new-york">Charter networks staffing in New York</h2>\n<p>New York&#39;s charter sector is concentrated in New York City and has grown into one of the largest in the country — at minimum 239 schools are authorized through SUNY&#39;s Charter Schools Institute alone, enrolling more than 117,000 students in 2024-25 <span class="cite">(source: SUNY Charter Schools Institute, Fast Facts, <a href="https://www.newyorkcharters.org/data-reporting/fast-facts/">https://www.newyorkcharters.org/data-reporting/fast-facts/</a>)</span>. Active multi-site operators include:</p>\n<ul>\n<li><strong>Success Academy Charter Schools</strong>, the state&#39;s largest network, running 59 K-12 schools across the Bronx, Brooklyn, Harlem, Manhattan, and Queens, with a named special-education program (&quot;Sprint&quot;) covering Integrated Co-Teaching, speech therapy, OT, and Behavior Intervention Plans <span class="cite">(source: <a href="https://www.successacademies.org">https://www.successacademies.org</a>)</span>.</li>\n<li><strong>KIPP NYC</strong>, operating 18 schools — 9 in the Bronx, 2 in Brooklyn, 7 in Manhattan — serving 9,400 students <span class="cite">(source: <a href="https://www.kippnyc.org">https://www.kippnyc.org</a>)</span>.</li>\n<li><strong>Uncommon Schools</strong>, running 26 NYC schools concentrated in Brooklyn neighborhoods including Bed-Stuy, Brownsville, and Crown Heights <span class="cite">(source: <a href="https://www.uncommonschools.org">https://www.uncommonschools.org</a>)</span>.</li>\n<li><strong>Achievement First</strong>, operating 23 schools across Brooklyn and Queens <span class="cite">(source: <a href="https://www.achievementfirst.org/new-york/">https://www.achievementfirst.org/new-york/</a>)</span>.</li>\n<li><strong>Zeta Charter Schools</strong>, operating across the South Bronx, Manhattan&#39;s Inwood and Washington Heights, and Queens neighborhoods including Elmhurst and Flushing <span class="cite">(source: <a href="https://www.zetaschools.org">https://www.zetaschools.org</a>)</span>.</li>\n<li><strong>Democracy Prep Public Schools</strong>, running 10 schools serving 3,500 students <span class="cite">(source: <a href="https://www.democracyprep.org">https://www.democracyprep.org</a>)</span>.</li>\n</ul>\n<h2 id="what-focusededu-does-in-new-york">What FocusedEDU does in New York</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n',
    faqs: [
      {
        q: "How do you coordinate screening and pre-start documentation?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Do New York's BOCES use outside staffing partners for special education?",
        a: "BOCES exist specifically to deliver shared services — including related services like OT and PT — that individual districts can't efficiently staff alone (source: NYSED, BOCES Primer), which is the same itinerant, multi-building need FocusedEDU's related-service staffing is built to support .",
      },
      {
        q: "How large is New York's special-education teacher shortage, really?",
        a: 'Federal research built on NYSED\'s own data found 40% of all new New York teachers who earned a shortage-area certification did so in special education — "substantially higher than all other shortage certification areas" (source: REL 2022-109), and special education remains an officially designated statewide shortage subject for 2025-26 (source: NYSED, Procurement #254).',
      },
      {
        q: "Does FocusedEDU work with New York City's charter networks?",
        a: "Yes — charter networks are our highest-priority partner segment . New York City is home to some of the country's largest multi-site charter operators, and our credentialing platform is built to clear New York candidates through the state's TEACH system efficiently across every campus a network operates.",
      },
      {
        q: "What should a New York district or charter network look for in a staffing partner?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
    ],
    related: [
      {
        label: "Pennsylvania Education Staffing",
        slug: "pennsylvania-education-staffing",
      },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
      {
        label: "School District Staffing Vendor",
        slug: "school-district-staffing-vendor",
      },
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
    ],
  },
  {
    slug: "philadelphia-education-staffing",
    eyebrow: "Education staffing · Philadelphia",
    h1: "Philadelphia Education Staffing",
    metaTitle: "Philadelphia Education Staffing Agency",
    metaDescription:
      "Philadelphia Education Staffing with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
      {
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
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
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "What does temp-to-perm cost?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "How do you coordinate screening and pre-start documentation?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
    ],
    quote: {
      text: "Focused Staffing Group has consistently provided us with high quality special education teachers, paraprofessionals, personal care assistants, and related service providers who have demonstrated professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
      name: "David Weathington, MSW, LSW, Ed.D",
      role: "CEO, Buttonwood Farms / Delta School (Philadelphia)",
    },
    related: [
      {
        label: "Pennsylvania Education Staffing",
        slug: "pennsylvania-education-staffing",
      },
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        heading: "How to compare agency quotes honestly",
        body: "When you have quotes in hand, compare totals, not hourly rates. Ask each vendor: what is inside the bill rate — who is the employer of record, and who carries payroll taxes, workers' comp, and liability insurance? What does it cost to hire a placement permanently, in writing? What are the replacement terms when a placement fails in week three? How is fill rate defined and reported? A vendor with a low hourly rate and a five-figure buyout is frequently the expensive option over a school year; a vendor who cannot answer the employer-of-record question is offloading risk onto you.\n\nWe built this page because the question in its title deserves a straight answer, and most of the industry answers it with a contact form. FSG has staffed K-12 schools for 12 years from Wayne, Pennsylvania, under a founder who taught in the classroom; the record — 120+ roles filled at one school, a 95% substitute fill rate, certified special education teachers placed within two weeks — is on this site and checkable. The rates are one call away.",
      },
    ],
    faqs: [
      {
        q: "What does temp-to-perm conversion cost with FSG?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
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
      {
        label: "School District Staffing Vendor",
        slug: "school-district-staffing-vendor",
      },
      {
        label: "Education Staffing RFP Experience",
        slug: "education-staffing-rfp-experience",
      },
      { label: "K-12 Education Staffing", slug: "k12-education-staffing" },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
    ],
  },
  {
    slug: "washington-dc-education-staffing",
    eyebrow: "Education staffing · Washington, DC",
    h1: "Washington, DC Education Staffing",
    metaTitle: "Washington DC Education Staffing Agency",
    metaDescription:
      "Two DC charter partnerships since 2022: every certified SPED role at IDEA PCS filled with 100% retention, and four candidates per opening at Cesar Chavez.",
    hero: "Washington, DC Education Staffing with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
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
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
    ],
    richHtml:
      '<p>Washington, DC runs one of the most decentralized special-education compliance structures in the country — DCPS is one LEA, and every one of the city&#39;s charter networks is its own separate LEA, each carrying full IDEA responsibility on its own. FocusedEDU is a specialized K-12 staffing partner working with DCPS and DC&#39;s charter LEAs to source special-education teachers, general-education teachers, paraprofessionals, school nurses, SLPs, OTs, PTs, school psychologists, BCBAs/RBTs for school-based programs, and substitutes  — with charter networks as our highest priority . Here&#39;s what OSSE&#39;s own data says about the shortage, what DC requires before anyone works in a school, how the DCPS/charter LEA structure actually works, and which charter operators are active today.</p>\n<h2 id="the-special-education-staffing-landscape-in-dc">The special-education staffing landscape in DC</h2>\n<p>Special education is DC&#39;s single hardest subject area to staff. OSSE&#39;s own Educator Workforce Report found that in SY2023-24, &quot;LEAs and SPAs reported 8 percent of the city&#39;s 1,140 special education FTEs as vacant, making it the subject area with the highest vacancy rate&quot; — against a 4% overall citywide vacancy rate that same year <span class="cite">(source: OSSE, District of Columbia Educator Workforce Report, Oct. 2024, p.17, <a href="https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Report%20(Oct%2028).pdf">https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2024%20Educator%20Workforce%20Report%20(Oct%2028).pdf</a>)</span>. The same report found a direct link between disability caseload and staffing quality: &quot;a 10 percentage point increase in the rate of students with disabilities at a school was associated with a 4.8 percentage point decrease in the rate of in-field teachers&quot; — a statistically significant finding <a class="cite" href="https://p.15" rel="noopener nofollow" target="_blank">same report</a>. The share of DC teachers actually assigned to special education has also been shrinking: elementary special-education assignment fell from 18% of teachers in SY2021-22 to 12% in SY2023-24, and secondary fell from 21% to 15% over the same window <a class="cite" href="https://p.12" rel="noopener nofollow" target="_blank">same report</a>. That&#39;s happening in a city that otherwise runs a favorable 11.3-to-1 student-teacher ratio, notably lower than the national average of 15-to-1, across 254 public schools and roughly 98,800 students <a class="cite" href="https://p.7" rel="noopener nofollow" target="_blank">same report</a>.</p>\n<h2 id="clearances-dc-requires-before-anyone-works-in-a-school">Clearances DC requires before anyone works in a school</h2>\n<p>DC&#39;s background-check regime runs through DC Code Title 4, Chapter 15 (the Criminal Background Checks for the Protection of Children Act of 2004) and Title 38, Chapter 9A. Every LEA and contracted service provider must &quot;[conduct] a criminal background check of the applicant in accordance with the requirements of Chapter 15 of Title 4&quot; and check the U.S. DOJ&#39;s National Sex Offender Public Registry <a class="cite" href="https://code.dccouncil.gov/us/dc/council/code/sections/38-951.03" rel="noopener nofollow" target="_blank">DC Code §38-951.03</a>. The mechanism itself is FBI fingerprint-based: applicants, employees, and volunteers &quot;shall submit to a criminal background check by means of fingerprint and National Criminal Information Center checks conducted by the Mayor and the FBI&quot; <a class="cite" href="https://code.dccouncil.gov/us/dc/council/code/sections/4-1501.05" rel="noopener nofollow" target="_blank">DC Code §4-1501.05</a>. The 2022 &quot;Educator Background Check Streamlining Amendment Act&quot; (D.C. Law 24-317) updated the regime to require review of each former employer over the preceding 7 years, or the applicant&#39;s last 3 employers, whichever is longer, plus the sex-offender-registry check <a class="cite" href="https://code.dccouncil.gov/us/dc/council/laws/24-317" rel="noopener nofollow" target="_blank">D.C. Law 24-317</a>. OSSE&#39;s own implementing page confirms: &quot;All applicants applying for an educator credential issued by the District of Columbia&#39;s Office of the State Superintendent of Education (OSSE)&quot; must submit an FBI Identity History Summary Check <span class="cite">(source: OSSE, How to Obtain an FBI IHSC, <a href="https://osse.dc.gov/page/how-obtain-fbi-identity-history-summary-check-ihsc">https://osse.dc.gov/page/how-obtain-fbi-identity-history-summary-check-ihsc</a>)</span>, and DCPS&#39;s own page states plainly that &quot;all current and prospective DCPS employees, program partners, contractors, student teachers, interns, and volunteers must complete a criminal background check before providing services to any DCPS student, school, or office,&quot; with clearances expiring two years from issue <span class="cite">(source: DCPS, Fingerprinting and ID Badge Processes, <a href="https://dcps.dc.gov/page/dcps-fingerprinting-background-check-and-id-badge-processes-and-requirements">https://dcps.dc.gov/page/dcps-fingerprinting-background-check-and-id-badge-processes-and-requirements</a>)</span>.</p>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n<h2 id="how-dcps-and-dc39s-charter-leas-are-structured">How DCPS and DC&#39;s charter LEAs are structured</h2>\n<p>DC&#39;s structure is unusually decentralized for special-education purposes. OSSE defines it directly: &quot;District of Columbia Public Schools (DCPS) is its own LEA, and each charter network is its own LEA. Each LEA creates its own set of policies and helps ensure the on-the-ground implementation of federal and state policies&quot; <span class="cite">(source: OSSE, Educator Workforce Report, Oct. 2024, Glossary, p.5)</span>. The DC Public Charter School Board (DC PCSB), which describes itself as &quot;an independent DC government agency and the sole authorizer of public charter schools in our nation&#39;s capital&quot; <span class="cite">(source: DC PCSB, About Us, <a href="https://dcpcsb.org/about-us">https://dcpcsb.org/about-us</a>)</span>, reported as of July 2025 that it &quot;provides oversight to 133 public charter schools, which are managed by 66 independently run nonprofit organizations called local education agencies,&quot; serving 47,525 students — 48% of all DC public school students <span class="cite">(source: DC PCSB, Public Charter School Data, <a href="https://dcpcsb.org/about-us/public-charter-school-data">https://dcpcsb.org/about-us/public-charter-school-data</a>)</span>. For a network operating multiple campuses, that means special-education compliance — Child Find, evaluations, IEP development, related-service delivery — sits with the network itself, not with a larger authorizing district, at every one of its schools.</p>\n<h2 id="charter-networks-staffing-in-dc">Charter networks staffing in DC</h2>\n<p>With charter schools serving roughly half the city&#39;s public-school population, DC has one of the country&#39;s densest concentrations of multi-site charter operators:</p>\n<ul>\n<li><strong>KIPP DC</strong> serves 7,300 students across 22 schools and 8 campuses, PreK3-12 <span class="cite">(source: <a href="https://www.kippdc.org/about-kipp-dc/">https://www.kippdc.org/about-kipp-dc/</a>)</span>.</li>\n<li><strong>Friendship Public Charter School</strong> operates 15 campuses across the DC area, PK3-12 <span class="cite">(source: <a href="https://www.friendshipschools.org/">https://www.friendshipschools.org/</a>)</span>.</li>\n<li><strong>DC Prep</strong> operates in Wards 5, 7, and 8, grades PK3-8 <span class="cite">(source: <a href="https://www.dcprep.org/">https://www.dcprep.org/</a>)</span>.</li>\n<li><strong>Two Rivers Public Charter School</strong> runs three campuses in Northeast DC, Pre-K through grade 8 <span class="cite">(source: <a href="https://www.tworiverspcs.org/who-we-are/our-schools/">https://www.tworiverspcs.org/who-we-are/our-schools/</a>)</span>.</li>\n<li><strong>Center City Public Charter Schools</strong> operates six campuses across DC neighborhoods including Petworth, Shaw, and Capitol Hill <span class="cite">(source: <a href="https://centercitypcs.org/about/locations/">https://centercitypcs.org/about/locations/</a>)</span>.</li>\n<li><strong>Achievement Prep</strong> operates a unified campus in Ward 8 serving PK3 through middle grades <span class="cite">(source: <a href="https://achievementprep.org/">https://achievementprep.org/</a>)</span>.</li>\n</ul>\n<p>FocusedEDU has staffed DC public charter schools directly — see our case studies: <a href="https://www.focusedu-staffing.com/case-studies/idea-public-charter-school">IDEA Public Charter School — Case Study</a> and <a href="https://www.focusedu-staffing.com/case-studies/cesar-chavez-public-charter-school">Cesar Chavez Public Charter School — Case Study</a>.</p>\n<h2 id="what-focusededu-does-in-dc">What FocusedEDU does in DC</h2>\n<p>We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins. A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.</p>\n',
    faqs: [
      {
        q: "What background check does DC require before someone can work in a school?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Why is special education DC's hardest role to staff?",
        a: "OSSE's own workforce data shows special education carrying an 8% vacancy rate on 1,140 FTEs citywide — double the 4% overall vacancy rate — and the share of teachers assigned to special education has been shrinking, not growing, since SY2021-22 (source: OSSE, Educator Workforce Report, Oct. 2024).",
      },
      {
        q: "Since every DC charter network is its own LEA, who's actually responsible for special-education compliance?",
        a: 'The charter network itself — OSSE defines DCPS and "each charter network" as its own separate LEA, each fully responsible for Child Find, evaluations, IEPs, and related-service delivery at every one of its campuses (source: OSSE, Educator Workforce Report, Glossary).',
      },
      {
        q: "Does FocusedEDU work with DC's charter schools?",
        a: "Yes — charter networks are our highest-priority partner segment . DC PCSB oversees 133 public charter schools serving 48% of the city's public-school students (source: DC PCSB, Public Charter School Data, July 2025), and we've staffed DC charter LEAs directly — see our case studies on IDEA Public Charter School and Cesar Chavez Public Charter School.",
      },
      {
        q: "How fast can a hard-to-fill role actually get placed in DC?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
    ],
    related: [
      {
        label: "Maryland Special Education Staffing",
        slug: "maryland-special-education-staffing",
      },
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
    ],
  },
  {
    slug: "colorado-education-staffing",
    eyebrow: "Education staffing · Colorado",
    h1: "Colorado Education Staffing",
    metaTitle: "Colorado Education Staffing Agency",
    metaDescription:
      "Colorado Education Staffing with FocusedEDU. Discuss your open roles, location, qualifications, and staffing options.",
    hero: "Colorado Education Staffing with a search built around your location, setting, schedule, and required qualifications. Share your opening with our team to discuss candidates and next steps.",
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading: "Staffing and conversion terms",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        heading: "What we screen for in Colorado candidates",
        body: "Clearances get a candidate to the starting line; the screen decides who reaches your shortlist. It is matched to the role: special education teachers on IEP writing, meeting experience, and behavior-plan implementation; paraprofessionals on de-escalation, personal-care comfort, and IEP data collection; substitutes on classroom management under ambiguity and a morning-of reliability record we verify with prior schools; clinicians on Colorado licensure and multi-building caseload management.\n\nThe methodology was built by our founder, Robert Flom, a former K-12 teacher — which is why the interview sounds like a case review of the job rather than a personality screen. Licensure is verified with the state for the specific role, not read off a résumé.",
      },
      {
        heading: "A search built around your requirements",
        body: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
    ],
    faqs: [
      {
        q: "Does FSG staff Colorado schools?",
        a: "Yes. Lotus School for Excellence in Aurora is a Colorado client, and its HR Director wrote us a reference letter in October 2024 describing the experience as outstanding. That letter is published in full at /references.",
      },
      {
        q: "What does it cost to hire one of your contract educators permanently in Colorado?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "How do you coordinate screening and pre-start documentation?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Will you also staff the district competing with ours?",
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "Do you staff outside the Denver metro?",
        a: "Yes. Front Range hiring and Western Slope or Eastern Plains hiring are genuinely different problems — one is a crowded metro pool, the other requires candidates willing to relocate — and we scope them differently rather than treating the state as a single territory. We will tell you honestly on the discovery call what a given role looks like in your part of the state.",
      },
      {
        q: "How fast can you fill Colorado openings?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
    ],
    quote: {
      text: "We are thrilled that we can transition our contract employee to permanent status without a buyout fee. The experience has been outstanding.",
      name: "Kelly Hamm",
      role: "HR Director, Lotus School for Excellence (Aurora, CO)",
    },
    related: [
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
      {
        label: "Education Staffing Agency Cost",
        slug: "education-staffing-agency-cost",
      },
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
    stats: [],
    steps: [
      {
        n: "01",
        title: "Define the opening",
        body: "Share the role, location, schedule, setting, and required qualifications.",
      },
      {
        n: "02",
        title: "Agree on the search",
        body: "Review requirements, the engagement model, and terms with our team.",
      },
      {
        n: "03",
        title: "Review candidates",
        body: "We screen for role fit and coordinate interviews. Your team makes the hiring decision.",
      },
      {
        n: "04",
        title: "Coordinate onboarding",
        body: "We work with your team on required pre-start documentation and placement support.",
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
        heading: "Staffing arrangements and permanent hiring",
        body: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        heading: "Screening, documentation, and an approved start",
        body: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.\n\nA start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
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
        q: "How do you coordinate screening and pre-start documentation?",
        a: "We screen candidates against the role and setting, coordinate interviews, and track the credentials and documentation required for the assignment. Initial screening and pre-start clearance are separate stages. We work with your team on the required approvals before an assignment begins.",
      },
      {
        q: "Will you also staff the district competing with ours?",
        a: "We build the search around your specific opening: the role, location, schedule, required qualifications, and setting. Your team reviews candidates and makes the hiring decision. Any exclusivity arrangement must be defined in your agreement, including its geography and scope.",
      },
      {
        q: "Do you staff rural North Carolina districts?",
        a: "Yes, and we scope them differently. A shallow local pool with candidates who would need to relocate is a different problem from a crowded metro market, and pretending otherwise is how vendors overpromise. We will tell you honestly on the discovery call what a given role looks like in your county.",
      },
      {
        q: "What does it cost to hire one of your contract educators permanently?",
        a: "Contract staffing is billed at the agreed rate for hours worked. Temp-to-perm eligibility, worked-hour requirements, and any early-conversion fee follow your signed agreement. Direct-hire placement fees are agreed separately. A professional must choose to accept a permanent position.",
      },
      {
        q: "How fast can you fill North Carolina openings?",
        a: "A start date depends on the role, location, candidate availability, interviews, and required approvals. We discuss those factors with your team and keep you informed as the search progresses.",
      },
    ],
    related: [
      {
        label: "Special Education Staffing",
        slug: "special-education-staffing",
      },
      { label: "Paraprofessional Staffing", slug: "paraprofessional-staffing" },
      {
        label: "Substitute Teacher Staffing",
        slug: "substitute-teacher-staffing",
      },
      {
        label: "School District Staffing Vendor",
        slug: "school-district-staffing-vendor",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((p) => p.slug === slug);
}
