import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/Navbar/Navbar.scss";

const NavItem = (props) => {
  return (
    <li className="nav__item">
      <NavLink to={props.href}>
        <h3>{props.text}</h3>
      </NavLink>
    </li>
  );
};

export default NavItem;
