import React, { useState } from "react";
import moment from "moment";
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
  Schedule,
  SubjectCont,
  ShowMore
} from "./Styles";
import { getStoredClientUser } from "../../utils/LS";

type RequestPropT = {
  data: {
    date: any;
    isOpen: boolean;
    isClass: boolean;
    subject: string;
    language: any;
    description: any;
    applicants: any;
    createdAt: string;
    schedule: string;
    merithubTutorID:string,
    _id: string;
  };
};

export default function RequestCard({ data }: RequestPropT) {
  const { userType, userID } = getStoredClientUser()
  const [showMOre, setShowMOre] = useState(false)
  const navigate = useNavigate();
  const getTutorApplication = (requestID: string) => {
    if (userType === "Student") {
      studentRequest.get_all_tutor_request(requestID).then((response) => {
      navigate(`/request/${requestID}/tutor-applications`, { state: {response,requestID} , });
    });
    } else {
        navigate(`/apply/${requestID}`,{state:requestID});
    }
   
  };
  const scheduleTime = data?.schedule;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardStatus isActive={data.isOpen? true : false}>
            {data.isOpen ? "Open":"Closed"}
          </CardStatus>
          <CardDate>
            Date Posted: {new Date(data.createdAt).toLocaleDateString()}
          </CardDate>
        </CardHeader>
        <hr style={{ border: "0.55px solid #E5E7E8", marginBottom: "1rem" }} />
        <CardContent>
          <SubjectCont>
            Subject:<span>{data.subject}</span>
          </SubjectCont>
          <Schedule>
            Schedule:
            {/* @ts-ignore */}
            <span>
              {/* {moment().format(scheduleTime)}{" "} */}
              {moment(scheduleTime).format("l LT")}
            </span>
          </Schedule>

          <CardDescription>
            {data?.description?.length > 80 && !showMOre
              ? data.description.slice(0, 200) + "...."
              : data.description}
          </CardDescription>
          {data?.description?.length > 80 && <ShowMore onClick={() => setShowMOre(!showMOre)}>{ showMOre ? "Show less" : "Show More"}</ShowMore>}
          <CardLang>
            Language: <span>{data.language || "English"}</span>
          </CardLang>
        </CardContent>
        <CardButtonContainer>
          {userType==="Student" &&<Interactions>
            <img src={pencil} />
            <span>{data?.applicants?.length}</span>
          </Interactions>}
          <div style={{display:"flex",gap:20}}>
            <CardButton  onClick={() => getTutorApplication(data?._id)} disabled={userType!=="Student" ?data?.applicants?.find((el:any)=>el.userId===userID) || !data.isOpen : !data?.applicants?.length || !data.isOpen}>
            {userType==="Student" ? "View applications" :data?.applicants?.find((el:any)=>el.userId===userID)? "Applied": "Apply"}
          </CardButton>
          </div>
        </CardButtonContainer>
      </Card>
    </div>
  );
}
