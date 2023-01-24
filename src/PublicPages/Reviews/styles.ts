import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
`;

export const Rev = styled(Container)`
  width: 70%;
  height: 555px;
  justify-content: flex-start;
  background: #ffffff;
  /* border: 0.2px solid #848484; */
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;

  & h3 {
    text-align: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #292929;
    margin: 20px 0px;
  }
  @media (${BreakPoints.xs}) {
    width: 90%;
  }
`;

export const Box = styled.div`
  margin: 7%;

  & label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #292929;
  }

  & textarea {
    width: 100%;
    padding: 10px;
    height: 100px;
    border: 0.5px solid #848484;
    border-radius: 4px;
    margin-top: 7px;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  

  & button {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 252, 251, 0.9);
    padding: 10px 13px;
    width: 40%;
    height: 40px;
    background: #f15e38;
    border-radius: 4px;
    text-align: center;
    outline:none;
    border:none;
    &[type="reset"]{
background: transparent;
color:#f15e38
  }
  }
`;

export const FormControl = styled.div`
label{
  width:100%
}
input{
width:calc(100% -  40px);
padding:10px 20px;
border-radius:5px;
margin:10px 0;
outline:none
}
textarea{
margin:10px 0;
outline:none
}
`