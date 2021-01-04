import React from "react";
import { motion } from "framer-motion";
import NavHome from "../Navbar/NavHome";
import NavItem from "../Navbar/NavItem";
import "../../assets/styles/Navbar/Navbar.scss";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <nav className="nav__container">
        <NavHome href="/" text="PlautUs." />
        <ul className="nav__item--container">
          <NavItem href="/aboutus" text="About us." />
          <NavItem href="/ouroffer" text="What we offer." />
        </ul>
        <NavHome href="/signin" text="Sign in." />
      </nav>
    </motion.div>
  );
};

export default Navbar;
