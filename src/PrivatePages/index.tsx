import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
