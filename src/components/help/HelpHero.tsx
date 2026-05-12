export function HelpHero() {
  return (
    <div className="relative isolate overflow-hidden border-b border-border bg-surface-elevated py-16 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(45rem 50rem at top, rgba(232, 97, 10, 0.12), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-base font-semibold leading-7 text-brand">
            Centrum pomocy
          </p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            FAQ i regulaminy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Odpowiedzi na częste pytania, skrót zasad prywatności i regulaminu
            oraz informacje o wysyłce i zwrotach — w jednym miejscu.
          </p>
        </div>
      </div>
    </div>
  );
}
