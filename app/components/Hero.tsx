"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Full-bleed cinematic bench photo — torch + glowing ring */}
      <div className="absolute inset-0">
        <img
          src="/img/hero-torch.jpg"
          alt="A goldsmith's torch heats a glowing ring on the bench at Orange Star Jewelry"
          className="ken-burns h-full w-full object-cover object-center"
        />
        {/* darken for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-forge/55 via-forge/35 to-forge" />
        <div className="absolute inset-0 bg-gradient-to-r from-forge/70 via-transparent to-forge/30" />
      </div>

      {/* Heat bloom behind headline */}
      <div className="heat-bloom absolute inset-x-0 bottom-0 top-[18%] -z-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 flex items-center gap-3 text-[12px] font-500 uppercase tracking-[0.28em] text-gold-2"
        >
          <span className="inline-block h-px w-10 bg-[var(--gold)]" />
          Main Street, Orange NJ · Since 1997
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="display-tight font-display text-[clamp(3rem,12.5vw,9.5rem)] font-600 text-bone"
        >
          Gold takes its
          <br />
          shape <span className="text-ember">by hand.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="mt-6 max-w-xl text-[16px] leading-relaxed text-bone-2 sm:text-[18px]"
        >
          A working goldsmith&apos;s bench on Main Street. Custom rings, honest
          repairs, and heirloom pieces shaped in 14k, 18k, 22k and platinum by
          master craftsman Rahim.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#visit"
            className="rounded-full bg-ember px-7 py-3.5 text-[14px] font-600 uppercase tracking-[0.1em] text-bone transition-transform hover:scale-[1.03]"
          >
            Visit the bench
          </a>
          <a
            href="tel:+19736767400"
            className="rounded-full border border-[var(--ash-2)] px-7 py-3.5 text-[14px] font-500 uppercase tracking-[0.1em] text-bone transition-colors hover:border-[var(--gold)] hover:text-gold-2"
          >
            (973) 676-7400
          </a>
        </motion.div>
      </div>

      {/* Drawn gold seam at base of hero */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        className="gold-seam absolute inset-x-0 bottom-0 z-10 origin-left"
      />
    </section>
  );
}
