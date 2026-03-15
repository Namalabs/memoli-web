"use client";

import Image from "next/image";
import { useSlideIn } from "@memoli/hooks/useGSAP";

export default function StorySection() {
  const photoRef = useSlideIn("left", { distance: 50, duration: 0.9 });
  const textRef = useSlideIn("right", { distance: 50, duration: 0.9, delay: 0.1 });

  return (
    <section className="bg-memoli-light">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-32">
        {/* Mobile: stacked (image top, text below) / Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12">
          {/* Team photo – audit: round corner 32px mobile, 48px tablet, 56px desktop; overflow-hidden to avoid white edges */}
          <div ref={photoRef} className="w-full md:w-[40%] md:flex-shrink-0 rounded-[32px] md:rounded-[48px] lg:rounded-[56px] overflow-hidden shadow-md bg-memoli-section-bg">
            <Image
              src="/image/about/team_photo.webp"
              alt="Memoli team photo"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Story text – audit: Heading 72/56/24px #3C7CF7 Bold, Body 28/24/16px #152B56 Medium */}
          <div ref={textRef} className="flex-1">
            <h2 className="text-memoli-accent font-bold text-2xl md:text-[40px] lg:text-[44px]">
              Our Story
            </h2>
            <p className="mt-2 md:mt-2 text-memoli-dark font-medium text-base md:text-xl">
              Born at the Apple Developer Academy Bali.
            </p>

            <p className="mt-4 md:mt-4 lg:mt-6 text-memoli-dark font-medium leading-relaxed text-base md:text-xl lg:text-[22px]">
              Memoli tracks shelf-life and verifies ingredients, serving as a
              mindful companion for your family&apos;s daily essentials.
            </p>

            <p className="mt-3 md:mt-3 lg:mt-4 text-memoli-dark font-medium leading-relaxed text-base md:text-xl lg:text-[22px]">
              Memoli addresses the over-provisioning trap, where buying in excess
              leads to waste.
            </p>

            <p className="mt-3 md:mt-3 lg:mt-4 text-memoli-dark font-medium leading-relaxed text-base md:text-xl lg:text-[22px]">
              We unite fragmented tools to solve hidden allergen risks and
              parental misalignment, transforming household data into a shared,
              mindful habit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
