import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

export const RequestFormPageLayout = styled.div`
  width: 80%;
  margin: auto;
  min-height: 20vh;
  position: relative;
  top: 5rem;
  background: #ffffff;
  border: 0.2px solid #848484;
  border-radius: 10px;
  padding: 40px 20px;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  @media (${BreakPoints.xs}) {
    width: 98%;
  }
  @media (${BreakPoints.large}) {
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  /* border: 1px solid red; */
`;
export const Input = styled.input`
  width: 100%;
  height: 44px;
  border: 0.2px solid #84848469;
  border-radius: 6px;
  padding: 10px;
  color: ${AppColors.brandBlack};
`;
export const Flex = styled.div`
display:flex;
gap:10px;

input{
  width:unset;
  height:unset
}
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 0.2px solid #84848469;
  border-radius: 6px;
  padding: 10px;
  color: ${AppColors.brandBlack};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export const FormInnerContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 13px;
`;

export const PickerCont = styled.div`
  width: 100%;
  height: 44px;
  border: 0.2px solid #84848469;
  border-radius: 6px;
  padding: 10px;
  color: ${AppColors.brandBlack};
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;

export const FormError = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export const RequestForm = styled.form`
  width: 60%;
  margin: auto;
  margin-top: 4rem;
  border-radius: 5px;

  @media (${BreakPoints.xs}) {
    width: 100%;
  }
  @media (${BreakPoints.large}) {
  }
`;

export const FormControl = styled.div`
  width: 100%;
  margin: 30px 0;
  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 121.19%;
    text-align: center;
    color: #292929;
  }
  input,
  textarea {
    width: calc(100% - 40px);
    border: 0.2px solid #848484;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 20px;
    outline: none;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  color: #fff;
  width: 182px;
  background: #f15e38;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 13px;
  gap: 10px;
  margin: 30px auto;
  outline: none;
  border: none;
  cursor: pointer;
`;
