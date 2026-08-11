import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { assets } from "@/lib/assets";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const montFallback = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont-fallback",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mendes & Carvalho Advogados",
    template: "%s | Mendes & Carvalho Advogados",
  },
  description:
    "Projeto conceitual de um escritório de advocacia empresarial estratégica para empresas, investidores e executivos.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Mendes & Carvalho Advogados",
    images: [{ url: assets.openGraph, width: 2400, height: 1260, alt: "Composição arquitetônica abstrata do Mendes & Carvalho" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F7F8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montFallback.variable}>
      <body>
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo principal
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
