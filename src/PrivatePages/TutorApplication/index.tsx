import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import { useLocation } from "react-router-dom";
import Avatar from "../../Assets/icons/Image.png";


import {   ButtonLeft, ButtonRight, Card, LeftAligned, NextButton, PaginationContainer, PrevButton } from "./Styles";

export default function Index() {
    const location = useLocation();
    let tutorData = location?.state?.payload
    console.log(tutorData)
  return (
      <UserLayout>
              {  tutorData?.map((el:any,i:number)=>{
            return (
                
                <React.Fragment key={i}>
                     <Card >
                    <div className="header">
                         <img width={60} src={Avatar} alt="image" />
                    <p>NGN {el.chargePerHour} per/hour</p>
                    </div>
                  <h1>{el.fullName}</h1>
                    <div>  {el.bio}</div>
                  
                    <div> Subject: {el.subject}</div>
                    <div>Language : {el.language}</div>
                    
                    <LeftAligned>
                        <ButtonLeft>View Profile</ButtonLeft>
                        <ButtonRight>Accept Application</ButtonRight>
                    </LeftAligned>
                    </Card>
                     <PaginationContainer>
          {/* <Pagination
                className="pagination-bar"
                currentPage={currentPage} 
                totalCount={tutorData?.length}
                pageSize={PageSize}
                onPageChange={(page:any) => setCurrentPage(page)}
              /> */}
          <PrevButton>Prev</PrevButton>
          {tutorData?.length && <span>1 of {tutorData?.length}</span>}
          <NextButton>Next</NextButton>
        </PaginationContainer>
                     </React.Fragment>
              )
          })}
        
    </UserLayout>
  );
}
