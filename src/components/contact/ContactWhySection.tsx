import { Leaf, Palette, Wrench } from "lucide-react";

const pillars = [
  {
    Icon: Wrench,
    title: "Kontrola jakości",
    body: "Każdy insert jest projektowany z myślą o dopasowaniu do pudełka, a po wydruku sprawdzamy go pod kątem stabilności i użytkowania — żeby nic nie trzeszczało i nie latało po skrzyni.",
  },
  {
    Icon: Leaf,
    title: "Materiały i trwałość",
    body: "Stawiamy na sprawdzone filamenty i sensowne grubości ścianek. Dbamy o to, żeby organizer wyglądał dobrze i zniósł wiele partii — tak jak Twoja ulubiona gra.",
  },
  {
    Icon: Palette,
    title: "Polski design",
    body: "Projektujemy i produkujemy w Polsce, z myślą o lokalnych graczach i realnych pudełkach z półki sklepowej — bez kompromisów na „uniwersalny” rozmiar.",
  },
];

export function ContactWhySection() {
  return (
    <section className="relative border-t border-border bg-background py-12 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            Druk 3D i jakość
          </div>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Dlaczego Przegródka?
          </h2>
          <div className="space-y-8">
            {pillars.map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex size-12 items-center justify-center rounded-lg border border-border bg-surface-elevated text-brand">
                    <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
