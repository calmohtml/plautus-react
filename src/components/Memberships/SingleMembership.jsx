import React from "react";
import Button from "../Button/Button";
import "../../assets/styles/Memberships/Memberships.scss";

const SingleMembership = (props) => {
  return (
    <div className="singleMembership__container">
      <div className="singleMembership__item">
        <div className="singleMembership__card" id={props.background}>
          <label>{props.name}</label>
          <h3>
            <sup>$</sup>
            {props.price},<sup>99</sup>
          </h3>
          <i className="singleMembership__icon">{props.img}</i>
          <ul>
            <li>{props.packTitle}</li>
            <li>{props.subtitle1}</li>
            <li>{props.subtitle2}</li>
            <li>{props.subtitle3}</li>
          </ul>
          <Button text="Buy" />
        </div>
      </div>
    </div>
  );
};

export default SingleMembership;
