import Link from "next/link";

import { GameHeroBackground } from "@/components/game/GameHeroBackground";
import type { Game } from "@/types";

interface GameHeroProps {
  game: Game;
}

export function GameHero({ game }: GameHeroProps) {
  return (
    <section className="relative h-[65vh] min-h-[400px] w-full overflow-hidden">
      <GameHeroBackground src={game.heroImage} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,13,15,0.3) 0%, rgba(13,13,15,1) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute bottom-0 left-0 z-[1] p-8">
        <nav className="mb-3 font-mono text-xs text-[color:var(--text-muted)]">
          <Link href="/#gry" className="transition-colors hover:text-white">
            Gry
          </Link>
          <span className="mx-1.5" aria-hidden>
            →
          </span>
          <span className="text-[color:var(--text-muted)]">{game.name}</span>
        </nav>
        <h1 className="font-display text-4xl font-bold text-white">
          {game.name}
        </h1>
        <p className="mt-2 max-w-2xl text-base text-[color:var(--text-muted)]">
          {game.tagline}
        </p>
      </div>
    </section>
  );
}
