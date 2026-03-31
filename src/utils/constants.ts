import { TeamMember, Testimonial, Collaborator } from "@memoli/types";

export const APP_STORE_URL = "https://testflight.apple.com/join/5sRkNqY1";

// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

// Social links
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/memoliapp/", icon: "/image/icons/linkedin.webp" },
  { label: "Instagram", href: "https://www.instagram.com/memoli.app/", icon: "/image/icons/instagram.webp" },
  { label: "TikTok", href: "https://www.tiktok.com/@memoli.app", icon: "/image/icons/tiktok.webp" },
  { label: "Threads", href: "https://www.threads.com/@memoli.app", icon: "/image/icons/threads.webp" },
  { label: "Twitter", href: "https://x.com/memoliapp", icon: "/image/icons/twitter.svg" },
  { label: "Facebook", href: "https://facebook.com/memoliapp", icon: "/image/icons/facebook.svg" },
];

// Team members data — names and bios (quotes) must match Figma; copy from design if there are typos or mismatches. Titles/positions OK as-is.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Olaffiqih Wibowo",
    role: "Clinical Psychologist",
    profession: "Lead",
    image: "/image/about/profile_olaff.webp",
    bio: "Memoli reduces mental load so parents can be truly present.",
    professionPill: "Clinical Psychologist",
  },
  {
    id: "2",
    name: "Alma Alviana",
    role: "Chemist",
    profession: "Project Manager",
    image: "/image/about/profile_alma.webp",
    bio: "Memoli in science, Memoli transforms family routine into peace of mind.",
    professionPill: "Chemist",
  },
  {
    id: "3",
    name: "Rizqi Fauzan",
    role: "Programmer",
    profession: "Backend Developer",
    image: "/image/about/profile_fauzan.webp",
    bio: "Memoli is engineered for reliable and seamless family life.",
    professionPill: "Programmer",
  },
  {
    id: "4",
    name: "Willy Lojoko",
    role: "Programmer",
    profession: "FE Developer",
    image: "/image/about/profile_willy.webp",
    bio: "Shaping Memoli into an intuitive companion for every parent.",
    professionPill: "Programmer",
  },
  {
    id: "5",
    name: "Felly Juvencia",
    role: "Designer",
    profession: "Brand Designer",
    image: "/image/about/profile_felly.webp",
    bio: "Carefully crafting Memoli with a universal visual language of care.",
    professionPill: "Designer",
  },
  {
    id: "6",
    name: "Zahra Asyifa",
    role: "General Psychologist",
    profession: "UX Designer",
    image: "/image/about/profile_zahra.webp",
    bio: "We design Memoli to make families feel safe in our hearts and minds.",
    professionPill: "General Psychologist",
  },
];

// Testimonials data
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rana",
    role: "Property Manager",
    image: "/image/testimony/ellipse_10.webp",
    quote:
      "Being able to sync the inventory with my husband means we've stopped buying duplicates of the same shampoo!",
  },
  {
    id: "2",
    name: "Putri",
    role: "Stay-at-Home Mom",
    image: "/image/testimony/ellipse_11.webp",
    quote:
      "Finally, an app that doesn't just tell me something is bad, but actually helps me manage my whole cabinet so I don't waste money.",
  },
  {
    id: "3",
    name: "Gabriela",
    role: "University Student",
    image: "/image/testimony/ellipse_12.webp",
    quote:
      "The scanner is a game-changer for my skincare routine. I love seeing exactly when my products are going to expire.",
  },
];

// Features data (id, title, image, animation used by home FeaturesSection)
export const FEATURES = [
  {
    id: "1",
    title: "Smart Scan, Zero Effort",
    description:
      "Skip manual typing; use on-device vision to digitize your household inventory instantly by taking a single, quick product label scan.",
    image: "/animations/scanner.webp",
    animation: "/animations/scan.lottie",
    reversed: false,
  },
  {
    id: "2",
    title: "Proactive Expiry Tracker",
    description:
      'Prevent forgotten, expired products with automated alerts sent before "use-by" dates to keep families healthy while saving budgets and the planet.',
    image: "/animations/notification.webp",
    animation: "/animations/expiry.lottie",
    reversed: true,
  },
  {
    id: "3",
    title: "Ingredient Safety Guard",
    description:
      'Gain instant label insights as our checker verifies ingredients against safety standards, helping you choose "healthier" household items with confidence.',
    image: "/animations/detail.webp",
    animation: "/animations/ingredients.lottie",
    reversed: false,
  },
  {
    id: "4",
    title: "Family Synchronization",
    description:
      "Stay perfectly aligned with a shared shelf-view that syncs inventory with your family member so everyone knows what is in-stock.",
    image: "/animations/scanner.webp",
    animation: "/animations/fam.lottie",
    reversed: true,
  },
];

// Collaborators / partners (home page)
export const COLLABORATORS: Collaborator[] = [
  { name: "Apple Developer Academy", label: "Apple Developer Academy", logo: "/image/logo/ADA.webp", logoHover: "/image/logo/ADA_hover.webp" },
  // { name: "IA", label: "IA", logo: "/image/logo/IA.png", logoHover: "/image/logo/IA_hover.png" },
  { name: "Lunexia", label: "Lunexia", logo: "/image/logo/lunexia.webp", logoHover: "/image/logo/lunexia_hover.webp" },
  // { name: "WE WAW", label: "WE WAW", logo: "/image/logo/wewaw.png", logoHover: "/image/logo/wewaw_hover.png" },
  { name: "Lumina Consulting", label: "Lumina Consulting", logo: "/image/logo/lumina.webp", logoHover: "/image/logo/lumina_hover.webp" },
];

// Vision cards data
export const VISION_CARDS = [
  {
    id: "1",
    title: "Accessibility",
    description:
      "We create technology that's simple and usable for families of all tech backgrounds.",
  },
  {
    id: "2",
    title: "Sustainability",
    description:
      "Every feature we build considers the environment and promotes mindful consumption.",
  },
  {
    id: "3",
    title: "Community",
    description:
      "We believe in the power of shared knowledge and collective care for our homes.",
  },
];
