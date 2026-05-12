"use client";

import { motion } from "framer-motion";

import { ProductPlaceholderImage } from "@/components/ui/ProductPlaceholderImage";
import type { Product, ProductCategory } from "@/types";

const categoryLabel: Record<ProductCategory, string> = {
  insert: "Insert",
  accessory: "Akcesorium",
  pad: "Podkładka",
};

export function ProductCard({
  product,
  isSelected,
  onToggle,
}: {
  product: Product;
  isSelected: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 500, damping: 35 }}
      className={`relative cursor-pointer overflow-hidden rounded-xl border bg-[color:var(--surface-elevated)] transition-colors duration-200 ${
        isSelected
          ? "border-[color:var(--accent)]"
          : "border-[color:var(--border)]"
      }`}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
    >
      {isSelected ? (
        <span
          className="absolute right-3 top-3 z-[1] flex size-6 items-center justify-center rounded-full bg-[color:var(--accent)] text-sm font-bold text-white"
          aria-hidden
        >
          ✓
        </span>
      ) : null}

      <div className="relative h-[50%] min-h-[140px] w-full">
        <ProductPlaceholderImage
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 200px"
        />
      </div>

      <div className="p-4">
        <span className="inline-block rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-0.5 font-mono text-xs text-[color:var(--text-muted)]">
          {categoryLabel[product.category]}
        </span>
        <h3 className="mt-2 text-base font-bold text-white">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-[color:var(--text-muted)]">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-mono text-base font-bold text-white">
            {product.price} zł
          </span>
          <span
            className={`pointer-events-none shrink-0 rounded-lg px-3 py-1.5 text-sm transition-colors ${
              isSelected
                ? "bg-[color:var(--accent)] text-white"
                : "border border-[color:var(--border)] text-[color:var(--text-muted)]"
            }`}
          >
            {isSelected ? "Dodano ✓" : "Dodaj"}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
