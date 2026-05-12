import type { Metadata } from "next";
import { Cinzel, Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "sonner";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Przegródka — Akcesoria do gier planszowych",
    template: "%s | Przegródka",
  },
  description:
    "Drukowane 3D inserty i akcesoria do gier planszowych. Zamów swój zestaw.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} flex min-h-dvh flex-col bg-background font-sans text-foreground antialiased`}
      >
        <Navbar />
        <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_auto] pt-14 sm:pt-16">
          <div className="min-h-0">{children}</div>
          <Footer />
        </div>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
