"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const skillLevels = [
  "Competitive Junior / High School",
  "Adult League (USTA 3.0–4.0)",
  "Adult Advanced (4.5+)",
  "Foundational / Mechanics Starter",
];

const regions = [
  "Pasadena Hub",
  "Arcadia / San Marino",
  "Alhambra / Temple City",
  "Private / HOA Court",
];

const fieldClasses =
  "w-full min-h-[44px] rounded-md border border-court-border bg-court-navy px-4 py-3 text-sm text-court-chalk placeholder:text-court-chalk/40 transition-colors focus:border-volt focus:outline-none focus:ring-1 focus:ring-volt/50";

const labelClasses =
  "mb-2 block text-xs font-semibold uppercase tracking-wide text-court-chalk/50";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="book"
      className="scroll-mt-20 px-6 pb-16 pt-12 md:scroll-mt-24 md:pb-24 md:pt-20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-xs font-semibold tracking-widest text-volt">
            // STEP ON THE COURT
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-court-chalk sm:text-4xl">
            Initiate Your Baseline Assessment.
          </h2>
          <p className="mt-4 max-w-2xl text-court-chalk/70">
            Select your preferred training track and primary SGV location.
            Coach Neil will review your background and confirm court
            availability within 24 hours.
          </p>
        </div>

        <div className="mt-16 rounded-xl border border-court-border/70 bg-court-card p-8 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <span className="rounded-full border border-volt/30 bg-volt/10 px-4 py-1.5 text-xs font-bold tracking-widest text-volt">
                REQUEST RECEIVED
              </span>
              <p className="mt-4 max-w-sm text-sm text-court-chalk/70">
                Coach Neil will review your profile and confirm court
                availability within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Player Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@email.com"
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone / SMS for court coordination
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(626) 555-0134"
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label htmlFor="skillLevel" className={labelClasses}>
                    Current Skill Level / Profile
                  </label>
                  <select
                    id="skillLevel"
                    name="skillLevel"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled>
                      Select your profile
                    </option>
                    {skillLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="region" className={labelClasses}>
                    Preferred SGV Region
                  </label>
                  <select
                    id="region"
                    name="region"
                    required
                    defaultValue=""
                    className={fieldClasses}
                  >
                    <option value="" disabled>
                      Select a region
                    </option>
                    {regions.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="notes" className={labelClasses}>
                    Primary Focus / Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Serve consistency, backhand topspin, match anxiety..."
                    className={`${fieldClasses} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-volt px-6 py-3 text-sm font-bold text-court-navy transition-transform hover:scale-[1.02]"
              >
                Request Session Slot
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-court-chalk/40">
                Zero upfront commitment. Payment confirmed only after court
                slot is locked.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
