import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { ResponsiveImage } from "@/components/responsive-image";

type PageHeroProps = {
  title: string;
  description: string;
  label?: string;
  image?: string;
  mobileImage?: string;
  imageAlt?: string;
  children?: ReactNode;
  imagePosition?: string;
};

export function PageHero({
  title,
  description,
  label,
  image,
  mobileImage,
  imageAlt = "",
  children,
  imagePosition = "object-center",
}: PageHeroProps) {
  return (
    <section className="border-b border-line bg-paper">
      <div className={`wide-shell grid ${image ? "min-h-[calc(100dvh-var(--header-height))] lg:grid-cols-12" : "py-24 md:py-32"}`}>
        <Reveal
          className={`flex flex-col justify-center py-16 md:py-20 ${
            image ? "lg:col-span-6 lg:pr-16 xl:pr-24" : "max-w-4xl"
          }`}
        >
          {label ? <p className="eyebrow">{label}</p> : null}
          <h1 className="page-title max-w-[12ch]">{title}</h1>
          <p className="lead mt-7">{description}</p>
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>

        {image ? (
          <Reveal className="image-frame min-h-[52dvh] lg:col-span-6 lg:min-h-full" delay={0.06}>
            <ResponsiveImage
              desktopSrc={image}
              mobileSrc={mobileImage}
              alt={imageAlt}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className={`object-cover ${imagePosition}`}
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
