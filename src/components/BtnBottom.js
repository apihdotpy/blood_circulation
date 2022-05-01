import React from "react";

export default function BtnBottom({ show, bottomFocus, setBottomFocus }) {
  return (
    <div
      className={`h-8 w-8  absolute cursor-pointer ${
        show
          ? "border-4 border-dashed border-white animate-pulse"
          : "bg-transparent"
      }`}
      style={{ top: "231px", left: "112px" }}
      data-tooltip-target="node2"
      onMouseEnter={() => setBottomFocus(true)}
      onMouseLeave={() => setBottomFocus(false)}
    ></div>
  );
}
