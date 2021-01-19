import React from "react";
import "../../assets/styles/Details/Details.scss";

const SingleDetail = (props) => {
  return (
    <details className="details__item">
      <summary className="details__summary">
        <h2>{props.h2detail}</h2>
      </summary>
      <div className="details__description">
        <h4>{props.h4detail}</h4>
      </div>
    </details>
  );
};

export default SingleDetail;
