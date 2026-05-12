"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { AnimatedMeshBackground } from "@/components/ui/AnimatedMeshBackground";
import { ORGANISER_PRODUCT_IMAGE_SRC } from "@/lib/assets";
import { games } from "@/data/games";

export function HeroSection() {
  const firstProduct = games[0]?.products[0];
  const [heroImgOk, setHeroImgOk] = useState(true);

  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[color:var(--background)]">
      <AnimatedMeshBackground />
      <div className="relative z-10 flex flex-1 items-center px-4 py-16 sm:px-6 lg:py-0">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-8">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
              <span className="mr-2 inline-block text-[0.65rem] leading-none">
                ●
              </span>
              DRUK 3D · RĘKODZIEŁO
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white lg:text-5xl">
              Porządek w chaosie twojej planszy
            </h1>
            <p className="mt-4 max-w-md text-base text-[color:var(--text-muted)]">
              Akcesoria do gier planszowych tworzone z myślą o graczach. Każdy
              detal ma znaczenie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#gry"
                className="inline-flex items-center rounded-lg bg-[color:var(--accent)] px-6 py-3 text-white transition-colors hover:bg-[color:var(--accent-hover)]"
              >
                Odkryj kolekcję →
              </Link>
              <Link
                href="/#o-nas"
                className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-white transition-colors hover:border-white/40"
              >
                Jak to działa?
              </Link>
            </div>
          </div>

          {firstProduct ? (
            <div className="relative hidden min-h-[280px] lg:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute right-0 top-1/2 w-full max-w-md -translate-y-1/2 rotate-[-3deg]"
              >
                <div className="rounded-xl bg-[color:var(--surface-elevated)] p-4 shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black/30">
                    {heroImgOk ? (
                      <Image
                        src={
                          firstProduct.images[0] ??
                          ORGANISER_PRODUCT_IMAGE_SRC
                        }
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 0px, 400px"
                        onError={() => setHeroImgOk(false)}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center bg-[#1C1C23] text-center text-sm text-text-muted"
                        role="img"
                        aria-label="Zdjęcie produktu"
                      >
                        Zdjęcie produktu
                      </div>
                    )}
                  </div>
                  <p className="mt-3 font-medium text-white">{firstProduct.name}</p>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-[color:var(--accent)]">
                    {firstProduct.price} zł
                  </p>
                </div>
              </motion.div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
