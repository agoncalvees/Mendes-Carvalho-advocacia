import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FinalCta } from "@/components/final-cta";
import { InsightGrid } from "@/components/insight-grid";
import { Reveal } from "@/components/reveal";
import {
  getAreasBySlugs,
  getProfessional,
  insights,
  professionals,
  siteInfo,
} from "@/data/site.mock";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return professionals.map((professional) => ({ slug: professional.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const professional = getProfessional(slug);
  if (!professional) return {};
  return { title: professional.name, description: professional.summary };
}

export default async function ProfessionalPage({ params }: Props) {
  const { slug } = await params;
  const professional = getProfessional(slug);
  if (!professional) notFound();
  const relatedAreas = getAreasBySlugs(professional.areaSlugs);
  const relatedInsights = insights.filter((insight) => insight.authorSlugs.includes(professional.slug));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Profissionais", href: "/profissionais" },
          { label: professional.name },
        ]}
      />
      <section className="border-y border-line bg-paper">
        <div className="wide-shell grid min-h-[calc(100dvh-var(--header-height)-85px)] lg:grid-cols-12">
          <Reveal className="image-frame min-h-[58dvh] lg:col-span-5 lg:min-h-full">
            <Image
              src={professional.image}
              alt={professional.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover object-top"
            />
          </Reveal>
          <Reveal className="flex flex-col justify-center py-14 lg:col-span-6 lg:col-start-7 lg:py-20" delay={0.06}>
            <p className="eyebrow">{professional.role}</p>
            <h1 className="page-title">{professional.name}</h1>
            <p className="lead mt-7">{professional.summary}</p>
            <a className="editorial-link mt-8" href={`mailto:${siteInfo.email}`}>
              <Mail aria-hidden="true" size={18} strokeWidth={1.5} />
              Contato institucional
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <h2 className="section-title">Trajetória.</h2>
          </Reveal>
          <Reveal className="prose-editorial md:col-span-7 md:col-start-5" delay={0.06}>
            {professional.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="mt-8 border-t border-line pt-6 text-sm text-muted">
              Biografia e credenciais demonstrativas. Este profissional não representa uma pessoa real.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space border-y border-line bg-surface">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="section-title">Especialidades e formação.</h2>
          </Reveal>
          <Reveal className="space-y-10 md:col-span-7 md:col-start-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Áreas de atuação</h3>
              <div className="mt-5 grid gap-0 sm:grid-cols-2 sm:gap-x-8">
                {relatedAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas-de-atuacao/${area.slug}`}
                    className="border-t border-line py-5 font-semibold hover:text-cobalt"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Formação</h3>
                {professional.education.map((item) => (
                  <p key={item} className="mt-4 leading-7">
                    {item}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Idiomas e registro</h3>
                <p className="mt-4 leading-7">{professional.languages.join(", ")}</p>
                <p className="mt-4 leading-7">{professional.oab}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {relatedInsights.length > 0 ? (
        <section className="section-space bg-paper">
          <div className="shell">
            <Reveal className="max-w-3xl">
              <h2 className="section-title">Conteúdos relacionados.</h2>
            </Reveal>
            <div className="mt-14">
              <InsightGrid insights={relatedInsights} />
            </div>
          </div>
        </section>
      ) : null}

      <FinalCta title={`Converse com ${professional.name.split(" ")[0]} e nossa equipe.`} />
    </>
  );
}
