"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-48 overflow-hidden">
      <Image
        src="/Banner.jpg"
        alt="Banner"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
    </div>
  );
}