# Gharapna (घर अपना) — Trust-First Real Estate Platform

A production-grade, trust-first residential real estate discovery platform for **Gharapna**, serving homebuyers across **Pimpri-Chinchwad Municipal Corporation (PCMC)**, Pune, Maharashtra, India.

---

## 🚀 Key Features

- **Upfront Cost Transparency**: Calculates exact Stamp Duty (6%), Metro Cess (1%), Registration fee (capped at ₹30,000 for PCMC), GST (1% affordable vs 5% standard), society maintenance, and parking before buyers schedule site visits.
- **Flats Inventory & URL-Synced Filters**: 28 flat records across 6 PCMC projects with multi-dimensional filtering (BHK, price slider, carpet area, floor level, facing, and possession status).
- **Interactive Leaflet Clustered Map**: OpenStreetMap mapping with custom HTML price-pill markers, locality jump-to zooming, and responsive popups linking directly to unit details (zero paid API keys required).
- **Side-by-Side Comparison Matrix**: Floating comparison drawer accommodating up to 3 units simultaneously, plus a cross-locality comparator (`/locations/compare`).
- **Financial Calculators Hub (`/tools`)**: Interactive EMI Amortization Calculator, Government Stamp Duty & Cess Estimator, and Maximum Borrowing Affordability Calculator.
- **Editorial & Guides Hub (`/blog`)**: 3 in-depth, research-backed starter articles (650+ words each) on PCMC corridors, Wakad vs Ravet vs Pimple Saudagar comparisons, and MahaRERA due diligence checklists.
- **Why Gharapna (`/why-gharapna`) & About (`/about`)**: Complete 5-step home buying process, comparative broker evaluation table, 2-hour response SLA (`<ResponsePromise />`), and transparent team empty states upholding zero-fictitious-identities rules.
- **Dedicated FAQ Hub (`/faq`)**: Full 10-entry buyer knowledge base with search filtering and structured JSON-LD `FAQPage` schema.
- **Protected Admin Operations Center (`/admin`)**: Passcode-gated operations desk for managing inquiries, scheduling site visits, inline status updates, and one-click CSV export (`/api/export-leads`).
- **Pluggable Integration Architecture**: Ready-to-connect webhook hooks for WhatsApp Business API, CRM ingestion (HubSpot/LeadSquared), and email notifications.
- **Demo-Data Safeguard & Build Gate**: Every seed record carries `isDemo: true`. A pre-launch verification script `npm run check:launch` blocks production builds if any demo data, placeholder RERA, or dummy contact details exist.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom Design Tokens + Dark Mode
- **Mapping**: Leaflet + React Leaflet + OpenStreetMap
- **Forms & Validation**: React Hook Form + Zod
- **Icons**: Lucide React
- **Architecture**: Repository Pattern in `/lib/repositories` (swappable for PostgreSQL/Supabase)
- **Testing**: Vitest (Unit) + Playwright (E2E)
- **Deployment Target**: Vercel

---

## 📦 Getting Started

### 1. Prerequisites
- Node.js 18.x, 20.x, or 22.x
- npm 9+

### 2. Installation
```bash
git clone <repo-url>
cd "Ghar apna"
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your agency details:
```env
NEXT_PUBLIC_PHONE="+91 98000 00000"
NEXT_PUBLIC_WHATSAPP="919800000000"
NEXT_PUBLIC_EMAIL="enquiry@gharapna.com"
NEXT_PUBLIC_ADDRESS="Chinchwad Station Road, Pimpri-Chinchwad, Pune 411019, Maharashtra"
NEXT_PUBLIC_DEMO_MODE="true"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
ADMIN_PASSCODE="gharapna2025"
```

### 4. Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles optimized static/SSG production build (88 routes) |
| `npm run start` | Runs production server |
| `npm test` | Runs complete Vitest unit test suite (21 unit tests) |
| `npx playwright test` | Runs Playwright end-to-end smoke tests (6 test suites) |
| `npm run check:launch` | Runs production launch gate integrity check |

---

## 🔒 Pre-Launch Integrity Check (`check:launch`)

Before deploying to production, run:
```bash
npm run check:launch
```

### What it checks:
1. **Demo Flags**: Fails if any record in `data/localities.ts`, `data/projects.ts`, or `data/flats.ts` has `isDemo: true`.
2. **RERA Placeholders**: Fails if any project RERA matches `P52100XXXXXX` or `[TO BE ADDED]`.
3. **Contact Details**: Fails if required contact environment variables are missing or set to sample defaults.

### How to transition to Production:
1. Replace seed projects in `data/projects.ts` with authentic builder projects and real MahaRERA numbers.
2. In `data/localities.ts`, verify infrastructure items and update `isDemo: false`.
3. Update `.env.production` with real agency phone numbers, WhatsApp, and office address.
4. Set `NEXT_PUBLIC_DEMO_MODE="false"`.
5. Run `npm run check:launch` to ensure the build gate passes.

---

## 📁 Directory Structure

```
├── app/                  # Next.js App Router (88 SSG / dynamic pages)
│   ├── about/            # About Gharapna & Team empty state
│   ├── admin/            # Protected Admin Operations Portal
│   ├── api/
│   │   ├── export-leads/ # CSV export API
│   │   ├── leads/        # Lead ingestion API
│   │   └── leads/[id]/   # Status update & delete API
│   ├── blog/             # Research & Guides engine ([slug])
│   ├── contact/          # Site visit booking & contact form
│   ├── faq/              # 10-entry FAQ Hub with JSON-LD FAQPage
│   ├── flats/            # Flats catalog, filter engine, clean slug details
│   ├── locations/        # Locality hub, comparison matrix, dynamic locality pages
│   ├── projects/         # Project showcase & floor plan / breakup details
│   ├── tools/            # EMI, Stamp Duty, Affordability calculators
│   ├── why-gharapna/     # 5-step buying process & philosophy
│   ├── robots.ts         # Dynamic robots.txt with demo disallow
│   └── sitemap.ts        # Dynamic XML sitemap generator
├── components/
│   ├── admin/            # AdminDashboardClient (passcode gate, metrics, table)
│   ├── blog/             # BlogListClient, MarkdownContent renderer
│   ├── flat/             # FlatCard, FlatsCatalogClient, FlatCompareDrawer
│   ├── forms/            # LeadForm, SiteVisitModal, ExitIntentModal
│   ├── layout/           # Navbar, Footer, LanguageToggle, ThemeToggle, FloatingWhatsApp
│   ├── locality/         # LocalityCard
│   ├── maps/             # PcmcMap, PcmcMapWrapper (Leaflet dynamic import)
│   ├── project/          # ProjectCard
│   ├── tools/            # EmiCalculator, StampDutyEstimator, AffordabilityCalculator
│   └── trust/            # DemoBanner, DemoRibbon, ReraBadge, PriceBreakup, etc.
├── config/               # Charges (stamp duty / GST / caps), Site, and FAQ configs
├── data/                 # Seed records (localities, projects, flats, blogs)
├── lib/                  # Repositories (Lead, Flat, Project, Locality), Calculators, i18n
├── tests/
│   ├── unit/             # Vitest test suite (calculators, formatters, launch check)
│   └── e2e/              # Playwright smoke test suite (6 browser tests)
└── scripts/              # Pre-launch safety gate and Playwright verification scripts
```

---

## ⚖️ License & Disclaimers

All project names, unit configurations, and pricing in development mode are fictional prototypes carrying `isDemo: true` flags. Users are advised to verify complete registered details and title clearances on the official Maharashtra Real Estate Regulatory Authority portal ([maharera.maharashtra.gov.in](https://maharera.maharashtra.gov.in)) prior to executing any binding agreement.
