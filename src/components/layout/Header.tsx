"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "@memoli/components/ui/Button";
import MobileNav from "@memoli/components/layout/MobileNav";
import { NAV_LINKS, APP_STORE_URL } from "@memoli/utils/constants";

export default function Header() {
  const pathname = usePathname();

  return (
    <>
      {/* Transparent wrapper: no background so padding area shows page; nav has glass */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full shrink-0 px-4 md:px-6 lg:px-8 pt-2 pb-2 md:pt-3 md:pb-3 lg:pt-4 lg:pb-4">
        <nav
          className="memoli-header-glass mx-auto max-w-[1200px] rounded-2xl lg:rounded-3xl px-4 py-3 md:px-10 md:py-4 lg:px-14 flex items-center gap-4 md:gap-8 lg:gap-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex-shrink-0 flex items-center md:flex-none h-7 md:h-auto"
          aria-label="Memoli home"
        >
          <Image
            src="/image/brand/memoli.webp"
            alt="Memoli"
            width={117}
            height={40}
            className="h-7 md:h-auto w-auto object-contain object-left"
            priority
            sizes="117px"
          />
        </Link>

        {/* Spacer: pushes nav (desktop) / menu icon (mobile) to the right */}
        <div className="flex-1 min-w-0" aria-hidden="true" />

        {/* Desktop/Tablet: design tokens – tablet 18px, desktop 20px */}
        <div className="hidden md:flex items-center gap-8 flex-shrink-0">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base lg:text-lg whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-memoli-accent focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded px-6 py-2 min-h-[44px] flex items-center transition-colors duration-200 ${
                  isActive
                    ? "text-memoli-accent font-bold underline decoration-2 decoration-memoli-accent underline-offset-4"
                    : "text-memoli-dark font-medium hover:text-memoli-accent"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            href={APP_STORE_URL}
            useDownloadButton={true}
            aria-label="Download Memoli from App Store"
            className="flex-shrink-0"
          >
            Download Now
          </Button>
        </div>

        {/* Mobile: Hamburger on the right (Download is inside popup) */}
        <div className="md:hidden flex-shrink-0 flex justify-end">
          <MobileNav appStoreUrl={APP_STORE_URL} />
        </div>
      </nav>
    </header>
      {/* Spacer: same padding-top as header so scroll keeps consistent top spacing */}
      <div
        className="w-full shrink-0 pt-2 pb-2 md:pt-3 md:pb-3 lg:pt-4 lg:pb-4 px-4 md:px-6 lg:px-8"
        aria-hidden="true"
      >
        <div className="mx-auto max-w-[1200px] h-10 md:h-12 lg:h-14 rounded-2xl lg:rounded-3xl" />
      </div>
    </>
  );
}
