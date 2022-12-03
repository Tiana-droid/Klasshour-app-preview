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
  FormError,
  FormFoter,
} from "./Styles";
import { PrimaryBtn } from "../../Components/Button";
import { toast } from "react-toastify";
import userOBJ from "../../classes/user.class";
import { AppColors } from "../../utils/constants";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

type InputsPropT = {
  email: string;
  password: string;
};

export default function Login() {
  const [isLoading, setisLoading] = useState(false);

  const handleLogin = async (values: any) => {
    setisLoading(true);
    userOBJ
      .user_login({
        email: values.email,
        password: values.password,
      })
      .then((res: any) => {
        if (res) {
          if (res?.status === true) {
            toast.success(res?.message);
            setisLoading(false);

            window.location.reload();
          } else {
            console.log("component", res);
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
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*.,])(?=.{8,})/,
        "Atleast 8 Characters is needed, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  }).required();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputsPropT>({
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
            <Form onSubmit={handleSubmit(handleLogin)}>
              <h2>Welcome Back</h2>
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
              <Input
                Icon={LockIcon}
                type="password"
                placeHolder="Enter Password"
                validation={{ ...register("password", { required: true }) }}
              />
              <div style={{ marginTop: "2rem" }}>
                <PrimaryBtn
                  isLoading={isLoading}
                  title="Login"
                  btnType="submit"
                  onBtnClick={(e: React.FormEvent<HTMLFormElement>) => ""}
                />
              </div>
            </Form>
            <FormFoter>
              <Link
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  marginLeft: 5,
                }}
                to="/reset-password"
              >
                Forgot password?
              </Link>
            </FormFoter>
            <FormFoter>
              Already have an account?{" "}
              <Link
                style={{
                  color: `${AppColors.brandRed}`,
                  textDecoration: "none",
                  marginLeft: 5,
                }}
                to="/signup"
              >
                Register
              </Link>
            </FormFoter>
          </FormContainer>
        </FormCont>
      </PageLayout>
    </div>
  );
}
