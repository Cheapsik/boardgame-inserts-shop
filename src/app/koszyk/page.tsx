import type { Metadata } from "next";

import { CartItemList } from "@/components/cart/CartItemList";
import { CartSummary } from "@/components/cart/CartSummary";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Koszyk",
  description: "Podgląd koszyka i kody rabatowe.",
};

export default function CartPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Koszyk
        </h1>
        <p className="mt-2 text-muted-foreground">
          Zweryfikuj ilości i ewentualnie zastosuj kod rabatowy przed zamówieniem.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <CartItemList />
          <CartSummary />
        </div>
      </main>
      <Footer />
    </>
  );
}
