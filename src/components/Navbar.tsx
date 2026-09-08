"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "SGV Courts", href: "#courts" },
  { label: "Tactical Vault", href: "#vault" },
  { label: "Apparel", href: "#gear" },
  { label: "Rates", href: "#rates" },
];

const sectionIds = ["programs", "courts", "vault", "gear", "rates", "book"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 120) {
        setActiveSection("");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(e: MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault();
    // Close the drawer first and wait a frame so its collapse doesn't
    // shift the layout mid-animation and throw off the scroll target.
    setIsOpen(false);
    requestAnimationFrame(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
      }
    });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-court-border bg-court-navy/80 backdrop-blur-md">
      <div className="mx-auto flex min-h-[110px] max-w-6xl items-center justify-between px-6 py-2">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("");
            setIsOpen(false);
            requestAnimationFrame(() => {
              const hero = document.getElementById("hero");
              if (hero) {
                hero.scrollIntoView({ behavior: "smooth" });
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            });
          }}
          className="group flex items-center gap-2"
        >
          <Image
            alt="Neil's Tennis Tactics"
            className="object-contain transition-transform group-hover:scale-105 md:hidden"
            height={64}
            priority
            src="/images/ntt-logo.webp"
            style={{ height: "64px", width: "auto" }}
            width={320}
          />
          <Image
            alt="Neil's Tennis Tactics"
            className="hidden object-contain transition-transform group-hover:scale-105 md:block"
            height={102}
            priority
            src="/images/ntt-logo.webp"
            style={{ height: "102px", width: "auto" }}
            width={320}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, id)}
                className={cn(
                  "border-b-2 border-transparent pb-1 text-sm font-medium text-slate-400 transition-colors hover:text-court-chalk",
                  isActive && "border-volt font-semibold text-volt hover:text-volt",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            onClick={(e) => handleNavClick(e, "book")}
            className="hidden rounded-md bg-volt px-4 py-2 text-sm font-bold text-court-navy transition-transform hover:scale-105 md:inline-flex"
          >
            [ Book Assessment ]
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-court-border text-court-chalk transition-colors hover:border-volt hover:text-volt md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-court-border bg-court-navy/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-6 py-2">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, id)}
                  className={cn(
                    "flex min-h-[44px] items-center gap-2.5 border-b border-court-border/60 text-base font-medium text-slate-400 transition-colors last:border-b-0 hover:text-court-chalk",
                    isActive && "font-semibold text-volt hover:text-volt",
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-volt opacity-0 transition-opacity",
                      isActive && "opacity-100",
                    )}
                  />
                  {link.label}
                </a>
              );
            })}

            <a
              href="#book"
              onClick={(e) => handleNavClick(e, "book")}
              className="my-4 flex min-h-[44px] w-full items-center justify-center rounded-md bg-volt px-4 text-sm font-bold text-court-navy"
            >
              [ Book Assessment ]
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
