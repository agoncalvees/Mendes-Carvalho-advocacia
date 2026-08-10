"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { Wordmark } from "@/components/wordmark";

const navigation = [
  { href: "/o-escritorio", label: "O Escritório" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/profissionais", label: "Profissionais" },
  { href: "/insights", label: "Insights" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 h-[var(--header-height)] border-b border-line/90 bg-paper">
      <div className="shell flex h-full items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative flex min-h-11 items-center whitespace-nowrap text-[0.87rem] font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-cobalt after:transition-transform ${
                isActive(item.href)
                  ? "text-cobalt after:scale-x-100"
                  : "text-ink/75 after:scale-x-0 hover:text-ink hover:after:scale-x-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <ButtonLink href="/contato">Fale com nossa equipe</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[2px] border border-line text-ink transition-colors hover:bg-surface lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden="true" size={23} strokeWidth={1.5} />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 min-h-[100dvh] overflow-y-auto bg-ink text-paper lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          <div className="shell flex h-[var(--header-height)] items-center justify-between border-b border-paper/20">
            <Wordmark inverted />
            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-[2px] border border-paper/40 transition-colors hover:bg-paper/10"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <X aria-hidden="true" size={23} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="shell flex flex-col py-10" aria-label="Navegação móvel">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-paper/20 py-5 font-serif text-[2rem] leading-tight transition-colors ${
                  isActive(item.href) ? "text-[#8da8ff]" : "text-paper hover:text-[#8da8ff]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contato" variant="light" className="mt-10 w-full sm:w-fit">
              Fale com nossa equipe
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
