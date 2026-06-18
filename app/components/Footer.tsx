import { site } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-forge px-5 pt-16 pb-28 md:px-8 md:pb-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M12 1.6l2.7 6.2 6.7.5-5.1 4.4 1.6 6.6L12 20l-5.9 3.7 1.6-6.6L2.6 8.3l6.7-.5z"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display text-[1.15rem]">{site.name}</span>
            </div>
            <p className="max-w-sm text-[0.92rem] leading-relaxed text-bone-2">
              Gold, diamonds and custom pieces on Main Street in {site.address.city},
              since {site.foundedYear}. Sold, made, and repaired by hand by master
              goldsmith {site.craftsman}.
            </p>
          </div>

          <div>
            <p className="mb-3 text-[0.76rem] uppercase tracking-wide text-bone-2/70">
              Visit
            </p>
            <p className="text-bone">{site.address.line}</p>
            <p className="text-bone-2">
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
            <a href={site.phoneHref} className="mt-2 inline-block text-gold hover:underline">
              {site.phoneDisplay}
            </a>
          </div>

          <div>
            <p className="mb-3 text-[0.76rem] uppercase tracking-wide text-bone-2/70">
              Hours
            </p>
            <p className="text-bone-2">{site.hoursSummary}</p>
            <p className="text-bone-2">Closed Sunday</p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-block rounded-full border border-gold/40 px-4 py-2 text-[0.85rem] text-gold transition-colors hover:bg-gold hover:text-forge"
            >
              Call Orange Star
            </a>
          </div>
        </div>

        <div className="gold-seam my-10" />

        <div className="flex flex-col items-start justify-between gap-3 text-[0.78rem] text-bone-2/70 sm:flex-row sm:items-center">
          <p className="tabnum">
            © {new Date().getFullYear()} {site.legalName} · {site.address.full}
          </p>
          {/* bysemaj maker's mark — styled to this site's gold/engraved voice */}
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-display italic transition-colors hover:text-gold"
          >
            <span className="text-bone-2/60">made at the bench by</span>
            <span className="text-gold/80 group-hover:text-gold">bysemaj.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
