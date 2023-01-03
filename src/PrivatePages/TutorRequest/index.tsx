import React from "react";
import PageNav from "../../Layouts/UserLayout/PageNav";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import TutorCard from "../../Layouts/TutorProfile";
import { useLocation } from "react-router-dom";

export default function Index() {
  const {state} = useLocation()


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
  console.log(state)
  return (
    <UserLayout>
      {testData.map((a, i) => {
        return (
          <React.Fragment key={i}>
            <TutorCard userId={state?.userId} requestId={state?.requestId} price={state?.chargePerHour} desc={state?.bio} review={[]} />
          </React.Fragment>
        );
      })}
    </UserLayout>
  );
}
