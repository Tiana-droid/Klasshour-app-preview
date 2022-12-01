import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Input = styled.input`
  width: 304px;
  height: 44px;
  border: 0.2px solid #84848469;
  border-radius: 6px;
  padding: 10px;
  color: ${AppColors.brandBlack};
`;
export const TextArea = styled.textarea`
  width: 304px;
  height: 100px;
  border: 0.2px solid #84848469;
  border-radius: 6px;
  padding: 10px;
  color: ${AppColors.brandBlack};
`;
export const FormInnerContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 13px;
`;
export const FormError = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export const RequestForm = styled.form`
  width: 60%;
  margin: auto;
  border: 1px solid #5e697724;
  margin-top: 4rem;
  border-radius: 5px;

  @media (${BreakPoints.xs}) {
    width: 100%;
  }
  @media (${BreakPoints.large}) {
  }
`;
