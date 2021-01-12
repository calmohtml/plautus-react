import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/Navbar/Navbar.scss";

const NavHome = (props) => {
  return (
    <div>
      <NavLink to={props.href}>
        <h2>{props.text}</h2>
      </NavLink>
    </div>
  );
};

export default NavHome;
