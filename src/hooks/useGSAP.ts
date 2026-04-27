"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade-in + slide-up animation triggered on scroll.
 * Attach the returned ref to a section wrapper.
 * Use start: "top bottom" so the animation runs when the element enters the viewport (reliable on short pages).
 */
export function useFadeIn(options?: {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  ease?: string;
  enabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { y = 40, duration = 0.8, delay = 0, start = "top 85%", ease = "power2.out", enabled = true } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!enabled) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(el, { opacity: 0, y });

    let ran = false;
    const runAnimation = () => {
      if (ran) return;
      ran = true;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: runAnimation,
    });

    const checkAlreadyInView = () => {
      ScrollTrigger.refresh();
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) runAnimation();
    };
    const raf = requestAnimationFrame(checkAlreadyInView);
    const t = setTimeout(checkAlreadyInView, 300);

    return () => {
      trigger.kill();
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [y, duration, delay, start, ease, enabled]);

  return ref;
}

/**
 * Stagger children of the container on scroll.
 * Each direct child (matching `childSelector`) fades in one after another.
 * Use start: "top bottom" so the animation runs when the element enters the viewport (reliable on short pages).
 */
export function useStaggerChildren(options?: {
  y?: number;
  duration?: number;
  stagger?: number;
  childSelector?: string;
  start?: string;
  enabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const {
    y = 30,
    duration = 0.6,
    stagger = 0.12,
    childSelector = ":scope > *",
    start = "top 85%",
    enabled = true,
  } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(childSelector);
    if (!children.length) return;

    if (!enabled) {
      gsap.set(children, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(children, { opacity: 0, y });

    let ran = false;
    const runAnimation = () => {
      if (ran) return;
      ran = true;
      gsap.to(children, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power2.out",
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: runAnimation,
    });

    const checkAlreadyInView = () => {
      ScrollTrigger.refresh();
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) runAnimation();
    };
    const raf = requestAnimationFrame(checkAlreadyInView);
    const t = setTimeout(checkAlreadyInView, 300);

    return () => {
      trigger.kill();
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [y, duration, stagger, childSelector, start, enabled]);

  return ref;
}

/**
 * Slide-in from left or right on scroll.
 */
export function useSlideIn(
  direction: "left" | "right",
  options?: { distance?: number; duration?: number; delay?: number }
) {
  const ref = useRef<HTMLDivElement>(null);
  const { distance = 60, duration = 0.8, delay = 0 } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const x = direction === "left" ? -distance : distance;
    gsap.set(el, { opacity: 0, x });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration,
          delay,
          ease: "power2.out",
        });
      },
    });

    return () => trigger.kill();
  }, [direction, distance, duration, delay]);

  return ref;
}
