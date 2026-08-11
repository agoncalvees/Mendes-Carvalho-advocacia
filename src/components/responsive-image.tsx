import { getImageProps } from "next/image";

type ResponsiveImageProps = {
  desktopSrc: string;
  mobileSrc?: string;
  alt: string;
  sizes: string;
  className?: string;
  eager?: boolean;
};

export function ResponsiveImage({
  desktopSrc,
  mobileSrc,
  alt,
  sizes,
  className,
  eager = false,
}: ResponsiveImageProps) {
  const loading = eager ? ({ loading: "eager" } as const) : {};
  const { props: desktopProps } = getImageProps({
    src: desktopSrc,
    alt,
    fill: true,
    sizes,
    ...loading,
  });

  if (!mobileSrc) {
    return (
      // getImageProps supplies optimized responsive attributes without adding a wrapper element.
      // eslint-disable-next-line @next/next/no-img-element
      <img {...desktopProps} alt={alt} className={className} />
    );
  }

  const { props: mobileProps } = getImageProps({
    src: mobileSrc,
    alt,
    fill: true,
    sizes: "100vw",
    ...loading,
  });

  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobileProps.srcSet} sizes="100vw" />
      {/* getImageProps supplies optimized responsive attributes without adding a wrapper element. */}
      <img {...desktopProps} alt={alt} className={className} />
    </picture>
  );
}
