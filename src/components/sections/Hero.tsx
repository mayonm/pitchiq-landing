"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO } from "@/lib/constants";
import { StrikeZoneMockup } from "@/components/ui/StrikeZoneMockup";
import { DiamondPattern } from "@/components/ui/DiamondPattern";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-chalk">
      <DiamondPattern />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-6 text-xs font-medium tracking-widest text-clay">
              {HERO.eyebrow}
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {HERO.subheadline}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                {HERO.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-md border border-chalk px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/20"
              >
                {HERO.secondaryCta}
              </a>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <StrikeZoneMockup variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
