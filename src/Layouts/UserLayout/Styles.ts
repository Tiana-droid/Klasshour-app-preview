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
  bottom: 4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  img {
    width: 40%;
  }
  @media (${BreakPoints.xs}) {
    right: 1rem;
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

  margin-bottom: 4rem;
  @media (${BreakPoints.xs}) {
    /* border: 1px solid red; */
    top: 1rem;
    height: 50px;
  }

  @media (${BreakPoints.large}) {
    height: 58px;
    top: 2rem;
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

  @media (${BreakPoints.large}) {
    font-size: 1.2rem;
    padding: 0.6rem 2rem;
  }
`;
