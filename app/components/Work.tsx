import Image from "next/image";
import Reveal from "./Reveal";

/* The collection — desirable pieces people come in to buy, shown first.
   An offset, non-grid gallery so it reads as a curated case, not a stock
   product grid. Each photo used once. */

const pieces = [
  {
    src: "/img/worn-earring.jpg",
    alt: "A woman wearing a gold chandelier earring, lit warm against deep red",
    label: "Worn, the way it should be",
    span: "md:col-span-7 aspect-[16/11]",
  },
  {
    src: "/img/shop-gold-set.jpg",
    alt: "A set of 22k gold diamond bangles, a chain and a ring on white",
    label: "Gold sets, 22k",
    span: "md:col-span-5 aspect-[4/5]",
  },
  {
    src: "/img/shop-engagement.jpg",
    alt: "An emerald-cut diamond engagement ring in a yellow-gold pave band",
    label: "Engagement",
    span: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: "/img/shop-star-hoops.jpg",
    alt: "A pair of gold star-charm hoop earrings on blush silk",
    label: "Gold hoops",
    span: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: "/img/shop-bar-pendant.jpg",
    alt: "A gold bar pendant on a box chain beside a gold cuff",
    label: "Chains and pendants",
    span: "md:col-span-4 aspect-[4/5]",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-forge-2/60 py-24 md:py-32">
      <div className="mx-auto max-w-[1180px] px-5 md:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">The collection</p>
            <h2 className="display-tight text-[clamp(2rem,5.5vw,3.4rem)] text-bone">
              Pieces you came in to find.
            </h2>
          </div>
          <p className="max-w-xs text-[0.92rem] text-bone-2">
            Rings, chains, hoops and diamonds in 14k, 18k, 22k and platinum,
            ready to take home or made to order. Want something of your own?
            Bring an idea or a photo.
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
                className="zoom-media object-cover transition-transform duration-700 group-hover:scale-[1.05]"
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
