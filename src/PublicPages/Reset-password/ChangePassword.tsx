/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import SignupBanner from "../../Assets/images/SignupBanner.svg";
import Logo from "../../Assets/images/Logo.svg";

import LockIcon from "../../Assets/icons/LockIcon.svg";
import { useParams } from "react-router-dom";
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
import userOBJ from "../../classes/user.class";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmpassword: string;
};
export default function ChangePassword() {
  const [isLoading, setisLoading] = useState(false);

  const { token } = useParams();
  const schema = Yup.object({
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.,])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmpassword: Yup.string()
      .required("Please confirm password.")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  }).required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const handleChangePassword = async (values: any) => {
    setisLoading(true);
    userOBJ
      .user_change_password(
        {
          password: values.password,
        },
        token
      )
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
  return (
    <div>
      <PageLayout>
        <BannerCont bg={SignupBanner}></BannerCont>
        <FormCont>
          <FormHeader>
            <img src={Logo} />
          </FormHeader>
          <FormContainer>
            {/* Todo: Do input validations and connect to state */}
            <Form onSubmit={handleSubmit(handleChangePassword)}>
              <h2>Set Password</h2>

              {errors.password && (
                <FormError>{errors.password.message}</FormError>
              )}
              <Input
                Icon={LockIcon}
                type="password"
                placeHolder="New Password"
                validation={{ ...register("password", { required: true }) }}
              />
              {errors.confirmpassword && (
                <FormError>{errors.confirmpassword.message}</FormError>
              )}
              <Input
                Icon={LockIcon}
                type="password"
                placeHolder="Confirm password"
                validation={{
                  ...register("confirmpassword", { required: true }),
                }}
              />
              <PrimaryBtn
                isLoading={isLoading}
                title="Save and Login"
                onBtnClick={(e: React.FormEvent<HTMLFormElement>) => ""}
                btnType="submit"
              />
            </Form>
          </FormContainer>
        </FormCont>
      </PageLayout>
    </div>
  );
}
