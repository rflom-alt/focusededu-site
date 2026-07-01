/**
 * Blog author (E-E-A-T signal for search + GEO). Rendered as a bio box on every
 * post and emitted as a Person entity in the article's JSON-LD.
 * TODO: confirm title + swap `links` for Robert's personal LinkedIn/handles.
 */
export type AuthorLink = {
  label: string;
  href: string;
  kind: "linkedin" | "email" | "instagram" | "facebook";
};

export const author = {
  name: "Robert Flom",
  title: "Founder, Focused Staffing Group — former K-12 teacher",
  bio: "Robert founded Focused Staffing Group after years teaching in K-12 classrooms. He writes about education staffing, special education, and building school teams that actually stay — from the perspective of someone who has stood at the front of the room.",
  photo: "/photography/founder-headshot.jpg",
  // Personal profile — used for Person schema `url` + the bio's LinkedIn link.
  profileUrl: "https://www.linkedin.com/in/rflom/",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rflom/", kind: "linkedin" },
    { label: "Email", href: "mailto:hello@focused-staffing.com", kind: "email" },
  ] as AuthorLink[],
};
