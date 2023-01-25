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
        {data.requestId?.studentName}
      </h3>
      {/* <LightText>{data.bio}</LightText> */}
      <Flex>
        <LightText>subject: </LightText>
        <BoldText>{data?.requestId?.subject}</BoldText>
      </Flex>
      <Flex>
        <LightText>Description:</LightText>
        <BoldText>{data.requestId?.description}</BoldText>
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
