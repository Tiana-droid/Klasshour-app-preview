import React, { useEffect, useState } from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import EmptyState from '../../Components/EmptyData'
import ClassCard from "../../Components/ClassCard";

import {
  PageLayout,
} from "./Styles";
import { getStoredClientUser } from "../../utils/LS";
import StudentOBJ from "../../classes/student.class";
import TutorOBJ from "../../classes/user.class";
import Pagination from "../../Components/Pagination";

export default function MyKlass() {
  const [requestData, setRequestData] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, settotalPages] = useState<number>(0);
  const { merithubUserID,userType} = getStoredClientUser()
  const getClass = async (page: number) => {
    const response: any =userType==="Student"? await StudentOBJ.student_all_classes(merithubUserID,page) : await TutorOBJ.tutor_all_class(merithubUserID,page);
    if (response?.status) {
      setRequestData(response?.payload?.filter((el: any) => el.classInfo.isPast !== true));
      settotalPages(response?.totalPages);
      // console.log("response timeline", response);
    }
  };
  // console.log(requestData)
useEffect(() => {
 getClass(currentPage)
}, [currentPage])

  return (
    <UserLayout>
      <PageNav isActive={true} title="Class" />
      <PageLayout>
        {requestData?.length ? requestData.map((obj, index) => {
          return (
            <React.Fragment key={index}>
              <ClassCard data={obj} />
            </React.Fragment>
          );
        }):<EmptyState data="Class"/>}

        {!requestData && <h3>Loading...</h3>}
        {requestData?.length > 0 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            callBack={(value: any) => {
              setCurrentPage(value);
              // getStudentRequests(value);
            }}
          />
        )}
      </PageLayout>
    </UserLayout>
  );
}
