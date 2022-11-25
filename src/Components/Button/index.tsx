import React from "react";
import styled from "styled-components";
import { AppColors } from "../../utils/constants";
import Spinner from "../Spinner";

const PrimaryButton = styled.button`
  background: ${AppColors.brandRed};
  color: #fff;
  height: 50px;
  border: none;
  border-radius: 9px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
`;

const OutlinedButton = styled.button`
  /* border: 1px solid ${AppColors.brandRed}; */
  border: 1px solid red;
  color: ${AppColors.brandRed};
  padding: 1rem 1.4rem;
  border-radius: 0.4rem;
  text-transform: uppercase;
  cursor: pointer;
  background: #fff;
  font-weight: 600;
`;

type btnPropT = {
  title: string;
  onBtnClick: Function;
  isLoading?: boolean;
};

export function PrimaryBtn({
  title,
  onBtnClick,
  isLoading,
  ...rest
}: btnPropT) {
  return (
    <PrimaryButton onClick={(e) => onBtnClick(e)}>
      {isLoading ? <Spinner isLoading={isLoading} /> : title}
    </PrimaryButton>
  );
}

export function OutlinedBtn({ title, onBtnClick }: any) {
  return <OutlinedButton onClick={() => onBtnClick()}>{title}</OutlinedButton>;
}
