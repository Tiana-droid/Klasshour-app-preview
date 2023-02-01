import styled from "styled-components";
import { AppColors } from "../../utils/constants";
//====== pagination ======

export const PaginationContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 50px;
  border: 0.2px solid #848484;
  margin-top: 1rem;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
`;

export const NextButton = styled.button`
  color: #fff;
  background-color: ${AppColors.brandRed};
  border-radius: 5px;
  border: none;
  outline-style: none;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
`;

export const PrevButton = styled.button`
  color: #fff;
  background-color: ${AppColors.primary};
  border-radius: 5px;
  border: none;
  outline-style: none;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
`;
