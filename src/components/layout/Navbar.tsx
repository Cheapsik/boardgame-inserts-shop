"use client";

import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useCartStore } from "@/lib/store";

const navLinkClass =
  "text-sm text-text-muted transition-colors hover:text-white";

export function Navbar() {
  const count = useCartStore((s) => s.totalItems());
  const [logoFailed, setLogoFailed] = useState(false);
  /** Persist rehydrates only on client — keep first paint aligned with SSR to avoid hydration mismatch. */
  const [cartUiReady, setCartUiReady] = useState(false);
  useEffect(() => {
    setCartUiReady(true);
  }, []);

  const displayCount = cartUiReady ? count : 0;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-[rgba(13,13,15,0.85)] backdrop-blur-md"
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="relative flex shrink-0 items-center gap-2 no-underline"
        >
          {!logoFailed ? (
            <Image
              src="/assets/przegrodka_logo.png"
              alt="Przegródka"
              width={200}
              height={56}
              className="h-9 w-auto max-w-[200px] object-contain object-left sm:h-10"
              priority
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">
              Przegródka
            </span>
          )}
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex items-center gap-8">
            <Link href="/#gry" className={navLinkClass}>
              Gry
            </Link>
            <Link href="/#o-nas" className={navLinkClass}>
              O nas
            </Link>
            <Link href="/#kontakt" className={navLinkClass}>
              Kontakt
            </Link>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-end">
          <Link
            href="/koszyk"
            className="relative rounded-md p-2 text-text-muted transition-colors hover:text-white"
            aria-label={`Koszyk${displayCount > 0 ? `, ${displayCount} pozycji` : ""}`}
          >
            <ShoppingCart className="size-6" strokeWidth={1.75} />
            {displayCount > 0 ? (
              <span
                className="absolute -right-0.5 -top-0.5 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold leading-none text-white"
                aria-hidden
              >
                {displayCount > 99 ? "99+" : displayCount}
              </span>
            ) : null}
          </Link>
        </div>
      </nav>
    </header>
  );
}
