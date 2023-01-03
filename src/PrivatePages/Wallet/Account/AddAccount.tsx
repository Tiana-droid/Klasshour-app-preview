/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Vector from "../../../Assets/icons/Vector.svg";
import { VStack, DarkText, ActionButton } from "../styles";
import { AppColors } from "../../../utils/constants";

export default function AddAccount({ addAccount }: any) {
  return (
    <VStack
      style={{
        alignItems: "center",
        gap: "16px",
        marginTop: "15px",
        backgroundColor: `${AppColors.pageBackground}`,
        padding: "10px",
      }}
    >
      <img width={66} src={Vector} />
      <DarkText>No Account Details</DarkText>
      <ActionButton
        style={{
          background: `${AppColors.brandRed}`,
          color: "#fff",
          width: "200px",
          height: "50px",
        }}
        onClick={() => addAccount(true)}
      >
        Click here to add
      </ActionButton>
    </VStack>
  );
}