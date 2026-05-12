import type { Game } from "@/types";

const placeholder = "/placeholders/product-placeholder.jpg";

export const games: Game[] = [
  {
    slug: "wiedzmin-stary-swiat",
    name: "Wiedźmin: Stary Świat",
    tagline: "Opanuj chaos Kontynentu",
    description:
      "Inserty, akcesoria i podkładki z druku 3D pod Wiedźmin: Stary Świat — porządek w pudełku i na stole.",
    heroImage: placeholder,
    accentColor: "#7EB8C9",
    products: [
      {
        id: "wsw-insert",
        name: "Insert Organizacyjny",
        category: "insert",
        description:
          "Kompletny system organizacji pudełka. Dedykowane miejsce na karty, żetony i figurki.",
        price: 149,
        stock: 10,
        images: [placeholder],
        gameSlug: "wiedzmin-stary-swiat",
      },
      {
        id: "wsw-coin-overlays",
        name: "Nakładki na Monety",
        category: "accessory",
        description:
          "Ozdobne nakładki na monety wiedźmińskie. Drukowane w wysokiej rozdzielczości.",
        price: 49,
        stock: 15,
        images: [placeholder],
        gameSlug: "wiedzmin-stary-swiat",
      },
      {
        id: "wsw-card-holder",
        name: "Trzymacz na Karty",
        category: "accessory",
        description:
          "Organizer na talie kart gracza. Łatwy dostęp podczas rozgrywki.",
        price: 39,
        stock: 20,
        images: [placeholder],
        gameSlug: "wiedzmin-stary-swiat",
      },
      {
        id: "wsw-pad",
        name: "Podkładka Gracza",
        category: "pad",
        description:
          "Indywidualna podkładka z podziałem na strefy gracza. Pasuje do 6 graczy.",
        price: 89,
        stock: 8,
        images: [placeholder],
        gameSlug: "wiedzmin-stary-swiat",
      },
    ],
    sets: [
      {
        id: "wsw-set-basic",
        name: "Zestaw Podstawowy",
        productIds: ["wsw-insert", "wsw-coin-overlays"],
        setPrice: 169,
        description: "Insert + nakładki na monety w jednym zamówieniu.",
        images: [placeholder],
        gameSlug: "wiedzmin-stary-swiat",
      },
      {
        id: "wsw-set-full",
        name: "Zestaw Kompletny",
        productIds: [
          "wsw-insert",
          "wsw-coin-overlays",
          "wsw-card-holder",
          "wsw-pad",
        ],
        setPrice: 279,
        description: "Wszystko czego potrzebujesz do idealnej rozgrywki.",
        images: [placeholder],
        gameSlug: "wiedzmin-stary-swiat",
      },
    ],
  },
];

export const getGameBySlug = (slug: string) => games.find((g) => g.slug === slug);

export function getProduct(
  gameSlug: string,
  productId: string
): { game: Game; product: Game["products"][number] } | undefined {
  const game = getGameBySlug(gameSlug);
  if (!game) return undefined;
  const product = game.products.find(
    (p) => p.id === productId && p.gameSlug === gameSlug
  );
  if (!product) return undefined;
  return { game, product };
}

export function getSet(
  gameSlug: string,
  setId: string
): { game: Game; set: Game["sets"][number] } | undefined {
  const game = getGameBySlug(gameSlug);
  if (!game) return undefined;
  const set = game.sets.find((s) => s.id === setId && s.gameSlug === gameSlug);
  if (!set) return undefined;
  return { game, set };
}
