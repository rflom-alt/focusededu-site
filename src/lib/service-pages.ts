/**
 * LLM-optimized service & location pages (per the FSG build brief).
 * One data entry per indexable route at /<slug>; rendered by app/[service]/page.tsx.
 * Each page names roles, buyer, setting, and geography so search engines and AI
 * answer engines can confidently surface FocusedEDU for specific queries.
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
      "Focused Staffing Group helps school districts, charter schools, and education organizations fill hard-to-staff special education and student-support roles with responsive, compliance-minded staffing.",
    hero: "Focused Staffing Group helps school districts, charter schools, and education organizations fill hard-to-staff special education and student-support roles with responsive recruiting, clear communication, and compliance-minded staffing support.",
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
    sections: [
      {
        heading: "Who we support",
        body: "We support public school districts, charter schools, special education departments, HR teams, procurement teams, and education organizations that need dependable staffing partners for hard-to-fill student-support roles.",
      },
      {
        heading: "Why districts choose FSG",
        body: "Districts need more than resumes. They need communication, urgency, screening, documentation, and a partner that understands the operational pressure behind every open role.",
      },
      {
        heading: "Our process",
        body: "We clarify the need, source candidates, screen for role fit, coordinate credentialing and documentation, communicate progress, and keep the district informed through placement and onboarding.",
      },
    ],
    faqs: [
      {
        q: "What roles can Focused Staffing Group support?",
        a: "FSG supports special education teachers, paraprofessionals, related service providers, school psychologists, SLPs, OTs, PTs, BCBAs, RBTs, and other school-based support roles.",
      },
      {
        q: "Does FSG work with school districts and charter schools?",
        a: "Yes. FSG supports school districts, charter schools, and education organizations that need staffing help for hard-to-fill roles.",
      },
      {
        q: "Why is special education staffing different?",
        a: "Special education staffing affects services, compliance, families, classroom coverage, and student consistency. The vendor must understand urgency and communication.",
      },
    ],
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
      "Focused Staffing Group helps schools recruit and place paraprofessionals, instructional aides, classroom support staff, and 1:1 aides for K-12 and special education settings.",
    hero: "Focused Staffing Group helps schools recruit and place paraprofessionals, instructional aides, classroom support staff, and 1:1 aides for K-12 and special education settings.",
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
    sections: [
      {
        heading: "The challenge",
        body: "Paraprofessional vacancies affect classroom support, student consistency, teacher workload, and IEP-related services. Districts need a staffing partner that can move quickly and communicate clearly.",
      },
      {
        heading: "How FSG helps",
        body: "We help build candidate pipelines, screen for school-based fit, coordinate onboarding requirements, and keep school teams updated throughout the process.",
      },
    ],
    faqs: [
      {
        q: "Can FSG help with urgent paraprofessional needs?",
        a: "Yes. FSG can begin recruiting quickly and help districts build candidate pipelines for current and future paraprofessional openings.",
      },
      {
        q: "Does FSG support 1:1 aide roles?",
        a: "Yes. FSG can support 1:1 aides, classroom aides, and other school-based support roles depending on client needs.",
      },
    ],
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
      "Focused Staffing Group is a school district staffing partner for hard-to-fill education, special education, related services, and school-based behavioral health roles.",
    hero: "Focused Staffing Group is a school district staffing partner for hard-to-fill education, special education, related services, and school-based behavioral health roles.",
    photo: PHOTOS[2],
    sections: [
      {
        heading: "Built for district needs",
        body: "School districts need vendors who understand speed, compliance, documentation, communication, and the operational impact of open roles.",
      },
      {
        heading: "Roles and services",
        body: "FSG supports special education, paraprofessional, related services, behavioral health, and other education support positions.",
      },
      {
        heading: "Vendor expectations",
        body: "A strong staffing vendor should provide clear ownership, consistent updates, responsive recruiting, candidate screening, and a process for replacing or rebuilding pipelines when candidates fall through.",
      },
    ],
    faqs: [
      {
        q: "What makes FSG different from a general staffing agency?",
        a: "FSG focuses on education and student-support staffing, with an understanding of school environments and hard-to-fill roles.",
      },
      {
        q: "Can FSG support public-sector staffing requirements?",
        a: "FSG works with public-sector and education clients and understands the importance of documentation, insurance, onboarding, and communication.",
      },
    ],
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
      "Focused Staffing Group supports K-12 schools with staffing for instructional, special education, related services, paraprofessional, and student-support roles.",
    hero: "Focused Staffing Group supports K-12 schools with staffing for instructional, special education, related services, paraprofessional, and student-support roles.",
    photo: PHOTOS[3],
    roles: [
      "Teachers",
      "Special education teachers",
      "Paraprofessionals",
      "Related service providers",
      "School psychologists",
      "Behavioral health staff",
    ],
    sections: [
      {
        heading: "K-12 staffing support",
        body: "We help schools respond to staffing gaps that affect classrooms, services, schedules, and student support.",
      },
      {
        heading: "Why it matters",
        body: "Every open role affects students, teachers, administrators, and families. FSG helps schools move with urgency and clarity.",
      },
    ],
    faqs: [
      {
        q: "Does FSG only support special education?",
        a: "No. Special education is a major focus, but FSG can support a broader range of K-12 staffing needs.",
      },
      {
        q: "Does FSG support charter schools?",
        a: "Yes. FSG works with school districts, charter schools, and education organizations.",
      },
    ],
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
      "Focused Staffing Group helps schools recruit related service providers including SLPs, OTs, PTs, school psychologists, BCBAs, and other student-support professionals.",
    hero: "Focused Staffing Group helps schools recruit related service providers including SLPs, OTs, PTs, school psychologists, BCBAs, and other student-support professionals.",
    photo: PHOTOS[0],
    roles: ["SLPs", "OTs", "PTs", "School psychologists", "BCBAs", "RBTs", "Behavior support staff"],
    sections: [
      {
        heading: "Why related services staffing matters",
        body: "When related service roles sit open, student services can be delayed and teams become stretched.",
      },
      {
        heading: "Our approach",
        body: "FSG helps source, screen, and coordinate candidates while keeping district teams informed.",
      },
    ],
    faqs: [
      {
        q: "Which related services roles can FSG support?",
        a: "FSG can support SLPs, OTs, PTs, school psychologists, BCBAs, RBTs, and other school-based service roles.",
      },
      {
        q: "Can FSG help with hard-to-fill openings?",
        a: "Yes. FSG focuses on hard-to-fill education and student-support roles.",
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
      "Focused Staffing Group supports school-based behavioral health staffing for education organizations that need BCBAs, RBTs, behavior technicians, and support staff.",
    hero: "Focused Staffing Group supports school-based behavioral health staffing needs for education organizations that need BCBAs, RBTs, behavior technicians, and other support staff.",
    photo: PHOTOS[1],
    roles: ["BCBAs", "RBTs", "Behavior technicians", "Behavioral support staff", "Paraprofessionals", "Related student-support roles"],
    sections: [
      {
        heading: "Behavioral support in schools",
        body: "Schools increasingly need behavioral health and student-support professionals who can support classrooms, individual students, and programs.",
      },
      {
        heading: "FSG's value",
        body: "We combine education staffing experience with behavioral health recruiting to support schools facing complex staffing needs.",
      },
    ],
    faqs: [
      {
        q: "Does FSG provide behavioral health staff for schools?",
        a: "Yes. FSG supports school-based behavioral health and student-support staffing needs.",
      },
      {
        q: "What roles are included?",
        a: "Roles may include BCBAs, RBTs, behavior technicians, behavioral support staff, and related school-based support positions.",
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
      "Focused Staffing Group supports education and public-sector clients that need responsive contract staffing partners for hard-to-fill roles.",
    hero: "Focused Staffing Group supports education and public-sector clients that need responsive contract staffing partners for hard-to-fill roles.",
    photo: PHOTOS[2],
    sections: [
      {
        heading: "Why RFP experience matters",
        body: "Public-sector staffing requires more than recruiting. Vendors need documentation, insurance, compliance awareness, communication, and responsiveness.",
      },
      {
        heading: "Contract staffing support",
        body: "FSG supports school districts and education organizations with staffing for special education, paraprofessional, related services, and student-support roles.",
      },
      {
        heading: "Procurement-friendly partnership",
        body: "We understand the importance of timely documents, clear communication, and organized vendor support.",
      },
    ],
    faqs: [
      {
        q: "Does FSG work through RFPs and contracts?",
        a: "FSG works with education and public-sector clients and can support contract staffing requirements.",
      },
      {
        q: "What makes FSG a strong partner for RFP and contract staffing?",
        a: "Documented staffing outcomes, compliance-ready credentialing, and a dedicated regional pipeline — plus the insurance, background-check, and reporting standards public-sector contracts require.",
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
      "Focused Staffing Group supports Pennsylvania school districts, charter schools, and education organizations with staffing for special education, paraprofessionals, related services, and school-based support roles.",
    hero: "Focused Staffing Group supports Pennsylvania school districts, charter schools, and education organizations with staffing for special education, paraprofessionals, related services, and school-based support roles.",
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
    sections: [
      {
        heading: "Pennsylvania school staffing support",
        body: "FSG supports education organizations across the Philadelphia region, Main Line, Montgomery County, Delaware County, Bucks County, Chester County, Lehigh Valley, and surrounding areas.",
      },
      {
        heading: "Local understanding",
        body: "Pennsylvania schools need vendors who understand urgency, geography, communication, and hard-to-fill student-support roles.",
      },
    ],
    faqs: [
      {
        q: "Where in Pennsylvania does FSG support schools?",
        a: "FSG supports the Philadelphia region, Main Line, Montgomery County, Delaware County, Bucks County, Chester County, Lehigh Valley, and other areas as needed.",
      },
      {
        q: "What types of Pennsylvania school roles can FSG fill?",
        a: "FSG supports special education, paraprofessional, related services, behavioral health, and student-support roles.",
      },
    ],
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
      "Focused Staffing Group supports New Jersey education organizations with staffing for special education, paraprofessionals, related services, and school-based support roles.",
    hero: "Focused Staffing Group supports New Jersey education organizations with staffing for special education, paraprofessionals, related services, and school-based support roles.",
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
    sections: [
      {
        heading: "New Jersey school staffing support",
        body: "FSG works with education organizations that need responsive recruiting for hard-to-fill classroom and student-support roles.",
      },
      {
        heading: "Why FSG",
        body: "We understand the pressure schools face when roles remain open and help create a more responsive staffing process.",
      },
    ],
    faqs: [
      {
        q: "Can FSG support New Jersey school staffing?",
        a: "Yes. FSG can support New Jersey education organizations with hard-to-fill staffing needs.",
      },
      {
        q: "Does FSG support paraprofessionals and related services?",
        a: "Yes. FSG supports paraprofessionals, special education, related services, and student-support roles.",
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
      "Focused Staffing Group supports Maryland education organizations with staffing for special education, paraprofessional, related services, and student-support roles.",
    hero: "Focused Staffing Group supports Maryland education organizations with staffing for special education, paraprofessional, related services, and student-support roles.",
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
    sections: [
      {
        heading: "Maryland school staffing support",
        body: "FSG helps education organizations address hard-to-fill special education and student-support openings.",
      },
      {
        heading: "Contract staffing support",
        body: "FSG can support public-sector staffing conversations, contract requirements, and responsive recruiting needs.",
      },
    ],
    faqs: [
      {
        q: "Does FSG support Maryland education staffing?",
        a: "Yes. FSG can support Maryland education organizations with special education and student-support staffing.",
      },
      {
        q: "What areas and roles does FSG cover?",
        a: "FSG supports special education, paraprofessional, related services, and student-support roles for Maryland education organizations.",
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
