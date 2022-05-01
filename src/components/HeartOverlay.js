import React from "react";
import ContentTop from "./ContentTop";
import ContentBottom from "./ContentBottom";
// button
import BtnTop from "./BtnTop";
import BtnBottom from "./BtnBottom";

export default function HeartOverlay({
  show,
  topFocus,
  setTopFocus,
  bottomFocus,
  setBottomFocus,
}) {
  return (
    <div className="bg-transparent absolute z-10 h-96 w-80">
      <BtnTop show={show} topFocus={topFocus} setTopFocus={setTopFocus} />
      <ContentTop bottomFocus={bottomFocus} />
      <BtnBottom
        show={show}
        bottomFocus={bottomFocus}
        setBottomFocus={setBottomFocus}
      />
      <ContentBottom topFocus={topFocus} />
    </div>
  );
}
