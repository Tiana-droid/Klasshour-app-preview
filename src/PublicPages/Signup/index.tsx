/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import SignupBanner from "../../Assets/images/SignupBanner.svg";
import Logo from "../../Assets/images/Logo.svg";
import MailIcon from "../../Assets/icons/MailIcon.svg";
import LockIcon from "../../Assets/icons/LockIcon.svg";
import UserIcon from "../../Assets/icons/UserIcon.svg";
import Input from "../../Components/Input";
import {
  BannerCont,
  Form,
  FormCont,
  FormContainer,
  FormHeader,
  PageLayout,
  RoleButton,
  RoleButtonContainer,
  FormError,
} from "./Styles";
import { PrimaryBtn } from "../../Components/Button";
import { toast } from "react-toastify";
import userOBJ from "../../classes/user.class";
import { AppColors } from "../../utils/constants";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmpassword: string;
};
export default function Signup() {
  const [isLoading, setisLoading] = useState(false);
  const [userRole, setuserRole] = useState("Student");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleRegistration = async (values: any) => {
    console.log(values, "from submoitted form");

    //mimick request to klasshour server as example
    setisLoading(true);
    setTimeout(() => {
      toast.success("Registration successful");
      setisLoading(false);
    }, 2000);
  };
  //handle Role Selection
  const handleRoleSelection = (role: string) => {
    console.log(role, "from role selection");
    setuserRole(role);
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
            <Form onSubmit={handleSubmit(handleRegistration)}>
              <h2>Welcome</h2>
              <RoleButtonContainer>
                <RoleButton
                  style={{
                    background: `${
                      userRole !== "Tutor" ? AppColors.primary : "#fff"
                    } `,
                    color: `${
                      userRole !== "Tutor" ? "#fff" : AppColors.primary
                    } `,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoleSelection("Tutor");
                  }}
                >
                  Tutor
                </RoleButton>
                <RoleButton
                  style={{
                    background: `${
                      userRole !== "Student" ? AppColors.primary : "#fff"
                    } `,
                    color: `${
                      userRole !== "Student" ? "#fff" : AppColors.primary
                    } `,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleRoleSelection("Student");
                  }}
                >
                  Student
                </RoleButton>
              </RoleButtonContainer>
              {errors.fullName && <FormError>This field is required</FormError>}
              <Input
                Icon={UserIcon}
                type="text"
                placeHolder="Full Name"
                validation={{
                  ...register("fullName", { required: true }),
                }}
              />
              {errors.email && <FormError>This field is required</FormError>}
              <Input
                Icon={MailIcon}
                type="email"
                placeHolder="Email"
                validation={{ ...register("email", { required: true }) }}
              />
              {errors.password && <FormError>This field is required</FormError>}
              <Input
                Icon={LockIcon}
                type="password"
                placeHolder="Enter Password"
                validation={{ ...register("password", { required: true }) }}
              />
              {errors.confirmpassword && (
                <FormError>This field is required</FormError>
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
                title="Register"
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
