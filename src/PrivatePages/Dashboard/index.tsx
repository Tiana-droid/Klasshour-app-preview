import React from "react";
import { PageLayout } from "./Styles";

import { Logout } from "../../utils/some";
import DashboardHeader from "../../Layouts/DBHeader";

export default function Dashboard() {
  return (
    <div>
      <PageLayout>
        <DashboardHeader />
        <div>
          <span style={{ cursor: "pointer" }} onClick={() => Logout()}>
            Logout
          </span>
        </div>
      </PageLayout>
    </div>
  );
}
