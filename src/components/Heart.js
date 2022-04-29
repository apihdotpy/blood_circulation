import React from "react";
import HeartImg from "../assets/images/bg.jpg";

export default function Heart() {
  return (
    <img
      src={HeartImg}
      style={{ height: "500px", width: "500px" }}
      alt="Heart Pumping"
    />
  );
}
