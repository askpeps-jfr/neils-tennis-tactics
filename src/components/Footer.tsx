"use client";

import type { MouseEvent } from "react";

const footerLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Courts", href: "#courts" },
  { label: "Vault", href: "#vault" },
  { label: "Apparel", href: "#gear" },
  { label: "Rates", href: "#rates" },
  { label: "Book", href: "#book" },
];

function handleFooterNavClick(
  e: MouseEvent<HTMLAnchorElement>,
  targetId: string,
) {
  e.preventDefault();

  if (targetId === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Footer() {
  return (
    <footer className="border-t border-court-border/70 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <p className="font-mono text-sm font-bold tracking-widest text-court-chalk">
            NTT <span className="text-court-chalk/40">//</span> NEIL&apos;S
            TENNIS TACTICS
            <span className="text-court-chalk/40"> — SAN GABRIEL VALLEY</span>
          </p>
          <p className="mt-2 text-xs font-medium tracking-wide text-volt">
            Biomechanics. Psychology. Match IQ.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleFooterNavClick(e, link.href.slice(1))}
              className="text-sm font-medium text-court-chalk/60 transition-colors hover:text-volt"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-court-border/70 pt-6 text-center text-xs text-court-chalk/40">
        © {new Date().getFullYear()} Neil&apos;s Tennis Tactics. All rights
        reserved.
      </div>
    </footer>
  );
}
