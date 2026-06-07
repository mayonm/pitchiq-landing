interface Pitch {
  x: number;
  y: number;
  type: "strike" | "ball";
}

interface StrikeZoneMockupProps {
  variant?: "hero" | "abs" | "prediction" | "manual";
  className?: string;
  compact?: boolean;
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
  field: "#fafbff",
  navy: "#1a1a2e",
  border: "rgba(26,26,46,0.08)",
  strike: "#5b8def",
  ball: "#c45c4a",
  accent: "#3b5bdb",
  muted: "rgba(26,26,46,0.45)",
};

function ZoneSvg({
  showPrediction,
  showHeatmap,
  showPitches,
  manual,
}: {
  showPrediction: boolean;
  showHeatmap: boolean;
  showPitches: boolean;
  manual?: boolean;
}) {
  return (
    <svg viewBox="0 0 300 220" className="w-full" aria-hidden="true">
      <rect
        x="10"
        y="10"
        width="280"
        height="200"
        rx="8"
        fill={COLORS.field}
        stroke={COLORS.border}
        strokeWidth="1"
      />

      <rect
        x="95"
        y="55"
        width="110"
        height="130"
        rx="2"
        fill="none"
        stroke={COLORS.navy}
        strokeWidth="1.5"
        opacity="0.2"
      />

      {Array.from({ length: 4 }).map((_, col) => (
        <line
          key={`vgrid-${col}`}
          x1={95 + col * 36.67}
          y1={55}
          x2={95 + col * 36.67}
          y2={185}
          stroke={COLORS.border}
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
          stroke={COLORS.border}
          strokeWidth="0.5"
        />
      ))}

      {showHeatmap && (
        <>
          <circle cx="175" cy="105" r="28" fill={COLORS.accent} opacity="0.1" />
          <circle cx="175" cy="105" r="18" fill={COLORS.accent} opacity="0.18" />
          <circle cx="175" cy="105" r="10" fill={COLORS.accent} opacity="0.3" />
        </>
      )}

      {showPitches &&
        HERO_PITCHES.map((pitch, i) => (
          <circle
            key={i}
            cx={pitch.x}
            cy={pitch.y}
            r="5"
            fill={pitch.type === "strike" ? COLORS.strike : COLORS.ball}
            opacity={manual ? 0.4 : 0.85}
          />
        ))}

      {showPrediction && !manual && (
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

      {manual && (
        <text x="150" y="120" textAnchor="middle" fill={COLORS.muted} fontSize="14">
          ?
        </text>
      )}
    </svg>
  );
}

export function StrikeZoneMockup({
  variant = "hero",
  className = "",
  compact = false,
}: StrikeZoneMockupProps) {
  if (variant === "manual") {
    return (
      <div className={`card-elevated p-4 ${className}`}>
        <p className="mb-2 text-xs font-medium text-muted">Manual call</p>
        <ZoneSvg
          showPrediction={false}
          showHeatmap={false}
          showPitches={true}
          manual
        />
        <p className="mt-2 text-center text-xs text-muted">Debatable call</p>
      </div>
    );
  }

  const showPrediction = variant === "hero" || variant === "prediction";
  const showHeatmap = variant === "prediction";
  const showBadge = variant === "hero" && !compact;

  return (
    <div className={`relative ${className}`}>
      <div className={`card-glow ${compact ? "p-4" : "p-5"}`}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-strike" />
            <span className="text-xs font-medium text-muted">Live</span>
          </div>
          <span className="text-xs text-muted">PitchIQ</span>
        </div>

        <ZoneSvg
          showPrediction={showPrediction}
          showHeatmap={showHeatmap}
          showPitches={true}
        />

        {!compact && (
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
                  <span className="h-1.5 w-1.5 rounded-full border border-dashed border-brand" />
                  Predicted
                </span>
              )}
            </div>
            <span>Pitch 6 of 12</span>
          </div>
        )}
      </div>

      {showBadge && (
        <div className="absolute -right-2 -top-2 rounded-[var(--radius-btn)] bg-brand px-2.5 py-1 text-xs font-medium text-white">
          STRIKE
        </div>
      )}

      {showPrediction && variant === "hero" && !compact && (
        <div className="absolute -bottom-3 -left-2 card-elevated px-3 py-1.5 text-xs">
          <span className="font-medium text-brand">Next:</span>{" "}
          <span className="text-foreground">High inside fastball</span>
        </div>
      )}
    </div>
  );
}

export function ComparisonMockup() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <p className="mb-3 text-center text-sm font-medium text-muted">
          Manual calls
        </p>
        <StrikeZoneMockup variant="manual" />
      </div>
      <div>
        <p className="mb-3 text-center text-sm font-medium text-brand">
          PitchIQ calls
        </p>
        <StrikeZoneMockup variant="hero" compact />
      </div>
    </div>
  );
}
