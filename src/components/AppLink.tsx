import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * next/link without automatic prefetching. Every page carries 50-100 internal
 * links, and prefetching each visible one counted against Vercel's free ISR
 * read allowance on every visit. Pass prefetch to a single link to opt back in.
 */
export default function AppLink(props: ComponentProps<typeof Link>) {
  return <Link prefetch={false} {...props} />;
}
