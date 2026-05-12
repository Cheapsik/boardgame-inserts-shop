"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/games";
import { useCartStore } from "@/lib/store";
import type { GameSet } from "@/types";

const schema = z.object({
  quantity: z.number().int().min(1).max(99),
});

type FormValues = z.infer<typeof schema>;

function sumIndividualPrices(set: GameSet): number {
  let sum = 0;
  for (const pid of set.productIds) {
    const hit = getProduct(set.gameSlug, pid);
    if (hit) sum += hit.product.price;
  }
  return sum;
}

export function GameSetCard({ set }: { set: GameSet }) {
  const addSet = useCartStore((s) => s.addSet);
  const listSum = sumIndividualPrices(set);
  const saves = Math.max(0, Math.round((listSum - set.setPrice) * 100) / 100);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { quantity: 1 },
  });

  return (
    <article className="rounded-xl border border-border bg-card p-5 ring-1 ring-brand/20">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand">
        Zestaw
      </p>
      <h3 className="mt-1 text-lg font-medium text-foreground">{set.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{set.description}</p>
      <p className="mt-3 text-sm text-muted-foreground">
        Osobno:{" "}
        <span className="line-through tabular-nums">{listSum} zł</span>
        <span className="ml-2 font-semibold text-foreground tabular-nums">
          {set.setPrice} zł
        </span>
        {saves > 0 ? (
          <span className="ml-2 text-xs font-medium text-discount-badge">
            −{saves} zł
          </span>
        ) : null}
      </p>
      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end"
        onSubmit={form.handleSubmit((values) => {
          const store = useCartStore.getState();
          const cur =
            store.setItems.find((s) => s.set.id === set.id)?.quantity ?? 0;
          const target = Math.min(99, cur + values.quantity);
          if (target <= cur) return;
          if (cur === 0) {
            for (let i = 0; i < target; i++) {
              addSet(set);
            }
          } else {
            useCartStore.setState((s) => ({
              setItems: s.setItems.map((l) =>
                l.set.id === set.id ? { set, quantity: target } : l
              ),
            }));
          }
          form.reset({ quantity: 1 });
        })}
      >
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
        <Button type="submit">Dodaj zestaw</Button>
      </form>
    </article>
  );
}
