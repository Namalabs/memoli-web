"use client";

import Header from "@memoli/components/layout/Header";
import Footer from "@memoli/components/layout/Footer";
import { BetaSignupProvider, useBetaSignup } from "@memoli/contexts/BetaSignupContext";
import BetaSignupPopup from "@memoli/components/beta/BetaSignupPopup";

function BetaSignupPopupGate() {
  const { isOpen, close } = useBetaSignup();
  return <BetaSignupPopup isOpen={isOpen} onClose={close} />;
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BetaSignupProvider>
      <Header />
      {children}
      <Footer />
      <BetaSignupPopupGate />
    </BetaSignupProvider>
  );
}
