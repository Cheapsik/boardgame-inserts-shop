import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="kontakt"
      className="border-t border-border bg-surface py-8 text-sm text-text-muted"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 text-center sm:px-6 md:grid-cols-3 md:items-start md:gap-8 md:text-left">
        <p className="font-medium md:justify-self-start">Przegródka</p>
        <p className="md:justify-self-center md:text-center">
          © 2026 Przegródka. Wszelkie prawa zastrzeżone.
        </p>
        <nav
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-self-end md:justify-end"
          aria-label="Stopka"
        >
          <Link
            href="/polityka-prywatnosci"
            className="transition-colors hover:text-text-primary"
          >
            Polityka prywatności
          </Link>
          <span className="select-none" aria-hidden>
            ·
          </span>
          <Link
            href="/wysylka"
            className="transition-colors hover:text-text-primary"
          >
            Wysyłka
          </Link>
          <span className="select-none" aria-hidden>
            ·
          </span>
          <Link
            href="/pomoc"
            className="transition-colors hover:text-text-primary"
          >
            Pomoc
          </Link>
          <span className="select-none" aria-hidden>
            ·
          </span>
          <Link
            href="/kontakt"
            className="transition-colors hover:text-text-primary"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </footer>
  );
}
