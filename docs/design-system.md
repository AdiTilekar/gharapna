# Gharapna Design System Documentation

## 1. Brand Philosophy & Identity
- **Name**: Gharapna ("ghar + apna", meaning *your own home* in Hindi/Marathi).
- **Tone of Voice**: Warm, honest, transparent, calm, premium, never pushy.
- **Design Metaphor**: Architectural clarity, generous breathing room, structured tabular breakdowns, and high trust contrast.

---

## 2. Color Palette & Semantic Tokens

### Primary Palette (Trust & Authority)
- `brand.navy.950` (`#060F13`): Deepest footer / midnight canvas.
- `brand.navy.900` (`#0B1B20`): Dark mode main canvas background.
- `brand.navy.800` (`#0F2D37`): Primary brand anchor — used for bold headings, key text, and trust borders.
- `brand.navy.700` (`#163E4B`): Dark mode card surface / elevated sections.
- `brand.navy.600` (`#1F5668`): Secondary brand highlights.
- `brand.navy.100` (`#E4EFF2`): Subtle badge tint.
- `brand.navy.50`  (`#F0F6F8`): Light button backgrounds and surface highlights.

### Warm Accent Palette (Warmth & Action)
- `brand.terracotta.700` (`#B84725`): Active button state.
- `brand.terracotta.600` (`#D95D39`): Primary Accent / CTA button / Price highlights.
- `brand.terracotta.500` (`#E07A5F`): Secondary accent / decorative accents.
- `brand.terracotta.100` (`#FCECE8`): Alert / ribbon backgrounds.
- `brand.terracotta.50`  (`#FFF7F5`): Highlight surfaces.

### Highlight Palette
- `brand.saffron.500` (`#F4A261`): Warm golden badges, star indicators, wavy underline accents.
- `brand.saffron.100` (`#FEF3E8`): Light golden tint.

### Background & Surface
- `brand.surface.canvas` (`#FAF7F2`): Warm off-white background (non-sterile, organic paper feel).
- `brand.surface.card`   (`#FFFFFF`): Light mode crisp card surface.
- `brand.surface.darkCanvas` (`#0B1B20`): Dark mode primary background.
- `brand.surface.darkCard`   (`#11252C`): Dark mode elevated surface.

---

## 3. Typography System
- **Headings**: `Playfair Display`, serif. Loaded with `next/font/google`.
  - Hero: `font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight`
  - Section Headings: `font-serif font-bold text-2xl sm:text-3xl`
  - Card Titles: `font-serif font-bold text-xl`
- **Body & Controls**: `Inter`, sans-serif.
  - Body Copy: `text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed`
  - Meta/Badges: `text-xs uppercase tracking-wider font-semibold`
- **Numerical & Financial Data**: Monospaced tabular figures (`font-mono font-bold`) for Indian Rupee amounts (Lakh / Crore) to ensure columnar alignment in cost breakups.

---

## 4. Trust System Components

| Component | Purpose & Behavior |
| :--- | :--- |
| `<DemoBanner />` | Top site-wide warning notification rendered when `NEXT_PUBLIC_DEMO_MODE=true`. |
| `<DemoRibbon />` | Badge affixed to property cards indicating "Sample Listing". |
| `<ReraBadge />` | Visual indicator of MahaRERA compliance; disables links for placeholder numbers `P52100XXXXXX`. |
| `<PriceBreakup />` | Complete upfront breakdown (Agreement Value, Stamp Duty, Metro Cess, Registration Cap, GST, Maintenance, Parking, All-In Total). |
| `<DocumentsVault />` | Displays legal records (Title, CC, EC, Approved Plans) with explicit status ("To be uploaded"). |
| `<ProgressTimeline />` | 5-step dated construction milestone tracking. |
| `<ResponsePromise />` | Reassuring prompt: "We reply within 2 hours, 9:00 AM – 8:00 PM IST". |
| `<JurisdictionLabel />` | Explicit badge distinguishing PCMC, PMRDA, and PMC municipal authorities. |
| `<Testimonials />` | Renders strictly nothing without real verified buyer testimonials. |

---

## 5. Accessibility & Performance Standards
- **WCAG AA Compliance**: Color contrast ratio >= 4.5:1 for normal text and >= 3:1 for large text across light and dark modes.
- **Keyboard Navigation**: Explicit focus rings (`focus:ring-2 focus:ring-brand-terracotta-500`) on all interactive buttons, links, inputs.
- **Mobile First**: Optimized for Indian mobile viewports (360px width minimum testing baseline).
- **Form Protection**: React Hook Form + Zod validation with Indian 10-digit mobile number regex and honeypot spam traps.
- **Lighthouse 90+ Target**: Server-rendered SSR, zero render-blocking external scripts, next/font with `display: swap`.
