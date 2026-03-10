"use client";

import Image from "next/image";
import { useFadeIn, useStaggerChildren } from "@memoli/hooks/useGSAP";

const ACCENT_BLUE = "#5B78F6";

export default function VisionSection() {
  const visionCards = [
    {
      title: "Prioritizing family well-being",
      description:
        "Prioritizing family well-being through non-toxic living & proactive safety",
      image: "/image/about/vision_01.png",
    },
    {
      title: "Building household resilience",
      description:
        "Building household resilience through waste reduction & resource optimization",
      image: "/image/about/vision_02.png",
    },
    {
      title: "Cultivating eco-conscious",
      description:
        "Cultivating eco-conscious habits to protect our planet for future generations",
      image: "/image/about/vision_03.png",
    },
  ];

  const headingRef = useFadeIn({ y: 25, duration: 0.7 });
  const cardsRef = useStaggerChildren({ y: 30, duration: 0.6, stagger: 0.12 });

  return (
    <section className="bg-[#F8F8F9]">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <header ref={headingRef} className="flex items-start gap-3 md:gap-4">
          <div className="w-1 h-[30px] flex-shrink-0 rounded-full" style={{ backgroundColor: ACCENT_BLUE }} aria-hidden />
          <div>
            <h2 className="text-gray-900 font-bold text-2xl md:text-[28px] lg:text-[40px] leading-tight">
              Vision of a Sustainable Future for{" "}
              <span style={{ color: ACCENT_BLUE }}>Nurturing Healthy Families</span>
            </h2>
            <p className="mt-2 text-gray-700 text-base md:text-[18px] lg:text-xl leading-relaxed">
              Guided by Wisdom, We Empower Families to Thrive Through:
            </p>
          </div>
        </header>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10 lg:mt-12">
          {visionCards.map((card, index) => (
            <article key={index} className="flex flex-col">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[24px] bg-[#F8F8F9]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
              </div>
              <p className="mt-4 text-gray-800 text-sm md:text-[15px] leading-relaxed text-center font-medium">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
