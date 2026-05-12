export interface DiscountInput {
  subtotalPln: number;
  /** Kod rabatowy wpisany przez klienta (normalizowany, wielkość liter nieistotna). */
  code?: string;
}

export interface DiscountResult {
  /** Kwota rabatu w PLN (nie ujemna). */
  amountPln: number;
  /** Zastosowany kod lub null. */
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

export function computeDiscount(input: DiscountInput): DiscountResult {
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
