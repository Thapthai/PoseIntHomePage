"use client";

import AnimateIn from "../../components/AnimateIn";
import SectionTitle from "../../components/SectionTitle";
import ServiceCard from "../../components/ServiceCard";
import type { ProjectIcon } from "../../components/icons";
import { useLanguage } from "../../lib/i18n/LanguageProvider";

const projectMeta: { image: string; icon: ProjectIcon; href: string }[] = [
  { image: "/Images/projects/001-1568x882.png", icon: "activity", href: "/projects/1" },
  { image: "/Images/projects/002_2-1568x882.png", icon: "broadcast", href: "#" },
  { image: "/Images/projects/003_2-1568x882.png", icon: "easel", href: "#" },
  { image: "/Images/projects/004_2-1568x882.png", icon: "easel", href: "#" },
  { image: "/Images/projects/006_2-1568x882.png", icon: "easel", href: "#" },
  {
    image: "/Images/projects/POS-Drugstore-Platforms-1568x882.png",
    icon: "easel",
    href: "#",
  },
];

export default function HospitalProjects() {
  const { t } = useLanguage();

  const projects = projectMeta.map((meta, i) => ({
    ...meta,
    title: t.projects.items[i].title,
    description: t.projects.items[i].description,
  }));

  return (
    <section id="project" className="py-20 md:py-28 scroll-mt-20 overflow-clip">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        <AnimateIn>
          <SectionTitle subtitle={t.projects.subtitle} title={t.projects.title} />
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 80}>
              <ServiceCard {...project} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
