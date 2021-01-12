import React from "react";
import FooterItem from "./FooterItem";
import FooterLink from "./FooterLink";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../../assets/styles/Footer/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div className="footer__items--wrapper">
        <h3 className="footer__title">PlautUs</h3>
        <div className="footer__items">
          <FooterItem link="/" icon={<FaFacebook />} />
          <FooterItem link="/" icon={<FaInstagram />} />
          <FooterItem link="/" icon={<FaTwitter />} />
          <FooterItem link="/" icon={<FaLinkedin />} />
        </div>
        <div className="footer__items">
          <FooterLink link="/" text="Privacy declaration" />
          <FooterLink link="/" text="Terms and conditions" />
          <FooterLink link="/" text="FAQ" />
          <FooterLink link="/" text="Students" />
        </div>
        <h3 className="footer__title">
          Copyright © 2021 PlautUs. All right reserved.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
