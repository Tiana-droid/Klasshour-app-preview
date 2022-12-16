import React, { useState } from "react";
import {
  Card,
  Button,
  ButtonOutline,
  BoldText,
  LightText,
  TutorContainer,
} from "./Style";
import Avatar from "../../Assets/icons/Image.png";
import { getStoredClientUser } from "../../utils/LS";
import StudentOBJ from "../../classes/student.class";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner";

type cardProp = {
  price: string;
  review?: any;
  desc: string;
  requestId: string,
  userId:string
};

export default function Index({ price, review, desc ,requestId,userId}: cardProp) {
  const [isLoading, setIsLoading] = useState(false);
  const { studentID } = getStoredClientUser()
  const navigate = useNavigate()
   const applicationHandler = async () => {
    setIsLoading(true)
    let payload: any = {
      tutorId:userId,
      studentId: studentID,
      requestId:requestId
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
    <Card>
      <img width={60} src={Avatar} alt="image" />
      <div>NGN {price} per/hour</div>
      <div>{desc}</div>
      {review?.length ? <React.Fragment>
          <h3
        style={{
          fontSize: "20px",
          fontWeight: 400,
        }}
      >
        Review and feedback
      </h3>
      {review &&
        review.map((review: any, index: number) => {
          return (
            <TutorContainer key="index">
              <BoldText>{review.title}</BoldText>
              <LightText>{review.desc}</LightText>
              <span>by {review.name}</span>
            </TutorContainer>
          );
        })}

    </React.Fragment>: <h3
        style={{
          fontSize: "20px",
          fontWeight: 400,
        }}
      >
        No Review Yet
      </h3>}
      <Button disabled={isLoading} onClick={applicationHandler}>{isLoading ? <Spinner isLoading={isLoading} /> :"Accept Application"}</Button>

      {/* <Button>Book tutor</Button> */}
      {/* <ButtonOutline>Message tutor</ButtonOutline> */}
    </Card>
  );
}
