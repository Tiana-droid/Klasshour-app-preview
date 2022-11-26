import React from "react";
import styled from "styled-components";

type InputFiledPropT = {
  width: string;
};

const InputGroup = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 0.4rem;
  border-radius: 9px;
  margin-bottom: 1rem;
`;
const InputField = styled.input`
  width: ${(prop) => (prop.width ? prop.width : "100%")};
  height: 50px;
  outline-style: none;
  background: #fff;
  border: none;
  /* border-radius: 9px; */
  padding: 0 0.4rem;
  -webkit-appearance: none;
  ::placeholder {
    color: #848484;
  }
`;

type InputPropT = {
  Icon?: any;
  type: string;
  placeHolder?: string;
  required?: boolean;
  validation?: any;
  value?: string | number | readonly string[] | undefined;
};

export default function Input({
  Icon,
  type,
  placeHolder,
  required,
  value,
  validation,
}: InputPropT) {
  const WithIcon = () => {
    return (
      <InputGroup>
        <img src={Icon} alt={""} />
        <InputField
          type={type}
          placeholder={placeHolder}
          width="80%"
          value={value}
          required={required}
          {...validation}
        />
      </InputGroup>
    );
  };
  return (
    <>
      {Icon && WithIcon()}
      {!Icon && (
        <InputField
          type={type}
          placeholder={placeHolder}
          required={required}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value)
          }
        />
      )}
    </>
  );
}
