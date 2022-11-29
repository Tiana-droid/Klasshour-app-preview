import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import TimeLine from "./TimeLine";
import MyKlass from "./klass";
import PastKlass from "./PastKlass";
import PostRequest from "./PostRequest";
import ErrorPage from "../ErrorPage";
import TutourProfile from "./TutorRequest";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/post-request" element={<PostRequest />} />
      <Route path="/timeline" element={<TimeLine />} />
      <Route path="/class" element={<MyKlass />} />
      <Route path="/tutor-request" element={<TutourProfile />} />
      <Route path="/past-class" element={<PastKlass />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
