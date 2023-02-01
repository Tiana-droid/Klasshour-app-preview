import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

type NavBtnPropT = {
  isActive: Boolean;
};
export const PageLayout = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 252, 251, 0.9);
`;

export const LayoutHead = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0 8rem;
  background: ${AppColors.primary};
  z-index: 99;

  @media (${BreakPoints.xs}) {
    padding: 0 0.2rem;
    padding-left: 1rem;
  }

  @media (${BreakPoints.large}) {
  }
`;

export const ContentArea = styled.div`
  margin-top: 6rem;

  /* margin: auto; */

  @media (${BreakPoints.xs}) {
    width: 95%;
    margin: 4rem auto;
  }
  @media (${BreakPoints.small}) {
    width: 90%;
    margin: 4rem auto;
  }
  
  @media (${BreakPoints.large}) {
    margin: 5rem auto;
    width: 70%;
    /* border: 1px solid red; */
  }
`;

export const FAB = styled.div`
  width: 50px;
  height: 50px;
  background: ${AppColors.brandRed};
  border-radius: 20rem;
  position: fixed;
  bottom: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    width: 40%;
  }
  @media (${BreakPoints.xs}) {
    right: 1rem !important;
  }

  @media (${BreakPoints.large}) {
    right: 9rem;
  }
`;

// =========== Page Nav ===============

export const Pagenav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 2px 50px rgba(0, 0, 0, 0.05);
  width: 100%;
  padding: 0.4rem;
  height: 58px;
  margin-bottom: 4rem;

  @media (${BreakPoints.xs}) {
    /* border: 1px solid red; */
    top: 1rem;
    height: 50px;
  }
  @media (${BreakPoints.small}) {
    /* border: 1px solid red; */
    top: 1rem;
    width: 100%;
    margin: auto;
    margin-bottom: 3rem;
  }

  @media (${BreakPoints.large}) {
    height: 58px;
    top: 1rem;
    width: 100%;
  }
`;

export const NavButton = styled.button<NavBtnPropT>`
  font-weight: 500;
  border: none;
  background: ${(prop) => (prop.isActive ? AppColors.primary : "#fff")};
  color: ${(prop) => (prop.isActive ? "#fff" : AppColors.brandBlack)};
  cursor: pointer;
  /* border: 1px solid red; */
  border-radius: 5px;

  @media (${BreakPoints.xs}) {
    font-size: 1rem;
    padding: 0.4rem 1rem;
  }
  @media (${BreakPoints.small}) {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }

  @media (${BreakPoints.large}) {
    font-size: 1.2rem;
    padding: 0.6rem 2rem;
  }
`;
