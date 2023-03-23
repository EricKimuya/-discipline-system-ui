import React from "react";
import { useNavigate } from "react-router-dom";
import Main from "../../components/main/Main";

function Profile() {
  const navigate = useNavigate();
  return (
    <Main styleClass={"items-center"}>
      <div className="md:w-full lg:w-[25%] bg-slate-300 h-full">
        <div className="font-bold m-5">
          <button
            className="float-start mr-[200px]"
            onClick={() => {
              navigate(-1);
            }}
          >
            <i className="bi bi-arrow-left" />
          </button>
          <span className="font-bold text-[30px]">Admin</span>
        </div>
        <div className="flex  flex-row justify-center ">
          <img src="/profile.png" />
        </div>
        <div className="mt-2 p-3">
          <div className="my-4">
            <span className="mr-5">Name</span>
            <span className="font-bold ">Patrick Ndiragu</span>
          </div>
          <div className="my-4">
            <span className="mr-5">Name</span>
            <span className="font-bold ">Patrick Ndiragu</span>
          </div>
          <div className="my-4">
            <span className="mr-5">Name</span>
            <span className="font-bold ">Patrick Ndiragu</span>
          </div>
        </div>
      </div>
    </Main>
  );
}

export default Profile;
