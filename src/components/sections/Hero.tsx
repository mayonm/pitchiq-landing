"use client";

import { ArrowRight } from "lucide-react";
import { ANNOUNCEMENT, HERO, TRUST_LOGOS } from "@/lib/constants";
import { ComparisonMockup } from "@/components/ui/StrikeZoneMockup";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="section-wash relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <Reveal onLoad delay={0}>
            <p className="mb-6 inline-block rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted">
              {ANNOUNCEMENT}
            </p>
          </Reveal>

          <Reveal onLoad delay={0.1}>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-[64px]">
              {HERO.headline}
            </h1>
          </Reveal>

          <Reveal onLoad delay={0.2}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              {HERO.subheadline}
            </p>
          </Reveal>

          <Reveal onLoad delay={0.3}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-[var(--radius-btn)] bg-brand px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                {HERO.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-xs text-muted">{HERO.microcopy}</p>
            </div>
          </Reveal>

          <Reveal onLoad delay={0.4}>
            <p className="mt-6 text-sm font-medium text-foreground">
              {HERO.trustLine}
            </p>
          </Reveal>

          <Reveal onLoad delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {TRUST_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="text-xs font-medium tracking-wide text-muted/60 uppercase"
                >
                  {logo}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal onLoad delay={0.6} className="mt-16 w-full max-w-3xl">
            <ComparisonMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
