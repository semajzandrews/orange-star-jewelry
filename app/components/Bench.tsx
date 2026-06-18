"use client";

import { motion } from "motion/react";

export default function Bench() {
  return (
    <section id="bench" className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Left — story */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-6 flex items-center gap-3 text-[12px] font-500 uppercase tracking-[0.24em] text-ember"
          >
            <span className="inline-block h-px w-8 bg-ember" />
            At the Bench
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="display-tight font-display text-[clamp(2.2rem,5.5vw,4.2rem)] font-600 text-bone"
          >
            Made where the
            <br />
            metal meets the flame.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 space-y-5 text-[16px] leading-relaxed text-bone-2 sm:text-[17px]"
          >
            <p>
              Most jewelry on Main Street lives behind glass. Ours is made at a
              bench, by hand, the way it has been since 1997. A torch, a file, a
              loupe, and a craftsman who has set stones for the same families for
              more than twenty years.
            </p>
            <p>
              Bring in an idea, an heirloom, or a ring that needs saving. Rahim
              and the team shape it in gold and platinum, and you watch it come
              back to life.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--ash)] pt-8">
            {[
              { n: "1997", l: "On Main Street since" },
              { n: "4.8★", l: "Across 39 reviews" },
              { n: "20+", l: "Years of repeat clients" },
            ].map((s) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="tabnum font-display text-[clamp(1.6rem,4vw,2.6rem)] font-600 text-gold-2">
                  {s.n}
                </div>
                <div className="mt-1 text-[12px] uppercase tracking-[0.1em] text-bone-2">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — bench image collage */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-sm border border-[var(--ash)]"
          >
            <img src="/img/bench-file.jpg" alt="Filing a ring at the goldsmith's bench" className="aspect-[4/5] w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 -left-4 hidden w-[46%] overflow-hidden rounded-sm border border-[var(--gold)]/40 shadow-2xl sm:block"
          >
            <img src="/img/bench-solder.jpg" alt="Soldering a delicate chain by hand" className="aspect-square w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
