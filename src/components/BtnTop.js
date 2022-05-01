import React from "react";

export default function BtnTop({ show, topFocus, setTopFocus }) {
  return (
    <div
      className={`h-8 w-8 absolute cursor-pointer bg-transparent ${
        show
          ? "border-4 border-dashed border-white animate-pulse"
          : "bg-transparent"
      }`}
      style={{ top: "206px", left: "70px" }}
      data-tooltip-target="node1"
      onMouseEnter={() => setTopFocus(true)}
      onMouseLeave={() => setTopFocus(false)}
    ></div>
  );
}
