import React, { createContext, useState, useContext } from "react";
import SecureLS from "secure-ls";

var ls = new SecureLS({ encodingType: "rc4" });
//creating context for the user
// context
export const EmailContext = createContext();
export const SetEmailContext = createContext();
export const UserDataContext = createContext();
export const SetUserDataContext = createContext();
export default function UserContext({ children }) {
  //states
  const [email, setemail] = useState("");

  //local storage
  function setuserData(data) {
    return ls.set("userData", JSON.stringify(data));
  }

  function userData() {
    return JSON.parse(ls.get("userData"));
  }

  return (
    <EmailContext.Provider value={email}>
      <SetEmailContext.Provider value={setemail}>
        <UserDataContext.Provider value={userData}>
          <SetUserDataContext.Provider value={setuserData}>
            {children}
          </SetUserDataContext.Provider>
        </UserDataContext.Provider>
      </SetEmailContext.Provider>
    </EmailContext.Provider>
  );
}
//custom contex
export function Email() {
  return useContext(EmailContext);
}
export function SetEmail() {
  return useContext(SetEmailContext);
}

export function SetuserData() {
  return useContext(SetUserDataContext);
}

export function UserData() {
  return useContext(UserDataContext);
}
