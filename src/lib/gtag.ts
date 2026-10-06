type Gtag = (...args: unknown[]) => void;

/**
 * Calls GA4's gtag() once the tag has loaded (layout.tsx, afterInteractive);
 * a no-op before then and wherever GA is blocked. Client-side only.
 */
export const gtag = (...args: unknown[]) => {
  const g = (window as unknown as { gtag?: Gtag }).gtag;
  if (g) g(...args);
};
