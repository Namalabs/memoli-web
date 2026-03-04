# Header — Shared Layout Component

> **File**: `src/components/layout/Header.tsx`  
> **Used on**: Every page (Home, About)  
> **Position**: Floating pill at top of viewport, sticky  
> **Design ref**: Top of every Figma mockup in `/External/Figma/New Design/`

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  px-4  pt-4                             │
│                                         │
│  ╭─────────────────────────────────────╮│
│  │                                     ││
│  │ Memoli    Home  About Us   Download ││
│  │ (logo)   (nav links)      Now      ││
│  │ (14px)   (11px, gap-3)    (11px,   ││
│  │                           filled   ││
│  │                           blue     ││
│  │                           pill)    ││
│  │                                     ││
│  ╰─────────────────────────────────────╯│
│                                         │
│  pill: bg-white/80 backdrop-blur        │
│  rounded-full shadow-sm                 │
│  NO hamburger menu — all links visible  │
│  max-w-[360px] mx-auto                  │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **NO hamburger menu** — all nav links stay visible at all breakpoints
- Logo text: `14px`, font-bold
- Nav links: `11px`, `gap-3`
- CTA button: `11px`, blue pill, `px-3 py-1`
- Everything scales down proportionally
- Same horizontal layout as desktop

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  px-10  pt-4                                                      │
│                                                                   │
│      ╭───────────────────────────────────────────────────────╮    │
│      │                                                       │    │
│      │  Memoli        Home     About Us        Download Now  │    │
│      │  (16px,       (14px,   (14px,          (14px,        │    │
│      │   bold)        gap-6)   active:         filled blue   │    │
│      │                         underline)      pill, px-5    │    │
│      │                                         py-2,  icon)│    │
│      │                                                       │    │
│      ╰───────────────────────────────────────────────────────╯    │
│                                                                   │
│      max-w-[700px] mx-auto                                        │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  max-w-[1280px] mx-auto  pt-4                                               │
│                                                                              │
│       ╭──────────────────────────────────────────────────────────────╮       │
│       │                                                              │       │
│       │  Memoli            Home     About Us          Download Now  │       │
│       │  (text-gray-900,  (text-gray-600,            (bg-blue-600,  │       │
│       │   18px, bold)      15px,                      text-white,   │       │
│       │                    gap-8)                      rounded-full, │       │
│       │                   Active page:                 px-6 py-2,   │       │
│       │                   underline decoration-2       icon,       │       │
│       │                   underline-offset-4           15px,        │       │
│       │                   text-gray-900                font-semi)   │       │
│       │                                                              │       │
│       ╰──────────────────────────────────────────────────────────────╯       │
│                                                                              │
│       pill: bg-white/80 backdrop-blur-md                                     │
│       rounded-full shadow-sm                                                 │
│       px-8 py-3                                                              │
│       max-w-[900px] mx-auto                                                  │
│       sticky top-4 z-50                                                      │
│       flex items-center justify-between                                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Content

```
Logo:           "Memoli"  (text, not an image — bold, text-gray-900)
Nav link 1:     "Home"       → href="/"
Nav link 2:     "About Us"   → href="/about"
CTA button:     " Download Now"  (Apple  icon + text, filled blue pill)

Active state:   Current page link gets underline + text-gray-900
Inactive state: text-gray-600, hover:text-gray-900
```

---

## 🧩 Component Anatomy

```tsx
<header className="sticky top-4 z-50">
  <nav className="mx-auto max-w-[900px]
                  bg-white/80 backdrop-blur-md rounded-full shadow-sm
                  px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3
                  flex items-center justify-between">

    {/* Logo */}
    <Link href="/" className="text-gray-900 text-sm md:text-base lg:text-lg font-bold">
      Memoli
    </Link>

    {/* Nav links — always visible, no hamburger */}
    <div className="flex items-center gap-3 md:gap-6 lg:gap-8">
      <Link href="/"
            className="text-[11px] md:text-sm lg:text-[15px]
                       text-gray-600 hover:text-gray-900
                       {isActive && 'underline decoration-2 underline-offset-4 text-gray-900'}">
        Home
      </Link>
      <Link href="/about" className="...same pattern...">
        About Us
      </Link>
    </div>

    {/* CTA */}
    <Link href={APP_STORE_URL}
          className="bg-blue-600 text-white rounded-full
                     text-[11px] px-3 py-1
                     md:text-sm md:px-4 md:py-1.5
                     lg:text-[15px] lg:px-6 lg:py-2
                     font-semibold flex items-center gap-1.5">
      <AppleIcon className="w-3 h-3 md:w-4 md:h-4" />
      Download Now
    </Link>

  </nav>
</header>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Pill max-width | ~360px | ~700px | ~900px |
| Pill padding | `px-4 py-2` | `px-6 py-2.5` | `px-8 py-3` |
| Logo size | 14px bold | 16px bold | 18px bold |
| Nav link size | 11px | 14px | 15px |
| Nav gap | `gap-3` | `gap-6` | `gap-8` |
| CTA size | 11px, `px-3 py-1` | 14px, `px-4 py-1.5` | 15px, `px-6 py-2` |
| Background | `bg-white/80 backdrop-blur-md` | same | same |
| Border | `rounded-full shadow-sm` | same | same |
| Position | `sticky top-4 z-50` | same | same |
