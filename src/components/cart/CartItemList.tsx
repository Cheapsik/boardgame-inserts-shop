"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Trash2 } from "lucide-react";

import { ProductPlaceholderImage } from "@/components/ui/ProductPlaceholderImage";
import type { CartItem, CartSetItem, ProductCategory } from "@/types";

const categoryLabel: Record<ProductCategory, string> = {
  insert: "Insert",
  accessory: "Akcesorium",
  pad: "Podkładka",
};

export interface CartItemListProps {
  items: CartItem[];
  setItems: CartSetItem[];
  onRemoveProduct: (id: string) => void;
  onRemoveSet: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export function CartItemList({
  items,
  setItems,
  onRemoveProduct,
  onRemoveSet,
  onUpdateQuantity,
}: CartItemListProps) {
  const empty = items.length === 0 && setItems.length === 0;

  if (empty) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <ShoppingCart
          className="text-text-muted"
          size={48}
          strokeWidth={1.25}
          aria-hidden
        />
        <p className="mt-4 text-lg text-text-muted">
          Twoja skrzynia jest pusta
        </p>
        <Link
          href="/"
          className="mt-6 rounded-lg border border-border px-4 py-2 text-sm text-text-muted transition-colors hover:border-brand hover:text-white"
        >
          Wróć do sklepu
        </Link>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      <AnimatePresence mode="popLayout">
        {items.map((line) => {
          const lineTotal = line.product.price * line.quantity;
          const maxQty = line.product.stock;

          return (
            <motion.li
              key={`product-${line.product.id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4"
            >
              <div className="relative size-[72px] shrink-0 overflow-hidden rounded-lg">
                <ProductPlaceholderImage
                  src={line.product.images[0]}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="72px"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">
                  {line.product.name}
                </p>
                <p className="mt-0.5 text-xs capitalize text-text-muted">
                  {line.product.gameSlug}
                </p>
                <span className="mt-2 inline-block rounded-full border border-border bg-surface-elevated px-2.5 py-0.5 font-mono text-xs text-text-muted">
                  {categoryLabel[line.product.category]}
                </span>
              </div>

              <div className="flex shrink-0 items-center">
                <div className="flex items-center gap-0.5 rounded-md border border-border bg-surface-elevated p-0.5">
                  <button
                    type="button"
                    aria-label="Zmniejsz ilość"
                    className="flex size-7 items-center justify-center rounded-md border border-border bg-surface-elevated text-sm text-white transition-colors hover:bg-surface disabled:opacity-40"
                    disabled={line.quantity <= 1}
                    onClick={() =>
                      onUpdateQuantity(line.product.id, line.quantity - 1)
                    }
                  >
                    −
                  </button>
                  <span className="min-w-8 px-1 text-center text-sm tabular-nums text-white">
                    {line.quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Zwiększ ilość"
                    className="flex size-7 items-center justify-center rounded-md border border-border bg-surface-elevated text-sm text-white transition-colors hover:bg-surface disabled:opacity-40"
                    disabled={line.quantity >= maxQty}
                    onClick={() =>
                      onUpdateQuantity(line.product.id, line.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <p className="ml-4 min-w-[70px] text-right font-mono text-sm text-white">
                  {lineTotal} zł
                </p>

                <button
                  type="button"
                  aria-label="Usuń z koszyka"
                  className="ml-2 text-text-muted transition-colors hover:text-red-400"
                  onClick={() => onRemoveProduct(line.product.id)}
                >
                  <Trash2 className="size-5" strokeWidth={1.75} />
                </button>
              </div>
            </motion.li>
          );
        })}

        {setItems.map((line) => (
          <motion.li
            key={`set-${line.set.id}`}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4"
          >
            <div className="relative size-[72px] shrink-0 overflow-hidden rounded-lg">
              <ProductPlaceholderImage
                src={line.set.images[0]}
                alt=""
                fill
                className="object-cover"
                sizes="72px"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white">{line.set.name}</p>
              <p className="mt-0.5 text-xs capitalize text-text-muted">
                {line.set.gameSlug}
              </p>
              <span className="mt-2 inline-block rounded-full border border-border bg-surface-elevated px-2.5 py-0.5 font-mono text-xs text-text-muted">
                Zestaw
              </span>
            </div>

            <div className="flex shrink-0 items-center">
              <div
                className="w-[102px] shrink-0"
                aria-hidden
              />

              <p className="min-w-[70px] text-right font-mono text-sm text-white">
                {line.set.setPrice} zł
              </p>
              <button
                type="button"
                aria-label="Usuń zestaw z koszyka"
                className="ml-2 text-text-muted transition-colors hover:text-red-400"
                onClick={() => onRemoveSet(line.set.id)}
              >
                <Trash2 className="size-5" strokeWidth={1.75} />
              </button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
