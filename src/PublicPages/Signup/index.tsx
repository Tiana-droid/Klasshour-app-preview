/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useLayoutEffect } from "react";
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
  FormFoter,
} from "./Styles";
import { PrimaryBtn } from "../../Components/Button";
import userOBJ from "../../classes/user.class";
import { AppColors } from "../../utils/constants";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmpassword: string;
};
export default function Signup() {
  const [isLoading, setisLoading] = useState(false);
  const [userRole, setuserRole] = useState("Student");
  const navigate = useNavigate();
  const [showPassword2,setShowPassword2] = useState(false)
  const [showPassword,setShowPassword] = useState(false)
  const schema = Yup.object({
    fullName: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email format").required("Required!"),
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
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const handleRegistration = async (values: any) => {

    setisLoading(true);
    userOBJ
      .user_signup({
        fullname: values.fullName,
        email: values.email,
        password: values.password,
        userType: userRole,
      })
      .then((res: any) => {
        if (res) {
          if (res?.status === true) {
            toast.success(res?.message);
            setisLoading(false);
            setTimeout(() => {
              navigate("/otp", { state: { email: values.email } });
            }, 1000);
          } else if (!res?.status && res?.needVerification) {
             toast.error(res?.message);
            setisLoading(false)
           setTimeout(() => {
              navigate("/otp", { state: { email: values.email } });
            }, 1000);
          }
          else {
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
  //handle Role Selection
  const handleRoleSelection = (role: string) => {
    setuserRole(role);
  };

  useLayoutEffect(() => {
    // ProtectRoute();
    console.log("hello");
  }, []);

  return (
    <div>
      <PageLayout>
        <BannerCont bg={SignupBanner}></BannerCont>
        <FormCont>
          <FormHeader>
            <img src={Logo} alt="..." onClick={()=>window.location.replace('https://www.klasshour.com')} style={{cursor:'pointer'}}/>
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
              {errors.fullName && (
                <FormError>{errors.fullName.message}</FormError>
              )}

              <Input
                Icon={UserIcon}
                type="text"
                placeHolder="Full Name"
                validation={{
                  ...register("fullName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  }),
                }}
              />

              {errors.email && <FormError>{errors.email.message}</FormError>}
              <Input
                Icon={MailIcon}
                type="email"
                placeHolder="Email"
                validation={{ ...register("email", { required: true }) }}
              />
              {errors.password && (
                <FormError>{errors.password.message}</FormError>
              )}
              <div className="pwd">
                <Input
                Icon={LockIcon}
                type={showPassword ? "text" : "password"}
                placeHolder="Enter Password"
                validation={{ ...register("password", { required: true }) }}
              />
              {showPassword  ? <i className="fa fa-eye-slash" aria-hidden="true" onClick={()=>setShowPassword(!showPassword)}></i> : <i className="fa fa-eye" aria-hidden="true" onClick={()=>setShowPassword(!showPassword)}></i>}
              </div>
              {errors.confirmpassword && (
                <FormError>{errors.confirmpassword.message}</FormError>
              )}
              <div className="pwd">
                <Input
                Icon={LockIcon}
                type={showPassword2 ? "text" : "password"}
                placeHolder="Confirm password"
                validation={{
                  ...register("confirmpassword", { required: true }),
                }}
                />
                 {showPassword2  ? <i className="fa fa-eye-slash" aria-hidden="true" onClick={()=>setShowPassword2(!showPassword2)}></i> : <i className="fa fa-eye" aria-hidden="true" onClick={()=>setShowPassword2(!showPassword2)}></i>}
              </div>
              
              <p style={{color:"#fff",margin:"10px 0",fontWeight:800}}>Note: You are registering as a  <span style={{color:"#F15E38"}}>{ userRole}</span></p>
              <PrimaryBtn
                isLoading={isLoading}
                title="Register"
                onBtnClick={(e: React.FormEvent<HTMLFormElement>) => ""}
                btnType="submit"
              />
            </Form>
            <FormFoter>
              Already have an account?{" "}
              <Link
                style={{
                  color: `${AppColors.brandRed}`,
                  textDecoration: "none",
                  marginLeft: 5,
                }}
                to="/"
              >
                Login
              </Link>
            </FormFoter>
          </FormContainer>
        </FormCont>
      </PageLayout>
    </div>
  );
}
