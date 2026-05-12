"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Headphones, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast("Formularz kontaktowy wkrótce — na razie napisz na adres e-mail poniżej.");
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="relative overflow-hidden border-t border-border bg-surface/85 py-16 backdrop-blur-md lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-white">
            Skontaktuj się z nami
          </h2>
          <p className="mx-auto max-w-2xl text-text-muted">
            Masz pytanie o zamówienie, dopasowanie insertu do gry albo chcesz
            coś dopytać przed zakupem? Napisz — odpowiemy tak szybko, jak to
            możliwe.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-16">
              <div
                className="pointer-events-none absolute right-0 top-0 p-4 opacity-[0.07]"
                aria-hidden
              >
                <Headphones className="size-32 text-white" strokeWidth={1} />
              </div>
              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="mb-6 border-b border-border pb-4 text-xl font-bold text-white">
                    Dane kontaktowe
                  </h3>
                  <div className="space-y-6">
                    <div className="group flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Phone className="size-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-text-muted">
                          Telefon
                        </p>
                        <a
                          href="tel:+48123456789"
                          className="text-lg font-medium text-white transition-colors hover:text-brand"
                        >
                          +48 123 456 789
                        </a>
                        <p className="mt-1 text-sm text-text-muted">
                          pn–pt, 9:00–17:00
                        </p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Mail className="size-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-text-muted">
                          E-mail
                        </p>
                        <a
                          href="mailto:kontakt@przegrodka.pl"
                          className="text-lg font-medium text-white transition-colors hover:text-brand"
                        >
                          kontakt@przegrodka.pl
                        </a>
                        <p className="mt-1 text-sm text-text-muted">
                          Odpowiadamy zwykle w ciągu 24 h
                        </p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <MapPin className="size-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-text-muted">
                          Pracownia
                        </p>
                        <p className="text-lg font-medium text-white">
                          ul. Przykładowa 12
                        </p>
                        <p className="mt-1 text-sm text-text-muted">
                          00-001 Warszawa, Polska
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-wide text-text-muted">
                    Znajdź nas w sieci
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex size-10 items-center justify-center rounded-lg bg-surface text-text-muted transition-all hover:bg-brand hover:text-white"
                      aria-label="Facebook"
                    >
                      <svg
                        className="size-5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex size-10 items-center justify-center rounded-lg bg-surface text-text-muted transition-all hover:bg-brand hover:text-white"
                      aria-label="Instagram"
                    >
                      <svg
                        className="size-5 fill-current"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.527c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-surface p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
              <h3 className="mb-6 text-xl font-bold text-white">Napisz do nas</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="contact-form-name"
                    className="mb-1.5 block text-xs font-medium text-text-muted"
                  >
                    Imię lub nick
                  </label>
                  <input
                    id="contact-form-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface-elevated px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="Jak się do Ciebie zwracać?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-form-email"
                    className="mb-1.5 block text-xs font-medium text-text-muted"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-form-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-border bg-surface-elevated px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="twoj@email.pl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-form-message"
                    className="mb-1.5 block text-xs font-medium text-text-muted"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="contact-form-message"
                    name="message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-y rounded-lg border border-border bg-surface-elevated px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    placeholder="Opisz pytanie lub temat zamówienia…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
                >
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
