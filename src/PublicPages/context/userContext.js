import React, { createContext, useState, useContext } from "react";

//creating context for the user
// context
export const EmailContext = createContext();
export const SetEmailContext = createContext();

export default function UserContext({ children }) {
  //states
  const [email, setemail] = useState("");
  return (
    <EmailContext.Provider value={email}>
      <SetEmailContext.Provider value={setemail}>
        {children}
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
