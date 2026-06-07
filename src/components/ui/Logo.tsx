import { SITE } from "@/lib/constants";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className = "", light = false }: LogoProps) {
  const color = light ? "text-background" : "text-foreground";
  const markColor = light ? "#f7f5f0" : "#2d5a3d";

  return (
    <a href="#" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 2L18 10L10 18L2 10L10 2Z"
          stroke={markColor}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M10 6L14 10L10 14L6 10L10 6Z"
          fill={markColor}
          opacity="0.3"
        />
      </svg>
      <span className={`font-display text-xl tracking-tight ${color}`}>
        {SITE.name}
      </span>
    </a>
  );
}
