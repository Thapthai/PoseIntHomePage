import AnimateIn from "../../components/AnimateIn";
import type { HotelSectionProps } from "../hotel-copy";

const stockCounts = [600, 350, 220, 30];

export default function HotelData({ t }: HotelSectionProps) {
  return (
    <section id="system" className="hotel-data hotel-section" aria-labelledby="hotel-data-title">
      <div className="hotel-container">
        <AnimateIn soft>
          <div className="hotel-section-heading">
            <h2 id="hotel-data-title">{t.dataTitle}</h2>
            <p>{t.dataBody}</p>
          </div>
        </AnimateIn>
        <div className="hotel-data-panels">
          <AnimateIn soft delay={100} direction="left">
            <article className="hotel-panel">
              <div className="hotel-panel-heading">
                <h3>{t.stockTitle}</h3>
                <span className="hotel-window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="hotel-stock-body">
                <dl className="hotel-stock-grid">
                  {t.stockLabels.map((label, i) => (
                    <div key={label}>
                      <dt>
                        <span className={`hotel-status-dot status-${i}`} aria-hidden="true" />
                        {label}
                      </dt>
                      <dd>{stockCounts[i]}</dd>
                    </div>
                  ))}
                </dl>
                <p className="hotel-stock-total">{t.stockTotal}</p>
              </div>
            </article>
          </AnimateIn>

          <AnimateIn soft delay={200} direction="right">
            <article className="hotel-panel">
              <div className="hotel-panel-heading">
                <h3>{t.itemTitle}</h3>
                <span className="hotel-window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="hotel-item-body">
                <div className="hotel-item-summary">
                  <img
                    src="/hotel/rfid-textile-tag.png"
                    alt={t.tagAlt}
                    width="1536"
                    height="1024"
                    loading="lazy"
                  />
                  <div className="hotel-item-details">
                    <h4>TW-000128</h4>
                    <dl>
                      {t.itemFields.map(([label, value], i) => (
                        <div key={label}>
                          <dt>{label}:</dt>
                          <dd>
                            {i === 1 && (
                              <span className="hotel-status-dot status-0" aria-hidden="true" />
                            )}
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <dl className="hotel-item-events">
                  <div>
                    <dt>{t.dispatch}</dt>
                    <dd>-</dd>
                  </div>
                  <div>
                    <dt>{t.returned}</dt>
                    <dd>-</dd>
                  </div>
                </dl>
              </div>
            </article>
          </AnimateIn>
        </div>
        <AnimateIn soft delay={280}>
          <p className="hotel-image-caption">{t.dataCaption}</p>
          <p className="hotel-data-note">{t.dataNote}</p>
        </AnimateIn>
      </div>
    </section>
  );
}
