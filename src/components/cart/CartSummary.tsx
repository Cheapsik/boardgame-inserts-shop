"use client";

import { useMemo, useState } from "react";

import { CheckoutModal } from "@/components/checkout/CheckoutModal";
import type { CartItem, CartSetItem } from "@/types";

export interface CartSummaryProps {
  items: CartItem[];
  setItems: CartSetItem[];
}

export function CartSummary({ items, setItems }: CartSummaryProps) {
  const [promoCode, setPromoCode] = useState("");
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const empty = items.length === 0 && setItems.length === 0;

  const productsSubtotal = useMemo(
    () =>
      items.reduce((sum, { product, quantity }) => {
        return sum + product.price * quantity;
      }, 0),
    [items],
  );

  const setsSubtotal = useMemo(
    () =>
      setItems.reduce((sum, { set, quantity }) => {
        return sum + set.setPrice * quantity;
      }, 0),
    [setItems],
  );

  const total = useMemo(
    () => Math.round((productsSubtotal + setsSubtotal) * 100) / 100,
    [productsSubtotal, setsSubtotal],
  );

  if (empty) {
    return null;
  }

  return (
    <>
    <aside className="sticky top-24 rounded-xl border border-border bg-[rgba(20,20,24,0.9)] p-5 backdrop-blur-md">
      <h2 className="text-lg font-bold text-white">Podsumowanie</h2>

      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between gap-2">
          <span className="text-text-muted">Produkty</span>
          <span className="font-mono tabular-nums text-white">
            {Math.round(productsSubtotal * 100) / 100} zł
          </span>
        </div>
        {setItems.length > 0 ? (
          <div className="flex justify-between gap-2">
            <span className="text-text-muted">Zestawy</span>
            <span className="font-mono tabular-nums text-white">
              {Math.round(setsSubtotal * 100) / 100} zł
            </span>
          </div>
        ) : null}
      </div>

      <div className="my-3 h-px bg-border" role="separator" />

      <div className="flex justify-between gap-2 text-sm">
        <span className="text-white">Wysyłka:</span>
        <span className="text-text-muted">do ustalenia</span>
      </div>

      <div className="my-3 h-px bg-border" role="separator" />

      <div className="flex justify-between gap-2">
        <span className="font-bold text-white">Razem:</span>
        <span className="text-xl font-bold font-mono text-white">{total} zł</span>
      </div>

      <p className="mt-2 text-xs italic text-text-muted">
        Zniżki zostały zastosowane przy dodawaniu do koszyka.
      </p>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Kod rabatowy"
          className="min-w-0 flex-1 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-white placeholder:text-text-muted"
          aria-label="Kod rabatowy"
        />
        <button
          type="button"
          className="shrink-0 rounded-lg border border-border px-4 py-2 text-sm text-text-muted transition-colors hover:border-brand hover:text-white"
        >
          Zastosuj
        </button>
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-lg bg-brand py-3 font-medium text-white transition-opacity hover:opacity-90"
        onClick={() => setCheckoutOpen(true)}
      >
        Złóż zamówienie →
      </button>
    </aside>

    <CheckoutModal
      open={checkoutOpen}
      onClose={() => setCheckoutOpen(false)}
      items={items}
      setItems={setItems}
      productsSubtotal={productsSubtotal}
      setsSubtotal={setsSubtotal}
      total={total}
    />
    </>
  );
}
