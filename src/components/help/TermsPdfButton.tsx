"use client";

import { Download } from "lucide-react";
import { toast } from "sonner";

export function TermsPdfButton() {
  return (
    <button
      type="button"
      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand"
      onClick={() =>
        toast("Pełny regulamin w PDF — udostępnimy go wkrótce.")
      }
    >
      <Download className="size-4" aria-hidden />
      Pobierz pełny regulamin (PDF)
    </button>
  );
}
