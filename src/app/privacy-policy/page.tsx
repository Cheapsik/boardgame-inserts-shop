import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności sklepu Przegródka.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-foreground">
        Polityka prywatności
      </h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Treść polityki prywatności — placeholder.
      </p>
    </main>
  );
}
