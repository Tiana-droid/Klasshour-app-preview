/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import UserLayout from "../../../Layouts/UserLayout/UserLayout";
import { VStack, DarkText, HStack, ActionButton, NavLink } from "../styles";
import PayPal from "./PayPal";
import BackIcon from "../../../Assets/icons/Vector.png";
import LocalBank from "./LocalBank";
import { getStoredClientUser } from "../../../utils/LS";
import WalletObj from "../../../classes/wallet.class";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import Spinner from "../../../Components/Spinner";
import { useNavigate } from "react-router-dom";

type InputsPropT = {
  amount: string;
  name: string;
};

export default function Index() {
  const [payment, setPayment] = useState("card");
  const navigate= useNavigate()
  const {email} = getStoredClientUser()
  const [formData, setFormData] = useState({
    email,
    amount: 0.00,
    full_name: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const handleFundWallet = () => {
    setisLoading(true)
    WalletObj.fund_wallet(formData)
      .then((res: any) => {
        setisLoading(false);
      window.open(res.url)
      })
      .catch((err) => {
        toast.error(err?.data?.message);
        setisLoading(false);
      });
  }
  const handleChangePayment = (type: string) => {
    setPayment(type);
  };

  const schema = Yup.object({
    amount: Yup.string().required("Required!"),
    name: Yup.string().required("Required!"),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsPropT>({
    resolver: yupResolver(schema),
  });

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
          Fund Wallet
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
            Card
          </ActionButton>
          <ActionButton
            disabled
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
        <VStack
          as="form"
          style={{ width: "100%" }}
          onSubmit={handleSubmit(handleFundWallet)}
        >
          {payment === "Paypal" ? (
            <PayPal />
          ) : (
            <LocalBank
              formData={formData}
              register={register}
              errors={errors}
              setformData={setFormData}
            />
          )}
          <ActionButton
            onClick={handleFundWallet}
            style={{
              width: "100%",
              height: "50px",
              color: "#fff",
              background: `${payment === "Paypal" ? "#161B45" : "#F15E38"}`,
            }}
          >
            {payment === "Fund with Paypal" ? (
              "Paypal"
            ) : isLoading ? (
              <Spinner isLoading={isLoading} />
            ) : (
              "Fund Wallet"
            )}
          </ActionButton>
        </VStack>
      </VStack>
    </UserLayout>
  );
}