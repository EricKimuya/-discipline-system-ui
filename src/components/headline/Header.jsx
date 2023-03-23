import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({
  title,
  handleClick,
  btnTitle,
  placeholder,
  handleSearchKeyword,
  btnSelect,
}) {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden">
      <div className=" text-center mt-3 font-bold text-[20px]">
        <div>{btnSelect}</div>
        <div>{title}</div>
      </div>
      <div className=" flex flex-row justify-between items-center font-bold text-[20px] my-[30px]">
        <span className="cursor-pointer ml-3">
          <i
            className="bi bi-arrow-left-square-fill font-bold text-[20px]"
            onClick={() => navigate(-1)}
          />
        </span>
        <div>
          <button
            className="p-2 bg-light-blue font-medium float-right mr-[5px] rounded-2xl text-[12px]"
            onClick={handleClick}
          >
            <span className="mr-3">
              <i className=" bi bi-plus" />
            </span>
            {btnTitle}
          </button>
        </div>
      </div>
      <div className="relative m-5 lg:w-1/4">
        <input
          className="border border-gray rounded-[15px] w-full p-2"
          placeholder={placeholder}
          onKeyDown={handleSearchKeyword}
        />
        <button
          className="absolute right-4 top-2"
          onClick={handleSearchKeyword}
        >
          <i className="bi bi-search  text-light-blue" />
        </button>
      </div>
    </div>
  );
}
