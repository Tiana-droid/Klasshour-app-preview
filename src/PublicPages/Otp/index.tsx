import React, { useEffect, useRef, useState } from "react";
import LoginBanner from "../../Assets/images/LoginBanner.svg";
import Logo from "../../Assets/images/Logo.svg";
import "./styles.css";
import {
  BannerCont,
  Form,
  FormCont,
  FormContainer,
  FormHeader,
  PageLayout,
  OtpInstruction,
  OtpButton,
  OptButtonContainer,
} from "./Styles";

import { toast } from "react-toastify";
import userOBJ from "../../classes/user.class";
import { useNavigate, useLocation } from "react-router-dom";
export default function OTP() {
  const [isLoading, setisLoading] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOtpIndex, setactiveOtpIndex] = useState<number>(0);
  const { state } = useLocation();
  const { email } = state; // Read values passed on state
  // ref for the input
  const inputRef = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();
  // check if the user has enter all the values for the otp
  useEffect(() => {
    let key = 0;
    for (let i = 0; i < otp.length; i++) {
      if (otp[i]) {
        key++;
      }
      if (key === otp.length) {
        let value = {
          email: email,
          OTPCode: Number(otp.join("")),
        };
        handleOTP(value);
      }
    }
  }, [otp]);

  const handleOTP = async (values: any) => {
    setisLoading(true);
    userOBJ.user_verify_account(values).then((res: any) => {
      if (res) {
        if (res?.status === true) {
          toast.success(res?.message);
          setTimeout(() => {
            navigate("/");
          }, 1000);
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

  // handle the onchange event on the otp
  const handleOnChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[index] = value.substring(value.length - 1);
    setOtp(newOTP);
    if (!value) setactiveOtpIndex(index - 1);
    else setactiveOtpIndex(index + 1);
  };

  // add keyboard event
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {};

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

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
            <Form>
              <h2
                style={{
                  margin: "13px",
                }}
              >
                Enter OTP
              </h2>
              <OtpInstruction>
                Enter 6 digit pin sent to your email
              </OtpInstruction>
              <OptButtonContainer>
                {otp.map((value, index) => {
                  return (
                    <React.Fragment key={index}>
                      <OtpButton
                        disabled={isLoading}
                        ref={index === activeOtpIndex ? inputRef : null}
                        value={otp[index]}
                        onChange={(e) => {
                          handleOnChange(e, index);
                        }}
                        onKeyDown={(e) => {
                          handleKeyDown(e, index);
                        }}
                        type="number"
                      />
                    </React.Fragment>
                  );
                })}
              </OptButtonContainer>
            </Form>
          </FormContainer>
        </FormCont>
      </PageLayout>
    </div>
  );
}
