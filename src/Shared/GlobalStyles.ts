import styled from "styled-components";
import { AppColors } from "../utils/constants";

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
