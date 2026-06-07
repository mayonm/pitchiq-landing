import { HOW_IT_WORKS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={HOW_IT_WORKS.label}
          title={HOW_IT_WORKS.title}
          subtitle={HOW_IT_WORKS.subtitle}
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.1}>
              <div className="card-elevated flex h-full flex-col p-8">
                <span className="text-4xl font-semibold text-brand/20">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
