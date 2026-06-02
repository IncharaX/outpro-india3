import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2026 Outpro India
          </p>

          <p className="text-sm text-muted-foreground">
            Built for growth.
          </p>
        </div>
      </Container>
    </footer>
  );
}