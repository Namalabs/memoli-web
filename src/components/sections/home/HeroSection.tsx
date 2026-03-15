"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import Button from "@memoli/components/ui/Button";
import { useSlideIn } from "@memoli/hooks/useGSAP";
import { useBetaSignup } from "@memoli/contexts/BetaSignupContext";
import { APP_STORE_URL } from "@memoli/utils/constants";

const ROTATING_PHRASES = [
  "Smart Scanning",
  "Mindful Tracking",
  "Protect Family",
  "Spend Wisely",
] as const;

const SLIDE_DURATION = 0.9;
const HOLD_DURATION = 2.0; // seconds each phrase is visible before transitioning to next

export default function HeroSection() {
  const textRef = useSlideIn("left", { distance: 50, duration: 0.9 });
  const phoneRef = useSlideIn("right", { distance: 50, duration: 0.9, delay: 0.15 });
  const { open: openBetaSignup } = useBetaSignup();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const listRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<HTMLSpanElement>(null);

  // Vertical slider: seamless loop — duplicate first phrase at end, then reset position when it’s visible
  const slidePhrases = [...ROTATING_PHRASES, ROTATING_PHRASES[0]];

  useEffect(() => {
    const list = listRef.current;
    const frame = frameRef.current;
    if (!list || !frame) return;

    const slides = list.querySelectorAll<HTMLElement>("[data-v-slide]");
    if (slides.length === 0) return;

    const lineHeight = Math.round(slides[0].offsetHeight);
    if (!lineHeight) return;

    // Match frame height exactly to one slide so only one phrase is visible (no partial overlap)
    frame.style.height = `${lineHeight}px`;

    gsap.set(list, { y: 0 });

    const tl = gsap.timeline({ repeat: -1 });
    // For each phrase: hold for HOLD_DURATION, then transition to next
    for (let i = 1; i < slidePhrases.length; i++) {
      const index = i;
      const isLast = index === slidePhrases.length - 1;
      tl.to(
        list,
        {
          duration: SLIDE_DURATION,
          delay: HOLD_DURATION,
          y: -index * lineHeight,
          ease: "power2.inOut",
          onComplete: () => {
            setPhraseIndex(isLast ? 0 : index);
            if (isLast) {
              gsap.set(list, { y: 0 });
            }
          },
        },
        ">"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="hero-section bg-memoli-light">
      {/* Audit: Desktop py-14 px-16, Tablet py-[104px] px-[88px], Mobile py-[72px] px-10 */}
      <div className="max-w-[1280px] mx-auto px-10 py-[72px] md:px-[88px] md:py-[104px] lg:px-16 lg:py-40">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12">
          {/* Phone mockup – audit: increase size (was too small); prefer .webp for load time */}
          <div ref={phoneRef} className="flex justify-center items-center md:order-2 md:flex-1 min-w-0">
            {/* Audit: larger size; use scanner.webp for better load time */}
            <div className="relative w-[320px] md:w-[400px] lg:w-[480px] aspect-[712/688] shrink-0">
              <Image
                src="/animations/scanner.webp"
                alt="Memoli app scanner"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 480px"
                priority
              />
            </div>
          </div>

          <div ref={textRef} className="md:order-1 md:flex-1">
            {/* Audit: Headings – Mobile 24px, Tablet 56px, Desktop 72px; Bold; Biru Muda + Biru Tua */}
            <h1>
              <span
                ref={frameRef}
                className="block overflow-hidden text-2xl md:text-[44px] lg:text-[48px]"
                style={{ minHeight: "1.2em" }}
                aria-live="polite"
                aria-label={ROTATING_PHRASES[phraseIndex]}
              >
                <span ref={listRef} className="block">
                  {slidePhrases.map((phrase, i) => (
                    <span
                      key={i === ROTATING_PHRASES.length ? `${phrase}-end` : phrase}
                      data-v-slide
                      className="block text-memoli-accent font-bold text-2xl md:text-[44px] lg:text-[48px] leading-tight whitespace-nowrap h-[1.3em] flex items-center shrink-0"
                    >
                      {phrase}
                    </span>
                  ))}
                </span>
              </span>
              <span className="block text-memoli-dark font-bold text-2xl md:text-[44px] lg:text-[48px] leading-tight break-words">
                For Sustainability
              </span>
            </h1>

            {/* Audit: Body – Mobile 16px, Tablet 24px, Desktop 28px; Medium; #152B56 */}
            <p className="mt-4 md:mt-4 lg:mt-6 text-memoli-dark font-medium text-base md:text-xl lg:text-[22px] leading-relaxed max-w-[500px] break-words">
              Memoli tracks <span className="whitespace-nowrap">shelf-life</span> and verifies ingredients, serving as a
              mindful companion for your family&apos;s daily essentials.
            </p>

            <div className="mt-6 md:mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 md:gap-3 lg:gap-4">
              <Button href={APP_STORE_URL} useDownloadButton={true}>
                Download Now
              </Button>
              <Button href={''} variant="outline" size="md" onClick={openBetaSignup}>
                &nbsp;Join As Beta Tester&nbsp;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
