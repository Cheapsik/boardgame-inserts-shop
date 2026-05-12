import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wysyłka",
  description: "Informacje o wysyłce — Przegródka.",
};

export default function ShippingPage() {
  return (
    <main className="mx-auto max-w-2xl bg-background/75 px-4 py-12 backdrop-blur-md sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        Wysyłka
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Zasady wysyłki — placeholder.
      </p>
    </main>
  );
}
