import React from "react";
import LoginBanner from "../../Assets/images/LoginBanner.svg";
import Logo from "../../Assets/images/Logo.svg";
import MailIcon from "../../Assets/icons/MailIcon.svg";
import LockIcon from "../../Assets/icons/LockIcon.svg";
import Input from "../../Components/Input";
import {
  BannerCont,
  Form,
  FormCont,
  FormContainer,
  FormHeader,
  PageLayout,
} from "./Styles";

export default function Login() {
  return (
    <div>
      <PageLayout>
        <BannerCont bg={LoginBanner}></BannerCont>
        <FormCont>
          <FormHeader>
            <img src={Logo} />
          </FormHeader>
          <FormContainer>
            <Form>
              <h2>Welcome Back</h2>
              <Input
                Icon={MailIcon}
                type="email"
                placeHolder="Email"
                onChange={() => ""}
              />
              <Input
                Icon={LockIcon}
                type="password"
                placeHolder="Enter Password"
                onChange={() => ""}
              />
            </Form>
          </FormContainer>
        </FormCont>
      </PageLayout>
    </div>
  );
}
