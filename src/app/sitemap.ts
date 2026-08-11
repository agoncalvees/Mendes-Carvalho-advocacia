import type { MetadataRoute } from "next";
import { areas, insights, professionals } from "@/data/site.mock";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/o-escritorio", "/areas-de-atuacao", "/profissionais", "/insights", "/contato"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date("2026-08-10") })),
    ...areas.map((area) => ({ url: `${siteUrl}/areas-de-atuacao/${area.slug}`, lastModified: new Date("2026-08-10") })),
    ...professionals.map((professional) => ({ url: `${siteUrl}/profissionais/${professional.slug}`, lastModified: new Date("2026-08-10") })),
    ...insights.map((insight) => ({ url: `${siteUrl}/insights/${insight.slug}`, lastModified: new Date(insight.dateIso) })),
  ];
}
