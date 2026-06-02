"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({
  href,
  children,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "text-sm font-semibold text-primary"
          : "text-sm text-muted-foreground transition-colors hover:text-foreground"
      }
    >
      {children}
    </Link>
  );
}