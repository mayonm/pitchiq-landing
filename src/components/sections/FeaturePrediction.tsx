"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { StrikeZoneMockup } from "@/components/ui/StrikeZoneMockup";

export function FeaturePrediction() {
  const feature = FEATURES.prediction;

  return (
    <section className="py-20 md:py-28 bg-black/[0.02]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-accent-light px-4 py-1.5 text-sm font-medium text-accent">
              {feature.badge}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {feature.title}
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              {feature.description}
            </p>
            <ul className="mt-8 space-y-3">
              {feature.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  <span className="text-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <StrikeZoneMockup variant="prediction" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {FEATURES.pills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm text-muted"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
