# Orange Star Jewelry — SIGNATURE

## World sentence
Annealed gold and torch-orange glow, late afternoon on Main Street, set like a
goldsmith's worn bench tray since 1997. (material: gold + fire · light: torch
glow · era: timeless · place: Orange NJ Main Street bench.)

## Craft-verb derivation (§S1)
- VERB HARVEST (evidence: recon — custom design, repair, master craftsman Rahim):
  anneal, file, solder, set, polish, size. (All hand verbs a goldsmith performs;
  none a receptionist could claim.)
- CHOSEN VERB: **ANNEAL** — to heat metal with the torch until it glows and
  yields to shaping. Its state change IS the brand promise: cold, hard, finished
  metal becomes workable, alive, made-by-hand.
- MATERIAL: gold. STATE CHANGE: cold dark annealed metal -> molten lit gold/ember.
- FINGER MAPPING: drag / pointer-move. The visitor's pointer IS the torch.
- ARC: reveal. POSITION: cover (the wordmark is the first thing painted and
  touched). CTA SHAPE: present-from-start (tap-to-call), justified by the trust
  vertical (phone is the conversion).
- IDLE: reactive-on-approach + a faint breathing heat glow when untouched.

## The signature moment — "The Torch"
A full-bleed cover hero. The headline "Gold takes its shape" is rendered in cold,
desaturated annealed-gold metal. Where the visitor's pointer (or touch-drag)
passes, a radial heat mask reveals a molten gold-to-ember layer underneath and a
warm glow follows the cursor, exactly as a torch heats metal at the bench. On
load, one auto-sweep glides the heat across the words so the moment is
discoverable on touch devices. Idle = a slow breathing glow. Reduced-motion =
the word rests in a composed warm-gold state, no animation.
- Implementation: cached rect at pointer capture, single rAF drain, CSS-var
  driven radial mask + screen-blend glow. No WebGL, no heavy deps.
- Completion: the torch reveal is ambient (no gate); the CTA "Call the bench" is
  present from the first viewport.

## Frame
TOOL WALL / BENCH (spatial superclass). The page inhabits a goldsmith's bench:
the tray of finished pieces (Work), the bench story, the torch services, the
address as a bench tag. Map composed as the "find the bench" panel, not the
generic info-left/map-right box.

## Type casting (3 voices)
- DISPLAY: **Boska** (Fontshare) — warm high-contrast didone-ish serif, the
  engraved hallmark voice.
- BODY: **General Sans** (Fontshare) — quiet modern grotesque.
- LABEL: Boska italic small-caps eyebrow (label_voice = italic-serif).

## Palette
Deep annealed-bench ground #16100C, warm bone #F3EBDD, torch brick-ember
**#C24327** (accent / LANE), gold leaf #C8943B and lit gold #EBC477 as the metal.
Warm, hot, hand-made. NOT cold luxury, NOT velvet-museum.

## Why it diverges from sibling jewelers (BURNED)
- Edgar = velvet aubergine, Bodoni, champagne, tumbling diamond, museum hush.
- Orange Star = annealed-bench black + brick-ember, Boska didone, gold-as-metal,
  the torch and the working hand, a pointer-driven heat reveal. Opposite hue
  family, opposite mood, a live craft signature instead of a passive 3D object.
- Does not copy any generic discount-jeweler glass-case grid.

## Signature line
"On Main Street since 1997, gold takes its shape by hand at the Orange Star bench."
