"use client";

import { useEffect, useRef, RefObject } from "react";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])';

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true"
  );
}

/**
 * Traps focus inside the given container and restores focus to the previously
 * focused element when the trap is released. Use for modals and dialogs.
 */
export function useFocusTrap(
  isActive: boolean,
  containerRef: RefObject<HTMLElement | null>
) {
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;
    const focusable = getFocusableElements(container);

    if (focusable.length === 0) return;

    // Save the element that had focus when the modal opened
    previousActiveElement.current =
      (document.activeElement as HTMLElement) ?? null;

    // Focus first focusable
    focusable[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
      previousActiveElement.current?.focus();
      previousActiveElement.current = null;
    };
  }, [isActive, containerRef]);
}
