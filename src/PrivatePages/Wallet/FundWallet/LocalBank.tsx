import React, { useState, useEffect } from "react";
import { VStack, DarkText, OutlinedInput, OutlinedSelect } from "../styles";
import WalletObj from "../../../classes/wallet.class";
import { toast } from "react-toastify";
import { FormError } from "../../PostRequest/Styles";

export default function LocalBank({
  formData,
  setformData,
  register,
  errors,
}: any) {
  const [bank, setBank]: any = useState({});
  const [formDetails, setFormDetails] = useState({
    bankName: "",
  });
  const handleOptionChange = (event: any) => {
    setFormDetails((_) => {
      return {
        bankName: event.target.value,
      };
    });
  };
  const handleAmountUpdate = (event: any) => {
    setformData((_: any) => {
      return {
        email: _.email,
        amount: event.target.value,
        full_name: _.fullName,
      };
    });
  };
  const handleNameUpdate = (event: any) => {
    setformData((_: any) => {
      return {
        email: _.email,
        amount: _.amount,
        full_name: event.target.value,
      };
    });
  };
  useEffect(() => {
    WalletObj.get_all_bank()
      .then((res) => {
        setBank(res);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [WalletObj]);

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
        {errors.amount && <FormError>{errors.amount.message}</FormError>}
        <OutlinedInput
          {...register("amount", { required: true })}
          placeholder="$0.00"
          type="number"
          value={formData.amount}
          onChange={(e) => handleAmountUpdate(e)}
        />
      </VStack>
      {/* <VStack
        style={{
          width: "100%",
          gap: "5px",
        }}
      >
        <DarkText>Bank Name</DarkText>
        <OutlinedSelect
          value={formDetails.bankName}
          onChange={(e) => handleOptionChange(e)}
        >
          {bank?.data &&
            bank.data.map((_: any, i: any) => {
              return (
                <option value={_.code} key={i}>
                  {_.name}
                </option>
              );
            })}
        </OutlinedSelect>
      </VStack> */}
      <VStack
        style={{
          width: "100%",
          gap: "5px",
        }}
      >
        <DarkText>Account Name</DarkText>
        {errors.name && <FormError>{errors.name.message}</FormError>}
        <OutlinedInput
          {...register("name", { required: true })}
          placeholder="lawblaze"
          value={formData.fullName}
          onChange={(e) => handleNameUpdate(e)}
        />
      </VStack>
    </VStack>
  );
}