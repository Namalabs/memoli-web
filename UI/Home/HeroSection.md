# HeroSection — Home Page

> **File**: `src/components/sections/home/HeroSection.tsx`  
> **Used on**: Home page (`/`) — first section below header  
> **Design ref**: Top area of all home page mockups in `/External/Figma/New Design/`

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│ px-4  py-10  bg-white                   │
│                                         │
│ ┌──────────────────┐ ┌───────────────┐  │
│ │                  │ │               │  │
│ │ Smart Scanning   │ │  ┌─────────┐  │  │
│ │ (text-blue-600,  │ │  │         │  │  │
│ │  ~20px)          │ │  │ PHONE   │  │  │
│ │                  │ │  │ MOCKUP  │  │  │
│ │ For              │ │  │         │  │  │
│ │ Sustainability   │ │  │ "Scan   │  │  │
│ │ (text-gray-900,  │ │  │  Your   │  │  │
│ │  ~24px, bold)    │ │  │  Item"  │  │  │
│ │                  │ │  │ screen  │  │  │
│ │ Memoli tracks    │ │  │         │  │  │
│ │ shelf-life and   │ │  │(~120px) │  │  │
│ │ verifies...      │ │  │         │  │  │
│ │ (11px, gray-600) │ │  └─────────┘  │  │
│ │                  │ │               │  │
│ │ ┌──────┐┌──────┐│ │               │  │
│ │ │Down- ││Join  ││ │               │  │
│ │ │load  ││Beta  ││ │               │  │
│ │ │Now   ││Tester││ │               │  │
│ │ │(10px)││(10px)││ │               │  │
│ │ └──────┘└──────┘│ │               │  │
│ │                  │ │               │  │
│ └──────────────────┘ └───────────────┘  │
│                                         │
│ ← text (~55%) →      ← image (~45%) →  │
│ Same 2-col layout, scaled down          │
│ flex items-center gap-4                 │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **Same 2-column layout as desktop** — NOT stacked vertically
- Text left (~55%), phone mockup right (~45%)
- All text scales down proportionally
- Buttons shrink but remain side-by-side
- Phone mockup: ~120px wide

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│ px-10  py-16  bg-white                                            │
│                                                                   │
│ ┌──────────────────────────┐  ┌──────────────────────────────┐   │
│ │                          │  │                              │   │
│ │  Smart Scanning          │  │     ┌─────────────────┐     │   │
│ │  (text-blue-600, ~30px)  │  │     │                 │     │   │
│ │                          │  │     │   PHONE MOCKUP  │     │   │
│ │  For Sustainability      │  │     │                 │     │   │
│ │  (text-gray-900, ~36px,  │  │     │   "Scan Your    │     │   │
│ │   bold)                  │  │     │    Item" screen  │     │   │
│ │                          │  │     │                 │     │   │
│ │  Memoli tracks shelf-    │  │     │   (~240px wide) │     │   │
│ │  life and verifies       │  │     │                 │     │   │
│ │  ingredients...          │  │     └─────────────────┘     │   │
│ │  (14px, text-gray-600)   │  │                              │   │
│ │                          │  │                              │   │
│ │  ┌────────────┐ ┌──────────────────┐                       │   │
│ │  │Download Now│ │Join As Beta Tester│                      │   │
│ │  │(filled)    │ │(outline)          │                      │   │
│ │  └────────────┘ └──────────────────┘                       │   │
│ │                          │  │                              │   │
│ └──────────────────────────┘  └──────────────────────────────┘   │
│                                                                   │
│  ← text (~55%) →               ← image (~45%) →                 │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ max-w-[1280px] mx-auto  px-16  py-20  bg-white                             │
│                                                                              │
│ ┌────────────────────────────────┐  ┌──────────────────────────────────┐    │
│ │                                │  │                                  │    │
│ │  Smart Scanning                │  │       ┌───────────────────┐     │    │
│ │  (text-blue-600, ~40px)        │  │       │                   │     │    │
│ │                                │  │       │   PHONE MOCKUP    │     │    │
│ │  For Sustainability            │  │       │   IMAGE           │     │    │
│ │  (text-gray-900, ~48px, bold)  │  │       │                   │     │    │
│ │                                │  │       │   Shows "Scan     │     │    │
│ │  Memoli tracks shelf-life and  │  │       │   Your Item"      │     │    │
│ │  verifies ingredients, serving │  │       │   screen          │     │    │
│ │  as a mindful companion for    │  │       │                   │     │    │
│ │  your family's daily           │  │       │   (~300px wide)   │     │    │
│ │  essentials.                   │  │       │                   │     │    │
│ │  (text-gray-600, 16px)         │  │       └───────────────────┘     │    │
│ │                                │  │                                  │    │
│ │  ┌──────────────┐ ┌────────────────────┐                            │    │
│ │  │ Download Now │ │Join As Beta Tester │                            │    │
│ │  │(bg-blue-600  │ │(border-blue-600    │                            │    │
│ │  │ text-white   │ │ text-blue-600      │                            │    │
│ │  │ rounded-full │ │ rounded-full       │                            │    │
│ │  │  icon       │ │ bg-transparent)    │                            │    │
│ │  │ px-6 py-3)  │ │ px-6 py-3)         │                            │    │
│ │  └──────────────┘ └────────────────────┘                            │    │
│ │                                │  │                                  │    │
│ └────────────────────────────────┘  └──────────────────────────────────┘    │
│                                                                              │
│  ←── text col (~55%) ──→             ←── image col (~45%) ──→               │
│  flex items-center gap-12                                                    │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content (from Figma screenshot)

```
Headline line 1: "Smart Scanning"        (text-blue-600, lighter weight)
Headline line 2: "For Sustainability"    (text-gray-900, bold, larger)

Description:
  "Memoli tracks shelf-life and verifies ingredients, serving as a
   mindful companion for your family's daily essentials."

Button 1: " Download Now"       (filled blue pill,  Apple icon)
Button 2: "Join As Beta Tester"   (outline blue pill, no icon)

Phone mockup: Shows app "Scan Your Item" screen
```

> ⚠️ **Key corrections**:
> - Headline is "Smart Scanning / For Sustainability" — NOT "Capture Every Moment"
> - Two buttons (Download Now + Join As Beta Tester) — NOT a single App Store badge
> - Description mentions shelf-life and ingredients — NOT "memories"

---

## 🧩 Component Anatomy

```tsx
<section className="bg-white">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20
                  flex items-center gap-4 md:gap-8 lg:gap-12">

    {/* Left: Text content */}
    <div className="flex-1">
      <h1>
        <span className="block text-blue-600
                         text-xl md:text-3xl lg:text-[40px]">
          Smart Scanning
        </span>
        <span className="block text-gray-900 font-bold
                         text-2xl md:text-4xl lg:text-[48px]
                         leading-tight">
          For Sustainability
        </span>
      </h1>

      <p className="mt-3 md:mt-4 lg:mt-6
                    text-gray-600
                    text-[11px] md:text-sm lg:text-base
                    leading-relaxed max-w-[500px]">
        Memoli tracks shelf-life and verifies ingredients, serving as a
        mindful companion for your family's daily essentials.
      </p>

      <div className="mt-4 md:mt-6 lg:mt-8 flex gap-2 md:gap-3 lg:gap-4">
        <Link href={APP_STORE_URL}
              className="bg-blue-600 text-white rounded-full
                         text-[10px] px-3 py-1.5
                         md:text-sm md:px-5 md:py-2.5
                         lg:text-[15px] lg:px-6 lg:py-3
                         font-semibold flex items-center gap-1.5">
          <AppleIcon className="w-3 h-3 md:w-4 md:h-4" />
          Download Now
        </Link>
        <Link href={BETA_URL}
              className="border-2 border-blue-600 text-blue-600
                         rounded-full bg-transparent
                         text-[10px] px-3 py-1.5
                         md:text-sm md:px-5 md:py-2.5
                         lg:text-[15px] lg:px-6 lg:py-3
                         font-semibold">
          Join As Beta Tester
        </Link>
      </div>
    </div>

    {/* Right: Phone mockup */}
    <div className="flex-shrink-0 w-[35%] md:w-[40%] lg:w-[45%]
                    flex items-center justify-center">
      <Image
        src="/screenshots/scan-your-item.png"
        alt="Memoli app — Scan Your Item screen"
        width={300}
        height={600}
        className="w-[120px] md:w-[240px] lg:w-[300px] h-auto drop-shadow-xl"
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
| Blue headline | 20px | 30px | 40px |
| Dark headline | 24px bold | 36px bold | 48px bold |
| Description | 11px | 14px | 16px |
| Button text | 10px | 14px | 15px |
| Button padding | `px-3 py-1.5` | `px-5 py-2.5` | `px-6 py-3` |
| Phone mockup width | ~120px | ~240px | ~300px |
| Column gap | `gap-4` | `gap-8` | `gap-12` |
| Layout | 2-col (55/45) | same | same |
