import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

export const PageLayout = styled.div`
  width: 100%;
  height: 100vh;
`;

export const LayoutHead = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 0 8rem;
  background: ${AppColors.primary};

  @media (${BreakPoints.xs}) {
    padding: 0 0.2rem;
    padding-left: 1rem;
  }

  @media (${BreakPoints.large}) {
  }
`;

export const ContentArea = styled.div`
  margin-top: 6rem;

  margin: 5rem auto;
  border: 1px solid red;
  /* margin: auto; */

  @media (${BreakPoints.xs}) {
    width: 95%;
  }

  @media (${BreakPoints.large}) {
    width: 80%;
  }
`;
