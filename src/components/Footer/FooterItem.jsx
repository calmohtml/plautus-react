import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/Footer/Footer.scss";

const FooterItem = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <i className="footer__item--icon">{props.icon}</i>
      </Link>
    </div>
  );
};

export default FooterItem;
