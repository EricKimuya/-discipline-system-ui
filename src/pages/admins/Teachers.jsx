import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardBox from "../../components/card/CardBox";
import Role from "../../components/convertobjecttoarray/Role";
import Header from "../../components/headline/Header";
import ModalTemplate from "../../components/modal/ModalTemplate";
import { sendGetRequest, sendPostRequest } from "../../helpers/Requests";
import { formatUrl } from "../../helpers/UrlHelper";

export default function Teachers() {
  const [showTeacherModal, setShowTeacherModal] = useState(false);
  const [input, setInputs] = useState({});
  const [teachers, setTeachers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [filters, setFilters] = useState({
    q: "",
    phone_number: "",
    role: "",
    email: "",
  });

  const toggleAddTeacherModal = (e) => {
    setShowTeacherModal(!showTeacherModal);
  };

  const handleSearchTeacher = (f) => setFilters(f);

  const handleRemoveTeacher = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPostRequest(
      "/teacher/new",
      {
        ...input,
      },
      "Teacher Added Successfully"
    ).then(() => {
      toggleAddTeacherModal();
      fetchTeachers();
    });
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setInputs({ ...input, [name]: value });
  };
  const navigate = useNavigate();

  const fetchTeachers = () => {
    sendGetRequest(
      formatUrl("/teachers", {
        ...filters,
      })
    ).then((res) => {
      setTeachers(res.data.list_of_students);
    });
  };

  useEffect(fetchTeachers, [filters]);

  return (
    <div className="bg-gray ">
      {showTeacherModal ? (
        <ModalTemplate
          title={"Add Teacher"}
          handleHideModal={toggleAddTeacherModal}
        >
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                className="p-1 border border-light-green rounded-xl"
                type="text"
                name="name"
                placeholder="Teachers Name"
                value={input.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <input
                className="p-1 border border-light-green rounded-xl"
                type="text"
                name="email"
                placeholder="Email Address"
                value={input.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4 relative">
              <input
                className="p-1 border border-light-green rounded-xl"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={input.password}
                onChange={handleInputChange}
              />
              <span
                className="absolute top-2 right-2"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                <i className="bi bi-eye" />
              </span>
            </div>
            <div className="mt-4">
              <input
                className="p-1 border border-light-green rounded-xl"
                type="text"
                name="phone_number"
                placeholder="PhoneNumber"
                value={input.phone_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <input
                className="p-1 border border-light-green rounded-xl"
                type="number"
                name="role"
                placeholder="Role"
                value={input.role}
                onChange={handleInputChange}
              />
            </div>
            <button className="bg-light-blue p-2 rounded-[15px] w-full mt-[30px] uppercase font-bold">
              Save
            </button>
          </form>
        </ModalTemplate>
      ) : (
        ""
      )}
      <div className="m-2">
        <Header
          title="Teachers"
          handleClick={toggleAddTeacherModal}
          btnTitle="Add Teacher"
          handleSearchKeyword={handleSearchTeacher}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teachers.map((teacher) => (
            <Link to="/makosa/profile">
              <CardBox
                key={teacher.id}
                name={teacher.name}
                otherName={teacher.email}
                designation={
                  <button onClick={handleRemoveTeacher}>
                    <i className="bi bi-trash" />
                  </button>
                }
              >
                <span>{<Role status={teacher.role} />}</span>
              </CardBox>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
