import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Navegação estrutural" className="shell py-5">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight aria-hidden="true" size={14} strokeWidth={1.5} /> : null}
            {item.href ? (
              <Link className="min-h-11 content-center underline decoration-line underline-offset-4 hover:text-cobalt" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="py-3 text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
