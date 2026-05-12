import type { Metadata } from "next";

import { HelpFaq } from "@/components/help/HelpFaq";
import { HelpHero } from "@/components/help/HelpHero";
import { HelpPrivacySection } from "@/components/help/HelpPrivacySection";
import { HelpShippingSection } from "@/components/help/HelpShippingSection";
import { HelpSidebar } from "@/components/help/HelpSidebar";
import { HelpTermsSection } from "@/components/help/HelpTermsSection";

export const metadata: Metadata = {
  title: "Centrum pomocy",
  description:
    "FAQ, polityka prywatności, regulamin oraz wysyłka i zwroty — Przegródka.",
};

export default function HelpPage() {
  return (
    <main>
      <HelpHero />
      <div className="border-t border-border bg-background/75 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <HelpSidebar />
            <div className="space-y-16 lg:col-span-9">
              <HelpFaq />
              <HelpPrivacySection />
              <HelpTermsSection />
              <HelpShippingSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
