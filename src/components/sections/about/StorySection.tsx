"use client";

import Image from "next/image";
import { useSlideIn } from "@memoli/hooks/useGSAP";

export default function StorySection() {
  const photoRef = useSlideIn("left", { distance: 50, duration: 0.9 });
  const textRef = useSlideIn("right", { distance: 50, duration: 0.9, delay: 0.1 });

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* Mobile: stacked (image top, text below) / Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12">
          {/* Team photo - rounded corners on desktop (Figma) */}
          <div ref={photoRef} className="w-full md:w-[40%] md:flex-shrink-0 rounded-none md:rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/image/about/team_photo.png"
              alt="Memoli team photo"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Story text */}
          <div ref={textRef} className="flex-1">
            <h2 className="text-blue-600 font-bold text-2xl md:text-[28px] lg:text-[36px]">
              Our Story
            </h2>
            <p className="mt-2 md:mt-2 text-gray-600 text-sm md:text-base">
              Born at the Apple Developer Academy Bali.
            </p>

            <p className="mt-4 md:mt-4 lg:mt-6 text-gray-800 font-normal leading-relaxed text-sm md:text-sm lg:text-base">
              Memoli tracks shelf-life and verifies ingredients, serving as a
              mindful companion for your family&apos;s daily essentials.
            </p>

            <p className="mt-3 md:mt-3 lg:mt-4 text-gray-600 leading-relaxed text-sm md:text-[13px] lg:text-[15px]">
              Memoli addresses the over-provisioning trap, where buying in excess
              leads to waste.
            </p>

            <p className="mt-3 md:mt-3 lg:mt-4 text-gray-600 leading-relaxed text-sm md:text-[13px] lg:text-[15px]">
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
