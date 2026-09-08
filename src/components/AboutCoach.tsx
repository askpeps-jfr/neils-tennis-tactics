import { Trophy, Award, Brain, type LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  {
    icon: Trophy,
    label: "D1 MAC CHAMPION",
    detail: "Eastern Michigan Univ. / Academic All-American",
  },
  {
    icon: Award,
    label: "EX-DIRECTOR",
    detail: "Cliff Drysdale Tennis // Key Biscayne & Southampton",
  },
  {
    icon: Brain,
    label: "HOLISTIC IQ",
    detail: "Sports Psychology, Biomechanics & Physical Longevity",
  },
];

export default function AboutCoach() {
  return (
    <section
      id="coach"
      className="scroll-mt-28 px-6 py-24 sm:py-32 md:scroll-mt-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-xl border border-court-border/70 bg-court-card p-8 transition-all duration-300 hover:border-volt/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.08)] sm:p-12">
          <span className="font-mono text-xs font-semibold tracking-widest text-volt">
            // COACH DOSSIER
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-court-chalk sm:text-4xl">
            Tour-Caliber Pedigree. Cognitive Court Science.
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-court-chalk/70">
            With over two decades leading tennis operations from Cliff
            Drysdale luxury destinations in Key Biscayne and Southampton to
            collegiate Division 1 courts, Coach Neil blends competitive NCAA
            doubles mastery with preventive sports science. Training focuses
            on kinetic efficiency, pattern recognition, and the cognitive
            resilience required under match pressure.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label, detail }) => (
              <div
                key={label}
                className="rounded-lg border border-court-border/70 bg-court-navy p-5"
              >
                <Icon className="h-5 w-5 text-volt" />
                <p className="mt-3 text-sm font-bold tracking-wide text-court-chalk">
                  {label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-court-chalk/50">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
