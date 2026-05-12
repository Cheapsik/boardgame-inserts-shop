export type GameSlug = string;

export interface ProductVariant {
  id: string;
  label: string;
  pricePln: number;
}

export interface GameProduct {
  id: string;
  name: string;
  description: string;
  variants: ProductVariant[];
  imageSrc?: string;
}

export interface Game {
  slug: GameSlug;
  title: string;
  tagline: string;
  heroImageSrc?: string;
  products: GameProduct[];
}

export interface CartLine {
  id: string;
  gameSlug: GameSlug;
  productId: string;
  variantId: string;
  quantity: number;
}
