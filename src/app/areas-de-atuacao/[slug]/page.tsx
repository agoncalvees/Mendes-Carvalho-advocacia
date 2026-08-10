import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/final-cta";
import { InsightGrid } from "@/components/insight-grid";
import { PageHero } from "@/components/page-hero";
import { ProfessionalGrid } from "@/components/professional-grid";
import { Reveal } from "@/components/reveal";
import {
  areas,
  getArea,
  getInsightsBySlugs,
  getProfessionalsBySlugs,
} from "@/data/site.mock";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return { title: area.name, description: area.summary };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  const relatedProfessionals = getProfessionalsBySlugs(area.professionalSlugs);
  const relatedInsights = getInsightsBySlugs(area.insightSlugs);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
          { label: area.name },
        ]}
      />
      <PageHero
        label="Área de atuação"
        title={area.name}
        description={area.lead}
        image={area.image}
        imageAlt={area.imageAlt}
        imagePosition="object-center"
      >
        <ButtonLink href="/contato">Fale com nossa equipe</ButtonLink>
      </PageHero>

      <section className="section-space bg-paper">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="section-title">Decisões que esta prática ajuda a organizar.</h2>
          </Reveal>
          <div className="grid gap-0 md:col-span-7 md:col-start-6 md:grid-cols-2 md:gap-x-10">
            {area.decisions.map((decision, index) => (
              <Reveal key={decision} delay={(index % 2) * 0.04}>
                <div className="min-h-36 border-t border-line py-6">
                  <p className="text-xs font-semibold text-cobalt">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-4 text-lg font-medium leading-7">{decision}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-surface">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="section-title">Frentes de atuação.</h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6">
            <div className="grid gap-x-10 sm:grid-cols-2">
              {area.services.map((service) => (
                <p key={service} className="border-t border-line py-5 text-base font-semibold leading-6">
                  {service}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space-sm bg-paper">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <h2 className="section-title">Contextos relacionados.</h2>
            <p className="body-copy mt-6">
              A atuação é adaptada ao modelo de negócio, ao estágio da empresa e aos efeitos esperados da decisão.
            </p>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {area.contexts.map((context) => (
                <p key={context} className="border-t border-line py-5 text-lg font-medium">
                  {context}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space border-y border-line bg-paper">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Profissionais relacionados</p>
            <h2 className="section-title">Experiência conectada ao tema.</h2>
          </Reveal>
          <div className="mt-14">
            <ProfessionalGrid professionals={relatedProfessionals} />
          </div>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <h2 className="section-title">Insights relacionados.</h2>
          </Reveal>
          {relatedInsights.length > 0 ? (
            <div className="mt-14">
              <InsightGrid insights={relatedInsights} />
            </div>
          ) : (
            <div className="mt-12 border-t border-line py-8">
              <p className="body-copy">A pauta editorial específica desta área ainda depende de conteúdo revisado.</p>
              <Link href="/insights" className="editorial-link mt-5">
                Ver insights disponíveis
                <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
              </Link>
            </div>
          )}
        </div>
      </section>

      <FinalCta title={`Converse com nossa equipe sobre ${area.shortName}.`} />
    </>
  );
}
