"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
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
    <section id="waitlist" className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-display text-3xl tracking-tight text-background md:text-4xl">
          {WAITLIST.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-background/60 leading-relaxed">
          {WAITLIST.subtitle}
        </p>

        {submitted ? (
          <p className="mt-8 text-sm font-medium text-background/80">
            {WAITLIST.successMessage}
          </p>
        ) : (
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
              className="flex-1 rounded-md border border-background/15 bg-background/5 px-4 py-3 text-sm text-background placeholder:text-background/40 outline-none focus:border-background/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-navy transition-opacity hover:opacity-90"
            >
              {WAITLIST.button}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
