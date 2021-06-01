import React from "react";
import Navbar from "./ReactMenu/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Redirect, Route, Switch } from "react-router";
import Home from "./ReactMenu/Home";
import Footer from './ReactMenu/Footer';
import Contact from "./ReactMenu/Contact";
import About from "./ReactMenu/About";
import Service from "./ReactMenu/Service";

const App = () => {
return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path= "/" component = {Home} />
    <Route exact path= "/about" component = {About} />
    <Route exact path= "/service" component = {Service} />
    <Route exact path= "/contact" component = {Contact} />
      <Redirect t0 = "/" />
       </Switch>
       <Footer/>
    </>
);

};

export default App; 