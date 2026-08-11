import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Professional } from "@/data/site.mock";

type ProfessionalGridProps = {
  professionals: Professional[];
  variant?: "default" | "compact";
};

export function ProfessionalGrid({ professionals, variant = "default" }: ProfessionalGridProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={
        isCompact ? "grid gap-x-6 gap-y-8 md:grid-cols-3 md:gap-y-10" : "grid gap-x-7 gap-y-14 md:grid-cols-12"
      }
    >
      {professionals.map((professional, index) => (
        <Reveal
          key={professional.slug}
          delay={index * 0.05}
          className={isCompact ? undefined : getColumnSpan(index, professionals.length)}
        >
          <Link
            href={`/profissionais/${professional.slug}`}
            aria-label={`Ver perfil de ${professional.name}`}
            className="group block h-full"
          >
            <div className="image-frame aspect-[4/5]">
              <Image
                src={professional.image}
                alt={professional.imageAlt}
                fill
                sizes={
                  isCompact
                    ? "(max-width: 767px) 100vw, 33vw"
                    : index === 0
                      ? "(max-width: 767px) 100vw, 50vw"
                      : "(max-width: 767px) 100vw, 25vw"
                }
                className="object-cover object-top"
              />
            </div>
            <div
              className={
                isCompact
                  ? "flex items-start justify-between gap-4 border-t border-line pt-4"
                  : "flex items-start justify-between gap-4 border-t border-line pt-5"
              }
            >
              <div>
                <h3
                  className={
                    isCompact
                      ? "text-[1.35rem] font-medium leading-tight tracking-[-0.025em]"
                      : "font-serif text-[1.65rem] font-medium leading-tight tracking-[-0.025em]"
                  }
                >
                  {professional.name}
                </h3>
                <p className={isCompact ? "mt-1.5 text-sm font-medium text-muted" : "mt-2 text-sm font-medium text-muted"}>
                  {professional.role}
                </p>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                size={20}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-cobalt transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

function getColumnSpan(index: number, total: number) {
  if (total <= 2) return "md:col-span-6";
  if (index === 0 || (total > 3 && index === total - 1)) return "md:col-span-6";
  return "md:col-span-3";
}
