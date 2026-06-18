"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "The Bench", href: "#bench" },
  { label: "Pieces", href: "#pieces" },
  { label: "Services", href: "#services" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-forge/85 backdrop-blur-md border-b border-[var(--ash)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
        {/* Wordmark */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <Star />
          </span>
          <span className="font-display text-[17px] font-600 leading-none tracking-tight text-bone">
            Orange Star
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-500 uppercase tracking-[0.14em] text-bone-2 transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+19736767400"
            className="rounded-full border border-[var(--gold)] px-5 py-2 text-[13px] font-500 uppercase tracking-[0.12em] text-gold-2 transition-all hover:bg-[var(--gold)] hover:text-forge"
          >
            (973) 676-7400
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
        >
          <div className="space-y-[5px]">
            <span className={`block h-[1.5px] w-6 bg-bone transition-all ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-bone transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-6 bg-bone transition-all ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-[var(--ash)] bg-forge/95 backdrop-blur-md transition-all duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--ash)] py-3 font-display text-2xl text-bone"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+19736767400"
            className="mt-3 rounded-full bg-ember px-5 py-3 text-center text-[14px] font-600 uppercase tracking-[0.1em] text-bone"
          >
            Call (973) 676-7400
          </a>
        </div>
      </div>
    </header>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 2.5l2.7 6.1 6.6.5-5 4.3 1.6 6.5L12 16.9 6.1 20.4l1.6-6.5-5-4.3 6.6-.5L12 2.5z"
        fill="var(--ember)"
        stroke="var(--gold)"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
