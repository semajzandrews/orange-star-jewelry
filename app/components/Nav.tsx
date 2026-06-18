"use client";

import { useEffect, useState } from "react";
import { site } from "../../lib/site";

const links = [
  { href: "#work", label: "Collection" },
  { href: "#bench", label: "Our Craft" },
  { href: "#services", label: "Services" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{
        background: solid
          ? "linear-gradient(180deg, rgba(22,16,12,0.92), rgba(22,16,12,0.78))"
          : "transparent",
        backdropFilter: solid ? "blur(8px)" : "none",
        borderBottom: solid
          ? "1px solid rgba(200,148,59,0.16)"
          : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-3.5 md:px-8">
        {/* brand mark — engraved hallmark style */}
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Orange Star Jewelry, home">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="shrink-0">
            <path
              d="M12 1.6l2.7 6.2 6.7.5-5.1 4.4 1.6 6.6L12 20l-5.9 3.7 1.6-6.6L2.6 8.3l6.7-.5z"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-[1.05rem] leading-none tracking-tight">
            Orange Star
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.86rem] text-bone-2 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="rounded-full border border-gold/40 px-4 py-1.5 text-[0.82rem] text-gold transition-colors hover:bg-gold hover:text-forge"
          >
            {site.phoneDisplay}
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden text-bone-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <>
                <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-gold/15 bg-forge/95 px-5 py-4 backdrop-blur">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-lg text-bone"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-1 inline-block rounded-full border border-gold/40 px-4 py-2 text-center text-gold"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
