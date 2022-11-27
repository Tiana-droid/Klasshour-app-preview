import React from "react";
import { Link } from "react-router-dom";
import { ContentArea, FAB, LayoutHead, PageLayout } from "./Styles";
import DashboardIcon from "../../Assets/icons/DashboardIcon.svg";
import DashboardHeader from "../DBHeader";

export default function UserLayout({ children }: any) {
  return (
    <div>
      <PageLayout>
        <Link to="/">
          <FAB>
            <img src={DashboardIcon} />
          </FAB>
        </Link>
        <LayoutHead>
          <DashboardHeader />
        </LayoutHead>
        <ContentArea>{children}</ContentArea>
      </PageLayout>
    </div>
  );
}
