import React from "react";
import {
  Card,
  Button,
  ButtonOutline,
  BoldText,
  LightText,
  TutorContainer,
} from "./Style";
import Avatar from "../../Assets/icons/Image.png";

type cardProp = {
  price: string;
  review?: any;
  desc: string;
};

export default function index({ price, review, desc }: cardProp) {
  return (
    <Card>
      <img width={60} src={Avatar} alt="image" />
      <div>NGN {price} per/hour</div>
      <div>{desc}</div>
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

      <Button>Book tutor</Button>
      <ButtonOutline>Message tutor</ButtonOutline>
    </Card>
  );
}
