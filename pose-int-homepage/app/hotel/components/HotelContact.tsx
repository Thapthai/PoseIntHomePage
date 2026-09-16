import { Mail, MapPin, Phone } from "lucide-react";
import AnimateIn from "../../components/AnimateIn";
import type { HotelSectionProps } from "../hotel-copy";

export default function HotelContact({ t }: HotelSectionProps) {
  return (
    <section id="contact" className="hotel-contact" aria-labelledby="hotel-contact-title">
      <div className="hotel-container hotel-contact-layout">
        <AnimateIn soft direction="left">
          <div>
            <h2 id="hotel-contact-title">{t.contactTitle}</h2>
            <p className="hotel-contact-intro">{t.contactBody}</p>
            <div className="hotel-contact-methods">
              <a href="tel:+66631909768" className="hotel-phone">
                <span className="hotel-contact-icon">
                  <Phone size={23} aria-hidden="true" />
                </span>
                <span>
                  <span className="hotel-contact-label">{t.phoneLabel}</span>
                  <strong>+66 63 190 9768</strong>
                </span>
              </a>
              <div className="hotel-email">
                <Mail size={25} aria-hidden="true" />
                <div>
                  <span className="hotel-contact-label">{t.emailLabel}</span>
                  <a href="mailto:posehealthcare@gmail.com">posehealthcare@gmail.com</a>
                  <a href="mailto:poseintelligence@gmail.com">poseintelligence@gmail.com</a>
                </div>
              </div>
            </div>
            <p className="hotel-nationwide">
              <MapPin size={20} aria-hidden="true" />
              {t.nationwide}
            </p>
          </div>
        </AnimateIn>
        <AnimateIn soft delay={150} direction="right">
          <div className="hotel-line-card">
            <span className="hotel-line-label">{t.line}</span>
            <img
              src="/hotel/linecontact.jpg"
              alt={t.line}
              width="220"
              height="220"
              className="hotel-line-qr"
              loading="lazy"
            />
          </div>
        </AnimateIn>
        <AnimateIn soft delay={220} className="hotel-service-note-wrap">
          <p className="hotel-service-note">{t.disclaimer}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
