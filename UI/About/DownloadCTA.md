# DownloadCTA — About Page

> **File**: `src/components/sections/about/DownloadCTA.tsx`  
> **Design ref**: Bottom of `/External/Figma/New Design/desktop - about us (1728 x 1117).png`
> **Background**: White (`#FFFFFF`)

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  bg-white  px-4  py-8  text-center      │
│                                         │
│  Lorem ipsum dolor sit amet,            │
│  consectetur adipiscing elit...         │
│  (text-gray-600, 10px, text-center)     │
│                                         │
│       ┌─────────────────┐               │
│       │  Download Now   │               │
│       │  ( icon, 10px) │               │
│       │  (blue pill)    │               │
│       └─────────────────┘               │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  bg-white  px-10  py-12  text-center                              │
│                                                                   │
│       Lorem ipsum dolor sit amet, consectetur adipiscing          │
│       elit. Sed do eiusmod tempor incididunt ut labore            │
│       et dolore magna aliqua.                                     │
│       (text-gray-600, 13px, text-center, max-w-[600px])          │
│                                                                   │
│              ┌─────────────────────┐                             │
│              │  Download Now      │                             │
│              │  ( icon, 13px)    │                             │
│              └─────────────────────┘                             │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  bg-white  py-16                                                             │
│  max-w-[1280px] mx-auto  px-16  text-center                                 │
│                                                                              │
│       Lorem ipsum dolor sit amet, consectetur adipiscing elit.               │
│       Sed do eiusmod tempor incididunt ut labore et dolore magna              │
│       aliqua. Ut enim ad minim veniam, quis nostrud exercitation.             │
│                                                                              │
│       (text-gray-600, 15px, text-center, max-w-[700px] mx-auto,             │
│        leading-relaxed)                                                      │
│                                                                              │
│       Note: In the design this appears to be placeholder/lorem text.         │
│       Replace with actual CTA copy when available.                           │
│                                                                              │
│                    ┌─────────────────────────┐                               │
│                    │  Download Now           │                               │
│                    │  (with Apple  icon)     │                               │
│                    │  bg-blue-600 text-white  │                               │
│                    │  rounded-full            │                               │
│                    │  px-8 py-3               │                               │
│                    │  font-semibold           │                               │
│                    └─────────────────────────┘                               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Content

```
Body text:
  Placeholder / Lorem ipsum text in the design.
  Replace with actual CTA copy when available.

Button:
  " Download Now"  (Apple icon + text)
```

---

## 🧩 Component Anatomy

```tsx
<section className="bg-white">
  <div className="max-w-[1280px] mx-auto text-center
                  px-4 py-8 md:px-10 md:py-12 lg:px-16 lg:py-16">

    <p className="text-gray-600 leading-relaxed mx-auto
                  text-[10px] max-w-full
                  md:text-[13px] md:max-w-[600px]
                  lg:text-[15px] lg:max-w-[700px]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
    </p>

    <a href="https://apps.apple.com/..."
       target="_blank"
       rel="noopener noreferrer"
       className="mt-4 md:mt-6 lg:mt-8
                  inline-flex items-center gap-1.5 md:gap-2
                  bg-blue-600 text-white rounded-full font-semibold
                  text-[10px] px-4 py-2
                  md:text-[13px] md:px-6 md:py-2.5
                  lg:text-[15px] lg:px-8 lg:py-3
                  hover:bg-blue-700 transition-colors">
      <AppleIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
      Download Now
    </a>

  </div>
</section>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Section padding | `px-4 py-8` | `px-10 py-12` | `px-16 py-16` |
| Body text | 10px gray-600, centered | 13px, max-w-600px | 15px, max-w-700px |
| Button text | 10px | 13px | 15px |
| Button padding | `px-4 py-2` | `px-6 py-2.5` | `px-8 py-3` |
| Button | `bg-blue-600 text-white rounded-full` | same | same |
