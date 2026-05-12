"use client";

import type { FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Mail, Phone, Truck, User, X } from "lucide-react";
import { toast } from "sonner";

import { ORGANISER_PRODUCT_IMAGE_SRC } from "@/lib/assets";
import type { CartItem, CartSetItem } from "@/types";

export interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  setItems: CartSetItem[];
  productsSubtotal: number;
  setsSubtotal: number;
  total: number;
}

export function CheckoutModal({
  open,
  onClose,
  items,
  setItems,
  productsSubtotal,
  setsSubtotal,
  total,
}: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [open, onKeyDown]);

  if (!open) {
    return null;
  }

  const firstImg =
    items[0]?.product.images[0] ??
    setItems[0]?.set.images[0] ??
    ORGANISER_PRODUCT_IMAGE_SRC;

  const titleShort =
    items.length + setItems.length === 1
      ? items[0]?.product.name ?? setItems[0]?.set.name ?? "Zamówienie"
      : `Koszyk (${items.reduce((a, i) => a + i.quantity, 0) + setItems.reduce((a, i) => a + i.quantity, 0)} szt.)`;

  const stockBadgeLabel =
    items.length === 0 || items.every(({ product }) => product.stock > 0)
      ? "Dostępne"
      : "Ograniczona dostępność";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success(
      "Dziękujemy! Potwierdzenie zamówienia wyślemy na podany adres e-mail.",
    );
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100]" role="presentation">
      <button
        type="button"
        aria-label="Zamknij"
        className="absolute inset-0 bg-background/85 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="pointer-events-none absolute left-1/3 top-1/4 size-[500px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/3 size-[400px] translate-x-1/2 rounded-full bg-brand/5 blur-[100px]" />

      <div className="relative z-[101] flex min-h-full items-center justify-center p-4 lg:p-8">
        <div
          className="pointer-events-auto flex max-h-[90vh] w-full max-w-[800px] flex-col overflow-hidden rounded-xl border border-border bg-[rgba(20,20,24,0.96)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-border p-6">
            <div>
              <h2
                id="checkout-modal-title"
                className="text-2xl font-bold tracking-tight text-white"
              >
                Szybkie zamówienie
              </h2>
              <p className="mt-1 text-sm font-medium text-text-muted">
                Dokończ zamówienie — podaj dane kontaktowe i przejdź do płatności.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex size-10 items-center justify-center rounded-lg border border-transparent bg-surface text-white transition-colors hover:bg-surface-elevated hover:border-border"
              aria-label="Zamknij"
            >
              <X className="size-5" strokeWidth={2} />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row">
            <div className="flex shrink-0 flex-col gap-6 border-border bg-surface p-6 lg:w-[320px] lg:border-r">
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border shadow-lg">
                <Image
                  src={firstImg}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden
                />
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex rounded bg-brand px-2 py-1 text-xs font-bold text-white">
                    {stockBadgeLabel}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold leading-tight text-white">
                  {titleShort}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  Podsumowanie pozycji z koszyka. Ceny zgodne z widokiem koszyka
                  (rabaty naliczone wcześniej).
                </p>
              </div>

              <div className="mt-auto border-t border-border pt-6">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-text-muted">Produkty</span>
                  <span className="font-medium text-white">
                    {Math.round(productsSubtotal * 100) / 100} zł
                  </span>
                </div>
                {setItems.length > 0 ? (
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-text-muted">Zestawy</span>
                    <span className="font-medium text-white">
                      {Math.round(setsSubtotal * 100) / 100} zł
                    </span>
                  </div>
                ) : null}
                <div className="mb-4 flex justify-between text-sm">
                  <span className="text-text-muted">Wysyłka</span>
                  <span className="text-sm font-medium text-discount-badge">
                    Do ustalenia
                  </span>
                </div>
                <div className="flex justify-between border-t border-dashed border-border pt-4">
                  <span className="font-bold text-white">Razem</span>
                  <span className="text-xl font-bold font-mono text-white">
                    {total} zł
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 lg:p-8">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label
                      htmlFor="checkout-name"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Imię i nazwisko
                    </label>
                    <div className="relative">
                      <User
                        className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-text-muted"
                        aria-hidden
                      />
                      <input
                        id="checkout-name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jan Kowalski"
                        className="w-full rounded-lg border border-border bg-surface-elevated py-3 pl-10 pr-4 text-sm text-white placeholder:text-text-muted/80 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="checkout-email"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      E-mail
                    </label>
                    <div className="relative">
                      <Mail
                        className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-text-muted"
                        aria-hidden
                      />
                      <input
                        id="checkout-email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jan@example.pl"
                        className="w-full rounded-lg border border-border bg-surface-elevated py-3 pl-10 pr-4 text-sm text-white placeholder:text-text-muted/80 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="checkout-phone"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Telefon{" "}
                      <span className="font-normal text-text-muted">
                        (opcjonalnie)
                      </span>
                    </label>
                    <div className="relative">
                      <Phone
                        className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-text-muted"
                        aria-hidden
                      />
                      <input
                        id="checkout-phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+48 123 456 789"
                        className="w-full rounded-lg border border-border bg-surface-elevated py-3 pl-10 pr-4 text-sm text-white placeholder:text-text-muted/80 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface p-3 text-sm text-text-muted">
                  <Truck className="size-5 shrink-0 text-brand" aria-hidden />
                  <span>
                    Koszt wysyłki podamy w podsumowaniu przed płatnością albo
                    wyślemy w osobnej wiadomości, jeśli wymaga wyceny.
                  </span>
                </div>

                <div className="mt-auto border-t border-border pt-4">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-lg bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:opacity-95 active:translate-y-px"
                  >
                    <span>Zamawiam</span>
                    <span className="size-1 rounded-full bg-white/50" />
                    <span className="font-mono">{total} zł</span>
                    <ArrowRight className="size-5" aria-hidden />
                  </button>
                  <p className="mt-3 text-center text-xs text-text-muted">
                    Płatność obsługuje certyfikowany operator. Złożenie
                    zamówienia oznacza akceptację regulaminu i polityki
                    prywatności sklepu.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
