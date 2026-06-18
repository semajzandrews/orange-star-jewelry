"use client";

import { useEffect, useState } from "react";

export default function CallPill() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="tel:+19736767400"
      aria-label="Call Orange Star Jewelry at (973) 676-7400"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-ember text-bone shadow-2xl transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      } h-[46px] w-[46px] justify-center sm:h-auto sm:w-auto sm:px-6 sm:py-3.5`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span className="hidden text-[14px] font-600 uppercase tracking-[0.08em] sm:inline">
        (973) 676-7400
      </span>
    </a>
  );
}
