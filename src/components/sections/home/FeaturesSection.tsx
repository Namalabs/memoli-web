"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFadeIn } from "@memoli/hooks/useGSAP";
import { FEATURES } from "@memoli/utils/constants";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

const LOTTIE_ASPECT = 16 / 9;
const ANIM_BOX_CLASS =
  "relative w-full max-w-[320px] md:max-w-[280px] lg:max-w-[400px] aspect-[16/9] min-h-[160px] flex items-center justify-center rounded-2xl overflow-hidden bg-gray-50/50 min-w-0";

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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // On mobile, prefer fallback image to avoid heavy Lottie load (audit: "Load time lama banget pas di hp" → use lighter asset)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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

  // If Lottie URL returns 404 (e.g. excluded from deploy for size), show fallback image. Skip fetch on mobile (use static image).
  useEffect(() => {
    if (!shouldPlay || isMobile) return;
    fetch(animationPath, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) setUseFallback(true);
      })
      .catch(() => setUseFallback(true));
  }, [shouldPlay, animationPath, isMobile]);

  if (!shouldPlay) {
    return (
      <div
        ref={containerRef}
        className={`w-full max-w-[320px] md:max-w-[280px] lg:max-w-[400px] aspect-[16/9] min-h-[160px] min-w-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl`}
        style={{ aspectRatio: LOTTIE_ASPECT }}
      />
    );
  }

  const content =
    isMobile || useFallback ? (
      <FallbackImage src={fallbackImage} />
    ) : (
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
    );

  return (
    <div ref={containerRef} className={ANIM_BOX_CLASS} style={{ aspectRatio: LOTTIE_ASPECT }}>
      {content}
    </div>
  );
}

export default function FeaturesSection() {
  const headingRef = useFadeIn({ y: 25, duration: 0.7 });
  const blocksRef = useRef<HTMLDivElement>(null);

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
    <section className="bg-memoli-light">
      <div className="max-w-[1280px] mx-auto py-[88px] px-10 md:py-[88px] md:px-[88px] lg:py-[104px] lg:px-16">
        {/* Section heading – audit: 48/40/24px #3C7CF7 Bold */}
        <h2
          ref={headingRef}
          className="text-[#3C7CF7] font-bold mb-10 md:mb-12 lg:mb-16 text-2xl md:text-[40px] lg:text-[48px]"
        >
          Mindful Assistant for Modern Living
        </h2>

        <div ref={blocksRef} className="space-y-14 md:space-y-16 lg:space-y-24">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              data-feature
              data-direction={feature.reversed ? "right" : "left"}
              className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-10 lg:gap-16 ${
                feature.reversed ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:flex-1">
                <h3 className="text-[#3C7CF7] font-bold text-xl md:text-[32px] lg:text-[40px] mb-2 md:mb-3 lg:mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#152B56] font-medium leading-relaxed text-base md:text-2xl lg:text-[28px]">
                  {feature.description}
                </p>
              </div>
              <div className="md:flex-1 flex justify-center min-w-0">
                <FeatureAnimation
                  animationPath={feature.animation}
                  fallbackImage={feature.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
