import React from "react";
import { motion } from "framer-motion";
import SingleDetail from "./SingleDetail";
import financeDotDrawing from "../../assets/static/financeDotDrawing.svg";
import Footer from "../Footer/Footer";
import "../../assets/styles/Details/Details.scss";

const Details = () => {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="details__wrapper">
        <section className="details__title">
          <h2>Our value proposal.</h2>
        </section>
        <section className="details__texts">
          <div className="details__items">
            <SingleDetail
              h2detail="Math."
              h4detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, exercitationem inventore alias aperiam omnis sapiente animi velit vero nihil temporibus voluptas fugit error!"
            />
            <SingleDetail
              h2detail="Law."
              h4detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, exercitationem inventore alias aperiam omnis sapiente animi velit vero nihil temporibus voluptas fugit error!"
            />
            <SingleDetail
              h2detail="Finances."
              h4detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, exercitationem inventore alias aperiam omnis sapiente animi velit vero nihil temporibus voluptas fugit error!"
            />
            <SingleDetail
              h2detail="Portfolio."
              h4detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, exercitationem inventore alias aperiam omnis sapiente animi velit vero nihil temporibus voluptas fugit error!"
            />
          </div>
          <div className="details__img">
            <figure>
              <img src={financeDotDrawing} alt="Finance dot drawing" />
            </figure>
          </div>
        </section>
        <Footer />
      </section>
    </motion.div>
  );
};

export default Details;
