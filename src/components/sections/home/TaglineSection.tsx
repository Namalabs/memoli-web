"use client";

import { useFadeIn } from "@memoli/hooks/useGSAP";

export default function TaglineSection() {
  const sectionRef = useFadeIn({ y: 30, duration: 0.8 });

  return (
    <section className="bg-[#F2F7FF]">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 text-center">
        <blockquote className="max-w-full md:max-w-[700px] lg:max-w-[800px] mx-auto">
          <p className="text-gray-900 text-lg md:text-xl lg:text-2xl font-bold italic leading-snug">
            &ldquo;A healthy home starts with knowing&rdquo;
          </p>
          <p className="mt-4 md:mt-4 text-gray-600 text-sm md:text-sm lg:text-base leading-relaxed">
            Urban living is fast and cabinets get cluttered. Memoli exists to
            help you eliminate &ldquo;sunk cost&rdquo; waste while ensuring every ingredient
            in your home is safe for the people you love.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
