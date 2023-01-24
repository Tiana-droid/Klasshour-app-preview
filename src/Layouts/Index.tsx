import React, { useState, useLayoutEffect } from "react";
import AuthRoutes from "../PrivatePages/index";
import PublicRoutes from "../PublicPages/index";
import { getStoredAuthToken, getStoredClientUser } from "../utils/LS";

export default function AppLayout() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  useLayoutEffect(() => {
    if ((getStoredAuthToken() && getStoredClientUser()) || window.location.pathname.split("=").includes('participant&classid')) setisLoggedIn(true);
    console.log(isLoggedIn)
    console.log("first",window.location.pathname.split("="))
    if (!getStoredAuthToken() && !getStoredClientUser()) setisLoggedIn(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getStoredAuthToken(), getStoredClientUser()]);

  return <>{isLoggedIn ? <AuthRoutes /> : <PublicRoutes />}</>;
}
