import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import TimeLine from "./TimeLine";
import MyKlass from "./klass";
import PastKlass from "./PastKlass";
import PostRequest from "./PostRequest";
import ErrorPage from "../ErrorPage";
import Wallet from "./Wallet";
import FundWallet from "./Wallet/FundWallet";
import Withdraw from "./Wallet/Withdraw";
import TutorProfile from "./TutorRequest";
import TutorApply from "./TutorApplyForm";
import Application from "./TutorApplication";
import Submissions from "./Submissions";
import ScheduleClass from "./ScheduleClass";
import Test from "./Test";
import Settings from "./settings";
import Review from './Reviews/Reviews'

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/post-request" element={<PostRequest />} />
      <Route path="/timeline" element={<TimeLine />} />
      <Route path="/class" element={<MyKlass />} />
      <Route path="/request/:id/tutor-applications" element={<Application />} />
      <Route path="/tutor-request" element={<TutorProfile />} />
      <Route path="/past-class" element={<PastKlass />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="/test" element={<Test />} />
      <Route path="/schedule-class" element={<ScheduleClass />} />
      <Route path="/apply/:id" element={<TutorApply />} />
       <Route path="/wallet" element={<Wallet />} />
      <Route path="/apply/:id" element={<TutorApply />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/fund-wallet" element={<FundWallet />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/class/session-end" element={<Review />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
