import React from "react";

export default function Main({ children, styleClass }) {
  return (
    <div
      className={`flex flex-col w-[100vw] h-[100vh] bg-semi-gray overflow-y-hidden ${styleClass}`}
    >
      {children}
    </div>
  );
}
