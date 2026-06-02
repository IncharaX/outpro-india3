import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://outpro.com";

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/services`,
    },
    {
      url: `${baseUrl}/portfolio`,
    },
    {
      url: `${baseUrl}/testimonials`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];
}