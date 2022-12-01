import React from "react";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import {
  RequestForm,
  RequestFormPageLayout,
  FormContainer,
  Input,
  FormInnerContainer,
  TextArea,
} from "./Styles";
import { Button } from "../../Components/ApplicationCard/Style";

export default function PostRequest() {
  return (
    <UserLayout>
      <RequestFormPageLayout>
        <h2>Request Form</h2>
        <RequestForm>
          <FormInnerContainer>
            <FormContainer>
              <label>Subject</label>
              <Input placeholder="physics" type="text" />
            </FormContainer>
            <FormContainer>
              <label>Description</label>
              <TextArea />
            </FormContainer>
            <Button>Post Request</Button>
          </FormInnerContainer>
        </RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}
