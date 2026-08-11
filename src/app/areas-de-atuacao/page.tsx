import type { Metadata } from "next";
import { AreaGrid } from "@/components/area-grid";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { areas } from "@/data/site.mock";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Conheça as áreas de atuação do Mendes & Carvalho, com destaque para Propriedade Intelectual e decisões empresariais integradas.",
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        title="Especialidades conectadas pelo contexto do negócio."
        description="Cada prática atua com profundidade própria. Juntas, ajudam a organizar riscos, oportunidades e decisões que atravessam a empresa."
        image={assets.areasHero}
        imageAlt="Sistema abstrato de planos transparentes, pedra e um detalhe em azul cobalto"
        imagePosition="object-center"
      >
        <ButtonLink href="/contato">Fale com nossa equipe</ButtonLink>
      </PageHero>
      <section className="section-space bg-paper">
        <div className="shell">
          <AreaGrid areas={areas} />
        </div>
      </section>
      <FinalCta title="Seu desafio atravessa mais de uma área?" description="Nossa estrutura foi pensada para conectar especialistas sem fragmentar a decisão." />
    </>
  );
}
