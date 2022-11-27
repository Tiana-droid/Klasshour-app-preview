import React from "react";
import { PageLayout } from "./Styles";
import { Logout } from "../../utils/some";

export default function Dashboard() {
  return (
    <div>
      <PageLayout>
        Dashboard
        <div>
          <span style={{ cursor: "pointer" }} onClick={() => Logout()}>
            Logout
          </span>
        </div>
      </PageLayout>
    </div>
  );
}
