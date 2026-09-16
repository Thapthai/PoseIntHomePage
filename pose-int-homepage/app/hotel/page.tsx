"use client";

import {
  HotelBenefits,
  HotelContact,
  HotelCustomize,
  HotelData,
  HotelFaq,
  HotelFooter,
  HotelHeader,
  HotelHero,
  HotelOptions,
  HotelProcess,
  HotelScrollTop,
} from "./components";
import { hotelCopy } from "./hotel-copy";
import { useLanguage } from "../lib/i18n/LanguageProvider";

export default function HotelPage() {
  const { locale, setLocale } = useLanguage();
  const t = hotelCopy[locale];
  const section = { language: locale, t };

  return (
    <div className="hotel-page">
      <a className="hotel-skip" href="#hotel">
        {t.skip}
      </a>

      <HotelHeader {...section} onLanguageChange={setLocale} />

      <main>
        <HotelHero {...section} />
        <HotelBenefits {...section} />
        <HotelProcess {...section} />
        <HotelData {...section} />
        <HotelCustomize {...section} />
        <HotelOptions {...section} />
        <HotelFaq {...section} />
        <HotelContact {...section} />
      </main>

      <HotelFooter />
      <HotelScrollTop label={locale === "th" ? "กลับขึ้นด้านบน" : "Scroll to top"} />
    </div>
  );
}
