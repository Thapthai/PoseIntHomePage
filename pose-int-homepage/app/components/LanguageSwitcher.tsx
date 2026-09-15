"use client";

import { useLanguage } from "../lib/i18n/LanguageProvider";
import type { Locale } from "../lib/i18n/dictionaries";

type LanguageSwitcherProps = {
  compact?: boolean;
  /** light = dark text on white bg; dark = white text on dark/glass header */
  variant?: "light" | "dark";
};

export default function LanguageSwitcher({
  compact = false,
  variant = "dark",
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const options: Locale[] = ["th", "en"];
  const isLight = variant === "light";

  return (
    <div
      role="group"
      aria-label={t.lang.switchTo}
      className={`inline-flex items-center rounded-full p-0.5 ${
        compact ? "text-[11px]" : "text-xs"
      } ${
        isLight
          ? "border border-slate-200 bg-slate-50"
          : "border border-white/25 bg-white/10 backdrop-blur-sm"
      }`}
    >
      {options.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`min-w-[2.25rem] rounded-full px-2.5 py-1 font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              active
                ? "bg-accent text-white shadow-sm"
                : isLight
                  ? "text-slate-500 hover:text-heading"
                  : "text-white/70 hover:text-white"
            }`}
          >
            {t.lang[code]}
          </button>
        );
      })}
    </div>
  );
}
