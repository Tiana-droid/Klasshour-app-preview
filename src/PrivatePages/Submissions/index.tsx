import React, { useEffect, useLayoutEffect } from "react";
import { getStoredClientUser } from "../../utils/LS";
import UserLayout from "../../Layouts/UserLayout/UserLayout";

export default function Submissions() {
  useLayoutEffect(() => {
    if (getStoredClientUser().userType !== "Tutor") {
      window.location.href = "/";
    } else {
      return;
    }
  }, []);

  return (
    <>
      <UserLayout></UserLayout>
    </>
  );
}
