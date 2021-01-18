import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import Memberships from "../components/Memberships/Memberships";
import OurMission from "../components/OurMission/OurMission";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/memberships" component={Memberships} />
          <Route path="/ourmission" component={OurMission} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default App;
