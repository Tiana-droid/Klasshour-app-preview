import React from "react";
import { VStack, DarkText, OutlinedInput } from "../styles";

export default function Card() {
  return (
    <VStack
      style={{
        width: "100%",
        gap: "20px",
      }}
    >
      <VStack
        style={{
          width: "100%",
          gap: "5px",
        }}
      >
        <DarkText>Amount</DarkText>
        <OutlinedInput placeholder="$0.00" />
      </VStack>
      <VStack
        style={{
          width: "100%",
          gap: "5px",
        }}
      >
        <DarkText>Card Number</DarkText>
        <OutlinedInput placeholder="1234567890" />
      </VStack>
    </VStack>
  );
}