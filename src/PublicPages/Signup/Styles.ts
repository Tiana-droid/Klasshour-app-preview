import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

type LoginPropT = {
  bg: any;
};
export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
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

export const RoleButton = styled.button`
  border: 2px solid ${AppColors.brandRed};
  width: 216px;
  height: 50px;
  border-radius: 6px;
  font-weight: 800;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const RoleButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
