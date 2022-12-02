import styled from "styled-components";
import { BreakPoints } from "../../utils/breakpoints";
import { AppColors } from "../../utils/constants";

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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Input = styled.input`
  width: 304px;
  height: 44px;
  border: 0.2px solid #84848469;
  border-radius: 6px;
  padding: 10px;
  color: ${AppColors.brandBlack};
`;
export const TextArea = styled.textarea`
  width: 304px;
  height: 100px;
  border: 0.2px solid #84848469;
  border-radius: 6px;
  padding: 10px;
  color: ${AppColors.brandBlack};
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
export const FormError = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export const RequestForm = styled.form`
  width: 60%;
  margin: auto;
<<<<<<< HEAD
  border: 1px solid #5e697724;
=======
>>>>>>> e58e7d662edcb28284d72e2777240b0ec1cf15d8
  margin-top: 4rem;
  border-radius: 5px;

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