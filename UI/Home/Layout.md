# Home Page — Full Desktop Layout

> **File**: `src/app/page.tsx`  
> **Route**: `/`  
> **Design ref**: `/External/Figma/New Design/desktop - home (1728 x 1117).png`

---

## 🖥 DESKTOP — Full Page Vertical Stack

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│     ╭────────────────────────────────────────────────────────────────╮       │
│     │  Memoli          Home    About Us              Download Now   │       │
│     ╰────────────────────────────────────────────────────────────────╯       │
│                  HEADER (floating pill, "Home" underlined)                   │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────┐    ┌────────────────────────────────┐      │
│  │                              │    │                                │      │
│  │  Smart Scanning              │    │       ┌──────────────────┐    │      │
│  │  (text-blue-600, ~40px)      │    │       │                  │    │      │
│  │                              │    │       │  📱 Phone Mockup │    │      │
│  │  For Sustainability          │    │       │                  │    │      │
│  │  (text-gray-900, ~48px bold) │    │       │  "Scan Your      │    │      │
│  │                              │    │       │   Item" screen   │    │      │
│  │  Memoli tracks shelf-life    │    │       │                  │    │      │
│  │  and verifies ingredients,   │    │       └──────────────────┘    │      │
│  │  serving as a mindful        │    │                                │      │
│  │  companion for your family's │    │                                │      │
│  │  daily essentials.           │    │                                │      │
│  │  (text-gray-600, 16px)       │    │                                │      │
│  │                              │    │                                │      │
│  │  ┌──────────────┐ ┌────────────────────┐                          │      │
│  │  │ Download Now │ │Join As Beta Tester │                          │      │
│  │  │(filled blue) │ │ (outline blue)     │                          │      │
│  │  └──────────────┘ └────────────────────┘                          │      │
│  │                              │    │                                │      │
│  └──────────────────────────────┘    └────────────────────────────────┘      │
│                                                                              │
│                         § HeroSection                                       │
├──────────────────────────────────────────────────────────────────────────────┤
│  bg-white                                                                    │
│                                                                              │
│  "A healthy home starts with knowing"                                       │
│  (text-gray-900, ~24px, bold, italic, left-aligned)                         │
│                                                                              │
│  Urban living is fast, and cabinets get cluttered. Memoli exists             │
│  to help you eliminate "sunk cost" waste while ensuring every                │
│  ingredient in your home is safe for the people you love.                    │
│  (text-gray-600, 16px, regular, max-w-~800px)                               │
│                                                                              │
│                         § TaglineSection                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│  bg-white                                                                    │
│                                                                              │
│                 Mindful Assistant for Modern Living                          │
│                 (text-center, ~32px bold)                                    │
│                                                                              │
│  ┌──────────────────────────┐   ┌──────────────────────────────┐            │
│  │ Smart Scan, Zero Effort  │   │     ┌──────────────────┐    │            │
│  │ (blue title)             │   │     │   Screenshot     │    │            │
│  │ Description text...      │   │     └──────────────────┘    │            │
│  └──────────────────────────┘   └──────────────────────────────┘            │
│                                                                              │
│  ┌──────────────────────────────┐   ┌──────────────────────────┐            │
│  │     ┌──────────────────┐    │   │ Proactive Expiry Tracker │            │
│  │     │   Screenshot     │    │   │ (blue title)             │            │
│  │     └──────────────────┘    │   │ Description text...      │            │
│  └──────────────────────────────┘   └──────────────────────────┘            │
│                                                                              │
│  ┌──────────────────────────┐   ┌──────────────────────────────┐            │
│  │ Ingredient Safety Guard  │   │     ┌──────────────────┐    │            │
│  │ (blue title)             │   │     │   Screenshot     │    │            │
│  │ Description text...      │   │     └──────────────────┘    │            │
│  └──────────────────────────┘   └──────────────────────────────┘            │
│                                                                              │
│  ┌──────────────────────────────┐   ┌──────────────────────────┐            │
│  │     ┌──────────────────┐    │   │ Family Synchronization   │            │
│  │     │   Screenshot     │    │   │ (blue title)             │            │
│  │     └──────────────────┘    │   │ Description text...      │            │
│  └──────────────────────────────┘   └──────────────────────────┘            │
│                                                                              │
│  (4 alternating text/image blocks)                                          │
│                                                                              │
│                         § FeaturesSection                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│  bg-[#F7F8FA]                                                                │
│                                                                              │
│  Our Collaborators                                                          │
│  (text-blue-600, ~28px bold)                                                │
│                                                                              │
│  We are proud to collaborate with entity of innovation...                   │
│  (text-gray-600, 15px)                                                       │
│                                                                              │
│  ○ ○ ○ ○ ○ ◉   (5 partner logos + 1 blue "Join" circle)                    │
│                                                                              │
│                         § CollaboratorsSection                               │
├──────────────────────────────────────────────────────────────────────────────┤
│  bg-white                                                                    │
│                                                                              │
│              Voices from Our Community                                      │
│              (text-blue-600, ~28px bold, centered)                          │
│                                                                              │
│              What Our Beta Testers Are Saying                               │
│              (text-gray-500, 15px, centered)                                │
│                                                                              │
│  ┌──────────┐  ┌────────────────────────┐  ┌──────────┐                    │
│  │ Rana S.  │  │ Putri W. (featured)    │  │ Gabriela │                    │
│  │ small    │  │ with quote             │  │ small    │                    │
│  └──────────┘  └────────────────────────┘  └──────────┘                    │
│                                                                              │
│       ┌──────────────┐  ┌─────────────────────┐                             │
│       │ Download Now │  │ Join As Beta Tester │                             │
│       └──────────────┘  └─────────────────────┘                             │
│                                                                              │
│                         § TestimonialsSection                                │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                         § Footer (dark, same as about)                      │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 🧩 Page Assembly

```tsx
"use client";

import { HeroSection } from "@memoli/components/sections/home/HeroSection";
import { TaglineSection } from "@memoli/components/sections/home/TaglineSection";
import { FeaturesSection } from "@memoli/components/sections/home/FeaturesSection";
import { CollaboratorsSection } from "@memoli/components/sections/home/CollaboratorsSection";
import { TestimonialsSection } from "@memoli/components/sections/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TaglineSection />
      <FeaturesSection />
      <CollaboratorsSection />
      <TestimonialsSection />
    </>
  );
}
```

---

## 📏 Section Background Pattern

```
Header:              transparent (floating over content)
HeroSection:         bg-white
TaglineSection:      bg-white
FeaturesSection:     bg-white
CollaboratorsSection: bg-[#F7F8FA] (light gray)
TestimonialsSection: bg-white
Footer:              bg-[#0F172A] (dark navy)
```
