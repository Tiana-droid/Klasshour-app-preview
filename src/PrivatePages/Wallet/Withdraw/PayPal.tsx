import { VStack, DarkText, OutlinedInput } from "../styles";

export default function PayPal() {
  return (
    <VStack
      style={{
        width: "100%",
        gap: "20px",
      }}
    >
      <DarkText>Amount</DarkText>
      <OutlinedInput placeholder="$0.00" />
    </VStack>
  );
}