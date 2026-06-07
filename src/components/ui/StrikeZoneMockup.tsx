interface Pitch {
  x: number;
  y: number;
  type: "strike" | "ball";
}

interface StrikeZoneMockupProps {
  variant?: "hero" | "abs" | "prediction";
  className?: string;
}

const HERO_PITCHES: Pitch[] = [
  { x: 145, y: 95, type: "strike" },
  { x: 175, y: 130, type: "strike" },
  { x: 110, y: 150, type: "ball" },
  { x: 200, y: 80, type: "ball" },
  { x: 160, y: 115, type: "strike" },
];

const PREDICTION_POINT = { x: 185, y: 105 };

const COLORS = {
  field: "#f7f5f0",
  navy: "#0c1a2e",
  chalk: "#e8e4dc",
  strike: "#3d7a52",
  ball: "#c45c4a",
  accent: "#2d5a3d",
  muted: "#5c6b7a",
};

export function StrikeZoneMockup({
  variant = "hero",
  className = "",
}: StrikeZoneMockupProps) {
  const showPrediction = variant === "hero" || variant === "prediction";
  const showHeatmap = variant === "prediction";
  const showBadge = variant === "hero";

  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-lg border border-chalk bg-card p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-strike" />
            <span className="text-xs font-medium tracking-wide text-muted">
              Live
            </span>
          </div>
          <span className="text-xs text-muted">PitchIQ</span>
        </div>

        <svg viewBox="0 0 300 220" className="w-full" aria-hidden="true">
          <rect
            x="10"
            y="10"
            width="280"
            height="200"
            rx="4"
            fill={COLORS.field}
            stroke={COLORS.chalk}
            strokeWidth="1"
          />

          <rect
            x="95"
            y="55"
            width="110"
            height="130"
            rx="1"
            fill="none"
            stroke={COLORS.navy}
            strokeWidth="1.5"
            opacity="0.25"
          />

          {Array.from({ length: 4 }).map((_, col) => (
            <line
              key={`vgrid-${col}`}
              x1={95 + col * 36.67}
              y1={55}
              x2={95 + col * 36.67}
              y2={185}
              stroke={COLORS.chalk}
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 5 }).map((_, row) => (
            <line
              key={`hgrid-${row}`}
              x1={95}
              y1={55 + row * 32.5}
              x2={205}
              y2={55 + row * 32.5}
              stroke={COLORS.chalk}
              strokeWidth="0.5"
            />
          ))}

          {showHeatmap && (
            <>
              <circle
                cx="175"
                cy="105"
                r="28"
                fill={COLORS.accent}
                opacity="0.1"
              />
              <circle
                cx="175"
                cy="105"
                r="18"
                fill={COLORS.accent}
                opacity="0.18"
              />
              <circle
                cx="175"
                cy="105"
                r="10"
                fill={COLORS.accent}
                opacity="0.3"
              />
            </>
          )}

          {HERO_PITCHES.map((pitch, i) => (
            <circle
              key={i}
              cx={pitch.x}
              cy={pitch.y}
              r="5"
              fill={pitch.type === "strike" ? COLORS.strike : COLORS.ball}
              opacity="0.85"
            />
          ))}

          {showPrediction && (
            <>
              <circle
                cx={PREDICTION_POINT.x}
                cy={PREDICTION_POINT.y}
                r="10"
                fill="none"
                stroke={COLORS.accent}
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.7"
              />
              <circle
                cx={PREDICTION_POINT.x}
                cy={PREDICTION_POINT.y}
                r="3"
                fill={COLORS.accent}
              />
            </>
          )}

          <text
            x="150"
            y="205"
            textAnchor="middle"
            fill={COLORS.muted}
            fontSize="9"
            opacity="0.6"
          >
            Strike Zone
          </text>
        </svg>

        <div className="mt-3 flex items-center justify-between text-xs text-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-strike" />
              Strike
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-ball" />
              Ball
            </span>
            {showPrediction && (
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full border border-dashed border-accent" />
                Predicted
              </span>
            )}
          </div>
          <span>Pitch 6 of 12</span>
        </div>
      </div>

      {showBadge && (
        <div className="absolute -right-2 -top-2 rounded-sm bg-navy px-2.5 py-1 text-xs font-medium tracking-wide text-background">
          STRIKE
        </div>
      )}

      {showPrediction && variant === "hero" && (
        <div className="absolute -bottom-3 -left-2 rounded-sm border border-chalk bg-card px-3 py-1.5 text-xs">
          <span className="font-medium text-accent">Next:</span>{" "}
          <span className="text-foreground">High inside fastball</span>
        </div>
      )}
    </div>
  );
}
