import { FEATURES } from "@/lib/constants";
import { StrikeZoneMockup } from "@/components/ui/StrikeZoneMockup";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturePrediction() {
  const feature = FEATURES.prediction;

  return (
    <section className="bg-brand-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1 lg:sticky lg:top-28">
            <Reveal delay={0.15}>
              <StrikeZoneMockup variant="prediction" />
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-medium tracking-widest text-muted uppercase">
              {feature.label}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {feature.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {feature.description}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {feature.detail}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
