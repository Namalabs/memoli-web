# TaglineSection — Home Page

> **File**: `src/components/sections/home/TaglineSection.tsx`  
> **Design ref**: Below hero in `/External/Figma/New Design/desktop - home (1728 x 1117).png`

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  px-4  py-8  bg-white                   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │  "A healthy home starts with    │    │
│  │   knowing"                      │    │
│  │  (text-gray-900, ~16px,         │    │
│  │   bold, italic)                 │    │
│  │                                 │    │
│  │  Urban living is fast, and      │    │
│  │  cabinets get cluttered...      │    │
│  │  (text-gray-600, 11px,          │    │
│  │   regular, leading-relaxed)     │    │
│  │                                 │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Text: left-aligned, max-w full         │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  px-10  py-12  bg-white                                           │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐      │
│  │                                                         │      │
│  │  "A healthy home starts with knowing"                   │      │
│  │  (text-gray-900, ~20px, bold, italic)                   │      │
│  │                                                         │      │
│  │  Urban living is fast, and cabinets get cluttered.       │      │
│  │  Memoli exists to help you eliminate "sunk cost"         │      │
│  │  waste while ensuring every ingredient in your home      │      │
│  │  is safe for the people you love.                        │      │
│  │  (text-gray-600, 14px, regular, leading-relaxed)         │      │
│  │                                                         │      │
│  └─────────────────────────────────────────────────────────┘      │
│                                                                   │
│  Text: left-aligned, max-w-[700px]                                │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  max-w-[1280px] mx-auto  px-16  py-16  bg-white                            │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐    │
│  │                                                                      │    │
│  │  "A healthy home starts with knowing"                                │    │
│  │  (text-gray-900, ~24px, bold, italic, with opening " quote marks)    │    │
│  │                                                                      │    │
│  │  Urban living is fast, and cabinets get cluttered. Memoli exists     │    │
│  │  to help you eliminate "sunk cost" waste while ensuring every        │    │
│  │  ingredient in your home is safe for the people you love.            │    │
│  │  (text-gray-600, 16px, regular, leading-relaxed)                     │    │
│  │                                                                      │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  Text alignment: left                                                        │
│  Max text width: ~800px (doesn't stretch full width)                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content

```
Quote:     "A healthy home starts with knowing"
Body:      "Urban living is fast, and cabinets get cluttered. Memoli exists
            to help you eliminate "sunk cost" waste while ensuring every
            ingredient in your home is safe for the people you love."
```

---

## 🧩 Component Anatomy

```tsx
<section className="bg-white">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">

    <blockquote className="max-w-full md:max-w-[700px] lg:max-w-[800px]">
      <p className="text-gray-900
                    text-base md:text-xl lg:text-2xl
                    font-bold italic">
        "A healthy home starts with knowing"
      </p>
      <p className="mt-3 md:mt-4 text-gray-600
                    text-[11px] md:text-sm lg:text-base
                    leading-relaxed">
        Urban living is fast, and cabinets get cluttered. Memoli exists
        to help you eliminate "sunk cost" waste while ensuring every
        ingredient in your home is safe for the people you love.
      </p>
    </blockquote>

  </div>
</section>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding | `px-4 py-8` | `px-10 py-12` | `px-16 py-16` |
| Quote text | 16px, bold, italic | 20px | 24px |
| Body text | 11px | 14px | 16px |
| Max text width | full | ~700px | ~800px |
| Text alignment | Left | Left | Left |
| Background | `white` | same | same |
