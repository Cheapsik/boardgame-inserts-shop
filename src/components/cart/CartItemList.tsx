"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/games";
import { useCartStore } from "@/lib/store";

export function CartItemList() {
  const lines = useCartStore((s) => s.lines);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeLine = useCartStore((s) => s.removeLine);

  if (lines.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">Twój koszyk jest pusty.</p>
        <Button asChild className="mt-4">
          <Link href="/">Wróć do sklepu</Link>
        </Button>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {lines.map((line) => {
        const hit = getProduct(line.gameSlug, line.productId);
        const variant = hit?.product.variants.find((v) => v.id === line.variantId);
        if (!hit || !variant) return null;
        const lineTotal = variant.pricePln * line.quantity;

        return (
          <li
            key={line.id}
            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium text-foreground">{hit.product.name}</p>
              <p className="text-sm text-muted-foreground">
                {hit.game.title} · {variant.label}
              </p>
              <p className="mt-1 text-sm tabular-nums text-foreground">
                {variant.pricePln} zł × {line.quantity} ={" "}
                <span className="font-semibold">{lineTotal} zł</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor={`qty-${line.id}`}>
                Ilość
              </label>
              <input
                id={`qty-${line.id}`}
                type="number"
                min={1}
                max={99}
                className="h-9 w-16 rounded-md border border-input bg-background px-2 text-center text-sm"
                value={line.quantity}
                onChange={(e) =>
                  setQuantity(line.id, Number.parseInt(e.target.value, 10) || 1)
                }
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeLine(line.id)}
              >
                Usuń
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
