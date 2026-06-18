const ITEMS = [
  "Custom Engagement Rings",
  "Hand Repairs",
  "14k · 18k · 22k · Platinum",
  "Stone Setting",
  "Heirloom Restoration",
  "Resizing While You Wait",
  "Gold & Diamonds",
  "Watch Batteries",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-[var(--ash)] bg-forge-2 py-4">
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-0 whitespace-nowrap">
        {[...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className="flex items-center text-[13px] font-500 uppercase tracking-[0.18em] text-bone-2">
            <span className="px-7">{t}</span>
            <Spark />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

function Spark() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" aria-hidden>
      <path
        d="M12 2.5l2.7 6.1 6.6.5-5 4.3 1.6 6.5L12 16.9 6.1 20.4l1.6-6.5-5-4.3 6.6-.5L12 2.5z"
        fill="var(--gold)"
      />
    </svg>
  );
}
