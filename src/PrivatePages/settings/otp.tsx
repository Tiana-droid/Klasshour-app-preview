import React, { useEffect, useRef, useState } from "react";

import "../../PublicPages/Otp/styles.css";
import {
  Form,
  FormContainer,
  OtpInstruction,
  OtpButton,
  OptButtonContainer,
} from "../../PublicPages/Otp/Styles";

import { toast } from "react-toastify";
import userOBJ from "../../classes/user.class";
import { useNavigate, useLocation } from "react-router-dom";
import { getStoredClientUser } from "../../utils/LS";
export default function OTP({ password }: any) {
  const [isLoading, setisLoading] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOtpIndex, setactiveOtpIndex] = useState<number>(0);
const navigate = useNavigate()
  // ref for the input
  const inputRef = useRef<HTMLInputElement>(null);
  // check if the user has enter all the values for the otp
  useEffect(() => {
    let key = 0;
    for (let i = 0; i < otp.length; i++) {
      if (otp[i]) {
        key++;
      }
      if (key === otp.length) {
        let value = {
          email: getStoredClientUser().email,
          OTPCode: Number(otp.join("")),
          password
        };
        handleOTP(value);
      }
    }
  }, [otp]);
  const handleOTP = async (values: any) => {
    setisLoading(true);
    userOBJ.change_password_code(values).then((res: any) => {
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
    <FormContainer>
      {/* Todo: Do input validations and connect to state */}
      <Form>
        <OtpInstruction
          style={{
            color: "#000",
          }}
        >
          Enter 4 digit pin sent to your email
        </OtpInstruction>
        <OptButtonContainer>
          {otp.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <OtpButton
                  style={{
                    color: "#000",
                    border: "1px solid",
                  }}
                  disabled={isLoading}
                  ref={index === activeOtpIndex ? inputRef : null}
                  value={otp[index]}
                  onChange={(e) => {
                    handleOnChange(e, index);
                  }}
                  onKeyDown={(e) => {
                    console.log("eee")
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
  );
}