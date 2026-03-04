# VisionSection — About Page

> **File**: `src/components/sections/about/VisionSection.tsx`  
> **Design ref**: Middle of `/External/Figma/New Design/desktop - about us (1728 x 1117).png`
> **Background**: Light gray band (`#F7F8FA`)

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  bg-[#F7F8FA]  px-4  py-8              │
│                                         │
│  ▌ Vision of a Sustainable Future      │
│  ▌ for Nurturing Healthy Families      │
│  ↑ blue left border                    │
│  (text ~14px, bold, gray + blue)       │
│                                         │
│  Guided by Wisdom, We Empower          │
│  Families to Thrive Through:           │
│  (10px, gray-600)                      │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│  │ ┌─────┐ │ │ ┌─────┐ │ │ ┌─────┐ │  │
│  │ │image│ │ │ │image│ │ │ │image│ │  │
│  │ │(gray│ │ │ │     │ │ │ │     │ │  │
│  │ │ rnd)│ │ │ │     │ │ │ │     │ │  │
│  │ └─────┘ │ │ └─────┘ │ │ └─────┘ │  │
│  │         │ │         │ │         │  │
│  │Priorit- │ │Building │ │Cultiva- │  │
│  │izing    │ │household│ │ting eco-│  │
│  │family...│ │resili...│ │conscious│  │
│  │(8px)    │ │(8px)    │ │(8px)    │  │
│  └─────────┘ └─────────┘ └─────────┘  │
│                                         │
│  ← grid-cols-3, gap-2 →               │
│  Same 3-col layout, scaled down        │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **Same 3-column grid** — NOT stacked
- Cards: image on top + text below, same structure
- Image: ~80px × 60px rounded
- Card text: ~8px
- Gap: `gap-2`

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  bg-[#F7F8FA]  px-10  py-14                                      │
│                                                                   │
│  ▌ Vision of a Sustainable Future for                            │
│  ▌ Nurturing Healthy Families                                    │
│  (20px, bold, gray + blue)                                        │
│                                                                   │
│  Guided by Wisdom, We Empower Families to Thrive Through:         │
│  (13px, gray-600)                                                 │
│                                                                   │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐    │
│  │  ┌───────────┐  │ │  ┌───────────┐  │ │  ┌───────────┐  │    │
│  │  │ image     │  │ │  │ image     │  │ │  │ image     │  │    │
│  │  │ (160×120) │  │ │  │ (160×120) │  │ │  │ (160×120) │  │    │
│  │  └───────────┘  │ │  └───────────┘  │ │  └───────────┘  │    │
│  │                 │ │                 │ │                 │    │
│  │ Prioritizing    │ │ Building        │ │ Cultivating     │    │
│  │ family well-    │ │ household       │ │ eco-conscious   │    │
│  │ being...        │ │ resilience...   │ │ habits...       │    │
│  │ (12px)          │ │ (12px)          │ │ (12px)          │    │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘    │
│                                                                   │
│  ← grid-cols-3, gap-6 →                                         │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  bg-[#F7F8FA]  py-20                                                         │
│  max-w-[1280px] mx-auto  px-16                                              │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐    │
│  │                                                                      │    │
│  │  ▌ Vision of a Sustainable Future for  Nurturing Healthy Families   │    │
│  │  ↑                                     ↑                            │    │
│  │  blue left border                      this portion is blue text    │    │
│  │  (4px solid blue-600)                  (text-blue-600)              │    │
│  │                                                                      │    │
│  │  (full text: ~24px, font-bold)                                       │    │
│  │  (text-gray-900 for "Vision of..." + text-blue-600 for "Nurturing") │    │
│  │                                                                      │    │
│  │  Guided by Wisdom, We Empower Families to Thrive Through:            │    │
│  │  (text-gray-600, 15px, regular)                                      │    │
│  │                                                                      │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────┐   │
│  │  ┌────────────────┐  │  │  ┌────────────────┐  │  │  ┌────────────┐ │   │
│  │  │  Placeholder   │  │  │  │  Placeholder   │  │  │  │ Placeholder│ │   │
│  │  │  Image         │  │  │  │  Image         │  │  │  │ Image     │ │   │
│  │  │  (~240×160px)  │  │  │  │  (~240×160px)  │  │  │  │ (~240×160)│ │   │
│  │  └────────────────┘  │  │  └────────────────┘  │  │  └────────────┘ │   │
│  │                      │  │                      │  │                  │   │
│  │  Prioritizing family │  │  Building household  │  │  Cultivating    │   │
│  │  well-being through  │  │  resilience through  │  │  eco-conscious  │   │
│  │  non-toxic living &  │  │  waste reduction &   │  │  habits to     │   │
│  │  proactive safety    │  │  resource            │  │  protect our   │   │
│  │                      │  │  optimization        │  │  planet for    │   │
│  │  (text-center,       │  │                      │  │  future        │   │
│  │   text-gray-700,     │  │  (text-center)       │  │  generations   │   │
│  │   14px)              │  │                      │  │  (text-center) │   │
│  └──────────────────────┘  └──────────────────────┘  └──────────────────┘   │
│                                                                              │
│  ← grid-cols-3, gap-8 →                                                     │
│  ← cards: no border/shadow, just image + text →                             │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content

```
Heading (with blue left border accent):
  "Vision of a Sustainable Future for "    (text-gray-900, bold)
  "Nurturing Healthy Families"             (text-blue-600, bold)

Subtitle:
  "Guided by Wisdom, We Empower Families to Thrive Through:"

Card 1: "Prioritizing family well-being through non-toxic living & proactive safety"
Card 2: "Building household resilience through waste reduction & resource optimization"
Card 3: "Cultivating eco-conscious habits to protect our planet for future generations"
```

---

## 🧩 Component Anatomy

```tsx
<section className="bg-[#F7F8FA]">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-8 md:px-10 md:py-14 lg:px-16 lg:py-20">

    {/* Heading with blue left border */}
    <div className="border-l-4 border-blue-600 pl-3 md:pl-4">
      <h2 className="font-bold text-sm md:text-xl lg:text-[24px]">
        <span className="text-gray-900">Vision of a Sustainable Future for </span>
        <span className="text-blue-600">Nurturing Healthy Families</span>
      </h2>
    </div>

    <p className="mt-2 md:mt-3 text-gray-600
                  text-[10px] md:text-[13px] lg:text-[15px]">
      Guided by Wisdom, We Empower Families to Thrive Through:
    </p>

    {/* 3-column cards — same structure at all breakpoints */}
    <div className="mt-6 md:mt-8 lg:mt-10
                    grid grid-cols-3 gap-2 md:gap-6 lg:gap-8">

      {visionCards.map((card) => (
        <div key={card.text} className="text-center">
          <div className="w-full aspect-[3/2] bg-gray-200
                          rounded-lg md:rounded-xl overflow-hidden">
            <Image src={card.image} alt="" className="object-cover w-full h-full" />
          </div>
          <p className="mt-2 md:mt-3 text-gray-700 leading-relaxed
                        text-[8px] md:text-xs lg:text-sm">
            {card.text}
          </p>
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
| Background | `#F7F8FA` | same | same |
| Section padding | `px-4 py-8` | `px-10 py-14` | `px-16 py-20` |
| Heading | 14px bold | 20px | 24px |
| Subtitle | 10px gray | 13px | 15px |
| Card grid | `grid-cols-3 gap-2` | `gap-6` | `gap-8` |
| Card image | ~80×60px rounded | ~160×120px | ~240×160px |
| Card text | 8px | 12px | 14px |
| Layout | 3-col grid | same | same |
