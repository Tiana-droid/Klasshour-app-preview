import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";

export default function MyKlass() {
  return (
    <UserLayout>
      <PageNav isActive={true} title="Class" />
      <div>Class</div>
    </UserLayout>
  );
}
