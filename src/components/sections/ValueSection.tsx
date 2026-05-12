"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Dopasowanie do pudełka",
    body: "Projekty liczone na milimetr — mniej luzu, mniej przesuwania taczek.",
  },
  {
    title: "Materiał do wyboru",
    body: "HDF, liteply lub inne warianty — wybierasz razem z konfiguratorem.",
  },
  {
    title: "Szybka wysyłka",
    body: "Pakujemy stabilnie; insert dociera w jednym kawałku, nie w puzzlach.",
  },
];

export function ValueSection() {
  return (
    <section className="border-t border-border bg-surface px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Dlaczego Przegródka
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="rounded-xl border border-border bg-surface-elevated p-5"
            >
              <h3 className="font-medium text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
