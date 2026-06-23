"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "@/components/ui/SocialIcons";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SiteContent } from "@/lib/content";

export function ContactSection({
  contact,
  social,
  id = "connect",
}: {
  contact: SiteContent["contact"];
  social: SiteContent["social"];
  id?: string;
}) {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry — ${form.name || "FocusedEDU"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\n\n${form.message}`
    );
    // Functional with no backend: opens the visitor's mail client.
    // TODO(before launch): wire to an email service (e.g. Resend) via a route handler.
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-cloud bg-white px-4 py-3 text-navy-950 placeholder:text-slate-ink/60 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";

  const socials = [
    { href: social.facebook, Icon: Facebook, label: "Facebook" },
    { href: social.instagram, Icon: Instagram, label: "Instagram" },
    { href: social.linkedin, Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section id={id} className="bg-mist py-24 lg:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Info */}
        <div>
          <Eyebrow>Connect with us</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold text-navy-950 sm:text-4xl">
            Let&apos;s talk about your team.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-ink">
            Tell us about your staffing challenge and a member of our team will reach out
            within 48 hours. Prefer to talk now? Book a 30-minute discovery call.
          </p>

          <ul className="mt-9 space-y-4 text-navy-900">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-teal-700">
                <Phone className="size-5 text-teal-600" strokeWidth={1.7} />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-teal-700">
                <Mail className="size-5 text-teal-600" strokeWidth={1.7} />
                {contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-teal-600" strokeWidth={1.7} />
              <span>{contact.address}</span>
            </li>
          </ul>

          <a
            href={contact.scheduler}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
          >
            <Calendar className="size-4 text-teal-400" strokeWidth={2} />
            Schedule a call
          </a>

          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-cloud text-navy-700 transition hover:border-teal-500 hover:text-teal-700"
              >
                <Icon className="size-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-cloud bg-white p-7 shadow-[0_30px_60px_-40px_rgba(6,10,31,0.25)] lg:p-9"
        >
          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
            </div>
            <input
              placeholder="School / organization"
              value={form.org}
              onChange={(e) => setForm({ ...form, org: e.target.value })}
              className={field}
            />
            <textarea
              required
              rows={5}
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={field}
            />
            <button
              type="submit"
              className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-teal-500 px-7 font-semibold text-navy-950 transition hover:bg-teal-400"
            >
              Send message
            </button>
            <p className="text-center text-xs text-slate-ink">
              We&apos;ll respond within 48 hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
