import Link from "next/link";

import { Button } from "@/components/ui/button";



import { Container } from "./container";
import { MobileNav } from "../../marketing/mobile-nav";
import { siteConfig } from "@/src/constants/site-config";
import { NavLink } from "@/src/marketing/nav-link";
import { company } from "@/src/constants/company";


export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
        href="/"
          className="flex flex-col"
        >
         <span>
      {company.name}
      </span>

         <span>
         {company.tagline}
        </span>
        </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.navigation.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                // className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden md:inline-flex">
              Let's Talk
            </Button>

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}