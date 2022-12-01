import React from "react";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import { RequestForm, RequestFormPageLayout } from "./Styles";

export default function PostRequest() {
  return (
    <UserLayout>
      <RequestFormPageLayout>
        <h2>Request Form</h2>
        <RequestForm>your form here</RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}
