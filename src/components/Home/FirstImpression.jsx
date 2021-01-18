import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import investing from "../../assets/static/investing.svg";
import "../../assets/styles/App.scss";
import "../../assets/styles/Home/Home.scss";

const FirstImpression = (props) => {
  return (
    <section className="home__wrapper">
      <div className="home__item">
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <Link to="/memberships">
          <Button text="I want to be a member." />
        </Link>
      </div>
      <div className="home__item">
        <figure>
          <img src={investing} alt="Finance drawing" />
        </figure>
      </div>
    </section>
  );
};

export default FirstImpression;
