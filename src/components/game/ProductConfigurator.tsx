"use client";

import { useMemo, useState } from "react";

import { OrderSummary } from "./OrderSummary";
import { ProductCard } from "./ProductCard";
import type { Game } from "@/types";

interface ProductConfiguratorProps {
  game: Game;
}

export function ProductConfigurator({ game }: ProductConfiguratorProps) {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [selectedSetIds, setSelectedSetIds] = useState<string[]>([]);

  const selectedProducts = useMemo(
    () => game.products.filter((p) => selectedProductIds.includes(p.id)),
    [game.products, selectedProductIds],
  );

  const selectedSets = useMemo(
    () => game.sets.filter((s) => selectedSetIds.includes(s.id)),
    [game.sets, selectedSetIds],
  );

  function toggleProduct(id: string) {
    setSelectedProductIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function clearSelection() {
    setSelectedProductIds([]);
    setSelectedSetIds([]);
  }

  return (
    <div>
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Skompletuj swój zestaw
        </h2>
        <p className="mt-1 text-sm text-[color:var(--text-muted)]">
          Wybierz inserty i akcesoria dopasowane do {game.name}.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="grid grid-cols-2 gap-4">
          {game.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProductIds.includes(product.id)}
              onToggle={() => toggleProduct(product.id)}
            />
          ))}
        </div>

        <OrderSummary
          selectedProducts={selectedProducts}
          selectedSets={selectedSets}
          game={game}
          onAfterAddToCart={clearSelection}
        />
      </div>
    </div>
  );
}
