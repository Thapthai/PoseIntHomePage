"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../lib/i18n/LanguageProvider";

type StatItemProps = {
  value: string;
  label: string;
  suffix?: string;
};

function StatItem({ value, label, suffix = "" }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const target = parseInt(value, 10);

  useEffect(() => {
    const el = ref.current;
    if (!el || isNaN(target)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-white font-heading m-0 drop-shadow-sm">
        {isNaN(target) ? value : count}
        {suffix}
      </p>
      <p className="text-sm text-white/85 mt-1 uppercase tracking-wider font-medium">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const { t } = useLanguage();

  const stats = [
    { value: "6", label: t.stats.platforms, suffix: "+" },
    { value: "3", label: t.stats.awards, suffix: "" },
    { value: "50", label: t.stats.hospitals, suffix: "+" },
    { value: "10", label: t.stats.years, suffix: "+" },
  ];

  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 stats-bg" />

      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
