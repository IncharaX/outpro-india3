
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { caseStudies } from "../data/case-studies";
import { CaseStudyCard } from "./case-study-card";

export function CaseStudiesGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              title={study.title}
              category={study.category}
              result={study.result}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}