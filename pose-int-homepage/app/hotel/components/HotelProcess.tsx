import {
  Check,
  ChevronRight,
  ClipboardList,
  FileSearch,
  PackageCheck,
  Tag,
} from "lucide-react";
import AnimateIn from "../../components/AnimateIn";
import type { HotelSectionProps } from "../hotel-copy";

const processIcons = [Tag, ClipboardList, FileSearch, PackageCheck];

export default function HotelProcess({ t }: HotelSectionProps) {
  return (
    <section id="process" className="hotel-process hotel-section" aria-labelledby="hotel-process-title">
      <div className="hotel-container">
        <AnimateIn soft>
          <div className="hotel-section-heading">
            <h2 id="hotel-process-title">{t.processTitle}</h2>
            <p>{t.processBody}</p>
          </div>
        </AnimateIn>
        <ol className="hotel-steps">
          {t.steps.map(([title, body], i) => {
            const Icon = processIcons[i];
            return (
              <li key={title}>
                <AnimateIn soft delay={i * 120}>
                  <div className="hotel-step-visual">
                    <span>0{i + 1}</span>
                    <Icon size={52} strokeWidth={1.3} aria-hidden="true" />
                    {i < 3 && (
                      <ChevronRight
                        className="hotel-step-arrow"
                        size={27}
                        strokeWidth={1.3}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </AnimateIn>
              </li>
            );
          })}
        </ol>
        <AnimateIn soft delay={280}>
          <p className="hotel-process-note">
            <Check size={20} aria-hidden="true" />
            {t.processNote}
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
