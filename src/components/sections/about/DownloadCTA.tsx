"use client";

import Button from "@memoli/components/ui/Button";
import { useFadeIn } from "@memoli/hooks/useGSAP";
import { APP_STORE_URL } from "@memoli/utils/constants";

export default function DownloadCTA() {
  const sectionRef = useFadeIn({ y: 30, duration: 0.8 });

  return (
    <section className="bg-memoli-light">
      <div ref={sectionRef} className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 text-center">
        <p className="text-memoli-dark text-sm md:text-sm lg:text-base leading-relaxed max-w-[600px] mx-auto mb-8 md:mb-8 lg:mb-10">
          Memoli tracks shelf-life and verifies ingredients, serving as a
          mindful companion for your family&apos;s daily essentials. Download
          now and start your journey toward a healthier, waste-free home.
        </p>

        <Button
          href={APP_STORE_URL}
          useDownloadButton={true}
        >
          Download Now
        </Button>
      </div>
    </section>
  );
}
