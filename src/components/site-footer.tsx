import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { areas, siteInfo } from "@/data/site.mock";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell grid gap-12 border-t border-paper/20 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Wordmark inverted />
          <p className="mt-6 max-w-xs text-sm leading-6 text-paper/65">
            Advocacia empresarial conectada a decisões estratégicas, ativos e crescimento.
          </p>
        </div>

        <nav aria-label="Links institucionais" className="md:col-span-3">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-paper/55">
            Institucional
          </p>
          <div className="flex flex-col items-start gap-2 text-sm">
            <Link className="min-h-11 py-2 hover:text-[#9eb5ff]" href="/o-escritorio">
              O Escritório
            </Link>
            <Link className="min-h-11 py-2 hover:text-[#9eb5ff]" href="/profissionais">
              Profissionais
            </Link>
            <Link className="min-h-11 py-2 hover:text-[#9eb5ff]" href="/insights">
              Blog
            </Link>
            <Link className="min-h-11 py-2 hover:text-[#9eb5ff]" href="/contato">
              Contato
            </Link>
          </div>
        </nav>

        <nav aria-label="Áreas de atuação" className="md:col-span-3">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-paper/55">
            Atuação
          </p>
          <div className="flex flex-col items-start gap-1 text-sm">
            {areas.slice(0, 4).map((area) => (
              <Link
                key={area.slug}
                className="min-h-10 py-2 text-paper/80 hover:text-[#9eb5ff]"
                href={`/areas-de-atuacao/${area.slug}`}
              >
                {area.shortName}
              </Link>
            ))}
          </div>
        </nav>

        <div className="md:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-paper/55">
            Contato
          </p>
          <div className="flex min-w-0 flex-col items-start gap-1 text-sm [overflow-wrap:anywhere]">
            <a className="min-h-11 py-2 text-paper/80 hover:text-[#9eb5ff]" href={siteInfo.emailHref}>
              {siteInfo.email}
            </a>
            <a className="min-h-11 py-2 text-paper/80 hover:text-[#9eb5ff]" href={siteInfo.phoneHref}>
              {siteInfo.phone}
            </a>
            <a
              className="min-h-11 py-2 text-paper/80 hover:text-[#9eb5ff]"
              href={siteInfo.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {siteInfo.whatsapp}
            </a>
          </div>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-paper/15 py-6 text-xs leading-5 text-paper/55 sm:flex-row sm:items-center sm:justify-between">
        <p>Projeto conceitual. Escritório, equipe e dados apresentados são fictícios.</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:justify-end">
          <p>© 2026 Mendes & Carvalho Advogados</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/arthurgoncalvees/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Arthur Gonçalves, desenvolvedor do site"
              className="developer-credit-link"
            >
              Arthur Gonçalves
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
