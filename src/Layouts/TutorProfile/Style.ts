import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

export const Flex = styled.div`
  display: flex;
  gap: 5px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
  align-items: center;
  border: 0.4px solid #eee;
  padding: 15px;
  border-radius: 10px;
  padding: 15px;
  border-radius: 10px;
`;
export const Button = styled.button`
  width: 100%;
  height: 47px;
  color: #fff;
  background: ${AppColors.brandRed};
  outline: none;
  border: 0;
  border-radius: 6px;
  &:hover {
    background-color: #a9a9a9;
  }
`;
export const ButtonOutline = styled.button`
  width: 100%;
  height: 47px;
  outline: none;
  border: 2px solid ${AppColors.brandRed};
  border-radius: 6px;
  &:hover {
    background-color: #a9a9a9;
  }
`;
export const LightText = styled.span`
  font-weight: 300;
  color: #333;
`;
export const BoldText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const TutorContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;
