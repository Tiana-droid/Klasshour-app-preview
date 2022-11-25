import React, { useState } from "react";
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
import { PrimaryBtn } from "../../Components/Button";
import { toast } from "react-toastify";

export default function Login() {
  const [isLoading, setisLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello");
    setisLoading(true);
    setTimeout(() => {
      toast.success("Login successful");
      setisLoading(false);
    }, 2000);
  };

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
              <PrimaryBtn
                isLoading={isLoading}
                title="Login"
                onBtnClick={(e: React.FormEvent<HTMLFormElement>) =>
                  handleLogin(e)
                }
              />
            </Form>
          </FormContainer>
        </FormCont>
      </PageLayout>
    </div>
  );
}
