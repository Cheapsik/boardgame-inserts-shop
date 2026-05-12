"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Inserty i przegródki
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Porządek w pudełku, zero kompromisów.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Wybierz grę, dopasuj wariant materiału i zamów przegródki przygotowane
            pod polskie wydania tam, gdzie to ma znaczenie.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#gry">Przeglądaj gry</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/koszyk">Koszyk</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
