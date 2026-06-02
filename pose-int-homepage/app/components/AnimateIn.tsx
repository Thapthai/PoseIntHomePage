"use client";

import { useEffect, useRef, useState } from "react";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

function isInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.top < viewHeight * 0.95 && rect.bottom > 0;
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let observer: IntersectionObserver | null = null;

    const reveal = () => {
      setVisible(true);
      observer?.disconnect();
      observer = null;
    };

    const tryReveal = () => {
      if (isInViewport(el)) {
        reveal();
        return true;
      }
      return false;
    };

    const setupObserver = () => {
      if (observer) return;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) reveal();
        },
        { threshold: 0.01, rootMargin: "0px 0px -20px 0px" }
      );
      observer.observe(el);
    };

    if (!tryReveal()) {
      setupObserver();
    }

    // Re-check after scroll restoration (browser back + hash e.g. /#awards)
    const retryTimers = [50, 150, 350, 600].map((ms) =>
      window.setTimeout(() => {
        if (tryReveal()) return;
        if (!observer) setupObserver();
      }, ms)
    );

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) tryReveal();
    };

    const onPopState = () => {
      window.setTimeout(tryReveal, 0);
      window.setTimeout(tryReveal, 100);
    };

    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("popstate", onPopState);

    return () => {
      observer?.disconnect();
      retryTimers.forEach(window.clearTimeout);
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const hiddenTransform = {
    up: "translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
    none: "",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
