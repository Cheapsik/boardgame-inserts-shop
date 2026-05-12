import { useMemo } from "react";

import { calculateDiscount } from "@/lib/discount";
import type { DiscountInfo, Product } from "@/types";

/**
 * Rabat progowy od listy wybranych produktów (np. spłaszczona z koszyka).
 * Przelicza się, gdy zmienia się referencja `selectedProducts` — memoizuj
 * tablicę w rodzicu (np. `useMemo` od linii koszyka).
 */
export function useDiscount(selectedProducts: Product[]): DiscountInfo {
  return useMemo(
    () => calculateDiscount(selectedProducts),
    [selectedProducts]
  );
}
