import React from "react";

export default function BtnBottom({ show, bottomFocus, setBottomFocus }) {
  return (
    <div
      className={`h-16 w-20  absolute cursor-pointer ${
        show
          ? "border-4 border-dashed border-white animate-pulse"
          : "bg-transparent"
      }`}
      style={{ top: "260px", left: "160px" }}
      data-tooltip-target="node2"
      onMouseEnter={() => setBottomFocus(true)}
      onMouseLeave={() => setBottomFocus(false)}
    ></div>
  );
}
