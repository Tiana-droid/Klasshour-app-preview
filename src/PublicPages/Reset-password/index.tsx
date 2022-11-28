import React, { useState } from "react";
import LoginBanner from "../../Assets/images/LoginBanner.svg";
import Logo from "../../Assets/images/Logo.svg";
import MailIcon from "../../Assets/icons/MailIcon.svg";
import Input from "../../Components/Input";
import {
  BannerCont,
  Form,
  FormCont,
  FormContainer,
  FormHeader,
  PageLayout,
  FormError,
} from "./Styles";
import { PrimaryBtn } from "../../Components/Button";
import { toast } from "react-toastify";
import userOBJ from "../../classes/user.class";

import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  email: string;
  password: string;
};

export default function ForgetPassword() {
  const [isLoading, setisLoading] = useState(false);

  const handlePasswordReset = async (values: any) => {
    setisLoading(true);
    userOBJ
      .user_reset({
        email: values.email,
      })
      .then((res: any) => {
        if (res) {
          if (res?.status === true) {
            toast.success(res?.message);
            setisLoading(false);
          } else {
            toast.error(res?.message);
            setisLoading(false);
          }
        } else {
          toast.error(res?.message);
          setisLoading(false);
        }
        setisLoading(false);
      });
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
  }).required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <PageLayout>
        <BannerCont bg={LoginBanner}></BannerCont>
        <FormCont>
          <FormHeader>
            <img src={Logo} />
          </FormHeader>
          <FormContainer>
            {/* Todo: Do input validations and connect to state */}
            <Form onSubmit={handleSubmit(handlePasswordReset)}>
              <h2>Reset Password</h2>
              {errors.email && <FormError>{errors.email.message}</FormError>}
              <Input
                Icon={MailIcon}
                type="email"
                placeHolder="Email"
                validation={{ ...register("email", { required: true }) }}
              />

              <PrimaryBtn
                isLoading={isLoading}
                title="Reset"
                btnType="submit"
                onBtnClick={(e: React.FormEvent<HTMLFormElement>) => ""}
              />
            </Form>
          </FormContainer>
        </FormCont>
      </PageLayout>
    </div>
  );
}
