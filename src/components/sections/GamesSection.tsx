"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { games } from "@/data/games";

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35 },
  }),
};

export function GamesSection() {
  return (
    <section id="gry" className="scroll-mt-20 bg-background px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Wybrane gry
        </h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Zaczynamy od titułów, które najczęściej trafiają na stół — lista będzie
          rosła wraz z kolekcją wzorów.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {games.map((game, i) => (
            <motion.li
              key={game.slug}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <Link
                href={`/game/${game.slug}`}
                className="block rounded-xl border border-border bg-card p-5 transition-colors hover:border-border-hover"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {game.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {game.tagline}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-brand">
                  Zobacz produkty →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
