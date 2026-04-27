// Team member type
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  profession: string;
  image: string;
  bio: string;
  professionPill: string;
}

// Feature type
export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  isImageRight: boolean;
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

// Vision card type
export interface VisionCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

// Collaborator / partner logo type
export interface Collaborator {
  name: string;
  label: string;
  logo: string;
  logoHover: string;
}
