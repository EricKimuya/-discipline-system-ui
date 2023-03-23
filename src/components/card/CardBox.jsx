import React from "react";

export default function CardBox({
  name,
  otherName,
  position,
  designation,
  mistake,
  children,
}) {
  return (
    <div className="m-[10px] border border-light-blue p-5 rounded-[15px]">
      <div className="flex flex-row justify-between">
        <span className="font-bold text-[16px] ">{name}</span>
        {mistake ? <span>Points</span> : ""}
      </div>
      <div className=" flex justify-between items-center mt-[20px]">
        <div>
          <span className="text-gray-400 mb-2">{otherName}</span>
          <div className="text-pink text-[14px] font-semibold">{position}</div>
        </div>
        <div className=" text-red-800 text-[20px] font-bold">{designation}</div>
      </div>
      {children}
    </div>
  );
}
