"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#awards", label: "Awards" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollPos = window.scrollY + 200;
      for (const item of [...navItems].reverse()) {
        const section = document.querySelector(item.href);
        if (section && scrollPos >= (section as HTMLElement).offsetTop) {
          setActiveHash(item.href);
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

        <button
          type="button"
          className={`xl:hidden cursor-pointer transition-colors ${
            mobileOpen ? "fixed top-5 right-5 z-[9999] text-white" : "text-white"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav
          className={`font-nav ${
            mobileOpen
              ? "fixed inset-0 z-[9998] bg-[rgba(44,94,173,0.96)] backdrop-blur-md flex items-center justify-center px-5"
              : "hidden xl:block"
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
