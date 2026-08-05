"use client";

import { useLanguage } from "../lib/i18n/LanguageProvider";
import type { Locale } from "../lib/i18n/dictionaries";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();

  const options: Locale[] = ["th", "en"];

  return (
    <div
      role="group"
      aria-label={t.lang.switchTo}
      className={`inline-flex items-center rounded-full border border-white/25 bg-white/10 p-0.5 backdrop-blur-sm ${
        compact ? "text-[11px]" : "text-xs"
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
