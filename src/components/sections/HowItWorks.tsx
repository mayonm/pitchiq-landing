"use client";

import { motion } from "framer-motion";
import { Camera, Target, BrainCircuit } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICONS = {
  camera: Camera,
  target: Target,
  brain: BrainCircuit,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          title={HOW_IT_WORKS.title}
          subtitle={HOW_IT_WORKS.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {HOW_IT_WORKS.steps.map((step, index) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-xs font-medium text-muted">
                  {step.number}
                </span>
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
