interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const textColor = light ? "text-white" : "text-foreground";
  const mutedColor = light ? "text-white/60" : "text-muted";
  const labelColor = light ? "text-white/50" : "text-muted";

  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {label && (
        <p
          className={`mb-3 text-xs font-medium tracking-widest uppercase ${labelColor}`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-4xl lg:text-[36px] ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${mutedColor} ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
