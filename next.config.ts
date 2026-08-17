import type { NextConfig } from "next";

// Defense-in-depth security headers. The site is static (no DB / no server-side
// code at request time), so these are belt-and-suspenders against clickjacking,
// MIME sniffing, and protocol downgrade.
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Content-Security-Policy-Report-Only",
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.hubspot.com https://*.hsappstatic.net https://*.hs-scripts.com https://*.hs-analytics.net https://*.hsforms.com",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.hubspot.com https://*.hubapi.com https://api.indexnow.org",
      "frame-src 'self' https://meetings.hubspot.com https://*.hubspot.com https://www.youtube.com https://www.youtube-nocookie.com",
      "media-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Legacy URLs from the WordPress migration that carried the numeric post ID
  // as the slug. Permanent so any accumulated link equity transfers.
  async redirects() {
    return [
      {
        source: "/blog/1388",
        destination: "/blog/american-education-on-the-brink-136000-teaching-jobs-at-risk",
        permanent: true,
      },
      // Retired: a digital-nomad travel guide that had nothing to do with K-12
      // staffing. Indexed since 2023, so send the URL somewhere useful.
      {
        source: "/blog/the-top-cities-to-work-remote-from-a-guide",
        destination: "/blog",
        permanent: true,
      },
      // Retired: third AutoSEO article on the same teacher-shortage topic. Was
      // live briefly on 2026-08-12 and submitted to IndexNow, so point the URL
      // at the guide we kept rather than letting it 404.
      {
        source: "/blog/how-to-solve-teacher-shortages-strategic-district-solutions-for-2026",
        destination: "/blog/teacher-shortage-solutions-for-schools-2026-strategic-guide",
        permanent: true,
      },
      // Consolidated 2026-08-17. AutoSEO produced several articles per topic
      // that targeted the same search intent under different titles — not
      // duplicate text (body similarity ~1%), but two URLs bidding for one
      // query, which splits ranking signals. The surviving URL in each pair is
      // the longer or better-linked one, and absorbed the other's unique FAQs.
      {
        source: "/blog/bcba-staffing-for-schools-the-2026-strategic-district-resource",
        destination: "/blog/bcba-staffing-for-schools-a-strategic-guide-for-2026",
        permanent: true,
      },
      {
        source: "/blog/how-to-solve-teacher-shortages-in-schools-a-2026-district-guide",
        destination: "/blog/teacher-shortage-solutions-for-schools-2026-strategic-guide",
        permanent: true,
      },
      {
        source: "/blog/strategic-long-term-substitute-teacher-placement-a-2026-district-guide",
        destination:
          "/blog/mastering-long-term-substitute-teacher-placement-a-strategic-guide-for-k-12-districts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
