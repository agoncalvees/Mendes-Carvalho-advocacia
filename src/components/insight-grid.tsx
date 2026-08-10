import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Insight } from "@/data/site.mock";

export function InsightGrid({ insights }: { insights: Insight[] }) {
  return (
    <div className="grid gap-x-8 gap-y-16 md:grid-cols-12">
      {insights.map((insight, index) => {
        const span = index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-6";
        const aspect = index === 0 ? "aspect-[16/10]" : index === 1 ? "aspect-[4/5]" : "aspect-[16/10]";
        return (
          <Reveal key={insight.slug} delay={(index % 2) * 0.05} className={span}>
            <article>
              <Link href={`/insights/${insight.slug}`} className="group block">
                <div className={`image-frame ${aspect}`}>
                  <Image
                    src={insight.image}
                    alt={insight.imageAlt}
                    fill
                    sizes={index < 2 ? "(max-width: 767px) 100vw, 58vw" : "(max-width: 767px) 100vw, 50vw"}
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-line pt-5">
                  <div className="flex items-center justify-between gap-4 text-xs font-semibold text-muted">
                    <span>{insight.category}</span>
                    <time dateTime={insight.dateIso}>{insight.date}</time>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <h2 className="card-title max-w-[18ch]">{insight.title}</h2>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={20}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-cobalt transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{insight.summary}</p>
                </div>
              </Link>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
