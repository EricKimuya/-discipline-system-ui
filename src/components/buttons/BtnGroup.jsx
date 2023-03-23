import React from "react";

export default function BtnGroup({ buttons, selected, updateChangeSelected }) {
  return (
    <div
      className="flex flex-row mx-2 mt-[20px] h-[fit-content] bg-gray-200 rounded-[10px]"
      role="group"
    >
      {buttons.map((btn, index) => (
        <button
          type="button"
          className={`${
            selected === btn.value ? "bg-light-blue" : "bg-gray"
          } w-full  py-4 rounded-[10px] font-bold `}
          onClick={() => {
            updateChangeSelected(btn.value);
          }}
          selected={btn.value}
          key={index}
        >
          {btn.display}
        </button>
      ))}
    </div>
  );
}
