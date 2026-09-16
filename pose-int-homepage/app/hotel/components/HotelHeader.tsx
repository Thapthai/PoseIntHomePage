"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { type HotelSectionProps, type Language } from "../hotel-copy";

const navTargets = ["#hotel", "#process", "/hospital", "#contact"];

type HotelHeaderProps = HotelSectionProps & {
  onLanguageChange: (lang: Language) => void;
};

export default function HotelHeader({ language, t, onLanguageChange }: HotelHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="hotel-header">
      <div className="hotel-container hotel-nav-row">
        <a className="hotel-logo" href="/" aria-label="POSE INTELLIGENCE">
          <img src="/hotel/pose-logo.jpg" alt="POSE INTELLIGENCE" width="1320" height="827" />
        </a>

        <nav
          className="hotel-desktop-nav"
          aria-label={language === "th" ? "เมนูหลัก" : "Main navigation"}
        >
          {t.nav.map((label, i) => (
            <a key={label} href={navTargets[i]}>
              {label}
            </a>
          ))}
        </nav>

        <div className="hotel-nav-actions">
          <div
            className="hotel-language"
            aria-label={language === "th" ? "เลือกภาษา" : "Select language"}
          >
            {(["th", "en"] as Language[]).map((lang, i) => (
              <span key={lang}>
                {i > 0 && (
                  <span className="hotel-language-divider" aria-hidden="true">
                    |
                  </span>
                )}
                <button
                  type="button"
                  lang={lang}
                  aria-label={lang === "th" ? "ภาษาไทย" : "English"}
                  aria-pressed={language === lang}
                  onClick={() => onLanguageChange(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <button
            className="hotel-menu-toggle"
            type="button"
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={menuOpen}
            aria-controls="hotel-mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="hotel-mobile-menu"
        className="hotel-mobile-nav"
        hidden={!menuOpen}
        aria-label={language === "th" ? "เมนูมือถือ" : "Mobile navigation"}
      >
        {t.nav.map((label, i) => (
          <a key={label} href={navTargets[i]} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
