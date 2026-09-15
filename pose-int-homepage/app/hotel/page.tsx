"use client";

import { useEffect, useState } from "react";
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
} from "./components";
import { hotelCopy, type Language } from "./hotel-copy";

export default function HotelPage() {
  const [language, setLanguage] = useState<Language>("th");
  const t = hotelCopy[language];
  const section = { language, t };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="hotel-page">
      <a className="hotel-skip" href="#hotel">
        {t.skip}
      </a>

      <HotelHeader {...section} onLanguageChange={setLanguage} />

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
    </div>
  );
}
