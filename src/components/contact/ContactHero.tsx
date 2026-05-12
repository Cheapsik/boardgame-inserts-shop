export function ContactHero() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-12 sm:py-16">
      <div
        className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[90px]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tworzymy z pasją dla{" "}
            <span className="bg-gradient-to-r from-brand to-orange-300 bg-clip-text text-transparent">
              graczy
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-text-muted">
            Naszą misją jest porządek przy stole i szybszy start rozgrywki.
            Projektujemy inserty i akcesoria z druku 3D tak, żebyś mógł skupić
            się na strategii i zabawie — nie na szukaniu żetonów w pudełku.
          </p>
        </div>
      </div>
    </div>
  );
}
