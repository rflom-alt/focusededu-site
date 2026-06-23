/** Tiny className combiner — keeps JSX readable without pulling in a dep. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
