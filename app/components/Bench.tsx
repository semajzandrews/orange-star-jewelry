import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "../../lib/site";

export default function Bench() {
  return (
    <section id="bench" className="relative mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1">
          <p className="eyebrow mb-4">The bench</p>
          <h2 className="display-tight text-[clamp(2rem,5.5vw,3.4rem)] text-bone">
            One pair of hands, the same since 1997.
          </h2>
          <div className="lede mt-6 space-y-4 text-bone-2">
            <p>
              Most of Main Street sells from a case. Orange Star works from a
              bench. {site.craftsman} anneals, files, sets, and polishes by hand,
              the way the trade has always done it, with a torch and a steady eye.
            </p>
            <p>
              That is why families have brought their gold here for more than
              twenty years. A ring sized while you wait. A worn chain made whole.
              A stone reset into something new. Real metal, worked in front of you.
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
                src="/img/bench-solder.jpg"
                alt="A goldsmith soldering fine gold chains on a bench with a torch"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* small offset detail */}
            <div className="absolute -bottom-7 -left-6 hidden w-40 overflow-hidden rounded-sm border border-gold/25 shadow-2xl sm:block">
              <div className="relative aspect-square">
                <Image
                  src="/img/serv-mandrel.jpg"
                  alt="A ring being sized on a wooden mandrel"
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
