import React, { Fragment } from "react";
import "../../assets/styles/OurMission/OurMission.scss";

const OurMissionValues = (props) => {
  return (
    <Fragment>
      <div className="ourMission__value">
        <i className="ourMission__icon" alt="Values image">
          {props.valueimg}
        </i>
        <h3>{props.valueh3}</h3>
        <h4>{props.valueh4}</h4>
      </div>
    </Fragment>
  );
};

export default OurMissionValues;
