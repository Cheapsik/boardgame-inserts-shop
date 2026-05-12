"use client";

import { CartItemList } from "@/components/cart/CartItemList";
import { CartSummary } from "@/components/cart/CartSummary";
import { useCartStore } from "@/lib/store";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const setItems = useCartStore((s) => s.setItems);
  const removeProduct = useCartStore((s) => s.removeProduct);
  const removeSet = useCartStore((s) => s.removeSet);
  const updateProductQuantity = useCartStore((s) => s.updateProductQuantity);

  return (
    <main className="container mx-auto px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-white">Koszyk</h1>
      <p className="mt-2 text-sm text-text-muted">
        Zweryfikuj ilości przed zamówieniem.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        <CartItemList
          items={items}
          setItems={setItems}
          onRemoveProduct={removeProduct}
          onRemoveSet={removeSet}
          onUpdateQuantity={updateProductQuantity}
        />
        <CartSummary items={items} setItems={setItems} />
      </div>
    </main>
  );
}
