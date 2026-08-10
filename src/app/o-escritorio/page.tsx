import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "O Escritório",
  description:
    "Conheça a visão, os princípios e a forma de trabalho do Mendes & Carvalho Advogados, projeto conceitual de advocacia empresarial.",
};

export default function OfficePage() {
  return (
    <>
      <PageHero
        label="O Escritório"
        title="Direito, estratégia e negócio na mesma mesa."
        description="Uma banca empresarial fictícia criada para atuar perto das decisões que definem ativos, operações e crescimento."
        image={assets.officeHero}
        mobileImage={assets.officeHeroMobile}
        imageAlt="Interior contemporâneo de um escritório com pedra, vidro e madeira fria"
        imagePosition="object-center"
      >
        <ButtonLink href="/profissionais" variant="secondary">
          Conheça os profissionais
        </ButtonLink>
      </PageHero>

      <section className="section-space bg-paper">
        <div className="shell grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="section-title">Uma prática construída ao redor da decisão.</h2>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6" delay={0.06}>
            <p className="lead">
              O Mendes & Carvalho foi concebido como uma banca que entende o contexto empresarial antes de formular a resposta jurídica.
            </p>
            <div className="mt-8 space-y-5 body-copy">
              <p>
                A atuação combina profundidade técnica, linguagem clara e coordenação entre especialidades. O objetivo é ajudar lideranças a proteger ativos, estruturar caminhos e reduzir incertezas.
              </p>
              <p>
                Todos os dados, profissionais e conteúdos deste site são demonstrativos e integram um projeto conceitual de portfólio.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space border-y border-line bg-surface">
        <div className="shell grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="image-frame aspect-[3/2] md:col-span-7">
            <Image
              src={assets.officeTeam}
              alt="Quatro profissionais em uma conversa de trabalho multidisciplinar"
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={0.06}>
            <h2 className="section-title">Multidisciplinar por desenho.</h2>
            <p className="body-copy mt-7">
              Diferentes especialidades se encontram cedo no processo, quando ainda é possível comparar alternativas e antecipar efeitos jurídicos, comerciais e operacionais.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-paper">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Princípios de atuação</p>
            <h2 className="section-title">Clareza para decisões complexas.</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {[
              {
                title: "Contexto antes da resposta",
                text: "Entender operação, objetivos e pessoas envolvidas antes de definir um caminho jurídico.",
              },
              {
                title: "Técnica que pode ser usada",
                text: "Traduzir complexidade em critérios claros para que a liderança consiga decidir e executar.",
              },
              {
                title: "Risco em perspectiva",
                text: "Comparar impacto, probabilidade e alternativas sem transformar toda incerteza em impedimento.",
              },
            ].map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.05}>
                <article className="border-t border-line pt-6">
                  <h3 className="card-title">{principle.title}</h3>
                  <p className="mt-5 leading-7 text-muted">{principle.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-paper">
        <div className="wide-shell grid gap-8 md:grid-cols-12 md:items-end">
          <Reveal className="image-frame aspect-square md:col-span-5">
            <Image
              src={assets.officeMateriality}
              alt="Detalhe de vidro canelado, metal e pedra sob luz natural"
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7 md:pb-8" delay={0.06}>
            <h2 className="section-title max-w-[12ch]">Precisão sem distância.</h2>
            <p className="lead mt-7">
              Sofisticação, para nós, é tornar o raciocínio compreensível sem perder profundidade.
            </p>
            <div className="mt-10 grid gap-7 sm:grid-cols-3">
              {[
                ["Integração", "Especialidades conectadas"],
                ["Proximidade", "Diálogo com lideranças"],
                ["Profundidade", "Análise proporcional ao risco"],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-line pt-5">
                  <p className="font-serif text-2xl text-cobalt">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space-sm bg-surface">
        <div className="shell grid gap-10 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <h2 className="section-title">Uma identidade feita de estrutura e transparência.</h2>
            <p className="body-copy mt-6">
              A linguagem visual do projeto usa camadas, matéria e luz para representar relações, proteção e movimento sem recorrer a símbolos jurídicos tradicionais.
            </p>
          </Reveal>
          <Reveal className="image-frame aspect-[1.91/1] md:col-span-7" delay={0.06}>
            <Image
              src={assets.openGraph}
              alt="Composição abstrata de vidro, pedra e planos em azul cobalto"
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <FinalCta title="Conheça as pessoas por trás de cada decisão." />
    </>
  );
}
