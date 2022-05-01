import React from "react";

export default function DescriptionBottom({ topFocus, bottomFocus }) {
  const topDescription =
    'Bunyi pertama "lub" dihasilkan apabila injap trikuspid dan injap bikuspid tertutup.';
  const bottomDescription =
    'Bunyi kedua "dub" dihasilkan apabila injap sabit tertutup.';

  return (
    <div className="flex justify-center">
      <div className="flex">
        <div className="flex bg-yellow-100 pb-4 px-4 rounded-lg tracking-wide animate__animated animate__bounceInUp">
          <h1 className="text-cyan-400 text-8xl">3</h1>
          <span className="mt-4 ml-3">
            {topFocus && topDescription}
            {bottomFocus && bottomDescription}
          </span>
        </div>
      </div>
    </div>
  );
}
