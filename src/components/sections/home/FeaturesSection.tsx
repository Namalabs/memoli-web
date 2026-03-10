"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFadeIn } from "@memoli/hooks/useGSAP";
import dynamic from "next/dynamic";

/** Supports both .json and .lottie (smaller, compressed). Optimise with: npm run lottie:optimize */
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

/** All Lottie files use 5120×2880 (16:9) – match container to avoid cropping */
const LOTTIE_ASPECT = 16 / 9;

/** Use .lottie (ZIP-compressed) for smaller transfer. Generate with: npm run lottie:optimize */
const ANIMATION_PATHS = [
  "/animations/scan.lottie",
  "/animations/expiry.lottie",
  "/animations/ingredients.lottie",
  "/animations/fam.lottie",
];

/** Fallback images when Lottie is missing (e.g. deploy without large assets to stay under 10MB). */
const FALLBACK_IMAGES = [
  "/animations/scanner.png",
  "/animations/notification.png",
  "/animations/detail.png",
  "/animations/scanner.png",
];

function FallbackImage({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200"
        aria-hidden
      />
    );
  }
  return (
    <img
      src={src}
      alt=""
      className="w-full h-full object-contain rounded-2xl"
      onError={() => setFailed(true)}
    />
  );
}

function FeatureAnimation({
  animationPath,
  fallbackImage,
}: {
  animationPath: string;
  fallbackImage: string;
}) {
  const [shouldPlay, setShouldPlay] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy load: only load animation when in view (reduces initial payload)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        setShouldPlay(true);
      },
      { rootMargin: "50px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // If Lottie URL returns 404 (e.g. excluded from deploy for size), show fallback image
  useEffect(() => {
    if (!shouldPlay) return;
    fetch(animationPath, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setUseFallback(true);
      })
      .catch(() => setUseFallback(true));
  }, [shouldPlay, animationPath]);

  const placeholder = (
    <div
      ref={containerRef}
      className="w-full max-w-[320px] md:max-w-[280px] lg:max-w-[400px] aspect-[16/9] min-h-[160px] min-w-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl"
      style={{ aspectRatio: LOTTIE_ASPECT }}
    />
  );

  if (!shouldPlay) {
    return placeholder;
  }

  if (useFallback) {
    return (
      <div
        ref={containerRef}
        className="relative w-full max-w-[320px] md:max-w-[280px] lg:max-w-[400px] aspect-[16/9] min-h-[160px] flex items-center justify-center rounded-2xl overflow-hidden bg-gray-50/50 min-w-0"
        style={{ aspectRatio: LOTTIE_ASPECT }}
      >
        <FallbackImage src={fallbackImage} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[320px] md:max-w-[280px] lg:max-w-[400px] aspect-[16/9] min-h-[160px] flex items-center justify-center rounded-2xl overflow-hidden bg-gray-50/50 min-w-0"
      style={{ aspectRatio: LOTTIE_ASPECT }}
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl">
        <DotLottieReact
          src={animationPath}
          loop
          autoplay
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
          renderConfig={{ autoResize: true }}
        />
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const headingRef = useFadeIn({ y: 25, duration: 0.7 });
  const blocksRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Smart Scan, Zero Effort",
      description:
        "Skip manual typing; use on-device vision to digitize your household inventory instantly by taking a single, quick product label scan.",
      reversed: false,
    },
    {
      title: "Proactive Expiry Tracker",
      description:
        "Prevent forgotten, expired products with automated alerts sent before \"use-by\" dates to keep families healthy while saving budgets and the planet.",
      reversed: true,
    },
    {
      title: "Ingredient Safety Guard",
      description:
        "Gain instant label insights as our checker verifies ingredients against safety standards, helping you choose \"healthier\" household items with confidence.",
      reversed: false,
    },
    {
      title: "Family Synchronization",
      description:
        "Stay perfectly aligned with a shared shelf-view that syncs inventory with your family member so everyone knows what is in-stock.",
      reversed: true,
    },
  ];

  useEffect(() => {
    const container = blocksRef.current;
    if (!container) return;

    const blocks = container.querySelectorAll<HTMLElement>("[data-feature]");
    const triggers: ScrollTrigger[] = [];

    blocks.forEach((block) => {
      const dir = block.dataset.direction;
      const x = dir === "right" ? 50 : -50;

      gsap.set(block, { opacity: 0, x });

      const trigger = ScrollTrigger.create({
        trigger: block,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(block, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          });
        },
      });

      triggers.push(trigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* Section heading - centered per Figma */}
        <h2 ref={headingRef} className="text-gray-900 font-bold text-xl md:text-[26px] lg:text-[32px] mb-10 md:mb-12 lg:mb-16 text-center">
          Mindful Assistant for Modern Living
        </h2>

        {/* Feature blocks */}
        <div ref={blocksRef} className="space-y-14 md:space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              data-feature
              data-direction={feature.reversed ? "right" : "left"}
              className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-10 lg:gap-16 ${
                feature.reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text column */}
              <div className="md:flex-1">
                <h3 className="text-blue-600 font-bold text-base md:text-lg lg:text-[22px] mb-2 md:mb-3 lg:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-[13px] lg:text-[15px]">
                  {feature.description}
                </p>
              </div>

              {/* Lottie animation column (fallback image if .lottie missing for smaller deploy) */}
              <div className="md:flex-1 flex justify-center min-w-0">
                <FeatureAnimation
                  animationPath={ANIMATION_PATHS[index]}
                  fallbackImage={FALLBACK_IMAGES[index]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
