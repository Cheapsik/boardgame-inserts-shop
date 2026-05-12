import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Koszyk",
  description:
    "Drukowane 3D inserty i akcesoria do gier planszowych. Zamów swój zestaw.",
};

export default function KoszykLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
