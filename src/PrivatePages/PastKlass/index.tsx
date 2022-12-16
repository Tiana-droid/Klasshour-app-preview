import React, { useState } from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import RequestCard from "../../Components/RequestCard";
import EmptyState from '../../Components/EmptyData'
import ClassCard from "../../Components/ClassCard";
import { ClassData } from "../../Shared/ClassData";
import {
  NextButton,
  PageLayout,
  PaginationContainer,
  PrevButton,
} from "./Styles";
import Pagination from "../../Components/Pagination";

export default function PastKlass() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, settotalPages] = useState<number>(0);
  return (
    <UserLayout>
      <PageNav isActive={true} title="Past Class" />
      <PageLayout>
        {ClassData?.length<0? ClassData.map((obj, index) => {
          return (
            <React.Fragment key={index}>
              {/* <ClassCard data={obj} isPast={true} /> */}
            </React.Fragment>
          );
        }): <EmptyState data="Past Classes"/>}

     {/* {ClassData?.length>0 &&  <Pagination totalPages={ClassData?.length}
            currentPage={currentPage}
            callBack={(value: any) => {
              setCurrentPage(value);
              // getStudentRequests(value);
            }}/>} */}
      </PageLayout>
    </UserLayout>
  );
}
