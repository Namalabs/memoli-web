# UI Component Blueprints — Memoli Web

> **PURPOSE**: This folder contains pixel-accurate ASCII art blueprints for every
> component and layout in the Memoli website. AI agents MUST reference these files
> when building or modifying components to ensure the implementation matches the
> Figma design at `/External/Figma/New Design/`.

---

## 📐 Design Reference

| Breakpoint | Width | Tailwind Prefix | Figma File |
|------------|-------|-----------------|------------|
| **Mobile** | 393px | _(default)_ | `mobile-home.png` / `mobile- about us.png` |
| **Tablet** | 1366px | `md:` (≥1024px) | `tablet - home.png` / `tablet - about us.png` |
| **Desktop** | 1728px | `lg:` (≥1440px) | `desktop - home.png` / `desktop - about us.png` |

---

## 🚨 CRITICAL: Responsive Strategy

> **The Figma mobile design (393px) does NOT stack columns into single-column layouts.**
> All multi-column structures (hero, features, testimonials, team grid, footer) maintain
> the same column layout on mobile — only scaled down proportionally.

### What Changes Across Breakpoints

| Property | Mobile (393px) | Tablet (1366px) | Desktop (1728px) |
|----------|---------------|-----------------|------------------|
| **Heading sizes** | ~20–28px | ~28–36px | ~32–48px |
| **Body text** | 12–13px | 14–15px | 15–16px |
| **Section padding** | `px-4 py-10` | `px-10 py-16` | `px-16 py-20` |
| **Container** | Full width | `max-w-[1100px]` | `max-w-[1280px]` |
| **Image sizes** | ~40–50% smaller | ~20% smaller | Full designed size |
| **Columns** | **Same structure** | Same structure | Same structure |
| **Navigation** | All links visible | All links visible | All links visible |
| **Touch targets** | Min 44×44px | Min 44×44px | N/A |

### What Does NOT Change
- Column count (no stacking to single-column)
- Section order
- Content/text (same copy at all sizes)
- Color scheme
- Component structure

> **Note for Tablet**: Tablet screenshots have not yet been analyzed in detail.
> The tablet breakpoint values shown in individual blueprints are interpolations
> between mobile and desktop. When tablet screenshots are analyzed, these will be updated.

---

## 📂 Folder Structure

```
UI/
├── README.md                    ← You are here
│
├── Shared/                      ← Components used on BOTH pages
│   ├── Header.md                   Floating pill navbar (sticky top-4)
│   └── Footer.md                   Dark 3-column footer (#0F172A)
│
├── Home/                        ← Home Page (/)
│   ├── Layout.md                   Full-page section assembly order
│   ├── HeroSection.md              Hero — 2-col: headline+CTAs left, phone right
│   ├── TaglineSection.md           Italic quote + supporting paragraph
│   ├── FeaturesSection.md          "Mindful Assistant" — 4 alternating blocks
│   ├── CollaboratorsSection.md     Partner logos row (bg gray)
│   └── TestimonialsSection.md      Beta tester testimonials — 3 cards
│
└── About/                       ← About Page (/about)
    ├── Layout.md                   Full-page section assembly order
    ├── StorySection.md             2-col: team photo + "Our Story" text
    ├── VisionSection.md            Blue-border heading + 3 value cards (bg gray)
    ├── ScienceSection.md           2-col: science text + phone mockup
    ├── TeamSection.md              "The People Behind Memoli" — 3×2 grid
    └── DownloadCTA.md              CTA paragraph + Download Now button
```

---

## 🎯 How to Use These Blueprints

1. **Before coding any component**, open the matching `.md` file in this folder
2. **Each file has 3 breakpoint diagrams**: Mobile (default) → Tablet (md:) → Desktop (lg:)
3. **Read the Exact Text Content** — all copy is transcribed from the Figma screenshots
4. **Use the Component Anatomy** code snippets as a starting template
5. **Cross-reference** with the actual Figma PNGs at `/External/Figma/New Design/`
6. **Check Design Tokens** tables for exact colors, sizes, and spacing values

---

## 📏 Global Rules

- **All components** use `"use client"` directive (CSR-only)
- **Mobile-first** responsive approach (default → `md:` → `lg:`)
- **Touch targets**: Minimum 44×44px on mobile
- **Container max-width**: `max-w-[1280px] mx-auto px-16` on desktop
- **Section vertical spacing**: `py-20` on desktop, `py-10` on mobile
- **Font**: Inter (or match Figma)
- **Primary blue**: `blue-600` (used for headings, buttons, accents)
- **Text colors**: `gray-900` (headings), `gray-600` (body), `gray-500` (secondary)
- **Dark background**: `#0F172A` (footer only)
- **Light gray background**: `#F7F8FA` (alternating sections)

---

## 🗺 Page Map

### Pages (2 total)
| Route | Page | Component File |
|-------|------|----------------|
| `/` | Home | `src/app/page.tsx` |
| `/about` | About | `src/app/about/page.tsx` |

### Shared Components
| Component | File Path |
|-----------|-----------|
| Root Layout | `src/app/layout.tsx` |
| Header | `src/components/layout/Header.tsx` |
| Footer | `src/components/layout/Footer.tsx` |

### Home Page Sections (in order)
| Section | Blueprint | Component File |
|---------|-----------|----------------|
| Hero | `UI/Home/HeroSection.md` | `src/components/sections/home/HeroSection.tsx` |
| Tagline | `UI/Home/TaglineSection.md` | `src/components/sections/home/TaglineSection.tsx` |
| Features | `UI/Home/FeaturesSection.md` | `src/components/sections/home/FeaturesSection.tsx` |
| Collaborators | `UI/Home/CollaboratorsSection.md` | `src/components/sections/home/CollaboratorsSection.tsx` |
| Testimonials | `UI/Home/TestimonialsSection.md` | `src/components/sections/home/TestimonialsSection.tsx` |

### About Page Sections (in order)
| Section | Blueprint | Component File |
|---------|-----------|----------------|
| Story | `UI/About/StorySection.md` | `src/components/sections/about/StorySection.tsx` |
| Vision | `UI/About/VisionSection.md` | `src/components/sections/about/VisionSection.tsx` |
| Science | `UI/About/ScienceSection.md` | `src/components/sections/about/ScienceSection.tsx` |
| Team | `UI/About/TeamSection.md` | `src/components/sections/about/TeamSection.tsx` |
| Download CTA | `UI/About/DownloadCTA.md` | `src/components/sections/about/DownloadCTA.tsx` |

---

**Version**: 3.0  
**Coverage**: Desktop ✅ Mobile ✅ Tablet ⚠️ (interpolated, pending screenshot analysis)
