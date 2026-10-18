import { Button } from "@/components/ui/Button";

const PROOF = [
  { v: "120+", l: "Roles filled at one school" },
  { v: "95%", l: "Substitute fill rate (+40% vs. prior)" },
  { v: "100%", l: "SPED roles filled & retained" },
  { v: "2 wks", l: "From request to filled" },
];

/** Case-study proof band: the headline partner outcomes, linked to the case studies. */
export function CaseStudyProof() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-12 sm:px-12 lg:px-16 lg:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-teal-600), transparent 60%)",
            }}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-400">
                Proof, not promises
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                See how we deliver for schools like yours.
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                From staffing an entire school where incumbent agencies fell
                short, to filling 100% of certified special-education roles in
                two weeks — real partners, real numbers.
              </p>
              <div className="mt-8">
                <Button href="/case-studies" variant="primary" size="lg">
                  Read the case studies
                </Button>
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
              {PROOF.map((s) => (
                <div key={s.l} className="border-l border-white/15 pl-5">
                  <dt className="font-display text-4xl font-semibold tracking-tight text-teal-400">
                    {s.v}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-white/70">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
