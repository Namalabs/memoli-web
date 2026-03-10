"use client";

import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@memoli/utils/constants";
import { useFadeIn, useStaggerChildren } from "@memoli/hooks/useGSAP";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const gridRef = useStaggerChildren({ y: 20, duration: 0.6, stagger: 0.1, start: "top bottom" });
  const copyrightRef = useFadeIn({ y: 10, duration: 0.5, start: "top bottom" });

  const linkClass =
    "text-sm text-slate-700 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white rounded px-1 py-0.5";

  return (
    <footer
      className="bg-[#F2F7FF] text-slate-800 overflow-hidden"
      role="contentinfo"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
        {/* Footer heading - Memoli by NamaLabs (mobile), image asset */}
        <div className="mb-6 md:hidden">
          <Link href="/" className="inline-block" aria-label="Memoli home">
            <Image
              src="/image/brand/memoli_full.png"
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
            <Link href="/" className="hidden md:inline-block mb-4" aria-label="Memoli home">
              <Image
                src="/image/brand/memoli_full.png"
                alt="Memoli"
                width={316}
                height={38}
                className="h-6 lg:h-7 w-auto object-contain object-left"
              />
            </Link>
            <ul className="space-y-2">
              <li>
                <Link href="https://testflight.apple.com/join/5sRkNqY1" target="_blank" rel="noopener noreferrer" className={linkClass}>
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
            <h3 className="text-sm lg:text-base font-bold text-slate-800 mb-3 md:mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className={linkClass}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="sr-only md:not-sr-only text-sm lg:text-base font-bold text-slate-800 mb-3 md:mb-4">
              Socials
            </h3>
            <div className="flex gap-3 md:gap-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain brightness-0"
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
          className="text-center text-slate-600 text-xs"
          suppressHydrationWarning
        >
          © {currentYear} Memoli by NamaLabs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
