import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./Reset-password/index";
import ResetPassword from "./Reset-password/ChangePassword";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/reset-password" element={<ForgetPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
}