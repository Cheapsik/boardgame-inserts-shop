"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import type { GameProduct } from "@/types";

const schema = z.object({
  variantId: z.string().min(1, "Wybierz wariant"),
  quantity: z.number().int().min(1).max(99),
});

type FormValues = z.infer<typeof schema>;

export function ProductCard({
  gameSlug,
  product,
}: {
  gameSlug: string;
  product: GameProduct;
}) {
  const addLine = useCartStore((s) => s.addLine);
  const defaultVariant = product.variants[0]?.id ?? "";

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      variantId: defaultVariant,
      quantity: 1,
    },
  });

  return (
    <article className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-lg font-medium text-foreground">{product.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end"
        onSubmit={form.handleSubmit((values) => {
          addLine({
            gameSlug,
            productId: product.id,
            variantId: values.variantId,
            quantity: values.quantity,
          });
          form.reset({ ...values, quantity: 1 });
        })}
      >
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">
            Wariant
          </label>
          <select
            className="h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground"
            {...form.register("variantId")}
          >
            {product.variants.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label} — {v.pricePln} zł
              </option>
            ))}
          </select>
          {form.formState.errors.variantId ? (
            <p className="text-xs text-destructive">
              {form.formState.errors.variantId.message}
            </p>
          ) : null}
        </div>
        <div className="flex w-24 flex-col gap-1">
          <label className="text-xs font-medium text-muted-foreground">
            Szt.
          </label>
          <input
            type="number"
            min={1}
            max={99}
            className="h-9 rounded-md border border-input bg-background px-3 text-sm text-foreground"
            {...form.register("quantity", { valueAsNumber: true })}
          />
          {form.formState.errors.quantity ? (
            <p className="text-xs text-destructive">
              {form.formState.errors.quantity.message}
            </p>
          ) : null}
        </div>
        <Button type="submit" className="sm:mb-0">
          Do koszyka
        </Button>
      </form>
    </article>
  );
}
