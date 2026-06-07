"use client";

import { METRICS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MetricCard } from "@/components/ui/MetricCard";

export function Metrics() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title="Built on real data"
          subtitle="Our models are trained and optimized for high school baseball practice"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {METRICS.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
