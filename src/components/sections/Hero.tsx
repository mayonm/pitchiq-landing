"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/constants";
import { StrikeZoneMockup } from "@/components/ui/StrikeZoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 inline-block rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
              Free for high school baseball teams
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              {HERO.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {HERO.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-black/[0.02]"
              >
                {HERO.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <StrikeZoneMockup variant="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
