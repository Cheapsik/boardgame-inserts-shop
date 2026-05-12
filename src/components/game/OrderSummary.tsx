"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/games";
import { useCartStore } from "@/lib/store";

export function OrderSummary() {
  const lines = useCartStore((s) => s.lines);

  const subtotal = lines.reduce((sum, line) => {
    const hit = getProduct(line.gameSlug, line.productId);
    const variant = hit?.product.variants.find((v) => v.id === line.variantId);
    if (!variant) return sum;
    return sum + variant.pricePln * line.quantity;
  }, 0);

  return (
    <aside className="h-fit rounded-xl border border-border bg-surface-elevated p-5 lg:sticky lg:top-20">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        W koszyku
      </h2>
      {lines.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">
          Jeszcze nic tu nie ma — dodaj produkt z listy obok.
        </p>
      ) : (
        <ul className="mt-3 space-y-2 text-sm text-foreground">
          {lines.map((line) => {
            const hit = getProduct(line.gameSlug, line.productId);
            const variant = hit?.product.variants.find(
              (v) => v.id === line.variantId
            );
            if (!hit || !variant) return null;
            return (
              <li key={line.id} className="flex justify-between gap-2">
                <span className="truncate">
                  {hit.product.name}{" "}
                  <span className="text-muted-foreground">
                    ×{line.quantity}
                  </span>
                </span>
                <span className="shrink-0 tabular-nums">
                  {variant.pricePln * line.quantity} zł
                </span>
              </li>
            );
          })}
        </ul>
      )}
      <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="text-muted-foreground">Suma częściowa</span>
        <span className="font-semibold tabular-nums text-foreground">
          {subtotal} zł
        </span>
      </div>
      <Button asChild className="mt-4 w-full">
        <Link href="/koszyk">Przejdź do koszyka</Link>
      </Button>
    </aside>
  );
}
