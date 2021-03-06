import React from "react";

export default function DescriptionRight({ topFocus, bottomFocus }) {
  const descriptionTop =
    "Impuls elektrik merebak dengan cepat dalam kedua-dua atrium, menyebabkan atrium mengecut secara serentak. Pengecutan atrium membantu mengepam darah ke dalam ventrikel.";
  const descriptionBottom =
    "Impuls elektrik merebak dari bahagian apeks jantung ke seluruh dinding ventrikel. Akibatnya, ventrikel mengecut untuk mengepam darah keluar ke peparu dan badan.";

  return (
    <div className="bg-yellow-100 flex w-96 px-8 pb-4 rounded-lg tracking-wide animate__animated animate__bounceInRight">
      <h1 className="text-8xl text-cyan-400">2</h1>
      <span className="mt-4 ml-3">
        {topFocus && descriptionTop} {bottomFocus && descriptionBottom}
      </span>
    </div>
  );
}
