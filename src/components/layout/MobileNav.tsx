"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, APP_STORE_URL } from "@memoli/utils/constants";
import Button from "@memoli/components/ui/Button";

function MenuOverlay({
  onClose,
  closeButtonRef,
  pathname,
  appStoreUrl,
}: {
  onClose: () => void;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
  pathname: string;
  appStoreUrl: string;
}) {
  return (
    <div className="mobile-menu-portal">
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
        style={{ animation: "menuFadeIn 200ms ease-out" }}
      />

      {/* Menu Panel */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-[9999] flex flex-col bg-memoli-light"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{ animation: "menuSlideIn 300ms ease-out" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
          style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
        >
          <h2 className="text-lg font-bold text-memoli-dark">Navigation</h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 rounded-2xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-memoli-accent transition-colors text-memoli-dark"
            aria-label="Close menu"
          >
            <img src="/image/icons/close.svg" alt="" className="w-6 h-6" aria-hidden />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium transition-all min-h-[52px] ${
                  isActive
                    ? "bg-memoli-active-bg text-memoli-accent border border-[var(--memoli-border-tint)]"
                    : "text-memoli-dark hover:bg-gray-50 active:bg-gray-100"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <img
                    src={
                      link.href === "/"
                        ? "/image/icons/home.svg"
                        : link.href === "/about"
                          ? "/image/icons/about.svg"
                          : link.href === "/blog"
                            ? "/image/icons/blog.svg"
                            : "/image/icons/about.svg"
                    }
                    alt=""
                    className="w-5 h-5"
                    aria-hidden
                  />
                </div>
                <span className="text-base">{link.label}</span>
              </Link>
            );
          })}

          {/* Download button inside popup */}
          <div className="pt-4">
            <Button
              href={appStoreUrl}
              useDownloadButton={true}
              aria-label="Download Memoli from App Store"
              className="w-full justify-center"
            >
              Download Now
            </Button>
          </div>
        </nav>

        {/* Footer */}
        <div
          className="border-t border-gray-100 px-6 py-4 text-center text-sm text-gray-400"
          style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
        >
          <p suppressHydrationWarning>© {new Date().getFullYear()} Memoli. All rights reserved.</p>
        </div>
      </div>

      {/* Scoped animation styles */}
      <style>{`
        @keyframes menuFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes menuSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function MobileNav({ appStoreUrl = APP_STORE_URL }: { appStoreUrl?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Ensure portal only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll, manage focus, handle ESC key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeMenu();
      };
      document.addEventListener("keydown", handleEscape);

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);

  return (
    <>
      {/* Menu button – public SVG assets (Heroicons-style) */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex w-10 h-10 items-center justify-center rounded-2xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-memoli-accent focus:ring-offset-2 transition-colors text-memoli-dark"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? (
          <img src="/image/icons/close.svg" alt="" className="w-6 h-6" aria-hidden />
        ) : (
          <img src="/image/icons/menu.svg" alt="" className="w-6 h-6" aria-hidden />
        )}
      </button>

      {/* Portal: render overlay outside header DOM to escape stacking context */}
      {mounted &&
        isOpen &&
        createPortal(
          <MenuOverlay
            onClose={closeMenu}
            closeButtonRef={closeButtonRef}
            pathname={pathname}
            appStoreUrl={appStoreUrl}
          />,
          document.body
        )}
    </>
  );
}
