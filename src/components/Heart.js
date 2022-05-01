import React from "react";
import HeartImg from "../assets/images/bg.jpg";
import TopImg from "../assets/images/top.gif";
import BottomImg from "../assets/images/bottom.gif";

export default function Heart({ topFocus, bottomFocus }) {
  return (
    <>
      {!topFocus && !bottomFocus ? (
        <img
          src={HeartImg}
          style={{ height: "500px", width: "500px" }}
          alt="Heart Pumping"
        />
      ) : null}
      {topFocus && (
        <img
          src={TopImg}
          style={{ height: "500px", width: "500px" }}
          alt="Top View"
          // className="animate__animated animate__pulse"
        />
      )}
      {bottomFocus && (
        <img
          src={BottomImg}
          style={{ height: "500px", width: "500px" }}
          alt="Bottom View"
          // className="animate__animated animate__pulse"
        />
      )}
    </>
  );
}
