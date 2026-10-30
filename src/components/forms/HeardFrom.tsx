"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HEARD_FROM_OPTIONS } from "@/lib/leadSource";

/**
 * "How did you hear about us?" — optional. Uncontrolled: the form reads
 * `heard_from` and `heard_from_other` from its FormData (lib/leadSource.ts).
 * `labelled` shows a visible label above the select (forms with labels);
 * otherwise the question sits in the select like the other fields' placeholders.
 */
export function HeardFrom({ field, labelled = false }: { field: string; labelled?: boolean }) {
  const [choice, setChoice] = useState("");
  const select = (
    <span className="relative block">
      <select
        name="heard_from"
        aria-label={labelled ? undefined : "How did you hear about us? (optional)"}
        value={choice}
        onChange={(e) => setChoice(e.target.value)}
        className={`${field} cursor-pointer appearance-none pr-11 [&>option]:text-navy-950 ${choice || labelled ? "" : "text-slate-ink/60!"}`}
      >
        <option value="">{labelled ? "Choose one" : "How did you hear about us?"}</option>
        {HEARD_FROM_OPTIONS.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className={`pointer-events-none absolute right-4 size-4 text-slate-ink ${labelled ? "top-[calc(50%+0.25rem)] -translate-y-1/2" : "top-1/2 -translate-y-1/2"}`}
        strokeWidth={2}
      />
    </span>
  );
  const other =
    choice === "Other" ? (
      <input
        name="heard_from_other"
        aria-label="Where did you hear about us?"
        placeholder="Where did you hear about us?"
        maxLength={200}
        className={field}
      />
    ) : null;

  if (!labelled) {
    return (
      <>
        {select}
        {other}
      </>
    );
  }
  return (
    <>
      <label className="font-medium text-navy-950">
        How did you hear about us?{" "}
        <span className="text-sm font-normal text-slate-ink">(optional)</span>
        {select}
      </label>
      {other}
    </>
  );
}
