import Image from "next/image";
import Reveal from "./Reveal";
import { site, voice } from "../../lib/site";

function Stars() {
  return (
    <span className="inline-flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.5l1.7-7L2 9.8l7.1-.6z" />
        </svg>
      ))}
    </span>
  );
}

export default function Proof() {
  return (
    <section className="relative overflow-hidden bg-forge-2/60 py-24 md:py-28">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <Stars />
            <span className="tabnum text-[0.95rem] text-bone-2">
              {site.rating.toFixed(1)} from {site.reviewCount} reviews
            </span>
          </div>
          <blockquote className="display-tight font-display text-[clamp(1.7rem,4.2vw,2.7rem)] italic text-bone">
            &ldquo;{voice.sourced}&rdquo;
          </blockquote>
          <p className="mt-5 text-[0.85rem] text-gold">{voice.sourcedAttribution}</p>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {site.access.map((a) => (
              <span
                key={a}
                className="rounded-full border border-bone/12 px-3.5 py-1.5 text-[0.8rem] text-bone-2"
              >
                {a}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/15">
            <Image
              src="/img/shop-rings-box.jpg"
              alt="Three rose-gold diamond rings set in a velvet ring box"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forge/40 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
