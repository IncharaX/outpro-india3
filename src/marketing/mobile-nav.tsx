"use client";

import Link from "next/link";

import { List } from "@phosphor-icons/react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/src/constants/site-config";


export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="inline-flex items-center justify-center md:hidden"
          aria-label="Open menu"
        >
          <List size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="right">
        <div className="mt-10 flex flex-col gap-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}