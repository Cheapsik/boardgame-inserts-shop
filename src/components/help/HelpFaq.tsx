import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "Czy inserty trzeba składać albo sklejać?",
    a: "Większość elementów pasuje na wcisk albo łączy się prostymi zatrzaskami zaprojektowanymi pod druk 3D. W wyjątkowo dużych lub obciążonych modelach możemy zalecić kroplę kleju cyjanoakrylowego — jeśli tak, zawsze piszemy o tym przy produkcie i w instrukcji.",
  },
  {
    q: "Czy inserty liczą karty w koszulkach?",
    a: "Tak — projektujemy komory pod typowe koszulki (w tym grubsze, ok. 100 mikronów). Jeśli używasz nietypowych rozmiarów, sprawdź wymiary w opisie albo napisz do nas przed zakupem.",
  },
  {
    q: "Jaki jest czas realizacji zamówienia?",
    a: "Inserty drukujemy na zamówienie: zwykle 2–4 dni robocze od potwierdzenia płatności. W święta albo przy większej liczbie zamówień może to być do ok. 7 dni roboczych — o ewentualnym opóźnieniu damy znać mailowo.",
  },
  {
    q: "Czy wysyłacie za granicę?",
    a: "Tak, wysyłamy m.in. w kraje UE; koszt liczy się od wagi i adresu. Szczegóły i zasady przewozu opisujemy też w sekcji „Wysyłka i zwroty” oraz na stronie Wysyłka.",
  },
];

export function HelpFaq() {
  return (
    <section id="faq" className="scroll-mt-28">
      <div className="mb-8 border-b border-border pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Najczęściej zadawane pytania
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Wszystko, co warto wiedzieć przed zakupem insertów i akcesoriów w
          Przegródce.
        </p>
      </div>
      <div className="space-y-4">
        {items.map(({ q, a }) => (
          <details key={q} className="help-faq rounded-xl border border-border bg-surface-elevated">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-6 text-white transition-colors hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <span className="font-medium">{q}</span>
              <ChevronDown
                className="help-faq-chevron size-5 shrink-0 text-text-muted"
                aria-hidden
              />
            </summary>
            <div className="border-t border-border px-6 pb-6 pt-4 text-sm leading-relaxed text-text-muted">
              <p>{a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
