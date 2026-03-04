# TeamSection — About Page

> **File**: `src/components/sections/about/TeamSection.tsx`  
> **Design ref**: `/External/Figma/New Design/desktop - about us (1728 x 1117).png`
> **Background**: White (`#FFFFFF`)

---

## 📱 MOBILE (393px) — Default

```
┌─────────────────────────────────────────┐
│  bg-white  px-4  py-10                  │
│                                         │
│      The People Behind Memoli           │
│      (text-blue-600, ~16px, bold,       │
│       text-center)                      │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ ┌─────┐ │ │ ┌─────┐ │ │ ┌─────┐ │   │
│  │ │foto │ │ │ │foto │ │ │ │foto │ │   │
│  │ │40px │ │ │ │40px │ │ │ │40px │ │   │
│  │ └─────┘ │ │ └─────┘ │ │ └─────┘ │   │
│  │ Olafiqh │ │ Alma    │ │ Muh.    │   │
│  │ Wibowo  │ │ Alviana │ │ Fauzan  │   │
│  │[Clin.  ]│ │[Chemist]│ │[Progr. ]│   │
│  │[Lead   ]│ │[PM     ]│ │[BC Dev ]│   │
│  │"bio..." │ │"bio..." │ │"bio..." │   │
│  │(8px)    │ │(8px)    │ │(8px)    │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ ┌─────┐ │ │ ┌─────┐ │ │ ┌─────┐ │   │
│  │ │foto │ │ │ │foto │ │ │ │foto │ │   │
│  │ │40px │ │ │ │40px │ │ │ │40px │ │   │
│  │ └─────┘ │ │ └─────┘ │ │ └─────┘ │   │
│  │ Willy   │ │ Felly   │ │ Zahra   │   │
│  │ Lojoko  │ │Juvencia │ │ Asyifa  │   │
│  │[Progr. ]│ │[Design.]│ │[Gen.Psy]│   │
│  │[FE Dev ]│ │[Brand D]│ │[UX Des]│   │
│  │"bio..." │ │"bio..." │ │"We     │   │
│  │(8px)    │ │(8px)    │ │design  │   │
│  │         │ │         │ │Memoli  │   │
│  │         │ │         │ │with    │   │
│  │         │ │         │ │famili- │   │
│  │         │ │         │ │es..."  │   │
│  └─────────┘ └─────────┘ └─────────┘   │
│                                         │
│  ← grid-cols-3, gap-2 →               │
│  Same 3×2 grid, everything scaled down  │
│                                         │
└─────────────────────────────────────────┘
```

### Mobile Layout Rules
- **Same 3×2 grid** — NOT stacked
- Photos: ~40px circles
- Name: ~9px bold
- Profession/role pills: ~7px
- Bio quotes: ~8px italic
- Gap: `gap-2`

---

## 📱 TABLET (1366px) — `md:` breakpoint

```
┌───────────────────────────────────────────────────────────────────┐
│  bg-white  px-10  py-16                                           │
│                                                                   │
│              The People Behind Memoli                             │
│              (text-blue-600, ~24px, bold, text-center)            │
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │   ┌──────┐   │  │   ┌──────┐   │  │   ┌──────┐   │           │
│  │   │ foto │   │  │   │ foto │   │  │   │ foto │   │           │
│  │   │(70px)│   │  │   │(70px)│   │  │   │(70px)│   │           │
│  │   └──────┘   │  │   └──────┘   │  │   └──────┘   │           │
│  │ Olafiqh W.   │  │ Alma Alviana │  │ Muh. Fauzan  │           │
│  │ [Clinical    │  │ [Chemist]    │  │ [Programmer]  │           │
│  │  Psychol.]   │  │ [Project     │  │ [BC Developer] │           │
│  │ [Lead]       │  │  Manager]    │  │               │           │
│  │ "bio..."     │  │ "bio..."     │  │ "bio..."      │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│                                                                   │
│  (+ row 2: Willy, Felly, Zahra)                                  │
│  ← grid-cols-3, gap-6 →                                         │
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
│                    The People Behind Memoli                                   │
│                    (text-blue-600, ~32px, font-bold, text-center)             │
│                                                                              │
│  ┌─ ROW 1 ──────────────────────────────────────────────────────────────┐    │
│  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐   │    │
│  │  │   ┌──────────┐   │  │   ┌──────────┐   │  │   ┌──────────┐   │   │    │
│  │  │   │  photo   │   │  │   │  photo   │   │  │   │  photo   │   │   │    │
│  │  │   │ 100×100  │   │  │   │ 100×100  │   │  │   │ 100×100  │   │   │    │
│  │  │   │ rounded  │   │  │   │ rounded  │   │  │   │ rounded  │   │   │    │
│  │  │   │  -full   │   │  │   │  -full   │   │  │   │  -full   │   │   │    │
│  │  │   └──────────┘   │  │   └──────────┘   │  │   └──────────┘   │   │    │
│  │  │                  │  │                  │  │                  │   │    │
│  │  │  Olafiqh Wibowo  │  │  Alma Alviana    │  │  Muh. Fauzan     │   │    │
│  │  │  ┌────────────┐  │  │  ┌────────────┐  │  │  ┌────────────┐  │   │    │
│  │  │  │ Clinical   │  │  │  │ Chemist    │  │  │  │ Programmer │  │   │    │
│  │  │  │ Psycholo-  │  │  │  └────────────┘  │  │  └────────────┘  │   │    │
│  │  │  │ gist       │  │  │  ┌────────────┐  │  │  ┌────────────┐  │   │    │
│  │  │  └────────────┘  │  │  │ Project    │  │  │  │ BC         │  │   │    │
│  │  │  ┌────────────┐  │  │  │ Manager    │  │  │  │ Developer  │  │   │    │
│  │  │  │ Lead       │  │  │  └────────────┘  │  │  └────────────┘  │   │    │
│  │  │  └────────────┘  │  │  "bio..."        │  │  "bio..."        │   │    │
│  │  │  "bio..."        │  │                  │  │                  │   │    │
│  │  └──────────────────┘  └──────────────────┘  └──────────────────┘   │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌─ ROW 2 ──────────────────────────────────────────────────────────────┐    │
│  │  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐   │    │
│  │  │  Willy Lojoko    │  │  Felly Juvencia  │  │  Zahra Asyifa    │   │    │
│  │  │  [Programmer]    │  │  [Designer]      │  │  [General        │   │    │
│  │  │  [FE Developer]  │  │  [Brand Designer]│  │   Psychologist]  │   │    │
│  │  │  "bio..."        │  │  "bio..."        │  │  [UX Designer]   │   │    │
│  │  │                  │  │                  │  │  "We design      │   │    │
│  │  │                  │  │                  │  │   Memoli with    │   │    │
│  │  │                  │  │                  │  │   families in our│   │    │
│  │  │                  │  │                  │  │   hearts and     │   │    │
│  │  │                  │  │                  │  │   minds."        │   │    │
│  │  └──────────────────┘  └──────────────────┘  └──────────────────┘   │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ← grid-cols-3, gap-8, each card text-center →                               │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 📝 Team Member Data

```
ROW 1:

1. Olafiqh Wibowo
   - Photo: olafiqh.jpg
   - Profession pill: "Clinical Psychologist" (bg-blue-50, text-blue-600)
   - Role pill: "Lead" (bg-green-50, text-green-600)
   - Bio: "Lorem ipsum dolor sit amet consectetur."

2. Alma Alviana
   - Photo: alma.jpg
   - Profession pill: "Chemist"
   - Role pill: "Project Manager"
   - Bio: "Lorem ipsum dolor sit amet consectetur."

3. Muh. Fauzan
   - Photo: fauzan.jpg
   - Profession pill: "Programmer"
   - Role pill: "BC Developer"
   - Bio: "Lorem ipsum dolor sit amet consectetur."

ROW 2:

4. Willy Lojoko
   - Photo: willy.jpg
   - Profession pill: "Programmer"
   - Role pill: "FE Developer"
   - Bio: "Lorem ipsum dolor sit amet consectetur."

5. Felly Juvencia
   - Photo: felly.jpg
   - Profession pill: "Designer"
   - Role pill: "Brand Designer"
   - Bio: "Lorem ipsum dolor sit amet consectetur."

6. Zahra Asyifa
   - Photo: zahra.jpg
   - Profession pill: "General Psychologist"
   - Role pill: "UX Designer"
   - Bio: "We design Memoli with families in our hearts and minds."
   ← This is the ONLY non-placeholder bio (confirmed from mobile screenshot)
```

> ⚠️ **Note**: Most team bios show "Lorem ipsum dolor sit amet consectetur."
> Only Zahra Asyifa has a real bio quote. Replace all lorem ipsum bios with
> real content when available.

---

## 🧩 Component Anatomy

```tsx
const teamMembers = [
  {
    name: "Olafiqh Wibowo",
    photo: "/images/team/olafiqh.jpg",
    profession: "Clinical Psychologist",
    role: "Lead",
    bio: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    name: "Alma Alviana",
    photo: "/images/team/alma.jpg",
    profession: "Chemist",
    role: "Project Manager",
    bio: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    name: "Muh. Fauzan",
    photo: "/images/team/fauzan.jpg",
    profession: "Programmer",
    role: "BC Developer",
    bio: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    name: "Willy Lojoko",
    photo: "/images/team/willy.jpg",
    profession: "Programmer",
    role: "FE Developer",
    bio: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    name: "Felly Juvencia",
    photo: "/images/team/felly.jpg",
    profession: "Designer",
    role: "Brand Designer",
    bio: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    name: "Zahra Asyifa",
    photo: "/images/team/zahra.jpg",
    profession: "General Psychologist",
    role: "UX Designer",
    bio: "We design Memoli with families in our hearts and minds."
  },
];

<section className="bg-white">
  <div className="max-w-[1280px] mx-auto
                  px-4 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20">

    <h2 className="text-blue-600 font-bold text-center
                   text-base md:text-2xl lg:text-[32px]">
      The People Behind Memoli
    </h2>

    <div className="mt-6 md:mt-8 lg:mt-12
                    grid grid-cols-3 gap-2 md:gap-6 lg:gap-8">

      {teamMembers.map((member) => (
        <div key={member.name}
             className="text-center flex flex-col items-center">

          <Image src={member.photo} alt={member.name}
                 className="w-10 h-10 md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]
                            rounded-full object-cover" />

          <p className="mt-2 font-bold text-gray-900
                        text-[9px] md:text-sm lg:text-base">
            {member.name}
          </p>

          {/* Profession pill */}
          <span className="mt-1 inline-block bg-blue-50 text-blue-600
                           rounded-full font-medium
                           text-[7px] px-2 py-0.5
                           md:text-xs md:px-3 md:py-1
                           lg:text-sm lg:px-4 lg:py-1">
            {member.profession}
          </span>

          {/* Role pill */}
          <span className="mt-1 inline-block bg-green-50 text-green-600
                           rounded-full font-medium
                           text-[7px] px-2 py-0.5
                           md:text-xs md:px-3 md:py-1
                           lg:text-sm lg:px-4 lg:py-1">
            {member.role}
          </span>

          {/* Bio quote */}
          <p className="mt-1 md:mt-2 text-gray-500 italic leading-relaxed
                        text-[8px] md:text-[11px] lg:text-sm">
            "{member.bio}"
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
| Section padding | `px-4 py-10` | `px-10 py-16` | `px-16 py-20` |
| Heading | 16px blue bold | 24px | 32px |
| Grid | `grid-cols-3 gap-2` | `gap-6` | `gap-8` |
| Photo size | 40px circle | 70px | 100px |
| Name text | 9px bold | 14px | 16px |
| Profession pill | 7px, blue-50 bg | 12px | 14px |
| Role pill | 7px, green-50 bg | 12px | 14px |
| Bio text | 8px italic gray-500 | 11px | 14px |
| Layout | 3×2 grid | same | same |
