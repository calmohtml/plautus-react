import React, { Fragment } from "react";
import invest from "../../assets/static/invest.svg";
import "../../assets/styles/OurMission/OurMission.scss";

const OurMissionFirstImpression = (props) => {
  return (
    <Fragment>
      <section className="ourMission__title">
        <h2>{props.h2title}</h2>
        <h3>{props.h3title}</h3>
      </section>
      <section className="ourMission__items">
        <div className="ourMission__text">
          <h3>{props.h3text}</h3>
          <h4>{props.h4text}</h4>
        </div>
        <div className="ourMission__img">
          <figure>
            <img src={invest} alt="Invest image" />
          </figure>
        </div>
      </section>
    </Fragment>
  );
};

export default OurMissionFirstImpression;
