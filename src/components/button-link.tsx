import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const variants = {
    primary:
      "border-cobalt bg-cobalt text-on-cobalt hover:border-cobalt-hover hover:bg-cobalt-hover",
    secondary:
      "border-ink bg-transparent text-ink hover:bg-surface focus-visible:outline-cobalt",
    light:
      "border-paper bg-paper text-ink hover:border-surface-strong hover:bg-surface-strong focus-visible:outline-paper",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap rounded-[2px] border px-5 py-3 text-[0.93rem] font-semibold transition duration-200 ease-out active:translate-y-px ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.5} />
    </Link>
  );
}
