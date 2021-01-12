import React from "react";
import { motion } from "framer-motion";
import FirstImpression from "./FirstImpression";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <FirstImpression
        title="Start to invest."
        subtitle="Our purpose is to get you closer to the finance world, learning the mathematic and economic language. Also, we advise you with your personal finances."
      />
      <OurServices />
      <AboutUs
        title="About us"
        subtitle="We are a organization made of mathematics, economists and programmers, who wants to make more accesible the financial world to everybody."
        question1="To who is this heading to?"
        answer1="Students, professionals and anybody interested to learn."
        question2="Do I need a previous knowledge?"
        answer2="No! PlautUs will guide you all the way through."
        question3="And why I should use PlautUs?"
        answer3="PlautUs will assist you in a clear, consise and direct way, in order to make the right decision in your finances."
      />
      <Footer />
    </motion.div>
  );
};

export default Main;
