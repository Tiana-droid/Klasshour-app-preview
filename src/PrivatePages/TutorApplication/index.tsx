import React, { useState } from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import { useLocation, useNavigate } from "react-router-dom";
import StudentOBJ from "../../classes/student.class";
import { toast } from "react-toastify";

import Avatar from "../../Assets/icons/Image.png";


import {   ButtonLeft, ButtonRight, Card, LeftAligned, NextButton, PaginationContainer, PrevButton } from "./Styles";
import { truncateText } from "../../utils/some";
import { getStoredClientUser } from "../../utils/LS";
import Spinner from "../../Components/Spinner";

export default function Index() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const { studentID } = getStoredClientUser()
  const navigate = useNavigate()
  let tutorData = location?.state?.response?.payload || []
  

  const applicationHandler = async (tutorId: string) => {
    setIsLoading(true)
    let payload: any = {
      tutorId,
      studentId: studentID,
      requestId:location?.state?.requestID
    }
    await StudentOBJ.accept_tutor_request(payload).then((res: any) => {
       if (res) {
        if (res?.status === true) {
          toast.success(res?.message);
          setIsLoading(false);
          navigate("/timeline");
        } else {
          toast.error(res?.message);
          setIsLoading(false);
        }
      } else {
        toast.error(res?.message);
        setIsLoading(false);
      }
    })
    }
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
                    <div> { truncateText(el.bio,80)}</div>
                  
                    <div> Subject: {el.subject}</div>
                    <div>Language : {el.language}</div>
                    
                    <LeftAligned>
                        <ButtonLeft>View Profile</ButtonLeft>
                        <ButtonRight disabled={isLoading} onClick={()=>applicationHandler(el?.userId)}> {isLoading ? <Spinner isLoading={isLoading} /> :"Accept Application"}</ButtonRight>
                    </LeftAligned>
                    </Card>
                     <PaginationContainer>
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
