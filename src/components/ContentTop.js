import React from "react";
import viewTopImg from "../assets/images/top.gif";

export default function ContentTop() {
  return (
    <div
      id="node1"
      role="tooltip"
      className="inline-block absolute invisible z-10 py-1.5 px-1.5 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
    >
      <img src={viewTopImg} alt="Heart top view" />
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
}
