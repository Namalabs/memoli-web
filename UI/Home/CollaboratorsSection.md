# CollaboratorsSection — Home Page

> **File**: `src/components/sections/home/CollaboratorsSection.tsx`  
> **Design ref**: Below features in `/External/Figma/New Design/desktop - home (1728 x 1117).png`

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  bg-[#F7F8FA]  px-4  py-8              │
│                                         │
│  Our Collaborators                      │
│  (text-blue-600, ~16px, bold)           │
│                                         │
│  We are proud to collaborate...         │
│  (text-gray-600, 10px)                  │
│                                         │
│  ○  ○  ○  ○  ○  ◉                     │
│  (logos ~40px, gap-3)                   │
│  (same horizontal row, scaled down)     │
│  ("Join" circle is blue)                │
│                                         │
│  Labels below each: ~8px                │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **Same horizontal row** — NOT wrapped/stacked
- Logos: ~40px circles (vs 80px on desktop)
- Labels: ~8px text below each logo
- Gap between logos: `gap-3`
- Same structure, just smaller

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  bg-[#F7F8FA]  px-10  py-12                                      │
│                                                                   │
│  Our Collaborators                                                │
│  (text-blue-600, ~22px, bold)                                     │
│                                                                   │
│  We are proud to collaborate with entity of innovation...         │
│  (text-gray-600, 13px)                                            │
│                                                                   │
│  ○    ○    ○    ○    ○    ◉                                      │
│  (logos ~60px, gap-6, same row)                                   │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  bg-[#F7F8FA]  py-16                                                         │
│  max-w-[1280px] mx-auto  px-16                                              │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐    │
│  │                                                                      │    │
│  │  Our Collaborators                                                   │    │
│  │  (text-blue-600, ~28px, font-bold)                                   │    │
│  │                                                                      │    │
│  │  We are proud to collaborate with entity of innovation that share    │    │
│  │  our vision for a safer, waste-free lifestyle.                       │    │
│  │  (text-gray-600, 15px, regular)                                      │    │
│  │                                                                      │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ╭────────╮   │
│  │ Apple  │  │ Logo   │  │ Logo   │  │ WE WAW │  │ Lumina │  │ Join   │   │
│  │ Dev    │  │  (2)   │  │  (3)   │  │        │  │Consult-│  │  Our   │   │
│  │Academy │  │        │  │        │  │        │  │  ing   │  │Journey │   │
│  │(~80px) │  │(~80px) │  │(~80px) │  │(~80px) │  │(~80px) │  │(blue   │   │
│  └────────┘  └────────┘  └────────┘  └────────┘  └────────┘  │circle) │   │
│                                                                ╰────────╯   │
│  ← flex row, items-center, justify-center, gap-8 →                          │
│  ← small label text below each →                                            │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content

```
Heading:   "Our Collaborators"
Subtitle:  "We are proud to collaborate with entity of innovation that share
            our vision for a safer, waste-free lifestyle."

Logo labels (below each):
  1. "Developer Academy"  (Apple Developer Academy)
  2. (logo 2 — name TBD)
  3. (logo 3 — name TBD)
  4. "WE WAW"
  5. "Lumina Consulting"
  6. "Join Our Journey >"  (blue circle CTA, not a logo)
```

---

## 🧩 Component Anatomy

```tsx
<section className="bg-[#F7F8FA]">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">

    <h2 className="text-blue-600 font-bold
                   text-base md:text-[22px] lg:text-[28px]">
      Our Collaborators
    </h2>
    <p className="mt-2 text-gray-600 leading-relaxed max-w-[600px]
                  text-[10px] md:text-[13px] lg:text-[15px]">
      We are proud to collaborate with entity of innovation that share
      our vision for a safer, waste-free lifestyle.
    </p>

    <div className="mt-6 md:mt-8 lg:mt-10
                    flex items-center justify-center
                    gap-3 md:gap-6 lg:gap-8">

      {collaborators.map((c) => (
        <div key={c.name} className="flex flex-col items-center gap-1 md:gap-2">
          <div className="w-10 h-10 md:w-[60px] md:h-[60px] lg:w-20 lg:h-20
                          rounded-full bg-white shadow-sm border border-gray-100
                          flex items-center justify-center overflow-hidden">
            <Image src={c.logo} alt={c.name} />
          </div>
          <span className="text-[8px] md:text-[10px] lg:text-xs
                           text-gray-500 text-center">
            {c.label}
          </span>
        </div>
      ))}

      {/* Join CTA circle */}
      <Link href={BETA_URL}>
        <div className="w-10 h-10 md:w-[60px] md:h-[60px] lg:w-20 lg:h-20
                        rounded-full bg-blue-600
                        flex items-center justify-center text-white">
          <span className="text-[7px] md:text-[9px] lg:text-xs
                           font-semibold text-center leading-tight">
            Join Our<br />Journey &gt;
          </span>
        </div>
      </Link>

    </div>
  </div>
</section>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Background | `#F7F8FA` | same | same |
| Section padding | `px-4 py-8` | `px-10 py-12` | `px-16 py-16` |
| Heading | 16px blue bold | 22px | 28px |
| Subtitle | 10px gray | 13px | 15px |
| Logo circle | 40px | 60px | 80px |
| Logo gap | `gap-3` | `gap-6` | `gap-8` |
| Label text | 8px | 10px | 12px |
| Layout | Horizontal row | same | same |
