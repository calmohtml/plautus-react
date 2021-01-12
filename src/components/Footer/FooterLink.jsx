import React from "react";
import { Link } from "react-router-dom";

const FooterLink = (props) => {
  return (
    <div className="footer__links">
      <Link to={props.link}>{props.text}</Link>
    </div>
  );
};

export default FooterLink;
