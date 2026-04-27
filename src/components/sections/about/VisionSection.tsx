"use client";

import Image from "next/image";
import { useSlideIn, useStaggerChildren } from "@memoli/hooks/useGSAP";

export default function VisionSection() {
  const visionCards = [
    {
      title: "Prioritizing family well-being",
      description:
        "Prioritizing family well-being through non-toxic living & proactive safety",
      image: "/image/about/vision_01.webp",
    },
    {
      title: "Building household resilience",
      description:
        "Building household resilience through waste reduction & resource optimization",
      image: "/image/about/vision_02.webp",
    },
    {
      title: "Cultivating eco-conscious",
      description:
        "Cultivating eco-conscious habits to protect our planet for future generations",
      image: "/image/about/vision_03.webp",
    },
  ];

  /* Audit: animation same as HERO – slide-in from left for heading */
  const headingRef = useSlideIn("left", { distance: 50, duration: 0.9 });
  const cardsRef = useStaggerChildren({ y: 30, duration: 0.6, stagger: 0.12 });

  return (
    <section className="bg-[#EBF4FF]">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <header ref={headingRef} className="flex items-start gap-3 md:gap-4">
          <div className="w-1.5 h-8 md:h-12 lg:h-10 flex-shrink-0 rounded-full bg-memoli-accent mt-1 md:mt-2" aria-hidden />
          <div>
            {/* Audit: Desktop 44px, Tablet 40px, Mobile 24px #3C7CF7 / #152B56 */}
            <h2 className="text-memoli-dark font-bold text-2xl md:text-[34px] lg:text-[38px] leading-tight">
              Vision of a Sustainable Future for{" "}
              <span className="text-memoli-accent">Nurturing Healthy Families</span>
            </h2>
            <p className="mt-2 text-memoli-dark font-medium text-base md:text-xl lg:text-[26px] leading-relaxed">
              Guided by Wisdom, We Empower Families to Thrive Through:
            </p>
          </div>
        </header>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10 lg:mt-12">
          {visionCards.map((card, index) => (
            <article key={index} className="flex flex-col">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[24px] max-w-[380px] mx-auto">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {/* Audit: Body w/ image – Desktop 28px, Tablet 24px, Mobile 16px #152B56 Medium */}
              <p className="mt-4 text-memoli-dark font-medium text-base md:text-xl lg:text-[22px] leading-relaxed text-center">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
