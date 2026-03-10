"use client";

/* Design ref: Figma "Website Feb 26" — https://www.figma.com/design/Qis0UnpyXd1Ex7SekW4I9Q/Memoli--Final-?node-id=1-7 */
import HeroSection from "@memoli/components/sections/home/HeroSection";
import TaglineSection from "@memoli/components/sections/home/TaglineSection";
import FeaturesSection from "@memoli/components/sections/home/FeaturesSection";
import CollaboratorsSection from "@memoli/components/sections/home/CollaboratorsSection";
import TestimonialsSection from "@memoli/components/sections/home/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TaglineSection />
      <FeaturesSection />
      <CollaboratorsSection />
      <TestimonialsSection />
    </main>
  );
}
