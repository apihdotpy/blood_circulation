import React from "react";

export default function DescriptionLeft({ topFocus, bottomFocus }) {
  const descriptionTop = "Nodus sinoatrium (Nodus SA) menjana impuls elektrik.";
  const descriptionBottom =
    "Impuls elektrik sampai ke nodus atrioventrikel. Impuls elektrik merebak melalui berkas His, dan gentian Purkinje, sehinggalah ke apeks jantung";

  return (
    <div className="bg-yellow-100 flex w-96 px-8 pb-4 rounded-lg tracking-wide animate__animated animate__backInLeft">
      <h1 className="text-8xl text-cyan-400">1</h1>
      <span className="mt-4 ml-3">
        {topFocus && descriptionTop}
        {bottomFocus && descriptionBottom}
      </span>
    </div>
  );
}
