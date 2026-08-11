import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { FinalCta } from "@/components/final-cta";
import { HomeBlog } from "@/components/home-blog";
import { ProfessionalGrid } from "@/components/professional-grid";
import { Reveal } from "@/components/reveal";
import { ResponsiveImage } from "@/components/responsive-image";
import { insights, professionals } from "@/data/site.mock";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Advocacia empresarial estratégica",
  description:
    "Mendes & Carvalho integra Direito, estratégia e negócios para proteger ativos, estruturar operações e reduzir riscos.",
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100dvh-var(--header-height))] overflow-hidden bg-ink text-paper">
        <ResponsiveImage
          desktopSrc={assets.homeHero}
          mobileSrc={assets.homeHeroMobile}
          alt="Profissionais reunidos em uma sala contemporânea para analisar uma decisão empresarial"
          sizes="100vw"
          className="object-cover object-center md:object-[67%_center]"
          eager
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/5" aria-hidden="true" />
        <div className="shell relative flex min-h-[calc(100dvh-var(--header-height))] items-center py-16 md:py-20">
          <Reveal className="max-w-4xl">
            <h1 className="display-title max-w-[16ch] text-paper">
              Direito para decisões que movem negócios.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-paper/80">
              Protegemos ativos, estruturamos operações e reduzimos riscos com visão integrada de negócio.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contato" variant="light">
                Fale com nossa equipe
              </ButtonLink>
              <ButtonLink
                href="/areas-de-atuacao"
                variant="secondary"
                className="border-paper/60 text-paper hover:bg-paper/10 focus-visible:outline-paper"
              >
                Conheça nossa atuação
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-section-space bg-paper">
        <div className="shell grid items-end gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5 md:pb-10">
            <h2 className="section-title">Participamos antes que o desafio se torne um problema.</h2>
            <p className="body-copy mt-7">
              O trabalho jurídico ganha valor quando participa da decisão. Aproximamos conhecimento técnico, contexto comercial e visão de longo prazo.
            </p>
            <Link href="/o-escritorio" className="editorial-link mt-7">
              Conheça o escritório
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
            </Link>
          </Reveal>
          <Reveal className="image-frame aspect-[16/10] md:col-span-7" delay={0.06}>
            <Image
              src={assets.homeMeeting}
              alt="Três profissionais analisando documentos em uma reunião de trabalho"
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="home-section-space border-y border-line bg-cobalt-soft/60">
        <div className="shell grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="image-frame aspect-[4/5] md:col-span-5">
            <Image
              src={assets.homeIpLayers}
              alt="Equipe avaliando materiais e alternativas em uma mesa de trabalho"
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
              className="object-cover object-left"
            />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={0.06}>
            <h2 className="section-title max-w-[12ch]">Atuação jurídica conectada ao negócio.</h2>
            <p className="body-copy mt-6">
              Reunimos diferentes especialidades para acompanhar empresas em operações, projetos, contratos e situações de risco.
            </p>
            <div className="mt-8 grid divide-y divide-cobalt/25 border-y border-cobalt/25 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {[
                "Negócios e operações",
                "Marcas, tecnologia e dados",
                "Riscos e disputas",
              ].map((item) => (
                <p key={item} className="py-5 text-sm font-semibold leading-6 text-ink lg:px-4 lg:first:pl-0 lg:last:pr-0">
                  {item}
                </p>
              ))}
            </div>
            <Link href="/areas-de-atuacao" className="editorial-link mt-7">
              Conheça todas as áreas
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="home-section-space border-y border-line bg-surface">
        <div className="wide-shell grid gap-12 md:grid-cols-12 md:items-center">
          <Reveal className="md:col-span-5">
            <h2 className="section-title max-w-[12ch]">Clareza para agir antes, durante e depois da decisão.</h2>
            <p className="body-copy mt-7">
              Estruturamos caminhos, testamos riscos e conectamos especialistas para que a solução jurídica funcione dentro da operação.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-line pt-7">
              <div>
                <p className="font-serif text-4xl text-cobalt">Contexto</p>
                <p className="mt-2 text-sm leading-6 text-muted">Entender o negócio antes de definir a resposta.</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-cobalt">Direção</p>
                <p className="mt-2 text-sm leading-6 text-muted">Transformar análise em decisão executável.</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="image-frame aspect-[16/10] md:col-span-7" delay={0.06}>
            <Image
              src={assets.homeDecisions}
              alt="Mãos organizando cartões que representam diferentes caminhos de decisão"
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-[clamp(56px,5.5vw,80px)]">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <h2 className="section-title">Quem conduz nossa atuação</h2>
            <p className="body-copy mt-5">
              Experiência técnica, participação próxima e conhecimento do ambiente empresarial.
            </p>
          </Reveal>
          <div className="mt-8">
            <ProfessionalGrid professionals={professionals.slice(0, 3)} variant="compact" />
          </div>
          <Link href="/profissionais" className="editorial-link mt-6">
            Conheça todos os profissionais
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <HomeBlog insights={insights} />

      <FinalCta />
    </>
  );
}
