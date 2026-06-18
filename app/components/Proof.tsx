"use client";

import { motion } from "motion/react";

const REVIEWS = [
  {
    q: "I have been doing business with Orange Star for over twenty years. They always deliver amazing pieces.",
    a: "Google review",
  },
  {
    q: "Rahim customized my engagement ring and turned my idea into something breathtaking. Kind, patient and so knowledgeable.",
    a: "Google review",
  },
  {
    q: "Honest, reliable, and the repair was done right and on time. The staff are friendly and they treat you like family.",
    a: "Google review",
  },
];

export default function Proof() {
  return (
    <section className="relative overflow-hidden bg-forge-2 py-24 sm:py-32">
      {/* faint ember glow */}
      <div className="heat-bloom absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <h2 className="display-tight max-w-xl font-display text-[clamp(2rem,5vw,3.6rem)] font-600 text-bone">
            Twenty years of
            <br />
            people who came back.
          </h2>
          <div className="flex items-center gap-3">
            <Stars />
            <span className="tabnum text-[15px] text-bone-2">4.8 · 39 reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-sm border border-[var(--ash)] bg-forge p-7"
            >
              <p className="font-display text-[19px] font-400 leading-snug text-bone">
                &ldquo;{r.q}&rdquo;
              </p>
              <footer className="mt-6 text-[12px] uppercase tracking-[0.14em] text-gold-2">
                — {r.a}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
          <path
            d="M12 2.5l2.7 6.1 6.6.5-5 4.3 1.6 6.5L12 16.9 6.1 20.4l1.6-6.5-5-4.3 6.6-.5L12 2.5z"
            fill="var(--gold-2)"
          />
        </svg>
      ))}
    </span>
  );
}
