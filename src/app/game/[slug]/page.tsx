import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GameHero } from "@/components/game/GameHero";
import { games, getGameBySlug } from "@/data/games";

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const game = getGameBySlug(slug);
    return {
      title: game?.title ?? "Gra",
      description: game?.tagline,
    };
  });
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  return (
    <>
      <Navbar />
      <main>
        <GameHero game={game} />
      </main>
      <Footer />
    </>
  );
}
