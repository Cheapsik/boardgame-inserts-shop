"use client";

import { getProduct } from "@/data/games";
import type { GameSet } from "@/types";

function sumIndividualPrices(set: GameSet): number {
  let sum = 0;
  for (const pid of set.productIds) {
    const hit = getProduct(set.gameSlug, pid);
    if (hit) sum += hit.product.price;
  }
  return sum;
}

export function GameSetToggleCard({
  set,
  isSelected,
  onToggle,
}: {
  set: GameSet;
  isSelected: boolean;
  onToggle: () => void;
}) {
  const listSum = sumIndividualPrices(set);
  const saves = Math.max(0, Math.round((listSum - set.setPrice) * 100) / 100);

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full rounded-xl border p-4 text-left transition-colors ${
        isSelected
          ? "border-brand bg-brand/10 ring-1 ring-brand/30"
          : "border-border bg-surface hover:border-border hover:bg-surface-elevated"
      }`}
      aria-pressed={isSelected}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-brand">
        Zestaw
      </p>
      <h4 className="mt-1 text-base font-semibold text-white">{set.name}</h4>
      <p className="mt-1 line-clamp-2 text-sm text-text-muted">
        {set.description}
      </p>
      <p className="mt-3 text-sm text-text-muted">
        <span className="line-through tabular-nums">{listSum} zł</span>
        <span className="ml-2 font-mono font-semibold text-white">
          {set.setPrice} zł
        </span>
        {saves > 0 ? (
          <span className="ml-2 text-xs font-medium text-discount-badge">
            −{saves} zł
          </span>
        ) : null}
      </p>
      <span
        className={`mt-3 inline-block rounded-md px-2.5 py-1 text-xs font-medium ${
          isSelected
            ? "bg-brand text-white"
            : "border border-border text-text-muted"
        }`}
      >
        {isSelected ? "Wybrano ✓" : "Dodaj do zestawu"}
      </span>
    </button>
  );
}
