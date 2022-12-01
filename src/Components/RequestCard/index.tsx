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

type RequestPropT = {
  data: {
    date: any;
    status: string;
    subject: string;
    language: any;
    desc: any;
    interactions: number;
  };
};

export default function RequestCard({ data }: RequestPropT) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardStatus isActive={data.status === "OPEN" ? true : false}>
            {data.status}
          </CardStatus>
          <CardDate>Date Posted: {data.date}</CardDate>
        </CardHeader>
        <CardContent>
          <SubjectCont>
            Subject:<span>{data.subject}</span>
          </SubjectCont>
          <CardDescription>
            {data.desc.length > 80
              ? data.desc.slice(0, 200) + "...."
              : data.desc}
          </CardDescription>
          <CardLang>
            Language: <span>{data.language}</span>
          </CardLang>
        </CardContent>
        <CardButtonContainer>
          <Interactions>
            <img src={pencil} />
            <span>{data.interactions}</span>
          </Interactions>
          <CardButton>View applications</CardButton>
        </CardButtonContainer>
      </Card>
    </div>
  );
}
