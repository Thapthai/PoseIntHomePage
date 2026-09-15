import { ArrowRight, Rss } from "lucide-react";
import type { CSSProperties } from "react";
import type { HotelSectionProps } from "../hotel-copy";

function fadeUp(delay = 0): CSSProperties {
  return { animation: `fade-up 0.7s ease-out ${delay}s both` };
}

export default function HotelHero({ language, t }: HotelSectionProps) {
  const signalWord = language === "th" ? "ชิ้น" : "Smarter";

  return (
    <section id="hotel" className="hotel-hero" aria-labelledby="hotel-title">
      <img
        className="hotel-hero-photo"
        src="/hotel/hotel-hero.png"
        alt=""
        width="1672"
        height="941"
        fetchPriority="high"
      />
      <div className="hotel-hero-shade" />
      <div className="hotel-container hotel-hero-layout">
        <div className="hotel-hero-copy">
          <p className="hotel-eyebrow" style={fadeUp(0)}>
            RFID HOTEL LINEN MANAGEMENT SYSTEM
          </p>
          <h1 id="hotel-title">
            {t.title.map((line, i) => {
              const signalIndex = line.indexOf(signalWord);
              return (
                <span key={line} style={fadeUp(0.12 + i * 0.1)}>
                  {signalIndex >= 0 ? (
                    <>
                      {line.slice(0, signalIndex)}
                      <span className="hotel-title-signal-word">
                        {signalWord}
                        <Rss
                          className="hotel-title-signal"
                          strokeWidth={1.7}
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M4 7.5a12.5 12.5 0 0 1 12.5 12.5" />
                        </Rss>
                      </span>
                      {line.slice(signalIndex + signalWord.length)}
                    </>
                  ) : (
                    line
                  )}
                </span>
              );
            })}
          </h1>
          <p className="hotel-hero-highlight" style={fadeUp(0.12 + t.title.length * 0.1)}>
            {t.highlight}
          </p>
          <p className="hotel-hero-body" style={fadeUp(0.22 + t.title.length * 0.1)}>
            {t.heroBody}
          </p>
          <a
            className="hotel-primary-link"
            href="#contact"
            style={fadeUp(0.32 + t.title.length * 0.1)}
          >
            {t.cta}
            <ArrowRight size={20} aria-hidden="true" />
          </a>
        </div>
        <div className="hotel-tag-slot" style={fadeUp(0.22)}>
          <div className="hotel-tag-inset">
            <img
              src="/hotel/rfid-textile-tag.png"
              alt={t.tagAlt}
              width="1536"
              height="1024"
            />
            <p className="hotel-tag-caption">{t.tagCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
