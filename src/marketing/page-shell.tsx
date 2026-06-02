import { ReactNode } from "react";
import { Container } from "../components/layout/container";



interface PageShellProps {
  children: ReactNode;
}

export function PageShell({
  children,
}: PageShellProps) {
  return (
    <Container>
      <div className="py-24 md:py-32">
        {children}
      </div>
    </Container>
  );
}