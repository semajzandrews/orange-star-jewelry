import Link from "next/link";
import { site } from "../lib/site";

export default function NotFound() {
  return (
    <main className="bench-grain flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-4">Off the bench</p>
      <h1 className="display-tight font-display text-[clamp(2.6rem,9vw,5.5rem)] text-bone">
        That piece isn&apos;t on the tray.
      </h1>
      <p className="lede mt-5 max-w-sm text-bone-2">
        This page wandered off. Let&apos;s get you back to the gold.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-ember px-6 py-3 text-[0.95rem] font-medium text-bone transition-transform hover:-translate-y-0.5"
        >
          Back to the bench
        </Link>
        <a
          href={site.phoneHref}
          className="text-[0.9rem] text-gold underline-offset-4 hover:underline"
        >
          Call {site.phoneDisplay}
        </a>
      </div>
    </main>
  );
}
