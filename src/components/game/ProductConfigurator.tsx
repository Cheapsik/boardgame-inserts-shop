import type { Game } from "@/types";

import { OrderSummary } from "./OrderSummary";
import { ProductCard } from "./ProductCard";

export function ProductConfigurator({ game }: { game: Game }) {
  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Produkty</h2>
        <ul className="space-y-4">
          {game.products.map((product) => (
            <li key={product.id}>
              <ProductCard gameSlug={game.slug} product={product} />
            </li>
          ))}
        </ul>
      </div>
      <OrderSummary />
    </div>
  );
}
