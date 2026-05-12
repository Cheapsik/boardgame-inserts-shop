import { useMemo } from "react";

import { calculateDiscount } from "@/lib/discount";
import type { DiscountInfo, Product } from "@/types";

export function useDiscount(selectedProducts: Product[]): DiscountInfo {
  return useMemo(
    () => calculateDiscount(selectedProducts),
    [selectedProducts]
  );
}
