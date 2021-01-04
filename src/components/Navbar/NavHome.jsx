import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/Navbar/Navbar.scss";

const NavHome = (props) => {
  return (
    <div className="nav__home">
      <NavLink to={props.href} className="">
        <h2 className="">{props.text}</h2>
      </NavLink>
    </div>
  );
};

export default NavHome;
