import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

type CardStatusPropT = {
  isActive: boolean;
};

type CardDatePropT = {
  isPast?: boolean;
};
export const Card = styled.div<CardDatePropT>`
  width: 100%;
  position: relative;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 1.4rem;
  height: 300px;
  border-bottom: ${(prop) =>
    prop.isPast ? `2px solid ${AppColors.brandRed}` : ""};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (${BreakPoints.xs}) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    height: 320px;
  }
  @media (${BreakPoints.large}) {
    width: 100%;
    padding: 2rem;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 20px;
  font-size: 1rem;
  margin-bottom: 1rem;

  @media (${BreakPoints.xs}) {
    font-size: 0.8rem;
  }
  @media (${BreakPoints.large}) {
  }
`;

export const CardStatus = styled.span<CardStatusPropT>`
  display: inline-block;
  width: 20%;
  color: ${(prop) => (prop.isActive ? "#27AE60" : AppColors.brandRed)};
  @media (${BreakPoints.xs}) {
  }
  @media (${BreakPoints.large}) {
  }
`;

export const CardDate = styled.span<CardDatePropT>`
  display: inline-block;
  display: flex;
  justify-content: end;
  width: ${(prop) => (prop.isPast ? "100%" : "45%")};
  display: flex;
  justify-content: end;
`;

export const CardContent = styled.div`
  margin-top: 1.4rem;
  height: 140px;
`;

export const SubjectCont = styled.div`
  width: 100%;
  color: #848484;
  font-size: 1rem;

  span {
    color: ${AppColors.brandBlack};
    display: inline-block;
    margin-left: 0.2rem;
    font-weight: 600;
  }
`;

export const CardDescription = styled.div`
  width: 80%;
  margin-top: 1rem;
  color: #292929;
  font-weight: 300;
  line-height: 1.8rem;
  @media (${BreakPoints.xs}) {
    width: 100%;
    font-size: 1rem;
  }
  @media (${BreakPoints.large}) {
  }
`;

export const CardLang = styled.div`
  width: 80%;
  color: #292929;
  font-weight: 300;
  margin-top: 1rem;
  span {
    color: ${AppColors.brandBlack};
    display: inline-block;
    margin-left: 0.2rem;
    font-weight: 450;
    font-size: 0.88rem;
  }
`;

export const CardButtonContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 50px;
  position: absolute;
  bottom: 1.2rem;
  left: 0;

  @media (${BreakPoints.xs}) {
    bottom: 0.4rem;
    justify-content: space-between;
    padding: 0 1rem;
  }
  @media (${BreakPoints.large}) {
    padding: 0 2rem;
  }
`;

export const Interactions = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  img {
    width: 18px;
  }
  span {
    font-size: 0.8rem;
  }
`;

export const CardButton = styled.button`
  height: 40px;
  padding: 0 4rem;
  color: #fff;
  background: ${AppColors.primary};
  outline-style: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (${BreakPoints.xs}) {
    padding: 0 1rem;
  }
  @media (${BreakPoints.large}) {
    padding: 0 2rem;
  }
`;
