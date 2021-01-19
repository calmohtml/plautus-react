import React from "react";
import professor from "../../assets/static/professor.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "../../assets/styles/AboutUs/AboutUs.scss";

const AboutUs = (props) => {
  return (
    <section className="aboutUs__wrapper">
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <div className="aboutUs__items">
        <div className="aboutUs__item">
          <figure>
            <img src={professor} alt="Finance drawing" />
          </figure>
        </div>
        <div className="aboutUs__item">
          <ul>
            <li>
              <h3>{props.question1}</h3>
              <p>{props.answer1}</p>
            </li>
            <li>
              <h3>{props.question2}</h3>
              <p>{props.answer2}</p>
            </li>
            <li>
              <h3>{props.question3}</h3>
              <p>{props.answer3}</p>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/ourmission">
        <Button text="More info." />
      </Link>
    </section>
  );
};

export default AboutUs;
