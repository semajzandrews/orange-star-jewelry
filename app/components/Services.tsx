"use client";

import { motion } from "motion/react";

const SERVICES = [
  {
    src: "/img/serv-mandrel.jpg",
    k: "01",
    title: "Custom Design",
    body: "Bring a sketch, a photo, or an old piece. We shape engagement rings and one-of-a-kind designs in the gold and stones you choose.",
  },
  {
    src: "/img/serv-repair.jpg",
    k: "02",
    title: "Repair & Restore",
    body: "Resizing, soldering, prong rebuilds, chain and clasp work, and bringing tired heirlooms back to life. Honest, timely, done right.",
  },
  {
    src: "/img/serv-wrist.jpg",
    k: "03",
    title: "Sell & Service",
    body: "Fine gold, diamonds and finished pieces in the case, plus watch batteries, cleaning and appraisals. Walk in, no appointment needed.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-14 max-w-2xl">
        <p className="mb-5 flex items-center gap-3 text-[12px] font-500 uppercase tracking-[0.24em] text-ember">
          <span className="inline-block h-px w-8 bg-ember" />
          What We Do
        </p>
        <h2 className="display-tight font-display text-[clamp(2.2rem,6vw,4.4rem)] font-600 text-bone">
          Three things, done well.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.k}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lift group flex flex-col overflow-hidden rounded-sm border border-[var(--ash)] bg-forge-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={s.src}
                alt={s.title}
                className="aspect-[5/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 tabnum font-display text-sm font-500 text-gold-2">
                {s.k}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-2xl font-500 text-bone">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-bone-2">{s.body}</p>
              <a
                href="tel:+19736767400"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-500 uppercase tracking-[0.12em] text-ember transition hover:text-gold-2"
              >
                Ask us
                <span aria-hidden>→</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
