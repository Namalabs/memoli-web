import { TeamMember, Testimonial } from "@memoli/types";

// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

// Social links
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/memoliapp", icon: "/image/icons/linkedin.png" },
  { label: "Instagram", href: "#", icon: "/image/icons/instagram.png" },
  { label: "TikTok", href: "#", icon: "/image/icons/tiktok.png" },
];

// Team members data (bios from Figma — The People Behind Memoli)
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Olafiqh Wibowo",
    role: "Clinical Psychologist",
    profession: "Lead",
    image: "/image/about/profile_olaff.png",
    bio: "Memoli reduces mental load so parents can be truly present.",
    professionPill: "Clinical Psychologist",
  },
  {
    id: "2",
    name: "Alma Alviana",
    role: "Chemist",
    profession: "Project Manager",
    image: "/image/about/profile_alma.png",
    bio: "Memoli in science, Memoli transforms family routine into peace of mind.",
    professionPill: "Chemist",
  },
  {
    id: "3",
    name: "Rizqi Fauzan",
    role: "Programmer",
    profession: "Backend Developer",
    image: "/image/about/profile_fauzan.png",
    bio: "Memoli is engineered for reliable and seamless family life.",
    professionPill: "Programmer",
  },
  {
    id: "4",
    name: "Willy Lojoko",
    role: "Programmer",
    profession: "FE Developer",
    image: "/image/about/profile_willy.png",
    bio: "Shaping Memoli into an intuitive companion for every parent.",
    professionPill: "Programmer",
  },
  {
    id: "5",
    name: "Felly Juvencia",
    role: "Designer",
    profession: "Brand Designer",
    image: "/image/about/profile_felly.png",
    bio: "Carefully crafting Memoli with a universal visual language of care.",
    professionPill: "Designer",
  },
  {
    id: "6",
    name: "Zahra Asyifa",
    role: "General Psychologist",
    profession: "UX Designer",
    image: "/image/about/profile_zahra.png",
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
    image: "/image/testimony/ellipse_10.png",
    quote:
      "Being able to sync the inventory with my husband means we've stopped buying duplicates of the same shampoo!",
  },
  {
    id: "2",
    name: "Putri",
    role: "Stay-at-Home Mom",
    image: "/image/testimony/ellipse_11.png",
    quote:
      "Finally, an app that doesn't just tell me something is bad, but actually helps me manage my whole cabinet so I don't waste money.",
  },
  {
    id: "3",
    name: "Gabriela",
    role: "University Student",
    image: "/image/testimony/ellipse_12.png",
    quote:
      "The scanner is a game-changer for my skincare routine. I love seeing exactly when my products are going to expire.",
  },
];

// Features data
export const FEATURES = [
  {
    id: "1",
    title: "Smart Scan",
    description: "Zero Effort",
    image: "/animations/scanner.png",
    animation: "/animations/scan.lottie",
  },
  {
    id: "2",
    title: "Proactive",
    description: "Expiry Tracker",
    image: "/animations/notification.png",
    animation: "/animations/expiry.lottie",
  },
  {
    id: "3",
    title: "Ingredient",
    description: "Safety Guard",
    image: "/animations/detail.png",
    animation: "/animations/ingredients.lottie",
  },
  {
    id: "4",
    title: "Family",
    description: "Synchronization",
    image: "/animations/scanner.png",
    animation: "/animations/fam.lottie",
  },
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
