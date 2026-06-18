import Image from "next/image";
import Reveal from "./Reveal";

/* Work from the bench — an offset, non-grid gallery so it reads as a
   tray of finished pieces, not a product grid. Each photo used once. */

const pieces = [
  {
    src: "/img/piece-solitaire.jpg",
    alt: "A white-gold diamond solitaire engagement ring resting beside its band",
    label: "Engagement, set by hand",
    span: "md:col-span-7 aspect-[16/11]",
  },
  {
    src: "/img/piece-twotone.jpg",
    alt: "A two-tone gold ring with two diamonds on a dark stone surface",
    label: "Two-tone custom",
    span: "md:col-span-5 aspect-[4/5]",
  },
  {
    src: "/img/piece-rose.jpg",
    alt: "A rose-gold ring detail",
    label: "Rose gold",
    span: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: "/img/piece-wreath.jpg",
    alt: "A diamond wreath-style ring",
    label: "Wreath halo",
    span: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: "/img/piece-hoops.jpg",
    alt: "A pair of gold hoop earrings",
    label: "Gold hoops",
    span: "md:col-span-4 aspect-[4/5]",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-forge-2/60 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Work from the bench</p>
            <h2 className="display-tight text-[clamp(2rem,5.5vw,3.4rem)] text-bone">
              Made for one finger, one wrist, one story.
            </h2>
          </div>
          <p className="max-w-xs text-[0.92rem] text-bone-2">
            Custom design and repair across 14k, 18k, 22k and platinum. Bring an
            idea, a photo, or an heirloom to remake.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-5">
          {pieces.map((p, i) => (
            <Reveal
              key={p.src}
              delay={(i % 3) * 90}
              className={`group relative overflow-hidden rounded-sm border border-gold/12 lift ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forge/85 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 font-display text-[0.95rem] italic text-bone">
                {p.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
