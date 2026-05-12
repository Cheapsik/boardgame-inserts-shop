"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

export function GameHeroBackground({ src }: { src: string }) {
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
      className="object-cover object-center"
      sizes="100vw"
      onError={onError}
    />
  );
}
