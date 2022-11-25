import styled from "styled-components";
import { BreakPoints } from "./breakpoints";
import { AppColors } from "./constants";

export const PageContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  background-color: #fff;
  @media (${BreakPoints.large}) {
    width: 86%;
    margin: auto;
    background-color: #fff;
  }
`;

export const PrimaryBtn = styled.button`
  background: ${AppColors.brandRed};
  color: #fff;
  height: 54px;
  border: none;
  border-radius: 0.4rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
`;
export const InputLabel = styled.label`
  color: ${AppColors.brandGray};
`;
export const PrimaryInput = styled.input`
  outline-style: none;
  padding: 1rem 0.8rem;
  border: 1px solid #c0c3c7;
  -webkit-appearance: none;
  border-radius: 0.4rem;
`;
