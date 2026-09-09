"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Activity, Target, MapPin } from "lucide-react";

const telemetry = [
  {
    icon: Activity,
    title: "Biomechanics Overhaul",
    description: "Kinetic chain alignment & video playback review.",
  },
  {
    icon: Target,
    title: "Match-IQ Drills",
    description: "Situational point construction, serve/return tactics.",
  },
  {
    icon: MapPin,
    title: "Location Flexibility",
    description:
      "We travel to your local SGV court or host at our training hub.",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden px-6 py-24 sm:py-32 md:scroll-mt-24"
    >
      <Image
        alt=""
        className="-z-20 object-cover object-center opacity-80"
        fill
        priority
        src="/images/hero-telemetry.jpg"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#070C18]/40 via-transparent to-[#070C18]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(7,12,24,0.65)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-court-border bg-court-card px-4 py-1.5 text-xs font-semibold tracking-widest text-volt">
            // NCAA D1 MAC CHAMPION &bull; FORMER CLIFF DRYSDALE DIRECTOR
            &bull; SOUTH PASADENA, CA
          </span>

          <h1 className="mt-8 max-w-3xl text-4xl font-black leading-tight tracking-tight text-court-chalk drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-6xl">
            Master the Modern Game Through{" "}
            <span className="text-volt">Tactical Precision.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-court-chalk/70">
            Stop mindlessly hitting out of hoppers. Structured 1-on-1
            coaching engineered for tournament-bound juniors, competitive
            league climbers, and serious adult players across Pasadena,
            Arcadia, and San Marino.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-volt px-6 py-3 text-sm font-bold text-court-navy transition-transform hover:scale-105"
            >
              Book Skill Assessment
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#courts"
              className="inline-flex items-center justify-center rounded-md border border-court-border px-6 py-3 text-sm font-bold text-court-chalk transition-colors hover:border-volt hover:text-volt"
            >
              Explore SGV Court Network
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid gap-6 sm:grid-cols-3"
        >
          {telemetry.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg border border-slate-800 bg-[#0B132B]/90 p-6 backdrop-blur-md"
            >
              <Icon className="h-6 w-6 text-volt" />
              <h3 className="mt-4 text-base font-bold text-court-chalk">
                {title}
              </h3>
              <p className="mt-2 text-sm text-court-chalk/60">
                {description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
