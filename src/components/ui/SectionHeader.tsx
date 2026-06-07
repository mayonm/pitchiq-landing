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
  const textColor = light ? "text-background" : "text-foreground";
  const mutedColor = light ? "text-background/60" : "text-muted";
  const labelColor = light ? "text-background/50" : "text-clay";

  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {label && (
        <p
          className={`mb-3 text-xs font-medium tracking-widest ${labelColor}`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl tracking-tight ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${mutedColor} ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
