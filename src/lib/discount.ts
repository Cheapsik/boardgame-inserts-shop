import type { DiscountInfo, Product } from "@/types";

export const DISCOUNT_TIERS = [
  { minItems: 2, percentage: 10 },
  { minItems: 3, percentage: 15 },
] as const;

/**
 * Rabat progowy od sumy cen wybranych produktów (każda szt. = jeden wpis w tablicy).
 * Zestawy mają własną cenę — nie wliczaj ich tutaj.
 */
export function calculateDiscount(
  selectedProducts: Product[]
): DiscountInfo {
  const n = selectedProducts.length;
  const subtotal = selectedProducts.reduce((sum, p) => sum + p.price, 0);

  const tier = [...DISCOUNT_TIERS]
    .filter((t) => n >= t.minItems)
    .sort((a, b) => b.minItems - a.minItems)[0];

  const percentage = tier?.percentage ?? 0;
  const eligible = n >= 2 && percentage > 0;
  const savedAmount = eligible
    ? Math.round(subtotal * (percentage / 100) * 100) / 100
    : 0;

  return { eligible, percentage, savedAmount };
}

export function getPriceAfterDiscount(
  products: Product[],
  discountInfo: DiscountInfo
): number {
  const subtotal = products.reduce((sum, p) => sum + p.price, 0);
  return Math.max(
    0,
    Math.round((subtotal - discountInfo.savedAmount) * 100) / 100
  );
}

/** Kody rabatowe (osobno od rabatu progowego produktów). */
export interface PromoInput {
  subtotalPln: number;
  code?: string;
}

export interface PromoResult {
  amountPln: number;
  appliedCode: string | null;
}

const PROMOS: Record<string, { percent: number } | { fixedPln: number }> = {
  start10: { percent: 10 },
  pln20: { fixedPln: 20 },
};

function normalizeCode(code: string | undefined): string | null {
  if (!code) return null;
  const t = code.trim().toLowerCase();
  return t.length ? t : null;
}

export function computePromoDiscount(input: PromoInput): PromoResult {
  const subtotal = Math.max(0, input.subtotalPln);
  const key = normalizeCode(input.code);
  if (!key || !PROMOS[key]) {
    return { amountPln: 0, appliedCode: null };
  }

  const rule = PROMOS[key];
  let amount = 0;
  if ("percent" in rule) {
    amount = subtotal * (rule.percent / 100);
  } else {
    amount = rule.fixedPln;
  }

  amount = Math.min(subtotal, Math.max(0, amount));
  return { amountPln: Math.round(amount * 100) / 100, appliedCode: key };
}
