import { Container } from "../components/layout/container";

export function TrustBar() {
  const companies = [
    "OUTPRO",
    "TECHCORP",
    "CLOUDWORKS",
    "GROWTHLABS",
    "STARTUPX",
  ];

  return (
    <section className="border-y py-10">
      <Container>
        <div className="text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by ambitious teams
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {companies.map((company) => (
              <span
                key={company}
                className="text-sm font-semibold tracking-wider text-muted-foreground"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}