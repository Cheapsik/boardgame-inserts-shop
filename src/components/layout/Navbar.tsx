"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store";

export function Navbar() {
  const count = useCartStore((s) =>
    s.lines.reduce((acc, l) => acc + l.quantity, 0)
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-brand"
        >
          Przegródka
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            Gry
          </Link>
          <Link
            href="/koszyk"
            className="transition-colors hover:text-foreground"
          >
            Koszyk
            {count > 0 ? (
              <span className="ml-1.5 inline-flex min-w-5 justify-center rounded-full bg-primary px-1.5 text-xs font-semibold text-primary-foreground">
                {count}
              </span>
            ) : null}
          </Link>
        </div>
      </nav>
    </header>
  );
}
