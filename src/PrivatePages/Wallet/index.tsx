import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack"
import UserLayout from "../../Layouts/UserLayout/UserLayout";
import {
  WalletLayout,
  BalanceContainer,
  Flex,
  WalletHeader,
  WalletAmount,
  Button,
  VStack,
  DarkText,
  LightText,
  Box,
  HStack,
  ActionButton,
  OutlinedInput,
  OutlinedSelect,
  Center,
  Modal,
  Container,
  Form,
  FormControl,
  Dismiss
} from "./styles";
import userIcon from '../../Assets/icons/UserIcon.svg'
import { AppColors } from "../../utils/constants";
import Account from "./Account";
import RecentActivity from "./Activity";
import { getStoredClientUser } from "../../utils/LS";
import { ActivityData } from "../../Shared/ActivityData";
import { toast } from "react-toastify";
import WalletObj from "../../classes/wallet.class";
import userOBJ from "../../classes/user.class";

const ModalBox = (props: any) => {
  const { email, fullname } = getStoredClientUser()
  const publicKey = "pk_live_e05506cfbfe9a85fa668d2f34b16ea74cbf48795"
  const [amount, setAmount] = useState(0)
   const handlePaystackSuccessAction = ({status,reference}:any) => {
      // Implementation for whatever you want to do with reference and after success call.
     if (status === "success") {
       WalletObj.fund_wallet({ email, reference }).then((resp: any) => {
         toast.success(resp.message)
       })
     }
     props.onClick()
    };
   const componentProps =  {
    email,
    amount:amount*100,
    metadata: {
      name:fullname,
      phone: "07067903042",
      custom_fields:[]
    },
    publicKey,
    text: "Pay Now",
     onSuccess: (reference:void)=>handlePaystackSuccessAction(reference),
    
    onClose: () => alert("Wait! Don't leave :("),
   }


  return <React.Fragment>
    {props.isShow  &&<Modal >
      <Container >
        <Dismiss onClick={props.onClick}>&times;</Dismiss>
        <Form onSubmit={()=>alert("hi")}>
          <FormControl>
            <label htmlFor="">Amount</label>
            <input type="number" value={amount} onChange={ (e:any)=>setAmount(e.target.value)} />
          </FormControl>
        </Form>
        {!amount ? <button disabled >Pay Now</button>:
          <PaystackButton {...componentProps} onClose={ props.onClick} />}
        
      </Container>
    </Modal>}
  </React.Fragment>
}
export default function Index() {
  const {userType,fullname} = getStoredClientUser()
  const [page, setPage] = useState("Recent Activites");
  const [isShow, setIsShow] = useState(false)
  const [wBalance,setwBalance] = useState(0)
  
  const [Stats, setStats] = useState({
    sucess: 0,
    pending: 0,
    failure: 0,
  });
  const {userID}  = getStoredClientUser()
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
  userOBJ.get_user_balance(userID).then((res: any) => {
   setwBalance( res.walletBalance)
  })


  }, [ActivityData]);
  const handlePageChange = (page: string) => {
    setPage(page);
  };
  return (
    <UserLayout>
      <WalletLayout>
        <VStack>
          <BalanceContainer>
            <Flex>
              <WalletHeader>{fullname}</WalletHeader>
              <div><img src={userIcon} alt="" /></div>
            </Flex>
            <Center>
              <WalletAmount>NGN {wBalance.toLocaleString()}</WalletAmount>
             {userType==="Student"?  <Button onClick={()=>setIsShow(!isShow)}>
             Fund Wallet
            </Button>: <Button disabled={!wBalance}>
             Withdraw Fund
            </Button>}
              </Center>
          </BalanceContainer>
          {/* <ButtonContainer>
            <Button
             disabled={getStoredClientUser().userType === "Student"? true : false }
            onClick={()=> window.location.replace('/withdraw')}
              style={{
                background:`${getStoredClientUser().userType === "Student"? '#ccc' :'linear-gradient(93.34deg, #EF0000 29.02%, #000000 104.1%)' }`
          
              }}
            >
              Withdraw
            </Button>
            <Button
            disabled={getStoredClientUser().userType !== "Student"?true : false }
            onClick={()=> window.location.replace('/fund-wallet')}
              style={{
                background: `${getStoredClientUser().userType !== "Student" ? ' #ccc' : 'linear-gradient(94.06deg, #009933 33.95%, #000000 109.95%)' }`
              }}
            >
              Fund Wallet
            </Button>
          </ButtonContainer> */}
        </VStack>
        <ModalBox isShow={isShow} onClick={()=>setIsShow(!isShow)} />
      </WalletLayout>
     <WalletLayout>
        {getStoredClientUser().userType !== "Student" ? (
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
        ) : (
          <Box>
            <HStack
              style={{
                marginTop: "20px",
                borderBottom: "0.5px solid #E2E2E2",
                justifyContent: "space-between",
              }}
            >
              <HStack>
                <DarkText
                  style={{
                    borderBottom: "1px solid ",
                    cursor: "pointer",
                  }}
                >
                  Recent Activites
                </DarkText>
              </HStack>
            </HStack>
            <RecentActivity />
          </Box>
        )}
      </WalletLayout>
    </UserLayout>
  );
}

