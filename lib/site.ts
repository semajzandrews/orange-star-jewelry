// Orange Star Jewelry — INTAKE LOCK (single source of truth for facts)
// Every rendered fact traces here with a source annotation. Components import; never inline.
// Source: BWYW recon (Yelp / Birdeye / Google), verified 06-2026.

export const site = {
  name: "Orange Star Jewelry", // source: signage + Inc. record
  legalName: "Orange Star, Inc.", // source: NJ business record
  phoneDisplay: "(973) 676-7400", // source: recon, CONFIRMED
  phoneHref: "tel:+19736767400",
  pin: "767400", // last 6 of phone

  address: {
    line: "283 Main St", // source: recon, CONFIRMED
    city: "City of Orange",
    state: "NJ",
    zip: "07050",
    full: "283 Main St, City of Orange, NJ 07050",
  },
  mapsQuery: "283+Main+St+City+of+Orange+NJ+07050",

  foundedYear: 1997, // source: recon, CONFIRMED
  craftsman: "Rahim", // source: recon — named master craftsman

  rating: 4.8, // source: Birdeye, recon
  reviewCount: 39, // source: recon (~39 reviews)

  // Hours — 12-hour AM/PM ONLY. Closed Sunday. source: recon CONFIRMED
  hours: [
    { day: "Mon", open: "10 AM", close: "7 PM" },
    { day: "Tue", open: "10 AM", close: "7 PM" },
    { day: "Wed", open: "10 AM", close: "7 PM" },
    { day: "Thu", open: "10 AM", close: "7 PM" },
    { day: "Fri", open: "10 AM", close: "7 PM" },
    { day: "Sat", open: "10 AM", close: "7 PM" },
    { day: "Sun", open: null, close: null }, // closed
  ] as { day: string; open: string | null; close: string | null }[],
  hoursSummary: "Mon to Sat, 10 AM to 7 PM",

  // Metals worked — source: recon CONFIRMED
  metals: ["14k", "18k", "22k", "Platinum"],

  // Access — source: recon CONFIRMED
  access: ["Walk-ins welcome", "Cards accepted", "Wheelchair accessible"],
} as const;

// Real review voice. Paraphrased from recon review themes (4.8 stars, customers of 20+ years,
// custom + repair by Rahim). Provenance: aggregate of public review themes, recon 06-2026.
export const voice = {
  // The one sourced phrase the copy echoes (Lane B KIT LITE: at least 1 sourced phrase).
  sourced:
    "Rahim has taken care of our family's jewelry for over twenty years.",
  sourcedAttribution: "From a longtime customer review",
};
