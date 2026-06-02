export const typography = {
  hero: {
    title:
      "text-5xl font-semibold tracking-tight md:text-7xl",
    description:
      "text-lg leading-relaxed text-muted-foreground md:text-xl",
  },

  pageHero: {
    title:
      "text-4xl font-semibold tracking-tight md:text-6xl",
    description:
      "text-lg leading-relaxed text-muted-foreground md:text-xl",
  },

  section: {
    eyebrow:
      "text-sm font-semibold uppercase tracking-[0.2em] text-primary",

    title:
      "text-4xl font-semibold tracking-tight md:text-5xl",

    description:
      "mt-6 text-lg leading-relaxed text-muted-foreground",
  },

  card: {
    title:
      "text-2xl font-semibold",

    description:
      "text-muted-foreground leading-relaxed",
  },

  stats: {
    value:
      "text-5xl font-bold tracking-tight",

    label:
      "mt-3 text-sm font-medium text-muted-foreground",
  },
} as const;