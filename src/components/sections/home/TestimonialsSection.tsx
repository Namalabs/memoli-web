"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@memoli/components/ui/Button";
import { TESTIMONIALS } from "@memoli/utils/constants";
import { useBetaSignup } from "@memoli/contexts/BetaSignupContext";
import { useFadeIn, useStaggerChildren } from "@memoli/hooks/useGSAP";
import gsap from "gsap";

const APP_STORE_URL = "https://testflight.apple.com/join/5sRkNqY1";

const DURATION = 0.4;
const EASE = "power2.out";

export default function TestimonialsSection() {
  const headingRef = useFadeIn({ y: 25, duration: 0.7 });
  const cardsRef = useStaggerChildren({ y: 30, duration: 0.6, stagger: 0.15 });
  const ctaRef = useFadeIn({ y: 20, duration: 0.6 });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quoteRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const hasAnimated = useRef(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const { open: openBetaSignup } = useBetaSignup();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = () => setIsDesktop(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const isFirstRun = !hasAnimated.current;
    TESTIMONIALS.forEach((_, i) => {
      const card = cardRefs.current[i];
      const quote = quoteRefs.current[i];
      const isActive = i === activeIndex;
      const isMiddle = i === 1;
      const quoteVisible = isDesktop || isActive || isMiddle;
      const state = isDesktop
        ? { scale: 1, opacity: 1, boxShadow: "0 4px 12px -2px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)" }
        : {
            scale: isActive ? 1 : 0.92,
            opacity: isActive ? 1 : 0.78,
            boxShadow: isActive
              ? "0 10px 40px -10px rgba(0,0,0,0.12), 0 0 0 1px rgba(59, 130, 246, 0.15)"
              : "0 4px 6px -1px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
          };
      const quoteState = { opacity: quoteVisible ? 1 : 0, y: quoteVisible ? 0 : 24 };
      if (card) {
        if (isFirstRun) gsap.set(card, state);
        else gsap.to(card, { ...state, duration: DURATION, ease: EASE });
      }
      if (quote) {
        if (isFirstRun) gsap.set(quote, quoteState);
        else gsap.to(quote, { ...quoteState, duration: 0.45, ease: quoteVisible ? "power2.out" : "power2.in" });
      }
    });
    hasAnimated.current = true;
  }, [activeIndex, isDesktop]);

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* Headings */}
        <div ref={headingRef}>
          <h2 className="text-blue-600 font-bold text-xl md:text-[22px] lg:text-[28px] text-center mb-2 md:mb-3">
            Voices from Our Community
          </h2>
          <p className="text-gray-500 text-sm md:text-[13px] lg:text-[15px] text-center mb-8 md:mb-12 lg:mb-16">
            What Our Beta Testers Are Saying
          </p>
        </div>

        {/* Testimonial Cards - middle card elevated with light blue bg (Figma) */}
        <div ref={cardsRef} className="flex flex-col md:flex-row items-stretch gap-6 md:gap-4 lg:gap-6 mb-10 md:mb-12 lg:mb-16">
          {TESTIMONIALS.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const isMiddle = index === 1;

            return (
              <div
                key={testimonial.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`flex flex-col items-center w-full md:flex-1 rounded-2xl p-6 md:p-5 lg:p-6 border border-transparent cursor-default transition-all duration-300 ${
                  isDesktop
                    ? "bg-[#E8F0FE] shadow-md"
                    : isMiddle
                      ? "bg-[#E8F0FE] shadow-lg scale-100 md:scale-[1.02]"
                      : isActive
                        ? "bg-[#F5F8FA] shadow-md scale-100"
                        : "bg-white shadow-sm scale-[0.98] md:scale-[0.96]"
                }`}
                style={{ transformOrigin: "center center" }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Photo */}
                <div className="relative w-20 h-20 lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden shadow-md flex-shrink-0 bg-gray-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-contain"
                    sizes="88px"
                  />
                </div>

                {/* Name | Role */}
                <p className="text-sm md:text-sm lg:text-base font-bold text-gray-900 text-center mt-3 md:mt-3 lg:mt-4">
                  {testimonial.name} | {testimonial.role}
                </p>

                {/* Quote - always visible on middle/active, GSAP for others */}
                <div className="mt-2 md:mt-2 lg:mt-3 min-h-[4.5rem] w-full overflow-hidden flex justify-center">
                  <p
                    ref={(el) => {
                      quoteRefs.current[index] = el;
                    }}
                    className="text-sm md:text-[13px] lg:text-sm italic text-gray-700 text-center leading-relaxed max-w-[420px]"
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons - stacked on mobile */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 md:gap-3 lg:gap-4 justify-center items-center">
          <Button
            href={APP_STORE_URL}
            useDownloadButton={true}
          >
            Download Now
          </Button>
          <Button href={undefined} variant="outline" size="md" onClick={openBetaSignup}>
            Join As Beta Tester
          </Button>
        </div>
      </div>
    </section>
  );
}
