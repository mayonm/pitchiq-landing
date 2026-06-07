import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

interface CTABeatProps {
  text: string;
}

export function CTABeat({ text }: CTABeatProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-[var(--radius-card)] bg-brand-light px-8 py-10 md:flex-row md:px-12">
            <p className="text-center text-lg font-medium text-foreground md:text-left">
              {text}
            </p>
            <a
              href="#waitlist"
              className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-btn)] bg-brand px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
