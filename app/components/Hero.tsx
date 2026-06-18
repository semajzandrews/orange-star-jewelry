"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { site } from "../../lib/site";

/* SIGNATURE — "The Torch."
   The visitor's pointer IS the torch. Where it passes the wordmark,
   the cold annealed metal heats to molten gold and ember. Idle: the
   word breathes a faint heat. On approach (touch/move) it reacts < 300ms.
   craft_verb = ANNEAL · touch_primitive = drag/move. */

export default function Hero() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const hotRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef(0);
  const target = useRef({ x: 0.5, y: 0.5, r: 0, a: 0 });
  const cur = useRef({ x: 0.5, y: 0.5, r: 0, a: 0 });
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cacheRect = () => {
      rectRef.current = stage.getBoundingClientRect();
    };
    cacheRect();
    window.addEventListener("resize", cacheRect);
    window.addEventListener("scroll", cacheRect, { passive: true });

    const setHeat = (clientX: number, clientY: number, amt: number) => {
      const rect = rectRef.current;
      if (!rect) return;
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      target.current.x = Math.max(-10, Math.min(110, x));
      target.current.y = Math.max(-10, Math.min(110, y));
      target.current.r = 190;
      target.current.a = amt;
    };

    const onMove = (e: PointerEvent) => setHeat(e.clientX, e.clientY, 1);
    const onLeave = () => {
      target.current.r = 0;
      target.current.a = 0;
    };

    if (!reduce) {
      stage.addEventListener("pointermove", onMove);
      stage.addEventListener("pointerleave", onLeave);
      stage.addEventListener("pointerdown", onMove);
    }

    // one auto-sweep on load so the moment is discoverable on touch devices
    let sweepT = 0;
    let sweeping = !reduce;
    const startSweep = () => {
      sweepT = performance.now();
    };
    const sweepTimer = window.setTimeout(startSweep, 700);

    const tick = (now: number) => {
      const t = target.current;
      // auto-sweep: glide the torch across the word once
      if (sweeping && sweepT) {
        const p = Math.min(1, (now - sweepT) / 1700);
        t.x = 8 + p * 84;
        t.y = 50;
        t.r = 175;
        t.a = Math.sin(p * Math.PI); // ease in/out
        if (p >= 1) {
          sweeping = false;
          t.r = 0;
          t.a = 0;
        }
      }
      const c = cur.current;
      const k = 0.12;
      c.x += (t.x - c.x) * k;
      c.y += (t.y - c.y) * k;
      c.r += (t.r - c.r) * k;
      c.a += (t.a - c.a) * k;

      if (hotRef.current) {
        hotRef.current.style.setProperty("--hx", c.x.toFixed(2) + "%");
        hotRef.current.style.setProperty("--hy", c.y.toFixed(2) + "%");
        hotRef.current.style.setProperty("--hr", c.r.toFixed(1) + "px");
      }
      if (glowRef.current) {
        glowRef.current.style.setProperty("--hx", c.x.toFixed(2) + "%");
        glowRef.current.style.setProperty("--hy", c.y.toFixed(2) + "%");
        glowRef.current.style.setProperty("--ha", c.a.toFixed(3));
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      clearTimeout(sweepTimer);
      window.removeEventListener("resize", cacheRect);
      window.removeEventListener("scroll", cacheRect);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      stage.removeEventListener("pointerdown", onMove);
    };
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-16">
      {/* the bench, photographed honestly, behind the word */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero-torch.jpg"
          alt="A goldsmith's hand annealing a gold ring with a torch on a soldering block at the Orange Star bench"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_40%] opacity-[0.42]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 70% 30%, transparent, rgba(22,16,12,0.55) 55%, rgba(22,16,12,0.95) 100%), linear-gradient(180deg, rgba(22,16,12,0.45), rgba(22,16,12,0.2) 40%, rgba(22,16,12,0.92))",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1180px] flex-col justify-center px-5 pb-24 md:px-8">
        <p className="eyebrow mb-5">On Main Street since 1997</p>

        {/* the torch-heat wordmark */}
        <div ref={stageRef} className="torch-stage select-none">
          <div
            ref={glowRef}
            className="torch-glow idle-breathe"
            aria-hidden
          />
          <h1 className="display-tight font-display text-[clamp(3.1rem,13vw,9.5rem)]">
            <span className="relative inline-block">
              <span className="metal-word">Gold takes its shape</span>
              <span ref={hotRef} className="metal-word-hot" aria-hidden>
                Gold takes its shape
              </span>
            </span>
            <br />
            <span className="text-bone/95">by hand.</span>
          </h1>
        </div>

        <p className="lede mt-7 max-w-xl text-[1.05rem] text-bone-2">
          A working goldsmith&apos;s bench, not a glass case. Custom rings, hand
          repair, and honest metal worked by master craftsman {site.craftsman} since 1997.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={site.phoneHref}
            className="rounded-full bg-ember px-6 py-3 text-[0.95rem] font-medium text-bone transition-transform hover:-translate-y-0.5"
          >
            Call the bench
          </a>
          <a
            href="#work"
            className="text-[0.9rem] text-bone-2 underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            See work from the bench
          </a>
        </div>

        <p className="mt-8 max-w-xs text-[0.74rem] italic text-bone-2/70 font-display">
          Move across the words.
        </p>
      </div>
    </section>
  );
}
