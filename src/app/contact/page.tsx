import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactWhySection } from "@/components/contact/ContactWhySection";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z Przegródką — pytania o inserty, zamówienia i współpracę.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactWhySection />
      <ContactForm />
    </main>
  );
}
