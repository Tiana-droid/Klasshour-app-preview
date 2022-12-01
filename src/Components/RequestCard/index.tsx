import React from "react";
import pencil from "../../Assets/icons/pencil.svg";
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

export default function RequestCard() {
  const desc =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molestie. Eu placerat lacus, sed arcu elit neque turpis";
  return (
    <div>
      <Card>
        <CardHeader>
          <CardStatus isActive={true}>open</CardStatus>
          <CardDate>Date Posted: 18/02/2022</CardDate>
        </CardHeader>
        <CardContent>
          <SubjectCont>
            Subject:<span>Physics</span>
          </SubjectCont>
          <CardDescription>
            {desc.length > 80 ? desc.slice(0, 200) + "...." : desc}
          </CardDescription>
          <CardLang>
            Language: <span>English, Yoruba, French</span>
          </CardLang>
        </CardContent>
        <CardButtonContainer>
          <Interactions>
            <img src={pencil} />
            <span>110</span>
          </Interactions>
          <CardButton>View applications</CardButton>
        </CardButtonContainer>
      </Card>
    </div>
  );
}
