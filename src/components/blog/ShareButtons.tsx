import { Mail } from "lucide-react";
import { Facebook, Linkedin } from "@/components/ui/SocialIcons";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

/** Social share row shown at the foot of each article. */
export function ShareButtons({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, Icon: Linkedin },
    { label: "Share on X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`, Icon: XIcon },
    { label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, Icon: Facebook },
    { label: "Share by email", href: `mailto:?subject=${t}&body=${u}`, Icon: Mail },
  ];
  return (
    <div className="mt-12 flex items-center gap-4 border-t border-cloud pt-6">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-ink">Share</span>
      <div className="flex items-center gap-2">
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex size-9 items-center justify-center rounded-full border border-cloud text-slate-ink transition hover:border-teal-500/50 hover:text-teal-700"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
