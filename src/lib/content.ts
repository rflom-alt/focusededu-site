/**
 * Brand content model. The Behavioral sibling site implements the same
 * `SiteContent` shape with its own copy, so every component below is reused
 * verbatim across both brands.
 *
 * Copy is the client's real content (pulled from the live site) wherever it is
 * their own words; framing/headlines are elevated per the rebuild brief.
 *
 * STATS marked `provisional` need client validation before launch (do not invent numbers).
 */

export type NavItem = { label: string; href: string };
export type CtaItem = { label: string; href: string };
export type Differentiator = {
  icon: string; // lucide icon name
  title: string;
  body: string;
};
export type Step = { n: string; title: string; body: string };
export type Stat = { value: string; label: string; provisional?: boolean };
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
};
export type Client = { name: string; file: string };

export interface SiteContent {
  brand: { name: string; parent: string; tagline: string; logoWhite: string };
  contact: {
    phone: string;
    phoneHref: string;
    email: string;
    scheduler: string; // HubSpot Meetings booking link
    address: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    tiktok: string;
  };
  jobBoard: string;
  submitResume: string;
  nav: NavItem[];
  cta: { primary: CtaItem; secondary: CtaItem };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    photo: string;
    photoAlt: string;
  };
  differentiators: Differentiator[];
  stats: Stat[];
  steps: Step[];
  clients: Client[];
  testimonials: Testimonial[];
  community: {
    eyebrow: string;
    title: string;
    body: string;
    photo: string;
    photoAlt: string;
    points: string[];
  };
  finalCta: { title: string; body: string };
}

export const edu: SiteContent = {
  brand: {
    name: "FocusedEDU",
    parent: "Focused Staffing Group",
    tagline: "Our focus begins with you.",
    logoWhite: "/logos/focusededu-white.png",
  },
  contact: {
    phone: "(484) 482-8223",
    phoneHref: "tel:+14844828223",
    email: "hello@focused-staffing.com",
    scheduler:
      "https://meetings.hubspot.com/robert-flom/focused-staffing-group-discovery-call",
    address: "175 Strafford Avenue, Suite One #208, Wayne, PA 19087",
  },
  social: {
    facebook: "https://www.facebook.com/FocusedStaffing",
    instagram: "https://www.instagram.com/focusededustaffing.group/",
    linkedin: "https://www.linkedin.com/company/focusededu-staffing-group/",
    tiktok: "https://www.tiktok.com/@focusedstaffinggroup",
  },
  jobBoard: "https://apply.focused-staffing.com/jobs",
  submitResume: "https://apply.focused-staffing.com/talent-network",
  nav: [
    { label: "For Schools", href: "/for-schools" },
    { label: "Services", href: "/services" },
    { label: "For Job Seekers", href: "/candidates" },
    { label: "About", href: "/about" },
    { label: "Our Impact", href: "/our-impact" },
    { label: "Resources", href: "/resources" },
  ],
  cta: {
    primary: { label: "Discuss your staffing needs", href: "/book-a-call" },
    secondary: { label: "Send a staffing request", href: "/request-staff" },
  },
  hero: {
    eyebrow: "K–12 education staffing",
    title: "Staff the school roles your students are counting on.",
    subtitle:
      "Special education teachers, paraprofessionals, substitutes, and related-service providers. Recruiting and screening built around your school, your students, and your open roles.",
    photo: "/photography/classroom-lesson.jpg",
    photoAlt:
      "A teacher leading an engaged lesson in a bright, modern classroom of diverse students",
  },
  differentiators: [
    {
      icon: "Users",
      title: "Recruiting around your requirements",
      body: "Your setting, schedule, and role requirements guide the search and candidate screening.",
    },
    {
      icon: "BadgeCheck",
      title: "A clear path to an approved start",
      body: "Our team coordinates required credentials and onboarding documentation with your organization.",
    },
    {
      icon: "Handshake",
      title: "The engagement that fits the need",
      body: "Discuss contract staffing, temp-to-perm, and direct hire with clear terms before work begins.",
    },
    {
      icon: "HeartPulse",
      title: "A team to keep things moving",
      body: "Get help coordinating candidate submissions, interviews, and placement support.",
    },
  ],
  stats: [],
  steps: [
    {
      n: "01",
      title: "Tell us what is open",
      body: "Share the role, school, schedule, caseload, and qualifications you need.",
    },
    {
      n: "02",
      title: "Review the right fit",
      body: "We recruit and screen for your requirements, coordinate interviews, and share candidates for your decision.",
    },
    {
      n: "03",
      title: "Coordinate an approved start",
      body: "We track required documentation and coordinate onboarding with your team. You retain the hiring decision.",
    },
  ],
  clients: [
    {
      name: "Christina School District",
      file: "/clients/Christina-School-District.png",
    },
    {
      name: "Leadership Public Schools",
      file: "/clients/Leadership-Public-School.png",
    },
    {
      name: "Charlotte-Mecklenburg Schools",
      file: "/clients/Charlotte-Mecklenburg-Schools.png",
    },
    {
      name: "Chester Community Charter School",
      file: "/clients/Chester-Community-Charter-School.png",
    },
    {
      name: "Brandywine School District",
      file: "/clients/Brandywine-School-District.png",
    },
    {
      name: "Odyssey Charter School",
      file: "/clients/Odyssey-Charter-School.png",
    },
    {
      name: "Breakthrough Public Schools",
      file: "/clients/Breakthrough-Public-School.png",
    },
    { name: "First PA", file: "/clients/First-PA.png" },
    { name: "TRECA", file: "/clients/Treca.png" },
    {
      name: "Bridgeton Public Schools",
      file: "/clients/Bridgeton-Public-Schools.png",
    },
    {
      name: "Frederick County Public Schools",
      file: "/clients/Frederick-County-Public-Schools.png",
    },
  ] as Client[],
  testimonials: [
    {
      quote:
        "Focused Staffing Group has consistently matched us with exceptional talent who have made a significant impact on our student learning experience. The quality of the candidates they have sourced for us has been nothing short of exceptional.",
      name: "Erin D. Murphy-Richardson",
      role: "Superintendent",
      org: "The Barack Obama Green Charter Schools",
    },
    {
      quote:
        "Their innovative temp-to-perm clause has allowed us to assess the suitability of referred professionals before making permanent hiring decisions, all at no cost to the school. This flexibility has been instrumental in ensuring our staffing needs are met with the highest level of quality.",
      name: "Elias Pappas",
      role: "CEO",
      org: "Odyssey Charter School",
    },
    {
      quote:
        "They have consistently provided us with high-quality special education teachers, paraprofessionals, and related service providers who demonstrate professionalism, expertise, and a genuine commitment to the education and well-being of our students.",
      name: "David Weathington, MSW, LSW, Ed.D",
      role: "CEO",
      org: "Buttonwood Farms / Delta School",
    },
    {
      quote:
        "One of the key strengths of Focused Staffing Group is their responsiveness and flexibility. They have always been quick to respond to our staffing needs, often providing suitable candidates at short notice.",
      name: "Zavia Herring",
      role: "Director of HR",
      org: "Renaissance Academy Charter School",
    },
  ] as Testimonial[],
  community: {
    eyebrow: "Focused on Community",
    title: "Staffing is our work. Communities are our why.",
    body: "Filling a role is only part of the story. Through our school-supply and backpack donation drives, FocusedEDU shows up for the students, classrooms, and neighborhoods our partner schools serve — making sure more kids start the year with the tools they need to succeed.",
    photo: "/photography/community-backpacks.jpg",
    photoAlt:
      "Diverse students wearing backpacks heading up the steps into school",
    points: [
      "Backpack & school-supply drives for partner districts",
      "Giving back where our educators teach and live",
      "A mission our candidates are proud to join",
    ],
  },
  finalCta: {
    title: "Let's build the team your students deserve.",
    body: "Discuss your priority roles, requirements, and the next step in a free 30-minute staffing call.",
  },
};
