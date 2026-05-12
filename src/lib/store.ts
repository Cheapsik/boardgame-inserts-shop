import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartItem, CartSetItem, GameSet, Product } from "@/types";

interface CartStore {
  items: CartItem[];
  setItems: CartSetItem[];

  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
  updateProductQuantity: (productId: string, quantity: number) => void;

  addSet: (set: GameSet) => void;
  removeSet: (setId: string) => void;

  totalItems: () => number;
  subtotal: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      setItems: [],

      addProduct: (product) => {
        if (product.stock <= 0) return;

        set((state) => {
          const idx = state.items.findIndex((i) => i.product.id === product.id);
          if (idx === -1) {
            return {
              items: [...state.items, { product, quantity: 1 }],
              setItems: state.setItems,
            };
          }

          const line = state.items[idx];
          const nextQty = line.quantity + 1;
          if (nextQty > product.stock) return state;

          const nextItems = [...state.items];
          nextItems[idx] = { product, quantity: nextQty };
          return { items: nextItems, setItems: state.setItems };
        });
      },

      removeProduct: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== productId),
          setItems: state.setItems,
        })),

      updateProductQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeProduct(productId);
          return;
        }

        set((state) => {
          const idx = state.items.findIndex((i) => i.product.id === productId);
          if (idx === -1) return state;

          const line = state.items[idx];
          const capped = Math.min(quantity, line.product.stock);
          if (capped <= 0) {
            return {
              items: state.items.filter((i) => i.product.id !== productId),
              setItems: state.setItems,
            };
          }

          const nextItems = [...state.items];
          nextItems[idx] = { product: line.product, quantity: capped };
          return { items: nextItems, setItems: state.setItems };
        });
      },

      addSet: (gameSet) => {
        set((state) => {
          const idx = state.setItems.findIndex((s) => s.set.id === gameSet.id);
          if (idx === -1) {
            return {
              items: state.items,
              setItems: [...state.setItems, { set: gameSet, quantity: 1 }],
            };
          }

          const line = state.setItems[idx];
          const nextSetItems = [...state.setItems];
          nextSetItems[idx] = { set: gameSet, quantity: line.quantity + 1 };
          return { items: state.items, setItems: nextSetItems };
        });
      },

      removeSet: (setId) =>
        set((state) => ({
          items: state.items,
          setItems: state.setItems.filter((s) => s.set.id !== setId),
        })),

      totalItems: () => {
        const { items, setItems } = get();
        const p = items.reduce((a, i) => a + i.quantity, 0);
        const s = setItems.reduce((a, i) => a + i.quantity, 0);
        return p + s;
      },

      subtotal: () => {
        const { items, setItems } = get();
        let sum = 0;
        for (const { product, quantity } of items) {
          sum += product.price * quantity;
        }
        for (const { set, quantity } of setItems) {
          sum += set.setPrice * quantity;
        }
        return Math.round(sum * 100) / 100;
      },

      clearCart: () => set({ items: [], setItems: [] }),
    }),
    {
      name: "przegrodka-cart",
      partialize: (state) => ({
        items: state.items,
        setItems: state.setItems,
      }),
    }
  )
);
