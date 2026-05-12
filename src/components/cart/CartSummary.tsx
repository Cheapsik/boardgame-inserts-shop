"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/games";
import { useDiscount } from "@/hooks/useDiscount";
import { useCartStore } from "@/lib/store";

const discountFormSchema = z.object({
  code: z.string(),
});

type DiscountForm = z.infer<typeof discountFormSchema>;

export function CartSummary() {
  const lines = useCartStore((s) => s.lines);
  const [appliedCode, setAppliedCode] = useState<string | undefined>();

  const subtotal = useMemo(
    () =>
      lines.reduce((sum, line) => {
        const hit = getProduct(line.gameSlug, line.productId);
        const variant = hit?.product.variants.find((v) => v.id === line.variantId);
        if (!variant) return sum;
        return sum + variant.pricePln * line.quantity;
      }, 0),
    [lines]
  );

  const discount = useDiscount({ subtotalPln: subtotal, code: appliedCode });
  const total = Math.max(0, subtotal - discount.amountPln);

  const form = useForm<DiscountForm>({
    resolver: zodResolver(discountFormSchema),
    defaultValues: { code: "" },
  });

  if (lines.length === 0) {
    return null;
  }

  return (
    <aside className="rounded-xl border border-border bg-surface-elevated p-5">
      <h2 className="text-lg font-semibold text-foreground">Podsumowanie</h2>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between text-muted-foreground">
          <dt>Wartość produktów</dt>
          <dd className="tabular-nums text-foreground">{subtotal} zł</dd>
        </div>
        {discount.amountPln > 0 ? (
          <div className="flex justify-between text-discount-badge">
            <dt>Rabat ({discount.appliedCode})</dt>
            <dd className="tabular-nums">−{discount.amountPln} zł</dd>
          </div>
        ) : null}
        <div className="flex justify-between border-t border-border pt-3 text-base font-semibold text-foreground">
          <dt>Razem</dt>
          <dd className="tabular-nums">{total} zł</dd>
        </div>
      </dl>

      <form
        className="mt-6 space-y-2"
        onSubmit={form.handleSubmit((values) => {
          const trimmed = values.code.trim();
          setAppliedCode(trimmed.length ? trimmed : undefined);
        })}
      >
        <label htmlFor="discount-code" className="text-xs font-medium text-muted-foreground">
          Kod rabatowy
        </label>
        <div className="flex gap-2">
          <input
            id="discount-code"
            placeholder="np. start10"
            className="h-9 flex-1 rounded-md border border-input bg-background px-3 text-sm text-foreground"
            {...form.register("code")}
          />
          <Button type="submit" variant="secondary">
            Zastosuj
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Przykładowe kody: <code className="text-foreground">start10</code>,{" "}
          <code className="text-foreground">pln20</code>.
        </p>
      </form>

      <Button asChild className="mt-6 w-full" size="lg">
        <Link href="#">Zamów (placeholder)</Link>
      </Button>
    </aside>
  );
}
