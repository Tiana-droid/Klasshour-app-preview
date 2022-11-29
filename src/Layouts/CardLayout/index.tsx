import React from "react";
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

type cardProp = {
  price: string;
  name: string;
  desc: string;
  subject: string;
  language: string;
};
export default function index({
  price,
  name,
  desc,
  subject,
  language,
}: cardProp) {
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
        <Button>veiw profile</Button>
      </ButtonContainer>
    </Card>
  );
}
