import styled from "styled-components";
import { AppColors } from "../../utils/constants";
import { BreakPoints } from "../../utils/breakpoints";

export const PageLayout = styled.div`
  background: #fff;
  position: relative;
  color: #fff;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  padding:2rem;
  h2{
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 20px;
/* identical to box height, or 83% */

letter-spacing: 0.25px;

/* Primay Black */

color: #292929;
  }
  /* border: 2px solid ${AppColors.brandRed}; */
  @media (${BreakPoints.xs}) {
    padding: 1rem;
  }
  @media (${BreakPoints.large}) {
    padding: 1rem 8rem;
  }
`;
export const AddBtn = styled.button`
width:100px;
border:unset;
outline:unset;
padding:10px;
color:#fff;
border-radius:10px;
background:rgb(241, 94, 56)
`
export const ContentContainer = styled.div`
  width: 1005;
  background-color: #fff;
  height: 78vh;
  overflow-y: scroll;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 0.2rem;
`;

export const Flex = styled.div`
  display: flex;
  
  label{
    min-width:300px;
  }

  @media screen and (max-width: 550px){
   flex-wrap : wrap;
  }
`;

export const Box = styled.div``;

export const TabPanel = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #575757;
`;
export const Identifier = styled.div`
background: #848484;
color:#fff;
width:fit-content;
padding:10px;
border-radius:50px;
position:relative;

span{
 cursor:pointer;
 padding-left:5px
}

`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 70px;

  @media (${BreakPoints.xs}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  /* @media (${BreakPoints.small}) {
    grid-template-columns: 1fr;
  }
  @media (${BreakPoints.medium}) {
    grid-template-columns: 1fr;
  }
  @media (${BreakPoints.large}) {
    grid-template-columns: 2fr 1fr;
  } */
`;
export const Image = styled.img`
  @media (${BreakPoints.xs}) {
    display: none;
  }
  @media (${BreakPoints.small}) {
    display: none;
  }
  @media (${BreakPoints.medium}) {
    display: none;
  }
  @media (${BreakPoints.large}) {
    display: block;
  }
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

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  height: 50px;
  border-radius: 5px;
  border: 0.3px solid #eee;
`;
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  height: 50px;
  border-radius: 5px;
  border: 0.3px solid #eee;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 50px;
  border-radius: 5px;
  border: 0;
  outline: none;
`;