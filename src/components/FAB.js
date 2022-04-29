import React from "react";
import ShowIcon from "../assets/svg/Show.svg";
import HideIcon from "../assets/svg/Hide.svg";
export default function FAB({ onClick, show }) {
  return (
    <button
      className="absolute right-6 bottom-6 bg-red-600 p-3 rounded-full text-white font-semibold flex gap-2 hover:bg-sky-500 hover:scale-110 ease-in-out duration-700 drop-shadow-2xl"
      onClick={onClick}
    >
      {show ? (
        <img src={HideIcon} alt="Hide" />
      ) : (
        <img src={ShowIcon} alt="Show" />
      )}
    </button>
  );
}
