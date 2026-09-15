import { Fragment } from "react";
import AnimateIn from "../../components/AnimateIn";
import type { HotelSectionProps } from "../hotel-copy";

export default function HotelOptions({ t }: HotelSectionProps) {
  return (
    <section className="hotel-options hotel-section" aria-labelledby="hotel-options-title">
      <div className="hotel-container">
        <AnimateIn soft>
          <div className="hotel-section-heading">
            <h2 id="hotel-options-title">{t.optionsTitle}</h2>
          </div>
        </AnimateIn>
        <div className="hotel-options-grid">
          {t.options.map(([title, body], i) => (
            <Fragment key={title}>
              {i === 1 && <span className="hotel-option-or">{t.or}</span>}
              <AnimateIn soft delay={i * 120}>
                <article className="hotel-option">
                  <div className="hotel-option-image">
                    <img
                      src={i === 0 ? "/hotel/rfid-textile-tag.png" : "/hotel/linen-handheld.png"}
                      alt=""
                      width={i === 0 ? 1536 : 1448}
                      height={i === 0 ? 1024 : 1086}
                      loading="lazy"
                      className={i === 1 ? "hotel-linen-detail" : ""}
                    />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              </AnimateIn>
            </Fragment>
          ))}
        </div>
        <AnimateIn soft delay={250}>
          <p className="hotel-options-note">{t.optionsNote}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
