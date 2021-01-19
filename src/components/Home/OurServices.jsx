import React from "react";
import Service from "./Service";
import Button from "../Button/Button";
import {
  FaCalculator,
  FaBalanceScale,
  FaHandHoldingUsd,
  FaSuitcase,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/styles/OurServices/OurServices.scss";

const OurServices = () => {
  return (
    <section className="services__wrapper">
      <h2 className="services__title">We offer:</h2>
      <div className="services__item">
        <Service
          img={<FaCalculator />}
          title="Math."
          subtitle="Calculus, Algebra and Statistics."
        />
        <Service
          img={<FaBalanceScale />}
          title="Law."
          subtitle="Accountability, Regulation and Taxation."
        />
        <Service
          img={<FaHandHoldingUsd />}
          title="Finances."
          subtitle="Analysis, Administration and Markets."
        />
        <Service
          img={<FaSuitcase />}
          title="Portfolio."
          subtitle="Advising, Investor Profile and Savings."
        />
      </div>
      <Link to="/details">
        <Button text="More info." />
      </Link>
    </section>
  );
};

export default OurServices;
