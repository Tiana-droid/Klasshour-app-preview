import React, { useEffect, useMemo, useState } from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import RequestCard from "../../Components/RequestCard";
import Pagination from "../../Components/Paginate";
import { RequestData } from "../../Shared/RequestData";
import studentRequest from "../../classes/request.class";



import {
  NextButton,
  PageLayout,
  PaginationContainer,
  PrevButton,
} from "./Styles";
import { getStoredAuthToken } from "../../utils/LS";

  let PageSize = 6;


export default function TimeLine() {
  
  const [requestData, setRequestData] = useState<[]>()
  const [currentPage, setCurrentPage] = useState<number>(1);
  
 
  useEffect(() => {
    let userData: any =  atob(getStoredAuthToken().split('.')[1])
   const getAllRequests = async (userID:string)=>{
    studentRequest.get_all_request(userID).then((response) => {
     setRequestData(response.payload)
    })
   }
   userData = userData && JSON.parse(userData)
    getAllRequests(userData._id)
  }, [])

  const data = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return requestData?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, requestData]);
  
  return (
    <UserLayout>
      <PageNav isActive={true} title="Requests" />
      <PageLayout>
        {requestData && data?.map((obj, index) => {
          return (
            <React.Fragment key={index}>
              <RequestCard data={obj} />
            </React.Fragment>
          );
        })}
        {!requestData && <h3>Loading...</h3>}

        <PaginationContainer>
          {/* <Pagination
                className="pagination-bar"
                currentPage={currentPage} 
                totalCount={requestData?.length}
                pageSize={PageSize}
                onPageChange={(page:any) => setCurrentPage(page)}
              /> */}
          <PrevButton>Prev</PrevButton>
          {requestData?.length && <span>1 of {requestData?.length}</span>}
          <NextButton>Next</NextButton>
        </PaginationContainer>
      </PageLayout>
    </UserLayout>
  );
}
