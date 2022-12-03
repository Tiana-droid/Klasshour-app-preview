import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

export const Flex = styled.div`
  display: flex;
  gap: 5px;
`;
export const Card = styled.div`
  width: 100%;
  background: #fff;
  border: 0.4px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  border: 0.2px solid #848484;
  border-radius: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
export const Button = styled.button`
  color: #fff;
  background: ${AppColors.brandRed};
  border: 0;
  outline: none;
  width: 100%;
  height: 47px;
  border-radius: 6px;
  font-size: 15px;
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

export const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
