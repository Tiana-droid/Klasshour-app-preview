import React, { useState } from "react";
import teacher from "../../Assets/icons/teacher.svg";
import StudentOBJ from "../../classes/student.class";
import { getStoredClientUser } from "../../utils/LS";
import {
  Card,
  CardButton,
  CardButtonContainer,
  CardContent,
  CardDate,
  CardDescription,
  CardHeader,
  CardLang,
  CardStatus,
  Interactions,
  SubjectCont,
} from "./Styles";
import { toast } from "react-toastify";

type RequestPropT = {
  data: {
    createdAt: any;
    status: string;
    subject: string;
    language: any;
    description: string;
    classInfo:any,
    tutor: any;
    applicants: any,
    merithubTutorID:string
  };
  isPast?: boolean;
};
export default function ClassCard({ data, isPast }: RequestPropT) {
  const {userType} = getStoredClientUser()
  const tutor = data?.applicants.find((el: any) => el.merithubUserId === data.merithubTutorID)
  const [isLoading, setIsLoading] = useState(false);
  const joinClassHandler = async () => {
    setIsLoading(true)
    await StudentOBJ.student_join_class(data).then((res: any) => {
        if (res) {
        if (res?.status === true) {
          // toast.success(res?.message);
          window.open(`${data?.classInfo?.preLink}/${data?.classInfo?.classData?.commonLinks?.commonParticipantLink}?devicetest=true`)
          setIsLoading(false);
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
  const startClassHandler = async () => {
    setIsLoading(true)
     window.open(`${data?.classInfo?.preLink}/${data?.classInfo?.classData?.hostLink}?devicetest=true`)
          setIsLoading(false);
  }
  return (
    <div>
      <Card isPast={isPast}>
        <CardHeader>
          {!isPast && (
            <CardStatus isActive={data.status === "OPEN" ? true : false}>
              {data.status}
            </CardStatus>
          )}
          {isPast && <CardStatus isActive={false}>Closed</CardStatus>}

          <CardDate isPast={isPast}>Date Posted: {new Date(data?.createdAt).toLocaleDateString()}</CardDate>
        </CardHeader>
        <hr style={{ border: "0.55px solid #E5E7E8", marginBottom: "1rem" }} />
        <CardContent>
          <SubjectCont>
            Subject:<span>{data.subject}</span>
          </SubjectCont>
          <CardDescription>
            {data?.description?.length > 80
              ? data.description.slice(0, 200) + "...."
              : data.description}
          </CardDescription>
          <CardLang>
            Language: <span>{tutor.language}</span>
          </CardLang>
        </CardContent>
        <CardButtonContainer>
         {userType === "Student" &&  <Interactions>
            <img src={teacher} />
            <span>{tutor.fullName}</span>
          </Interactions>}
         
          {!isPast &&  <CardButton onClick={userType ==="Student"?joinClassHandler:startClassHandler} disabled={isLoading}> {userType==="Student" ? "Join Class":"Start Class"} </CardButton>}
        </CardButtonContainer>
      </Card>
    </div>
  );
}
