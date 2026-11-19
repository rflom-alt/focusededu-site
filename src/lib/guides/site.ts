// What differs between the two sites' leadership guides.
export const guideSite = {
  url: "https://www.focusedu-staffing.com",
  brand: "FocusedEDU",
  // A full Person, not only an id: the id lives on another page (and, for the
  // K-12 site, another domain), and a crawler reading this page alone needs the name.
  author: {
    "@type": "Person",
    "@id": "https://www.focused-staffing.com/about/robert-flom#person",
    name: "Robert Flom",
    jobTitle: "Founder, Focused Staffing Group",
    url: "https://www.focused-staffing.com/about/robert-flom",
  },
  publisher: { "@id": "https://www.focusedu-staffing.com/#organization" },
  orgLabel: "School or district",
  hubHeading: "Guides for superintendents, HR and special education leaders",
  hubSub:
    "Long answers to the questions that land on your desk: what an open seat costs, what the law requires when services are missed, and how to keep a classroom covered.",
  moreHeading: "More guides for district leaders.",
  cta: {
    title: "Have an open seat right now?",
    body: "Tell us the role and the building. We tell you who we have and how fast they can start.",
  },
};
