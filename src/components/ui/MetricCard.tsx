"use client";

import { motion } from "framer-motion";

interface MetricCardProps {
  value: string;
  label: string;
  index?: number;
}

export function MetricCard({ value, label, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border shadow-sm"
    >
      <span className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
        {value}
      </span>
      <span className="mt-2 text-sm md:text-base text-muted">{label}</span>
    </motion.div>
  );
}
