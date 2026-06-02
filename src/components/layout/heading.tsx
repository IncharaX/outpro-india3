interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function Heading({
  eyebrow,
  title,
  description,
}: HeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}