# QCA — Queiroz Cavalcanti Advocacia

Modern, bilingual (PT/EN) marketing website built with **Next.js 15**, **next-intl**, and **Framer Motion**.

---

## Stack

| Tech | Version | Purpose |
|------|---------|---------|
| Next.js | 15 | App Router, SSG |
| next-intl | 4 | i18n routing (`/pt`, `/en`) |
| Framer Motion | 12 | Animations |
| Tailwind CSS | 4 | Utility styles (minimal use) |
| TypeScript | 5 | Type safety |

---

## Getting Started

```bash
npm install
npm run dev         # → http://localhost:3000 (auto-redirects to /pt)
npm run build       # Production build
npm run start       # Serve production build
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css              ← Design tokens as CSS variables
│   ├── layout.tsx               ← Root shell
│   ├── page.tsx                 ← Redirects / → /pt
│   └── [locale]/
│       ├── layout.tsx           ← NextIntlClientProvider + Google Fonts
│       └── page.tsx             ← Home page (all sections)
├── components/
│   ├── Navbar.tsx               ← Sticky nav, mobile drawer, language toggle
│   ├── Hero.tsx                 ← Full-screen dark hero + award logos
│   ├── About.tsx                ← Two-column about section
│   ├── Areas.tsx                ← Practice areas list (dark bg)
│   ├── News.tsx                 ← News grid with category badges
│   ├── Articles.tsx             ← Author article cards
│   ├── Careers.tsx              ← Team/careers with stats
│   ├── People.tsx               ← Partner photo grid
│   ├── Podcast.tsx              ← Legal Talks episode list
│   └── Footer.tsx               ← Dark multi-column footer
├── i18n/
│   ├── routing.ts               ← Locale config
│   └── request.ts               ← Server-side message loading
└── middleware.ts                 ← next-intl middleware

messages/
├── pt.json                      ← All Portuguese copy
└── en.json                      ← All English copy
```

---

## Adding Real Images

Every image placeholder has an `aria-label` describing the expected image.
Replace placeholder `<div>`s with `<Image>` from `next/image`:

```tsx
import Image from "next/image";

// Replace this:
<div aria-label="[Hero background — 1920×1080]" style={{ ... }} />

// With this:
<Image
  src="/images/hero-bg.jpg"
  alt="QCA escritório"
  fill
  priority
  style={{ objectFit: "cover", objectPosition: "center right" }}
/>
```

**Recommended image files** (drop in `/public/images/`):

| File | Used in | Notes |
|------|---------|-------|
| `hero-bg.jpg` | Hero | Full-bleed, 1920×1080 |
| `about-main.jpg` | About | Portrait orientation, 800×1000 |
| `about-map.jpg` | About | Map/locations, 320×200 |
| `careers-team.jpg` | Careers | Team photo, 400×480 |
| `careers-office.jpg` | Careers | Office photo, 400×480 |
| `news-[1-4].jpg` | News | Per-article thumbnails, 640×360 |
| `people/[name].jpg` | People | Headshots, 300×400 each |

---

## Adding Translations / New Locale

1. Copy `messages/pt.json` → `messages/[locale].json` and translate
2. Add locale to `src/i18n/routing.ts`:
   ```ts
   locales: ["pt", "en", "es"],
   ```
3. The middleware and layout handle the rest automatically.

---

## Design Tokens

All design values are in `globals.css` as CSS variables:

```css
--brand-primary:    #1A1A1A   /* Near-black */
--brand-gold:       #C8A97E   /* Gold accent */
--brand-gold-light: #F5EDD8   /* Warm surface */
--brand-gold-dark:  #8B6914   /* Dark gold for text */
--neutral-50:       #F7F7F5   /* Light section bg */
--neutral-100:      #EEEDE8   /* Alt section bg */
--neutral-600:      #555555   /* Body text */
```

**Fonts loaded via Google Fonts:**
- `Cormorant Garamond` (300, 400, 600 + italic) — headings
- `Montserrat` (300, 400, 500, 600) — body & UI

---

## Deployment

The site uses `generateStaticParams()` to pre-render both `/pt` and `/en` as static HTML at build time — no server required. It can be deployed to:

- **Vercel** — zero config, push and deploy
- **Netlify** — `npm run build`, publish `.next/`
- **Any static host** — `output: "export"` mode (add to `next.config.ts` if needed)
