"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  dictionaries,
  LOCALE_COOKIE_KEY,
  LOCALE_STORAGE_KEY,
  type Dictionary,
  type Locale,
} from "./dictionaries";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readLocalStorageLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === "th" || stored === "en") return stored;
  return null;
}

function persistLocale(next: Locale) {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
  document.cookie = `${LOCALE_COOKIE_KEY}=${next};path=/;max-age=31536000;SameSite=Lax`;
}

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    // One-time migrate: older visits stored EN only in localStorage.
    const fromStorage = readLocalStorageLocale();
    if (fromStorage && fromStorage !== initialLocale) {
      setLocaleState(fromStorage);
      persistLocale(fromStorage);
      document.documentElement.lang = fromStorage;
      return;
    }

    persistLocale(initialLocale);
    document.documentElement.lang = initialLocale;
  }, [initialLocale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    persistLocale(next);
    document.documentElement.lang = next;
  }, []);

  return (
    <LanguageContext.Provider
      value={{ locale, t: dictionaries[locale], setLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
