import type { Metadata } from "next";
import { FinalCta } from "@/components/final-cta";
import { InsightGrid } from "@/components/insight-grid";
import { PageHero } from "@/components/page-hero";
import { insights } from "@/data/site.mock";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Insights",
  description: "Conteúdos demonstrativos sobre decisões jurídicas, negócios, tecnologia e ativos intelectuais.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Insights"
        title="Conteúdo para decisões em transformação."
        description="Análises demonstrativas sobre marcas, tecnologia, disputas e relações de trabalho, sempre conectadas ao contexto empresarial."
        image={assets.openGraph}
        imageAlt="Composição de materiais transparentes, pedra e planos em azul cobalto"
        imagePosition="object-right"
      />
      <section className="section-space bg-paper">
        <div className="shell">
          <InsightGrid insights={insights} />
          <p className="mt-12 max-w-2xl border-t border-line pt-6 text-sm leading-6 text-muted">
            Conteúdos fictícios para demonstração editorial. Não constituem orientação jurídica e dependem de revisão profissional antes de qualquer publicação real.
          </p>
        </div>
      </section>
      <FinalCta title="Quer discutir como este tema afeta sua operação?" />
    </>
  );
}
