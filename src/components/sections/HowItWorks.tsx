import { HOW_IT_WORKS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-chalk bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={HOW_IT_WORKS.label}
          title={HOW_IT_WORKS.title}
          subtitle={HOW_IT_WORKS.subtitle}
        />

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          <div
            className="absolute top-8 right-[16.67%] left-[16.67%] hidden h-px border-t border-dashed border-chalk md:block"
            aria-hidden="true"
          />

          {HOW_IT_WORKS.steps.map((step) => (
            <div key={step.title} className="relative">
              <span className="font-display text-5xl text-chalk md:text-6xl">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
