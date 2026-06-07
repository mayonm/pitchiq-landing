"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { WAITLIST } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

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
    <section id="waitlist" className="bg-brand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {WAITLIST.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70 leading-relaxed">
            {WAITLIST.subtitle}
          </p>
          <p className="mt-2 text-xs text-white/50">{WAITLIST.microcopy}</p>
        </Reveal>

        {submitted ? (
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm font-medium text-white/90">
              {WAITLIST.successMessage}
            </p>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={WAITLIST.placeholder}
                className="flex-1 rounded-[var(--radius-btn)] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] bg-white px-6 py-3 text-sm font-medium text-brand transition-opacity hover:opacity-90"
              >
                {WAITLIST.button}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
