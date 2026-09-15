import AnimateIn from "../../components/AnimateIn";
import type { HotelSectionProps } from "../hotel-copy";

export default function HotelFaq({ t }: HotelSectionProps) {
  return (
    <section className="hotel-faq hotel-section" aria-labelledby="hotel-faq-title">
      <div className="hotel-container">
        <AnimateIn soft>
          <div className="hotel-section-heading hotel-faq-heading">
            <h2 id="hotel-faq-title">{t.faqTitle}</h2>
          </div>
        </AnimateIn>
        <div className="hotel-faq-list">
          {t.faqs.map(([question, answer], i) => (
            <AnimateIn soft key={question} delay={i * 90}>
              <article className="hotel-faq-item">
                <div className="hotel-faq-q">
                  <span className="hotel-faq-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{question}</h3>
                </div>
                <p className="hotel-faq-a">{answer}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
