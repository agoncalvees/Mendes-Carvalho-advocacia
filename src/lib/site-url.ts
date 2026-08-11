const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = (
  configuredUrl ?? (vercelUrl ? `https://${vercelUrl}` : "https://mendescarvalho.com.br")
).replace(/\/+$/, "");
