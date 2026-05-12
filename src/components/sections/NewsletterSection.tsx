"use client";

import type { FormEvent } from "react";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast("Newsletter uruchomimy wkrótce — damy znać, gdy zapis będzie aktywny.");
    setEmail("");
  }

  return (
    <section
      className="scroll-mt-24 border-t border-border bg-surface px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl rounded-xl border border-border bg-surface-elevated px-6 py-10 text-center sm:px-10 sm:py-12">
          <Mail
            className="mx-auto size-8 text-brand"
            strokeWidth={1.5}
            aria-hidden
          />
          <h2
            id="newsletter-heading"
            className="font-display mt-5 text-2xl font-bold text-white sm:text-3xl"
          >
            Dołącz do naszego grona
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">
            Otrzymuj wcześniejszy dostęp do nowych projektów, informacje o
            przedsprzedażach i krótkie wskazówki od nas prosto na skrzynkę.
          </p>
          <form
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-stretch"
            onSubmit={handleSubmit}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Adres e-mail
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Wpisz swój e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-11 w-full flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <button
              type="submit"
              className="min-h-11 shrink-0 rounded-lg bg-brand px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:px-8"
            >
              Zapisz się
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
