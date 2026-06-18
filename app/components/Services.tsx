import Image from "next/image";
import Reveal from "./Reveal";

const services = [
  {
    n: "01",
    title: "Custom design",
    body:
      "Engagement rings and one-off pieces drawn, modeled, and built to fit the hand they are made for. Bring a sketch, a photo, or just a feeling.",
    img: "/img/shop-rose-ring.jpg",
    imgAlt: "A diamond halo ring nestled in deep red roses",
  },
  {
    n: "02",
    title: "Repair and resizing",
    body:
      "Sized while you wait, snapped chains rejoined, worn prongs rebuilt, clasps replaced. Old gold made wearable again, not thrown away.",
    img: "/img/serv-repair.jpg",
    imgAlt: "A goldsmith in an apron torching a ring held in tweezers over a soldering block",
  },
  {
    n: "03",
    title: "Stones and resetting",
    body:
      "Loose diamonds tightened, lost stones matched, and heirlooms reset into a new setting that keeps the story and loses the dated look.",
    img: "/img/shop-link-bracelet.jpg",
    imgAlt: "A chunky gold link bracelet on a magazine in warm light",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
      <Reveal className="mb-12">
        <p className="eyebrow mb-3">What we do</p>
        <h2 className="display-tight text-[clamp(2rem,5.5vw,3.4rem)] text-bone">
          Buy it, build it, or bring it back to life.
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 110}
            className="group flex flex-col overflow-hidden rounded-sm border border-gold/15 bg-forge-2/50 lift"
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={s.img}
                alt={s.imgAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="zoom-media object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forge/70 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="tabnum mb-3 text-[0.78rem] text-gold">{s.n}</span>
              <h3 className="mb-2.5 text-[1.35rem] text-bone">{s.title}</h3>
              <p className="lede text-[0.94rem] text-bone-2">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
