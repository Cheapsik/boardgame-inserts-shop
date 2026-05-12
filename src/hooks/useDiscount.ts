import { useMemo } from "react";

import { computeDiscount, type DiscountInput } from "@/lib/discount";

export function useDiscount({ subtotalPln, code }: DiscountInput) {
  return useMemo(
    () => computeDiscount({ subtotalPln, code }),
    [subtotalPln, code]
  );
}
