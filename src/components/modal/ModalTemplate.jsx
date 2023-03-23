import React from "react";

export default function ModalTemplate({ title, children, handleHideModal }) {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 w-full h-full z-10 bg-black bg-opacity-20">
      <div className="h-full w-full flex items-center justify-center">
        <div className={`bg-white rounded-xl p-5`}>
          <div className="m-3">
            <span className="text-center m-4  font-bold text-[17px]">
              {title}
            </span>
            <span className="float-right" onClick={handleHideModal}>
              <i className="bi bi-x-circle" />
            </span>
          </div>

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
