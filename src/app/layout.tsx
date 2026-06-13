"use client";

import Header from "@memoli/components/layout/Header";
import Footer from "@memoli/components/layout/Footer";
import { BetaSignupProvider, useBetaSignup } from "@memoli/contexts/BetaSignupContext";
import BetaSignupPopup from "@memoli/components/beta/BetaSignupPopup";
import "./globals.css";

function BetaSignupPopupGate() {
  const { isOpen, close } = useBetaSignup();
  return <BetaSignupPopup isOpen={isOpen} onClose={close} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = "https://memoli.app";
  const ogImage = "https://memoli.app/image/brand/memoli_full.webp";

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563EB" />

        {/* Primary Meta Tags */}
        <title>Memoli - Smart Scanning for Sustainability</title>
        <meta
          name="description"
          content="Memoli is an iOS app that helps you manage your household inventory with smart scanning, expiry tracking, and family synchronization."
        />
        <meta name="keywords" content="household inventory, expiry tracking, family app, smart scanning, sustainability" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Memoli - Smart Scanning for Sustainability" />
        <meta
          property="og:description"
          content="Manage your household inventory with smart scanning, expiry tracking, and family synchronization."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content="Memoli - Smart Scanning for Sustainability" />
        <meta
          property="twitter:description"
          content="Manage your household inventory with smart scanning, expiry tracking, and family synchronization."
        />
        <meta property="twitter:image" content={ogImage} />

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased font-sans bg-memoli-light text-memoli-dark m-0 p-0">
        <BetaSignupProvider>
          <Header />
          {children}
          <Footer />
          <BetaSignupPopupGate />
        </BetaSignupProvider>
      </body>
    </html>
  );
}
