export default function Footer() {
  return (
    <footer className="border-t border-[var(--ash)] bg-forge px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="gold-seam mb-12" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                <path
                  d="M12 2.5l2.7 6.1 6.6.5-5 4.3 1.6 6.5L12 16.9 6.1 20.4l1.6-6.5-5-4.3 6.6-.5L12 2.5z"
                  fill="var(--ember)"
                  stroke="var(--gold)"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display text-xl font-600 text-bone">Orange Star Jewelry</span>
            </div>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-bone-2">
              A working goldsmith&apos;s bench on Main Street in Orange, New Jersey.
              Custom rings, hand repairs and fine gold since 1997.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[12px] font-600 uppercase tracking-[0.16em] text-gold-2">Find Us</h4>
            <address className="space-y-2 text-[15px] not-italic text-bone-2">
              <p>283 Main Street<br />Orange, NJ 07050</p>
              <p>
                <a href="tel:+19736767400" className="transition hover:text-bone">(973) 676-7400</a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-[12px] font-600 uppercase tracking-[0.16em] text-gold-2">Hours</h4>
            <ul className="space-y-1.5 text-[15px] text-bone-2">
              <li className="flex justify-between gap-4"><span>Mon – Sat</span><span className="tabnum">10 AM – 7 PM</span></li>
              <li className="flex justify-between gap-4"><span>Sunday</span><span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--ash)] pt-6 sm:flex-row sm:items-center">
          <p className="text-[13px] text-bone-2">
            © {new Date().getFullYear()} Orange Star Jewelry. Main Street, Orange NJ.
          </p>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[13px] text-bone-2 transition hover:text-bone"
          >
            <span>Built by</span>
            <span className="font-display font-500 text-gold-2 transition group-hover:text-gold">bysemaj.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
