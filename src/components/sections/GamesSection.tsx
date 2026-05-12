"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { Game } from "@/types";

function GameCard({ game }: { game: Game }) {
  const productCount = game.products.length;
  const [heroOk, setHeroOk] = useState(true);

  return (
    <Link
      href={`/game/${game.slug}`}
      className="group relative block h-full min-h-[300px] cursor-pointer"
      style={
        {
          ["--game-accent" as string]: game.accentColor,
        } as CSSProperties
      }
    >
      <motion.div
        className="relative h-full min-h-[300px] w-full overflow-hidden rounded-xl border border-[color:var(--border)] transition-colors hover:border-[color:var(--game-accent)]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        {heroOk ? (
          <Image
            src={game.heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setHeroOk(false)}
          />
        ) : (
          <div
            className="absolute inset-0 bg-[#1C1C23]"
            aria-hidden
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"
          aria-hidden
        />
        <div className="absolute right-4 top-4 z-[1] rounded-md bg-[color:var(--surface)]/80 px-2 py-1 text-xs font-medium tabular-nums text-white backdrop-blur-sm">
          {productCount}
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[1] p-6">
          <h3 className="font-display text-xl font-bold text-white">
            {game.name}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--text-muted)]">
            {game.tagline}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export function GamesSection({ games }: { games: Game[] }) {
  const n = games.length;

  if (n === 0) {
    return null;
  }
  return (
    <section
      id="gry"
      className="scroll-mt-24 bg-[color:var(--background)] px-4 py-24 sm:px-6"
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center overflow-hidden"
          aria-hidden
        >
          <span className="whitespace-nowrap font-black text-[120px] leading-none text-white opacity-[0.03]">
            PRZEGRÓDKA
          </span>
        </div>

        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
            KOLEKCJA
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-white">
            Wybierz swoją grę
          </h2>

          {n === 1 ? (
            <ul className="mt-10 grid grid-cols-1 gap-4">
              <li className="min-h-[320px]">
                <GameCard game={games[0]} />
              </li>
            </ul>
          ) : n === 2 ? (
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {games.map((game) => (
                <li key={game.slug} className="min-h-[300px]">
                  <GameCard game={game} />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-10 grid auto-rows-[minmax(300px,auto)] grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
              {games.map((game, i) => (
                <li
                  key={game.slug}
                  className={cn(
                    i === 0 && "md:col-span-2 md:row-span-2",
                    i > 0 && "min-h-[300px]"
                  )}
                >
                  <GameCard game={game} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
