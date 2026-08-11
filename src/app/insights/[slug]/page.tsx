import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FinalCta } from "@/components/final-cta";
import { InsightGrid } from "@/components/insight-grid";
import { Reveal } from "@/components/reveal";
import {
  getAreasBySlugs,
  getInsight,
  getProfessionalsBySlugs,
  insights,
} from "@/data/site.mock";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.summary };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const authors = getProfessionalsBySlugs(insight.authorSlugs);
  const relatedAreas = getAreasBySlugs(insight.areaSlugs);
  const recommended = insights.filter((item) => item.slug !== insight.slug).slice(0, 2);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Início", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: insight.title },
        ]}
      />
      <article>
        <header className="border-y border-line bg-paper">
          <div className="shell py-14 md:py-24">
            <Reveal className="max-w-5xl">
              <h1 className="page-title max-w-[18ch]">{insight.title}</h1>
              <p className="lead mt-7">{insight.summary}</p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted">
                <time dateTime={insight.dateIso}>{insight.date}</time>
                <span>{insight.readTime}</span>
                <span>Por {authors.map((author) => author.name).join(" e ")}</span>
              </div>
            </Reveal>
          </div>
          <div className="wide-shell image-frame aspect-[16/8] min-h-[320px]">
            <Image
              src={insight.image}
              alt={insight.imageAlt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </header>

        <div className="shell grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <aside className="md:col-span-3" aria-label="Informações do conteúdo">
            <div className="sticky top-28 border-t border-line pt-5">
              <p className="text-sm font-semibold text-ink">Conteúdo demonstrativo</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Este material não constitui orientação jurídica e foi criado para fins de portfólio.
              </p>
              <div className="mt-7">
                {relatedAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas-de-atuacao/${area.slug}`}
                    className="block min-h-11 border-t border-line py-3 text-sm font-semibold hover:text-cobalt"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
          <div className="prose-editorial md:col-span-7 md:col-start-5">
            {insight.body.map((section, index) => (
              <section key={`${section.title ?? "abertura"}-${index}`}>
                {section.title ? <h2>{section.title}</h2> : null}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="section-space border-t border-line bg-paper">
        <div className="shell">
          <Reveal>
            <h2 className="section-title">Leituras recomendadas.</h2>
          </Reveal>
          <div className="mt-14">
            <InsightGrid insights={recommended} />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
