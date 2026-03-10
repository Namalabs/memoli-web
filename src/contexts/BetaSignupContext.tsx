"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type BetaSignupContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const BetaSignupContext = createContext<BetaSignupContextValue | null>(null);

export function BetaSignupProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BetaSignupContext.Provider value={{ isOpen, open, close }}>
      {children}
    </BetaSignupContext.Provider>
  );
}

export function useBetaSignup() {
  const ctx = useContext(BetaSignupContext);
  if (!ctx) {
    throw new Error("useBetaSignup must be used within BetaSignupProvider");
  }
  return ctx;
}
