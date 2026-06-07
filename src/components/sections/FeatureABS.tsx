import { FEATURES } from "@/lib/constants";
import { StrikeZoneMockup } from "@/components/ui/StrikeZoneMockup";
import { Reveal } from "@/components/ui/Reveal";

export function FeatureABS() {
  const feature = FEATURES.abs;

  return (
    <section id="product" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
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

          <div className="lg:sticky lg:top-28">
            <Reveal delay={0.15}>
              <StrikeZoneMockup variant="abs" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
