import React from "react";
import { motion } from "framer-motion";
import OurMissionFirstImpression from "./OurMissionFirstImpression";
import OurMissionValues from "./OurMissionValues";
import {
  FaAddressCard,
  FaGraduationCap,
  FaHandshake,
  FaComment,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import Footer from "../Footer/Footer";

const OurMission = () => {
  return (
    <motion.div
      className="wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="ourMission__wrapper">
        <OurMissionFirstImpression
          h2title="Our mission."
          h3title="There's no need to know it all, just surround of people who know
          something."
          h3text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          h4text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            dolore impedit reiciendis quasi esse, corporis sunt aspernatur
            fugiat earum tenetur? Ex cum temporibus atque est nulla dolores
            repellendus eligendi quos commodi mollitia voluptatum, reiciendis
            rerum reprehenderit odio. Quaerat optio, praesentium labore ipsa,
            pariatur hic autem, sed aliquam laboriosam cupiditate sit."
        />
        <section className="ourMission__values">
          <OurMissionValues
            valueimg={<FaAddressCard />}
            valueh3="Transparency."
            valueh4="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nihil nulla vel culpa odit, similique inventore nesciunt architecto quasi aliquid."
          />
          <OurMissionValues
            valueimg={<FaGraduationCap />}
            valueh3="Professional."
            valueh4="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nihil nulla vel culpa odit, similique inventore nesciunt architecto quasi aliquid."
          />
          <OurMissionValues
            valueimg={<FaHandshake />}
            valueh3="Commitment."
            valueh4="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nihil nulla vel culpa odit, similique inventore nesciunt architecto quasi aliquid."
          />
          <OurMissionValues
            valueimg={<FaComment />}
            valueh3="Trustworthy."
            valueh4="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nihil nulla vel culpa odit, similique inventore nesciunt architecto quasi aliquid."
          />
          <OurMissionValues
            valueimg={<FaShieldAlt />}
            valueh3="Safe."
            valueh4="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nihil nulla vel culpa odit, similique inventore nesciunt architecto quasi aliquid."
          />
          <OurMissionValues
            valueimg={<FaUsers />}
            valueh3="Honest."
            valueh4="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nihil nulla vel culpa odit, similique inventore nesciunt architecto quasi aliquid."
          />
        </section>
        <Footer />
      </section>
    </motion.div>
  );
};

export default OurMission;
