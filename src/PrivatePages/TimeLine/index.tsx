import React, { useEffect, useState } from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import RequestCard from "../../Components/RequestCard";
import Pagination from "../../Components/Pagination";
import EmptyState from '../../Components/EmptyData'
import {
  PageLayout,
} from "./Styles";
import { getStoredClientUser } from "../../utils/LS";
import userOBJ from "../../classes/user.class";



export default function TimeLine() {
  const [requestData, setRequestData] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, settotalPages] = useState<number>(0);

  const {  userType } = getStoredClientUser();
  const getStudentRequests = async (page: number) => {
    const response: any = await userOBJ.all_requests(currentPage);
    if (response?.status) {
      setRequestData(response?.payload);
      settotalPages(response?.totalPages);
      console.log("response timeline", response);
    }
  };

  const getOpenRequests = async (page: number) => {
    const response: any = await userOBJ.all_requests(page);
    if (response?.status) {
      setRequestData(response?.payload);
      settotalPages(response?.totalPages);
      console.log("response timeline", response);
    }
  };

  useEffect(() => {
    if (userType === "Tutor") {
      getOpenRequests(currentPage);
    } else {
      getStudentRequests(currentPage);
    }
  }, [currentPage]);

 
  return (
    <UserLayout>
      <PageNav isActive={true} title="Requests" />
      <PageLayout>
        {requestData?.length?
          requestData?.map((obj, index) => {
            return (
              <React.Fragment key={index}>
                <RequestCard data={obj} />
              </React.Fragment>
            );
          }):<EmptyState data="Request(s)"/>}
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
