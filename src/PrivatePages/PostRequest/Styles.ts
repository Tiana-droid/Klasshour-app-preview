import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";

export const RequestFormPageLayout = styled.div`
  width: 100%;
  min-height: 2ovh;
  position: relative;
  top: 5rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const RequestForm = styled.form`
  width: 60%;
  margin: auto;
  border: 1px solid red;
  margin-top: 4rem;

  @media (${BreakPoints.xs}) {
    width: 100%;
  }
  @media (${BreakPoints.large}) {
  }
`;
