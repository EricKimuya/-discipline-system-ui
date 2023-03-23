import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnGroup from "../components/buttons/BtnGroup";
import Main from "../components/main/Main";
import { storeLocally } from "../helpers/Auth";
import { AUTH_ADMIN_KEY } from "../helpers/Constants";
import { sendPostRequest } from "../helpers/Requests";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isAdmin, setIsAdmin] = useState(0);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    isAdmin: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    sendPostRequest(
      "/login",
      {
        email: user.email,
        password: user.password,
        isAdmin: isAdmin === 1,
      },
      "Log in Success"
    ).then((res) => {
      const user = res.data.token;
      console.log(user);
      if (isAdmin) {
        navigate("/makosa");
        storeLocally(AUTH_ADMIN_KEY, user);
        window.location.reload(false);
      } else {
        navigate("/students");
        storeLocally(AUTH_ADMIN_KEY, user);
        window.location.reload(false);
      }
    });
  };

  return (
    <Main styleClass={"justify-center items-center"}>
      <div className="bg-white flex flex-col w-full lg:w-[25%] overflow-hidden">
        <span className="text-black  font-bold text-2xl text-center mt-3 pt-3">
          Makosa
        </span>
        <span className="text-start m-3 font-semi-bold">Proceed As</span>
        <div className="mt-[30px]">
          <BtnGroup
            selected={isAdmin}
            buttons={[
              {
                display: "Admin",
                value: 1,
              },
              {
                display: "Teacher",
                value: 0,
              },
            ]}
            updateChangeSelected={(active) => {
              setIsAdmin(active);
            }}
          />
        </div>

        <div className="flex flex-col mt-[50px] mx-2">
          <form className="form" onSubmit={handleLogin} method="post">
            <div>
              <input
                className="bg-gray border border-light-green w-full rounded-xl p-3 mb-3"
                type="text"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="relative">
              <input
                className="bg-gray border border-light-green w-full rounded-xl p-3 mt-4"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
              <span
                className="absolute right-3 top-7"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className="bi bi-eye" />
              </span>
            </div>
            <div className="mt-[100px]">
              <button
                className="bg-light-blue w-full py-4 rounded-xl font-bold"
                type="submit"
              >
                Log In
                <span className="ml-[30px]">
                  <i className="bi bi-arrow-right" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Main>
  );
}
