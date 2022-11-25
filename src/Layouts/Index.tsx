import React, { useState } from "react";
import AuthRoutes from "../PrivatePages/index";
import PublicRoutes from "../PublicPages/index";

export default function AppLayout() {
  const [isLoggedIn] = useState(false);

  return <>{isLoggedIn ? <AuthRoutes /> : <PublicRoutes />}</>;
}
