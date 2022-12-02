import styled from "styled-components";
import { AppColors } from "../../utils/constants";

export const Container = styled.div`
  padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
     &:hover {
      background-color: rgba(0, 0, 0, 0.04);
      cursor: pointer;
    }

    &.selected {
      background-color: rgba(0, 0, 0, 0.08);
    }
     &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }

`
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

export const Dots = styled.li`
&:hover{
    background-color: transparent;
    cursor: default;
}
`

