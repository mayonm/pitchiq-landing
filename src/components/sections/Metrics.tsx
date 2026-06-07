import { METRICS } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function Metrics() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-10 text-center text-xs font-medium tracking-widest text-white/50 uppercase">
            {METRICS.label}
          </p>
        </Reveal>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-0">
          {METRICS.items.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.1}>
              <div className="flex items-center">
                {index > 0 && (
                  <div
                    className="mx-10 hidden h-12 w-px bg-white/15 md:block"
                    aria-hidden="true"
                  />
                )}
                <div className="text-center">
                  <p className="text-4xl font-semibold text-white md:text-5xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs font-medium tracking-widest text-white/50 uppercase">
                    {metric.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
