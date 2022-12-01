import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import RequestCard from "../../Components/RequestCard";
import { RequestData } from "../../Shared/RequestData";
import {
  NextButton,
  PageLayout,
  PaginationContainer,
  PrevButton,
} from "./Styles";

export default function TimeLine() {
  return (
    <UserLayout>
      <PageNav isActive={true} title="Requests" />
      <PageLayout>
        {RequestData.map((obj, index) => {
          return (
            <React.Fragment key={index}>
              <RequestCard data={obj} />
            </React.Fragment>
          );
        })}

        <PaginationContainer>
          <PrevButton>Prev</PrevButton>
          <span>1 of 20</span>
          <NextButton>Next</NextButton>
        </PaginationContainer>
      </PageLayout>
    </UserLayout>
  );
}
