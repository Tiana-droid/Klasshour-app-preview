import React from "react";
import teacher from "../../Assets/icons/teacher.svg";
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
    tutor: any;
  };
  isPast?: boolean;
};

export default function ClassCard({ data, isPast }: RequestPropT) {
  return (
    <div>
      <Card isPast={isPast}>
        <CardHeader>
          {!isPast && (
            <CardStatus isActive={data.status === "OPEN" ? true : false}>
              {data.status}
            </CardStatus>
          )}
          {isPast && <CardStatus isActive={false}>Closed</CardStatus>}

          <CardDate isPast={isPast}>Date Posted: {data.date}</CardDate>
        </CardHeader>
        <hr style={{ border: "0.55px solid #E5E7E8", marginBottom: "1rem" }} />
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
            <img src={teacher} />
            <span>{data.tutor}</span>
          </Interactions>
          {}
          {!isPast && <CardButton>Join Class</CardButton>}
        </CardButtonContainer>
      </Card>
    </div>
  );
}
