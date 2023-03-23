import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../pages/Login";

export default function UnprotectedRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
