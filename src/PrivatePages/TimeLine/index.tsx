import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";

export default function TimeLine() {
  return (
    <UserLayout>
      <PageNav isActive={true} title="Requests" />
      <div>TimeLine</div>
    </UserLayout>
  );
}
