import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

type LoginPropT = {
  bg: any;
};
export const PageLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const BannerCont = styled.div<LoginPropT>`
  width: 50%;
  background: url(${(prop) => prop.bg}) no-repeat;
  background-size: cover;
  @media (${BreakPoints.xs}) {
    display: none;
  }
  @media (${BreakPoints.large}) {
    display: block;
  }
`;

export const FormCont = styled.div`
  width: 50%;
  background: ${AppColors.primary};

  @media (${BreakPoints.xs}) {
    width: 100%;
  }
  @media (${BreakPoints.large}) {
    width: 50%;
    padding: 2rem 4rem;
  }
`;

export const FormHeader = styled.div`
  @media (${BreakPoints.xs}) {
    margin-top: 3rem;
    padding-left: 2rem;
  }

  @media (${BreakPoints.large}) {
    width: 80%;
    margin: auto;
  }
`;

export const FormContainer = styled.div`
  min-height: 60vh;
  margin-top: 4rem;

  @media (${BreakPoints.xs}) {
    width: 90%;
    margin: 4rem auto;
  }

  @media (${BreakPoints.large}) {
    width: 80%;
    margin: 5rem auto;
  }
`;

export const Form = styled.form`
  margin-top: 2rem;

  @media (${BreakPoints.xs}) {
    h2 {
      color: #fff;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      font-size: 2.5rem;
      line-height: 63px;
      margin-bottom: 2rem;
    }
  }

  @media (${BreakPoints.large}) {
    h2 {
      color: #fff;
      text-align: center;
      font-style: normal;
      font-weight: 800;
      font-size: 54px;
      line-height: 63px;
      margin-bottom: 4rem;
    }
  }
`;

export const FormError = styled.span`
  color: red;
  padding: 10px;
`;
export const FormFoter = styled.span`
  display: flex;
  justify-content: center;
  color: #fff;
  margin-top: 24px;
`;

export const OtpInstruction = styled.h4`
  color: #fff;
  display: flex;
  justify-content: center;
  letter-spacing: 1px;
  margin-bottom: 35px;
`;
export const OtpButton = styled.input`
  height: 50px;
  width: 50px;
  border-radius: 7px;
  outline: none;
  border: 0;
  text-align: center;
  font-size: 42px;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const OptButtonContainer = styled.div`
  display: flex;
  gap: 19px;
  justify-content: center;
  margin: 21px;
`;
