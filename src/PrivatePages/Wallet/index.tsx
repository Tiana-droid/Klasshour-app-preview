import React, { useState, useEffect } from "react";
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import {
  Header,
  WalletLayout,
  BalanceContainer,
  Flex,
  WalletHeader,
  WalletAmount,
  ButtonContainer,
  Button,
  VStack,
  ATMCard,
  ATMCardDetails,
  DarkText,
  LightText,
  Box,
  HStack,
  ActionButton,
  OutlinedInput,
  OutlinedSelect,
  CardStats,
  StatusText,
} from "./styles";
import { AppColors } from "../../utils/constants";
import Account from "./Account";
import RecentActivity from "./Activity";
import Ellipse1 from "../../Assets/icons/Ellipse 3.png";
import Ellipse2 from "../../Assets/icons/Ellipse 4.png";
import { PieChart, Pie, Cell } from "recharts";
import { getStoredClientUser } from "../../utils/LS";
import { ActivityData } from "../../Shared/ActivityData";

export default function Index() {
  const [page, setPage] = useState("Account Details");
  const [Stats, setStats] = useState({
    sucess: 0,
    pending: 0,
    failure: 0,
  });
  const {walletBalance}  = getStoredClientUser()
console.log(getStoredClientUser())
  // test data from activity data
  useEffect(() => {
    for (let i = 0; i < ActivityData.length; i++) {
      console.log(ActivityData[i].status, "activity");
      if (ActivityData[i].status === "Failed") {
        setStats((stat) => {
          return {
            ...stat,
            failure: stat.failure + 1,
          };
        });
      }
      if (ActivityData[i].status === "Pending") {
        setStats((stat) => {
          return {
            ...stat,
            pending: stat.pending + 1,
          };
        });
      }
      if (ActivityData[i].status === "Sucess") {
        setStats((stat) => {
          return {
            ...stat,
            sucess: stat.sucess + 1,
          };
        });
      }
    }
  }, [ActivityData]);

  // pie chart Data
  const data01 = [
    {
      name: "sucess",
      value: Stats.sucess,
    },
    {
      name: "faliure",
      value: Stats.failure,
    },
    {
      name: "pending",
      value: Stats.pending,
    },
  ];
  const COLORS = ["#009933", "#F33434", "#F1BF0D"];
  const handlePageChange = (page: string) => {
    setPage(page);
  };
  return (
    <UserLayout>
      <Header>Wallet</Header>
      <WalletLayout>
        <VStack>
          <BalanceContainer>
            <Flex>
              <WalletHeader>Amount in wallet</WalletHeader>
              <WalletAmount>&#8358;{walletBalance}</WalletAmount>
            </Flex>
            <HStack
              style={{
                alignItems: "center",
              }}
            >
              <img
                alt={""}
                style={{
                  mixBlendMode: "overlay",
                  transform: "rotate(-53deg)",
                }}
                width="100px"
                height="87px"
                src={Ellipse1}
              />

              <img
                alt={""}
                style={{
                  mixBlendMode: "overlay",
                  transform: "rotate(130deg)",
                }}
                width="90px"
                height="107px"
                src={Ellipse2}
              />
            </HStack>
          </BalanceContainer>
          <ButtonContainer>
            <Button
              href="/withdraw"
              style={{
                background:
                  "linear-gradient(93.34deg, #EF0000 29.02%, #000000 104.1%)",
              }}
            >
              Withdraw
            </Button>
            <Button
              href="/fund-wallet"
              style={{
                background:
                  "linear-gradient(94.06deg, #009933 33.95%, #000000 109.95%)",
              }}
            >
              Fund Wallet
            </Button>
          </ButtonContainer>
        </VStack>
        <VStack
          style={{
            gap: "10px",
          }}
        >
          <ATMCard>
            <ATMCardDetails>567*******7890</ATMCardDetails>
            <ATMCardDetails
              style={{ textAlign: "center", letterSpacing: "4px" }}
            >
              XXXX-XXXX-XXXX
            </ATMCardDetails>
            <ATMCardDetails
              style={{
                alignSelf: "flex-end",
              }}
            >
              Lawblaze
            </ATMCardDetails>
          </ATMCard>
          <CardStats>
            <PieChart width={430} height={150}>
              <Pie
                data={data01}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={50}
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <HStack>
              {data01.map((_, index) => {
                return (
                  <HStack
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    key={index}
                  >
                    <Box
                      style={{
                        width: "5px",
                        height: "5px",
                        background: `${
                          (_.name === "pending" && "#F4BE37") ||
                          (_.name === "faliure" && "#FF0000") ||
                          (_.name === "sucess" && "#219653")
                        }`,
                        borderRadius: "100%",
                      }}
                    ></Box>
                    <StatusText>{_.name}</StatusText>
                  </HStack>
                );
              })}
            </HStack>
          </CardStats>
        </VStack>
      </WalletLayout>
      <WalletLayout>
        <Box>
          <HStack
            style={{
              marginTop: "20px",
              borderBottom: "0.5px solid #E2E2E2",
              justifyContent: "space-between",
            }}
          >
            {page === "Account Details" ? (
              <HStack>
                <LightText
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handlePageChange("Recent Activites")}
                >
                  Recent Activites
                </LightText>
                <DarkText
                  onClick={() => handlePageChange("Account Details")}
                  style={{
                    borderBottom: "1px solid ",
                    cursor: "pointer",
                  }}
                >
                  Account Details
                </DarkText>
              </HStack>
            ) : (
              <HStack>
                <DarkText
                  onClick={() => handlePageChange("Recent Activites")}
                  style={{
                    borderBottom: "1px solid ",
                    cursor: "pointer",
                  }}
                >
                  Recent Activites
                </DarkText>
                <LightText
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handlePageChange("Account Details")}
                >
                  Account Details
                </LightText>
              </HStack>
            )}

            {page === "Recent Activites" ? (
              <HStack
                style={{
                  alignItems: "center",
                  width: "40%",
                }}
              >
                <OutlinedInput
                  placeholder="Search "
                  style={{
                    height: "30px",
                  }}
                />
                <OutlinedSelect
                  style={{
                    borderColor: "#009933",
                    color: "#009933",

                    height: "30px",
                  }}
                >
                  <option>Filter</option>
                  <option>SUcess</option>
                </OutlinedSelect>
              </HStack>
            ) : (
              <HStack>
                <ActionButton
                  style={{
                    color: `${AppColors.brandRed}`,
                  }}
                >
                  Cancel
                </ActionButton>
                <ActionButton
                  style={{
                    background: `${AppColors.brandRed}`,
                    color: "#fff",
                  }}
                >
                  Save
                </ActionButton>
              </HStack>
            )}
          </HStack>
          <VStack
            style={{
              padding: "10px",
            }}
          >
            {page === "Recent Activites" ? <RecentActivity /> : <Account />}
          </VStack>
        </Box>
      </WalletLayout>
    </UserLayout>
  );
}