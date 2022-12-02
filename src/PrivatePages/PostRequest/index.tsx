import React from "react";
import RequestCard from "../../Components/RequestCard";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import { getStoredAuthToken } from "../../utils/LS";
import { RequestForm, RequestFormPageLayout ,FormControl,Button} from "./Styles";

export default function PostRequest() {
  return (
    <UserLayout>
      <RequestFormPageLayout>
        <h2>Request Form</h2>
        <RequestForm>
          <FormControl>
            <label htmlFor="Subject">Subject</label>
            <input type="text" placeholder="Physics"/>
          </FormControl>
           <FormControl>
            <label htmlFor="Subject">Description</label>
            <textarea name="" id="" cols={30} rows={10} />
          </FormControl>
          <Button>Post Request</Button>
        </RequestForm>
      </RequestFormPageLayout>
    </UserLayout>
  );
}
