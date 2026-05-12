"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { getPriceAfterDiscount } from "@/lib/discount";
import { useDiscount } from "@/hooks/useDiscount";
import { useCartStore } from "@/lib/store";
import type { Game, GameSet, Product } from "@/types";

interface OrderSummaryProps {
  selectedProducts: Product[];
  selectedSets: GameSet[];
  game: Game;
  onAfterAddToCart?: () => void;
}

export function OrderSummary({
  selectedProducts,
  selectedSets,
  game,
  onAfterAddToCart,
}: OrderSummaryProps) {
  const router = useRouter();
  const addProduct = useCartStore((s) => s.addProduct);
  const addSet = useCartStore((s) => s.addSet);

  const discountInfo = useDiscount(selectedProducts);

  const setsTotal = useMemo(
    () => selectedSets.reduce((sum, s) => sum + s.setPrice, 0),
    [selectedSets],
  );

  const productsAfterDiscount = getPriceAfterDiscount(
    selectedProducts,
    discountInfo,
  );
  const finalTotal = productsAfterDiscount + setsTotal;

  const hasSelection =
    selectedProducts.length > 0 || selectedSets.length > 0;

  function handleAddToCart() {
    for (const p of selectedProducts) {
      addProduct(p);
    }
    for (const s of selectedSets) {
      addSet(s);
    }
    onAfterAddToCart?.();
    router.push("/koszyk");
  }

  return (
    <aside
      className="sticky top-24 rounded-xl border border-border bg-[rgba(20,20,24,0.9)] p-5 backdrop-blur-md"
      aria-label="Podsumowanie zestawu"
    >
      <h2 className="text-lg font-bold text-white">Twój zestaw</h2>
      <p className="mt-0.5 text-xs text-text-muted">{game.name}</p>

      {!hasSelection ? (
        <p className="mt-6 text-center text-sm text-text-muted">
          Wybierz produkty które chcesz zamówić
        </p>
      ) : (
        <>
          <ul className="mt-4 space-y-2">
            {selectedProducts.map((p) => (
              <li key={p.id} className="flex justify-between gap-2 text-sm">
                <span className="text-text-muted">{p.name}</span>
                <span className="shrink-0 font-mono text-white">
                  {p.price} zł
                </span>
              </li>
            ))}
            {selectedSets.map((s) => (
              <li key={s.id} className="flex justify-between gap-2 text-sm">
                <span className="text-text-muted">{s.name}</span>
                <span className="shrink-0 font-mono text-white">
                  {s.setPrice} zł
                </span>
              </li>
            ))}
          </ul>

          {discountInfo.eligible ? (
            <div className="mt-4 space-y-2">
              <div className="inline-block rounded-md bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-400">
                Zniżka {discountInfo.percentage}%
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Oszczędzasz</span>
                <span className="font-mono font-semibold text-discount-badge">
                  −{discountInfo.savedAmount} zł
                </span>
              </div>
            </div>
          ) : null}

          <div className="my-4 h-px bg-border" role="separator" />

          <div className="flex justify-between gap-2">
            <span className="font-bold text-white">Razem</span>
            <span className="font-mono font-bold text-white">
              {finalTotal} zł
            </span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-4 w-full rounded-lg bg-brand py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            Dodaj do koszyka →
          </button>
          <Link
            href="/#gry"
            className="mt-2 flex w-full items-center justify-center rounded-lg border border-border py-2 text-sm text-text-muted transition-colors hover:border-brand hover:text-white"
          >
            Kontynuuj przeglądanie
          </Link>
        </>
      )}
    </aside>
  );
}
