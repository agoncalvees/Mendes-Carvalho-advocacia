import type { MetadataRoute } from "next";
import { areas, insights, professionals } from "@/data/site.mock";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mendescarvalho.example";
  const staticRoutes = ["", "/o-escritorio", "/areas-de-atuacao", "/profissionais", "/insights", "/contato"];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date("2026-08-10") })),
    ...areas.map((area) => ({ url: `${baseUrl}/areas-de-atuacao/${area.slug}`, lastModified: new Date("2026-08-10") })),
    ...professionals.map((professional) => ({ url: `${baseUrl}/profissionais/${professional.slug}`, lastModified: new Date("2026-08-10") })),
    ...insights.map((insight) => ({ url: `${baseUrl}/insights/${insight.slug}`, lastModified: new Date(insight.dateIso) })),
  ];
}
