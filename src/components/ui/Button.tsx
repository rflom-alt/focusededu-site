import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans text-[0.95rem] font-semibold tracking-tight transition-all duration-300 ease-out-quart focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2";

const sizes = {
  md: "h-11 px-6",
  lg: "h-[3.25rem] px-7",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-500 text-navy-950 hover:bg-teal-400 shadow-[0_10px_30px_-12px_rgba(36,203,140,0.7)] hover:shadow-[0_16px_40px_-12px_rgba(36,203,140,0.85)]",
  light:
    "bg-white text-navy-900 hover:bg-cloud shadow-[0_10px_30px_-14px_rgba(6,10,31,0.6)]",
  outline:
    "border border-navy-900/15 text-navy-900 hover:border-navy-900/30 hover:bg-navy-900/[0.03]",
  ghost: "text-white/85 hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  withArrow = true,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  withArrow?: boolean;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="size-[1.05em] transition-transform duration-300 ease-out-quart group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </>
  );

  // Internal route → client-side navigation via next/link.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {inner}
      </Link>
    );
  }

  // External or anchor link.
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {inner}
    </a>
  );
}
