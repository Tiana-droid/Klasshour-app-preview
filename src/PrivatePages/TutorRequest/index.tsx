import React from "react";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import TutorCard from "../../Layouts/TutorProfile";
import { useLocation } from "react-router-dom";
export default function Index() {
  const { state } = useLocation()
  return (
    <UserLayout>
            <TutorCard fullName={state} />
    </UserLayout>
  );
}
