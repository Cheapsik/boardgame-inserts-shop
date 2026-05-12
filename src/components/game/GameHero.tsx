import Link from "next/link";

import type { Game } from "@/types";

import { ProductConfigurator } from "./ProductConfigurator";

interface GameHeroProps {
  game: Game;
}

export function GameHero({ game }: GameHeroProps) {
  return (
    <section className="border-b border-border bg-surface px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <nav className="text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{game.title}</span>
        </nav>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {game.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">{game.tagline}</p>
        <ProductConfigurator game={game} />
      </div>
    </section>
  );
}
