"use client";

import AnimateIn from "./components/AnimateIn";
import HeroSection from "./components/HeroSection";
import HomeScrollRestore from "./components/HomeScrollRestore";
import SectionTitle from "./components/SectionTitle";
import ServiceCard from "./components/ServiceCard";
import StatsBar from "./components/StatsBar";
import VideoTrigger from "./components/VideoTrigger";
import { GeoIcon, MailIcon, PhoneIcon } from "./components/icons";
import type { ProjectIcon } from "./components/icons";
import { useLanguage } from "./lib/i18n/LanguageProvider";

const MAPS_URL = "https://maps.app.goo.gl/haCa5qyJjzSrPuun6";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.419803127884!2d100.6928582750914!3d13.813812186584563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d639c7c8cb4f1%3A0xf8429881868cc23d!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5guC4nuC4qiDguK3guLTguJnguYDguJfguKXguKXguLTguYDguIjguYnguJnguIvguYwg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sth!2sth!4v1785807193239!5m2!1sth!2sth";
const PHONE_PRIMARY = "tel:+6629178681";
const EMAIL_PRIMARY = "mailto:posehealthcare@gmail.com";

const awardImages = [
  "/Images/awards/ip2021.png",
  "/Images/awards/RSP001.png",
  "/Images/awards/NSPNEW.png",
];

const projectMeta: { image: string; icon: ProjectIcon; href: string }[] = [
  { image: "/Images/projects/001-1568x882.png", icon: "activity", href: "/projects/1" },
  { image: "/Images/projects/002_2-1568x882.png", icon: "broadcast", href: "#" },
  { image: "/Images/projects/003_2-1568x882.png", icon: "easel", href: "#" },
  { image: "/Images/projects/004_2-1568x882.png", icon: "easel", href: "#" },
  { image: "/Images/projects/006_2-1568x882.png", icon: "easel", href: "#" },
  {
    image: "/Images/projects/POS-Drugstore-Platforms-1568x882.png",
    icon: "easel",
    href: "#",
  },
];

function ContactInfoCard({
  icon,
  title,
  href,
  hrefLabel,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  href?: string;
  hrefLabel?: string;
  children: React.ReactNode;
}) {
  const iconBox = (
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center text-accent mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:border-accent">
      {icon}
    </div>
  );

  return (
    <div className="group glass-card rounded-2xl p-6 flex flex-col items-center text-center h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,74,23,0.12)] card-glow">
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={hrefLabel ?? title}
          className="inline-flex"
        >
          {iconBox}
        </a>
      ) : (
        iconBox
      )}
      <h3 className="text-base font-bold text-heading my-2">{title}</h3>
      <div className="text-sm text-body/80 space-y-0.5">{children}</div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();

  const awards = awardImages.map((image, i) => ({
    image,
    title: t.awards.items[i].title,
    icon: "trophy" as ProjectIcon,
  }));

  const projects = projectMeta.map((meta, i) => ({
    ...meta,
    title: t.projects.items[i].title,
    description: t.projects.items[i].description,
  }));

  return (
    <main>
      <HomeScrollRestore />
      <HeroSection />
      <StatsBar />

      {/* About */}
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
                  <svg className="w-5 h-5 ml-0.5 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="sr-only">{t.about.watchVideo}</span>
                </VideoTrigger>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Awards */}
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

      {/* Projects */}
      <section id="project" className="py-20 md:py-28 scroll-mt-20 overflow-clip">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateIn>
            <SectionTitle subtitle={t.projects.subtitle} title={t.projects.title} />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
            {projects.map((project, i) => (
              <AnimateIn key={project.title} delay={i * 80}>
                <ServiceCard {...project} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-28 scroll-mt-20 overflow-clip">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <AnimateIn>
            <SectionTitle subtitle={t.contact.subtitle} title={t.contact.title} />
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <AnimateIn delay={100}>
              <div className="group glass-card rounded-3xl overflow-hidden h-full shadow-[0_8px_40px_rgba(15,39,68,0.08)] card-glow transition-all duration-500 hover:shadow-[0_12px_40px_rgba(255,74,23,0.12)]">
                <div className="relative">
                  <iframe
                    title={t.contact.address}
                    src={MAPS_EMBED}
                    className="w-full h-[240px] sm:h-[280px] border-0 block"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent" />
                </div>

                <div className="relative px-6 sm:px-8 py-6 sm:py-7">
                  <div className="flex items-start gap-4">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t.contact.address}
                      className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center text-accent transition-all duration-300 hover:scale-105 hover:bg-accent hover:text-white hover:border-accent"
                    >
                      <GeoIcon />
                    </a>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-heading m-0 mb-2">{t.contact.address}</h3>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm leading-relaxed text-body/80 hover:text-accent transition-colors"
                      >
                        {t.contact.addressValue}
                      </a>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary-deep transition-colors"
                      >
                        {t.contact.openMaps}
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <div className="grid grid-cols-1 gap-6">
              <AnimateIn delay={180}>
                <ContactInfoCard
                  icon={<PhoneIcon />}
                  title={t.contact.callUs}
                  href={PHONE_PRIMARY}
                  hrefLabel="02-917-8681-4"
                >
                  <p className="m-0">
                    <a href={PHONE_PRIMARY} className="hover:text-accent transition-colors">
                      02-917-8681-4
                    </a>
                  </p>
                  <p className="m-0">
                    <a href="tel:+66631909768" className="hover:text-accent transition-colors">
                      063-190-9768
                    </a>
                  </p>
                </ContactInfoCard>
              </AnimateIn>
              <AnimateIn delay={260}>
                <ContactInfoCard
                  icon={<MailIcon />}
                  title={t.contact.emailUs}
                  href={EMAIL_PRIMARY}
                  hrefLabel="posehealthcare@gmail.com"
                >
                  <p className="m-0">
                    <a
                      href={EMAIL_PRIMARY}
                      className="hover:text-accent transition-colors break-all"
                    >
                      posehealthcare@gmail.com
                    </a>
                  </p>
                  <p className="m-0">
                    <a
                      href="mailto:posehealthcare.olm@gmail.com"
                      className="hover:text-accent transition-colors break-all"
                    >
                      posehealthcare.olm@gmail.com
                    </a>
                  </p>
                </ContactInfoCard>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
