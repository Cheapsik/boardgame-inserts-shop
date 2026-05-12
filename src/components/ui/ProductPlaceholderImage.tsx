"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

import { ORGANISER_PRODUCT_IMAGE_SRC } from "@/lib/assets";

type ProductPlaceholderImageProps = {
  alt?: string;
  className?: string;
  sizes?: string;
  /** Pierwszy URL z `product.images` / `set.images`; bez tego używany jest domyślny organiser. */
  src?: string;
} & (
  | { fill: true; width?: never; height?: never }
  | { fill?: false; width: number; height: number }
);

export function ProductPlaceholderImage({
  alt = "",
  className,
  sizes,
  src,
  ...rest
}: ProductPlaceholderImageProps) {
  const resolvedSrc = src ?? ORGANISER_PRODUCT_IMAGE_SRC;
  const [broken, setBroken] = useState(false);
  const onError = useCallback(() => setBroken(true), []);

  const fill = "fill" in rest && rest.fill === true;

  if (broken) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-[#1C1C23] text-center text-xs text-text-muted sm:text-sm",
          fill ? "absolute inset-0 h-full w-full" : "",
          className,
        )}
        style={
          !fill && "width" in rest
            ? { width: rest.width, height: rest.height }
            : undefined
        }
        role="img"
        aria-label={alt || "Zdjęcie produktu"}
      >
        <span className="px-3">Zdjęcie produktu</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        onError={onError}
      />
    );
  }

  const { width, height } = rest;
  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={onError}
    />
  );
}
