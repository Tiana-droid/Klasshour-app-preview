import React, { useEffect, useState } from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import EmptyState from '../../Components/EmptyData'
import TutorOBJ from "../../classes/user.class";
import { ClassData } from "../../Shared/ClassData";
import {
  PageLayout,
} from "./Styles";
import Pagination from "../../Components/Pagination";
import { getStoredClientUser } from "../../utils/LS";
import StudentOBJ from "../../classes/student.class";
import ClassCard from "../../Components/ClassCard";

export default function PastKlass() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, settotalPages] = useState<number>(0);
  const [requestData, setRequestData] = useState<[]>([]);
  const { merithubUserID,userType} = getStoredClientUser()
   const getClass = async (page: number) => {
    const response: any =userType==="Student"? await StudentOBJ.student_all_classes(merithubUserID,page,true) : await TutorOBJ.tutor_all_class(merithubUserID,page,true);
    if (response?.status) {
      setRequestData(response?.payload);
      settotalPages(response?.totalPages);
      console.log("response timeline", response);
    }
   };
  useEffect(() => {
 getClass(currentPage)
  }, [currentPage])
  return (
    <UserLayout>
      <PageNav isActive={true} title="Past Class" />
      <PageLayout>
        {requestData?.length >0 ? requestData?.map((obj, index) => {
          
          return (
            <React.Fragment key={index}>
              <ClassCard data={obj} isPast={true} />
            </React.Fragment>
          );
        }): <EmptyState data="Past Classes"/>}
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
