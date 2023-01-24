import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

export const Flex = styled.div`
  display: flex;
  gap: 5px;
`;

export const Card = styled.div`
  gap: 20px;
  margin-bottom: 10px;
  border: 0.4px solid #eee;
  padding: 15px;
  border-radius: 10px;
  padding: 20px;
  border-radius: 10px;
  width:600px;
  margin:0 auto;
  @media (${BreakPoints.xs}) {
    width: 100%;
    padding: 1rem;
  }
`;
export const Center = styled.div`
display:flex;
flex-direction:column;
align-items:center;
row-gap:20px;
margin:20px 0
`
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
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 121.19%;
  color:#161B45
`;

export const TutorContainer = styled.div`
 p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 121.19%;
margin:10px 0;
color: #292929;
  }
.title{
  display:flex;
  justify-content:space-between;
  margin:20px 0;
  
h1{
    font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 121.19%;
color: #292929;

  }

}
  
`;

export const ShowMore = styled.button`
height: 40px;
// padding: 0 4rem;
color: #F15E38;
background: transparent;
outline-style: none;
font-weight:500;
font-size: 13px;
margin-left:10px;
border: none;
border-radius: 5px;
cursor: pointer;
`