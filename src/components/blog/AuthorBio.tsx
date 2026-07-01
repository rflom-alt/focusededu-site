import Image from "next/image";
import { Mail } from "lucide-react";
import { Facebook, Instagram, Linkedin } from "@/components/ui/SocialIcons";
import { author, type AuthorLink } from "@/lib/author";

const BRAND_ICON = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook };

function LinkIcon({ link }: { link: AuthorLink }) {
  const cls =
    "flex size-9 items-center justify-center rounded-full border border-cloud bg-white text-slate-ink transition hover:border-teal-500/50 hover:text-teal-700";
  if (link.kind === "email") {
    return (
      <a href={link.href} aria-label={link.label} className={cls}>
        <Mail className="size-4" strokeWidth={1.8} />
      </a>
    );
  }
  const Icon = BRAND_ICON[link.kind];
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className={cls}
    >
      <Icon className="size-4" strokeWidth={1.8} />
    </a>
  );
}

/** Author bio box shown at the foot of every article. */
export function AuthorBio() {
  return (
    <aside className="mx-auto mt-14 max-w-2xl rounded-2xl border border-cloud bg-mist p-6 sm:p-7">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-full ring-1 ring-cloud">
          <Image src={author.photo} alt={author.name} fill sizes="80px" className="object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Written by
          </p>
          <p className="mt-1 font-display text-lg font-semibold text-navy-950">{author.name}</p>
          <p className="text-sm text-slate-ink">{author.title}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-ink">{author.bio}</p>
          <div className="mt-4 flex items-center gap-2.5">
            {author.links.map((l) => (
              <LinkIcon key={l.label} link={l} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
