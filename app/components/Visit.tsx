import Reveal from "./Reveal";
import { site } from "../../lib/site";

export default function Visit() {
  return (
    <section id="visit" className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mb-12">
        <p className="eyebrow mb-3">Visit the shop</p>
        <h2 className="display-tight text-[clamp(2rem,5.5vw,3.4rem)] text-bone">
          Come see it in person on Main Street.
        </h2>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-[1fr_1.15fr] md:gap-10">
        {/* hours + address as a bench tag */}
        <Reveal className="rounded-sm border border-gold/15 bg-forge-2/50 p-7 md:p-8">
          <div className="mb-7">
            <p className="mb-1 text-[0.78rem] uppercase tracking-wide text-bone-2/70">
              Address
            </p>
            <p className="font-display text-[1.3rem] text-bone">{site.address.line}</p>
            <p className="text-bone-2">
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <a
              href={`https://www.google.com/maps?q=${site.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[0.85rem] text-gold underline-offset-4 hover:underline"
            >
              Get directions
            </a>
          </div>

          <div className="gold-seam mb-7" />

          <p className="mb-3 text-[0.78rem] uppercase tracking-wide text-bone-2/70">
            Hours
          </p>
          <ul className="space-y-1.5">
            {site.hours.map((h) => (
              <li key={h.day} className="flex items-baseline justify-between gap-4">
                <span className="text-bone">{h.day}</span>
                <span className="tabnum text-bone-2">
                  {h.open ? `${h.open} to ${h.close}` : "Closed"}
                </span>
              </li>
            ))}
          </ul>

          <div className="gold-seam my-7" />

          <a
            href={site.phoneHref}
            className="block rounded-full bg-ember px-6 py-3 text-center text-[0.95rem] font-medium text-bone transition-transform hover:-translate-y-0.5"
          >
            Call {site.phoneDisplay}
          </a>
        </Reveal>

        {/* map */}
        <Reveal delay={120}>
          <div className="map-frame h-full min-h-[360px]" style={{ height: "clamp(360px, 48vw, 520px)" }}>
            <iframe
              title={`Orange Star Jewelry location, ${site.address.full}`}
              src={`https://www.google.com/maps?q=${site.mapsQuery}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
