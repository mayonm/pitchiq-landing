import { PROBLEM } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function Problem() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={PROBLEM.label}
          title={PROBLEM.title}
          subtitle={PROBLEM.subtitle}
          align="center"
        />

        <div className="relative mx-auto mt-8 max-w-2xl md:h-[420px]">
          <Reveal className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="card-elevated flex h-48 w-48 flex-col items-center justify-center md:h-56 md:w-56">
              <div className="h-24 w-20 border-2 border-foreground/20" />
              <p className="mt-3 text-xs font-medium text-muted">
                Strike zone
              </p>
            </div>
          </Reveal>

          {PROBLEM.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.1}
              className={`absolute ${card.position} z-20 w-44 md:w-52`}
            >
              <div className="card-elevated p-4">
                <p className="text-xs font-semibold text-foreground">
                  {card.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
