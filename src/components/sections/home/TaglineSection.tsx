"use client";

import { useFadeIn } from "@memoli/hooks/useGSAP";

export default function TaglineSection() {
  const sectionRef = useFadeIn({ y: 30, duration: 0.8 });

  return (
    <section className="bg-memoli-section-bg">
      <div
        ref={sectionRef}
        className="max-w-[1280px] mx-auto text-left py-[88px] px-10 md:py-[88px] md:px-[88px] lg:py-[104px] lg:px-16"
      >
        <blockquote className="max-w-full md:max-w-[700px] lg:max-w-[800px]">
          <p className="text-memoli-accent font-bold italic leading-snug text-xl md:text-[28px] lg:text-[34px] break-words">
            &ldquo;A healthy home starts with knowing&rdquo;
          </p>
          <p className="mt-4 md:mt-4 text-memoli-dark font-medium leading-relaxed text-base md:text-xl lg:text-[22px] break-words">
            Urban living is fast and cabinets get cluttered. Memoli exists to
            help you eliminate &ldquo;<span className="whitespace-nowrap">sunk cost</span>&rdquo; waste while ensuring every ingredient
            in your home is safe for the people you love.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
