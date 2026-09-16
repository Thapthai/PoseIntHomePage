"use client";

import AnimateIn from "../../components/AnimateIn";
import SectionTitle from "../../components/SectionTitle";
import VideoTrigger from "../../components/VideoTrigger";
import { useLanguage } from "../../lib/i18n/LanguageProvider";

export default function HospitalAbout() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 scroll-mt-20 overflow-clip">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionTitle subtitle={t.about.subtitle} title={t.about.title} />
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimateIn delay={100} direction="left">
            <div className="relative">
              <img
                src="/Images/POSE-bg1.png"
                alt=""
                className="relative w-full rounded-2xl shadow-[0_20px_60px_rgba(44,94,173,0.15)]"
              />
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-5 py-3 shadow-lg hidden sm:block">
                <p className="text-2xl font-extrabold text-accent m-0 font-heading">10+</p>
                <p className="text-xs text-body/60 m-0 uppercase tracking-wider">
                  {t.about.yearsLabel}
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">{t.about.platformsTitle}</h3>
            <p className="leading-relaxed text-body/90 mb-4">{t.about.platformsP1}</p>
            <p className="leading-relaxed text-body/90">{t.about.platformsP2}</p>
          </AnimateIn>

          <AnimateIn delay={200} direction="right">
            <div className="grid grid-cols-2 gap-3 mb-8">
              {t.about.features.map((f) => (
                <div
                  key={f.title}
                  className="mesh-bg rounded-xl p-4 border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-sm font-bold text-heading m-0 mb-1">{f.title}</p>
                  <p className="text-xs text-body/70 m-0 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-4">{t.about.businessTitle}</h3>
            <p className="leading-relaxed text-body/90 mb-6">{t.about.businessP1}</p>

            <div className="relative group rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,39,68,0.12)]">
              <img
                src="/Images/business-solution.png"
                alt=""
                className="w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-deep/20 group-hover:bg-primary-deep/10 transition-colors duration-500" />
              <VideoTrigger
                url="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                title="POSE Intelligence — Business Solution"
                ariaLabel={t.about.watchVideo}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white/85 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 cursor-pointer border-0"
              >
                <svg
                  className="w-5 h-5 ml-0.5 text-accent"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="sr-only">{t.about.watchVideo}</span>
              </VideoTrigger>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
