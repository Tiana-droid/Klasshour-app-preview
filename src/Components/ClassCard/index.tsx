import React from "react";
import teacher from "../../Assets/icons/teacher.svg";
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
const tutor = data?.applicants.find((el:any)=>el.merithubUserId ===data.merithubTutorID)

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
          <Interactions>
            <img src={teacher} />
            <span>{tutor.fullName}</span>
          </Interactions>
         
          {!isPast &&  <a href={data?.classInfo?.preLink +"/"+ data?.classInfo?.classData?.commonLinks?.commonParticipantLink+"?devicetest=true"} target="_blank"> <CardButton>Join Class</CardButton></a>}
        </CardButtonContainer>
      </Card>
    </div>
  );
}
