import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import type { Insight } from "@/data/site.mock";

export function HomeBlog({ insights }: { insights: Insight[] }) {
  const [featured, ...secondary] = insights.slice(0, 4);

  if (!featured) return null;

  return (
    <section className="section-space border-t border-line bg-paper" id="blog">
      <div className="shell">
        <Reveal className="flex items-end justify-between gap-8">
          <h2 className="section-title">Blog</h2>
          <Link href="/insights" className="editorial-link shrink-0">
            Ver todos os conteúdos
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.5} />
          </Link>
        </Reveal>

        <div className="mt-12 border border-line">
          <Reveal>
            <article>
              <Link href={`/insights/${featured.slug}`} className="group grid lg:grid-cols-2">
                <div className="image-frame aspect-[16/10] lg:min-h-[420px] lg:aspect-auto">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative flex min-h-[340px] flex-col justify-between border-t border-line p-7 lg:min-h-[420px] lg:border-l lg:border-t-0 lg:p-10">
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 size-0 border-l-[18px] border-t-[18px] border-l-transparent border-t-cobalt"
                  />
                  <h3 className="max-w-[18ch] pr-8 text-[clamp(2rem,3.4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.045em] text-cobalt">
                    {featured.title}
                  </h3>
                  <div className="mt-10 flex items-end justify-between gap-6 text-sm leading-6 text-muted">
                    <div>
                      <p>{featured.readTime}</p>
                      <p className="font-medium text-ink">{featured.category}</p>
                    </div>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={24}
                      strokeWidth={1.5}
                      className="shrink-0 text-cobalt transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            </article>
          </Reveal>

          <div className="grid md:grid-cols-3">
            {secondary.map((insight, index) => (
              <Reveal key={insight.slug} delay={index * 0.04} className={index > 0 ? "md:border-l md:border-line" : ""}>
                <article className="h-full border-t border-line">
                  <Link href={`/insights/${insight.slug}`} className="group flex h-full flex-col">
                    <div className="image-frame aspect-[16/9]">
                      <Image
                        src={insight.image}
                        alt={insight.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex min-h-[260px] flex-1 flex-col justify-between p-6">
                      <span
                        aria-hidden="true"
                        className="absolute right-3 top-3 size-0 border-l-[14px] border-t-[14px] border-l-transparent border-t-cobalt"
                      />
                      <h3 className="max-w-[18ch] pr-6 text-[1.45rem] font-medium leading-[1.18] tracking-[-0.035em] text-cobalt">
                        {insight.title}
                      </h3>
                      <div className="mt-8 flex items-end justify-between gap-5 text-xs leading-5 text-muted">
                        <div>
                          <p>{insight.readTime}</p>
                          <p className="font-medium text-ink">{insight.category}</p>
                        </div>
                        <ArrowUpRight
                          aria-hidden="true"
                          size={19}
                          strokeWidth={1.5}
                          className="shrink-0 text-cobalt transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="grid items-center gap-7 border-t border-line p-7 md:p-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.05] tracking-[-0.045em] text-ink">
                Análises na sua caixa de entrada
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                Receba conteúdos jurídicos conectados às decisões do seu negócio.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <ButtonLink href="/contato">Assine nossa newsletter</ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
