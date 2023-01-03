/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import UserLayout from "../../../Layouts/UserLayout/UserLayout";
import { VStack, DarkText, HStack, ActionButton, NavLink } from "../styles";
import Card from "./Card";
import PayPal from "./PayPal";
import BackIcon from "../../../Assets/icons/Vector.png";

export default function Index() {
  const [payment, setPayment] = useState("card");

  const handleChangePayment = (type: string) => {
    setPayment(type);
  };

  return (
    <UserLayout>
      <HStack
        style={{
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img height={14} src={BackIcon} />
        <NavLink href="/wallet">Wallet</NavLink>
      </HStack>

      <VStack
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderTop: "3px solid #161B45",
          width: "60%",
          margin: "auto",
          padding: "10px",
          gap: "20px",
          background: "#fff",
        }}
      >
        <DarkText
          style={{
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "20px",
            marginBottom: "20px",
          }}
        >
          Withdraw
        </DarkText>
        <HStack>
          <ActionButton
            onClick={() => handleChangePayment("card")}
            style={{
              width: "120px",
              height: "50px",
              color: `${payment === "card" ? "#ffffff" : "#161B45"}`,
              background: `${payment === "card" ? "#161B45" : "#eee"}`,
            }}
          >
            Local Bank
          </ActionButton>
          <ActionButton
            onClick={() => handleChangePayment("Paypal")}
            style={{
              width: "120px",
              height: "50px",
              color: `${payment === "Paypal" ? "#ffffff" : "#161B45"}`,
              background: `${payment === "Paypal" ? "#161B45" : "#eeeeee"}`,
            }}
          >
            Paypal
          </ActionButton>
        </HStack>
        {payment === "Paypal" ? <PayPal /> : <Card />}
        <ActionButton
          style={{
            width: "100%",
            height: "50px",
            color: "#fff",
            background: "#F15E38",
          }}
        >
          Withdraw
        </ActionButton>
      </VStack>
    </UserLayout>
  );
}