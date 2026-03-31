"use client";

import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS, APP_STORE_URL } from "@memoli/utils/constants";
import { useFadeIn, useStaggerChildren } from "@memoli/hooks/useGSAP";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const gridRef = useStaggerChildren({ y: 20, duration: 0.6, stagger: 0.1, start: "top bottom" });
  const copyrightRef = useFadeIn({ y: 10, duration: 0.5, start: "top bottom" });

  const linkClass =
    "text-sm text-memoli-dark hover:text-memoli-dark/90 transition-colors focus:outline-none focus:ring-2 focus:ring-memoli-primary focus:ring-offset-2 focus:ring-offset-memoli-light rounded px-1 py-0.5";

  return (
    <footer
      className="bg-memoli-section-bg text-memoli-dark overflow-hidden rounded-t-[36px] md:rounded-t-[88px]"
      role="contentinfo"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* Footer heading - Memoli by NamaLabs (mobile), image asset */}
        <div className="mb-6 md:hidden">
          <Link href="/" className="inline-block" aria-label="Memoli home">
            <Image
              src="/image/brand/memoli_full.webp"
              alt="Memoli by NamaLabs"
              width={316}
              height={38}
              className="h-8 w-auto object-contain object-left"
            />
          </Link>
        </div>

        {/* Footer Grid - single column on mobile, 3 columns on md+ */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-8">
          {/* Column 1: Memoli - image asset */}
          <div>
            <Link href="/" className="hidden md:inline-block mb-3" aria-label="Memoli home">
              <Image
                src="/image/brand/memoli_full.webp"
                alt="Memoli"
                width={316}
                height={38}
                className="h-6 lg:h-7 w-auto object-contain object-left"
              />
            </Link>
            <ul className="space-y-2">
              <li>
                <Link href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  Download App
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkClass}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@memoli.app" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-sm lg:text-base font-bold text-memoli-dark mb-3 md:mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="sr-only md:not-sr-only text-sm lg:text-base font-bold text-memoli-dark mb-3 md:mb-4">
              Socials
            </h3>
            <div className="flex gap-3 md:gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-2xl flex items-center justify-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#4C7BEF] focus:ring-offset-2 focus:ring-offset-memoli-light"
                  aria-label={social.label}
                  title={social.label}
                >
                  <span
                    className="w-5 h-5 flex-shrink-0 bg-[#4C7BEF] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-size:contain] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center]"
                    style={{
                      maskImage: `url(${social.icon})`,
                      WebkitMaskImage: `url(${social.icon})`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider - subtle separation above copyright */}
        <div className="border-t border-slate-300/60 my-6 md:my-8 lg:my-10" />

        {/* Copyright - very small, dark blue/black; suppressHydrationWarning for year */}
        <div
          ref={copyrightRef}
          className="text-center text-memoli-dark/80 text-xs"
          suppressHydrationWarning
        >
          © {currentYear} Memoli by NamaLabs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
