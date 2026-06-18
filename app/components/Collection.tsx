"use client";

import { motion } from "motion/react";

const PIECES = [
  { src: "/img/piece-wreath.jpg", title: "Bridal & Bands", note: "Wedding sets in yellow, white and rose gold", span: "sm:col-span-2 sm:row-span-2", ratio: "aspect-[4/3] sm:aspect-auto sm:h-full" },
  { src: "/img/piece-twotone.jpg", title: "Two-Tone Custom", note: "Mixed-gold designs made to order", span: "", ratio: "aspect-[4/5]" },
  { src: "/img/piece-hoops.jpg", title: "Gold Earrings", note: "Hoops and studs, 14k to 22k", span: "", ratio: "aspect-[4/5]" },
  { src: "/img/piece-solitaire.jpg", title: "Engagement", note: "Solitaires set to your stone", span: "", ratio: "aspect-[4/5]" },
  { src: "/img/piece-rose.jpg", title: "Halo Settings", note: "Brilliant-cut, framed in diamonds", span: "", ratio: "aspect-[4/5]" },
];

export default function Collection() {
  return (
    <section id="pieces" className="relative bg-forge-2 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-500 uppercase tracking-[0.24em] text-ember">
              <span className="inline-block h-px w-8 bg-ember" />
              The Pieces
            </p>
            <h2 className="display-tight font-display text-[clamp(2.2rem,6vw,4.4rem)] font-600 text-bone">
              From the case and
              <br />
              made to order.
            </h2>
          </div>
          <a
            href="#visit"
            className="text-[13px] font-500 uppercase tracking-[0.14em] text-gold-2 underline-offset-4 transition hover:underline"
          >
            See it in person →
          </a>
        </div>

        <div className="grid auto-rows-[1fr] grid-cols-1 gap-4 sm:grid-cols-3 sm:[grid-auto-rows:minmax(0,1fr)]">
          {PIECES.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`lift group relative overflow-hidden rounded-sm border border-[var(--ash)] ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.title}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.ratio}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forge/90 via-forge/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-display text-xl font-500 text-bone">{p.title}</div>
                <div className="mt-1 text-[13px] text-bone-2">{p.note}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
