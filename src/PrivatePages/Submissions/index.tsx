import React, { useEffect, useState } from "react";
// import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import EmptyState from '../../Components/EmptyData'
import ApplicationCard from "../../Components/ApplicationCard";


// import { getStoredClientUser } from "../../utils/LS";
// import StudentOBJ from "../../classes/student.class";
import TutorOBJ from "../../classes/user.class";
import Pagination from "../../Components/Pagination";
import { PageLayout } from "./Styles";

export default function MyApplication() {
  const [requestData, setRequestData] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, settotalPages] = useState<number>(0);
  const getClass = async (page: number) => {
    const response: any = await TutorOBJ.tutor_applications(page);
    if (response?.status) {
      console.log(response)
      setRequestData(response?.payload);
      settotalPages(response?.totalPages);
    }
  };
useEffect(() => {
 getClass(currentPage)
}, [currentPage])

  return (
    <UserLayout>
      <PageLayout>
        {requestData?.length ? requestData.map((obj, index) => {
          return (
            <React.Fragment key={index}>
              <ApplicationCard data={obj} />
            </React.Fragment>
          );
        }):<EmptyState data="application(s)"/>}

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
