import { Play, Activity, Crosshair, Gauge, type LucideIcon } from "lucide-react";

type Reel = {
  title: string;
  tag: string;
  headline: string;
  synopsis: string;
  icon: LucideIcon;
};

const reels: Reel[] = [
  {
    title: "Between-Point Cognitive Reset",
    tag: "SPORTS PSYCHOLOGY // 00:54",
    headline: "The 16-Second Protocol Between Points",
    synopsis:
      "Deconstructing how elite players regulate heart rate, wipe the mental slate, and commit to the next pattern before touching the baseline.",
    icon: Activity,
  },
  {
    title: "Decoding Opponent Shoulder Cues",
    tag: "VISUAL PERCEPTION // 01:12",
    headline: "Reading Serve Direction Before Contact",
    synopsis:
      "Toss trajectory and chest tilt cues that telegraph wide slice vs kick down the T half a second earlier.",
    icon: Crosshair,
  },
  {
    title: "Closing Out High-Pressure Sets",
    tag: "MATCH TEMPO // 00:48",
    headline: 'Aggressive Margins: Killing the "Push" Instinct',
    synopsis:
      "Why players freeze at 5-4 up, and the mechanical philosophy behind increasing swing speed to maintain safety margins.",
    icon: Gauge,
  },
];

export default function TacticalVault() {
  return (
    <section
      id="vault"
      className="scroll-mt-20 px-6 pb-16 pt-12 md:scroll-mt-24 md:pb-24 md:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-volt">
            // MENTAL IQ & TACTICAL TELEMETRY
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-court-chalk sm:text-4xl">
            Court Psychology &amp; Visual Breakdowns.
          </h2>
          <p className="mt-4 max-w-2xl text-court-chalk/70">
            High-density, 60-second vertical insights dissecting the mental
            game, opponent pattern recognition, and kinetic precision.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reels.map(({ title, tag, headline, synopsis, icon: Icon }) => (
            <div
              key={title}
              className="group relative mx-auto aspect-[9/16] w-full max-w-xs overflow-hidden rounded-xl border border-court-border/70 bg-court-card transition-all duration-300 hover:border-volt/60 hover:shadow-[0_0_30px_rgba(204,255,0,0.12)] md:max-w-none"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-court-card to-court-navy" />

              <div className="absolute inset-0 flex items-center justify-center opacity-15 transition-opacity duration-300 group-hover:opacity-25">
                <Icon className="h-32 w-32 text-volt" strokeWidth={1} />
              </div>

              <span className="absolute left-3 top-3 rounded-full border border-volt/30 bg-court-navy/80 px-2.5 py-1 font-mono text-[9px] font-bold tracking-widest text-volt backdrop-blur-sm">
                {tag}
              </span>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-court-chalk backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-5 w-5 fill-current" />
                  <span className="absolute inset-0 rounded-full border border-volt/50 opacity-0 transition-opacity duration-300 group-hover:animate-ping group-hover:opacity-100" />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-court-navy via-court-navy/90 to-transparent p-5 pt-20">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-court-chalk/40">
                  {title}
                </p>
                <h3 className="mt-1 text-sm font-bold leading-snug text-court-chalk">
                  {headline}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-court-chalk/60">
                  {synopsis}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
