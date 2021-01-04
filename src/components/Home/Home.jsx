import React from "react";
import { motion } from "framer-motion";
import "../../assets/styles/Home/Home.scss";

const Main = () => {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>This is PlautUs.</h2>
    </motion.div>
  );
};

export default Main;
