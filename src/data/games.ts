import type { Game } from "@/types";

export const games: Game[] = [
  {
    slug: "wingspan",
    title: "Wingspan",
    tagline: "Przegródki na karty i żetony dopasowane do polskiej edycji.",
    products: [
      {
        id: "wingspan-core-insert",
        name: "Insert podstawowy",
        description: "Modułowe tacki na karty i jaja.",
        variants: [
          { id: "std", label: "Standard (HDF)", pricePln: 189 },
          { id: "premium", label: "Premium (liteply)", pricePln: 259 },
        ],
      },
    ],
  },
  {
    slug: "terraforming-mars",
    title: "Terraformacja Marsa",
    tagline: "Porządek w rozrosłej kolekcji dodatków.",
    products: [
      {
        id: "tfm-trays",
        name: "Zestaw tac na żetony",
        description: "Osobne tacki na stalową, tytan, rośliny i więcej.",
        variants: [{ id: "one", label: "Pełny zestaw", pricePln: 219 }],
      },
    ],
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getProduct(
  gameSlug: string,
  productId: string
): { game: Game; product: Game["products"][number] } | undefined {
  const game = getGameBySlug(gameSlug);
  if (!game) return undefined;
  const product = game.products.find((p) => p.id === productId);
  if (!product) return undefined;
  return { game, product };
}
