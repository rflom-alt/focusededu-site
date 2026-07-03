import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "@/components/ui/SocialIcons";
import type { SiteContent } from "@/lib/content";

export function Footer({
  brand,
  contact,
  nav,
  social,
  jobBoard,
  submitResume,
}: {
  brand: SiteContent["brand"];
  contact: SiteContent["contact"];
  nav: SiteContent["nav"];
  social: SiteContent["social"];
  jobBoard: string;
  submitResume: string;
}) {
  const year = 2026;
  const socials = [
    { href: social.facebook, Icon: Facebook, label: "Facebook" },
    { href: social.instagram, Icon: Instagram, label: "Instagram" },
    { href: social.linkedin, Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        {/* Brand + tagline */}
        <div className="max-w-sm">
          <Image
            src={brand.logoWhite}
            alt={brand.name}
            width={6870}
            height={2243}
            className="h-8 w-auto"
          />
          <p className="mt-5 font-display text-lg leading-snug text-white/85">
            {brand.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/55">
            A {brand.parent} company — a premium, mission-driven workforce partner for
            K-12 schools.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-teal-400 hover:text-white"
              >
                <Icon className="size-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <nav className="text-sm">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-teal-400">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={jobBoard}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Job Board
              </a>
            </li>
            <li>
              <a
                href={submitResume}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Submit your résumé
              </a>
            </li>
            <li>
              <Link href="/our-impact#connect" className="transition-colors hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div className="text-sm">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-teal-400">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-teal-400" strokeWidth={1.6} />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-teal-400" strokeWidth={1.6} />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal-400" strokeWidth={1.6} />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>© {year} {brand.parent}. All rights reserved.</p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
