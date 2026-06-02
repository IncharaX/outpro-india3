import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

interface ServiceItemProps {
  title: string;
  description: string;
}

export function ServiceItem({
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className="group flex items-start justify-between border-b py-8">
      <div className="max-w-2xl">
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-muted-foreground">
          {description}
        </p>
      </div>

      <ArrowRight
        size={24}
        className="transition-transform group-hover:translate-x-1"
      />
    </div>
  );
}