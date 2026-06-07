import { METRICS } from "@/lib/constants";

export function Metrics() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-xs font-medium tracking-widest text-background/50">
          {METRICS.label}
        </p>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-0">
          {METRICS.items.map((metric, index) => (
            <div key={metric.label} className="flex items-center">
              {index > 0 && (
                <div
                  className="mx-10 hidden h-12 w-px bg-background/15 md:block"
                  aria-hidden="true"
                />
              )}
              <div className="text-center">
                <p className="font-display text-4xl text-background md:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs font-medium tracking-widest text-background/50 uppercase">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
