import { FAQ_ITEMS } from "@/lib/constants";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-3 text-xs font-medium tracking-widest text-muted uppercase">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Questions? We&apos;ve got answers.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={FAQ_ITEMS} />
        </Reveal>
      </div>
    </section>
  );
}
