# ScienceSection — About Page

> **File**: `src/components/sections/about/ScienceSection.tsx`  
> **Design ref**: `/External/Figma/New Design/desktop - about us (1728 x 1117).png`
> **Background**: White (`#FFFFFF`)

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  px-4  py-10  bg-white                  │
│                                         │
│ ┌──────────────────┐ ┌───────────────┐  │
│ │                  │ │               │  │
│ │ The Science      │ │  ┌─────────┐  │  │
│ │ Behind The Scores│ │  │         │  │  │
│ │ (blue, ~16px,    │ │  │ PHONE   │  │  │
│ │  bold)           │ │  │ MOCKUP  │  │  │
│ │                  │ │  │         │  │  │
│ │ Our methodology  │ │  │"Sodium  │  │  │
│ │ transforms       │ │  │ Laureth │  │  │
│ │ complex chemical │ │  │ Sulfate"│  │  │
│ │ data into a      │ │  │ screen  │  │  │
│ │ wisdom-driven    │ │  │         │  │  │
│ │ safety net...    │ │  │(~100px) │  │  │
│ │ (10px, gray)     │ │  │         │  │  │
│ │                  │ │  └─────────┘  │  │
│ │ By merging       │ │               │  │
│ │ scientific       │ │               │  │
│ │ rigor...         │ │               │  │
│ │ (10px, gray)     │ │               │  │
│ │                  │ │               │  │
│ └──────────────────┘ └───────────────┘  │
│                                         │
│ ← text (~55%) →      ← phone (~45%) →  │
│ Same 2-col, gap-4                       │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **Same 2-column layout** — NOT stacked
- Text left (~55%), phone mockup right (~45%)
- All text scales down proportionally
- Phone: ~100px wide
- Gap: `gap-4`

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  px-10  py-16  bg-white                                           │
│                                                                   │
│ ┌──────────────────────────┐  ┌──────────────────────────────┐   │
│ │                          │  │                              │   │
│ │ The Science Behind       │  │     ┌─────────────────┐     │   │
│ │ The Scores               │  │     │                 │     │   │
│ │ (blue, ~22px, bold)      │  │     │   PHONE MOCKUP  │     │   │
│ │                          │  │     │                 │     │   │
│ │ Our methodology          │  │     │   "Sodium       │     │   │
│ │ transforms complex...    │  │     │    Laureth      │     │   │
│ │ (13px, gray)             │  │     │    Sulfate"     │     │   │
│ │                          │  │     │                 │     │   │
│ │ By merging scientific... │  │     │   (~200px wide) │     │   │
│ │ (13px, gray)             │  │     │                 │     │   │
│ │                          │  │     └─────────────────┘     │   │
│ │                          │  │                              │   │
│ └──────────────────────────┘  └──────────────────────────────┘   │
│                                                                   │
│  ← text (~50%) →               ← phone (~50%) →                 │
│  gap-8                                                            │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  bg-white  py-20                                                             │
│  max-w-[1280px] mx-auto  px-16                                              │
│                                                                              │
│  ┌───────────────────────────────┐    ┌──────────────────────────────────┐   │
│  │                               │    │                                  │   │
│  │  The Science Behind           │    │  ┌──────────────────────────┐   │   │
│  │  The Scores                   │    │  │                          │   │   │
│  │  (text-blue-600, ~28px bold)  │    │  │   Phone Mockup           │   │   │
│  │                               │    │  │   showing:                │   │   │
│  │  Our methodology transforms   │    │  │                          │   │   │
│  │  complex chemical data into   │    │  │   "Sodium Laureth        │   │   │
│  │  a wisdom-driven safety net   │    │  │    Sulfate"              │   │   │
│  │  for your home.               │    │  │                          │   │   │
│  │                               │    │  │   Ingredient detail      │   │   │
│  │  By merging scientific rigor  │    │  │   screen with safety     │   │   │
│  │  with parental intuition, we  │    │  │   score, hazard level,   │   │   │
│  │  cross-reference every score  │    │  │   and info cards         │   │   │
│  │  against BPOM and             │    │  │                          │   │   │
│  │  international standards to   │    │  │   At bottom of phone:    │   │   │
│  │  unmask hidden allergens and  │    │  │   "References:           │   │   │
│  │  sensitive ingredients.       │    │  │    Pubmed,               │   │   │
│  │                               │    │  │    Google Scholar"        │   │   │
│  │  (text-gray-600, 15px,        │    │  │                          │   │   │
│  │   leading-relaxed)            │    │  │   (~280px wide,          │   │   │
│  │                               │    │  │    drop-shadow-xl)        │   │   │
│  │                               │    │  │                          │   │   │
│  └───────────────────────────────┘    └──────────────────────────────────┘   │
│                                                                              │
│  ← flex row, items-center, gap-12 →                                          │
│  ← text side: flex-1 (~50%) →                                                │
│  ← phone side: flex-1 (~50%), centered →                                     │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content (from Figma screenshot)

```
Title:
  "The Science Behind The Scores"

Paragraph 1:
  "Our methodology transforms complex chemical data into a wisdom-driven
   safety net for your home."

Paragraph 2:
  "By merging scientific rigor with parental intuition, we cross-reference
   every score against BPOM and international standards to unmask hidden
   allergens and sensitive ingredients."

Phone screen reference text:
  "References: Pubmed, Google Scholar"
```

---

## 🧩 Component Anatomy

```tsx
<section className="bg-white">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20
                  flex items-center gap-4 md:gap-8 lg:gap-12">

    {/* Text side */}
    <div className="flex-1">
      <h2 className="text-blue-600 font-bold leading-tight
                     text-base md:text-[22px] lg:text-[28px]">
        The Science Behind The Scores
      </h2>
      <p className="mt-3 md:mt-4 lg:mt-6
                    text-gray-600 leading-relaxed
                    text-[10px] md:text-[13px] lg:text-[15px]">
        Our methodology transforms complex chemical data into a wisdom-driven
        safety net for your home.
      </p>
      <p className="mt-2 md:mt-3 lg:mt-4
                    text-gray-600 leading-relaxed
                    text-[10px] md:text-[13px] lg:text-[15px]">
        By merging scientific rigor with parental intuition, we cross-reference
        every score against BPOM and international standards to unmask hidden
        allergens and sensitive ingredients.
      </p>
    </div>

    {/* Phone mockup */}
    <div className="flex-shrink-0 w-[35%] md:w-[40%] lg:w-[45%]
                    flex items-center justify-center">
      <Image
        src="/screenshots/ingredient-detail.png"
        alt="Sodium Laureth Sulfate — ingredient detail screen"
        width={280}
        height={500}
        className="w-[100px] md:w-[200px] lg:w-[280px] h-auto drop-shadow-xl"
      />
    </div>

  </div>
</section>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding | `px-4 py-10` | `px-10 py-16` | `px-16 py-20` |
| Title | 16px blue bold | 22px | 28px |
| Body text | 10px gray-600 | 13px | 15px |
| Phone width | ~100px | ~200px | ~280px |
| Column gap | `gap-4` | `gap-8` | `gap-12` |
| Layout | 2-col (text left, phone right) | same | same |
