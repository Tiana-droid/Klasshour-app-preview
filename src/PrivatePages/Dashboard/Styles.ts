import styled from "styled-components";
import { AppColors } from "../../utils/constants";
import { BreakPoints } from "../../utils/breakpoints";

export const PageLayout = styled.div`
  background: ${AppColors.primary};
  position: relative;
  color: #fff;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  /* border: 2px solid ${AppColors.brandRed}; */

  @media (${BreakPoints.xs}) {
    padding: 1rem;
  }

  @media (${BreakPoints.large}) {
    padding: 1rem 8rem;
  }
`;

export const ContentContainer = styled.div`
  width: 1005;
  background-color: #fff;
  height: 78vh;
  overflow-y: scroll;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 0.2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 1005;
`;

export const Card = styled.div`
  width: 280px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cad3db;

  border-radius: 0.8rem;
  cursor: pointer;
  :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: none;
    transition: all ease 0.8s;
  }

  img {
    width: 50px;
  }
  span {
    display: inline-block;
    margin-top: 2rem;
    color: ${AppColors.brandBlack};
  }
`;
