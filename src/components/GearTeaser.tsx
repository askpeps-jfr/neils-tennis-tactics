import Image from "next/image";
import { Shirt, Zap, Droplet, Sparkles, type LucideIcon } from "lucide-react";

type Product = {
  icon: LucideIcon;
  name: string;
  description: string;
  badge: string;
};

const products: Product[] = [
  {
    icon: Shirt,
    name: "NTT Pro Tour Tech Tee",
    description: "Charcoal matte finish with optic volt emblem badge.",
    badge: "PROTOTYPE STAGE",
  },
  {
    icon: Zap,
    name: "Kinetic Overgrips & Dampeners",
    description: "High-tack shock absorption packs.",
    badge: "TESTING LAB",
  },
  {
    icon: Droplet,
    name: "Courtside Hydro & Towel Kit",
    description: "Tournament-ready hydration and gear.",
    badge: "FALL DROP",
  },
];

export default function GearTeaser() {
  return (
    <section
      id="gear"
      className="scroll-mt-20 border-t border-slate-900 bg-[#070C18] pb-16 pt-12 md:scroll-mt-24 md:pb-24 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex justify-center">
            <Image
              alt="NTT Pro Tour Gear"
              className="h-16 w-auto object-contain drop-shadow-[0_0_25px_rgba(204,255,0,0.25)] md:h-20"
              height={80}
              src="/images/ntt-logo.webp"
              width={280}
            />
          </div>

          <span className="font-mono text-xs font-semibold tracking-widest text-volt">
            // ON-COURT APPAREL &amp; TELEMETRY ACCESSORIES
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-court-chalk sm:text-4xl">
            Engineered for the Modern Competitor.
          </h2>
          <p className="mt-4 max-w-2xl text-court-chalk/70">
            High-performance moisture-wicking kits, optic volt dampeners, and
            tactical court accessories curated by Coach Neil.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {products.map(({ icon: Icon, name, description, badge }) => (
            <div
              key={name}
              className="rounded-xl border border-court-border/70 bg-court-card p-8 transition-all duration-300 hover:border-volt/50 hover:shadow-[0_0_25px_rgba(204,255,0,0.08)]"
            >
              <div className="flex h-40 items-center justify-center rounded-lg border border-court-border/70 bg-court-navy">
                <Icon className="h-12 w-12 text-volt" strokeWidth={1.25} />
              </div>

              <span className="mt-6 inline-block rounded-full border border-court-border bg-court-navy px-3 py-1 text-[10px] font-bold tracking-widest text-court-chalk/70">
                {badge}
              </span>

              <h3 className="mt-4 text-lg font-bold text-court-chalk">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-court-chalk/60">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center">
          <span className="inline-flex cursor-default select-none items-center gap-2 rounded-full border border-volt/50 bg-court-card px-6 py-3 text-sm font-bold text-volt shadow-[0_0_25px_rgba(204,255,0,0.15)]">
            <Sparkles className="h-4 w-4" />[ Notify Me on Gear Drop // Early
            Access ]
          </span>
          <p className="mt-3 text-xs text-court-chalk/40">
            Coming soon — sign-up opens with the Fall Drop.
          </p>
        </div>
      </div>
    </section>
  );
}
