# TestimonialsSection — Home Page

> **File**: `src/components/sections/home/TestimonialsSection.tsx`  
> **Design ref**: Bottom of `/External/Figma/New Design/desktop - home (1728 x 1117).png`
> **Pattern**: Centered heading + 3 testimonial cards + CTAs

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  bg-white  px-4  py-10                  │
│                                         │
│     Voices from Our Community           │
│     (text-blue-600, ~16px, bold,        │
│      text-center)                       │
│                                         │
│     What Our Beta Testers Are Saying    │
│     (text-gray-500, 10px, text-center)  │
│                                         │
│  ┌──────────┐┌────────────┐┌──────────┐ │
│  │          ││            ││          │ │
│  │ ┌────┐  ││  ┌──────┐  ││ ┌────┐   │ │
│  │ │foto│  ││  │ foto │  ││ │foto│   │ │
│  │ │40px│  ││  │ 40px │  ││ │40px│   │ │
│  │ └────┘  ││  └──────┘  ││ └────┘   │ │
│  │          ││            ││          │ │
│  │ Rana S.  ││  Putri W.  ││ Gabriela │ │
│  │ Working  ││  Mother    ││ College  │ │
│  │ Mom      ││  of 2      ││ Girl     │ │
│  │          ││            ││          │ │
│  │ "Being   ││  "Finally  ││ "The     │ │
│  │ able to  ││  an app    ││ scanner  │ │
│  │ sync the ││  that      ││ is a     │ │
│  │ inventory││  doesn't   ││ game-    │ │
│  │ with my  ││  just tell ││ changer  │ │
│  │ husband  ││  me..."    ││ for my   │ │
│  │ means    ││            ││ skincare │ │
│  │ we've    ││            ││ routine."│ │
│  │ stopped  ││            ││          │ │
│  │ buying   ││            ││          │ │
│  │ dupli-   ││            ││          │ │
│  │ cates..."││            ││          │ │
│  │          ││            ││          │ │
│  └──────────┘└────────────┘└──────────┘ │
│                                         │
│  ← ALL 3 cards show quotes on mobile → │
│  ← All cards are EQUAL size (no        │
│    featured center card) →              │
│  ← flex row, gap-2, equal widths →     │
│                                         │
│  ┌──────────┐ ┌───────────────────┐     │
│  │Download  │ │Join As Beta Tester│     │
│  │Now (10px)│ │(10px, outline)    │     │
│  └──────────┘ └───────────────────┘     │
│  (centered buttons, gap-2)              │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **All 3 cards are EQUAL size** (unlike desktop where center is featured)
- **All 3 cards show quotes** (on desktop, only center card shows a quote)
- Cards: same-width columns, `flex-1`
- Photo: ~40px circle
- Name/role: ~10px
- Quote text: ~9px italic
- Still in a horizontal row — NOT stacked

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  bg-white  px-10  py-16                                           │
│                                                                   │
│           Voices from Our Community                               │
│           (text-blue-600, ~22px, bold, text-center)               │
│                                                                   │
│           What Our Beta Testers Are Saying                        │
│           (text-gray-500, 13px, text-center)                      │
│                                                                   │
│  ┌────────────────┐┌──────────────────┐┌────────────────┐        │
│  │                ││                  ││                │        │
│  │   ┌──────┐     ││    ┌──────┐      ││   ┌──────┐    │        │
│  │   │ foto │     ││    │ foto │      ││   │ foto │    │        │
│  │   └──────┘     ││    └──────┘      ││   └──────┘    │        │
│  │   Rana S.      ││    Putri W.      ││   Gabriela    │        │
│  │   Working Mom  ││    Mother of 2   ││   College Girl│        │
│  │                ││                  ││               │        │
│  │   "Being able  ││    "Finally..."  ││   "The scanner│        │
│  │   to sync..."  ││                  ││   is a game..." │        │
│  │                ││                  ││               │        │
│  └────────────────┘└──────────────────┘└────────────────┘        │
│                                                                   │
│  ← Equal-sized cards, all with quotes, gap-4 →                   │
│                                                                   │
│     ┌────────────┐  ┌──────────────────────┐                     │
│     │Download Now│  │Join As Beta Tester   │                     │
│     └────────────┘  └──────────────────────┘                     │
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
│                    Voices from Our Community                                 │
│                    (text-blue-600, ~28px, bold, text-center)                 │
│                                                                              │
│                    What Our Beta Testers Are Saying                          │
│                    (text-gray-500, 15px, regular, text-center)               │
│                                                                              │
│  ┌──────────────┐  ┌──────────────────────────────┐  ┌──────────────┐       │
│  │              │  │                              │  │              │       │
│  │   ┌──────┐   │  │         ┌──────────┐         │  │   ┌──────┐   │       │
│  │   │ foto │   │  │         │   foto   │         │  │   │ foto │   │       │
│  │   │(60px)│   │  │         │  (80px)  │         │  │   │(60px)│   │       │
│  │   └──────┘   │  │         └──────────┘         │  │   └──────┘   │       │
│  │              │  │                              │  │              │       │
│  │   Rana S.    │  │       Putri W.               │  │   Gabriela   │       │
│  │   Working    │  │       Mother of 2             │  │   College    │       │
│  │   Mom        │  │                              │  │   Girl       │       │
│  │              │  │  "Finally, an app that       │  │              │       │
│  │   (no quote  │  │   doesn't just tell me       │  │   (no quote  │       │
│  │    visible   │  │   something is bad, but      │  │    visible   │       │
│  │    on desktop)│  │   actually helps me manage   │  │    on desktop)│       │
│  │              │  │   my whole cabinet so I      │  │              │       │
│  │              │  │   don't waste money."        │  │              │       │
│  │              │  │                              │  │              │       │
│  └──────────────┘  └──────────────────────────────┘  └──────────────┘       │
│                                                                              │
│  ← small card ──→  ←──── featured card (larger) ────→  ← small card ──→    │
│  (~180px wide)     (~360px wide, taller)                (~180px wide)        │
│                                                                              │
│  DESKTOP: center card is FEATURED (larger, with quote)                       │
│  Side cards are smaller, show ONLY photo + name + role                       │
│                                                                              │
│         ┌──────────────┐     ┌─────────────────────┐                        │
│         │ Download Now │     │ Join As Beta Tester  │                        │
│         │(bg-blue-600) │     │ (outline blue)       │                        │
│         └──────────────┘     └─────────────────────┘                        │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content (from Figma screenshots)

```
Heading:    "Voices from Our Community"
Subtitle:   "What Our Beta Testers Are Saying"

Card 1 (Rana):
  Name:  "Rana S."
  Role:  "Working Mom"
  Quote: "Being able to sync the inventory with my husband means
          we've stopped buying duplicates of the same shampoo!"
  → Quote VISIBLE on mobile/tablet, HIDDEN on desktop (small card)

Card 2 (Putri):
  Name:  "Putri W."
  Role:  "Mother of 2"
  Quote: "Finally, an app that doesn't just tell me something is bad,
          but actually helps me manage my whole cabinet so I don't
          waste money."
  → Quote VISIBLE at ALL breakpoints (featured card on desktop)

Card 3 (Gabriela):
  Name:  "Gabriela"
  Role:  "College Girl"
  Quote: "The scanner is a game-changer for my skincare routine.
          I love seeing exactly when my products are going to expire."
  → Quote VISIBLE on mobile/tablet, HIDDEN on desktop (small card)

Button 1:   " Download Now"       (filled blue pill)
Button 2:   "Join As Beta Tester"   (outline blue pill)
```

---

## 🧩 Component Anatomy

```tsx
const testimonials = [
  {
    name: "Rana S.",
    role: "Working Mom",
    photo: "/images/testimonials/rana.jpg",
    quote: "Being able to sync the inventory with my husband means we've stopped buying duplicates of the same shampoo!"
  },
  {
    name: "Putri W.",
    role: "Mother of 2",
    photo: "/images/testimonials/putri.jpg",
    quote: "Finally, an app that doesn't just tell me something is bad, but actually helps me manage my whole cabinet so I don't waste money.",
    featured: true
  },
  {
    name: "Gabriela",
    role: "College Girl",
    photo: "/images/testimonials/gabriela.jpg",
    quote: "The scanner is a game-changer for my skincare routine. I love seeing exactly when my products are going to expire."
  }
];

<section className="bg-white">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20">

    <h2 className="text-center text-blue-600 font-bold
                   text-base md:text-[22px] lg:text-[28px]">
      Voices from Our Community
    </h2>
    <p className="text-center text-gray-500
                  text-[10px] md:text-[13px] lg:text-[15px] mt-1 md:mt-2">
      What Our Beta Testers Are Saying
    </p>

    {/* Cards — equal on mobile/tablet, featured-center on desktop */}
    <div className="mt-6 md:mt-8 lg:mt-12
                    flex items-stretch justify-center
                    gap-2 md:gap-4 lg:gap-6">

      {testimonials.map((t) => (
        <div key={t.name}
             className={`bg-white rounded-xl md:rounded-2xl shadow-sm
                         border border-gray-100 text-center
                         p-3 md:p-5 lg:p-6
                         ${t.featured
                           ? 'flex-1 lg:w-[360px] lg:flex-none lg:shadow-md'
                           : 'flex-1 lg:w-[180px] lg:flex-none'
                         }`}>

          <Image src={t.photo}
                 className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16
                            rounded-full mx-auto
                            {t.featured && 'lg:w-20 lg:h-20'}" />

          <p className="mt-2 font-bold text-gray-900
                        text-[10px] md:text-xs lg:text-sm
                        {t.featured && 'lg:text-base'}">
            {t.name}
          </p>
          <p className="text-gray-500
                        text-[8px] md:text-[10px] lg:text-xs">
            {t.role}
          </p>

          {/* Quote: always show on mobile/tablet; only featured on desktop */}
          <p className={`mt-2 text-gray-600 italic leading-relaxed
                         text-[9px] md:text-[11px] lg:text-sm
                         ${t.featured ? '' : 'lg:hidden'}`}>
            "{t.quote}"
          </p>
        </div>
      ))}
    </div>

    {/* CTA Buttons */}
    <div className="mt-6 md:mt-8 lg:mt-10
                    flex items-center justify-center
                    gap-2 md:gap-3 lg:gap-4">
      <Link href={APP_STORE_URL}
            className="bg-blue-600 text-white rounded-full font-semibold
                       text-[10px] px-3 py-1.5
                       md:text-sm md:px-5 md:py-2.5
                       lg:text-[15px] lg:px-6 lg:py-3
                       flex items-center gap-1.5">
        <AppleIcon className="w-3 h-3 md:w-4 md:h-4" />
        Download Now
      </Link>
      <Link href={BETA_URL}
            className="border-2 border-blue-600 text-blue-600 rounded-full
                       font-semibold bg-transparent
                       text-[10px] px-3 py-1.5
                       md:text-sm md:px-5 md:py-2.5
                       lg:text-[15px] lg:px-6 lg:py-3">
        Join As Beta Tester
      </Link>
    </div>

  </div>
</section>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding | `px-4 py-10` | `px-10 py-16` | `px-16 py-20` |
| Heading | 16px blue bold | 22px | 28px |
| Subtitle | 10px gray | 13px | 15px |
| Card layout | Equal-sized, all quotes | Equal, all quotes | Featured center, side cards no quote |
| Card gap | `gap-2` | `gap-4` | `gap-6` |
| Photo size | 40px | 56px | 64px (featured: 80px) |
| Name text | 10px bold | 12px | 14px (featured: 16px) |
| Quote text | 9px italic | 11px | 14px |
| Side card width | flex-1 | flex-1 | 180px fixed |
| Center card width | flex-1 | flex-1 | 360px fixed |
