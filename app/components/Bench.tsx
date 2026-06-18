import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "../../lib/site";

export default function Bench() {
  return (
    <section id="bench" className="relative mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1">
          <p className="eyebrow mb-4">Why people buy here</p>
          <h2 className="display-tight text-[clamp(2rem,5.5vw,3.4rem)] text-bone">
            Beautiful pieces, made and finished by hand.
          </h2>
          <div className="lede mt-6 space-y-4 text-bone-2">
            <p>
              Everything you see is chosen and finished in this shop, not pulled
              from a catalog. Master goldsmith {site.craftsman} anneals, sets, and
              polishes each piece by hand, with a torch and a steady eye, so the
              gold you take home is the real thing.
            </p>
            <p>
              That is why families have shopped here for more than twenty years.
              Buy a ring off the case, design one of your own, or bring an heirloom
              to remake. Real metal, real craft, right on Main Street.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {site.metals.map((m) => (
              <span
                key={m}
                className="rounded-full border border-gold/30 px-3.5 py-1.5 text-[0.8rem] text-gold tabnum"
              >
                {m}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 md:order-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/15">
              <Image
                src="/img/worn-hoop.jpg"
                alt="A woman holding a chunky gold hoop earring, lit warm in profile"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* small offset detail — the hand behind the piece */}
            <div className="absolute -bottom-7 -left-6 hidden w-40 overflow-hidden rounded-sm border border-gold/25 shadow-2xl sm:block">
              <div className="relative aspect-square">
                <Image
                  src="/img/craft-anneal.jpg"
                  alt="A jeweler annealing a gold ring with a torch on a soldering block"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
