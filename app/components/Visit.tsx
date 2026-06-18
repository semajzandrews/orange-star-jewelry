"use client";

import { motion } from "motion/react";

const HOURS = [
  { d: "Monday", h: "10 AM – 7 PM" },
  { d: "Tuesday", h: "10 AM – 7 PM" },
  { d: "Wednesday", h: "10 AM – 7 PM" },
  { d: "Thursday", h: "10 AM – 7 PM" },
  { d: "Friday", h: "10 AM – 7 PM" },
  { d: "Saturday", h: "10 AM – 7 PM" },
  { d: "Sunday", h: "Closed" },
];

// Mon-Sat 10-19, Sun closed
function openNow() {
  const now = new Date();
  const day = now.getDay(); // 0 Sun
  const hr = now.getHours();
  if (day === 0) return false;
  return hr >= 10 && hr < 19;
}

export default function Visit() {
  const open = openNow();
  const todayIdx = (new Date().getDay() + 6) % 7; // map so 0 = Monday

  return (
    <section id="visit" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid overflow-hidden rounded-sm border border-[var(--ash)] lg:grid-cols-2">
        {/* Left — info */}
        <div className="bg-forge-2 p-8 sm:p-12">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-500 uppercase tracking-[0.24em] text-ember">
            <span className="inline-block h-px w-8 bg-ember" />
            Visit the Bench
          </p>
          <h2 className="display-tight font-display text-[clamp(2rem,5vw,3.4rem)] font-600 text-bone">
            283 Main Street,
            <br />
            Orange, New Jersey.
          </h2>

          <div className="mt-7 flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-600 uppercase tracking-[0.1em] ${
                open ? "bg-ember/20 text-gold-2" : "bg-forge-3 text-bone-2"
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${open ? "bg-gold-2 leaf-shimmer" : "bg-bone-2"}`} />
              {open ? "Open now" : "Closed now"}
            </span>
            <span className="text-[13px] text-bone-2">Walk-ins welcome</span>
          </div>

          {/* Hours table */}
          <ul className="mt-8 divide-y divide-[var(--ash)] border-y border-[var(--ash)]">
            {HOURS.map((row, i) => (
              <li
                key={row.d}
                className={`flex items-center justify-between py-2.5 text-[15px] ${
                  i === todayIdx ? "text-bone" : "text-bone-2"
                }`}
              >
                <span className={i === todayIdx ? "font-600" : ""}>{row.d}</span>
                <span className={`tabnum ${i === todayIdx ? "text-gold-2" : ""}`}>{row.h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="tel:+19736767400"
              className="rounded-full bg-ember px-7 py-3.5 text-[14px] font-600 uppercase tracking-[0.1em] text-bone transition-transform hover:scale-[1.03]"
            >
              Call (973) 676-7400
            </a>
            <a
              href="https://maps.google.com/?q=283+Main+St,+Orange,+NJ+07050"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--ash-2)] px-7 py-3.5 text-[14px] font-500 uppercase tracking-[0.1em] text-bone transition-colors hover:border-[var(--gold)] hover:text-gold-2"
            >
              Get directions
            </a>
          </div>
        </div>

        {/* Right — map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[340px]"
        >
          <iframe
            title="Orange Star Jewelry on the map"
            src="https://maps.google.com/maps?q=283%20Main%20St%2C%20Orange%2C%20NJ%2007050&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 h-full w-full grayscale-[0.2] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--ash)]" />
        </motion.div>
      </div>
    </section>
  );
}
