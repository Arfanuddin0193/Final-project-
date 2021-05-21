import React from "react";
import Connect from "./connect/Connect";
import Design from "./design/Design";
import Develop from "./develop/Develop";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import AboutUs from "./aboutUs/AboutUs";
import Careers from "./careers/Careers"
import Innovate from "./innovate/Innovate";
import "./custom.css";
import "./header-img.css";
import "./style-info.css";
import "./style.css";
import Home from "./home/Home";
import Footer from "./home/Footer/Footer";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/connect" component={Connect} />
        <Route path="/develop" component={Develop} />
        <Route path="/design" component={Design} />
        <Route path="/careers" component={Careers} />
        <Route path="/innovate" component={Innovate} />
        
      </Switch>
      <Footer />
    </>
  );
}

export default App;
