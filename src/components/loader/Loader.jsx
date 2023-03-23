import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

function Loader() {
  const { promiseInProgress, showLoader } = usePromiseTracker();
  if (promiseInProgress || showLoader) {
    return (
      <div className="fixed z-9999 top-0 bottom-0 left-0 right-0 flex w-[100vw] h-100vh bg-opacity-5 items-center justify-center">
        <div
          className="border-4 border-solid border-t-4 border-t-blue-500 border-black rounded-[50%] w-[80px] h-[80px] spin-slow
        "
        ></div>
      </div>
    );
  } else {
    return;
  }
}

export default Loader;
