"use client";

import Image from "next/image";
import { useFadeIn, useStaggerChildren } from "@memoli/hooks/useGSAP";
import { useBetaSignup } from "@memoli/contexts/BetaSignupContext";
import { COLLABORATORS } from "@memoli/utils/constants";

export default function CollaboratorsSection() {
  const { open: openBetaSignup } = useBetaSignup();

  const headerRef = useFadeIn({ y: 25, duration: 0.7 });
  const logosRef = useStaggerChildren({ y: 20, duration: 0.5, stagger: 0.08 });

  return (
    <section className="group bg-memoli-section-bg" aria-labelledby="collaborators-heading">
      <div className="max-w-[1280px] mx-auto px-[40px] py-[88px] md:px-[88px] md:py-[88px] lg:px-16 lg:py-[104px]">
        <header ref={headerRef} className="mb-8 md:mb-10">
          <h2 id="collaborators-heading" className="text-memoli-accent font-bold text-2xl md:text-[40px] lg:text-[48px] mb-3">
            Our Partners
          </h2>
          <p className="text-memoli-dark font-medium leading-relaxed max-w-[640px] text-base md:text-2xl lg:text-[28px]">
            We are proud to collaborate with entity of innovation that share our
            vision for a safer, waste-free lifestyle.
          </p>
        </header>

        {/* Mobile: marquee (repeated icons) + Join sticky right. Desktop: single row, bigger icons. */}
        <div ref={logosRef} className="flex overflow-hidden lg:overflow-visible items-center">
          {/* Mobile: scrolling marquee with duplicated logos */}
          <div className="flex-1 min-w-0 overflow-hidden lg:hidden">
            <div className="flex items-center gap-6 collaborators-marquee w-max">
              {[...COLLABORATORS, ...COLLABORATORS].map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="group/logo w-20 h-20 flex-shrink-0 flex items-center justify-center overflow-hidden relative"
                >
                  <Image
                    src={c.logo}
                    alt={i < COLLABORATORS.length ? c.label : ""}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain grayscale transition-opacity duration-300 group-hover/logo:opacity-0"
                    sizes="80px"
                  />
                  <Image
                    src={c.logoHover}
                    alt=""
                    width={80}
                    height={80}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100"
                    sizes="80px"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: Join sticky on the right */}
          <div className="relative flex-shrink-0 pl-4 lg:hidden">
            <div className="absolute right-full top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-memoli-section-bg pointer-events-none" aria-hidden />
            <button
              type="button"
              onClick={openBetaSignup}
              className="memoli-join-btn relative z-10 w-20 h-20 bg-memoli-primary hover:bg-memoli-primary-hover text-memoli-surface font-semibold text-[10px] text-center leading-tight flex items-center justify-center p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-memoli-primary focus:ring-offset-2 focus:ring-offset-memoli-section-bg"
              aria-label="Join our journey"
            >
              Join Our Journey &gt;
            </button>
          </div>
          {/* Desktop: single row, bigger icons, full width */}
          <div className="hidden lg:flex flex-1 items-center justify-between gap-4 flex-nowrap">
            {COLLABORATORS.map((c) => (
              <div
                key={c.name}
                className="group/logo flex-1 min-w-0 max-w-[11rem] aspect-square flex items-center justify-center overflow-hidden relative"
              >
                <Image
                  src={c.logo}
                  alt={c.label}
                  width={176}
                  height={176}
                  className="w-full h-full object-contain grayscale transition-opacity duration-300 group-hover/logo:opacity-0"
                  sizes="176px"
                />
                <Image
                  src={c.logoHover}
                  alt=""
                  width={176}
                  height={176}
                  className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100"
                  sizes="176px"
                  aria-hidden
                />
              </div>
            ))}
            <button
              type="button"
              onClick={openBetaSignup}
              className="memoli-join-btn flex-1 min-w-0 max-w-[11rem] aspect-square bg-memoli-primary hover:bg-memoli-primary-hover text-memoli-surface font-semibold text-sm text-center leading-tight flex items-center justify-center p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-memoli-primary focus:ring-offset-2 focus:ring-offset-memoli-section-bg"
              aria-label="Join our journey"
            >
              Join Our Journey &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
