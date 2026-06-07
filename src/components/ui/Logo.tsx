import { SITE } from "@/lib/constants";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
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
          stroke="#3b5bdb"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M10 6L14 10L10 14L6 10L10 6Z"
          fill="#3b5bdb"
          opacity="0.3"
        />
      </svg>
      <span className="text-xl font-semibold tracking-tight text-foreground">
        {SITE.name}
      </span>
    </a>
  );
}
