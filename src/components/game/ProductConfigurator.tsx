"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { GameHeroBackground } from "@/components/game/GameHeroBackground";
import { GameSetToggleCard } from "@/components/game/GameSetToggleCard";
import { OrderSummary } from "@/components/game/OrderSummary";
import { ORGANISER_PRODUCT_IMAGE_SRC } from "@/lib/assets";
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

  function toggleSet(id: string) {
    setSelectedSetIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function clearSelection() {
    setSelectedProductIds([]);
    setSelectedSetIds([]);
  }

  return (
    <div className="mx-auto max-w-[1280px]">
      <nav
        className="flex flex-wrap items-center gap-2 pb-6 text-sm text-text-muted"
        aria-label="Okruszki nawigacyjne"
      >
        <Link href="/" className="transition-colors hover:text-brand">
          Strona główna
        </Link>
        <span aria-hidden>/</span>
        <Link href="/#gry" className="transition-colors hover:text-brand">
          Gry
        </Link>
        <span aria-hidden>/</span>
        <span className="font-medium text-white">{game.name}</span>
      </nav>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-1 flex-col gap-6 lg:w-[65%]">
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-surface">
            <GameHeroBackground
              src={game.heroImage}
              imageClassName="transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
            {game.products.map((product) => {
              const selected = selectedProductIds.includes(product.id);
              const thumb = product.images[0] ?? ORGANISER_PRODUCT_IMAGE_SRC;
              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => toggleProduct(product.id)}
                  aria-pressed={selected}
                  title={product.name}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selected
                      ? "border-brand opacity-100 ring-1 ring-brand/40"
                      : "border-transparent opacity-70 hover:border-border hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 22vw, 120px"
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-2 space-y-8">
            <section>
              <h2 className="mb-4 text-xl font-bold text-white">Opis</h2>
              <p className="mb-4 leading-relaxed text-text-muted">
                {game.description}
              </p>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 shrink-0 text-brand"
                    aria-hidden
                  />
                  Druk 3D na zamówienie — dopasowanie do tego pudełka
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 shrink-0 text-brand"
                    aria-hidden
                  />
                  Przewidziane miejsce na karty w standardowych koszulkach
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2
                    className="size-4 shrink-0 text-brand"
                    aria-hidden
                  />
                  Projekt i produkcja w Polsce
                </li>
              </ul>
            </section>

            <div className="border-t border-border">
              <details className="help-faq group cursor-pointer border-b border-border py-4">
                <summary className="flex list-none items-center justify-between font-medium text-white">
                  <span>Szczegóły techniczne</span>
                  <span className="help-faq-chevron text-text-muted">
                    <span className="inline-block text-lg leading-none">▾</span>
                  </span>
                </summary>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-text-muted">
                  <div className="rounded-lg bg-surface p-3">
                    <span className="mb-1 block text-xs uppercase tracking-wide opacity-70">
                      Tytuł
                    </span>
                    <span className="font-semibold text-white">{game.name}</span>
                  </div>
                  <div className="rounded-lg bg-surface p-3">
                    <span className="mb-1 block text-xs uppercase tracking-wide opacity-70">
                      Produktów w ofercie
                    </span>
                    <span className="font-semibold text-white">
                      {game.products.length}
                    </span>
                  </div>
                  <div className="rounded-lg bg-surface p-3">
                    <span className="mb-1 block text-xs uppercase tracking-wide opacity-70">
                      Zestawów
                    </span>
                    <span className="font-semibold text-white">
                      {game.sets.length}
                    </span>
                  </div>
                  <div className="rounded-lg bg-surface p-3">
                    <span className="mb-1 block text-xs uppercase tracking-wide opacity-70">
                      Materiał
                    </span>
                    <span className="font-semibold text-white">PLA</span>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-[35%]">
          <div className="sticky top-24 flex flex-col gap-6">
            <div>
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-white lg:text-4xl">
                {game.name}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {game.tagline}
              </p>
            </div>

            {game.sets.length > 0 ? (
              <div>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-muted">
                  Zestawy
                </h2>
                <div className="flex flex-col gap-3">
                  {game.sets.map((set) => (
                    <GameSetToggleCard
                      key={set.id}
                      set={set}
                      isSelected={selectedSetIds.includes(set.id)}
                      onToggle={() => toggleSet(set.id)}
                    />
                  ))}
                </div>
              </div>
            ) : null}

            <OrderSummary
              selectedProducts={selectedProducts}
              selectedSets={selectedSets}
              game={game}
              onAfterAddToCart={clearSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
