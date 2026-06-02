import { Surface } from "./surface";

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <Surface className="p-8">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-muted-foreground">
        {description}
      </p>
    </Surface>
  );
}