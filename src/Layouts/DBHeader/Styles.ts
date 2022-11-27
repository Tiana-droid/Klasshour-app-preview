import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

type DropdownPropT = {
  showDropdown: boolean;
};

export const Cont = styled.div`
  position: fixed;
`;
export const DBHeader = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${AppColors.primary};
`;

export const DispayDesktop = styled.div`
  @media (${BreakPoints.xs}) {
    display: none;
  }

  @media (${BreakPoints.large}) {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DropDownContainer = styled.div<DropdownPropT>`
  position: absolute;
  top: 6rem;
  width: 15%;
  right: 8rem;
  min-height: 10rem;
  background: #fff;
  border-radius: 0.4rem;
  transition: all ease 0.8s;
  display: ${(prop) => (prop.showDropdown ? "block" : "none")};
  color: ${AppColors.brandBlack};
  padding: 0.4rem;

  ul {
    list-style: none;
  }

  li {
    border-bottom: 1px solid #cad3db;
    padding: 0.6rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all ease 0.8s;
    :hover {
      padding-left: 0.2rem;
    }
  }
  li:last-child {
    border: none;
  }
  @media (${BreakPoints.xs}) {
    width: 45%;
    right: 1rem;
  }

  @media (${BreakPoints.large}) {
  }
`;
