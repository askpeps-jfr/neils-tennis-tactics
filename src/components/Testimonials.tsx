import { Star } from "lucide-react";

type Testimonial = {
  stat: string;
  quote: string;
  attribution: string;
};

const testimonials: Testimonial[] = [
  {
    stat: "Varsity Line-Up // 1 Off-Season",
    quote:
      "My son went from grinding through JV matches to starting varsity in one off-season. Neil's biomechanics work fixed a serve hitch three other coaches missed.",
    attribution: "Parent of Varsity Competitor, South Pasadena HS",
  },
  {
    stat: "UTR 3.4 → 4.1",
    quote:
      "I plateaued at a 3.4 UTR for two years. Six months of targeted sessions with Neil and I'm climbing 4.0+ leagues with a rebuilt backhand.",
    attribution: "Adult League Player, Pasadena",
  },
  {
    stat: "Sectional Quarterfinalist",
    quote:
      "The match-IQ work is what separates Neil from every other coach we've tried. My daughter reads patterns now instead of just hitting balls.",
    attribution: "Parent of Sectional Quarterfinalist",
  },
];

export default function Testimonials() {
  return (
    <section
      id="results"
      className="scroll-mt-20 px-6 pb-16 pt-12 md:scroll-mt-24 md:pb-24 md:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-volt">
            // PLAYER RESULTS &amp; TESTIMONIALS
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-court-chalk sm:text-4xl">
            Results That Show Up on the Scoreboard.
          </h2>
          <p className="mt-4 max-w-2xl text-court-chalk/70">
            From varsity line-ups to climbing UTR brackets, the training
            translates directly into match outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map(({ stat, quote, attribution }) => (
            <div
              key={attribution}
              className="flex flex-col rounded-xl border border-court-border/70 bg-court-card p-8 transition-all duration-300 hover:border-volt/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.08)]"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-volt text-volt"
                  />
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-court-chalk/80">
                &ldquo;{quote}&rdquo;
              </p>

              <div className="mt-6 border-t border-court-border/70 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-court-chalk/40">
                  {attribution}
                </p>
                <p className="mt-2 inline-block rounded-full border border-volt/30 bg-volt/10 px-3 py-1 text-[10px] font-bold tracking-widest text-volt">
                  {stat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
