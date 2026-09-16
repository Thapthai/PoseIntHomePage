"use client";

import AnimateIn from "../../components/AnimateIn";
import SectionTitle from "../../components/SectionTitle";
import { GeoIcon, MailIcon, PhoneIcon } from "../../components/icons";
import { useLanguage } from "../../lib/i18n/LanguageProvider";

const MAPS_URL = "https://maps.app.goo.gl/haCa5qyJjzSrPuun6";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.419803127884!2d100.6928582750914!3d13.813812186584563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d639c7c8cb4f1%3A0xf8429881868cc23d!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5guC4nuC4qiDguK3guLTguJnguYDguJfguKXguKXguLTguYDguIjguYnguJnguIvguYwg4LiI4Liz4LiB4Lix4LiU!5e0!3m2!1sth!2sth!4v1785807193239!5m2!1sth!2sth";
const PHONE_PRIMARY = "tel:+6629178681";
const EMAIL_PRIMARY = "mailto:posehealthcare@gmail.com";

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

export default function HospitalContact() {
  const { t } = useLanguage();

  return (
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
                  <a href={EMAIL_PRIMARY} className="hover:text-accent transition-colors break-all">
                    posehealthcare@gmail.com
                  </a>
                </p>
                <p className="m-0">
                  <a
                    href="mailto:poseintelligence@gmail.com"
                    className="hover:text-accent transition-colors break-all"
                  >
                    poseintelligence@gmail.com
                  </a>
                </p>
              </ContactInfoCard>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
