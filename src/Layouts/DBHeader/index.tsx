import React, { useState } from "react";
import Logo from "../../Assets/images/Logo.svg";
import Logo2 from "../../Assets/images/logo.png"
import { DBHeader, DispayDesktop, DropDownContainer } from "./Styles";
import Avatar from "../../Components/Avatar";
import ArrowDown from "../../Assets/icons/ArrowDown.svg";
import { Logout } from "../../utils/some";
import { Link } from "react-router-dom";
import { getStoredClientUser } from "../../utils/LS";
export default function DashboardHeader(props: any) {
const  {avatar}  = getStoredClientUser()
  const [showDropdown, setshowDropdown] = useState(false);
  const UserAvater = () => {
    // useEffect(() => {
    //   if (userID) {
    //     userOBJ.get_user_account().then((res:any) => {
    //     setImg(res.photo)
    //   })
    //   }
    // }, [])
    
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
          <Avatar size="2.4rem" photo={avatar} />
          <DispayDesktop>
            <img src={ArrowDown } style={{ width: "1rem" }} alt="" />
          </DispayDesktop>
        </div>
        <DropDownContainer
          // onMouseLeave={() => setshowDropdown(!showDropdown)}
          showDropdown={showDropdown}
        >
          <ul>
            {/* <li><a href="/settings">Profile Settings</a></li> */}
            <li><a href="/wallet">Wallet</a></li>
            {getStoredClientUser().userType !== "Tutor" && <li>My Group</li>}
            <li onClick={() => Logout()}>Logout</li>
          </ul>
        </DropDownContainer>
      </div>
    );
  };
  return (
    <>
      <DBHeader style={{
              background:props.backgroundColor === "light" ? "#fff" :"#161B45"
            }}>
        <div>
          <Link to="/">
            {props.backgroundColor ==="light" ?   <img src={ Logo2 } alt="logo" />:  <img src={ Logo } alt="logo" />}
            {/* <img src={ Logo } alt="logo" /> */}
          </Link>
        </div>
        <div>{UserAvater()}</div>
      </DBHeader>
    </>
  );
}
