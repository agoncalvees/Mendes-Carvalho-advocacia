import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { ResponsiveImage } from "@/components/responsive-image";
import { assets } from "@/lib/assets";

export function FinalCta({
  title = "Decisões relevantes pedem uma visão jurídica conectada ao negócio.",
  description = "Converse com uma equipe preparada para entender contexto, objetivos e riscos antes de propor caminhos.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-ink text-paper">
      <ResponsiveImage
        desktopSrc={assets.contactDesktop}
        mobileSrc={assets.contactMobile}
        alt="Arquitetura corporativa e vegetação em uma rua de São Paulo"
        sizes="100vw"
        className="object-cover object-[68%_center] opacity-55 md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/15" aria-hidden="true" />
      <div className="shell relative flex min-h-[560px] items-center py-20">
        <Reveal className="max-w-3xl">
          <h2 className="section-title text-paper">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-paper/75">{description}</p>
          <div className="mt-9">
            <ButtonLink href="/contato" variant="light">
              Fale com nossa equipe
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
