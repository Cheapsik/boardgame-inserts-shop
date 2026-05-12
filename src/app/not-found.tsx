import type { Metadata } from "next";
import Link from "next/link";

import { Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Nie znaleziono",
  description: "Strona nie istnieje lub została przeniesiona — Przegródka.",
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh]">
      <div className="relative isolate overflow-hidden border-b border-border bg-surface-elevated py-16 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-25"
          style={{
            background:
              "radial-gradient(40rem 36rem at 50% 0%, rgba(232, 97, 10, 0.15), transparent 60%)",
          }}
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-brand">
            404
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ta strona nie istnieje
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-muted">
            Strona nie istnieje lub została przeniesiona.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <Home className="size-4" aria-hidden />
              Strona główna
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
