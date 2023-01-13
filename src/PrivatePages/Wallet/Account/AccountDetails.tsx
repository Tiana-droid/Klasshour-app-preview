import React, { useEffect, useState } from "react";
import {
  VStack,
  DarkText,
  HStack,
  OutlinedInput,
  OutlinedSelect,
} from "../styles";
import WalletObj from "../../../classes/wallet.class";
import { toast } from "react-toastify";

export default function AccountDetail() {
  const [bank, setBank]: any = useState({});
  const [formDetails, setFormDetails] = useState({
    accountNumber: "",
    bankName: "",
    accountName: "",
  });
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

  const handleOptionChange = (event: any) => {
    setFormDetails((_) => {
      return {
        bankName: event.target.value,
        accountNumber: _.accountNumber,
        accountName: _.accountName,
      };
    });
  };
  const handleAccount = (event: any) => {
    setFormDetails((_) => {
      return {
        bankName: _.bankName,
        accountNumber: event.target.value,
        accountName: _.accountName,
      };
    });
  };

  useEffect(() => {
    if (
      formDetails.accountNumber.length >= 9 &&
      formDetails.accountNumber.length <= 12 &&
      formDetails.bankName
    ) {
      WalletObj.verify_account_number({
        account_number: formDetails.accountNumber,
        bank_code: formDetails.bankName,
      }).then((res: any) => {
        if (res?.message === "Account number resolved") {
          setFormDetails((_) => {
            return {
              bankName: _.bankName,
              accountNumber: _.accountNumber,
              accountName: res.data.account_name,
            };
          });
        } else {
          toast.error("unable to resolve account number");
          setFormDetails((_) => {
            return {
              bankName: _.bankName,
              accountNumber: _.accountNumber,
              accountName: "unable to resolve account number",
            };
          });
        }
      });
    }
  }, [formDetails.accountNumber, formDetails.bankName]);
  return (
    <VStack
      style={{
        marginTop: "20px",
        gap: "10px",
      }}
    >
      <HStack
        style={{
          alignItems: "center",
        }}
      >
        <DarkText
          style={{
            width: "100%",
          }}
        >
          Account Number
        </DarkText>
        <OutlinedInput
          type="text"
          placeholder="1123451234"
          onChange={(e) => handleAccount(e)}
        />
      </HStack>
      <HStack
        style={{
          alignItems: "center",
        }}
      >
        <DarkText
          style={{
            width: "100%",
          }}
        >
          Bank Name
        </DarkText>
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
      </HStack>
      <HStack
        style={{
          alignItems: "center",
        }}
      >
        <DarkText
          style={{
            width: "100%",
          }}
        >
          Account Name
        </DarkText>
        <OutlinedInput
          value={formDetails.accountName}
          readOnly={formDetails.accountName ? true : false}
          onChange={() => {
            ("");
          }}
          type="text"
          placeholder="First Name"
        />
      </HStack>
    </VStack>
  );
}