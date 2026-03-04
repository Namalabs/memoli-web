# FeaturesSection — Home Page

> **File**: `src/components/sections/home/FeaturesSection.tsx`  
> **Design ref**: Middle of `/External/Figma/New Design/desktop - home (1728 x 1117).png`
> **Pattern**: Section heading + 4 alternating text/image blocks

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  px-4  py-10  bg-white                  │
│                                         │
│     Mindful Assistant for Modern Living │
│     (text-center, ~18px, bold)          │
│                                         │
│  ┌──────────────┐ ┌─────────────────┐   │
│  │Smart Scan,   │ │  ┌───────────┐  │   │
│  │Zero Effort   │ │  │Screenshot │  │   │
│  │(blue, 14px,  │ │  │ (gray     │  │   │
│  │ bold)        │ │  │ rounded)  │  │   │
│  │              │ │  └───────────┘  │   │
│  │Skip manual   │ │                 │   │
│  │typing; use...│ │                 │   │
│  │(10px, gray)  │ │                 │   │
│  └──────────────┘ └─────────────────┘   │
│                                         │
│  ┌─────────────────┐ ┌──────────────┐   │
│  │  ┌───────────┐  │ │Proactive     │   │
│  │  │Screenshot │  │ │Expiry Tracker│   │
│  │  └───────────┘  │ │(blue, bold)  │   │
│  │                 │ │Prevent...    │   │
│  └─────────────────┘ └──────────────┘   │
│                                         │
│  (same alternating pattern for 3 & 4)   │
│  Same 2-col layout, just scaled down    │
│  gap-4 between columns                  │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **Same 2-column alternating layout** — NOT stacked
- Heading: ~18px centered
- Feature titles: ~14px blue bold
- Feature descriptions: ~10px gray
- Screenshot placeholders: ~100px wide
- Gap between columns: `gap-4`
- Space between feature blocks: `space-y-10`

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  px-10  py-16  bg-white                                           │
│                                                                   │
│              Mindful Assistant for Modern Living                  │
│              (text-center, ~26px, bold)                           │
│                                                                   │
│  ┌──────────────────────┐  ┌──────────────────────────────┐      │
│  │ Smart Scan,          │  │     ┌──────────────────┐    │      │
│  │ Zero Effort          │  │     │   Screenshot     │    │      │
│  │ (blue, 18px, bold)   │  │     │   (~200px wide)  │    │      │
│  │                      │  │     └──────────────────┘    │      │
│  │ Skip manual typing;  │  │                              │      │
│  │ use on-device...     │  │                              │      │
│  │ (13px, gray)         │  │                              │      │
│  └──────────────────────┘  └──────────────────────────────┘      │
│                                                                   │
│  (alternating blocks, gap-10, space-y-16)                        │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  max-w-[1280px] mx-auto  px-16  py-20  bg-white                            │
│                                                                              │
│                    Mindful Assistant for Modern Living                       │
│                    (text-center, text-gray-900, ~32px, bold)                │
│                                                                              │
│  ┌──────────────────────────┐     ┌──────────────────────────────────┐      │
│  │                          │     │                                  │      │
│  │  Smart Scan, Zero Effort │     │     ┌──────────────────────┐    │      │
│  │  (text-blue-600, ~22px,  │     │     │                      │    │      │
│  │   font-bold)             │     │     │   App Screenshot     │    │      │
│  │                          │     │     │   (gray rounded-2xl  │    │      │
│  │  Skip manual typing;     │     │     │    placeholder)      │    │      │
│  │  use on-device vision    │     │     │                      │    │      │
│  │  to digitize your        │     │     │   ~300px × 360px     │    │      │
│  │  household inventory     │     │     │                      │    │      │
│  │  instantly by taking a   │     │     └──────────────────────┘    │      │
│  │  single, quick product   │     │                                  │      │
│  │  label scan.             │     │                                  │      │
│  │  (text-gray-600, 15px,   │     │                                  │      │
│  │   leading-relaxed)       │     │                                  │      │
│  │                          │     │                                  │      │
│  └──────────────────────────┘     └──────────────────────────────────┘      │
│                                                                              │
│  ←── text (~40%) ──→              ←── image (~50%) ──→                      │
│  vertically centered              image centered in col                      │
│  gap-16 between columns                                                      │
│                                                                              │
│  (Block 2: REVERSED — image left, text right)                                │
│  (Block 3: text left, image right)                                           │
│  (Block 4: REVERSED — image left, text right)                                │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content — All 4 Features

```
Feature 1:
  Title: "Smart Scan, Zero Effort"
  Desc:  "Skip manual typing; use on-device vision to digitize your household
          inventory instantly by taking a single, quick product label scan."
  Layout: text-left, image-right

Feature 2:
  Title: "Proactive Expiry Tracker"
  Desc:  "Prevent forgotten, expired products with automated alerts sent
          before "use-by" dates to keep families healthy while saving
          budgets and the planet."
  Layout: image-left, text-right

Feature 3:
  Title: "Ingredient Safety Guard"
  Desc:  "Gain instant label insights as our checker verifies ingredients
          against safety standards, helping you choose "healthier" household
          items with confidence."
  Layout: text-left, image-right

Feature 4:
  Title: "Family Synchronization"
  Desc:  "Stay perfectly aligned with a shared shelves view that syncs
          inventory with your family member so everyone knows what is
          in stock."
  Layout: image-left, text-right
```

---

## 🧩 Component Anatomy

```tsx
const features = [
  { title: "Smart Scan, Zero Effort",     desc: "...", image: "/screenshots/...", reversed: false },
  { title: "Proactive Expiry Tracker",    desc: "...", image: "/screenshots/...", reversed: true  },
  { title: "Ingredient Safety Guard",     desc: "...", image: "/screenshots/...", reversed: false },
  { title: "Family Synchronization",      desc: "...", image: "/screenshots/...", reversed: true  },
];

<section className="bg-white">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20">

    {/* Section heading */}
    <h2 className="text-center text-gray-900 font-bold
                   text-lg md:text-[26px] lg:text-[32px]
                   mb-8 md:mb-12 lg:mb-16">
      Mindful Assistant for Modern Living
    </h2>

    {/* Feature blocks */}
    <div className="space-y-10 md:space-y-16 lg:space-y-24">
      {features.map((f, i) => (
        <div key={i}
             className={`flex items-center
                         gap-4 md:gap-10 lg:gap-16
                         ${f.reversed ? 'flex-row-reverse' : ''}`}>

          {/* Text column */}
          <div className="flex-1">
            <h3 className="text-blue-600 font-bold
                           text-sm md:text-lg lg:text-[22px]
                           mb-2 md:mb-3 lg:mb-4">
              {f.title}
            </h3>
            <p className="text-gray-600 leading-relaxed
                          text-[10px] md:text-[13px] lg:text-[15px]">
              {f.desc}
            </p>
          </div>

          {/* Image column */}
          <div className="flex-1 flex justify-center">
            <div className="w-[100px] h-[120px]
                            md:w-[200px] md:h-[240px]
                            lg:w-[300px] lg:h-[360px]
                            bg-gray-200 rounded-xl md:rounded-2xl" />
            {/* Replace with: <Image src={f.image} ... /> */}
          </div>

        </div>
      ))}
    </div>

  </div>
</section>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding | `px-4 py-10` | `px-10 py-16` | `px-16 py-20` |
| Section heading | 18px bold | 26px bold | 32px bold |
| Feature title | 14px blue bold | 18px | 22px |
| Feature desc | 10px gray | 13px | 15px |
| Screenshot size | 100×120px | 200×240px | 300×360px |
| Column gap | `gap-4` | `gap-10` | `gap-16` |
| Block spacing | `space-y-10` | `space-y-16` | `space-y-24` |
| Layout | 2-col alternating | same | same |
