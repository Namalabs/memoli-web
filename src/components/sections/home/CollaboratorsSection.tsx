"use client";

import Image from "next/image";
import { useFadeIn, useStaggerChildren } from "@memoli/hooks/useGSAP";
import { useBetaSignup } from "@memoli/contexts/BetaSignupContext";

export default function CollaboratorsSection() {
  const { open: openBetaSignup } = useBetaSignup();
  const collaborators = [
    // { name: "Apple Developer Academy", label: "Apple Developer Academy", logo: "/image/logo/ADA.png" },
    // { name: "IA", label: "IA", logo: "/image/logo/IA.png" },
    { name: "Lunexia", label: "Lunexia", logo: "/image/logo/lunexia.png" },
    // { name: "WE WAW", label: "WE WAW", logo: "/image/logo/wewaw.png" },
    { name: "Lumina Consulting", label: "Lumina Consulting", logo: "/image/logo/lumina.png" },
  ];

  const headerRef = useFadeIn({ y: 25, duration: 0.7 });
  const logosRef = useStaggerChildren({ y: 20, duration: 0.5, stagger: 0.08 });

  return (
    <section className="bg-[#F2F7FF]" aria-labelledby="collaborators-heading">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        <header ref={headerRef} className="mb-8 md:mb-10">
          <h2 id="collaborators-heading" className="text-blue-600 font-bold text-xl md:text-[22px] lg:text-[28px] mb-3">
            Our Collaborators
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-[640px] text-sm md:text-[15px] lg:text-base">
            We are proud to collaborate with entity of innovation that share our
            vision for a safer, waste-free lifestyle.
          </p>
        </header>

        {/* Mobile: marquee (repeated icons) + Join sticky right. Desktop: single row, bigger icons. */}
        <div ref={logosRef} className="flex overflow-hidden lg:overflow-visible items-center">
          {/* Mobile: scrolling marquee with duplicated logos */}
          <div className="flex-1 min-w-0 overflow-hidden lg:hidden">
            <div className="flex items-center gap-6 collaborators-marquee w-max">
              {[...collaborators, ...collaborators].map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="w-20 h-20 flex-shrink-0 flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={c.logo}
                    alt={i < collaborators.length ? c.label : ""}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    sizes="80px"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Mobile: Join sticky on the right */}
          <div className="relative flex-shrink-0 pl-4 lg:hidden">
            <div className="absolute right-full top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-[#F2F7FF] pointer-events-none" aria-hidden />
            <button
              type="button"
              onClick={openBetaSignup}
              className="relative z-10 w-20 h-20 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[10px] text-center leading-tight flex items-center justify-center p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#F2F7FF]"
              aria-label="Join our journey"
            >
              Join Our Journey &gt;
            </button>
          </div>
          {/* Desktop: single row, bigger icons, full width */}
          <div className="hidden lg:flex flex-1 items-center justify-between gap-4 flex-nowrap">
            {collaborators.map((c) => (
              <div
                key={c.name}
                className="flex-1 min-w-0 max-w-[11rem] aspect-square flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={c.logo}
                  alt={c.label}
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                  sizes="176px"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={openBetaSignup}
              className="flex-1 min-w-0 max-w-[11rem] aspect-square rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm text-center leading-tight flex items-center justify-center p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#F2F7FF]"
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
