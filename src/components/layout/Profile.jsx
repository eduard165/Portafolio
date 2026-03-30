"use client";

import Image from "next/image";

export default function Profile() {
  return (
    <div className="relative px-6 pb-6">

      {/* Avatar */}
      <div className="absolute -top-16 left-6">
        <Image
          src="/yo.jpeg"
          alt="Eduardo R.S"
          width={100}
          height={100}
          className="rounded-full border-4 border-white object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-20 ml-28">
        <h1 className="text-2xl font-bold">
          Eduardo R.S
        </h1>

        <p className="text-sm text-gray-400">
          Fullstack Developer
        </p>

        <p className="mt-2 text-sm text-gray-500 max-w-md">
          Building web applications and APIs using modern technologies.
        </p>
      </div>

      {/* CV Button */}
      <button
        onClick={() => window.open("/cv.pdf", "_blank")}
        className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Download CV
      </button>

    </div>
  );
}