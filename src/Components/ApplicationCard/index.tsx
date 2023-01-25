import React, { useState } from "react";
import {
  Flex,
  Card,
  ButtonContainer,
  FlexHeader,
  Button,
  LightText,
  BoldText,
} from "./Style";
import Avatar from "../../Assets/icons/Image.png";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";


export default function Index({
 data
}: any) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  console.log(data)
  const handleOnclickEvent = (request:any) => {
    setIsLoading(true);
    setTimeout(() => {
    navigate("/schedule-class", { state: request });
    }, 3000);
  };
  return (
    <Card>
      <FlexHeader>
        <img src={data.avatar || Avatar} alt="..." width={40} height={40} style={{ borderRadius:'50%'}}/>
        <div>NGN{data.chargePerHour} perhour</div>
      </FlexHeader>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 400,
        }}
      >
       
      </h3>
      {/* <LightText>{data.bio}</LightText> */}
      <Flex>
        <BoldText>Student: </BoldText>
        <LightText> {data.requestId?.studentName}</LightText>
      </Flex>
      <Flex>
        <BoldText>subject: </BoldText>
        <LightText>{data?.requestId?.subject}</LightText>
      </Flex>
      <Flex>
        <BoldText>Description:</BoldText>
        <LightText>{data.requestId?.description}</LightText>
      </Flex>
      <ButtonContainer>
        <Button
          disabled={!data.isAccepted}
          onClick={() => {
            handleOnclickEvent(data);
          }}
        >
          {isLoading ? <Spinner isLoading={isLoading} /> : "Schedule Class"}
        </Button>
      </ButtonContainer>
    </Card>
  );
}
