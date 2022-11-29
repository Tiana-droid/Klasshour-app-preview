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

export default function index() {
  return (
    <Card>
      <FlexHeader>
        <img src={Avatar} alt="image" />
        <div>NGN 250.00 perhour</div>
      </FlexHeader>
        <h5>name</h5>
        <LightText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          mollitia.
        </LightText>
        <Flex>
          <LightText>subject: </LightText>
          <BoldText>physics</BoldText>
        </Flex>
        <Flex>
          <LightText>language:</LightText>
          <BoldText>English</BoldText>
        </Flex>
        <ButtonContainer>
          <Button>veiw profile</Button>
        </ButtonContainer>
      
    </Card>
  );
}
