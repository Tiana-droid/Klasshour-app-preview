import styled from "styled-components";
import { AppColors } from "../../utils/constants";
import { BreakPoints } from "../../utils/breakpoints";

export const Header = styled.h3`
  color: ${AppColors.primary};
`;
export const WalletLayout = styled.div`
  display: flex;
  flex-direction:column;
  margin-top: 10px;
  grid-gap: 55px;
  padding: 10px;
  @media (${BreakPoints.xs}) {
    grid-template-columns: 1fr;
    margin: auto;
   overflow-x:auto
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
export const Center = styled.div`
margin-top:20px;
text-align:center
`
export const BalanceContainer = styled.div`
  background: #161b45;
  border-radius: 15px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction:column;
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
export const Dismiss = styled.div`
color:red;
font-size:16px;
font-weight:900;
position:absolute;
top:10px;
right:20px;
cursor:pointer
`
export const Flex = styled.div`
  display: flex;
  gap: 10px;
 width:100%;
  justify-content: space-between;
  // height: 100%;
  div{
    background:#fff;
    width:30px;
    height:30px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-item:center
  }
`;
export const WalletHeader = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align:center
`;
export const AvailableBalance = styled.div`
  font-size: 19px;
  font-weight: 300;
`;
export const WalletAmount = styled.span`
  font-weight: 600;
  font-size: 24px;
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
export const Button = styled.button`
  min-width: 100px;
  border-radius: 20px;
  background:;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border: 0;
  padding: 0 10px;
  outline: none;
  color: #fff;
  font-size: 14px;
  margin:20px auto 10px auto;
  background: #E55935;
  font-weight: 600;
  @media (${BreakPoints.xs}) {
    // width: 100%;
  }
  @media (${BreakPoints.small}) {
    // width: 100%;
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
export const Box = styled.div`
 @media (${BreakPoints.xs}) {
  overflow-x:auto
  }
`;

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
   @media (${BreakPoints.xs}) {
   min-width:200px
  }
`;
export const TableHeaderRow = styled.tr`
  background-color: #f5fbf7;
`;
export const Td = styled.td`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
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
  padding:5px 10px;
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

export const Modal = styled.div`
width:100%;
height:100%;
position:absolute;
display:flex;
justify-content:center;
align-items:center;
top:0;
left:0;
background:#000000b3
`

export const Container = styled.div`
background:#fff;
border-radius:8px;
padding:20px 30px;
display:flex;
flex-direction:column;
justify-content:center;
height:250px;
width:500px;
margin:0px auto;
position:relative;
button {
  cursor: pointer;
  text-align: center;
  font-size: 10px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  background-color:#F15E38;
  font-weight: bolder;
  color: #e0eafc;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 45px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 0 auto;
  // margin-top:20px
}
 @media (${BreakPoints.xs}) {
    width:90%;
    justify-content:center;
    align-items:center
  }
  
 
`
export const Form = styled.form`
// padding:20px
`
export const FormControl = styled.div`
label{
  width:100%;
}
input{
  width:100%;
  padding:15px 20px;
  border-radius:4px;
  outline:none;
  margin:10px 0pc

}

`