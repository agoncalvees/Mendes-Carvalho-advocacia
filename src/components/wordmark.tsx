import Link from "next/link";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex min-h-11 flex-col justify-center leading-none ${
        inverted ? "text-paper" : "text-ink"
      }`}
      aria-label="Mendes & Carvalho Advogados, página inicial"
    >
      <span className="font-serif text-[1.28rem] font-medium tracking-[-0.035em] sm:text-[1.42rem]">
        Mendes & Carvalho
      </span>
      <span className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.23em] opacity-70">
        Advogados
      </span>
    </Link>
  );
}
