import { Surface } from "./surface";

interface CaseStudyCardProps {
  title: string;
  category: string;
  result: string;
}

export function CaseStudyCard({
  title,
  category,
  result,
}: CaseStudyCardProps) {
  return (
    <Surface className="
    overflow-hidden
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300
">
      <div className="aspect-video bg-muted" />

      <div className="p-8">
        <p className="text-sm font-medium text-primary">
          {category}
        </p>

        <h3 className="mt-4 text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-6 text-lg font-medium">
          {result}
        </p>
      </div>
    </Surface>
  );
}