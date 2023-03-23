import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "../pages/admins/Profile";
import Teachers from "../pages/admins/Teachers";
import Login from "../pages/Login";
import Mistakes from "../pages/mistakes/Mistakes";
import Students from "../pages/students/Students";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/students" element={<Students />} />
        <Route path="/makosa" element={<Teachers />} />
        <Route path="/mistakes" element={<Mistakes />} />
        <Route path="/makosa/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
