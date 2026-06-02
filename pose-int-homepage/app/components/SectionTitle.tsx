type SectionTitleProps = {
  subtitle: string;
  title: string;
  light?: boolean;
};

export default function SectionTitle({ subtitle, title, light = false }: SectionTitleProps) {
  return (
    <div className="pb-14 text-center">
      <p
        className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] m-0 ${
          light ? "text-white/50" : "text-body/50"
        }`}
      >
        <span className={`w-8 h-px ${light ? "bg-white/30" : "bg-accent/40"}`} />
        {subtitle}
        <span className={`w-8 h-px ${light ? "bg-white/30" : "bg-accent/40"}`} />
      </p>
      <h2
        className={`mt-3 text-3xl md:text-5xl font-extrabold uppercase font-heading leading-tight ${
          light ? "text-white" : "text-heading"
        }`}
      >
        {title.includes(" ") ? (
          <>
            {title.split(" ")[0]}{" "}
            <span className="text-gradient">{title.split(" ").slice(1).join(" ")}</span>
          </>
        ) : (
          <span className="text-gradient">{title}</span>
        )}
      </h2>
    </div>
  );
}
