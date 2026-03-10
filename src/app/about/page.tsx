"use client";

import StorySection from "@memoli/components/sections/about/StorySection";
import VisionSection from "@memoli/components/sections/about/VisionSection";
import ScienceSection from "@memoli/components/sections/about/ScienceSection";
import TeamSection from "@memoli/components/sections/about/TeamSection";
import DownloadCTA from "@memoli/components/sections/about/DownloadCTA";

export default function About() {
  return (
    <main>
      <StorySection />
      <VisionSection />
      <ScienceSection />
      <TeamSection />
      <DownloadCTA />
    </main>
  );
}
