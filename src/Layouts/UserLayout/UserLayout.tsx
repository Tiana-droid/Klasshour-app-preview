import React from "react";
import { ContentArea, LayoutHead, PageLayout } from "./Styles";
import DashboardHeader from "../DBHeader";

export default function UserLayout({ children }: any) {
  return (
    <div>
      <PageLayout>
        <LayoutHead>
          <DashboardHeader />
        </LayoutHead>
        <ContentArea>{children}</ContentArea>
      </PageLayout>
    </div>
  );
}
