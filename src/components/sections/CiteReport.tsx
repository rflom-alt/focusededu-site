"use client";

import { useState } from "react";
import { Check, Copy, Link as LinkIcon } from "lucide-react";

/** Copy-to-clipboard chip used by the "Cite this report" block. */
export function CopyChip({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch {
          /* clipboard unavailable */
        }
      }}
      className="inline-flex items-center gap-2 rounded-full border border-cloud bg-white px-4 py-2 text-sm font-medium text-navy-900 transition hover:border-teal-500/40 hover:text-teal-700"
    >
      {copied ? (
        <Check className="size-4 text-teal-600" strokeWidth={2.2} />
      ) : label === "Copy link" ? (
        <LinkIcon className="size-4" strokeWidth={1.8} />
      ) : (
        <Copy className="size-4" strokeWidth={1.8} />
      )}
      {copied ? "Copied" : label}
    </button>
  );
}
