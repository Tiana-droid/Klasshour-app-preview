import React, { useState } from "react";
import Logo from "../../Assets/images/Logo.svg";
import { DBHeader, DispayDesktop, DropDownContainer } from "./Styles";
import Avatar from "../../Components/Avatar";
import ArrowDown from "../../Assets/icons/ArrowDown.svg";
import { Logout } from "../../utils/some";
import { Link } from "react-router-dom";

export default function DashboardHeader() {
  const [showDropdown, setshowDropdown] = useState(false);

  const UserAvater = () => {
    return (
      <div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            padding: "0 0.2rem",
            cursor: "pointer",
          }}
          onClick={() => setshowDropdown(!showDropdown)}
        >
          <Avatar size="2.4rem" />
          <DispayDesktop>
            <img src={ArrowDown} style={{ width: "1rem" }} />
          </DispayDesktop>
        </div>
        <DropDownContainer
          // onMouseLeave={() => setshowDropdown(!showDropdown)}
          showDropdown={showDropdown}
        >
          <ul>
            <li>Profile Settings</li>
            <li>Wallet</li>
            <li>My Group</li>
            <li onClick={() => Logout()}>Logout</li>
          </ul>
        </DropDownContainer>
      </div>
    );
  };
  return (
    <>
      <DBHeader>
        <div>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div>{UserAvater()}</div>
      </DBHeader>
    </>
  );
}
