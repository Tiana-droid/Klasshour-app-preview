import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import ErrorPage from "../ErrorPage";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
