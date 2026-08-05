"use client";

import VideoTrigger from "./VideoTrigger";
import { useLanguage } from "../lib/i18n/LanguageProvider";

const HERO_VIDEO = "https://www.youtube.com/watch?v=o1r9QayWp3M&t=4s";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-[90px]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/main-background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C5EAD]/25 via-[#1591DC]/10 to-[#2C5EAD]/50" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-24 pb-32">
        <div className="mb-6">
          <img
            src="/Images/logo/POSE-LOGO.png"
            alt="POSE Intelligence"
            width={280}
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 text-xs uppercase tracking-widest text-slate-800 font-semibold border border-accent/30 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {t.hero.badge}
        </div>

        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight max-w-4xl m-0">
          {t.hero.titleBefore}{" "}
          <span className="text-accent">{t.hero.titleAccent}</span>{" "}
          {t.hero.titleAfter}
        </h1>

        <p className="hero-readable mt-5 text-lg md:text-xl text-slate-800 font-medium max-w-2xl leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {t.hero.techTags.map((tag) => (
            <span
              key={tag}
              className="bg-white rounded-full px-3 py-1.5 text-xs text-slate-800 font-medium border border-accent/25 shadow-sm hover:border-accent/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-accent hover:bg-primary-deep text-white font-semibold px-8 py-3.5 rounded-full shadow-[0_4px_16px_rgba(54,173,163,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            {t.hero.explore}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
            </svg>
          </a>
          <VideoTrigger
            url={HERO_VIDEO}
            title="POSE Intelligence — Company Overview"
            className="group inline-flex items-center gap-2.5 bg-white hover:bg-white text-slate-800 font-semibold rounded-full px-5 py-2.5 shadow-md border border-accent/30 transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:border-accent/60"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/15 group-hover:bg-accent/25 transition-colors">
              <svg className="w-3.5 h-3.5 ml-0.5 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span>{t.hero.watchVideo}</span>
          </VideoTrigger>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors hero-readable"
        aria-label={t.hero.scroll}
      >
        <span className="text-[10px] uppercase tracking-widest">{t.hero.scroll}</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600/60 bg-white/80 flex justify-center pt-1.5 shadow-sm">
          <div className="w-1 h-2 rounded-full bg-accent animate-scroll-bounce" />
        </div>
      </a>
    </section>
  );
}
