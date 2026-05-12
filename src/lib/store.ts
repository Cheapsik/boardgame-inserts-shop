import { create } from "zustand";
import { persist } from "zustand/middleware";

import { getProduct } from "@/data/games";
import type { CartLine } from "@/types";

function lineId(gameSlug: string, productId: string, variantId: string) {
  return `${gameSlug}:${productId}:${variantId}`;
}

interface CartState {
  lines: CartLine[];
  addLine: (input: {
    gameSlug: string;
    productId: string;
    variantId: string;
    quantity?: number;
  }) => void;
  setQuantity: (id: string, quantity: number) => void;
  removeLine: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      addLine: ({ gameSlug, productId, variantId, quantity = 1 }) => {
        const found = getProduct(gameSlug, productId);
        if (!found) return;
        const variant = found.product.variants.find((v) => v.id === variantId);
        if (!variant) return;

        const id = lineId(gameSlug, productId, variantId);
        const existing = get().lines.find((l) => l.id === id);
        if (existing) {
          set({
            lines: get().lines.map((l) =>
              l.id === id
                ? { ...l, quantity: l.quantity + quantity }
                : l
            ),
          });
          return;
        }

        set({
          lines: [
            ...get().lines,
            {
              id,
              gameSlug,
              productId,
              variantId,
              quantity,
            },
          ],
        });
      },
      setQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set({ lines: get().lines.filter((l) => l.id !== id) });
          return;
        }
        set({
          lines: get().lines.map((l) =>
            l.id === id ? { ...l, quantity } : l
          ),
        });
      },
      removeLine: (id) =>
        set({ lines: get().lines.filter((l) => l.id !== id) }),
      clear: () => set({ lines: [] }),
    }),
    { name: "przegrodka-cart" }
  )
);
