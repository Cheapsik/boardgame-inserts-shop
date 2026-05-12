import { GamesSection } from "@/components/sections/GamesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ValueSection } from "@/components/sections/ValueSection";
import { games } from "@/data/games";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <GamesSection games={games} />
      <ValueSection />
      <NewsletterSection />
    </main>
  );
}
