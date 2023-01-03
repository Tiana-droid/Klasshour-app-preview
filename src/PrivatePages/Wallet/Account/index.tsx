import React, { useState } from "react";
import AccountDetail from "./AccountDetails";
import AddAccount from "./AddAccount";

export default function Index() {
  //has account
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <React.Fragment>
      {hasAccount ? (
        <AccountDetail />
      ) : (
        <AddAccount addAccount={setHasAccount} />
      )}
    </React.Fragment>
  );
}