"use client";

import Image from 'next/image';

export default function Profile() {
  const handleCVClick = () => {
    // Ruta al archivo PDF en tu proyecto o un enlace externo
    window.open("/cv.pdf", "_blank");
  };

  return (
    <div className="relative px-4 pb-4">
      {}
      <div className="absolute -top-16 left-4">
        <Image
          src="/yo.jpeg?height=100&width=100"
          alt="Eduardo R.S"
          width={100}
          height={100}
          className="rounded-full border-4 border-white"
        />
      </div>
      {}
      <div className="mt-24 ml-28"> {}
        <h1 className="text-2xl font-bold">Eduardo R.S</h1>
        <p className="text-sm text-gray-600">---</p>
        <p className="mt-2 text-sm">
          
        </p>
      </div>

      {/* Botón para abrir el CV */}
      <button
        onClick={handleCVClick} 
        className="absolute top-4 right-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
      >
        CV
      </button>
    </div>
  );
}
