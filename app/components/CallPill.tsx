"use client";

import { site } from "../../lib/site";

/* Persistent tap-to-call. Full pill on >=375px screens collapses to a
   ~46px icon on the narrowest phones so it never overflows. */

export default function CallPill() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`Call Orange Star Jewelry at ${site.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-ember text-bone shadow-xl shadow-black/40 transition-transform hover:-translate-y-0.5
                 h-[46px] w-[46px] justify-center
                 min-[400px]:h-auto min-[400px]:w-auto min-[400px]:px-5 min-[400px]:py-3"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
        <path
          d="M6.5 3.5l3 .5 1 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1 .5 3c0 1-1 2-2 2A16 16 0 014.5 5.5c0-1 1-2 2-2z"
          fill="currentColor"
        />
      </svg>
      <span className="hidden font-medium min-[400px]:inline">Call Orange Star</span>
    </a>
  );
}
