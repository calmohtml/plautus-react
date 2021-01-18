import React from "react";
import { motion } from "framer-motion";
import SingleMembership from "./SingleMembership";
import {
  FaChessPawn,
  FaChessBishop,
  FaChessRook,
  FaChessQueen,
} from "react-icons/fa";
import Footer from "../Footer/Footer";
import "../../assets/styles/Memberships/Memberships.scss";

const Memberships = () => {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="memberships__wrapper">
        <section className="memberships__title">
          <h2>Memberships.</h2>
          <h3>Here starts begins your best investment.</h3>
        </section>
        <section className="singleMembership__wrapper">
          <SingleMembership
            background="bg-1"
            name="Standard"
            price="19"
            img={<FaChessPawn />}
            packTitle="Math Pack"
            subtitle1="Markets"
            subtitle2="Regulations"
            subtitle3="Taxation"
          />
          <SingleMembership
            background="bg-2"
            name="Premium"
            price="39"
            img={<FaChessBishop />}
            packTitle="Math Pack"
            subtitle1="Law Pack"
            subtitle2="Administration"
            subtitle3="Investor Profile"
          />
          <SingleMembership
            background="bg-3"
            name="Gold"
            price="59"
            img={<FaChessRook />}
            packTitle="Math Pack"
            subtitle1="Finances Pack"
            subtitle2="Portfolio Pack"
            subtitle3="Accountability"
          />
          <SingleMembership
            background="bg-4"
            name="Platinum"
            price="69"
            img={<FaChessQueen />}
            packTitle="Math Pack"
            subtitle1="Law Pack"
            subtitle2="Finances Pack"
            subtitle3="Portfolio Pack"
          />
        </section>
        <Footer />
      </section>
    </motion.div>
  );
};

export default Memberships;
