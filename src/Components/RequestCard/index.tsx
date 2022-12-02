import React from "react";
import { useNavigate } from "react-router-dom";
import pencil from "../../Assets/icons/pencil.svg";
import studentRequest from "../../classes/request.class";
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
    date: any;
    status: string;
    subject: string;
    language: any;
    description: any;
    appliedTutors: any;
    createdAt: string;
    _id:string
  };
};

export default function RequestCard({ data }: RequestPropT) {
  const navigate = useNavigate()
  const getTutorApplication = (requestID:string) => {
    studentRequest.get_all_tutor_request(requestID).then((response) => {
      navigate("/tutor-applications",{state:response})
    })
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardStatus isActive={data.status === "OPEN" ? true : false}>
            {data.status}
          </CardStatus>
          <CardDate>Date Posted: {new Date(data.createdAt).toLocaleDateString()}</CardDate>
        </CardHeader>
        <hr style={{ border: "0.55px solid #E5E7E8", marginBottom: "1rem;" }} />
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
            Language: <span>{data.language || "English"}</span>
          </CardLang>
        </CardContent>
        <CardButtonContainer>
          <Interactions>
            <img src={pencil} />
            <span>{data?.appliedTutors?.length}</span>
          </Interactions>
          <CardButton onClick={()=>getTutorApplication(data?._id)}>View applications</CardButton>
        </CardButtonContainer>
      </Card>
    </div>
  );
}
