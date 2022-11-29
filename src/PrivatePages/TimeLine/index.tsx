import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import Card from "../../Layouts/CardLayout";

export default function TimeLine() {
  const testData = [
    {
      price: "250",
      name: "Daniel lawson",
      desc: "lorem dfgjfgdlfmw te",
      subject: "physics",
      language: "english",
    },
    {
      price: "250",
      name: "Daniel lawson",
      desc: "lorem dfgjfgdlfmw te",
      subject: "physics",
      language: "english",
    },
    {
      price: "250",
      name: "Daniel lawson",
      desc: "lorem dfgjfgdlfmw te",
      subject: "physics",
      language: "english",
    },
  ];
  return (
    <UserLayout>
      <PageNav isActive={true} title="Requests" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {testData.map((a, i) => {
          return (
            <React.Fragment key={i}>
              <Card
                price={a.price}
                name={a.name}
                desc={a.desc}
                subject={a.subject}
                language={a.language}
                tutorId={1}
              />
            </React.Fragment>
          );
        })}
      </div>
    </UserLayout>
  );
}
