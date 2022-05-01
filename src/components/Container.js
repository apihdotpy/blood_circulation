import React from "react";

export default function Container({ children }) {
  return <div className="h-screen w-screen bg-white fixed">{children}</div>;
}
