import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnalyticsEvents } from "@/components/seo/AnalyticsEvents";
import { edu } from "@/lib/content";

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.focused-staffing.com/#organization",
      name: "Focused Staffing Group",
      legalName: "Focused Staffing Group, LLC",
      url: "https://www.focused-staffing.com",
      logo: "https://www.focused-staffing.com/logos/focused-staffing-group.png",
      description:
        "Focused Staffing Group is a mission-driven workforce partner placing behavioral health and K-12 education professionals across the Mid-Atlantic and beyond through its Focused Behavioral and FocusedEDU divisions.",
      foundingDate: "2014",
      founder: {
        "@id": "https://www.focused-staffing.com/about/robert-flom#person",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "175 Strafford Avenue, Suite One #208",
        addressLocality: "Wayne",
        addressRegion: "PA",
        postalCode: "19087",
        addressCountry: "US",
      },
      telephone: "+14844828223",
      email: "hello@focused-staffing.com",
      sameAs: [
        "https://www.linkedin.com/company/focusedstaffinggroup/",
        "https://www.tiktok.com/@focusedstaffinggroup",
      ],
      subOrganization: [
        { "@id": "https://www.focused-staffing.com/#behavioral" },
        { "@id": "https://www.focusedu-staffing.com/#organization" },
      ],
    },
    {
      "@type": ["EmploymentAgency", "LocalBusiness"],
      "@id": "https://www.focusedu-staffing.com/#organization",
      name: "FocusedEDU",
      // The names people and other sites actually use for this business, so
      // search engines resolve them to one entity rather than a lookalike.
      alternateName: ["FocusedEDU Staffing Group", "Focused Staffing Group"],
      legalName: "Focused Staffing Group, LLC",
      url: "https://www.focusedu-staffing.com",
      logo: "https://www.focusedu-staffing.com/logos/focusededu-white.png",
      image: "https://www.focusedu-staffing.com/logos/focusededu-white.png",
      parentOrganization: {
        "@id": "https://www.focused-staffing.com/#organization",
        name: "Focused Staffing Group, LLC",
        url: "https://www.focused-staffing.com",
      },
      founder: {
        "@type": "Person",
        "@id": "https://www.focused-staffing.com/about/robert-flom#person",
        name: "Robert Flom",
        url: "https://www.focusedu-staffing.com/about/robert-flom",
      },
      description:
        "FocusedEDU is the K-12 education staffing division of Focused Staffing Group, placing special education teachers, paraprofessionals, substitute teachers, school nurses, and related-service providers for schools and districts.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "175 Strafford Avenue, Suite One #208",
        addressLocality: "Wayne",
        addressRegion: "PA",
        postalCode: "19087",
        addressCountry: "US",
      },
      telephone: "+14844828223",
      email: "hello@focused-staffing.com",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.04571,
        longitude: -75.39851,
      },
      // Nationwide: the country, then every state and DC, home markets first so
      // the order mirrors the "we serve" copy on the site.
      areaServed: [
        { "@type": "Country", name: "United States" },
        ...[
          "Pennsylvania",
          "New Jersey",
          "Delaware",
          "Maryland",
          "District of Columbia",
          "New York",
          "North Carolina",
          "Virginia",
          "Colorado",
          "Alabama",
          "Alaska",
          "Arizona",
          "Arkansas",
          "California",
          "Connecticut",
          "Florida",
          "Georgia",
          "Hawaii",
          "Idaho",
          "Illinois",
          "Indiana",
          "Iowa",
          "Kansas",
          "Kentucky",
          "Louisiana",
          "Maine",
          "Massachusetts",
          "Michigan",
          "Minnesota",
          "Mississippi",
          "Missouri",
          "Montana",
          "Nebraska",
          "Nevada",
          "New Hampshire",
          "New Mexico",
          "North Dakota",
          "Ohio",
          "Oklahoma",
          "Oregon",
          "Rhode Island",
          "South Carolina",
          "South Dakota",
          "Tennessee",
          "Texas",
          "Utah",
          "Vermont",
          "Washington",
          "West Virginia",
          "Wisconsin",
          "Wyoming",
        ].map((name) => ({ "@type": "State", name })),
      ],
      sameAs: [
        "https://www.facebook.com/FocusedStaffing",
        "https://www.instagram.com/focusededustaffing.group/",
        "https://www.linkedin.com/company/focusededu-staffing-group/",
        "https://www.tiktok.com/@focusedstaffinggroup",
      ],
      knowsAbout: [
        "Special education staffing",
        "Paraprofessional staffing",
        "Substitute teacher staffing",
        "School nursing staffing",
        "Related services staffing",
        "K-12 education staffing",
        "School district staffing",
      ],
    },
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.focusedu-staffing.com/#website",
  name: edu.brand.name,
  url: "https://www.focusedu-staffing.com",
  publisher: { "@id": "https://www.focusedu-staffing.com/#organization" },
};

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.focusedu-staffing.com"),
  title: {
    default: "K-12 Staffing & Substitute Teachers | FocusedEDU",
    template: "%s \u00b7 FocusedEDU",
  },
  description:
    "K-12 staffing for substitutes, special education, and paraprofessionals: an exclusive pipeline built by a former teacher, with temp-to-perm at no cost.",
  openGraph: {
    title: "K-12 Staffing & Substitute Teachers | FocusedEDU",
    description:
      "K-12 staffing for substitutes, special education, and paraprofessionals: an exclusive pipeline built by a former teacher, with temp-to-perm at no cost.",
    type: "website",
    locale: "en_US",
    siteName: "FocusedEDU",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-brand="edu"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0PJSJTFBQC"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0PJSJTFBQC');
          `}
        </Script>
        <link rel="preconnect" href="https://crm.focused-staffing.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <JsonLd data={ORG_SCHEMA} />
        <JsonLd data={WEBSITE_SCHEMA} />
        <AnalyticsEvents />
        <SmoothScroll>
          <Header
            logo={edu.brand.logoWhite}
            brandName={edu.brand.name}
            nav={edu.nav}
            cta={edu.cta.primary}
            ctaCandidate={{ label: "View open roles", href: edu.jobBoard }}
          />
          <main className="flex-1">{children}</main>
          <Footer
            brand={edu.brand}
            contact={edu.contact}
            nav={edu.nav}
            social={edu.social}
            jobBoard={edu.jobBoard}
            submitResume={edu.submitResume}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
