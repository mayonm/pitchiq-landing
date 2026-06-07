import { FEATURES } from "@/lib/constants";
import { StrikeZoneMockup } from "@/components/ui/StrikeZoneMockup";

export function FeaturePrediction() {
  const feature = FEATURES.prediction;

  return (
    <section className="border-b border-chalk bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-clay">
              {feature.label}
            </p>
            <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
              {feature.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {feature.description}
            </p>
            <p className="mt-4 text-muted leading-relaxed">{feature.detail}</p>
          </div>

          <div>
            <StrikeZoneMockup variant="prediction" />
          </div>
        </div>
      </div>
    </section>
  );
}
