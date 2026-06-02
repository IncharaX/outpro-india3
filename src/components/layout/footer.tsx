import Link from "next/link";

import { Container } from "./container";
import { company } from "@/src/constants/company";

export function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-3">
          <div>
            <div>
        <h3 className="text-xl font-bold">
          OUTPRO
          </h3>

        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
           Digital Solutions
          </p>
          </div>

            <p className="mt-4 text-muted-foreground">
              Building modern digital experiences for ambitious businesses.
            </p>
          </div>

          <div>
            <h4 className="font-medium">
              Navigation
            </h4>

            <div className="mt-4 flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-muted-foreground">
              <p>{company.email}</p>
              <p>{company.location}</p>
            </div>
          </div>
        </div>

        <div className="border-t py-6 text-sm text-muted-foreground">
          © 2026 Outpro. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}