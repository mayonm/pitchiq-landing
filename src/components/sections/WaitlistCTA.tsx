"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { WAITLIST } from "@/lib/constants";

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section id="waitlist" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-16 text-center md:px-16 md:py-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background">
              {WAITLIST.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-background/70 leading-relaxed">
              {WAITLIST.subtitle}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-strike/20 px-6 py-3 text-strike"
              >
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">{WAITLIST.successMessage}</span>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={WAITLIST.placeholder}
                  className="flex-1 rounded-full border border-background/20 bg-background/10 px-5 py-3 text-sm text-background placeholder:text-background/50 outline-none focus:border-background/40"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
                >
                  {WAITLIST.button}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
