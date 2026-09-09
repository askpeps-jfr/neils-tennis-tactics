import { Check, Navigation, MapPin, type LucideIcon } from "lucide-react";

type Accent = "volt" | "clay" | "slate";

type Hub = {
  name: string;
  detail: string;
  status: string;
  accent: Accent;
};

const hubs: Hub[] = [
  {
    name: "Pasadena Central Hub",
    detail: "Brookside / Area Public Courts",
    status: "PRIMARY FACILITY",
    accent: "volt",
  },
  {
    name: "Arcadia & San Marino Circuit",
    detail: "County Park / Live Oak",
    status: "ACTIVE ROTATION",
    accent: "slate",
  },
  {
    name: "Alhambra & Temple City",
    detail: "Municipal Courts",
    status: "BOOKING OPEN",
    accent: "slate",
  },
  {
    name: "Private Residential / HOA Courts",
    detail: "Travel to your community court",
    status: "TRAVEL UPON REQUEST",
    accent: "clay",
  },
];

const features: { icon: LucideIcon; text: string }[] = [
  {
    icon: Check,
    text: "Zero court hunt hassle — permits and court reservation timing handled.",
  },
  {
    icon: Check,
    text: "High-grade Wilson US Open balls & video telemetry gear provided on-site.",
  },
  {
    icon: Navigation,
    text: "Flexible morning & twilight floodlit slots available.",
  },
];

const badgeStyles: Record<Accent, string> = {
  volt: "border-volt/30 bg-volt/10 text-volt",
  clay: "border-court-clay/30 bg-court-clay/10 text-court-clay",
  slate: "border-court-border bg-court-navy text-court-chalk/70",
};

function StatusBadge({ status, accent }: { status: string; accent: Accent }) {
  return (
    <span
      className={`whitespace-nowrap rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest ${badgeStyles[accent]}`}
    >
      {status}
    </span>
  );
}

export default function CourtCoverage() {
  return (
    <section
      id="courts"
      className="scroll-mt-20 px-6 pb-16 pt-12 md:scroll-mt-24 md:pb-24 md:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-volt">
            // REGIONAL TRAINING NETWORK
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-court-chalk sm:text-4xl">
            Courts Arranged Across the San Gabriel Valley.
          </h2>
          <p className="mt-4 max-w-2xl text-court-chalk/70">
            Train at our primary partner hubs or request on-location sessions
            at your private community or local municipal courts.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-start">
          <div className="flex flex-col gap-4 lg:col-span-6">
            {hubs.map((hub) => (
              <div
                key={hub.name}
                className="rounded-xl border border-court-border/70 bg-court-card p-6 transition-all duration-300 hover:border-volt/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-volt" />
                    <div>
                      <h3 className="font-bold text-court-chalk">
                        {hub.name}
                      </h3>
                      <p className="mt-1 text-sm text-court-chalk/60">
                        {hub.detail}
                      </p>
                    </div>
                  </div>
                  <StatusBadge status={hub.status} accent={hub.accent} />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-court-border/70 bg-court-card p-8 transition-all duration-300 hover:border-volt/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.08)] lg:col-span-6">
            <div className="overflow-hidden rounded-lg border border-court-border/70 bg-court-navy">
              <svg viewBox="0 0 360 180" className="h-auto w-full">
                <defs>
                  <pattern
                    id="tacticalGrid"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="360" height="180" fill="url(#tacticalGrid)" />

                {/* doubles court boundary */}
                <rect
                  x="15"
                  y="15"
                  width="330"
                  height="150"
                  fill="none"
                  stroke="var(--color-volt)"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                />
                {/* singles sidelines */}
                <rect
                  x="15"
                  y="35"
                  width="330"
                  height="110"
                  fill="none"
                  stroke="var(--color-court-chalk)"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />
                {/* net */}
                <line
                  x1="180"
                  y1="15"
                  x2="180"
                  y2="165"
                  stroke="var(--color-volt)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                />
                {/* service lines */}
                <line
                  x1="95"
                  y1="35"
                  x2="95"
                  y2="145"
                  stroke="var(--color-court-chalk)"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />
                <line
                  x1="265"
                  y1="35"
                  x2="265"
                  y2="145"
                  stroke="var(--color-court-chalk)"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />
                {/* center service line */}
                <line
                  x1="95"
                  y1="90"
                  x2="265"
                  y2="90"
                  stroke="var(--color-court-chalk)"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />

                <circle cx="180" cy="90" r="2.5" fill="var(--color-volt)" />

                <text
                  x="20"
                  y="14"
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  fill="var(--color-volt)"
                  opacity="0.8"
                >
                  X: 34.1478° N
                </text>
                <text
                  x="238"
                  y="176"
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  fill="var(--color-volt)"
                  opacity="0.8"
                >
                  Y: 118.1445° W
                </text>
              </svg>
            </div>

            <ul className="mt-8 space-y-4">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-volt" />
                  <span className="text-sm leading-relaxed text-court-chalk/70">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
