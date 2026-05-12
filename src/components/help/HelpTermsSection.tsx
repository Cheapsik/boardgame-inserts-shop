import { Info } from "lucide-react";

import { TermsPdfButton } from "./TermsPdfButton";

export function HelpTermsSection() {
  return (
    <section id="terms" className="scroll-mt-28">
      <div className="mb-8 border-b border-border pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Regulamin sklepu
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Skrócony fragment — pełny regulamin uzupełnimy przed startem sprzedaży.
        </p>
      </div>
      <div className="rounded-2xl border border-border bg-surface-elevated p-8 shadow-sm">
        <div className="max-w-none space-y-6 text-sm leading-relaxed text-text-muted">
          <div>
            <h4 className="mb-2 text-base font-bold uppercase tracking-wide text-white">
              §1 Postanowienia ogólne
            </h4>
            <p>
              1. Regulamin określa zasady korzystania ze sklepu internetowego
              Przegródka oraz składania zamówień.
              <br />
              2. Sprzedawcą jest podmiot prowadzący sklep Przegródka z siedzibą w
              Polsce.
              <br />
              3. Regulamin ma charakter informacyjny w rozumieniu ustawy o
              świadczeniu usług drogą elektroniczną.
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-base font-bold uppercase tracking-wide text-white">
              §2 Definicje
            </h4>
            <p>
              1. <strong className="text-text-primary">Klient</strong> — osoba
              fizyczna, prawna albo jednostka organizacyjna składająca zamówienie
              w sklepie.
              <br />
              2. <strong className="text-text-primary">Konsument</strong> —
              Klient będący osobą fizyczną dokonującą u nas zakupu niezwiązanego
              bezpośrednio z działalnością gospodarczą lub zawodową.
              <br />
              3. <strong className="text-text-primary">Regulamin</strong> —
              niniejszy dokument wraz z załącznikami i odesłaniami do obowiązującego
              prawa.
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-base font-bold uppercase tracking-wide text-white">
              §3 Składanie zamówień
            </h4>
            <p>
              1. Zamówienie składasz przez koszyk i formularz danych — jego
              złożenie jest oświadczeniem woli zawarcia umowy sprzedaży.
              <br />
              2. Ceny widoczne przy produktach zawierają podatek VAT, o ile
              obowiązuje dla danego towaru.
              <br />
              3. Realizacja zamówienia następuje po potwierdzeniu płatności i
              w miarę dostępności materiałów do druku.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-brand/25 bg-brand/10 p-4 text-brand">
            <Info className="mt-0.5 size-6 shrink-0" aria-hidden />
            <p className="text-sm font-medium">
              To skrócona wersja regulaminu. Pełny dokument udostępnimy w PDF przed
              uruchomieniem płatności online.
            </p>
          </div>
          <TermsPdfButton />
        </div>
      </div>
    </section>
  );
}
