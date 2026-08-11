"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { areas } from "@/data/site.mock";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/o-escritorio", label: "O Escritório" },
  { href: "/profissionais", label: "Profissionais" },
  { href: "/insights", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Navbar5() {
  const pathname = usePathname();
  const desktopMenuId = useId();
  const mobileMenuId = useId();
  const mobileAreasId = useId();
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const desktopTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileFirstControlRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!desktopMenuOpen && !mobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setMobileAreasOpen(false);
        window.requestAnimationFrame(() => mobileTriggerRef.current?.focus());
        return;
      }

      setDesktopMenuOpen(false);
      window.requestAnimationFrame(() => desktopTriggerRef.current?.focus());
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (desktopMenuOpen && !desktopMenuRef.current?.contains(target)) {
        setDesktopMenuOpen(false);
      }

      if (mobileMenuOpen && !mobileMenuRef.current?.contains(target)) {
        setMobileMenuOpen(false);
        setMobileAreasOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [desktopMenuOpen, mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.requestAnimationFrame(() => mobileFirstControlRef.current?.focus());

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 h-[var(--header-height)] border-b border-line/90 bg-paper">
      {desktopMenuOpen ? (
        <div
          aria-hidden="true"
          className="nav-overlay fixed inset-x-0 bottom-0 top-[var(--header-height)] hidden bg-ink/30 lg:block"
        />
      ) : null}

      <div className="shell relative z-10 flex h-full items-center justify-between gap-5">
        <Wordmark />

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          <div ref={desktopMenuRef} className="relative">
            <button
              ref={desktopTriggerRef}
              type="button"
              aria-expanded={desktopMenuOpen}
              aria-controls={desktopMenuId}
              aria-haspopup="true"
              onClick={() => setDesktopMenuOpen((open) => !open)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-[2px] px-3 py-2 text-[0.86rem] font-medium text-ink/75 transition-colors hover:bg-surface hover:text-ink focus-visible:bg-surface focus-visible:text-ink",
                isActive("/areas-de-atuacao") && "text-cobalt",
              )}
            >
              Áreas de atuação
              <ChevronDown
                aria-hidden="true"
                size={14}
                strokeWidth={1.5}
                className={cn("ml-1 transition-transform duration-200", desktopMenuOpen && "rotate-180")}
              />
            </button>

            {desktopMenuOpen ? (
              <nav
                id={desktopMenuId}
                aria-label="Áreas de atuação"
                className="nav-menu-panel fixed top-[calc(var(--header-height)+8px)] max-h-[calc(100dvh-var(--header-height)-24px)] w-[min(760px,calc(100vw-80px))] overflow-y-auto rounded-[2px] border border-line bg-paper p-3 shadow-[0_24px_70px_rgb(17_24_32_/_0.16)]"
                style={{ left: "max(40px, calc((100% - 1280px) / 2))" }}
              >
                <div className="grid grid-cols-2">
                  {areas.map((area, index) => (
                    <Link
                      key={area.slug}
                      href={`/areas-de-atuacao/${area.slug}`}
                      aria-current={isActive(`/areas-de-atuacao/${area.slug}`) ? "page" : undefined}
                      onClick={() => setDesktopMenuOpen(false)}
                      className={cn(
                        "group border-b border-line p-5 transition-colors hover:bg-surface focus-visible:bg-surface",
                        index % 2 === 0 && index !== areas.length - 1 && "border-r",
                        index === areas.length - 1 && areas.length % 2 === 1 && "col-span-2",
                      )}
                    >
                      <span className="block text-[0.96rem] font-semibold text-ink transition-colors group-hover:text-cobalt group-aria-[current=page]:text-cobalt">
                        {area.shortName}
                      </span>
                      <span className="mega-menu-summary mt-1.5 text-[0.82rem] leading-5 text-muted">
                        {area.summary}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/areas-de-atuacao"
                  onClick={() => setDesktopMenuOpen(false)}
                  className="mt-3 flex min-h-12 items-center justify-between bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-cobalt focus-visible:bg-cobalt"
                >
                  Ver todas as áreas
                  <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.5} />
                </Link>
              </nav>
            ) : null}
          </div>

          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setDesktopMenuOpen(false)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-[2px] px-3 py-2 text-[0.86rem] font-medium text-ink/75 transition-colors hover:bg-surface hover:text-ink focus-visible:bg-surface focus-visible:text-ink",
                isActive(item.href) && "text-cobalt",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden xl:inline-flex">
          <Link href="/contato">
            Fale com nossa equipe
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.5} />
          </Link>
        </Button>

        <div ref={mobileMenuRef} className="lg:hidden">
          <Button
            ref={mobileTriggerRef}
            type="button"
            variant="outline"
            size="icon"
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuId}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" size={22} strokeWidth={1.5} />
            ) : (
              <Menu aria-hidden="true" size={22} strokeWidth={1.5} />
            )}
          </Button>

          {mobileMenuOpen ? (
            <div
              id={mobileMenuId}
              className="nav-menu-panel fixed inset-x-0 top-[var(--header-height)] h-[calc(100dvh-var(--header-height))] overflow-y-auto border-t border-line bg-paper shadow-[0_28px_90px_rgb(17_24_32_/_0.22)]"
            >
              <nav className="shell py-7" aria-label="Navegação móvel">
                <div className="border-b border-line">
                  <button
                    ref={mobileFirstControlRef}
                    type="button"
                    aria-expanded={mobileAreasOpen}
                    aria-controls={mobileAreasId}
                    onClick={() => setMobileAreasOpen((open) => !open)}
                    className={cn(
                      "flex min-h-14 w-full items-center justify-between py-3 text-left text-lg font-medium transition-colors hover:text-cobalt",
                      isActive("/areas-de-atuacao") && "text-cobalt",
                    )}
                  >
                    Áreas de atuação
                    <ChevronDown
                      aria-hidden="true"
                      size={17}
                      strokeWidth={1.5}
                      className={cn("transition-transform duration-200", mobileAreasOpen && "rotate-180")}
                    />
                  </button>

                  {mobileAreasOpen ? (
                    <div id={mobileAreasId} className="mb-5 grid gap-px bg-line sm:grid-cols-2">
                      {areas.map((area) => (
                        <Link
                          key={area.slug}
                          href={`/areas-de-atuacao/${area.slug}`}
                          aria-current={isActive(`/areas-de-atuacao/${area.slug}`) ? "page" : undefined}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileAreasOpen(false);
                          }}
                          className="flex min-h-11 items-center bg-paper px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-cobalt aria-[current=page]:text-cobalt"
                        >
                          {area.shortName}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col">
                  {links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileAreasOpen(false);
                      }}
                      className={cn(
                        "flex min-h-14 items-center border-b border-line py-3 text-lg font-medium transition-colors hover:text-cobalt",
                        isActive(item.href) && "text-cobalt",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <Button asChild className="mt-7 w-full sm:w-fit">
                  <Link
                    href="/contato"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileAreasOpen(false);
                    }}
                  >
                    Fale com nossa equipe
                    <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.5} />
                  </Link>
                </Button>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
