import React from "react";
import "../../assets/styles/OurServices/OurServices.scss";

const Service = (props) => {
  return (
    <section className="services__item--single">
      <div className="services__item--icon">
        <i>{props.img}</i>
      </div>
      <h3 className="services__item--title">{props.title}</h3>
      <p className="services__item--subtitle">{props.subtitle}</p>
    </section>
  );
};

export default Service;
