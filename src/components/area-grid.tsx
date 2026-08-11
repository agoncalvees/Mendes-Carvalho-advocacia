import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { PracticeArea } from "@/data/site.mock";

export function AreaGrid({ areas }: { areas: PracticeArea[] }) {
  const [featured, ...remaining] = areas;

  return (
    <div className="space-y-16 md:space-y-24">
      {featured ? (
        <Reveal>
          <Link
            href={`/areas-de-atuacao/${featured.slug}`}
            className="group grid border-t border-line pt-6 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-7">
              <div className="image-frame aspect-[4/3] md:aspect-[16/10]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between py-7 md:col-span-5 md:py-2">
              <div>
                <h2 className="section-title">{featured.name}</h2>
                <p className="body-copy mt-6">{featured.summary}</p>
              </div>
              <span className="mt-8 inline-flex min-h-11 items-center gap-3 font-semibold text-cobalt group-hover:text-cobalt-hover">
                Conheça esta atuação
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        </Reveal>
      ) : null}

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12 lg:gap-y-24">
        {remaining.map((area, index) => (
          <Reveal key={area.slug} delay={(index % 2) * 0.05}>
            <Link href={`/areas-de-atuacao/${area.slug}`} className="group block">
              <div className={`image-frame ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"}`}>
                <Image
                  src={area.image}
                  alt={area.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-line pt-5">
                <div className="flex items-start justify-between gap-6">
                  <h2 className="card-title max-w-[14ch]">{area.name}</h2>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={21}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-cobalt transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted">{area.summary}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
