"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { cn } from "@/lib/utils";

export function GameHeroBackground({
  src,
  imageClassName,
  sizes = "100vw",
}: {
  src: string;
  imageClassName?: string;
  sizes?: string;
}) {
  const [broken, setBroken] = useState(false);
  const onError = useCallback(() => setBroken(true), []);

  if (broken) {
    return (
      <div
        className="absolute inset-0 bg-[#1C1C23]"
        aria-hidden
      />
    );
  }

  return (
    <Image
      src={src}
      alt=""
      fill
      priority
      className={cn(
        "object-cover object-center",
        imageClassName,
      )}
      sizes={sizes}
      onError={onError}
    />
  );
}
