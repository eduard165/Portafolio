"use client";

import Image from 'next/image'

export default function Banner() {
  return (
    <div className="relative h-48 overflow-hidden bg-[#333333]">
      <Image
        src="/Banner.jpg?height=200&width=800"  
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  )
}
