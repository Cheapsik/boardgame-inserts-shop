export type ProductCategory = "insert" | "accessory" | "pad";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // full unit price in PLN
  category: ProductCategory;
  gameSlug: string; // always belongs to exactly one game
  images: string[]; // placeholder paths for now
  stock: number; // simple stock count
}

export interface GameSet {
  id: string;
  name: string;
  description: string;
  gameSlug: string;
  productIds: string[]; // references to Product ids in this set
  setPrice: number; // discounted price for the whole set (lower than sum of individual products)
  images: string[];
}

export interface Game {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  accentColor: string; // per-game accent for subtle UI theming
  products: Product[];
  sets: GameSet[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartSetItem {
  set: GameSet;
  quantity: number;
}

export interface DiscountInfo {
  eligible: boolean; // true when tier discount applies (2+ individual products)
  percentage: number; // e.g. 15 for 15%
  savedAmount: number; // PLN amount saved
}
