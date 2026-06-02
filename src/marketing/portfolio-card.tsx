import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Surface } from "./surface";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
}

export function PortfolioCard({
  title,
  category,
  description,
}: PortfolioCardProps) {
  return (
    <Surface className="p-8 transition-all hover:-translate-y-1">
      <p className="text-sm font-medium text-primary">
        {category}
      </p>

      <h3 className="mt-4 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-muted-foreground">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 text-sm font-medium">
        View Case Study

        <ArrowUpRight size={18} />
      </div>
    </Surface>
  );
}