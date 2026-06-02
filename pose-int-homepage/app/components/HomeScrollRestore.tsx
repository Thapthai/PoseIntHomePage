"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomeScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;
    if (!hash) return;

    const scrollToHash = () => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ block: "start" });
      }
    };

    scrollToHash();
    requestAnimationFrame(scrollToHash);
    const timer = window.setTimeout(scrollToHash, 150);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
