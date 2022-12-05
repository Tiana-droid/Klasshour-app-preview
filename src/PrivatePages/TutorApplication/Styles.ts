import styled from "styled-components";
import { AppColors } from "../../utils/constants";
export const PageLayout = styled.div`
  
`;



export const Card = styled.div`
width:100%;
min-height:277px;
  background: #FFFFFF;
border: 0.2px solid #848484;
border-radius: 10px;
padding:25px 40px;
margin:30px auto;
h1{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 121.19%;
color: #292929;

}
.header{
display:flex;
justify-content:space-between;
align-items:center
}
div{
    font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 13px;
line-height: 121.19%;
color: #292929;
margin:30px 0;
}
`;

export const LeftAligned = styled.section`
display:flex;
gap:40px;
justify-content: end;
`
export const ButtonLeft = styled.button`
outline:none;
border:none;
cursor:pointer
padding:30px 
left: calc(50% - 258px/2 + 261px);
top: 340px;
background: transparent;
border-radius: 4px;
color: #F15E38;
`
export const ButtonRight = styled.button`
outline:none;
border:none;
cursor:pointer;
padding:0 30px ;
width: 258px;
height: 40px;
left: calc(50% - 258px/2 + 261px);
top: 340px;
background: #F15E38;
border-radius: 4px;
color:#fff
`

export const PaginationContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 50px;
  border: 0.2px solid #848484;
  margin-top: 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
`;

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