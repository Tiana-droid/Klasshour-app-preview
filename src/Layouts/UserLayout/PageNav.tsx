import React from "react";
import { Link } from "react-router-dom";
import { NavButton, Pagenav } from "./Styles";

export default function PageNav({ isActive, title }: any) {
  return (
    <div>
      <Pagenav>
        <Link to="/timeline">
          <NavButton isActive={title === "Requests" ? true : false}>
            Requests
          </NavButton>
        </Link>

        <Link to="/class">
          <NavButton isActive={title === "Class" ? true : false}>
            Class
          </NavButton>
        </Link>

        <Link to="/past-class">
          <NavButton isActive={title === "Past Class" ? true : false}>
            Past Class
          </NavButton>
        </Link>
      </Pagenav>
    </div>
  );
}
