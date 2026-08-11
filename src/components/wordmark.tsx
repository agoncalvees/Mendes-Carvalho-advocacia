import Image from "next/image";
import Link from "next/link";
import { assets } from "@/lib/assets";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 shrink-0 items-center"
      aria-label="Mendes & Carvalho Advogados, página inicial"
    >
      <Image
        src={inverted ? assets.logoHorizontalWhite : assets.logoHorizontalColor}
        alt=""
        width={720}
        height={180}
        unoptimized
        className="h-auto w-[210px] sm:w-[240px]"
      />
    </Link>
  );
}
