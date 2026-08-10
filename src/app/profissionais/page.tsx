import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { ProfessionalGrid } from "@/components/professional-grid";
import { professionals } from "@/data/site.mock";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Profissionais",
  description: "Conheça a equipe demonstrativa do Mendes & Carvalho Advogados.",
};

export default function ProfessionalsPage() {
  return (
    <>
      <PageHero
        label="Profissionais"
        title="Diferentes especialidades. Uma só leitura do negócio."
        description="A equipe demonstrativa combina experiência empresarial, proximidade e capacidade de trabalhar de forma integrada."
        image={assets.professionalsTeam}
        imageAlt="Equipe multidisciplinar trabalhando em um escritório contemporâneo"
        imagePosition="object-[68%_center] lg:object-center"
      >
        <ButtonLink href="/contato">Fale com nossa equipe</ButtonLink>
      </PageHero>
      <section className="section-space bg-paper">
        <div className="shell">
          <ProfessionalGrid professionals={professionals} />
          <p className="mt-12 max-w-2xl border-t border-line pt-6 text-sm leading-6 text-muted">
            Nomes, biografias, formações e registros são fictícios e foram criados como mock data para este projeto conceitual.
          </p>
        </div>
      </section>
      <FinalCta title="Encontre a combinação certa de especialidades para sua decisão." />
    </>
  );
}
