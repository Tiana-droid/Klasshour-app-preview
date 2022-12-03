import React, { useEffect } from "react";
import { getStoredClientUser } from "../../utils/LS";
import userOBJ from "../../classes/user.class";
import { Card, CardContainer, ContentContainer, PageLayout } from "./Styles";
import TimelineIcon from "../../Assets/icons/TimelineIcom.svg";
import ProfileSettings from "../../Assets/icons/ProfileSettings.svg";
import RequestIcon from "../../Assets/icons/RequestIcon.svg";
import WalletIcon from "../../Assets/icons/WalletIcon.svg";

import { Logout } from "../../utils/some";
import DashboardHeader from "../../Layouts/DBHeader";
import { useNavigate } from "react-router-dom";

const modules = [
  { id: 1, name: "Timeline", icon: TimelineIcon, path: "/timeline" },
  { id: 2, name: "Profile Settings", icon: ProfileSettings, path: "/settings" },
  { id: 3, name: "Post Request", icon: RequestIcon, path: "/post-request" },
  { id: 4, name: "Wallet", icon: WalletIcon, path: "/wallet" },
  { id: 5, name: "Resource Center", icon: ProfileSettings, path: "" },
];

const tutorModules = [
  { id: 1, name: "Timeline", icon: TimelineIcon, path: "/timeline" },
  { id: 2, name: "Profile Settings", icon: ProfileSettings, path: "/settings" },
  { id: 3, name: "My Applications", icon: RequestIcon, path: "/submissions" },
  { id: 4, name: "Wallet", icon: WalletIcon, path: "/wallet" },
  { id: 5, name: "My Students", icon: ProfileSettings, path: "" },
  { id: 6, name: "My Resources", icon: ProfileSettings, path: "" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const goto = (path: string) => {
    navigate(path);
  };

  const studentCardList = modules.map((obj: any, index: number) => (
    <Card key={index} onClick={() => goto(obj.path)}>
      <img src={obj.icon} />
      <span>{obj.name}</span>
    </Card>
  ));

  const tutorCardList = tutorModules.map((obj: any, index: number) => (
    <Card key={index} onClick={() => goto(obj.path)}>
      <img src={obj.icon} />
      <span>{obj.name}</span>
    </Card>
  ));

  useEffect(() => {
    console.log("data", getStoredClientUser());
  }, []);

  return (
    <div>
      <PageLayout>
        <DashboardHeader />
        <div>Dashboard</div>
        <ContentContainer>
          <CardContainer>
            {getStoredClientUser().userType == "Tutor"
              ? tutorCardList
              : studentCardList}
          </CardContainer>
        </ContentContainer>
      </PageLayout>
    </div>
  );
}
