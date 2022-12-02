import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";

export const RequestFormPageLayout = styled.div`
  width: calc(100% - 40px);
  min-height: 20vh;
  position: relative;
  top: 5rem;
  background: #FFFFFF;
  border: 0.2px solid #848484;
  border-radius: 10px;
  padding:40px 20px;
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
  }

`;

export const RequestForm = styled.form`
  width: 60%;
  margin: auto;
  margin-top: 4rem;

  @media (${BreakPoints.xs}) {
    width: 100%;
  }
  @media (${BreakPoints.large}) {
  }
`;

export const FormControl = styled.div`
width:100%;
margin:30px 0;
label{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 121.19%;
  text-align: center;
  color: #292929;
}
input,textarea{
  width:calc(100% - 40px);
  border: 0.2px solid #848484;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding:20px;
  outline:none;
  margin-top:10px;
}
`

export const Button = styled.button`
  border-radius: 4px;
  color:#fff;
  width:182px;
  background:#F15E38;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 13px;
  gap: 10px;
  margin:30px auto;
  outline:none;
  border:none;
  cursor:pointer
`