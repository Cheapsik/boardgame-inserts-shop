"use client";

import { motion } from "framer-motion";
import { Printer, Ruler, Timer } from "lucide-react";

const cards = [
  {
    Icon: Printer,
    stat: "Druk 3D",
    description:
      "Każdy element drukowany na zamówienie. Zero fabrycznej masówki.",
  },
  {
    Icon: Timer,
    stat: "−15 min",
    description:
      "Tyle zaoszczędzisz na setupie dzięki dedykowanym organizerowi.",
  },
  {
    Icon: Ruler,
    stat: "Idealny fit",
    description:
      "Zaprojektowane pod konkretne tytuły. Milimetr w milimetr.",
  },
];

export function ValueSection() {
  return (
    <section
      id="o-nas"
      className="scroll-mt-24 bg-[color:var(--surface)] px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
          DLACZEGO MY
        </p>
        <h2 className="font-display mt-2 text-3xl font-bold text-white">
          Dlaczego Przegródka?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map(({ Icon, stat, description }, i) => (
            <motion.article
              key={stat}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-elevated)] p-6"
            >
              <Icon
                className="size-6 text-[color:var(--accent)]"
                strokeWidth={1.75}
                aria-hidden
              />
              <p className="mt-3 text-2xl font-bold text-white">{stat}</p>
              <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
