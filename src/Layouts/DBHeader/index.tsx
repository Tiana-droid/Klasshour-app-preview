import React, { useState } from "react";
import Logo from "../../Assets/images/Logo.svg";
import { DBHeader, DispayDesktop, DropDownContainer } from "./Styles";
import Avatar from "../../Components/Avatar";
import ArrowDown from "../../Assets/icons/ArrowDown.svg";

export default function DashboardHeader() {
  const [showDropdown, setshowDropdown] = useState(false);

  const UserAvater = () => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            padding: "0 1rem",
            cursor: "pointer",
          }}
          onClick={() => setshowDropdown(!showDropdown)}
        >
          <Avatar size="2.4rem" />
          <DispayDesktop>
            <img src={ArrowDown} style={{ width: "1rem" }} />
          </DispayDesktop>
        </div>
        <DropDownContainer showDropdown={showDropdown}>
          <ul>
            <li>Profile Settings</li>
            <li>Wallet</li>
            <li>My Group</li>
            <li>Logout</li>
          </ul>
        </DropDownContainer>
      </div>
    );
  };
  return (
    <DBHeader>
      <div>
        <img src={Logo} />
      </div>
      <div>{UserAvater()}</div>
    </DBHeader>
  );
}
