import Link from "next/link";

export function HelpShippingSection() {
  return (
    <section id="shipping" className="scroll-mt-28">
      <div className="mb-8 border-b border-border pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Wysyłka i zwroty
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Najczęstsze zasady — szczegóły na stronie Wysyłka.
        </p>
      </div>
      <div className="max-w-none space-y-4 text-sm leading-relaxed text-text-muted">
        <p>
          Paczki wysyłamy kuriersko na terenie Polski i wybranych krajów UE.
          Czas dostawy zależy od przewoźnika i zwykle wynosi 1–3 dni robocze od
          nadania — numer przesyłki podamy mailowo, gdy tylko będzie dostępny.
        </p>
        <p>
          <strong className="text-text-primary">Zwroty:</strong> jako Konsument
          możesz odstąpić od umowy w terminie 14 dni od otrzymania przesyłki,
          o ile produkt nie był personalizowany na wyraźne życzenie — pełna
          procedura i adres zwrotu opisane są w regulaminie oraz na stronie
          wysyłki.
        </p>
        <p>
          <strong className="text-text-primary">Uszkodzenia w transporcie:</strong>{" "}
          zachowaj oryginalne opakowanie i zgłoś reklamację w ciągu 7 dni od
          doręczenia — pomożemy ustalić dalsze kroki z kurierem.
        </p>
        <p className="pt-2">
          <Link
            href="/wysylka"
            className="font-medium text-brand underline-offset-2 hover:underline"
          >
            Przejdź do strony Wysyłka →
          </Link>
        </p>
      </div>
    </section>
  );
}
