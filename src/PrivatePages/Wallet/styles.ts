import styled from "styled-components";
import { AppColors } from "../../utils/constants";
import { BreakPoints } from "../../utils/breakpoints";

export const Header = styled.h3`
  color: ${AppColors.primary};
`;
export const WalletLayout = styled.div`
  display: grid;
  margin-top: 10px;
  grid-template-columns: 1.4fr 1fr;
  grid-gap: 55px;
  padding: 10px;
  @media (${BreakPoints.xs}) {
    grid-template-columns: 1fr;
    margin: auto;
    grid-template-rows: 1fr 1fr;
  }
  @media (${BreakPoints.small}) {
    grid-template-columns: 1fr;
    margin: auto;
    grid-template-rows: 1fr 1fr;
  }
  @media (${BreakPoints.large}) {
    grid-template-columns: 1.4fr 1fr;
    margin: auto;
    grid-template-rows: 1fr;
  } ;
`;

export const BalanceContainer = styled.div`
  background: linear-gradient(96.85deg, #161b45 35.99%, #f15e38 97.01%);
  border-radius: 15px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 20px;
  @media (${BreakPoints.xs}) {
    width: 100%;
  }
  @media (${BreakPoints.small}) {
    width: 100%;
  }
  @media (${BreakPoints.large}) {
    width: 100%;
  } ;
`;
export const HStack = styled.div`
  display: flex;
  gap: 10px;
`;
export const Flex = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
export const WalletHeader = styled.span`
  font-size: 14px;
  font-weight: 300;
`;
export const WalletAmount = styled.span`
  font-weight: 300;
  font-size: 19px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
  @media (${BreakPoints.xs}) {
    flex-direction: column;
    align-items: center;
  }
  @media (${BreakPoints.small}) {
    flex-direction: column;
    align-items: center;
  }
  @media (${BreakPoints.large}) {
    flex-direction: row;
  } ;
`;
export const Button = styled.a`
  width: 291px;
  border-radius: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 51px;
  border: 0;
  outline: none;
  color: #fff;
  font-size: 17px;
  font-weight: 100;
  @media (${BreakPoints.xs}) {
    width: 100%;
  }
  @media (${BreakPoints.small}) {
    width: 100%;
  } ;
`;

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ATMCard = styled.div`
  width: 100%;
  height: 171px;
  color: #fff;
  height: 200px;
  background-image: url(abstract-blue-background-modern-design_702967-2.webp);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;
export const ATMCardDetails = styled.div`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-size: 18px;
  font-weight: 100;
  background: linear-gradient(#eee, #999);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 20px;
  @media (${BreakPoints.xs}) {
    font-size: 23px;
    font-weight: 200;
  }
  @media (${BreakPoints.small}) {
    font-size: 23px;
    font-weight: 200;
  }
  @media (${BreakPoints.large}) {
    font-size: 18px;
    font-weight: 200;
  } ;
`;
export const LightText = styled.span`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #575757;
`;
export const DarkText = styled.span`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #070707;
`;
export const Text = styled.span`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const ActionButton = styled.button`
  border: 0;
  outline: none;
  width: 80px;
  height: 30px;
  margin: 5px;
  border-radius: 4px;
  @media (${BreakPoints.xs}) {
    width: 70px;
    height: 30px;
  }
  @media (${BreakPoints.small}) {
    width: 90px;
    height: 40px;
  }
  @media (${BreakPoints.large}) {
    width: 80px;
    height: 30px;
  } ;
`;
export const Box = styled.div``;

export const OutlinedInput = styled.input`
  border: 0.5px solid #96969642;
  height: 40px;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
`;
export const OutlinedSelect = styled.select`
  border: 0.2px solid #96969642;
  height: 40px;
  width: 100%;
  padding: 5px;
  margin: 5px;
  border-radius: 2px;
`;

export const NavLink = styled.a`
  font-size: 22px;
  text-decoration: none;
  font-weight: 400;
  color: ${AppColors.primary};
`;

export const Table = styled.table`
  border-spacing: 0px;
  width: 100%;
`;
export const Th = styled.th`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  color: #003333;
  text-align: left;
  padding: 8px;
  letter-spacing: 0.25px;
`;
export const TableHeaderRow = styled.tr`
  background-color: #f5fbf7;
`;
export const Td = styled.td`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  text-align: left;
  padding: 8px;
  letter-spacing: 0.25px;
  color: #000000;
`;

export const Status = styled.span`
  border-radius: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const CardStats = styled.div`
  width: 100%;
  background: #fff;
  border-top: 5px solid #009933;
  margin-top: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const StatusText = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height */
  display: flex;
  align-items: flex-end;
  color: #969696;
`;