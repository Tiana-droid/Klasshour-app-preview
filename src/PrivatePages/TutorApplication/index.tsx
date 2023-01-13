import React, { useEffect, useState } from "react";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import { useNavigate, useParams } from "react-router-dom";
import StudentOBJ from "../../classes/student.class";
import { toast } from "react-toastify";
import Avatar from "../../Assets/icons/Image.png";
import {   ButtonLeft, ButtonRight, Card, LeftAligned} from "./Styles";
import { truncateText } from "../../utils/some";
import { getStoredClientUser } from "../../utils/LS";
import Spinner from "../../Components/Spinner";
import Pagination from "../../Components/Pagination";

export default function Index() {
  const {id} =  useParams()
  const [isLoading, setIsLoading] = useState<string|boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { userID } = getStoredClientUser()
  const navigate = useNavigate()
  const [tutorData,setTutorData] = useState([])
    useEffect(() => {
      StudentOBJ.get_tutors_applications(id, currentPage).then((res: any) => {
        setTutorData(res.payload)
        setTotalPages(res.totalPages)
      })
    }, [])
  const applicationHandler = async (tutorId: string) => {
    setIsLoading(tutorId)
    let payload: any = {
      tutorId,
      studentId: userID,
      requestId:id
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
  
  const getTutorProfile = async (name: string) => {
    console.log(name)
    navigate('/tutor-request',{state:name})
  }
  return (
      <UserLayout>
              { tutorData?.length >0 ? tutorData?.map((el:any,i:number)=>{
            return (
                <React.Fragment key={i}>
                     <Card >
                    <div className="header">
                         <img width={60} height={60} style={{borderRadius:"50%"}} src={ el?.avatar || Avatar} alt="..." />
                    <p>NGN {el.chargePerHour} per/hour</p>
                    </div>
                  <h1>{el.fullName}</h1>
                    <div> { truncateText(el.bio,80)}</div>
                  
                    <div> Subject: {el.subject}</div>
                    <div>Language : {el.language}</div>
                    
                    <LeftAligned>
                        <ButtonLeft onClick={()=>
                          getTutorProfile(el.fullName)}>View Profile</ButtonLeft>
                        <ButtonRight disabled={isLoading===el.userId} onClick={()=>applicationHandler(el?.userId)}> {isLoading===el?.userId ? <Spinner isLoading={isLoading ===el?.userId} /> :"Accept Application"}</ButtonRight>
                    </LeftAligned>
                    </Card>
              
                     </React.Fragment>
              )
          }):"Loading..."}
       {tutorData?.length>0 &&  <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            callBack={(value: any) => {
              setCurrentPage(value);
              // getStudentRequests(value);
            }}
          />}
    </UserLayout>
  );
}
