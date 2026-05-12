import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GameHero } from "@/components/game/GameHero";
import { ProductConfigurator } from "@/components/game/ProductConfigurator";
import { games } from "@/data/games";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);
  if (!game) {
    return { title: "Gra" };
  }
  return {
    title: game.name,
    description: game.description,
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    notFound();
  }

  return (
    <main>
      <GameHero game={game} />
      <div className="container mx-auto px-4 py-12">
        <ProductConfigurator game={game} />
      </div>
    </main>
  );
}
