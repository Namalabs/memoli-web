# About Page — Full Desktop Layout

> **File**: `src/app/about/page.tsx`  
> **Route**: `/about`  
> **Design ref**: `/External/Figma/New Design/desktop - about us (1728 x 1117).png`

---

## 🖥 DESKTOP — Full Page Vertical Stack

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│     ╭────────────────────────────────────────────────────────────────╮       │
│     │  Memoli          Home    About Us              Download Now   │       │
│     ╰────────────────────────────────────────────────────────────────╯       │
│                  HEADER (floating pill, "About Us" underlined)               │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌───────────────────────┐    Our Story                                     │
│  │                       │    (text-blue-600, ~36px, bold)                   │
│  │   Team Photo          │                                                   │
│  │   (group of ~5 people)│    Born at the Apple Developer Academy Bali.     │
│  │   (rounded-2xl)       │                                                   │
│  │   (~400px wide)       │    Memoli addresses the over-provisioning trap,  │
│  │                       │    where buying in excess leads to waste.         │
│  │                       │                                                   │
│  │                       │    We unite fragmented tools to solve hidden      │
│  └───────────────────────┘    allergen risks and parental misalignment,     │
│                               transforming household data into a shared,     │
│                               mindful habit.                                 │
│                                                                              │
│                         § StorySection                                       │
├──────────────────────────────────────────────────────────────────────────────┤
│  bg-[#F7F8FA]                                                                │
│                                                                              │
│  ▌ Vision of a Sustainable Future for  Nurturing Healthy Families           │
│  ↑ blue left                           (blue colored text portion)          │
│    border accent   (text-gray-900 + text-blue-600, ~24px, bold)             │
│                                                                              │
│  Guided by Wisdom, We Empower Families to Thrive Through:                   │
│  (text-gray-600, 15px)                                                       │
│                                                                              │
│  ┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐       │
│  │  ┌──────────────┐  │ │  ┌──────────────┐  │ │  ┌──────────────┐  │       │
│  │  │ Placeholder  │  │ │  │ Placeholder  │  │ │  │ Placeholder  │  │       │
│  │  │ Image        │  │ │  │ Image        │  │ │  │ Image        │  │       │
│  │  │ (gray,       │  │ │  │ (gray,       │  │ │  │ (gray,       │  │       │
│  │  │  rounded)    │  │ │  │  rounded)    │  │ │  │  rounded)    │  │       │
│  │  └──────────────┘  │ │  └──────────────┘  │ │  └──────────────┘  │       │
│  │                    │ │                    │ │                    │       │
│  │  Prioritizing     │ │  Building          │ │  Cultivating       │       │
│  │  family well-being│ │  household         │ │  eco-conscious     │       │
│  │  through non-toxic│ │  resilience through│ │  habits to protect │       │
│  │  living &         │ │  waste reduction & │ │  our planet for    │       │
│  │  proactive safety │ │  resource          │ │  future            │       │
│  │                    │ │  optimization      │ │  generations       │       │
│  └────────────────────┘ └────────────────────┘ └────────────────────┘       │
│                                                                              │
│  (3 cards, grid-cols-3, gap-8, centered text under each image)              │
│                                                                              │
│                         § VisionSection                                      │
├──────────────────────────────────────────────────────────────────────────────┤
│  bg-white                                                                    │
│                                                                              │
│  ┌──────────────────────────────┐    ┌────────────────────────────────┐      │
│  │                              │    │                                │      │
│  │  The Science Behind          │    │      ┌──────────────────┐     │      │
│  │  The Scores                  │    │      │                  │     │      │
│  │  (text-blue-600, ~28px,      │    │      │  📱 Phone Mockup │     │      │
│  │   bold)                      │    │      │                  │     │      │
│  │                              │    │      │  Shows "Sodium   │     │      │
│  │  Our methodology transforms  │    │      │  Laureth Sulfate"│     │      │
│  │  complex chemical data into  │    │      │  ingredient      │     │      │
│  │  a wisdom-driven safety net  │    │      │  detail screen   │     │      │
│  │  for your home.              │    │      │                  │     │      │
│  │                              │    │      │  References:     │     │      │
│  │  By merging scientific rigor │    │      │  - Pubmed        │     │      │
│  │  with parental intuition, we │    │      │  - Google Scholar│     │      │
│  │  cross-reference every score │    │      │                  │     │      │
│  │  against BPOM and            │    │      └──────────────────┘     │      │
│  │  international standards to  │    │                                │      │
│  │  unmask hidden allergens and │    │                                │      │
│  │  sensitive ingredients.      │    │                                │      │
│  │                              │    │                                │      │
│  └──────────────────────────────┘    └────────────────────────────────┘      │
│                                                                              │
│  ←── text (~50%) ──→                 ←── phone mockup (~50%) ──→            │
│                                                                              │
│                         § ScienceSection                                     │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                  The People Behind Memoli                                    │
│                  (text-blue-600, ~28px, bold, text-center)                   │
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │    ┌────────┐    │  │    ┌────────┐    │  │    ┌────────┐    │             │
│  │    │  foto  │    │  │    │  foto  │    │  │    │  foto  │    │             │
│  │    │ (round)│    │  │    │ (round)│    │  │    │ (round)│    │             │
│  │    └────────┘    │  │    └────────┘    │  │    └────────┘    │             │
│  │                  │  │                  │  │                  │             │
│  │  Olafiqh Wibowo  │  │  Alma Alviana    │  │  Muh. Fauzan    │             │
│  │  Clinical        │  │  Chemist         │  │  Programmer     │             │
│  │  Psychologist    │  │          ┌─────┐ │  │          ┌─────┐│             │
│  │        ┌──────┐  │  │          │Proj.│ │  │          │ BC  ││             │
│  │        │ Lead │  │  │          │Mgr  │ │  │          │ Dev ││             │
│  │        └──────┘  │  │          └─────┘ │  │          └─────┘│             │
│  │  "Lorem ipsum    │  │  "Lorem ipsum    │  │  "Lorem ipsum   │             │
│  │   dolor sit amet │  │   dolor sit amet │  │   dolor sit amet│             │
│  │   consectetur."  │  │   consectetur."  │  │   consectetur." │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                              │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │
│  │    ┌────────┐    │  │    ┌────────┐    │  │    ┌────────┐    │             │
│  │    │  foto  │    │  │    │  foto  │    │  │    │  foto  │    │             │
│  │    └────────┘    │  │    └────────┘    │  │    └────────┘    │             │
│  │                  │  │                  │  │                  │             │
│  │  Willy Lojoko    │  │  Felly Juvencia  │  │  Zahra Asyifa   │             │
│  │  Programmer      │  │  Designer        │  │  General        │             │
│  │        ┌──────┐  │  │         ┌──────┐ │  │  Psychologist   │             │
│  │        │ FE   │  │  │         │Brand │ │  │        ┌──────┐ │             │
│  │        │ Dev  │  │  │         │Desig.│ │  │        │ UX   │ │             │
│  │        └──────┘  │  │         └──────┘ │  │        │Desig.│ │             │
│  │  "Lorem ipsum    │  │  "Lorem ipsum    │  │        └──────┘ │             │
│  │   dolor sit amet │  │   dolor sit amet │  │  "We design     │             │
│  │   consectetur."  │  │   consectetur."  │  │   Memoli with   │             │
│  │                  │  │                  │  │   families in    │             │
│  │                  │  │                  │  │   our hearts     │             │
│  │                  │  │                  │  │   and minds."    │             │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘             │
│                                                                              │
│  (grid-cols-3 gap-8, 2 rows = 6 team members)                              │
│                                                                              │
│                         § TeamSection                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Lorem ipsum dolor sit amet consectetur. In facilisi eu in a dictum         │
│  eget congue turpis. Duis phasellus vulputate vulputate porta cursus        │
│  semper dui amet dictum.                                                    │
│  (text-center, text-gray-700, 16px)                                         │
│                                                                              │
│                      ┌──────────────┐                                        │
│                      │ Download Now │                                        │
│                      │ (bg-blue-600)│                                        │
│                      │ ( icon)     │                                        │
│                      └──────────────┘                                        │
│                      (centered)                                              │
│                                                                              │
│                         § DownloadCTA                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                         § Footer (same as home)                             │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 🧩 Page Assembly

```tsx
"use client";

import { StorySection } from "@memoli/components/sections/about/StorySection";
import { VisionSection } from "@memoli/components/sections/about/VisionSection";
import { ScienceSection } from "@memoli/components/sections/about/ScienceSection";
import { TeamSection } from "@memoli/components/sections/about/TeamSection";
import { DownloadCTA } from "@memoli/components/sections/about/DownloadCTA";

export default function AboutPage() {
  return (
    <>
      <StorySection />
      <VisionSection />
      <ScienceSection />
      <TeamSection />
      <DownloadCTA />
    </>
  );
}
```

---

## 📏 Section Background Pattern

```
Header:          transparent (floating over content)
StorySection:    bg-white
VisionSection:   bg-[#F7F8FA] (light gray)
ScienceSection:  bg-white
TeamSection:     bg-white
DownloadCTA:     bg-white
Footer:          bg-[#0F172A] (dark navy)
```
