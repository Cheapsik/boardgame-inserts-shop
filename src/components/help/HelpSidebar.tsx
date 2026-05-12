import Link from "next/link";

import { Gavel, HelpCircle, Lock, Truck } from "lucide-react";

const links = [
  { href: "/pomoc#faq", label: "FAQ", Icon: HelpCircle },
  { href: "/pomoc#privacy", label: "Polityka prywatności", Icon: Lock },
  { href: "/pomoc#terms", label: "Regulamin", Icon: Gavel },
  { href: "/pomoc#shipping", label: "Wysyłka i zwroty", Icon: Truck },
] as const;

export function HelpSidebar() {
  return (
    <aside className="py-6 lg:col-span-3 lg:py-0">
      <nav
        className="sticky top-24 space-y-1"
        aria-label="Spis treści centrum pomocy"
      >
        {links.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface-elevated hover:text-white hover:ring-1 hover:ring-border"
          >
            <span className="mr-3 flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-text-muted transition-colors group-hover:border-brand/50 group-hover:text-brand">
              <Icon className="size-3.5" strokeWidth={2} aria-hidden />
            </span>
            <span className="truncate">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
