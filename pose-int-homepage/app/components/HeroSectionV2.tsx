"use client";

import { useLanguage } from "../lib/i18n/LanguageProvider";

const cards = [
  {
    key: "hotel" as const,
    image: "/Images/hero/hotel.png",
    href: "/hotel",
    accent: "bg-primary-mid",
  },
  {
    key: "hospital" as const,
    image: "/Images/hero/hospital.png",
    href: "#project",
    accent: "bg-accent",
  },
];

export default function HeroSectionV2() {
  const { t } = useLanguage();
  const copy = t.heroV2;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-white scroll-mt-[90px] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(44,94,173,0.08), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(54,173,163,0.06), transparent)",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col max-w-[1320px] w-full mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-8">
        <div className="mb-5 md:mb-6 animate-[fade-up_0.7s_ease-out_both]">
          <p className="m-0 text-xs sm:text-sm tracking-[0.2em] uppercase text-body/55 font-semibold">
            {copy.eyebrow}
          </p>
          <h1 className="mt-2 m-0 font-extrabold text-heading leading-tight whitespace-nowrap text-[clamp(1.05rem,4.1vw,3rem)]">
            {copy.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {cards.map((card, i) => {
            const isHotel = card.key === "hotel";
            const title = isHotel ? copy.hotelTitle : copy.hospitalTitle;
            const desc = isHotel ? copy.hotelDesc : copy.hospitalDesc;
            const cta = isHotel ? copy.hotelCta : copy.hospitalCta;
            const external = card.href.startsWith("http");

            return (
              <a
                key={card.key}
                href={card.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-col rounded-2xl bg-[#f4f6f8] border border-slate-200/80 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(44,94,173,0.12)] hover:border-accent/25"
                style={{ animation: `fade-up 0.7s ease-out ${0.12 + i * 0.1}s both` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-col px-5 sm:px-6 pt-4 pb-5">
                  <span className={`block w-10 h-0.5 rounded-full ${card.accent} mb-3`} />
                  <h2 className="m-0 text-2xl sm:text-3xl font-extrabold text-heading leading-none">
                    {title}
                  </h2>
                  <p className="mt-1.5 mb-0 text-sm sm:text-base text-body/75 leading-snug">
                    {desc}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2.5 text-accent font-semibold text-sm sm:text-base">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/15 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:translate-x-0.5">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                      </svg>
                    </span>
                    <span className="transition-colors duration-300 group-hover:text-primary-deep">
                      {cta}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
