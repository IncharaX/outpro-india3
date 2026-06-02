import { Surface } from "./surface";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

export function TestimonialCard({
  quote,
  author,
  company,
}: TestimonialCardProps) {
  return (
    <Surface className="p-8">
      <p className="text-lg leading-relaxed">
        "{quote}"
      </p>

      <div className="mt-8">
        <p className="font-semibold">
          {author}
        </p>

        <p className="text-sm text-muted-foreground">
          {company}
        </p>
      </div>
    </Surface>
  );
}