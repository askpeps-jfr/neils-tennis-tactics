import { Check } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  cadence: string;
  subtitle: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
  badge?: string;
};

const tiers: Tier[] = [
  {
    name: "The Tactical Assessment",
    price: "$110",
    cadence: "single 75-min session",
    subtitle: "Baseline mechanical audit & high-speed stroke diagnostic.",
    features: [
      "75-min on-court mechanical breakdown",
      "Slow-motion video review & swing path audit",
      "Actionable technical roadmap for self-practice",
    ],
    cta: "Book Single Assessment",
    href: "#book",
  },
  {
    name: "The 5-Session Mechanical Overhaul",
    price: "$495",
    cadence: "five 60-min sessions",
    subtitle:
      "Eradicate technical hitches and rebuild core stroke stability.",
    features: [
      "5 focused 1-on-1 on-court sessions",
      "Complete serve mechanics & contact point overhaul",
      "High-framerate telemetry comparisons (Session 1 vs 5)",
      "Match situation shot-selection playbooks",
    ],
    cta: "Claim 5-Session Track",
    href: "#book",
    highlight: true,
    badge: "MOST POPULAR // RAPID PROGRESSION",
  },
  {
    name: "Competitive Tournament Track",
    price: "$880",
    cadence: "month (8 sessions)",
    subtitle:
      "High-tempo tournament readiness, tactical match IQ, and UTR climbing.",
    features: [
      "2 weekly 60-min intensive sessions",
      "Live tactical match simulation & charting",
      "Priority peak court booking & schedule flexibility",
      "Tournament warm-up & strategy prep",
    ],
    cta: "Inquire for Availability",
    href: "#book",
  },
];

export default function PricingPackages() {
  return (
    <section
      id="rates"
      className="scroll-mt-28 px-6 py-24 sm:py-32 md:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-volt">
            // INVESTMENT & TRAINING PACKAGES
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-court-chalk sm:text-4xl">
            Transparent Rates. Serious Commitment.
          </h2>
          <p className="mt-4 max-w-2xl text-court-chalk/70">
            No surprise court fees or club memberships required. Video
            biomechanics telemetry included across all multi-session tracks.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight
                  ? "border-volt/60 bg-court-card shadow-[0_0_35px_rgba(204,255,0,0.12)]"
                  : "border-court-border/70 bg-court-card hover:border-volt/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.08)]"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-volt/30 bg-court-navy px-4 py-1 text-[10px] font-bold tracking-widest text-volt">
                  {tier.badge}
                </span>
              )}

              <h3 className="mt-2 text-xl font-bold text-court-chalk">
                {tier.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-black text-court-chalk">
                  {tier.price}
                </span>
                <span className="text-sm text-court-chalk/50">
                  / {tier.cadence}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-court-chalk/60">
                {tier.subtitle}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-volt" />
                    <span className="text-sm text-court-chalk/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`mt-8 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-bold transition-transform hover:scale-105 ${
                  tier.highlight
                    ? "bg-volt text-court-navy"
                    : "border border-court-border text-court-chalk hover:border-volt hover:text-volt"
                }`}
              >
                [ {tier.cta}
                {tier.highlight ? " →" : ""} ]
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
