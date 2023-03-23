import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardBox from "../../components/card/CardBox";
import Header from "../../components/headline/Header";
import Main from "../../components/main/Main";
import ModalTemplate from "../../components/modal/ModalTemplate";
import { sendGetRequest, sendPostRequest } from "../../helpers/Requests";
import { formatUrl } from "../../helpers/UrlHelper";

export default function Students() {
  const [showModal, setShowModal] = useState(false);
  const [student, setStudent] = useState({});
  const navigate = useNavigate();
  const [pupils, setPupils] = useState([]);
  const [filters, setFilters] = useState({
    q: "",
    admissionNumber: "",
    class: "",
    stream: "",
  });

  const toggleModal = () => setShowModal(!showModal);

  const handleFilters = (f) => setFilters(f);
  const handleSubmitStudent = (e) => {
    e.preventDefault();
    sendPostRequest(
      "/student/new",
      {
        ...student,
      },
      "Student Added Successfully"
    ).then((res) => {
      toggleModal();
      handleFetchPupils();
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleFetchPupils = () => {
    sendGetRequest(
      formatUrl("/students", {
        ...filters,
      })
    ).then((res) => {
      setPupils(res.data.list_of_students);
    });
  };

  useEffect(handleFetchPupils, [filters]);
  return (
    <Main styleClass="relative">
      {showModal ? (
        <ModalTemplate
          handleClick={handleSubmitStudent}
          title="Add Student"
          handleHideModal={toggleModal}
        >
          <form className="form" onSubmit={handleSubmitStudent}>
            <div>
              <input
                className="p-3 border border-gray-200 rounded-xl"
                type="text"
                placeholder="Student Name"
                name="name"
                onChange={handleChange}
                value={student.name}
              />
            </div>
            <div>
              <input
                className="p-3 border mt-3 border-gray-200 rounded-xl"
                type="text"
                placeholder="Registration Number"
                name="admission_number"
                onChange={handleChange}
                value={student.admission_number}
              />
            </div>
            <div>
              <input
                className="p-3 border mt-3 border-gray-200 rounded-xl"
                type="number"
                placeholder="Class"
                name="class"
                onChange={handleChange}
                value={student.class}
              />
            </div>
            <div>
              <input
                className="p-3 border mt-3 border-gray-200 rounded-xl"
                type="text"
                placeholder="Stream"
                name="stream"
                onChange={handleChange}
                value={student.stream}
              />
            </div>
            <button
              className="bg-light-blue mt-3 p-2 rounded-xl w-full uppercase font-bold"
              type="submit"
            >
              Add Student
            </button>
          </form>
        </ModalTemplate>
      ) : (
        ""
      )}
      <Header
        title="Students"
        btnTitle="Add Student"
        placeholder="Enter admission Number to search..."
        handleClick={toggleModal}
        handleSearchKeyword={handleFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pupils.map((pupil) => (
          <CardBox
            key={pupil.id}
            name={pupil.name}
            otherName={pupil.admission_number}
            designation={pupil.status}
            mistake
          >
            <div className="flex flex-row justify-between mt-[10px]">
              <button className="rounded-[15px] bg-light-blue  px-3">
                <i className="bi bi-plus text-black " />
              </button>
              <button className="rounded-[15px] bg-light-blue  px-3">
                <i className="bi bi-pen text-black " />
              </button>
              <button
                className="rounded-[15px] bg-light-blue px-3"
                onClick={() => navigate("/mistakes")}
              >
                <i className="bi bi-people text-black " />
              </button>
            </div>
          </CardBox>
        ))}
      </div>
    </Main>
  );
}
