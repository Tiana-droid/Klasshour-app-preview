import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import RequestCard from "../../Components/RequestCard";
import ClassCard from "../../Components/ClassCard";
import { RequestData } from "../../Shared/RequestData";
import { ClassData } from "../../Shared/ClassData";
import {
  NextButton,
  PageLayout,
  PaginationContainer,
  PrevButton,
} from "./Styles";

export default function PastKlass() {
  return (
    <UserLayout>
      <PageNav isActive={true} title="Past Class" />
      <PageLayout>
        {ClassData.map((obj, index) => {
          return (
            <React.Fragment key={index}>
              <ClassCard data={obj} isPast={true} />
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
