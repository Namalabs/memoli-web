"use client";

import Image from "next/image";
import { useSlideIn } from "@memoli/hooks/useGSAP";

export default function ScienceSection() {
  const textRef = useSlideIn("left", { distance: 50, duration: 0.9 });
  const phoneRef = useSlideIn("right", { distance: 50, duration: 0.9, delay: 0.1 });

  return (
    <section className="bg-memoli-light">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* Mobile: stacked (text top, phone below) / Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-8 lg:gap-12">
          {/* Text */}
          <div ref={textRef} className="flex-1">
            <h2 className="text-memoli-accent font-bold leading-tight text-[24px] md:text-[34px] lg:text-[40px]">
              The Science Behind The Scores
            </h2>

            <p className="mt-4 md:mt-4 lg:mt-6 text-memoli-dark font-medium leading-relaxed text-base md:text-xl lg:text-[22px]">
              Our methodology transforms complex chemical data into a wisdom-driven
              safety net for your home.
            </p>

            <p className="mt-3 md:mt-3 lg:mt-4 text-memoli-dark font-medium leading-relaxed text-base md:text-xl lg:text-[22px]">
              By merging scientific rigor with parental intuition, we cross-reference
              every score against BPOM and international standards to unmask hidden
              allergens and sensitive ingredients.
            </p>
          </div>

          {/* Phone mockup - below text on mobile, right on desktop */}
          <div ref={phoneRef} className="flex items-center justify-center md:flex-shrink-0 md:w-[40%] lg:w-[45%]">
            {/* detail.webp is 616×870 — use aspect ratio so image is never cropped */}
            <div className="relative w-full max-w-[260px] md:max-w-[280px] lg:max-w-[320px] aspect-[616/870]">
              <Image
                src="/animations/image.webp"
                alt="Memoli ingredient safety screen"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
