import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import TutorCard from "../../Layouts/TutorProfile";

export default function index() {
  const testData = [
    {
      price: "250",
      name: "Daniel  lawson",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molestie",
      review: [
        {
          name: "Daniel ",
          title: "Amazing Tutor",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molesti",
        },
        {
          name: "Daniel ",
          title: "Amazing Tutor",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molesti",
        },
        {
          name: "Daniel ",
          title: "Amazing Tutor",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molesti",
        },
        {
          name: "Daniel ",
          title: "Amazing Tutor",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum ullamcorper lacus tincidunt nibh molesti",
        },
      ],
    },
  ];
  return (
    <UserLayout>
      {testData.map((a, i) => {
        return (
          <React.Fragment key={i}>
            <TutorCard price={a.price} desc={a.desc} review={a.review} />
          </React.Fragment>
        );
      })}
    </UserLayout>
  );
}
