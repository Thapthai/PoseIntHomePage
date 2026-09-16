"use client";

import AnimateIn from "../../components/AnimateIn";
import SectionTitle from "../../components/SectionTitle";
import ServiceCard from "../../components/ServiceCard";
import type { ProjectIcon } from "../../components/icons";
import { useLanguage } from "../../lib/i18n/LanguageProvider";

const awardImages = [
  "/Images/awards/ip2021.png",
  "/Images/awards/RSP001.png",
  "/Images/awards/NSPNEW.png",
];

export default function HospitalAwards() {
  const { t } = useLanguage();

  const awards = awardImages.map((image, i) => ({
    image,
    title: t.awards.items[i].title,
    icon: "trophy" as ProjectIcon,
  }));

  return (
    <section id="awards" className="py-20 md:py-28 mesh-bg scroll-mt-20 overflow-clip">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionTitle subtitle={t.awards.subtitle} title={t.awards.title} />
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
          {awards.map((award, i) => (
            <AnimateIn key={award.title} delay={i * 120}>
              <ServiceCard {...award} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
