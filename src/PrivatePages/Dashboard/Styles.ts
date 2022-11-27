import styled from "styled-components";
import { AppColors } from "../../utils/constants";
import { BreakPoints } from "../../utils/breakpoints";

export const PageLayout = styled.div`
  background: ${AppColors.primary};
  color: #fff;
  height: 100vh;
  width: 100%;

  @media (${BreakPoints.xs}) {
    padding: 1rem;
  }

  @media (${BreakPoints.large}) {
    padding: 1rem 8rem;
  }
`;

export const DashboardHeader = styled.div`
  border: 1px solid red;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
`;
