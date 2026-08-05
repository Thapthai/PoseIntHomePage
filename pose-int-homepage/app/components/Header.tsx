"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../lib/i18n/LanguageProvider";

const navHrefs = ["#hero", "#about", "#awards", "#project", "#contact"] as const;

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  const navItems = [
    { href: "#hero", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#awards", label: t.nav.awards },
    { href: "#project", label: t.nav.project },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollPos = window.scrollY + 200;
      for (const href of [...navHrefs].reverse()) {
        const section = document.querySelector(href);
        if (section && scrollPos >= (section as HTMLElement).offsetTop) {
          setActiveHash(href);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-[997] transition-all duration-500 ${
        scrolled
          ? "py-3 glass-dark shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 flex items-center relative">
        <Link href="/" className="flex items-center mr-auto shrink-0 group">
          <img
            src="/Images/logo/POSE-LOGO.png"
            alt="POSE Intelligence"
            className="max-h-9 mr-2 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {!mobileOpen && (
          <div className="xl:hidden mr-3">
            <LanguageSwitcher compact />
          </div>
        )}

        <button
          type="button"
          className={`xl:hidden cursor-pointer transition-colors ${
            mobileOpen ? "fixed top-5 right-5 z-[9999] text-white" : "text-white"
          }`}
          aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav
          className={`font-nav ${
            mobileOpen
              ? "fixed inset-0 z-[9998] bg-[rgba(44,94,173,0.96)] backdrop-blur-md flex items-center justify-center px-5"
              : "hidden xl:flex xl:items-center"
          }`}
        >
          <ul
            className={
              mobileOpen
                ? "flex flex-col items-center gap-2 list-none m-0 p-0"
                : "flex items-center gap-1 list-none m-0 p-0"
            }
          >
            {navItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeMobile}
                    className={`relative uppercase text-[13px] font-medium tracking-wide transition-all duration-300 block rounded-full ${
                      mobileOpen
                        ? `px-6 py-3 text-lg ${
                            isActive
                              ? "text-accent bg-white/10"
                              : "text-white/80 hover:text-accent hover:bg-white/5"
                          }`
                        : `px-4 py-2 ${
                            isActive
                              ? "text-white bg-white/10"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`
                    }`}
                  >
                    {item.label}
                    {!mobileOpen && isActive && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
            {mobileOpen && (
              <li className="mt-6">
                <LanguageSwitcher />
              </li>
            )}
          </ul>
          {!mobileOpen && (
            <div className="ml-3">
              <LanguageSwitcher />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
