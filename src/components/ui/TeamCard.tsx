"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin: string;
  index?: number;
}

export function TeamCard({
  name,
  role,
  bio,
  initials,
  linkedin,
  index = 0,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border shadow-sm"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-blue-700 text-lg font-semibold text-white">
        {initials}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm text-accent font-medium">{role}</p>
      <p className="mt-3 text-sm text-muted leading-relaxed">{bio}</p>
      <a
        href={linkedin}
        className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        aria-label={`${name} on LinkedIn`}
      >
        <ExternalLink className="h-4 w-4" />
        LinkedIn
      </a>
    </motion.div>
  );
}
