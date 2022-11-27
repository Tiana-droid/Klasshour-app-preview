import React from "react";
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
];

export default function Dashboard() {
  const navigate = useNavigate();
  const goto = (path: string) => {
    navigate(path);
  };

  const CardList = modules.map((obj: any, index: number) => (
    <Card key={index} onClick={() => goto(obj.path)}>
      <img src={obj.icon} />
      <span>{obj.name}</span>
    </Card>
  ));
  return (
    <div>
      <PageLayout>
        <DashboardHeader />
        <div>Dashboard</div>
        <ContentContainer>
          <CardContainer>{CardList}</CardContainer>
        </ContentContainer>
      </PageLayout>
    </div>
  );
}
