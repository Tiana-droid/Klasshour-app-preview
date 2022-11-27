import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import Login from "./Login";
import Signup from "./Signup";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}