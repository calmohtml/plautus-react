import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
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
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default App;
