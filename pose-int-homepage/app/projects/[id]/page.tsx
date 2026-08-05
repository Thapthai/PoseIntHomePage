"use client";

import Link from "next/link";
import { use } from "react";
import AnimateIn from "../../components/AnimateIn";
import VideoTrigger from "../../components/VideoTrigger";
import { useLanguage } from "../../lib/i18n/LanguageProvider";

const projectImages: Record<string, string> = {
  "1": "/Images/projects/001-1568x882.png",
};

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);
  const { t } = useLanguage();

  const detail = t.projectDetail.items[id];
  const project = {
    title: detail?.title ?? t.projectDetail.fallbackTitle,
    image: projectImages[id] ?? "/Images/projects/001-1568x882.png",
    description: detail?.description ?? t.projectDetail.fallbackDescription,
  };

  return (
    <main>
      <section
        className="relative pt-32 pb-20 text-white overflow-hidden"
        style={{
          backgroundImage: "url(/Images/main-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C5EAD]/85 via-[#1591DC]/75 to-[#4BB8FA]/70" />
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6">
          <Link
            href="/#project"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            {t.projectDetail.back}
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white m-0">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <AnimateIn direction="left">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl shadow-[0_20px_60px_rgba(15,39,68,0.12)]"
              />
            </AnimateIn>

            <AnimateIn direction="right" delay={100}>
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(15,39,68,0.12)] mb-6">
                <img src="/Images/business-solution.png" alt="" className="w-full" />
                <VideoTrigger
                  url="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  title={`${project.title} — Demo`}
                  ariaLabel={t.projectDetail.watchDemo}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white/85 hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300 cursor-pointer border-0"
                >
                  <svg className="w-5 h-5 ml-0.5 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="sr-only">{t.projectDetail.watchDemo}</span>
                </VideoTrigger>
              </div>
              <p className="leading-relaxed text-body/90 text-base">{project.description}</p>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  );
}
