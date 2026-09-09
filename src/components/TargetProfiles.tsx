import { Trophy, Flame, ShieldCheck, type LucideIcon } from "lucide-react";

type Profile = {
  icon: LucideIcon;
  title: string;
  tag: string;
  focus: string;
  metric: string;
  accent: "volt" | "chalk";
};

const profiles: Profile[] = [
  {
    icon: Trophy,
    title: "Competitive Juniors & Varsity",
    tag: "TOURNAMENT & HIGH SCHOOL",
    focus:
      "NCAA Collegiate Pathway & Varsity Tournament Blueprinting, kinetic chain power, serve consistency under pressure, and high-tempo footwork recovery.",
    metric: "Match-play simulation & UTR trajectory tracking.",
    accent: "volt",
  },
  {
    icon: Flame,
    title: "Adult League Climbers (USTA 3.0–4.5+)",
    tag: "ADULT RECREATIONAL / LEAGUE",
    focus:
      "Eradicating technical hitches, backhand depth stability, modern topspin mechanics, and doubles tactical positioning.",
    metric: "Targeted error reduction & second-serve reliability.",
    accent: "volt",
  },
  {
    icon: ShieldCheck,
    title: "Technical Starters & Mechanics",
    tag: "FOUNDATIONAL ACCELERATION",
    focus:
      "Establishing modern semi-western/continental grips, clean unit turns, contact point discipline, and injury-free mechanics.",
    metric: "Zero muscle-memory flaws from session one.",
    accent: "chalk",
  },
];

export default function TargetProfiles() {
  return (
    <section
      id="programs"
      className="scroll-mt-20 px-6 pb-16 pt-12 md:scroll-mt-24 md:pb-24 md:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-volt">
            // PLAYER DEVELOPMENT PATHWAYS
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-court-chalk sm:text-4xl">
            Engineered for Serious Progression.
          </h2>
          <p className="mt-4 max-w-2xl text-court-chalk/70">
            Every player has a distinct mechanical ceiling and match
            threshold. Training is calibrated to your competitive profile.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {profiles.map(
            ({ icon: Icon, title, tag, focus, metric, accent }) => (
              <div
                key={title}
                className="rounded-xl border border-court-border/70 bg-court-card p-8 transition-all duration-300 hover:border-volt/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={
                      accent === "volt"
                        ? "h-7 w-7 text-volt"
                        : "h-7 w-7 text-court-chalk"
                    }
                  />
                  <span
                    className={
                      accent === "volt"
                        ? "rounded-full border border-volt/30 bg-volt/10 px-3 py-1 text-[10px] font-bold tracking-widest text-volt"
                        : "rounded-full border border-court-border bg-court-navy px-3 py-1 text-[10px] font-bold tracking-widest text-court-chalk/70"
                    }
                  >
                    {tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-court-chalk">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-court-chalk/60">
                  {focus}
                </p>

                <div className="mt-6 border-t border-court-border/70 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-court-chalk/40">
                    Metric Highlight
                  </p>
                  <p className="mt-1 text-sm font-medium text-court-chalk/80">
                    {metric}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
