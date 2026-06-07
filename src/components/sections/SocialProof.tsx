import { SOCIAL_PROOF } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function SocialProof() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label={SOCIAL_PROOF.label}
          title={SOCIAL_PROOF.title}
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SOCIAL_PROOF.testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <div className="card-elevated flex h-full flex-col p-8">
                <p className="flex-1 text-base leading-relaxed text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {item.role} · {item.org}
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
