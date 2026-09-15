import { CalendarClock, Layers, PackageCheck } from "lucide-react";
import AnimateIn from "../../components/AnimateIn";
import type { HotelSectionProps } from "../hotel-copy";

const benefitIcons = [PackageCheck, Layers, CalendarClock];

export default function HotelBenefits({ language, t }: HotelSectionProps) {
  return (
    <section
      className="hotel-benefits hotel-container"
      aria-label={language === "th" ? "ประโยชน์ต่อโรงแรม" : "Benefits for hotels"}
    >
      {t.benefits.map(([title, body], i) => {
        const Icon = benefitIcons[i];
        return (
          <AnimateIn soft key={title} delay={i * 90}>
            <article>
              <Icon className="hotel-benefit-icon" size={44} strokeWidth={1.35} aria-hidden="true" />
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          </AnimateIn>
        );
      })}
    </section>
  );
}
