import Link from "next/link";
import { ProjectIcon, ProjectIconDisplay } from "./icons";

type ServiceCardProps = {
  image: string;
  title: string;
  href?: string;
  description?: string;
  icon: ProjectIcon;
  index?: number;
};

export default function ServiceCard({
  image,
  title,
  href = "#",
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="group relative">
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative -mt-16 mx-5 glass-card rounded-2xl px-6 py-8 text-center shadow-[0_8px_32px_rgba(15,39,68,0.1)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_16px_48px_rgba(255,74,23,0.15)] card-glow">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-accent to-primary-deep text-white rounded-2xl rotate-0 group-hover:rotate-6 flex items-center justify-center shadow-[0_4px_16px_rgba(54,173,163,0.35)] transition-all duration-500 group-hover:scale-110">
          <ProjectIconDisplay name={icon} />
        </div>

        <Link
          href={href}
          className="block mt-4 mb-2 text-lg font-bold text-heading transition-colors duration-300 group-hover:text-accent after:absolute after:inset-0"
        >
          {title}
        </Link>

        {description && (
          <p className="text-sm leading-relaxed text-body/80 mb-0 line-clamp-3">{description}</p>
        )}

        <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          Learn more
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
