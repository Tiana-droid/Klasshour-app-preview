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
import Spinner from "../../Components/Spinner";

type cardProp = {
  price: string;
  name: string;
  desc: string;
  subject: string;
  language: string;
  tutorId: any;
};
export default function Index({
  price,
  name,
  desc,
  subject,
  language,
  tutorId,
}: cardProp) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnclickEvent = () => {
    // fake request to tutor page
    setIsLoading(true);
    setTimeout(() => {
      navigate("/tutor-request");
    }, 3000);
  };
  return (
    <Card>
      <FlexHeader>
        <img src={Avatar} alt="image" />
        <div>NGN{price} perhour</div>
      </FlexHeader>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: 400,
        }}
      >
        {name}
      </h3>
      <LightText>{desc}</LightText>
      <Flex>
        <LightText>subject: </LightText>
        <BoldText>{subject}</BoldText>
      </Flex>
      <Flex>
        <LightText>language:</LightText>
        <BoldText>{language}</BoldText>
      </Flex>
      <ButtonContainer>
        <Button
          onClick={() => {
            handleOnclickEvent();
          }}
        >
          {isLoading ? <Spinner isLoading={isLoading} /> : "veiw profile"}
        </Button>
      </ButtonContainer>
    </Card>
  );
}
