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

export default function Signup() {
  const [isLoading, setisLoading] = useState(false);
  const [userRole, setuserRole] = useState("Student");
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [formErrorRequired, setformErrorRequired] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData.fullname){
      setformErrorRequired((err)=>{
        return(
          {
            ...err,
            fullname:"required"
          }
        )
      })
      setisLoading(false)
    }
    if(!formData.email){
      setformErrorRequired((err)=>{
        return(
          {
            ...err,
            email:"required"
          }
        )
      })
      setisLoading(false)
    }
    if(!formData.password){
      setformErrorRequired((err)=>{
        return(
          {
            ...err,
            password:"required"
          }
        )
      })
      setisLoading(false)
    }
    if(!formData.confirmpassword){
      setformErrorRequired((err)=>{
        return(
          {
            ...err,
            confirmpassword:"required"
          }
        )
      })
      setisLoading(false)
    }
    //mimick request to klasshour server as example
    // setisLoading(true);
    // // setTimeout(() => {
    //   toast.success("Registration successful");
    //   setisLoading(false);
    // }, 2000);
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
            <Form onSubmit={handleRegistration}>
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

              <Input Icon={UserIcon} type="text" placeHolder="Full Name" onChange={undefined} />
              {formErrorRequired.fullname && <FormError>err</FormError>}
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
              <Input
                Icon={LockIcon}
                type="password"
                placeHolder="Confirm password"
                onChange={() => ""}
              />
              <PrimaryBtn
                isLoading={isLoading}
                title="Register"
                btnType="submit"
                onChange={() => ""}
                onBtnClick={null}
              />
            </Form>
          </FormContainer>
        </FormCont>
      </PageLayout>
    </div>
  );
}
