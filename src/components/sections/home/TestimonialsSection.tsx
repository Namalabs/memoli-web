"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Button from "@memoli/components/ui/Button";
import { TESTIMONIALS } from "@memoli/utils/constants";
import { useBetaSignup } from "@memoli/contexts/BetaSignupContext";
import { useFadeIn, useStaggerChildren } from "@memoli/hooks/useGSAP";
import { APP_STORE_URL } from "@memoli/utils/constants";
import gsap from "gsap";

const DURATION = 0.4;
const EASE = "power2.out";

export default function TestimonialsSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const headingRef = useFadeIn({ y: 20, duration: 1, ease: "power3.out", enabled: isDesktop });
  const cardsRef = useStaggerChildren({ y: 30, duration: 0.6, stagger: 0.15, enabled: isDesktop });
  const ctaRef = useFadeIn({ y: 20, duration: 0.6, enabled: isDesktop });
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quoteRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const hasAnimated = useRef(false);
  const [activeIndex, setActiveIndex] = useState(1);
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
      const isExpandedDesktop = isDesktop && isActive;
      // Mobile: no animation, show all cards and all quotes
      const quoteVisible = isDesktop ? isExpandedDesktop : true;
      const state = isDesktop
        ? {
            scale: 1,
            opacity: 1,
            boxShadow: isExpandedDesktop
              ? "0 8px 30px rgba(21,43,86,0.08)"
              : "0 4px 20px rgba(21,43,86,0.06)",
          }
        : {
            scale: 1,
            opacity: 1,
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
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
    <section className="bg-memoli-light">
      <div className="max-w-[1280px] mx-auto px-[40px] py-[88px] md:px-[88px] md:py-[88px] lg:px-16 lg:py-[104px]">
        {/* Headings – Figma: heading dark blue bold center; subtitle smaller lighter gray center */}
        <div ref={headingRef}>
          <h2 className="text-memoli-accent font-bold text-2xl md:text-[34px] lg:text-[40px] text-center mb-2 md:mb-3">
            Voices from Our Community
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base lg:text-lg text-center mb-8 md:mb-12 lg:mb-16">
            What Our Beta Testers Are Saying
          </p>
        </div>

        {/* Testimonial Cards – fixed min-height to prevent jitter when hovering/expanding */}
        <div
          ref={cardsRef}
          className="flex flex-col md:flex-row items-end lg:items-end gap-6 md:gap-4 lg:gap-6 mb-10 md:mb-12 lg:mb-16 min-h-[300px] md:min-h-[320px] lg:min-h-[360px]"
        >
          {TESTIMONIALS.map((testimonial, index) => {
            const isActive = index === activeIndex;
            /* Desktop: only active card expanded; mobile: all cards same, all quotes visible */
            const isExpanded = isDesktop ? isActive : true;
            const showQuote = isDesktop ? isExpanded : true;

            return (
              <div
                key={testimonial.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`flex flex-col items-center w-full rounded-3xl border border-transparent cursor-default bg-memoli-section-bg overflow-visible pt-12 p-6 transition-all duration-300 ease-out ${
                  isExpanded
                    ? "md:pb-8 md:px-6 lg:px-8 md:flex-[1.35] lg:flex-[1.4] shadow-lg md:shadow-[0_8px_30px_rgba(21,43,86,0.08)]"
                    : `md:pb-6 md:px-4 lg:px-5 md:flex-1 ${isDesktop ? "md:shadow-[0_4px_20px_rgba(21,43,86,0.06)]" : "shadow-sm"}`
                }`}
                style={{ transformOrigin: "center center" }}
                onMouseEnter={() => isDesktop && setActiveIndex(index)}
                onMouseLeave={() => isDesktop && setActiveIndex(1)}
              >
                {/* Photo – overlaps top of card (Figma) */}
                <div className="relative w-20 h-20 lg:w-[88px] lg:h-[88px] rounded-full overflow-hidden shadow-lg flex-shrink-0 bg-white -mt-10 ring-4 ring-memoli-section-bg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="88px"
                  />
                </div>

                {/* Name – 18px Bold #152B56 */}
                <p className="text-base font-bold text-memoli-dark text-center mt-3">
                  {testimonial.name}
                </p>
                {/* Role – smaller lighter gray */}
                <p className="text-sm text-gray-500 font-medium text-center mt-0.5">
                  {testimonial.role}
                </p>

                {/* Quote – 18px Medium #152B56; desktop: only center card shows quote */}
                <div className="mt-3 min-h-[3.5rem] w-full overflow-hidden flex justify-center">
                  <p
                    ref={(el) => {
                      quoteRefs.current[index] = el;
                    }}
                    className="text-base font-medium text-memoli-dark text-center leading-relaxed max-w-[340px] not-italic"
                  >
                    {showQuote ? (
                      <>
                        &ldquo;{testimonial.quote}&rdquo;
                      </>
                    ) : null}
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
          <Button href={''} variant="outline" size="lg" onClick={openBetaSignup}>
            &nbsp;Join As Beta Tester&nbsp;
          </Button>
        </div>
      </div>
    </section>
  );
}
