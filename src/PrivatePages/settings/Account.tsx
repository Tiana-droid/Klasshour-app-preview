import React, { useState } from "react";
import { AccountSetting } from "./AccountSetting";
import OTP from "./otp";
import { Flex, Input, Select, TextArea, Box } from "./Styles";

export default function Account() {
  const [otpActive, setotpActive] = useState(false);
  const [password,setPassword] = useState(false)
  return (
    <>
      {!otpActive && <AccountSetting setotpActive={setotpActive} setPassword={setPassword} />}
      {otpActive && <OTP password={ password} />}
    </>
  );
}