"use client";
import { useState } from "react";
import { edu } from "@/lib/content";
export function StaffingRequest() {
  const [opened, setOpened] = useState(false);
  const field =
    "mt-2 w-full rounded-xl border border-cloud bg-white px-4 py-3 text-navy-950 focus:outline-2 focus:outline-teal-700";
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      "Organization: " + f.get("organization"),
      "Role: " + f.get("role"),
      "Location: " + f.get("location"),
      "Schedule and requirements: " + f.get("notes"),
    ].join("\n");
    window.location.href =
      "mailto:" +
      edu.contact.email +
      "?subject=" +
      encodeURIComponent(edu.brand.name + " staffing request") +
      "&body=" +
      encodeURIComponent(body);
    setOpened(true);
  }
  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-cloud bg-white p-6 sm:p-8"
    >
      <h2 className="text-2xl font-semibold text-navy-950">
        Start with the opening.
      </h2>
      <p className="mt-3 text-slate-ink">
        This prepares an email to our staffing team. Review it and press Send in
        your email app.
      </p>
      <div className="mt-6 grid gap-5">
        <label className="font-medium text-navy-950">
          School or organization
          <input
            name="organization"
            autoComplete="organization"
            maxLength={160}
            required
            className={field}
          />
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="font-medium text-navy-950">
            Role to fill
            <input name="role" maxLength={160} required className={field} />
          </label>
          <label className="font-medium text-navy-950">
            City and state
            <input
              name="location"
              autoComplete="address-level2"
              maxLength={120}
              required
              className={field}
            />
          </label>
        </div>
        <label className="font-medium text-navy-950">
          Schedule and requirements{" "}
          <span className="text-sm font-normal text-slate-ink">(optional)</span>
          <textarea name="notes" rows={4} maxLength={1200} className={field} />
        </label>
        <button
          type="submit"
          className="min-h-12 rounded-full bg-teal-500 px-6 py-3 font-semibold text-navy-950 hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          Open email request
        </button>
        {opened && (
          <p role="status" className="text-sm text-slate-ink">
            Your email app should open. Your request is sent only when you press
            Send there. If it did not open, email {edu.contact.email} or book a
            call.
          </p>
        )}
      </div>
      <noscript>
        <p className="mt-4">
          Email your role, location, and schedule to{" "}
          <a href={"mailto:" + edu.contact.email} className="underline">
            {edu.contact.email}
          </a>
          .
        </p>
      </noscript>
    </form>
  );
}
