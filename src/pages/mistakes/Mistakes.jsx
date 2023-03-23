import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/headline/Header";
import Main from "../../components/main/Main";
import ModalTemplate from "../../components/modal/ModalTemplate";

export default function Mistakes() {
  const { id: studentId } = useParams();
  const [showMistakeModal, setShowMistakeModal] = useState();
  const toggleMistakeModal = () => setShowMistakeModal(!showMistakeModal);
  const handleSubmitMistake = () => {};
  const handleMistakeChange = () => {};
  return (
    <Main styleClass="relative">
      {showMistakeModal ? (
        <ModalTemplate title="Add Mistake" handleHideModal={toggleMistakeModal}>
          <div>
            <input
              className="border border-light-green rounded-xl p-1"
              placeholder="Mistake Name"
              onChange={handleMistakeChange}
            />
          </div>
          <div className="mt-3">
            <input
              className="border border-light-green rounded-xl p-1"
              placeholder="Reg No"
            />
          </div>

          <div className="mt-[30px]">
            <textarea
              className="border border-light-green rounded-xl p-1 w-full"
              placeholder="comment"
            />
          </div>
          <button
            className="bg-light-blue   w-full uppercase font-bold rounded-[15px] p-2"
            onClick={handleSubmitMistake}
          >
            Record
          </button>
        </ModalTemplate>
      ) : (
        ""
      )}
      <Header
        title={
          <>
            <span>Gideon Terer</span>
            <div>ene221-8888</div>
          </>
        }
        btnTitle="Add Mistake"
        placeholder="Mistake"
        handleClick={toggleMistakeModal}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="m-[10px] border border-light-blue p-5 rounded-[15px]">
          <div className="flex flex-row justify-between">
            <div className="font-bold">
              This is the mistake done and is one of the student
            </div>
            <span className="text-pink font-bold text-[20px]">10</span>
          </div>
          <div className="mt-3">
            <span className="text-text-green font-bold">10/10/2011</span>
            <div className>
              <span className="mr-3 text-gray-500 text-[14px]">
                Recorded by{" "}
              </span>
              <span className="text-[16px] font-bold">Tula</span>
            </div>
            <button
              className="bg-light-blue px-3 rounded-xl"
              onClick={toggleMistakeModal}
            >
              <i className="bi bi-pencil-fill" />
              <span className="ml-2">Edit</span>
            </button>
          </div>
        </div>
      </div>
    </Main>
  );
}
