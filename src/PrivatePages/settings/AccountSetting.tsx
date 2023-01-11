import React, { useState } from "react";
import { Flex, Input, Select, TextArea, Box } from "./Styles";
import { getStoredClientUser } from "../../utils/LS";
import { toast } from "react-toastify";
import userOBJ from "../../classes/user.class";
import Spinner from "../../Components/Spinner";

export const AccountSetting = ({ setotpActive ,setPassword}: any) => {
  const [password,setMYPassword] = useState("")
  const [cPassword, setCPassword] = useState("")
  const [isLoading, setisLoading] = useState(false)
  let strongPwd =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
  const handleOtp = async (e: any) => {
    setisLoading(true)
    e.preventDefault()
    if (password.trim() !== cPassword.trim()) {
       setisLoading(false)
      toast.error("Password not same")
      return
    }
    else if (!strongPwd.test(password)) {
       setisLoading(false)
      toast.error("Password must be Atleast 8 Characters is needed, One Uppercase, One Lowercase, One Number and One Special Case Character")
      return
     }
    else {
      await userOBJ.get_change_password_code({fullname : getStoredClientUser().fullname, email:getStoredClientUser().email})
      setotpActive(true)
      setPassword(password)
    }
    
}
  return (
    <form onSubmit={handleOtp} style={{ flexDirection: "column", width: "100%" }}>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <label>Email</label>
        <Input readOnly value={getStoredClientUser().email} />
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <label>password</label>
        <Input type={"password"} placeholder="**************" value={password} onChange={(e:any)=>setMYPassword(e.target.value)}/>
      </Flex>
      <Flex
        style={{
          gap: "10px",
          color: "#000",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <label>change password</label>
        <Input  type={"password"} placeholder="**************" value={cPassword} onChange={(e:any)=>setCPassword(e.target.value)} />
        
      </Flex>
      <Flex>
        <label htmlFor="" style={{visibility:"hidden"}}>button</label>
        <button
          disabled={isLoading}
          style={{
            height: "50px",
            background: "#F15E38",
            color: "#fff",
            border: 0,
            outline: "none",
            width: "100%",
            borderRadius: "3px",
          }}
        
        >
           {isLoading ? <Spinner isLoading={isLoading} /> : "click here to get otp"}
          
        </button>
      </Flex>
    </form>
  );
};
