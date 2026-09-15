import {
  ArrowRight,
  ChartNoAxesCombined,
  MonitorSmartphone,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import AnimateIn from "../../components/AnimateIn";
import type { HotelSectionProps } from "../hotel-copy";

const customIcons = [SlidersHorizontal, Users, ChartNoAxesCombined];

export default function HotelCustomize({ t }: HotelSectionProps) {
  return (
    <section id="customize" className="hotel-customize" aria-labelledby="hotel-custom-title">
      <div className="hotel-custom-layout hotel-container">
        <AnimateIn soft direction="left">
          <figure className="hotel-custom-photo">
            <img
              src="/hotel/linen-handheld.png"
              alt={t.deviceAlt}
              width="1448"
              height="1086"
              loading="lazy"
            />
            <figcaption>{t.deviceCaption}</figcaption>
          </figure>
        </AnimateIn>
        <AnimateIn soft delay={150} direction="right">
          <div className="hotel-custom-copy">
            <h2 id="hotel-custom-title">{t.customTitle}</h2>
            <p className="hotel-custom-intro">{t.customBody}</p>
            <ul className="hotel-custom-list">
              {t.customItems.map((item, i) => {
                const Icon = customIcons[i];
                return (
                  <li key={item}>
                    <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
            <p className="hotel-device-line">
              <MonitorSmartphone size={28} strokeWidth={1.5} aria-hidden="true" />
              <span>{t.devices}</span>
            </p>
            <a className="hotel-text-link" href="#contact">
              {t.customCta}
              <ArrowRight size={20} aria-hidden="true" />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
