"use client";

import Image from "next/image";
import Button from "@memoli/components/ui/Button";
import { useSlideIn } from "@memoli/hooks/useGSAP";
import { useBetaSignup } from "@memoli/contexts/BetaSignupContext";

const APP_STORE_URL = "https://testflight.apple.com/join/5sRkNqY1";

export default function HeroSection() {
  const textRef = useSlideIn("left", { distance: 50, duration: 0.9 });
  const phoneRef = useSlideIn("right", { distance: 50, duration: 0.9, delay: 0.15 });
  const { open: openBetaSignup } = useBetaSignup();

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* Mobile: stacked (image top, text below) / Desktop: side-by-side */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12">
          {/* Phone Mockup - shown first on mobile, second on desktop */}
          <div ref={phoneRef} className="flex justify-center items-center md:order-2 md:flex-1 min-w-0">
            {/* scanner.png — original hero asset; replace with hero-phone when Figma export is ready */}
            <div className="relative w-[280px] md:w-[320px] lg:w-[380px] aspect-[712/688] shrink-0">
              <Image
                src="/animations/scanner.png"
                alt="Memoli app scanner"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                priority
              />
            </div>
          </div>

          {/* Text content - shown second on mobile, first on desktop */}
          <div ref={textRef} className="md:order-1 md:flex-1">
            <h1>
              <span className="block text-blue-600 text-lg md:text-3xl lg:text-[40px] font-bold">
                Smart Scanning
              </span>
              <span className="block text-gray-900 font-bold text-2xl md:text-4xl lg:text-[48px] leading-tight">
                For Sustainability
              </span>
            </h1>

            <p className="mt-4 md:mt-4 lg:mt-6 text-gray-600 text-sm md:text-sm lg:text-base leading-relaxed max-w-[500px]">
              Memoli tracks shelf-life and verifies ingredients, serving as a
              mindful companion for your family&apos;s daily essentials.
            </p>

            {/* CTA Buttons - stacked on mobile */}
            <div className="mt-6 md:mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3 md:gap-3 lg:gap-4">
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
        </div>
      </div>
    </section>
  );
}
