# Footer — Shared Layout Component

> **File**: `src/components/layout/Footer.tsx`  
> **Used on**: Every page (Home, About)  
> **Position**: Bottom of every page  
> **Design ref**: Bottom of every Figma mockup in `/External/Figma/New Design/`

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│ bg-[#0F172A]  text-white  px-4  py-10  │
│                                         │
│  ┌──────────┐ ┌─────────┐ ┌──────────┐ │
│  │Memoli by │ │Company  │ │Socials   │ │
│  │NamaLabs  │ │         │ │          │ │
│  │(12px,    │ │Terms &  │ │[in] [📷] │ │
│  │ bold)    │ │Conditions│ │[🎵]     │ │
│  │          │ │Privacy  │ │(icon row │ │
│  │Download  │ │Policy   │ │ gap-3)   │ │
│  │ App      │ │         │ │          │ │
│  │About Us  │ │(11px,   │ │          │ │
│  │Contact   │ │ links)  │ │          │ │
│  │(11px,    │ │         │ │          │ │
│  │ links)   │ │         │ │          │ │
│  └──────────┘ └─────────┘ └──────────┘ │
│                                         │
│  ← grid-cols-3, gap-4 →                │
│  Same 3-column layout as desktop,       │
│  just scaled down                       │
│                                         │
│  ─────────── divider ─────────────────  │
│  (border-t border-white/10)             │
│                                         │
│  © 2025 Memoli by NamaLabs /           │
│  All Rights Reserved                    │
│  (text-white/50, 10px, text-center)     │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│ bg-[#0F172A]  text-white  px-10  py-14                           │
│                                                                   │
│  ┌───────────────────┐  ┌────────────────┐  ┌─────────────────┐  │
│  │ Memoli by NamaLabs│  │ Company        │  │ Socials         │  │
│  │ (14px, bold)       │  │ (14px, bold)   │  │ (14px, bold)    │  │
│  │                   │  │                │  │                 │  │
│  │ Download App      │  │ Terms &        │  │ [LinkedIn]      │  │
│  │ About Us          │  │ Conditions     │  │ [Instagram]     │  │
│  │ Contact           │  │ Privacy Policy │  │ [TikTok]        │  │
│  │                   │  │                │  │                 │  │
│  │ (13px links,      │  │ (13px links)   │  │ (icons, 20px)   │  │
│  │  text-white/70)   │  │                │  │                 │  │
│  └───────────────────┘  └────────────────┘  └─────────────────┘  │
│                                                                   │
│  ─────────────────────── divider ──────────────────────────────── │
│                                                                   │
│  © 2025 Memoli by NamaLabs / All Rights Reserved                 │
│  (text-white/50, 12px, text-center)                               │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

---

## 🖥 DESKTOP (1728px) — `lg:` breakpoint

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ bg-[#0F172A]  text-white                                                     │
│ max-w-[1280px] mx-auto  px-16  py-16                                        │
│                                                                              │
│  ┌──────────────────────┐  ┌──────────────────┐  ┌──────────────────────┐   │
│  │                      │  │                  │  │                      │   │
│  │  Memoli by NamaLabs  │  │  Company         │  │  Socials             │   │
│  │  (text-white, 16px,  │  │  (text-white,    │  │  (text-white,        │   │
│  │   font-bold)         │  │   16px, bold)    │  │   16px, bold)        │   │
│  │                      │  │                  │  │                      │   │
│  │  Download App        │  │  Terms &         │  │  [LinkedIn icon]     │   │
│  │  About Us            │  │  Conditions      │  │  [Instagram icon]    │   │
│  │  Contact             │  │                  │  │  [TikTok icon]       │   │
│  │                      │  │  Privacy Policy  │  │                      │   │
│  │  (text-white/70,     │  │                  │  │  (icon row or        │   │
│  │   14px, links,       │  │  (text-white/70, │  │   vertical list,     │   │
│  │   hover:text-white)  │  │   14px, links)   │  │   24px icons,        │   │
│  │                      │  │                  │  │   hover:text-white)  │   │
│  │                      │  │                  │  │                      │   │
│  └──────────────────────┘  └──────────────────┘  └──────────────────────┘   │
│                                                                              │
│  ← grid-cols-3, gap-12 →                                                    │
│  (NOT 4 columns — only 3 columns in the Figma design)                       │
│                                                                              │
│  ──────────────────────── divider ─────────────────────────────────────────  │
│  (border-t border-white/10, mt-12 pt-6)                                      │
│                                                                              │
│  © 2025 Memoli by NamaLabs / All Rights Reserved                            │
│  (text-white/50, 13px, text-center)                                          │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Exact Text Content (from Figma screenshot)

```
Column 1 heading:  "Memoli by NamaLabs"
Column 1 links:
  - "Download App"
  - "About Us"
  - "Contact"

Column 2 heading:  "Company"
Column 2 links:
  - "Terms & Conditions"
  - "Privacy Policy"

Column 3 heading:  "Socials"
Column 3 icons:
  - LinkedIn   (icon — NOT Twitter)
  - Instagram  (icon)
  - TikTok     (icon)

Copyright: "© 2025 Memoli by NamaLabs / All Rights Reserved"
```

> ⚠️ **Key corrections from Figma**:
> - Background is `#0F172A` (dark navy), NOT `#0A0A0A`
> - Only **3 columns**, NOT 4
> - Social has **LinkedIn** (NOT Twitter/X)
> - No "FAQ" link anywhere in footer
> - Copyright year is **2025**
> - No tagline "Your memories..." — that text does NOT exist in the design

---

## 🧩 Component Anatomy

```tsx
<footer className="bg-[#0F172A] text-white">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">

    {/* 3-column grid — same structure at all breakpoints */}
    <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12">

      {/* Column 1: Brand */}
      <div>
        <h4 className="text-white text-xs md:text-sm lg:text-base font-bold">
          Memoli by NamaLabs
        </h4>
        <ul className="mt-3 space-y-2 text-[11px] md:text-[13px] lg:text-sm text-white/70">
          <li><Link href={APP_STORE_URL} className="hover:text-white">Download App</Link></li>
          <li><Link href="/about" className="hover:text-white">About Us</Link></li>
          <li><Link href="mailto:..." className="hover:text-white">Contact</Link></li>
        </ul>
      </div>

      {/* Column 2: Company */}
      <div>
        <h4 className="text-white text-xs md:text-sm lg:text-base font-bold">
          Company
        </h4>
        <ul className="mt-3 space-y-2 text-[11px] md:text-[13px] lg:text-sm text-white/70">
          <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
        </ul>
      </div>

      {/* Column 3: Socials */}
      <div>
        <h4 className="text-white text-xs md:text-sm lg:text-base font-bold">
          Socials
        </h4>
        <div className="mt-3 flex gap-3 md:gap-4">
          <a href="..." className="text-white/70 hover:text-white">
            <LinkedInIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </a>
          <a href="..." className="text-white/70 hover:text-white">
            <InstagramIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </a>
          <a href="..." className="text-white/70 hover:text-white">
            <TikTokIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
          </a>
        </div>
      </div>

    </div>

    {/* Divider + Copyright */}
    <div className="border-t border-white/10 mt-8 pt-4 md:mt-10 md:pt-5 lg:mt-12 lg:pt-6">
      <p className="text-white/50 text-[10px] md:text-xs lg:text-[13px] text-center">
        © 2025 Memoli by NamaLabs / All Rights Reserved
      </p>
    </div>

  </div>
</footer>
```

---

## 🎨 Design Tokens

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Background | `#0F172A` | same | same |
| Section padding | `px-4 py-10` | `px-10 py-14` | `px-16 py-16` |
| Grid | `grid-cols-3 gap-4` | `gap-8` | `gap-12` |
| Heading size | 12px bold | 14px bold | 16px bold |
| Link size | 11px | 13px | 14px |
| Link color | `text-white/70` | same | same |
| Icon size | 16px | 20px | 24px |
| Copyright size | 10px | 12px | 13px |
| Copyright color | `text-white/50` | same | same |
| Divider | `border-white/10` | same | same |
