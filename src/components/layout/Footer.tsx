import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold text-foreground">Przegródka</p>
          <p className="mt-1 max-w-md text-sm text-muted-foreground">
            Przegródki i inserty pod Twoje ulubione planszówki — szyte na miarę
            pudełka, nie na odlew.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Sklep
          </Link>
          <Link href="/koszyk" className="hover:text-foreground">
            Koszyk
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Przegródka
      </div>
    </footer>
  );
}
