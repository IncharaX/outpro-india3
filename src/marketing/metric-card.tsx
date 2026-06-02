import { Surface } from "./surface";

interface MetricCardProps {
  value: string;
  label: string;
}

export function MetricCard({
  value,
  label,
}: MetricCardProps) {
  return (
    <Surface className="p-8">
      <h3 className="text-4xl font-bold">
        {value}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {label}
      </p>
    </Surface>
  );
}