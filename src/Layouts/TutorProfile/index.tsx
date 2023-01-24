import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  BoldText,
  LightText,
  TutorContainer,
  Center,
  ShowMore,
} from "./Style";
import Avatar from "../../Assets/icons/Image.png";
import { getStoredClientUser } from "../../utils/LS";
import StudentOBJ from "../../classes/student.class";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import Rating from "../../Components/Rating";

type cardProp = {
  price: string;
  review?: any;
  desc: string;
  requestId: string,
  userId:string
};
export default function Index({payload}:any) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const [showMOre, setShowMOre] = useState(false)
 const { userID } = getStoredClientUser()
  const [data, setData] = useState<cardProp | any>({})
useEffect(() => {
  async function fetchData() {
    await StudentOBJ.getTutorapplication(payload).then((resp: any) => {
      if (resp.status) {
        setData(resp.payload)
      }
    })
  }
    fetchData()

  return () => {
  }
}, [payload])
  const applicationHandler = async () => {
    setIsLoading(true)
    let payload: any = {
      tutorId:data.userId._id,
      studentId: userID,
      requestId:data.requestId
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
    JSON.stringify(data) !== '{}' ? <Card>
      <Center>
        <img width={60} height={60} style={{ borderRadius: "50%" }} src={data.avatar || Avatar} alt="...." />
      <div>{data?.fullName}</div>
      <div>{data?.userId?.country}</div>
        <div>NGN {data?.chargePerHour} per/hour</div>
         <div> {data?.userId?.bio} </div>
      </Center>
     
      {data?.userId?.reviews?.length ? <React.Fragment>
          <h3
        style={{
          fontSize: "20px",
          fontWeight: 400,
        }}
      >
        <BoldText>Review and feedback</BoldText>
      </h3>
      {data?.userId?.reviews?.length &&
        data?.userId?.reviews?.slice(Math.max(data?.userId?.reviews?.length - 5, 0))?.map((review: any, index: number) => {
          return (
            <TutorContainer key="index">
              <div className="title">
                <h1>{review.title}</h1>
                <div><Rating count={review.rating } type="review" /></div>
              </div>
              <p>{review?.description?.length > 80 && !showMOre
              ? review?.description.slice(0, 200) + "...."
                : review?.description}
                <span>{review?.description?.length > 80 && <ShowMore onClick={() => setShowMOre(!showMOre)}>{ showMOre ? "Show less" : "Show More"}</ShowMore>}</span>
              </p>
              <p><i>by {review.studentName}</i></p>
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
    </Card>: <div>Loading...</div>
  ) ;
}
