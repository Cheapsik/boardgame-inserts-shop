import Link from "next/link";

export function HelpPrivacySection() {
  return (
    <section id="privacy" className="scroll-mt-28">
      <div className="mb-8 border-b border-border pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Polityka prywatności
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Skrót najważniejszych zasad — pełna treść na osobnej stronie.
        </p>
      </div>
      <div className="max-w-none space-y-4 text-sm leading-relaxed text-text-muted">
        <p>
          W Przegródce szanujemy Twoją prywatność i przetwarzamy dane tylko w
          zakresie potrzebnym do obsługi sklepu, zamówień i kontaktu. Poniżej
          znajdziesz zwięzłe podsumowanie; szczegóły, podstawy prawne i Twoje
          prawa opisujemy w pełnym dokumencie.
        </p>
        <h3 className="text-lg font-bold text-white">
          1. Administrator i kontakt
        </h3>
        <p>
          Administratorem danych osobowych jest podmiot prowadzący sklep
          Przegródka. W sprawach ochrony danych możesz napisać na adres{" "}
          <a
            href="mailto:prywatnosc@przegrodka.pl"
            className="text-brand underline-offset-2 hover:underline"
          >
            prywatnosc@przegrodka.pl
          </a>
          .
        </p>
        <h3 className="text-lg font-bold text-white">2. Jakie dane zbieramy</h3>
        <p>Przykładowe kategorie danych:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-text-primary">Dane konta i tożsamości:</strong>{" "}
            np. imię, nick, adres e-mail.
          </li>
          <li>
            <strong className="text-text-primary">Dane zamówienia:</strong>{" "}
            adres dostawy, telefon, dane do faktury, historia zakupów.
          </li>
          <li>
            <strong className="text-text-primary">Płatności:</strong> dane
            kart lub płatności online przetwarzane przez certyfikowanych
            operatorów — nie przechowujemy pełnych numerów kart na własnych
            serwerach.
          </li>
        </ul>
        <h3 className="text-lg font-bold text-white">3. Cele i podstawy</h3>
        <p>
          Dane wykorzystujemy m.in. do realizacji zamówienia, obsługi reklamacji,
          rozliczeń oraz — za zgodą — newslettera i statystyk anonimowych,
          zgodnie z RODO i polskim prawem.
        </p>
        <p className="pt-2">
          <Link
            href="/polityka-prywatnosci"
            className="font-medium text-brand underline-offset-2 hover:underline"
          >
            Pełna polityka prywatności →
          </Link>
        </p>
      </div>
    </section>
  );
}
