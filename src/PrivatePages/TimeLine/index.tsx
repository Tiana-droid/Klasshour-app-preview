import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import Card from "../../Layouts/CardLayout";
import RequestCard from "../../Components/RequestCard";

export default function TimeLine() {
  const testData = [
    {
      date: "250",
      status: "OPEN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molestie. Eu placerat lacus, sed arcu elit neque turpis",
      subject: "physics",
      language: "english",
      interactions: 122,
    },
    {
      date: "250",
      status: "OPEN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molestie. Eu placerat lacus, sed arcu elit neque turpis",
      subject: "physics",
      language: "english",
      interactions: 122,
    },
    {
      date: "250",
      status: "OPEN",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molestie. Eu placerat lacus, sed arcu elit neque turpis",
      subject: "physics",
      language: "english",
      interactions: 122,
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
        {testData.map((obj, index) => {
          return (
            <React.Fragment key={index}>
              <RequestCard data={obj} />
            </React.Fragment>
          );
        })}
      </div>
    </UserLayout>
  );
}
