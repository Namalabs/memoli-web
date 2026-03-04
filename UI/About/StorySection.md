# StorySection — About Page

> **File**: `src/components/sections/about/StorySection.tsx`  
> **Design ref**: Top of `/External/Figma/New Design/desktop - about us (1728 x 1117).png`

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  px-4  py-10  bg-white                  │
│                                         │
│ ┌───────────────┐ ┌───────────────────┐ │
│ │               │ │                   │ │
│ │  ┌─────────┐  │ │ Our Story         │ │
│ │  │         │  │ │ (text-blue-600,   │ │
│ │  │ TEAM    │  │ │  ~20px, bold)     │ │
│ │  │ PHOTO   │  │ │                   │ │
│ │  │         │  │ │ Born at the Apple │ │
│ │  │(rounded)│  │ │ Developer Academy │ │
│ │  │         │  │ │ Bali.             │ │
│ │  └─────────┘  │ │ (12px, medium)    │ │
│ │               │ │                   │ │
│ │               │ │ Memoli addresses  │ │
│ │               │ │ the over-         │ │
│ │               │ │ provisioning...   │ │
│ │               │ │ (11px, gray)      │ │
│ │               │ │                   │ │
│ │               │ │ We unite          │ │
│ │               │ │ fragmented...     │ │
│ │               │ │ (11px, gray)      │ │
│ │               │ │                   │ │
│ └───────────────┘ └───────────────────┘ │
│                                         │
│ ← image (~40%) →  ← text (~55%) →      │
│ Same 2-col, scaled down, gap-4          │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **Same 2-column layout** — NOT stacked
- Team photo left (~40%), text right (~55%)
- Photo: rounded, smaller
- Text: all scales down proportionally
- Gap: `gap-4`

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  px-10  py-16  bg-white                                           │
│                                                                   │
│ ┌────────────────────────┐  ┌──────────────────────────────────┐  │
│ │                        │  │                                  │  │
│ │  ┌──────────────────┐  │  │  Our Story                      │  │
│ │  │                  │  │  │  (text-blue-600, ~28px, bold)    │  │
│ │  │   TEAM PHOTO     │  │  │                                  │  │
│ │  │   (rounded-2xl)  │  │  │  Born at the Apple Developer     │  │
│ │  │                  │  │  │  Academy Bali.                   │  │
│ │  │   ~300×220px     │  │  │  (14px, font-medium)             │  │
│ │  │                  │  │  │                                  │  │
│ │  └──────────────────┘  │  │  Memoli addresses the over-...   │  │
│ │                        │  │  (13px, text-gray-600)           │  │
│ │                        │  │                                  │  │
│ │                        │  │  We unite fragmented tools...     │  │
│ │                        │  │  (13px, text-gray-600)           │  │
│ │                        │  │                                  │  │
│ └────────────────────────┘  └──────────────────────────────────┘  │
│                                                                   │
│  ← image (~45%) →           ← text (~50%) →                     │
│  gap-8                                                            │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  max-w-[1280px] mx-auto  px-16  py-20  bg-white                            │
│                                                                              │
│  ┌────────────────────────────┐     ┌──────────────────────────────────┐    │
│  │                            │     │                                  │    │
│  │  ┌──────────────────────┐  │     │  Our Story                      │    │
│  │  │                      │  │     │  (text-blue-600, ~36px, bold)    │    │
│  │  │                      │  │     │                                  │    │
│  │  │    TEAM PHOTO        │  │     │  Born at the Apple Developer     │    │
│  │  │    (group of ~5      │  │     │  Academy Bali.                   │    │
│  │  │     people)          │  │     │  (text-gray-800, 16px,           │    │
│  │  │                      │  │     │   font-medium — slightly bolder  │    │
│  │  │    rounded-2xl       │  │     │   first paragraph)               │    │
│  │  │    object-cover      │  │     │                                  │    │
│  │  │    ~400×300px        │  │     │  Memoli addresses the over-      │    │
│  │  │                      │  │     │  provisioning trap, where buying │    │
│  │  │                      │  │     │  in excess leads to waste.       │    │
│  │  └──────────────────────┘  │     │  (text-gray-600, 15px, regular)  │    │
│  │                            │     │                                  │    │
│  │                            │     │  We unite fragmented tools to    │    │
│  │                            │     │  solve hidden allergen risks and │    │
│  │                            │     │  parental misalignment,          │    │
│  │                            │     │  transforming household data     │    │
│  │                            │     │  into a shared, mindful habit.   │    │
│  │                            │     │  (text-gray-600, 15px, regular)  │    │
│  │                            │     │                                  │    │
│  └────────────────────────────┘     └──────────────────────────────────┘    │
│                                                                              │
│  ←── image (~45%) ──→               ←── text (~50%) ──→                     │
│  flex items-center gap-12                                                    │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content

```
Title:       "Our Story"

Paragraph 1: "Born at the Apple Developer Academy Bali."
             (slightly bolder / medium weight — acts as a lead-in)

Paragraph 2: "Memoli addresses the over-provisioning trap, where
              buying in excess leads to waste."

Paragraph 3: "We unite fragmented tools to solve hidden allergen risks
              and parental misalignment, transforming household data
              into a shared, mindful habit."
```

---

## 🧩 Component Anatomy

```tsx
<section className="bg-white">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20
                  flex items-center gap-4 md:gap-8 lg:gap-12">

    {/* Left: Team photo */}
    <div className="flex-shrink-0 w-[40%] md:w-[45%]">
      <Image
        src="/images/about-team-photo.png"
        alt="Memoli team at Apple Developer Academy Bali"
        width={480}
        height={340}
        className="rounded-xl md:rounded-2xl object-cover w-full"
      />
    </div>

    {/* Right: Story text */}
    <div className="flex-1">
      <h2 className="text-blue-600 font-bold
                     text-xl md:text-[28px] lg:text-[36px]">
        Our Story
      </h2>

      <p className="mt-3 md:mt-4 lg:mt-6
                    text-gray-800 font-medium leading-relaxed
                    text-xs md:text-sm lg:text-base">
        Born at the Apple Developer Academy Bali.
      </p>

      <p className="mt-2 md:mt-3 lg:mt-4
                    text-gray-600 leading-relaxed
                    text-[11px] md:text-[13px] lg:text-[15px]">
        Memoli addresses the over-provisioning trap, where buying in
        excess leads to waste.
      </p>

      <p className="mt-2 md:mt-3 lg:mt-4
                    text-gray-600 leading-relaxed
                    text-[11px] md:text-[13px] lg:text-[15px]">
        We unite fragmented tools to solve hidden allergen risks and
        parental misalignment, transforming household data into a
        shared, mindful habit.
      </p>
    </div>

  </div>
</section>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding | `px-4 py-10` | `px-10 py-16` | `px-16 py-20` |
| Title | 20px blue bold | 28px | 36px |
| Lead paragraph | 12px gray-800 medium | 14px | 16px |
| Body paragraphs | 11px gray-600 | 13px | 15px |
| Photo width | ~40% | ~45% | ~45% |
| Column gap | `gap-4` | `gap-8` | `gap-12` |
| Layout | 2-col (photo left, text right) | same | same |
