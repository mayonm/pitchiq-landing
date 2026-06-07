"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader
          title="Frequently asked questions"
          subtitle="Everything you need to know about PitchIQ"
        />
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
