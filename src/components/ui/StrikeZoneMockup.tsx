"use client";

import { motion } from "framer-motion";

interface Pitch {
  x: number;
  y: number;
  type: "strike" | "ball";
  delay: number;
}

interface StrikeZoneMockupProps {
  variant?: "hero" | "abs" | "prediction";
  className?: string;
}

const HERO_PITCHES: Pitch[] = [
  { x: 145, y: 95, type: "strike", delay: 0 },
  { x: 175, y: 130, type: "strike", delay: 0.3 },
  { x: 110, y: 150, type: "ball", delay: 0.6 },
  { x: 200, y: 80, type: "ball", delay: 0.9 },
  { x: 160, y: 115, type: "strike", delay: 1.2 },
];

const PREDICTION_POINT = { x: 185, y: 105 };

export function StrikeZoneMockup({
  variant = "hero",
  className = "",
}: StrikeZoneMockupProps) {
  const showPrediction = variant === "hero" || variant === "prediction";
  const showHeatmap = variant === "prediction";
  const showBadge = variant === "hero";

  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={variant === "hero" ? { y: [0, -8, 0] } : undefined}
        transition={
          variant === "hero"
            ? { duration: 4, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
        className="relative rounded-2xl border border-border bg-card p-6 shadow-lg"
      >
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-ball" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-strike" />
          </div>
          <span className="text-xs font-medium text-muted">PitchIQ Live</span>
        </div>

        <svg viewBox="0 0 300 220" className="w-full" aria-hidden="true">
          <rect
            x="10"
            y="10"
            width="280"
            height="200"
            rx="8"
            fill="#f1f5f9"
            stroke="#e2e8f0"
            strokeWidth="1"
          />

          <rect
            x="95"
            y="55"
            width="110"
            height="130"
            rx="2"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 3 }).map((_, col) => (
              <line
                key={`grid-${row}-${col}`}
                x1={95 + col * 36.67}
                y1={55}
                x2={95 + col * 36.67}
                y2={185}
                stroke="#e2e8f0"
                strokeWidth="0.5"
              />
            ))
          )}
          {Array.from({ length: 5 }).map((_, row) => (
            <line
              key={`hgrid-${row}`}
              x1={95}
              y1={55 + row * 32.5}
              x2={205}
              y2={55 + row * 32.5}
              stroke="#e2e8f0"
              strokeWidth="0.5"
            />
          ))}

          {showHeatmap && (
            <>
              <circle cx="175" cy="105" r="28" fill="#3b82f6" opacity="0.15" />
              <circle cx="175" cy="105" r="18" fill="#3b82f6" opacity="0.25" />
              <circle cx="175" cy="105" r="10" fill="#3b82f6" opacity="0.4" />
            </>
          )}

          {HERO_PITCHES.map((pitch, i) => (
            <motion.circle
              key={i}
              cx={pitch.x}
              cy={pitch.y}
              r="6"
              fill={pitch.type === "strike" ? "#22c55e" : "#ef4444"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.85 }}
              transition={{ delay: pitch.delay, duration: 0.4 }}
            />
          ))}

          {showPrediction && (
            <>
              <motion.circle
                cx={PREDICTION_POINT.x}
                cy={PREDICTION_POINT.y}
                r="10"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="4 3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  delay: 1.5,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.circle
                cx={PREDICTION_POINT.x}
                cy={PREDICTION_POINT.y}
                r="4"
                fill="#3b82f6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, duration: 0.3 }}
              />
            </>
          )}

          <text x="150" y="205" textAnchor="middle" fill="#94a3b8" fontSize="10">
            Strike Zone
          </text>
        </svg>

        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-strike" />
              Strike
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-ball" />
              Ball
            </span>
            {showPrediction && (
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full border-2 border-dashed border-accent" />
                Predicted
              </span>
            )}
          </div>
          <span className="text-muted">Pitch 6 of 12</span>
        </div>
      </motion.div>

      {showBadge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.4 }}
          className="absolute -right-3 -top-3 rounded-lg bg-strike px-3 py-1.5 text-sm font-bold text-white shadow-md"
        >
          STRIKE
        </motion.div>
      )}

      {showPrediction && variant === "hero" && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.4 }}
          className="absolute -bottom-4 -left-3 rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-md"
        >
          <span className="font-medium text-accent">Next pitch:</span>{" "}
          <span className="text-foreground">High inside fastball</span>
        </motion.div>
      )}
    </div>
  );
}
