import React, { useEffect, useMemo, useState } from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import RequestCard from "../../Components/RequestCard";
import Pagination from "../../Components/Pagination";
import { RequestData } from "../../Shared/RequestData";
import studentRequest from "../../classes/request.class";
import {
  NextButton,
  PageLayout,
  PaginationContainer,
  PrevButton,
} from "./Styles";
import { getStoredClientUser } from "../../utils/LS";
import userOBJ from "../../classes/user.class";

let PageSize = 6;

export default function TimeLine() {
  const [requestData, setRequestData] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, settotalPages] = useState<number>(0);

  const { studentID, userType } = getStoredClientUser();

  const getStudentRequests = async (page: number) => {
    const response: any =userType==="student" ? await userOBJ.user_requests({ studentID }, page): await userOBJ.all_requests(currentPage);
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

  const data = useMemo(() => {
    return requestData;
  }, [currentPage, requestData]);

  return (
    <UserLayout>
      <PageNav isActive={true} title="Requests" />
      <PageLayout>
        {requestData &&
          data?.map((obj, index) => {
            return (
              <React.Fragment key={index}>
                <RequestCard data={obj} />
              </React.Fragment>
            );
          })}
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
