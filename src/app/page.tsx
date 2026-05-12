import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { GamesSection } from "@/components/sections/GamesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueSection } from "@/components/sections/ValueSection";

export const metadata: Metadata = {
  title: "Sklep",
  description:
    "Sklep z przegródkami i insertami dopasowanymi do pudełka — HDF, liteply i więcej.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <GamesSection />
        <ValueSection />
      </main>
      <Footer />
    </>
  );
}
